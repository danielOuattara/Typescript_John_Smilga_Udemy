import { formatMoney } from "@/utilities";
import { Separator } from "@radix-ui/react-select";

type TCartTotalRowProps = {
  label: string;
  value: number;
  lastRow?: boolean;
  quantityOnly?: true;
};

export default function CartTotalRow({
  label,
  value,
  lastRow,
  quantityOnly,
}: TCartTotalRowProps) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        {quantityOnly ? (
          <span>{value}</span>
        ) : (
          <span>{formatMoney(value)}</span>
        )}
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}
