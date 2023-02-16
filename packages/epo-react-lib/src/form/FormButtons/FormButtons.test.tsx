import { render, screen } from "@testing-library/react";
import FormButton from ".";
import Button from "@/atomic/Button";

const children = [
  <Button key="tertiary-button" styleAs="tertiary">Reset</Button>,
  <Button key="submit-button">Submit</Button>,
];

describe("FormButtons", () => {
  it("Renders children in layout", () => {
    render(<FormButton {...{ children }} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(children.length);
  });
});
