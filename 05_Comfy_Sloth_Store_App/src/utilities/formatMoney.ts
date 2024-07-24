export const formatMoney = (price: string | number): string => {
  const eurosAmount = new Intl.NumberFormat("en-BE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(price) / 100);

  return eurosAmount;
};
