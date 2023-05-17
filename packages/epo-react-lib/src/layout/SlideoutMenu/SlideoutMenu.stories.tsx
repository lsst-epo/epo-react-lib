import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from "@storybook/react";
import styled from "styled-components";
import { FunctionComponent, useRef, useState } from "react";

import SlideoutMenu from ".";
import MenuGroup from "./MenuGroup";
import MenuItem from "./MenuItem";
import { protoButton } from "@/styles/mixins/appearance";
import IconComposer from "@/svg/IconComposer/IconComposer";

const meta: ComponentMeta<typeof SlideoutMenu> = {
  component: SlideoutMenu,
  argTypes: {
    onCloseCallback: { action: "Closed menu" },
    onOpenCallback: { action: "Opened menu" },
  },
};
export default meta;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const IconButton = styled.button`
  ${protoButton()}
  display: flex;
  align-items: center;
  padding: 0.25rem;
  margin: 2rem;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--black, #000);
  }
`;

const AcknowledgementsSubmenu: FunctionComponent<{
  onOpenCallback: () => void;
  onCloseCallback: () => void;
}> = ({ onOpenCallback, onCloseCallback }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = "acknowledgements";
  return (
    <MenuItem
      icon="Info"
      text="Acknowledgements"
      onClick={() => setIsOpen(true)}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls={id}
    >
      <SlideoutMenu
        isOpen={isOpen}
        id={id}
        title="About this investigation"
        callToAction="Acknowledgments and Credits"
        onOpenCallback={() => onOpenCallback && onOpenCallback()}
        onCloseCallback={() => {
          setIsOpen(false);
          return onCloseCallback && onCloseCallback();
        }}
      >
        <p>
          This investigation was created by the Education and Public Outreach
          program of the Vera C. Rubin Observatory Construction project. In an
          effort to create and test this investigation prior to the start of
          Operations, we rely on the data of our scientific colleagues. In
          particular, this investigation has made use of data and/or services
          provided by the International Astronomical Union’s Minor Planet
          Center.
        </p>
        <p>
          We thank the following instructors who volunteered to pilot test this
          investigation:
        </p>
        <ul>
          <li>Chris Bolhuis, Hudsonville High School, Hudsonville, MI</li>
          <li>
            Alice Few, Pierce College Ft. Steilacoom, Lakewood, WA and Tacoma
            Community College, Tacoma, WA
          </li>
          <li>Scott Hildreth, Chabot College, Hayward, CA</li>
          <li>
            Joe Muise, St. Thomas More Collegiate, Burnaby, British Columbia
          </li>
          <li>
            Denine Voegeli, Plainview-Elgin-Millville Jr. High School, Elgin, MN
          </li>
        </ul>
        <p>
          The team would also like to thank Siegfried Eggl, Henry Hsieh, and
          Mike Kelley for useful scientific discussions in the development of
          this investigation.
        </p>
      </SlideoutMenu>
    </MenuItem>
  );
};

const Template: ComponentStory<typeof SlideoutMenu> = ({ ...args }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(args.isOpen || true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClose = () => {
    args.onCloseCallback && args.onCloseCallback();
    buttonRef.current && buttonRef.current.focus();

    return setIsOpen(false);
  };

  return (
    <Wrapper>
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-haspopup="menu"
        aria-controls={args.id}
        ref={buttonRef}
      >
        <IconComposer icon="hamburger" />
      </IconButton>
      <SlideoutMenu
        {...args}
        isOpen={isOpen}
        isSubMenuOpen={isSubMenuOpen}
        onCloseCallback={() => handleClose()}
      >
        <MenuGroup title="Settings">
          <MenuItem icon="Globe" text="Language selection" />
          <MenuItem icon="ArrowUpFromBracket" text="Share this investigation" />
          <MenuItem icon="QuestionCircle" text="Help" />
          <AcknowledgementsSubmenu
            onOpenCallback={() => setIsSubMenuOpen(true)}
            onCloseCallback={() => setIsSubMenuOpen(false)}
          />
        </MenuGroup>
        <MenuGroup title="Quick access for students">
          <MenuItem icon="LogOut" text="Log out" />
        </MenuGroup>
        <MenuGroup title="Quick access for educators">
          <MenuItem icon="User" text="Access educator mode" />
        </MenuGroup>
      </SlideoutMenu>
    </Wrapper>
  );
};

export const Primary: ComponentStoryObj<typeof SlideoutMenu> = Template.bind(
  {}
);

Primary.args = {
  title: "Main menu",
  callToAction: "Settings and more",
  id: "mainMenu",
};
