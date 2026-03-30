# Netflix Clone — Limitations

This document lists features from the original Netflix UI that **cannot be fully implemented** within WebStudio's static template DSL (`@webstudio-is/template`). Each entry explains the limitation, a workaround, and the impact on user experience.

---

## 1. Dynamic Routing (`/movie/:id`, `/watch/:id`)

- **Feature Name:** Parameterized page routes
- **Why it cannot be implemented:** WebStudio's page model uses static paths (e.g., `/movie`, `/watch`). There is no support for dynamic route segments like `:id` in the template DSL. Each page definition requires a fixed `path` string.
- **Suggested workaround:** A single `/movie` page is created showing one representative movie (Stranger Things). A single `/watch` page serves as the shared player page. All movie cards link to these static pages.
- **Impact on UX:** Users cannot browse individual movie detail pages for different titles. All "More Info" links lead to the same detail page. In a production app, this would require a custom Remix route or API-driven dynamic page rendering.

---

## 2. Video Playback

- **Feature Name:** Embedded video player with actual playback controls
- **Why it cannot be implemented:** WebStudio's template DSL renders static HTML elements. While a `<video>` tag could theoretically be inserted, there is no JavaScript runtime to control playback, buffering, quality selection, or fullscreen toggle. The `renderData` function produces a static instance tree.
- **Suggested workaround:** The `/watch` page displays the movie poster at reduced opacity within a 16:9 container, with a static play button overlay and a decorative progress bar + transport controls. The visual appearance mimics a paused video player.
- **Impact on UX:** No actual video plays. The page is a visual mockup of the player interface. Users see what the experience *would* look like but cannot interact with media controls.

---

## 3. Hover Scale Animations on Movie Cards

- **Feature Name:** CSS `:hover` transform scale effect on movie poster cards
- **Why it cannot be implemented:** The `css` tagged template literal in `@webstudio-is/template` generates static CSS declarations only. It does not support pseudo-class selectors like `:hover`, `:focus`, or `:active`. The `renderData` function maps each `ws:style` to a flat list of `StyleDecl` entries with no pseudo-state handling.
- **Suggested workaround:** Cards include `transition: transform 0.3s ease` in their styles (which is valid but has no effect without a hover rule). The cards remain at their default scale. A future WebStudio enhancement could support pseudo-class styles.
- **Impact on UX:** The signature Netflix "zoom on hover" effect is missing. Cards appear static when the cursor moves over them. This is the single biggest gap in interactivity and feel.

---

## 4. Client-Side Search Filtering

- **Feature Name:** Real-time search filtering of movie titles
- **Why it cannot be implemented:** WebStudio generates static HTML. There is no client-side JavaScript execution environment to listen for input events, filter the DOM, or reactively update the results grid. The search `<input>` element is rendered but non-functional.
- **Suggested workaround:** The `/search` page displays all 8 movies in a grid layout below a decorative search bar. The page serves as a "browse all" view.
- **Impact on UX:** Users can see the search UI but typing into the input field does nothing. In a production implementation, this would require a Remix loader/action or SPA JavaScript integration.

---

## 5. Form Submission (Login)

- **Feature Name:** Login form authentication (email/password submit)
- **Why it cannot be implemented:** The template DSL produces static forms with no server-side action handlers or client-side JavaScript. The `<form>` element renders but has no `action` attribute leading to an authentication endpoint. The `<button type="submit">` triggers a no-op browser form submission.
- **Suggested workaround:** The login page is a pixel-accurate visual replica of the Netflix sign-in page (dark background, centered card, red button, "Remember me" checkbox, "Sign up now" link). It demonstrates the UI design without functional authentication.
- **Impact on UX:** The login form is cosmetic only. Clicking "Sign In" does not authenticate the user. In a full implementation, this would connect to WebStudio's built-in auth system or a custom Remix route.

---

## 6. Scroll Snap on Content Rows

- **Feature Name:** `scroll-snap-type: x mandatory` for carousel-like row scrolling
- **Why it cannot be implemented:** While `overflow-x: auto` works correctly for horizontal scrolling, `scroll-snap-type` and `scroll-snap-align` CSS properties may not be fully supported or reflected in WebStudio's builder canvas preview. The styles are included but behavior depends on the final rendering context.
- **Suggested workaround:** Content rows use `display: flex; overflow-x: auto; gap: 8px` for horizontal scrolling. Cards have `flex-shrink: 0` and `min-width: 200px` to ensure proper scroll behavior. The scroll works but without snap-to-card behavior.
- **Impact on UX:** Horizontal scrolling works smoothly in the published site but without the "snap to nearest card" effect that Netflix uses. Cards can stop at any scroll position.

---

## 7. Responsive Navbar Collapse (Mobile Menu)

- **Feature Name:** Hamburger menu / collapsible navigation on mobile viewports
- **Why it cannot be implemented:** A burger menu requires JavaScript to toggle visibility of the navigation links. WebStudio's template DSL has no mechanism for client-side state changes or class toggling.
- **Suggested workaround:** The navbar uses flex wrapping, so on smaller viewports the links will wrap to a new line rather than being hidden behind a hamburger icon. All links remain visible.
- **Impact on UX:** On mobile viewports, the navbar may feel crowded. It's functional but not the compact mobile experience Netflix provides with a bottom tab bar or hamburger menu.

---

## 8. Profile Dropdown Menu

- **Feature Name:** Clicking the profile avatar shows a dropdown with account options
- **Why it cannot be implemented:** Dropdown menus require JavaScript click handlers to toggle visibility. The template DSL produces only static elements.
- **Suggested workaround:** The profile avatar is a styled `<div>` with a letter "U" inside. No dropdown appears on click. The "Sign In" link in the navbar provides navigation to the login page.
- **Impact on UX:** No account management dropdown. Users must use the navbar links for navigation.

---

## 9. "Top 10" Numbered Badges

- **Feature Name:** Large number overlays (1-10) on trending movie cards, similar to Netflix's "Top 10" row
- **Why it cannot be implemented:** This feature requires absolute-positioned large text overlays with specific clip paths and 3D text stroke effects. While possible in pure CSS, the complexity of the stroke/shadow effects needed to match Netflix's specific style exceeds what's practical in inline styles via the template DSL.
- **Suggested workaround:** The "Trending Now" row shows standard movie cards without numbered badges. The section title indicates trending content.
- **Impact on UX:** The iconic "Top 10" visual is missing but the content is still presented in the correct row.

---

## Summary Table

| Feature | Implementable? | Root Cause | Impact |
|---|---|---|---|
| Dynamic routes | ❌ No | Static page paths only | All movies share one detail page |
| Video playback | ❌ No | No JS runtime | Visual mockup only |
| Hover animations | ❌ No | No pseudo-class CSS support | Cards don't zoom on hover |
| Search filtering | ❌ No | No client-side JS | Search input is decorative |
| Login auth | ❌ No | No form handlers | Form is visual only |
| Scroll snap | ⚠️ Partial | Browser-dependent CSS | Works but without snap |
| Mobile menu | ❌ No | No JS toggle | Links wrap instead of collapse |
| Profile dropdown | ❌ No | No JS click handlers | Static avatar only |
| Top 10 badges | ❌ No | Complex CSS impractical inline | Standard cards shown |
