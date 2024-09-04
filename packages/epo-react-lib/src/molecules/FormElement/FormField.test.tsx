import { render, screen } from "@testing-library/react";
import FormField from ".";

const props = {
  label: "Text field",
  description: "Field description",
  required: true,
};

describe("FormField", () => {
  it("should label input element", () => {
    render(<FormField {...props} />);

    const input = screen.getByLabelText(props.label, { exact: false });
    expect(input).toBeDefined();
  });
});
