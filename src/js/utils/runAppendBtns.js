import { appendBtns } from "./data.js";
import generateAppendBtns from "./generateAppend.js";
import generateEntry from "./generateEntry.js";

const runAppendBtns = (type, container, entriesContainer) => {
  const {
    classMain,
    classAdd,
    classCalculate,
    entryToAdd,
    resultType,
    calculateFunction,
  } = appendBtns[type];

  generateAppendBtns(appendBtns[type], container);
  const btnsContainer = document.querySelector("." + classMain);
  const btnAdd = document.querySelector("." + classAdd);
  const btnCalculate = document.querySelector("." + classCalculate);

  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    generateEntry(entryToAdd, entriesContainer);
  });

  btnCalculate.addEventListener("click", (e) => {
    e.preventDefault();
    btnsContainer.remove();
    calculateFunction(resultType, container, entriesContainer);
  });
};

export default runAppendBtns;
