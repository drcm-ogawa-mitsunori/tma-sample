import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchParamsViewer = () => {
  const [searchParamsStrList, setSearchParamsStrList] = useState<string[]>([]);
  const [searchParams] = useSearchParams();

  const searchParamsStr = searchParams.toString();
  if (0 < searchParamsStr.length) {
    if (0 < searchParamsStrList.length) {
      const lastSearchParamsStr = searchParamsStrList[searchParamsStrList.length - 1];
      if (lastSearchParamsStr !== searchParamsStr) {
        setSearchParamsStrList([...searchParamsStrList, searchParamsStr]);
      }
    } else {
      setSearchParamsStrList([...searchParamsStrList, searchParamsStr]);
    }
  }

  return (
    <p>
      { searchParamsStrList.map((str, index) => {
        if (index === 0) {
          return str;
        } else {
          return (
            <><br />{str}</>
          )
        }
      }) }
    </p>
  )
}
