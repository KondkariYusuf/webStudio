import { SearchField, theme } from "@webstudio-is/design-system";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { dashboardPath } from "~/shared/router-utils";

export const Search = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const handleAbortSearch = () => {
    // When user cancels the search, we try to return to the last path they were on.
    if (location.state?.previousPathname) {
      return navigate(location.state.previousPathname);
    }
    navigate(dashboardPath("projects"));
  };
  const isSearchRoute = location.pathname === dashboardPath("search");

  return (
    <SearchField
      css={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        "$$foregroundSubtle": theme.colors.foregroundSubtle,
        "& *": {
          "--colors-foregroundSubtle": theme.colors.foregroundSubtle,
        },
        "&:hover": {
          borderColor: "transparent",
          background: "transparent",
        },
        "&:focus-within": {
          borderColor: "transparent",
          boxShadow: "none",
        },
        "& [data-input-field-input]": {
          color: theme.colors.foregroundMain,
          "&::placeholder": {
            color: theme.colors.foregroundSubtle,
            opacity: 1
          }
        },
        "& svg": {
          color: `${theme.colors.foregroundSubtle} !important`
        }
      }}
      value={searchParams.get("q") ?? undefined}
      onChange={(event) => {
        const value = event.currentTarget.value.trim();
        if (value === "") {
          handleAbortSearch();
          return;
        }
        if (isSearchRoute === false) {
          navigate(
            {
              pathname: dashboardPath("search"),
              search: `?q=${value}`,
            },
            // Remember the last path to return to on abort
            {
              state: { previousPathname: location.pathname },
            }
          );
          return;
        }
        setSearchParams({ q: value }, { replace: true });
      }}
      onAbort={handleAbortSearch}
      autoFocus
      placeholder="Press Cmd+K to search"
    />
  );
};
