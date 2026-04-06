import { SearchField } from "@webstudio-is/design-system";
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
        background: "#F1F5F9",
        border: "1px solid #E2E8F0",
        borderRadius: "8px",
        $$foregroundSubtle: "#64748B",
        "& *": {
          "--colors-foregroundSubtle": "#64748B"
        },
        "&:hover": {
          borderColor: "#CBD5E1"
        },
        "&:focus-within": {
          borderColor: "#2b00cc"
        },
        "& [data-input-field-input]": {
          color: "#0F172A",
          "&::placeholder": {
            color: "#94A3B8",
            opacity: 1
          }
        },
        "& svg": {
          color: "#64748B !important"
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
