import { useMemo, useState } from "react";
import SortButton from "@rubin-epo/epo-react-lib/SortButton";
import * as Styled from "./styles";

type TableDataProps<T extends Record<string, string | number | null>> = {
  tableData: T[];
};

const ASC = "asc";
const DESC = "desc";
const NONE = "none";
type SortKey = string;
type SortDirection = "asc" | "desc" | "none";

/**
 * This widget will take an array of uniform (same properties across all elements)
 * objects and render a table from the values. The table headers will be created
 * based on the property names. The table can be sorted ascending or descending
 * by one column at a time. If non-uniform objects are contained in the array,
 * the widget will only build out the columns specific by the properties on the
 * first element of the array.
 *
 * @param tabledata: an array of objects that will be used to build the table
 * @returns the sortable table
 */
const SortableTable = <T extends Record<string, string | number | null>>({
  tableData,
}: TableDataProps<T>) => {
  const [rows] = useState<T[]>(tableData);
  const columns = tableData ? (Object.keys(rows[0]) as string[]) : null;
  const [sortKey, setSortKey] = useState<SortKey>(columns ? columns[0] : "");
  const [sortDirection, setSortDirection] = useState<SortDirection>(ASC);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === ASC ? DESC : ASC));
      return;
    }

    setSortKey(key);
    setSortDirection(ASC);
  }

  const sortedRows = useMemo(() => {
    if (rows) {
      const sorted = [...rows].sort((a, b) => {
        const firstNum = a[sortKey];
        const secondNum = b[sortKey];

        if (typeof firstNum === "number" && typeof secondNum === "number") {
          return sortDirection === ASC
            ? firstNum - secondNum
            : secondNum - firstNum;
        }

        const aSort = String(firstNum).toLowerCase();
        const bSort = String(secondNum).toLowerCase();

        return sortDirection === ASC
          ? aSort.localeCompare(bSort)
          : bSort.localeCompare(aSort);
      });

      return sorted;
    }
  }, [rows, sortKey, sortDirection]);

  function getSortArrow(key: string) {
    if (sortKey !== key) return <SortButton sortDirection={NONE}/>;
    return sortDirection === ASC ? <SortButton sortDirection={ASC}/> : <SortButton sortDirection={DESC}/>;
  }

  return (
    <>
      {tableData && (
        <Styled.Table>
          <thead>
            <tr>
              {columns &&
                columns.map((key) => (
                  <th
                    key={key}
                    scope="col"
                    aria-sort={
                      sortKey === key
                        ? sortDirection === ASC
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    <Styled.HeaderButton type="button" onClick={() => handleSort(key)}>
                      {key} 
                      {getSortArrow(key)}
                    </Styled.HeaderButton>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows &&
              sortedRows.map((e: any) => (
                <tr>
                  {columns && columns.map((key) => <td key={key}>{e[key]}</td>)}
                </tr>
              ))}
          </tbody>
        </Styled.Table>
      )}
    </>
  );
};

SortableTable.displayName = "Widgets.SortableTable";

export default SortableTable;
