import{results}from"./data.js";const generateResult=(e,t)=>{const{calculator:s,extraClass:l,title:n}=results[e];console.log(s),t.innerHTML+=`\n    <div class="result ${l}">\n      <h4>${n}</h4>\n      <p>1000 mL = 1.0 L</p>\n    </div>\n  `};export default generateResult;
//# sourceMappingURL=calculateResult.js.map
