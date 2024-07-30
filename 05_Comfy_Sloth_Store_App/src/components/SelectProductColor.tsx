import { SelectProductColorProps } from "@/types/types.single-product";

export default function SelectProductColor({
  colors,
  productColor,
  setProductColor,
}: SelectProductColorProps) {
  return (
    <div className="mt-6">
      <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
      <div className="mt-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`aspect-square rounded-md w-6 h-6 mr-2 border-2  ${
              color === productColor && " border-primary"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setProductColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
