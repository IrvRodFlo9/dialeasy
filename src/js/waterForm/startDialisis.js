import generateEntry from "../utils/generateEntry.js";
import generateDialisisContainer from "./dialisisContainer.js";
import runAppendBtns from "../utils/runAppendBtns.js";

const startDialisis = (container) => {
  generateDialisisContainer(container);
  const dialisisContainer = document.querySelector(".dialisis-container");

  for (let count = 1; count <= 3; count++) {
    generateEntry("entryDialisis", dialisisContainer);
  }

  runAppendBtns("appendDialisis", container, dialisisContainer);
};

export default startDialisis;
