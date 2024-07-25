import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { constructUrl, constructPreviousOrNextUrl } from "@/utilities";
import { useLoaderData, useLocation } from "react-router-dom";

export default function PaginationRenderContainer() {
  const { search, pathname } = useLocation();
  const { meta } = useLoaderData() as ProductsResponseWithSearchParams;
  const { pageCount, page } = meta.pagination;

  // if (pageCount < 2) return null;

  const pageNumberList = Array.from(
    { length: pageCount },
    (_, index) => index + 1,
  );

  const renderPageNumberListItem = pageNumberList.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { previousUrl, nextUrl } = constructPreviousOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  if (pageCount < 2) {
    return (
      <Pagination className="mt-16">
        <PaginationContent>{renderPageNumberListItem}</PaginationContent>
      </Pagination>
    );
  }

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={previousUrl} />
        </PaginationItem>
        {renderPageNumberListItem}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
