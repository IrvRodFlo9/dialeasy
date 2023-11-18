const generateFoods = (foods, type = "other") => {
  let options = "";

  for (let food in foods) {
    if (foods[food].type === type) {
      options += `<option value="${food}">${foods[food].optionName}</option>`;
    }
  }

  return options;
};

export default generateFoods;
