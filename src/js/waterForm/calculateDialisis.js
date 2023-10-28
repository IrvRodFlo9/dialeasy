import { entries } from "../utils/data.js";

const calculateDialisis = (entry) => {
  const { inputs, classDisplay } = entries.dialisis;
  const { inputDrain, inputInfuse } = inputs;

  const lastEntry = entry.previousElementSibling;
  const lastInfuse = lastEntry.querySelector("." + inputInfuse.className);
  const nowDrain = entry.querySelector("." + inputDrain.className);
  const screen = entry.querySelector("." + classDisplay);

  const infuse = lastInfuse.value;
  const drain = nowDrain.value;

  const result = parseFloat(drain) - parseFloat(infuse);

  return result;
};

export default calculateDialisis;
