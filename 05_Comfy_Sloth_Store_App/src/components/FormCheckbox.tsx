import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function FormCheckbox({
  name,
  label,
  defaultValue,
}: FormCheckboxProps) {
  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultValue === "on" ? true : false}
      />
    </div>
  );
}
