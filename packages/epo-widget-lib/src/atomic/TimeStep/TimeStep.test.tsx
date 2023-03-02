import { render, screen } from "@testing-library/react";

import TimeStep from ".";

const props = {
  year: 5,
  day: 4,
  hour: 3,
  minute: 2,
  second: 1,
};

describe("TimeStep", () => {
  it(`should render an accessible title`, () => {
    render(<TimeStep {...props} />);

    const title = screen.getByRole("heading");
    const time = screen.getByLabelText("time_step.title");

    expect(title).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
  it(`should attach an elapsed datetime string`, () => {
    render(<TimeStep {...props} />);

    const time = screen.getByLabelText("time_step.title");

    expect(time).toHaveAttribute(
      "datetime",
      `PT${props.year}Y${props.day}D${props.hour}H${props.minute}M${props.second}S`
    );
  });
});
