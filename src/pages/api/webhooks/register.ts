import { hashPassword } from "@/api-handlers/auth";
import validateRoute from "@/api-helpers/validate";
import handler from "@/api-helpers/handler";
/**
 *  This is the register handler
 */
const handleRegister = handler.post(validateRoute(hashPassword));

export default handleRegister;
