import { hashPassword } from "@/api-handlers/auth";
import validateRoute from "@/api-helpers/validate";
import handler from "@/api-helpers/handler";

/**
 * This is the login handler for the login route.
 */
const handleLogin = handler.post(validateRoute(hashPassword));

export default handleLogin;
