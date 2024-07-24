export const formatMoney = (price: string | number): string => {
  const eurosAmount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(price) / 100);

  return eurosAmount;
};
