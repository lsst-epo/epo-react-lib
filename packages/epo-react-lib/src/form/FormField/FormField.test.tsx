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
};

describe("FormField", () => {
  it("should label input element", () => {
    render(<FormField {...props} />);

    const input = screen.getByLabelText(props.label, { exact: false });
    expect(input).toBeDefined();
  });
  it("should attach error message", () => {
    const errorMessage = "Text field error";
    render(<FormField {...props} error={errorMessage} />);

    const error = screen.getByRole("alert");
    expect(error).toHaveTextContent(errorMessage);
  });
});
