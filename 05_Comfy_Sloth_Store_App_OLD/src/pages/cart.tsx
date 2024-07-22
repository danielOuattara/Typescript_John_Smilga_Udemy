import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <h1 className="text-4xl">Cart Page</h1>

      {/* regular link */}
      <Link to={"/"} className="text-3xl text-red-900">
        back to home
      </Link>

      {/* button component */}
      <Button asChild size={"lg"}>
        <Link to={"/"}>home button</Link>
      </Button>
    </>
  );
}
