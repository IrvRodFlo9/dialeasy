import{results}from"./data.js";const generateResult=(e,t,l=null)=>{const{calculator:s,extraClass:n,title:r}=results[e],a=s();null!==l&&l.remove();const u=a/1e3;t.innerHTML+=`\n    <div class="result ${n}">\n      <h4>${r}</h4>\n      <p>${a} mL = ${u} L</p>\n    </div>\n  `};export default generateResult;
//# sourceMappingURL=calculateResult.js.map
