const unlockCalculateWater = (inputs, btnCalculate) => {
  let valid = true;

  inputs.forEach((input) => {
    input.value == "" ? (valid = true) : (valid = false);
  });

  btnCalculate.disabled = valid;
};

export default unlockCalculateWater;
