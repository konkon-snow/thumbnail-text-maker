export interface StrokeLayer {
  enabled: boolean;
  color: string;
  width: number;
}

export interface Shadow {
  enabled: boolean;
  color: string;
  opacity: number;
  blur: number;
  offsetX: number;
  offsetY: number;
}

export interface GradientStop {
  offset: number;
  color: string;
}

export interface Gradient {
  enabled: boolean;
  stops: GradientStop[];
  direction: 'horizontal' | 'vertical';
}

export interface TextBox {
  id: string;
  text: string;
  x: number;
  y: number;
  fontFamily: string;
  fontSize: number;
  color: string;
  bold: boolean;
  italic: boolean;
  letterSpacing: number;
  lineHeight: number;
  strokes: [StrokeLayer, StrokeLayer, StrokeLayer];
  shadow: Shadow;
  gradient: Gradient;
}

export interface SnapLine {
  type: 'horizontal' | 'vertical';
  position: number;
}

export interface SnapResult {
  x: number;
  y: number;
  lines: SnapLine[];
}
