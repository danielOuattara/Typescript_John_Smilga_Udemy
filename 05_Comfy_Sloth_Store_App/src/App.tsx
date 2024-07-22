import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hook";

export default function App() {
  const { name } = useAppSelector((state) => state.user);
  console.log(name);
  return (
    <div>
      <h1 className="text-3xl font-bold">Comfy Store</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
        className="m-5"
      >
        Click Me
      </Button>
    </div>
  );
}
