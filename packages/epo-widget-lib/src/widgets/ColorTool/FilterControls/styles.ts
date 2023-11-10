import styled from "styled-components";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import Button from "@rubin-epo/epo-react-lib/Button";

export const FilterContainer = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  display: grid;
  align-items: center;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  grid-column: 1 / -1;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
`;

export const FilterToggle = styled(Button)`
  background-color: var(--filter-toggle-background, #f7f7f7);
  border: 1px solid;
  color: var(--filter-toggle-color, #6c6e6e);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  font-weight: var(--FONT_WEIGHT_MEDIUM, 500);
  font-size: 22px;
  text-transform: lowercase;
  width: 38px;
  height: 38px;
  padding: 0;
  user-select: none;
`;

export const FilterLabel = styled.label`
  overflow: hidden;

  input:not(:disabled) + span {
    cursor: pointer;

    &:hover {
      outline: 2px solid #6c6e6e;
      outline-offset: -2px;
    }
  }

  input:not(:disabled):focus + span,
  input:not(:disabled):focus-visible + span {
    outline: 2px solid #6c6e6e;
    outline-offset: -2px;
  }

  input:not(:disabled):checked + span {
    --filter-toggle-background: var(--turquoise85, #12726c);
    --filter-toggle-color: var(--white, #fff);

    &:hover {
      outline: 1px solid var(--white, #fff);
      outline-offset: -3px;
    }
  }

  input:not(:disabled):checked:focus + span,
  input:not(:disabled):checked:focus-visible + span {
    outline: 1px solid var(--white, #fff);
    outline-offset: -3px;
  }
`;

export const Slider = styled(HorizontalSlider)`
  padding: 0;
  width: 100%;
`;
