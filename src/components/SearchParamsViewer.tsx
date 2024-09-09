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
        setSearchParamsStrList([searchParamsStr, ...searchParamsStrList]);
      }
    } else {
      setSearchParamsStrList([searchParamsStr, ...searchParamsStrList]);
    }
  }

  return (
    <p>
      SearchParams:
      { searchParamsStrList.map(str => <><br />{str}</>) }
    </p>
  )
}
