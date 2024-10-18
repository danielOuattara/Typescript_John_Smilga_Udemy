import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <>
      <h1 className="text-4xl">Cart Page</h1>
      <div>
        <Link to="/" className="text-3xl text-blue-500">
          {" "}
          back home
        </Link>
      </div>
      <div>
        <Button asChild>
          <Link to="/"> back home</Link>
        </Button>
      </div>
    </>
  );
}
