import { useNavigationRailContext } from "../Context";
import * as Styled from "./styles";

interface Props {
  previousLabel?: string;
  nextLabel?: string;
}

export default function NavigationRailPrevNext({
  previousLabel = "Previous",
  nextLabel = "Next",
}: Props) {
  const { items, activeId, setActiveId } = useNavigationRailContext();

  const handlePrevious = () => {
    const index = items.findIndex(({ id }) => id === activeId);
    const newIndex = index - 1 < 0 ? 0 : index - 1;
    setActiveId(items[newIndex].id);
  };

  const handleNext = () => {
    const index = items.findIndex(({ id }) => id === activeId);
    const newIndex = index + 1 >= items.length ? items.length - 1 : index + 1;
    setActiveId(items[newIndex].id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Button styleAs="tertiary" onClick={handlePrevious}>
        {previousLabel}
      </Styled.Button>
      <Styled.Button onClick={handleNext}>{nextLabel}</Styled.Button>
    </Styled.Wrapper>
  );
}

NavigationRailPrevNext.displayName = "Layout.NavigationRail.PrevNext";
