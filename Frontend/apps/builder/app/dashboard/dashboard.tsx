import { useEffect, useState, type ReactNode } from "react";
import {
  Flex,
  List,
  ListItem,
  Text,
  TooltipProvider,
  Toaster,
  css,
  globalCss,
  theme,
  PanelBanner,
  Link,
  buttonStyle,
  Box,
} from "@webstudio-is/design-system";
import { BodyIcon, ExtensionIcon } from "@webstudio-is/icons";
import { NavLink, useLocation, useRevalidator } from "@remix-run/react";
import { atom } from "nanostores";
import { useStore } from "@nanostores/react";
import { CloneProjectDialog } from "~/shared/clone-project";
import { dashboardPath } from "~/shared/router-utils";
import { CollapsibleSection } from "~/builder/shared/collapsible-section";
import { ProfileMenu } from "./profile-menu";
import { Projects } from "./projects/projects";
import { Templates } from "./templates/templates";
import { help } from "~/shared/help";
import { SearchResults } from "./search/search-results";
import type { DashboardData } from "./shared/types";
import { Search } from "./search/search-field";

const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF",
  },
});

const CloneProject = ({
  projectToClone,
}: {
  projectToClone: DashboardData["projectToClone"];
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(projectToClone !== undefined);
  const { revalidate } = useRevalidator();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cloneProjectAuthToken = searchParams.get("projectToCloneAuthToken");
    if (cloneProjectAuthToken === null) {
      return;
    }

    // Use the native history API to remove query parameters without reloading the page data
    const currentState = window.history.state;
    window.history.replaceState(currentState, "", location.pathname);
  }, [location.search, location.pathname]);

  if (projectToClone !== undefined) {
    return (
      <CloneProjectDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        project={{
          id: projectToClone.id,
          title: projectToClone.title,
        }}
        authToken={projectToClone.authToken}
        onCreate={() => {
          revalidate();
        }}
      />
    );
  }
};

const sidebarLinkStyle = css({
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing[3],
  height: "40px",
  paddingInline: theme.spacing[4],
  marginInline: theme.spacing[3],
  marginBottom: theme.spacing[2],
  borderRadius: "10px",
  outline: "none",
  transition: "all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
  color: "#A1A1AA",
  fontWeight: 500,
  fontSize: "13px",

  "&:focus-visible": {
    boxShadow: `0 0 0 2px #141414, 0 0 0 4px #928ddd`,
  },
  "&:hover": {
    background: "#27272A",
    color: "#FFFFFF",
  },
  "&[aria-current=page]": {
    background: "#1E1E24",
    color: "#b2aef2",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #3F3F46",
    fontWeight: 600,
    "& svg": {
       color: "#b2aef2",
       transform: "scale(1.05)",
    }
  }
});

