import { Form, Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormInput, SubmitButton } from "@/components";

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput type="text" name="username" defaultValue="" />
            <FormInput type="email" name="email" defaultValue="" />
            <FormInput type="password" name="password" defaultValue="" />

            {/* <Button type="submit" variant="default" className="w-full mt-4">
              Submit
            </Button> */}

            <SubmitButton text="Register" className="w-full mt-4" />

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
