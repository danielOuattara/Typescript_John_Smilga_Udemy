import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to={"/"} className="text-3xl text-red-300 m-5">
        home Link
      </Link>

      <br />

      <Button asChild size="lg" className="m-5">
        <Link to={"/"}>Home</Link>
      </Button>
    </div>
  );
}
