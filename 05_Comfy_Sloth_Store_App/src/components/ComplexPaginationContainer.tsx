import { constructPreviousOrNextUrl, constructUrl } from "@/utilities";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function ComplexPaginationContainer() {
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;

  // const renderPagination = pages.map((pageNumber) => {
  //   const isActive = pageNumber === page;
  //   const url = constructUrl(pageNumber, search, pathname);

  //   return (
  //     <PaginationItem key={pageNumber}>
  //       <PaginationLink to={url} isActive={isActive}>
  //         {pageNumber}
  //       </PaginationLink>
  //     </PaginationItem>
  //   );
  // });

  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const pages: React.ReactNode[] = [];
    // first page
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
    // ellipsis
    if (page > 2) {
      pages.push(constructEllipsis("dots-1"));
    }
    // active page
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    }
    // ellipsis
    if (page < pageCount - 1) {
      pages.push(constructEllipsis("dots-2"));
    }
    // last page
    pages.push(
      constructButton({
        pageNumber: pageCount,
        isActive: page === pageCount,
      }),
    );
    return pages;
  };
  const { previousUrl, nextUrl } = constructPreviousOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });
  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={previousUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}