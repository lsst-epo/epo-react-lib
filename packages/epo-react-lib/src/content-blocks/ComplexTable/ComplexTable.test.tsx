import { render, screen } from "@testing-library/react";
import ComplexTable from ".";

const props = {
  plainText: "Test table",
  complexTable: [
    {
      tableRow: [
        {
          id: "0VvOOc",
          cellContent: "Header",
        },
        {
          id: "3MeJAm",
          cellContent:
            "<a href='https://rubinobs.org/' target='_blank'>Header</a>",
        },
        {
          id: "fD8HUc",
          cellContent: "Header",
        },
        {
          id: "C5l39F",
          cellContent:
            "<a href='https://rubinobs.org/' target='_blank'>Header</a>",
        },
      ],
    },
    {
      tableRow: [
        {
          id: "KsKZtU",
          cellContent: "Rubin Observatory",
        },
        {
          id: "OVp7Dp",
          cellContent:
            "<a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
        },
        {
          id: "QRm6AM",
          cellContent: "Rubin Observatory",
        },
        {
          id: "0S8OAG",
          cellContent: "Rubin Observatory",
        },
      ],
    },
  ],
};

describe("ComplexTable", () => {
  it("should create a table with a caption", () => {
    render(<ComplexTable {...props} />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument;
    expect(table).toHaveAccessibleName;
  });
  it("should render rows", () => {
    render(<ComplexTable {...props} />);

    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(props.complexTable.length);
  });
});
