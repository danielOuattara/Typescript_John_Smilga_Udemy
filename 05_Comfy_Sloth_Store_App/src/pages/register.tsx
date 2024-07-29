import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitButton, FormInput } from "@/components";
import { customFetch } from "@/utilities";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form>
            <FormInput type="text" name="username" defaultValue="test" />
            <FormInput type="email" name="email" defaultValue="test@test.com" />
            <FormInput type="password" name="password" defaultValue="secret" />

            <Button type="submit" variant="default" className="w-full mt-4">
              Submit
            </Button>

            <p className="text-center mt-4">
              Already a member ?
              <Button type="button" asChild variant="link">
                <Link to="/login">&#x1F513; Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
