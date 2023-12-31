import { foods, entries } from "../utils/data.js";

const calculateEquivalent = (entry) => {
  const { inputs } = entries.ingest;
  const { inputQuantity, selectFood } = inputs;

  const inputQuantityElement = entry.querySelector(
    "." + inputQuantity.className
  );
  const selectFoodElement = entry.querySelector("." + selectFood.className);

  const equivalent = foods[selectFoodElement.value].equivalent;
  const quantity = inputQuantityElement.value;

  const result = Math.round(equivalent * quantity);

  return result;
};

export default calculateEquivalent;
