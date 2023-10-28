const unlockDialisisEntries = (entry) => {
  const dialisisContainer = entry.parentNode;
  const yesterdayInput = entry.querySelector("input");
  const inputs = dialisisContainer.querySelectorAll("input");
  const btnCalculate =
    dialisisContainer.parentNode.querySelector(".btn-calculate");

  for (let index = 1; index < inputs.length; index++) {
    yesterdayInput.value != ""
      ? (inputs[index].disabled = false)
      : (inputs[index].disabled = true);
  }

  yesterdayInput.value != ""
    ? (btnCalculate.disabled = false)
    : (btnCalculate.disabled = true);
};

export default unlockDialisisEntries;
