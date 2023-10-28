import generateEntry from "../utils/generateEntry.js";
import runAppendBtns from "../utils/runAppendBtns.js";

const ingestForm = document.querySelector(".form-ingest");
const ingestContainer = document.querySelector(".ingest-container");

const runIngestForm = () => {
  generateEntry("entryIngest", ingestContainer);
  runAppendBtns("appendIngest", ingestForm, ingestContainer);
};

export default runIngestForm;
