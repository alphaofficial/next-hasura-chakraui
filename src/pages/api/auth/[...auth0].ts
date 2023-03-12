/**
 * This file is used to handle all requests to /api/auth/*.
 * It creates the following endpoints:
 * - /api/auth/login
 * - /api/auth/logout
 * - /api/auth/callback
 * - /api/auth/me
 * - /api/auth/session
 * - /api/auth/authorize
 *
 *
 * The authentication state exposed by UserProvider can be accessed in any component using the useUser() hook.
 */

import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();
