import { foods, entries } from "../utils/data.js";

const calculateEquivalent = (entry) => {
  const { inputs, classDisplay } = entries.ingest;
  const { inputQuantity, selectFood } = inputs;

  const screenEquivalent = entry.querySelector("." + classDisplay);
  const inputQuantityElement = entry.querySelector(
    "." + inputQuantity.className
  );
  const selectFoodElement = entry.querySelector("." + selectFood.className);

  const equivalent = foods[selectFoodElement.value].equivalent;
  const quantity = inputQuantityElement.value;

  const value = Math.round(equivalent * quantity);

  screenEquivalent.textContent = value;
};

export default calculateEquivalent;
