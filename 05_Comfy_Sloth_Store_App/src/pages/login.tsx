import { Form, Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitButton, FormInput } from "@/components";
import { customFetch } from "@/utilities";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";

export default function Login() {
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
              // onClick={loginAsGuestUser}
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
