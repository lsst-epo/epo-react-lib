export interface BaseProgressProps {
  min?: number;
  max?: number;
  value?: number;
  labelledById?: string;
  describedById?: string;
  className?: string;
  markerFormatter?: (value: number) => string;
}
