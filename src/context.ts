import { createContext, useContext } from "react";
import { FormContextType } from "./types";

export const FormContext = createContext<FormContextType | null>(null);
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormContext.Provider");
  return context;
};
