const generateFoods = (foods) => {
  let options = "";

  for (let food in foods) {
    options += `<option value="${food}">${foods[food].optionName}</option>`;
  }

  return options;
};

export default generateFoods;
