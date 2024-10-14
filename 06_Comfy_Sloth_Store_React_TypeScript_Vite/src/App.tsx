import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";

export default function App() {
  const { name } = useAppSelector((state) => state.user);
  console.log(name);
  return (
    <div>
      <h1 className="text-3xl font-bold m-5">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
      >
        Click Me
      </Button>
    </div>
  );
}
