import { Error as MongooseError } from "mongoose";

export const formatErrorResponse = (error: any) => {
  if (error instanceof MongooseError.ValidationError) {
    const cleanedErrors: any = {};

    for (const [field, err] of Object.entries(error.errors)) {
      const e = err as MongooseError.ValidatorError;
      const props = e.properties as Record<string, any>;

      cleanedErrors[field] = {
        message: e.message,
        name: e.name,
        properties: {
          message: props.message,
          type: props.type,
          min: props.min,
        },
        kind: e.kind,
        path: e.path,
        value: e.value,
      };
    }

    return {
      message: "Validation failed",
      success: false,
      error: {
        name: error.name,
        errors: cleanedErrors,
      },
    };
  }

  // Generic fallback
  return {
    message: error.message || "Something went wrong",
    success: false,
    error,
  };
};
