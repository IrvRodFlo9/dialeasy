import { forms } from "./data.js";

const generateForm = (type, container) => {
  const { title, subtitle, styleClass, initContent, run } = forms[type];

  const form = document.createElement("form");
  form.classList.add("form");
  form.classList.add(styleClass);

  form.innerHTML = `
    <div class="title">
        <h2>${title}</h2>
        <h3>${subtitle}</h3>
    </div>
    ${initContent}
  `;

  container.appendChild(form);
};

export default generateForm;
