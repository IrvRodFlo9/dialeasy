import { entriesResults } from "./data.js";

const generateEntryResult = (type, entry, calculator) => {
  entry.querySelectorAll(".entry-result").length > 0 &&
    entry.querySelector(".entry-result").remove();

  const { textLabel, classStyle, classDisplay } = entriesResults[type];

  let classesDisplayToAdd = "";

  classDisplay.forEach((classDisplayToAdd) => {
    classesDisplayToAdd += ` ${classDisplayToAdd}`;
  });

  const result = calculator(entry);

  const pseudResultElement = document.createElement("div");
  pseudResultElement.classList.add("entry-result");
  pseudResultElement.classList.add(classStyle);
  pseudResultElement.innerHTML = `
        <p>${textLabel}</p>
        <p><span class="${classesDisplayToAdd}">${result}</span> mL</p>
    `;

  entry.appendChild(pseudResultElement);
};

export default generateEntryResult;
