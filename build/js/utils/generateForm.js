import{forms}from"./data.js";const generateForm=(t,e)=>{const{title:n,subtitle:s,styleClass:r,initContent:a,run:o}=forms[t],i=document.createElement("form");i.classList.add("form"),i.classList.add(r),i.innerHTML=`\n    <div class="title">\n        <h2>${n}</h2>\n        <h3>${s}</h3>\n    </div>\n    ${a}\n  `,e.appendChild(i)};export default generateForm;
//# sourceMappingURL=generateForm.js.map
