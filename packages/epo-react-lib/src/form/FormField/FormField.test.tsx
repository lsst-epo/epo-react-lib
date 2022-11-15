import { render, screen } from "@testing-library/react";
import FormField from ".";
import Input from "@/form/Input";

const inputId = "text-field";
const props = {
  label: "Text field",
  htmlFor: inputId,
  children: <Input id={inputId} />,
  description: "Field description",
  required: true,
  error: "Text field error",
};

describe("FormField", () => {
  it("should label input element", () => {
    render(<FormField {...props} />);

    const input = screen.getByLabelText(props.label);
    expect(input).toBeDefined();
  });
  it("should attach error message", () => {
    render(<FormField {...props} />);

    const error = screen.getByRole("alert");
    expect(error).toHaveTextContent(props.error);
  });
});
