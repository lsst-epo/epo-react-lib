import NavigationRail from "@/layout/NavigationRail";
import { useState } from "react";
import { IconKey } from "@rubin-epo/epo-react-lib";
import Histogram from "@/charts/Histogram";
import * as Styled from "./styles";

interface Props {
  data: ({
    id: string;
    icon?: IconKey | React.ReactNode;
    label: string;
    header?: string;
  } & React.ComponentProps<typeof Histogram>)[];
  navLabel?: string;
}

export default function InteractiveHistogram({ data, navLabel }: Props) {
  const [activeData, setActiveData] = useState(data[0]);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const navItems = data.map((item) => ({
    id: item.id,
    label: item.label,
    header: item.header,
    icon: item.icon,
  }));

  const handleSelect = (id: string) => {
    const chartData = data.find((item) => item.id === id);
    setActiveData(chartData || data[0]);
    setSelectedIndex(undefined);
  };

  return data.length > 1 ? (
    <NavigationRail items={navItems} onSelect={handleSelect} label={navLabel}>
      <Styled.ChartWrapper>
        <Histogram
          selectedIndex={selectedIndex}
          onBarClick={({ index }) => setSelectedIndex(index)}
          {...activeData}
        />
      </Styled.ChartWrapper>
    </NavigationRail>
  ) : data[0] ? (
    <div>
      {activeData.header && (
        <Styled.SingleHeader aria-live="polite">
          {activeData.header}
        </Styled.SingleHeader>
      )}
      <Styled.ChartWrapper>
        <Histogram
          selectedIndex={selectedIndex}
          onBarClick={({ index }) => setSelectedIndex(index)}
          {...activeData}
        />
      </Styled.ChartWrapper>
    </div>
  ) : null;
}
