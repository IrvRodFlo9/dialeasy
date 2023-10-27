import { entryDatas } from "./data.js";

const generateEntry = (type, container, elementBefore = null) => {
  const { extraClass, html, append } = entryDatas[type];

  const entry = document.createElement("div");
  entry.classList.add("entry-data");
  entry.classList.add(extraClass);
  entry.innerHTML = html;

  elementBefore === null
    ? append(entry, container)
    : append(entry, container, elementBefore);
};

export default generateEntry;
