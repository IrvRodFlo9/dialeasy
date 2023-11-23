const generateFoods=(e,o="other")=>{let t="";for(let n in e)e[n].type===o&&(t+=`<option value="${n}">${e[n].optionName}</option>`);return t};export default generateFoods;
//# sourceMappingURL=generateFoods.js.map
