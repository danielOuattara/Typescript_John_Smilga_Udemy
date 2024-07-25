/**
 * Constructs a URL with updated query parameters, including the requested page number.
 *
 * @param {Object} params - The parameters for constructing the URL.
 * @param {number} params.pageNumber - The page number that the user is requesting.
 * @param {string} params.search - The query search parameters from the current URL.
 * @param {string} params.pathname - The current pathname from the current URL.
 * @returns {string} A new URL with the updated query parameters.
 *
 * @example
 * // Given the inputs:
 * const pageNumber = 1;
 * const search = '?search=&category=Sofas&company=all&order=a-z&price=100000&shipping=on';
 * const pathname = '/products';
 *
 * // The output will be:
 * const output = constructUrl({ pageNumber, search, pathname });
 * // output: "/products?search=&category=Sofas&company=all&order=a-z&price=100000&shipping=on&page=1"
 *
 * @example
 * // Another example with a different page number
 * const pageNumber = 2;
 * const search = '?search=&category=Chairs';
 * const pathname = '/items';
 *
 * const output = constructUrl({ pageNumber, search, pathname });
 * // output: "/items?search=&category=Chairs&page=2"
 *
 * @function constructUrl
 */

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams): string => {
  const newSearchParams = new URLSearchParams(search);
  newSearchParams.set("page", pageNumber.toString());
  return `${pathname}?${newSearchParams.toString()}`;
};

/**
 * Constructs the URLs for the previous and next pages in a paginated navigation system.
 *
 * @param {Object} params - The parameters for constructing the URLs.
 * @param {number} params.currentPage - The current page number.
 * @param {number} params.pageCount - The total number of pages available.
 * @param {string} params.search - The query search parameters from the current URL.
 * @param {string} params.pathname - The current pathname from the current URL.
 * @returns {Object} An object containing the URLs for the previous and next pages.
 * @returns {string} return.previousUrl - The URL for the previous page.
 * @returns {string} return.nextUrl - The URL for the next page.
 *
 * @example
 * // Given the inputs:
 * const currentPage = 1;
 * const pageCount = 5;
 * const search = '?search=&category=Sofas&company=all&order=a-z&price=100000&shipping=on';
 * const pathname = '/products';
 *
 * // The output will be:
 * const urls = constructPreviousOrNextUrl({ currentPage, pageCount, search, pathname });
 * // urls.previousUrl: "/products?search=&category=Sofas&company=all&order=a-z&price=100000&shipping=on&page=5"
 * // urls.nextUrl: "/products?search=&category=Sofas&company=all&order=a-z&price=100000&shipping=on&page=2"
 *
 * @example
 * // Another example with a different current page
 * const currentPage = 3;
 * const pageCount = 5;
 * const search = '?search=&category=Chairs';
 * const pathname = '/items';
 *
 * const urls = constructPreviousOrNextUrl({ currentPage, pageCount, search, pathname });
 * // urls.previousUrl: "/items?search=&category=Chairs&page=2"
 * // urls.nextUrl: "/items?search=&category=Chairs&page=4"
 */

export const constructPreviousOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPreviousOrNextParams): { previousUrl: string; nextUrl: string } => {
  // Calculate previous and next page numbers, wrapping around if needed
  const previousPage = currentPage > 1 ? currentPage - 1 : pageCount;
  const previousUrl = constructUrl({
    pageNumber: previousPage,
    search,
    pathname,
  });

  const nextPage = currentPage < pageCount ? currentPage + 1 : 1;
  const nextUrl = constructUrl({
    pageNumber: nextPage,
    search,
    pathname,
  });

  return { previousUrl, nextUrl };
};
