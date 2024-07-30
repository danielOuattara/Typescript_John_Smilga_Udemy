import { toast } from "@/components/ui/use-toast";
import { ReduxStore } from "@/hooks";
import { LoaderFunction, redirect } from "react-router-dom";
import { customFetch } from "../customFetch";

export const loaderOrders = (store: ReduxStore): LoaderFunction => {
  return async ({ request }): Promise<OrdersResponse | Response | null> => {
    const { user } = store.getState().user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }

    const { searchParams } = new URL(request.url);
    const searchParamsObject = Object.fromEntries(searchParams.entries());

    try {
      const res = await customFetch.get<OrdersResponse>("/orders", {
        params: searchParamsObject,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      return { ...res.data };
    } catch (error) {
      console.log(error);
      toast({ description: "Failed to fetch orders" });
      return null;
    }
  };
};
