import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  const navigate = useNavigate();
  // temporary
  const [user, setUser] = useState<string | null>("demo user");

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    return;
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello {user}</p>
            <Button variant={"link"} size={"sm"} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant={"link"} size={"sm"}>
              <Link to={"login"}>Sign in / Guest</Link>
            </Button>
            <Button asChild variant={"link"} size={"sm"}>
              <Link to={"register"}>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
