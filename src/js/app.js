import runWaterForm from "./waterForm/main.js";
import generateForm from "./utils/generateForm.js";
import runIngestForm from "./ingestForm/main.js";

runWaterForm();
runIngestForm();

const container = document.querySelector(".container");

/*  
generateForm("ingest", container);
generateForm("waterManual", container);
*/
