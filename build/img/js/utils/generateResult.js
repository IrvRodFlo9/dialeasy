import{results}from"./data.js";const generateResult=(e,t)=>{const{calculator:l,extraClass:s,title:r}=results[e];t.querySelectorAll(".result").length>0&&t.querySelector(".result").remove();const a=l(),n=a/1e3,u=document.createElement("div");u.classList.add("result"),u.classList.add(s),u.innerHTML=`\n    <h4>${r}</h4>\n    <p>${a} mL = ${n} L</p>\n  `,t.appendChild(u)};export default generateResult;
//# sourceMappingURL=generateResult.js.map
