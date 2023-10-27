import { entryDatas } from "./data.js";

const generateEntry = (type, container, elementBefore = null) => {
  const { extraClass, html, append, data } = entryDatas[type];
  const { inputs } = data;

  const entry = document.createElement("div");
  entry.classList.add("entry-data");
  entry.classList.add(extraClass);
  entry.innerHTML = html;

  elementBefore === null
    ? append(entry, container)
    : append(entry, container, elementBefore);

  for (let inputData in inputs) {
    const { className, eventType, functionEvent } = inputs[inputData];
    const input = entry.querySelector("." + className);
    input.addEventListener(eventType, () => {
      functionEvent();
    });
  }
};

export default generateEntry;
