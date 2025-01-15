import{_ as n,D as o,o as p,c as e,G as t,B as D,z as s,a,O as r}from"./chunks/framework.ea809f5c.js";const _=JSON.parse('{"title":"Table","description":"","frontmatter":{"title":"Table"},"headers":[],"relativePath":"components/table.md","lastUpdated":1725864272000}'),c={name:"components/table.md"},y=s("h1",{id:"table",tabindex:"-1"},[a("table "),s("a",{class:"header-anchor",href:"#table","aria-label":'Permalink to "table"'},"​")],-1),B=s("p",null,"自定义表格",-1),A=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),F=s("p",null,"table/basic",-1),E=r("",4);function i(C,d,b,m,u,h){const l=o("Demo");return p(),e("div",null,[y,B,A,t(l,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20ref%3D%22tableRef%22%20%3Atable%3D%22table%22%20max-height%3D%22800%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23table-role%3D%22%7B%20row%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cel-radio-group%20v-model%3D%22row.role%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%94%A8%E6%88%B7%22%20size%3D%22small%22%3E%E7%94%A8%E6%88%B7%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%AE%A1%E7%90%86%E5%91%98%22%20size%3D%22small%22%3E%E7%AE%A1%E7%90%86%E5%91%98%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%3C%2Fel-radio-group%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-table%3E%0D%0A%20%20%3Cel-button%20%40click%3D%22submit%22%3Esubmit%3C%2Fel-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20Time%2C%20TableApi%20%7D%20from%20'undraw-ui'%0D%0A%0D%0AdefineOptions(%7B%0D%0A%20%20name%3A%20'assets'%0D%0A%7D)%0D%0A%0D%0Aconst%20table%20%3D%20reactive%3CTableApi%3E(%7B%0D%0A%20%20columns%3A%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20type%3A%20'selection'%2C%0D%0A%20%20%20%20%20%20width%3A%2050%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%BA%8F%E5%8F%B7'%2C%0D%0A%20%20%20%20%20%20width%3A%2060%2C%0D%0A%20%20%20%20%20%20type%3A%20'index'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%90%8D'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'username'%2C%0D%0A%20%20%20%20%20%20required%3A%20true%2C%0D%0A%20%20%20%20%20%20width%3A%20300%2C%0D%0A%20%20%20%20%20%20align%3A%20'center'%2C%0D%0A%20%20%20%20%20%20type%3A%20'component'%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-input'%2C%0D%0A%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'sex'%2C%0D%0A%20%20%20%20%20%20value%3A%20'%E7%94%B7'%2C%0D%0A%20%20%20%20%20%20width%3A%20300%2C%0D%0A%20%20%20%20%20%20type%3A%20'component'%2C%0D%0A%20%20%20%20%20%20rule%3A%20%5B%7B%20required%3A%20true%2C%20message%3A%20'%E6%80%A7%E5%88%AB%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%2C%20trigger%3A%20'blur'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-select'%2C%0D%0A%20%20%20%20%20%20%20%20options%3A%20%5B'%E7%94%B7'%2C%20'%E5%A5%B3'%5D%2C%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E9%BE%84'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'age'%2C%0D%0A%20%20%20%20%20%20value%3A%200%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20100%2C%0D%0A%20%20%20%20%20%20editor%3A%20true%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E8%A7%92%E8%89%B2'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'role'%2C%0D%0A%20%20%20%20%20%20value%3A%20'%E7%94%A8%E6%88%B7'%2C%0D%0A%20%20%20%20%20%20type%3A%20'custom'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0D%0A%20%20%20%20%20%20value%3A%20new%20Time().value%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20100%2C%0D%0A%20%20%20%20%20%20type%3A%20'component'%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-date'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%0D%0A%20%20%20%20%20%20width%3A%2060%2C%0D%0A%20%20%20%20%20%20type%3A%20'row-add'%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20data%3A%20%5B%5D%0D%0A%7D)%0D%0Aconst%20tableRef%20%3D%20ref()%0D%0A%0D%0Aasync%20function%20submit()%20%7B%0D%0A%20%20tableRef.value.validate((valid%3A%20boolean)%20%3D%3E%20%7B%0D%0A%20%20%20%20if%20(valid)%20%7B%0D%0A%20%20%20%20%20%20console.log(table.data)%0D%0A%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20console.log(valid)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D)%0D%0A%7D%0D%0A%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%3C%2Fstyle%3E%0D%0A",path:"table/basic",description:""},{default:D(()=>[F]),_:1}),E])}const g=n(c,[["render",i]]);export{_ as __pageData,g as default};
