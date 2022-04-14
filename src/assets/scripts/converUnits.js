import { useUnitsStore } from "@/stores/unitsStore";

const unitsStore = useUnitsStore();

const addZeros = (val) => (val <= 9 ? `0${val}` : val);

const c2f = (c) => c * (9 / 5) + 32;

const f2c = (t) => (t - 32) * (5 / 9);

const parseUnits = (v) => {
  let c =
    localStorage.celcius !== undefined
      ? localStorage.celcius
      : unitsStore.getCelcius;
  return c === "1"
    ? `${parseFloat(c2f(v)).toFixed(2)} °F`
    : `${parseFloat(v).toFixed(2)} °C`;
};

export { c2f, f2c, addZeros, parseUnits };
