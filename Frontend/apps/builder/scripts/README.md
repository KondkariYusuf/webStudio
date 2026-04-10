# Webstudio Script-Based Website Cloning

This directory contains automation scripts that programmatically generate full-featured website clones within the Webstudio platform. These scripts were authored by various Flagship LLMs (GPT-4, Claude 3 Opus, Gemini 1.5) to demonstrate the platform's ability to ingest structured UI data and transform it into editable visual builder projects.

## 🚀 How These Scripts Work

The fundamental mechanism is **"Data-to-Canvas"** transformation. Instead of using a visual builder to drag and drop elements, these scripts define the entire site structure in code and inject it directly into the Webstudio database via Prisma.

### The Lifecycle of a Clone
1.  **The Prompt**: A user provides a high-level description or a sitemap (e.g., "Build an Amazon clone with 10 pages and a dark theme").
2.  **The Script (TSX)**: The LLM generates a TypeScript script using the `@webstudio-is/template` and `@webstudio-is/sdk` libraries.
3.  **The Engine (`renderData`)**: The script uses a virtual JSX-like syntax (`<ws.element>`) to describe the UI. This is then processed by `renderData` to generate the internal Webstudio data model (Instances, Styles, Props, Breakpoints).
4.  **Database Injection**: The script connects to the PostgreSQL database, ensures the Admin user and Project exist, and creates a "Build" record containing the generated JSON structure.
5.  **The Result**: The script outputs a URL (e.g., `https://p-[id].wstd.dev`). Opening this URL loads a fully editable, responsive website in the Webstudio Builder.

---

## 🏗️ Anatomy of a Script

Every script in this folder follows a strict structural pattern to remain compatible with the Webstudio engine:

### 1. Bootstrap & Environment
The script starts by loading `.env` variables (specifically `DATABASE_URL`) and initializing the **Prisma Client**. This allows it to talk directly to the Webstudio backend infrastructure.

### 2. Design Tokens & Mock Data
LLMs define constants for colors, layouts, and content. 
- **Design Tokens**: Colors like `NETFLIX_RED` or `BG_DARK`.
- **Content Arrays**: Arrays of products, movies, or features used to map across components.

### 3. Component Library
UI elements are written as functions returning `<ws.element>` tags. 
```tsx
const card = (title: string) => (
  <ws.element ws:tag="article" ws:style={css`padding: 16px; border: 1px solid #ddd;`}>
    <ws.element ws:tag="h2">{title}</ws.element>
  </ws.element>
);
```
- `ws:tag` defines the HTML element.
- `ws:style` uses the `css` template literal to define styles that are automatically parsed into the Webstudio Style System.

### 4. The `buildData` function
This is the "Compiler". It uses `renderData` to convert the JSX tree into:
- **Instances**: The DOM-like tree of elements.
- **Styles**: A map of all CSS properties applied to those elements.
- **Pages**: Configuration for paths (`/`, `/shop`, etc.) and their root instances.

---

## 📊 LLM Comparison: Amazon vs. Netflix

The accuracy and complexity of the output depend heavily on the model's "coding hygiene" and design reasoning.

| Feature | Amazon (ChatGPT) | Netflix (Claude 3 Opus) | Neo-Ecom (Gemini) |
| :--- | :--- | :--- | :--- |
| **Model** | GPT-4 | Claude 3 Opus | Gemini 3 Flash / 1.5 Pro |
| **Code Length** | ~600 lines | ~1500 lines | ~500 lines |
| **Styling Depth** | Standard Flex/Grid. Functional. | Premium. Uses `clamp()`, gradients, and complex overlays. | Neo-brutalist (Bold borders, high contrast). |
| **Logic** | Page-focused navigation. | Content-focused (Rich mock data arrays). | Minimalist & efficient. |
| **Complexity** | High (10 distinct pages). | Very High (includes video player shell & search). | Medium (Branded storefront). |

### Qualitative Differences:
- **Claude (Netflix)**: Displayed superior "Design Reasoning." It implemented responsive scaling using modern CSS units like `clamp()` and focused heavily on visual fidelity (simulating hover effects and gradient masks).
- **ChatGPT (Amazon)**: Displayed superior "System Reasoning." It successfully managed a larger number of interconnected pages and checkout states, focusing on the logical flow of an e-commerce platform.

---

## 🛠️ Prompting for New Scripts

To generate a similar script using a local (Ollama/LM Studio) or cloud LLM, use the following prompting strategy:

> **The System Prompt:**
> "You are a Webstudio Engineer. Your task is to generate a standalone TSX script that programmatically builds a website clone. You must use the @webstudio-is/template library. Use `ws.element` for elements and `ws:style={css`...`}` for styling. Structure the script into: Imports, Mock Data, Shared Components (Nav/Footer), and a `buildData` function that returns the result of `renderData`. Finally, include the Prisma logic to save the build to the database."

> **The User Prompt:**
> "Create a 5-page 'Tesla Clone' using a sleek dark theme. Include a Landing Page, Model S detail page, Charging map (mock), and a Booking form. Use high-quality Unsplash image URLs for assets."

---

## ⚠️ Key Limitations
1.  **Static Data**: Everything is hardcoded in the script. To make it dynamic, you would need to fetch from an API during the `buildData` execution.
2.  **No Event Handlers**: Since this generates data for a visual builder, you can't include complex JS logic (like `onClick`) directly in these scripts; those must be added later in the Webstudio Builder via the UI.
3.  **Asset Dependencies**: All images must be hosted URLs. Local file paths won't work once the site is opened in the cloud-based builder.
