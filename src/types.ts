export type FormType = {
  type: "tel" | "email";
  value: number | string;
  otp: string | undefined;
  isOtpSent: boolean;
  readonlySteps: number[];
};

export type FormContextType = [
  FormType,
  React.Dispatch<React.SetStateAction<FormType>>
];
