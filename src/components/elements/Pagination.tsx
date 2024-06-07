import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface PaginationTypes {
  totalPage: number;
  setCurrentPage: any;
  currentPage: number;
}

const numbers = (data: number) =>
  Array(data)
    .fill(0)
    .map((n, i) => i + 1);

const Pagination = ({
  totalPage,
  setCurrentPage,
  currentPage,
}: PaginationTypes) => {
  const sliceDigit = 8;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(sliceDigit);
  // slice(0,8)

  const slicePage = (first: number | undefined, last: number | undefined) => {
    return numbers(totalPage).slice(first, last);
  };

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
      <button
        onClick={() => {
          setFirst(first - sliceDigit);
          setLast(last - sliceDigit);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-l border"
        disabled={first === 0}
      >
        <AiFillCaretLeft />
      </button>
      {first > 0 && (
        <div className="w-8 h-8 flex items-center justify-center border rounded">
          ...
        </div>
      )}
      {slicePage(first, last).length > 0 &&
        slicePage(first, last).map((num) => {
          return (
            <button
              className={`${
                num === currentPage
                  ? 'bg-secondary-soft text-primary-default'
                  : ''
              } rounded w-8 h-8 border hover:text-primary-default hover:bg-primary-default/80 all__trans`}
              onClick={() => {
                setCurrentPage(num);
              }}
              key={num}
            >
              {num}
            </button>
          );
        })}
      {last < totalPage && (
        <div className="w-8 h-8 flex items-center justify-center border">
          ...
        </div>
      )}
      <button
        onClick={() => {
          setFirst(first + sliceDigit);
          setLast(last + sliceDigit);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-r border"
        disabled={last >= totalPage}
      >
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Pagination;
