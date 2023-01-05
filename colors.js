export const DARK_BG = "#57606f";
export const DARK_HEADER = "#2f3542";
export const DARK_POINT = "#eccc68";

export const LIGHT_BG = "#ffffff";
export const LIGHT_HEADER = "#f1f2f6";
export const LIGHT_POINT = "#5352ed";

export const darkTheme = {
  point: DARK_POINT,
  normal: "#ffffff",
  verticalInfo: "#2c3e50",
};

export const lightTheme = {
  point: LIGHT_POINT,
  normal: "#000000",
  verticalInfo: "#ecf0f1",
};

// 1. db에 저장
// 2. state 갱신
// db에 넣는 과정이 필요하기 때문에 미들웨어(thunk)를 사용하는 것
