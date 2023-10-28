const unlosckCalculateBtn = (entry) => {
  const inputQuantity = entry.querySelector("input");
  const btnCalculate =
    entry.parentNode.parentNode.querySelector(".btn-calculate");

  inputQuantity.value != "" && (btnCalculate.disabled = false);
};

export default unlosckCalculateBtn;
