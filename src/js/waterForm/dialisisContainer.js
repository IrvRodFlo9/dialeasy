const generateDialisisContainer = (container) => {
  const dialisisContainer = document.createElement("section");
  dialisisContainer.classList.add("dialisis-container");
  dialisisContainer.innerHTML = `
      <div class="dialisis yesterday-dialisis">
          <div class="input last-day">
          <label>Entra (Infunde) último día anterior (mL)</label>
          <input type="number" />
          </div>
      </div>
    `;
  container.appendChild(dialisisContainer);
};

export default generateDialisisContainer;
