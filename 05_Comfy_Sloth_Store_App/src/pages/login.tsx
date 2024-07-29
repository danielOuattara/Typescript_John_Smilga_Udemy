import { Form, Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitButton, FormInput } from "@/components";
import { customFetch } from "@/utilities";
import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";
import { toast } from "@/components/ui/use-toast";
import { userActions } from "@/features/user/userSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async (): Promise<void> => {
    console.log("guest user");

    try {
      const res: AxiosResponse = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });

      const {
        user: { username },
        jwt,
      } = res.data;

      dispatch(userActions.loginUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({ description: "Login Failed" });
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />

            <SubmitButton text="Login" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="w-full mt-4"
            >
              Guest User
            </Button>
            <p className="text-center mt-4">
              Not a member yet ?
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
