import { UseToastOptions } from "@chakra-ui/react";
import config from "../config";

export const SUCCESS_TOAST: UseToastOptions = {
  title: "Yaay",
  description: "Operation successful.",
  status: "success",
  duration: 600,
  isClosable: true,
  position: "bottom-right",
};

export const ERROR_TOAST: UseToastOptions = {
  title: "Oops!",
  description: "Something went wrong. Please try again.",
  status: "error",
  duration: 6000,
  isClosable: true,
  position: "bottom-right",
};
export const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  sameSite: "lax",
  secure: config.ENVIRONMENT === "production",
} as const;
