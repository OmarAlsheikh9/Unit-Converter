export const units = {
  length: {
    labels: [
      "Millimeter",
      "Centimeter",
      "Meter",
      "Kilometer",
      "Inch",
      "Foot",
      "Yard",
      "Mile",
    ],
    keys: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"],
    symbols: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"],
    toBase: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344,
    },
  },
  weight: {
    labels: ["Milligram", "Gram", "Kilogram", "Ounce", "Pound"],
    keys: ["mg", "g", "kg", "oz", "lb"],
    symbols: ["mg", "g", "kg", "oz", "lb"],
    toBase: { mg: 0.000001, g: 0.001, kg: 1, oz: 0.0283495, lb: 0.453592 },
  },
  temperature: {
    labels: ["Celsius", "Fahrenheit", "Kelvin"],
    keys: ["C", "F", "K"],
    symbols: ["°C", "°F", "K"],
    toBase: {
      C: (x) => x,
      F: (x) => ((x - 32) * 5) / 9,
      K: (x) => x - 273.15,
    },
    fromBase: {
      C: (x) => x,
      F: (x) => (x * 9) / 5 + 32,
      K: (x) => x + 273.15,
    },
  },
};