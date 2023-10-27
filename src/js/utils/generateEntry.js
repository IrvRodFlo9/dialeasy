import { entryDatas } from "./data.js";

const generateEntry = (type, container, elementBefore = null) => {
  const { extraClass, html, append, data } = entryDatas[type];
  const { classInputs, classDisplay } = data;

  const entry = document.createElement("div");
  entry.classList.add("entry-data");
  entry.classList.add(extraClass);
  entry.innerHTML = html;

  elementBefore === null
    ? append(entry, container)
    : append(entry, container, elementBefore);

  for (let classInput in classInputs) {
    const input = entry.querySelector("." + classInputs[classInput]);
    input.addEventListener("click", () => {
      console.log(classInput);
    });
  }
};

export default generateEntry;
