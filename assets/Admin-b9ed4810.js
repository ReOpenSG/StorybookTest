import{i as b,j as t,a as n}from"./index-ffecd7da.js";import{s as f,a as j,b as g,c as N}from"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import{r as i}from"./react-25ab5c11.js";import{Q as w}from"./react-toastify.esm-d682d2c7.js";import{c as v}from"./recoil-219bc644.js";import{B as y}from"./BannerSection-3b5577fd.js";import{d as S}from"./reactRouter-bcec4121.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";const W="RwTM",I="GIss",P="_2Z0K",C="FC5t",z="Gzzc",A="-dzl",E="OlKy",F="q8bU",e={container:W,section:I,form:P,inputWrapper:C,label:z,input:A,button:E,buttonWrapper:F};function M(){const[r,a]=i.useState(""),[c,o]=i.useState(""),l=v(b),p=S(),m=s=>a(s.target.value),d=s=>o(s.target.value),u=async s=>{s.preventDefault();try{await f(n,r,c),await j(n,g),p("/community")}catch(h){w(h)}},x=()=>{N(n),a(""),o("")};return t.jsxs("div",{className:e.container,children:[t.jsx(y,{category:"Admin",title:"관리자 페이지"}),t.jsx("section",{className:e.section,children:l?t.jsxs("div",{className:e.buttonWrapper,children:[t.jsx("p",{className:"text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl",children:"환영합니다, 관리자님!"}),t.jsx("button",{type:"button",onClick:x,className:e.button,children:"로그아웃"})]}):t.jsxs("form",{onSubmit:u,className:e.form,children:[t.jsxs("div",{className:e.inputWrapper,children:[t.jsx("label",{htmlFor:"id",className:e.label,children:"아이디"}),t.jsx("input",{type:"text",id:"id",name:"id",onChange:m,placeholder:"아이디를 입력하세요",className:e.input})]}),t.jsxs("div",{className:e.inputWrapper,children:[t.jsx("label",{htmlFor:"pw",className:e.label,children:"비밀번호"}),t.jsx("input",{type:"password",id:"pw",name:"pw",onChange:d,placeholder:"비밀번호를 입력하세요",className:e.input})]}),t.jsx("input",{type:"submit",value:"로그인",className:e.button})]})})]})}export{M as default};