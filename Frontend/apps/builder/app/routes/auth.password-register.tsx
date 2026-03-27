import { type ActionFunctionArgs } from "@remix-run/server-runtime";
import { authenticator } from "~/services/auth.server";
import {
  dashboardPath,
  isDashboard,
  registerPath,
} from "~/shared/router-utils";
import { AUTH_PROVIDERS } from "~/shared/session";
import { clearReturnToCookie, returnToPath } from "~/services/cookie.server";
import { preventCrossOriginCookie } from "~/services/no-cross-origin-cookie";
import { redirect, setNoStoreToRedirect } from "~/services/no-store-redirect";

export default function PasswordRegister() {
  return null;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  preventCrossOriginCookie(request);

  if (false === isDashboard(request)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const returnTo = (await returnToPath(request)) ?? dashboardPath();

  try {
    await authenticator.authenticate("password-register", request, {
      successRedirect: returnTo,
      throwOnError: true,
    });
  } catch (error: unknown) {
    if (error instanceof Response) {
      return setNoStoreToRedirect(await clearReturnToCookie(request, error));
    }

    if (error instanceof Error) {
      return redirect(
        registerPath({
          error: AUTH_PROVIDERS.REGISTER_PASSWORD,
          message: error.message,
          returnTo,
        })
      );
    }
  }
};
