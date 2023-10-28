const unlockDialisisEntries = (entry) => {
  const dialisisContainer = entry.parentNode;
  const yesterdayInput = entry.querySelector("input");
  const inputs = dialisisContainer.querySelectorAll("input");

  for (let index = 1; index < inputs.length; index++) {
    yesterdayInput.value != ""
      ? (inputs[index].disabled = false)
      : (inputs[index].disabled = true);
  }
};
export default unlockDialisisEntries;
