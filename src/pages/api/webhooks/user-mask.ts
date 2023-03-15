// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleUserMask } from "@/api-handlers/user";
import handler from "@/api-helpers/handler";
import validateRoute from "@/api-helpers/validate";

/**
 * This is the handler for the user-mask webhook.
 */
const maskUser = handler.post(validateRoute(handleUserMask));

export default maskUser;
