import { render, screen } from "@testing-library/react";
import Error from ".";

const props = {
  children: "An error has occurred!",
};

test("should render error message", () => {
  render(<Error {...props} />);

  expect(screen.getByText(props.children)).toBeInTheDocument();
});