const NavigationItems = ({
  items,
}: {
  items: Array<{
    to: string;
    prefix: ReactNode;
    children: string;
    target?: string;
  }>;
}) => {
  return (
    <List style={{ padding: 0, margin: 0 }}>
      {items.map((item, index) => {
        return (
          <ListItem asChild index={index} key={index}>
            <NavLink
              to={item.to}
              end
              target={item.target}
              className={sidebarLinkStyle()}
            >
              {item.prefix}
              <Text variant="labels" css={{ color: "inherit", fontWeight: "inherit" }}>
                {item.children}
              </Text>
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
};

const $data = atom<DashboardData | undefined>();

export const DashboardSetup = ({ data }: { data: DashboardData }) => {
  $data.set(data);
  globalStyles();
  return null;
};

const getView = (pathname: string, hasProjects: boolean) => {
  if (pathname === dashboardPath("search")) {
    return "search";
  }

  if (hasProjects === false) {
    return "welcome";
  }

  if (pathname === dashboardPath("templates")) {
    return "templates";
  }
  return "projects";
};

export const Dashboard = () => {
  const data = useStore($data);
  const location = useLocation();

  if (data === undefined) {
    return null;
  }

  const {
    user,
    userPlanFeatures,
    publisherHost,
    projectToClone,
    projects,
    templates,
  } = data;
  const hasProjects = projects.length > 0;
  const view = getView(location.pathname, hasProjects);

  return (
    <TooltipProvider>
      <Flex css={{ height: "100vh" }}>
        <Flex
          as="aside"
          align="stretch"
          direction="column"
          shrink={false}
          css={{
            width: "280px",
            borderRight: "1px solid #27272A",
            position: "sticky",
            top: 0,
            background: "#141414",
          }}
        >
          <Flex
            align="center"
            gap="3"
            css={{
              height: "96px",
              paddingInline: theme.spacing[8],
              marginBottom: theme.spacing[4],
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #928ddd 0%, #b2aef2 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0 4px 12px rgba(146, 141, 221, 0.3)",
              }}
            >
              W
            </div>
            <Text
              css={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#FFFFFF",
                letterSpacing: "-0.04em",
              }}
            >
              Webstudio
            </Text>
          </Flex>

          <Flex
            direction="column"
            gap="3"
            css={{
              paddingInline: theme.spacing[5],
              paddingBottom: theme.spacing[12],
            }}
          >
            <Box
              as="button"
              onClick={() => {
                // Trigger search via focus if needed, or rely on Search component internal trigger
              }}
              css={{
                all: "unset",
                display: "flex",
                alignItems: "center",
                justifyContent: "between",
                height: "36px",
                width: "100%",
                background: "#27272A",
                border: "1px solid #3F3F46",
                borderRadius: "10px",
                paddingInline: theme.spacing[3],
                cursor: "text",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "#3F3F46",
                  borderColor: "#52525B",
                },
                "&:focus-within": {
                  background: "#1E1E24",
                  borderColor: "#b2aef2",
                  boxShadow: "0 0 0 3px rgba(146, 141, 221, 0.2)",
                }
              }}
            >
              <Flex align="center" gap="2" css={{ color: "#A1A1AA", flex: 1 }}>
                <Search />
              </Flex>
              <Box
                css={{
                  padding: "2px 6px",
                  background: "#141414",
                  border: "1px solid #3F3F46",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  marginLeft: "auto",
                }}
              >
                ⌘K
              </Box>
            </Box>
          </Flex>

          <Flex 
            direction="column" 
            grow 
            css={{ 
              overflowY: "auto", 
              gap: theme.spacing[15],
              msOverflowStyle: "none",  // IE and Edge
              scrollbarWidth: "none",  // Firefox
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            <Box css={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: theme.spacing[15],
              $$foregroundMain: "#A1A1AA",
              $$foregroundIconMain: "#A1A1AA",
              "& *": {
                "--colors-foregroundMain": "#A1A1AA",
                "--colors-foregroundIconMain": "#A1A1AA"
              }
             }}>
              <CollapsibleSection label="Workspace" fullWidth>
                <Box css={{ paddingTop: theme.spacing[4] }}>
                  <NavigationItems
                    items={
                      view === "welcome" || hasProjects === false
                        ? [
                            {
                              to: dashboardPath(),
                              prefix: <ExtensionIcon size={18} />,
                              children: "Welcome",
                            },
                          ]
                        : [
                            {
                              to: dashboardPath("projects"),
                              prefix: <BodyIcon size={18} />,
                              children: "Projects",
                            },
                            {
                              to: dashboardPath("templates"),
                              prefix: <ExtensionIcon size={18} />,
                              children: "Starter templates",
                            },
                          ]
                    }
                  />
                </Box>
              </CollapsibleSection>
              <CollapsibleSection label="Help & support" fullWidth>
                <Box css={{ paddingTop: theme.spacing[4] }}>
                  <NavigationItems
                    items={help.map((item) => ({
                      to: item.url,
                      target: "_blank",
                      prefix: item.icon,
                      children: item.label,
                    }))}
                  />
                </Box>
              </CollapsibleSection>
            </Box>
          </Flex>

          <Flex direction="column" css={{ padding: theme.spacing[4], gap: theme.spacing[6] }}>
            <PanelBanner
               css={{
                 background: "linear-gradient(135deg, #1E1E24 0%, #27272A 100%)",
                 borderRadius: "18px",
                 padding: theme.spacing[5],
                 border: "1px solid #3F3F46",
                 position: "relative",
                 overflow: "hidden",
                 "&::before": {
                   content: '""',
                   position: "absolute",
                   top: 0,
                   left: 0,
                   right: 0,
                   height: "1px",
                   background: "linear-gradient(to right, transparent, #FFFFFF, transparent)",
                   opacity: 0.1,
                 }
               }}
            >
              <Text variant="titles" css={{ color: "#FFFFFF", marginBottom: theme.spacing[1], fontSize: "13px", fontWeight: "700" }}>Inception is live</Text>
              <Text css={{ color: "#A1A1AA", opacity: 0.9, fontSize: "11.5px", lineHeight: "1.6", marginBottom: theme.spacing[4] }}>
                AI-powered design tool to instantly generate HTML/CSS.
              </Text>
              <Link
                className={buttonStyle({
                  color: "gradient",
                })}
                underline="none"
                href="https://wstd.us/inception"
                target="_blank"
                css={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "12px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "#928ddd",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 10px rgba(146, 141, 221, 0.3)",
                  transition: "all 0.2s ease",
                  border: "none",
                  "&:hover": {
                    background: "#b2aef2",
                    transform: "translateY(-1px)",
                    boxShadow: "0 6px 14px rgba(178, 174, 242, 0.4)",
                    color: "#000000",
                  }
                }}
              >
                Get started
              </Link>
            </PanelBanner>

            <Flex
              css={{
                borderTop: "1px solid #27272A",
                paddingTop: theme.spacing[6],
                marginTop: theme.spacing[2],
              }}
            >
              <ProfileMenu user={user} userPlanFeatures={userPlanFeatures} />
            </Flex>
          </Flex>
        </Flex>
        {view === "projects" && (
          <Projects
            projects={projects}
            userPlanFeatures={userPlanFeatures}
            publisherHost={publisherHost}
            projectsTags={user.projectsTags}
          />
        )}
        {view === "templates" && <Templates projects={templates} />}
        {view === "welcome" && <Templates projects={templates} welcome />}
        {view === "search" && <SearchResults {...data} />}
      </Flex>
      <CloneProject projectToClone={projectToClone} />
      <Toaster />
    </TooltipProvider>
  );
};
