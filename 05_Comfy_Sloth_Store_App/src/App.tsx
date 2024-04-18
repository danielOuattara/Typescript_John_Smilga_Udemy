import { Button } from "@/components/ui/button";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const { name } = useAppSelector((state) => state.userState);
  return (
    <>
      <h1 className="text-7xl font-bold text-sky-500">{name}</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
      >
        Click Me
      </Button>
    </>
  );
}
