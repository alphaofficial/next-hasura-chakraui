import { handleUserEmail } from "@/api-handlers/user";
import validateRoute from "@/api-helpers/validate";
import handler from "@/api-helpers/handler";

/**
 * This is the handler for the /api/webhooks/email-user route.
 */

const emailHandler = handler.post(validateRoute(handleUserEmail));

export default emailHandler;
