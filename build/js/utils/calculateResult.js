import{results}from"./data.js";const generateResult=(e,t)=>{const{calculator:s,extraClass:l,title:n}=results[e],r=s(),a=r/1e3;t.innerHTML+=`\n    <div class="result ${l}">\n      <h4>${n}</h4>\n      <p>${r} mL = ${a} L</p>\n    </div>\n  `};export default generateResult;
//# sourceMappingURL=calculateResult.js.map
