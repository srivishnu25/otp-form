import { FormType } from "./types";

export const INITIAL_FORM: FormType = {
  type: "tel",
  value: "",
  otp: undefined,
  isOtpSent: false,
  readonlySteps: [],
};
