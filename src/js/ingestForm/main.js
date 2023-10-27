import generateResult from "../utils/calculateResult.js";
import generateEntry from "../utils/generateEntry.js";
import generateAppendBtns from "../utils/generateAppend.js";

const ingestForm = document.querySelector(".form-ingest");
const ingestContainer = document.querySelector(".ingest-container");

generateAppendBtns("appendIngest", ingestForm);
const appendBtnsIngest = document.querySelector(".apend-ingest");
const btnAddIngest = document.querySelector(".add-ingest");
const btnCalculateIngest = document.querySelector(".calculate-ingest");

const runIngestForm = () => {
  generateEntry("entryIngest", ingestContainer);

  btnAddIngest.addEventListener("click", (e) => {
    e.preventDefault();
    generateEntry("entryIngest", ingestContainer);
  });

  btnCalculateIngest.addEventListener("click", (e) => {
    e.preventDefault();
    appendBtnsIngest.remove();
    generateResult("ingestResult", ingestForm, ingestContainer);
  });
};

export default runIngestForm;
