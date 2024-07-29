import { ActionFunction } from "react-router-dom";
import { customFetch } from "../customFetch";

export const actionRegister: ActionFunction = async ({
  request,
}): Promise<null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const res = await customFetch.post("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  return null;
};
