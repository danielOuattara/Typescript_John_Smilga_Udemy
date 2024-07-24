export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams) => {
  return `/products`;
};

export const constructPreviousOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): { previousUrl: string; nextUrl: string } => {
  const previousUrl = "/products";
  const nextUrl = "/products";
  return { previousUrl, nextUrl };
};
