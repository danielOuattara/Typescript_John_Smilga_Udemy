import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type TypeProps = {
  text: string;
  className?: string;
};

export default function SubmitButton({ text, className }: TypeProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex ">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
