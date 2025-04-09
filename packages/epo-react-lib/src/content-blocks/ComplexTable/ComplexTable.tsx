import { FunctionComponent } from "react";
import Container from "@/molecules/Container";
import * as Styled from "./styles";

interface ComplexTableCell {
  id: string;
  cellBackground?: string;
  hasFlexibleCellWidth?: boolean;
  cellWidth?: number;
  cellContent: string;
}

export interface ComplexTableRow {
  tableRow: ComplexTableCell[];
}

export interface ComplexTableProps {
  complexTable: ComplexTableRow[];
  plainText?: string;
  verticalAlignment?: string;
  styleAs?: "primary" | "secondary";
  isChild?: boolean;
}

const ComplexTable: FunctionComponent<ComplexTableProps> = ({
  complexTable,
  plainText,
  verticalAlignment,
  styleAs = "primary",
  isChild = false,
}) => {
  const renderTable = () => (
    <Styled.TableWrapper>
      <Styled.Table
        as="table"
        $styleAs={styleAs}
        $verticalAlignment={verticalAlignment}
      >
        {plainText && (
          <Styled.Caption {...{ $isChild: isChild }}>
            {plainText}
          </Styled.Caption>
        )}
        <tbody>
          {complexTable.map((row, i) => (
            <Styled.TableRow key={i}>
              {row.tableRow.map((cell) => (
                <Styled.TableCell
                  as={i === 0 ? "th" : "td"}
                  key={cell.id}
                  $row={i + 1}
                  $background={cell.cellBackground}
                  $hasFlexibleCellWidth={cell.hasFlexibleCellWidth}
                  colSpan={cell.cellWidth || 1}
                  dangerouslySetInnerHTML={{ __html: cell.cellContent }}
                />
              ))}
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.TableWrapper>
  );

  return isChild ? (
    renderTable()
  ) : (
    <Container width="narrow">{renderTable()}</Container>
  );
};

export default ComplexTable;
