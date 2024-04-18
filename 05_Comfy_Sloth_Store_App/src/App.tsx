import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <>
      <h1 className="text-7xl font-bold text-sky-500">App</h1>
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
