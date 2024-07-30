import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userActions } from "@/features/user/userSlice";
import { cartActions } from "@/features/cart/cartSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(cartActions.clearCart());
    dispatch(userActions.logoutUser());
    toast({ description: "Logged out" });
    navigate("/");
    return;
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello {user.username}</p>
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
