const add = (a: number, b: number): number => {
  return a + b;
};

let c: number;
const subtract = (a: number, b: number): void => {
  c = a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};