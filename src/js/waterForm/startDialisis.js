import generateResult from "../utils/calculateResult.js";
import generateEntry from "../utils/generateEntry.js";
import generateAppendBtns from "../utils/generateAppend.js";
import generateDialisisContainer from "./dialisisContainer.js";
import generateWaterCalculator from "./waterCalculator.js";

const startDialisis = (container) => {
  generateDialisisContainer(container);

  const dialisisContainer = document.querySelector(".dialisis-container");

  for (let count = 1; count <= 3; count++) {
    generateEntry("entryDialisis", dialisisContainer);
  }

  generateAppendBtns("appendDialisis", dialisisContainer);
  const appendBtnsDialisis = document.querySelector(".apend-dialisis");
  const btnAddDialisis = document.querySelector(".add-dialisis");
  const btnCalculateDialisis = document.querySelector(".calculate-dialisis");

  btnAddDialisis.addEventListener("click", (e) => {
    e.preventDefault();
    generateEntry("entryDialisis", dialisisContainer, appendBtnsDialisis);
  });

  btnCalculateDialisis.addEventListener("click", (e) => {
    e.preventDefault();
    appendBtnsDialisis.remove();
    generateResult("dialisisResult", dialisisContainer);
    generateWaterCalculator(container);
  });
};

export default startDialisis;
