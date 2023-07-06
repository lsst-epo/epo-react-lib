import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SlideoutMenu, MenuGroup, MenuItem } from ".";
import { IconKey } from "@/svg/icons";

const props = {
  title: "Main menu",
  callToAction: "Settings and more",
  id: "mainMenu",
  isOpen: true,
};

const menuItems = [
  { icon: "LogOut", text: "Log out", id: "item-1" },
  { icon: "LogOut", text: "Language", id: "item-2" },
  { icon: "LogOut", text: "Help", id: "item-3" },
];

describe("Slideout menu", () => {
  it("is visible when opened", () => {
    render(<SlideoutMenu {...props} />);

    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
  });
  it("gives focus to the first menuitem", () => {
    render(
      <SlideoutMenu {...props}>
        <MenuGroup title="Quick access for students">
          {menuItems.map(({ icon, text, id }) => (
            <MenuItem icon={icon as IconKey} text={text} id={id} key={id} />
          ))}
        </MenuGroup>
      </SlideoutMenu>
    );

    expect(document.activeElement?.id).toBe(menuItems[0].id);
  });
  it("changes focus using arrow keys", () => {
    render(
      <SlideoutMenu {...props}>
        <MenuGroup title="Quick access for students">
          {menuItems.map(({ icon, text, id }) => (
            <MenuItem icon={icon as IconKey} text={text} id={id} key={id} />
          ))}
        </MenuGroup>
      </SlideoutMenu>
    );

    userEvent.keyboard("{ArrowDown}");

    waitFor(() => {
      expect(document.activeElement?.id).toBe(menuItems[1].id);
    });
  });
  it("closes the menu when Escape is pressed", () => {
    render(<SlideoutMenu {...props} />);

    const menu = screen.getByRole("menu");

    userEvent.keyboard("{Esc}");

    waitFor(() => {
      expect(menu).not.toBeVisible();
    });
  });
});
