import React from "react";

import InfiniteScroll from "react-infinite-scroller";
import styles from "./CommonSimpleTable.module.scss";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import stringToObjectRef from "@/utils/stringToObjectRef";
import TableContainer from "@mui/material/TableContainer";
import { FcKey } from "react-icons/fc";

interface ITableHeader {
  headerName: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  buildCell?: Function;
  field?: string;
  uppercase?: boolean;
  fontWeight?: "bold" | "normal"; // default is 'normal'
}

interface ICommonSimpleTableProps {
  headers: ITableHeader[];
  data: any[];
  loadMore: Function;
  hasMore: boolean;
  noItemText?: string;
  preventShowingKey?: boolean;
}

function CommonSimpleTable({
  headers,
  data,
  loadMore,
  hasMore,
  noItemText,
  preventShowingKey = false,
  ...restProps
}: ICommonSimpleTableProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      threshold={450}
      initialLoad={false}
      loadMore={() => loadMore(data?.length)}
      hasMore={hasMore}
      loader={<div key="loader">Loading...</div>}
      {...restProps}
    >
      <div className={styles.tableRoot}>
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            {headers && headers.length ? (
              <TableHead>
                <TableRow>
                  {headers.map((header, i) => (
                    <TableCell key={i} align={header.align}>
                      {header.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            ) : (
              ""
            )}

            <TableBody>
              {data && data.length ? (
                data.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      // hover
                      className={styles.tableTrBackground}
                    >
                      {headers.map((header, j) => {
                        return (
                          <TableCell
                            align={header.align ? header.align : "left"}
                            className={
                              (header.uppercase ? styles.textUppercase : "",
                              styles.tableTdTextColor)
                            }
                            key={`${index}-${j}`}
                            sx={{ fontWeight: header.fontWeight ?? "normal" }}
                          >
                            {!preventShowingKey && j == 0 ? (
                              <>
                                <FcKey />{" "}
                              </>
                            ) : (
                              ""
                            )}
                            {header.buildCell
                              ? header.buildCell(item, index)
                              : header.field &&
                                stringToObjectRef(item, header.field)
                              ? stringToObjectRef(item, header.field)
                              : "N/A"}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={headers.length}>
                    {noItemText ? noItemText : "No item found!"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </InfiniteScroll>
  );
}

export default CommonSimpleTable;
