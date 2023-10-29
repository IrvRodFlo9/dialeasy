const unlockCalculateBtn = (entry) => {
  const inputs = entry.querySelectorAll("input");
  const btnCalculate =
    entry.parentNode.parentNode.querySelector(".btn-calculate");

  inputs.forEach((input) => {
    input.value != ""
      ? (btnCalculate.disabled = false)
      : (btnCalculate.disabled = true);
  });
};
export default unlockCalculateBtn;
