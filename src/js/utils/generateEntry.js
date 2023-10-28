import { entryDatas } from "./data.js";

const generateEntry = (type, container, lock = false) => {
  const { extraClasses, html, append, data } = entryDatas[type];
  const { inputs } = data;

  const entry = document.createElement("div");
  type !== "entryInfuseYesterday" && entry.classList.add("entry-data");
  extraClasses.forEach((extraClass) => {
    entry.classList.add(extraClass);
  });

  entry.innerHTML = html();
  container.appendChild(entry);

  for (let inputData in inputs) {
    const { className, eventType, functionEvent } = inputs[inputData];
    const input = entry.querySelector("." + className);
    input.disabled = lock;

    input.addEventListener(eventType, () => {
      functionEvent(entry);
    });
  }
};

export default generateEntry;
