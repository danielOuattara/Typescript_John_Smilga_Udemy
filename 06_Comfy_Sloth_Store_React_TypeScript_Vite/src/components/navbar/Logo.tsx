import { LampFloor, Sofa } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <LampFloor
        size={32}
        color="#ecba4d"
        strokeWidth={1.25}
        absoluteStrokeWidth
      />
      <Sofa size={32} color="#f8efe6" strokeWidth={2} absoluteStrokeWidth />
    </Link>
  );
}
