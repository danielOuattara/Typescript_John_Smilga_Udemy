import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormInput({
  label,
  name,
  type,
  defaultValue,
}: FormInputProps) {
  return (
    <>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </>
  );
}
