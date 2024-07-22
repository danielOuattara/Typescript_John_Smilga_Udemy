import { Button } from "@/components/ui/button";

export default function App() {
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
