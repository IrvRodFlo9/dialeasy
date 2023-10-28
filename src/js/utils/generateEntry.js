import { entryDatas } from "./data.js";

const generateEntry = (type, container) => {
  const { extraClass, html, append, data } = entryDatas[type];
  const { inputs } = data;

  const entry = document.createElement("div");
  entry.classList.add("entry-data");
  entry.classList.add(extraClass);
  entry.innerHTML = html();
  append(entry, container);

  for (let inputData in inputs) {
    const { className, eventType, functionEvent } = inputs[inputData];
    const input = entry.querySelector("." + className);

    input.addEventListener(eventType, () => {
      functionEvent(entry);
    });
  }
};

export default generateEntry;
