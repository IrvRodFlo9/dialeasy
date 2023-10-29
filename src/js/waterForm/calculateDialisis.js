import { entries } from "../utils/data.js";

const calculateDialisis = (entry) => {
  const { inputs } = entries.dialisis;
  const { inputDrain, inputInfuse } = inputs;

  const lastEntry = entry.previousElementSibling;
  const lastInfuse = lastEntry.querySelector("." + inputInfuse.className);
  const nowDrain = entry.querySelector("." + inputDrain.className);

  const infuse = lastInfuse.value;
  const drain = nowDrain.value;

  const result = Math.round(parseFloat(drain) - parseFloat(infuse));

  return result;
};

export default calculateDialisis;
