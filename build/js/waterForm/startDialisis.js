import generateEntry from"../utils/generateEntry.js";import generateDialisisContainer from"./dialisisContainer.js";import runAppendBtns from"../utils/runAppendBtns.js";const startDialisis=e=>{generateDialisisContainer(e);const t=document.querySelector(".dialisis-container");generateEntry("entryInfuseYesterday",t);for(let e=1;e<=3;e++)generateEntry("entryDialisis",t,!0);runAppendBtns("appendDialisis",e,t)};export default startDialisis;
//# sourceMappingURL=startDialisis.js.map
