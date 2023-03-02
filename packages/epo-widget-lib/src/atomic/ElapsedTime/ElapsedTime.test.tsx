import { render, screen } from "@testing-library/react";

import ElapsedTime from ".";

const props = {
  year: 5,
  day: 4,
  hour: 3,
  minute: 2,
  second: 1,
};

describe("ElapsedTime", () => {
  it(`should render an accessible title`, () => {
    render(<ElapsedTime {...props} />);

    const title = screen.getByRole("heading");
    const time = screen.getByLabelText("elapsed_time.title");

    expect(title).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
  it(`should attach an elapsed datetime string`, () => {
    render(<ElapsedTime {...props} />);

    const time = screen.getByLabelText("elapsed_time.title");

    expect(time).toHaveAttribute(
      "datetime",
      `PT${props.year}Y${props.day}D${props.hour}H${props.minute}M${props.second}S`
    );
  });
});
