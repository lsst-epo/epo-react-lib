import { FunctionComponent, Fragment } from "react";
import Container from "@/molecules/Container";
import * as Styled from "./styles";

export interface SimpleTableRow {
  rowColor: Styled.SimpleTableColor;
  rowTitle: string;
  rowContent: string;
}

export interface SimpleTableProps {
  simpleTable: SimpleTableRow[];
}

const SimpleTable: FunctionComponent<SimpleTableProps> = ({ simpleTable }) => {
  return simpleTable ? (
    <Container width="narrow">
      <Styled.List role="list">
        {simpleTable.map((row, i) => (
          <Fragment key={i}>
            <Styled.Title
              $color={row.rowColor}
              dangerouslySetInnerHTML={{ __html: row.rowTitle }}
            />
            <Styled.Description
              $color={row.rowColor}
              dangerouslySetInnerHTML={{ __html: row.rowContent }}
            />
          </Fragment>
        ))}
      </Styled.List>
    </Container>
  ) : null;
};

export default SimpleTable;
