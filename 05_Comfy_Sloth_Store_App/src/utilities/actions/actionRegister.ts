import { ActionFunction, redirect } from "react-router-dom";
import { customFetch } from "../customFetch";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";

//-------------------------------------------------

export const actionRegister: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/local/register", data);
    toast({ description: "Registered" });
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "Registration Failed";
    toast({ description: errorMsg });
    return null;
  }
};

//------------------------------------------------- OR

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  error: {
    message: string;
    details?: string;
  };
}

export const actionRegister_2: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as RegistrationData;

  try {
    await customFetch.post("/auth/local/register", data);
    toast({ description: "Registered" });
    return redirect("/login");
  } catch (error) {
    let errorMsg = "Registration Failed";

    if (error instanceof AxiosError) {
      const serverError: ErrorResponse | undefined = error.response?.data;
      errorMsg = serverError?.error.message || errorMsg;

      // Handle specific status codes
      if (error.response?.status === 400) {
        errorMsg = serverError?.error.details || "Validation failed";
      } else if (error.response?.status === 500) {
        errorMsg = "Internal server error. Please try again later.";
      }
    }

    toast({ description: errorMsg });

    // Log the error for development
    if (process.env.NODE_ENV === "development") {
      console.error("Registration error:", error);
    }

    return null;
  }
};
