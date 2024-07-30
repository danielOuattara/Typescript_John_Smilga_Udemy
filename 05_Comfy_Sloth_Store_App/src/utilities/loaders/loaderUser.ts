import { toast } from "@/components/ui/use-toast";
import { ReduxStore } from "@/hooks";
import { LoaderFunction, redirect } from "react-router-dom";

export const loaderUser =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const { user } = store.getState().user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/products");
    }
    return null;
  };

//-------------------- OR

export function loadUser_2(store: ReduxStore): LoaderFunction {
  return async function (): Promise<Response | null> {
    const { user } = store.getState().user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/products");
    }
    return null;
  };
}
