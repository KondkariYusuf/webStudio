import { useEffect, useState } from "react";
import {
  css,
  Flex,
  Text,
  truncate,
  theme,
  Tooltip,
  rawTheme,
  Link,
  Box,
} from "@webstudio-is/design-system";
import { InfoCircleIcon } from "@webstudio-is/icons";
import type { DashboardProject } from "@webstudio-is/dashboard";
import { builderUrl } from "~/shared/router-utils";
import { ProjectDialogs, type DialogType } from "./project-dialogs";
import {
  ThumbnailLinkWithAbbr,
  ThumbnailLinkWithImage,
} from "../shared/thumbnail";
import { Spinner } from "../shared/spinner";
import { Card, CardContent, CardFooter } from "../shared/card";
import type { User } from "~/shared/db/user.server";
import type { UserPlanFeatures } from "~/shared/db/user-plan-features.server";
import { ProjectMenu } from "./project-menu";
import { formatDate } from "./utils";

const infoIconStyle = css({ flexShrink: 0 });

const PublishedLink = ({
  domain,
  tabIndex,
}: {
  domain: string;
  tabIndex: number;
}) => {
  const publishedOrigin = `https://${domain}`;
  return (
    <Link
      href={publishedOrigin}
      target="_blank"
      rel="noreferrer"
      tabIndex={tabIndex}
      color="subtle"
      underline="hover"
      css={truncate()}
    >
      {new URL(publishedOrigin).host}
    </Link>
  );
};

type ProjectWithExtras = DashboardProject & {
  domainsVirtual?: Array<{ domain: string; status: string; verified: boolean }>;
  previewImageAsset?: { name: string };
};

type ProjectCardProps = {
  project: DashboardProject;
  userPlanFeatures: UserPlanFeatures;
  publisherHost: string;
  projectsTags: User["projectsTags"];
};

export const ProjectCard = ({
  project: baseProject,
  userPlanFeatures,
  publisherHost,
  projectsTags,
  ...props
}: ProjectCardProps) => {
  const project = baseProject as ProjectWithExtras;
  const {
    id,
    title,
    domain,
    isPublished,
    createdAt,
    latestBuildVirtual,
    previewImageAsset,
    tags,
    domainsVirtual,
  } = project;
  // Determine which domain to display: custom domain if available, otherwise wstd subdomain
  const customDomain = domainsVirtual?.find(
    (d: { domain: string; status: string; verified: boolean }) =>
      d.status === "ACTIVE" && d.verified
  )?.domain;
  const displayDomain = customDomain ?? `${domain}.${publisherHost}`;
  const [openDialog, setOpenDialog] = useState<DialogType | undefined>();
  const [isHidden, setIsHidden] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Makes sure there are no project tags that reference deleted User tags.
  // We are not deleting project tag from project.tags when deleting User tags.
  const projectTagsIds = (tags || [])
    .map((tagId) => {
      const tag = projectsTags.find((tag) => tag.id === tagId);
      return tag ? tag.id : undefined;
    })
    .filter(Boolean) as string[];

  useEffect(() => {
    const linkPath = builderUrl({ origin: window.origin, projectId: id });

    const handleNavigate = (event: any) => {
      if (event.destination.url === linkPath) {
        setIsTransitioning(true);
      }
    };

    if (window.navigation === undefined) {
      return;
    }

    window.navigation.addEventListener("navigate", handleNavigate);

    return () => {
      window.navigation.removeEventListener("navigate", handleNavigate);
    };
  }, [id]);

  const linkPath = builderUrl({ origin: window.origin, projectId: id });

  return (
    <Card
      hidden={isHidden}
      css={{
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        border: "1px solid #27272A",
        borderRadius: "18px",
        overflow: "hidden",
        background: "#141414",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 25px 40px -12px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(146, 141, 221, 0.15)
          `,
          borderColor: "rgba(146, 141, 221, 0.4)",
        },
      }}
      {...props}
    >
      <CardContent
        css={{
          aspectRatio: "16/10",
          background: "linear-gradient(135deg, #141414 0%, #1e1e1e 100%)",
          position: "relative",
          overflow: "hidden",
          [`&:hover`]: {
            "--ws-project-card-prefetch-image-background": `url(${linkPath}cgi/empty.gif)`,
          }
        }}
      >
        {/* This div with backgorundImage on card hover is used to prefetch DNS of the project domain on hover. */}
        <Box
          css={{
            backgroundImage: `var(--ws-project-card-prefetch-image-background, none)`,
            visibility: "hidden",
            position: "absolute",
            width: 1,
            height: 1,
            left: 0,
            top: 0,
            opacity: 0,
          }}
        />
        <Flex
          wrap="wrap"
          gap={1}
          css={{
            position: "absolute",
            padding: theme.panel.padding,
            bottom: 0,
            zIndex: 1,
          }}
        >
          {projectsTags.map((tag) => {
            const isApplied = projectTagsIds.includes(tag.id);
            if (isApplied) {
              return (
                <Text
                  color="contrast"
                  key={tag.id}
                  css={{
                    background: "oklch(0 0 0 / 0.3)",
                    borderRadius: theme.borderRadius[3],
                    paddingInline: theme.spacing[3],
                  }}
                >{`#${tag.label}`}</Text>
              );
            }
          })}
        </Flex>
        {previewImageAsset ? (
          <ThumbnailLinkWithImage to={linkPath} name={previewImageAsset.name} />
        ) : (
          <ThumbnailLinkWithAbbr title={title} to={linkPath} />
        )}
        {isTransitioning && <Spinner delay={0} />}
      </CardContent>
      <CardFooter
        css={{
          padding: "16px",
          gap: "12px",
          background: "#141414",
          borderTop: "1px solid #27272A",
        }}
      >
        <Flex direction="column" gap="1" grow overflow="hidden">
          <Flex gap="2" align="center">
            <Text
              variant="titles"
              userSelect="text"
              truncate
              css={{
                 textTransform: "none",
                 color: "#FFFFFF",
                 fontWeight: "600",
                 fontSize: "14px",
                 letterSpacing: "-0.01em"
              }}
            >
              {title}
            </Text>
            <Tooltip
              variant="wrapped"
              content={
                <Text variant="small" css={{ color: "#A1A1AA" }}>
                  Created: {formatDate(createdAt)}
                  {latestBuildVirtual?.updatedAt && (
                    <>
                      <br />
                      Last modified: {formatDate(latestBuildVirtual.updatedAt)}
                    </>
                  )}
                  <br />
                  {isPublished && latestBuildVirtual ? (
                    <>Published: {formatDate(latestBuildVirtual.createdAt)}</>
                  ) : (
                    <>Not published</>
                  )}
                </Text>
              }
            >
              <Box css={{ color: "#A1A1AA", cursor: "help", opacity: 0.6 }}>
                <InfoCircleIcon size={12} className={infoIconStyle()} />
              </Box>
            </Tooltip>
          </Flex>
          {isPublished ? (
            <PublishedLink domain={displayDomain} tabIndex={-1} />
          ) : (
            <Text css={{ color: "#A1A1AA", fontSize: "12px" }}>Not published</Text>
          )}
        </Flex>
        <ProjectMenu projectId={id} onOpenChange={setOpenDialog} />
      </CardFooter>
      <ProjectDialogs
        projectId={id}
        title={title}
        tags={tags}
        openDialog={openDialog}
        onOpenDialogChange={setOpenDialog}
        onHiddenChange={setIsHidden}
        userPlanFeatures={userPlanFeatures}
        projectsTags={projectsTags}
      />
    </Card>
  );
};
