import { ZodError } from "zod";

const viewError = (error: ZodError) => {
  const errors = error.issues.map((issues) => {
    return {
      path: issues.path,
      message: issues.message,
    };
  });

  return errors;
};

export default viewError;
