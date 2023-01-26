export const WINDOW_WIDTH = window.innerWidth;
export const WINDOW_HEIGHT = window.innerHeight;

export interface IFontWeight {
  LIGHT: number;
  REGULAR: number;
  MEDIUM: number;
  BOLD: number;
  BOLDEST: number;
}

export const fontWeightSwitch: IFontWeight = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
  BOLDEST: 900,
};
