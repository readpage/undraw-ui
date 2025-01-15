import{_ as n,D as o,o as e,c as p,G as t,B as D,z as s,a,O as A}from"./chunks/framework.ea809f5c.js";const g=JSON.parse('{"title":"Crud","description":"","frontmatter":{"title":"Crud"},"headers":[],"relativePath":"components/crud.md","lastUpdated":1725864272000}'),r={name:"components/crud.md"},c=s("h1",{id:"crud",tabindex:"-1"},[a("crud "),s("a",{class:"header-anchor",href:"#crud","aria-label":'Permalink to "crud"'},"​")],-1),B=s("p",null,"表格的增删改查",-1),E=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),y=s("p",null,"crud/basic",-1),F=A("",4);function i(C,d,u,m,f,h){const l=o("Demo");return e(),p("div",null,[c,B,E,t(l,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-crud%20ref%3D%22crudRef%22%20%3Atable%3D%22table%22%20%3Acrud%3D%22crud%22%20%3Aform%3D%22form%22%20max-height%3D%22800%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23query%3E%0D%0A%20%20%20%20%20%20%3C!--%20%3CQuery%20v-model%3D%22query%22%20%3Aallergen%3D%22form.options%5B'allergen'%5D%20%7C%7C%20%5B%5D%22%20%40submit%3D%22_submit%22%20%2F%3E%20--%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C!--%20%3CForm%20v-model%3D%22form.visible%22%20v-bind%3D%22form%22%20%40finish%3D%22crudRef%3F.refresh%22%20%2F%3E%20--%3E%0D%0A%20%20%20%20%3Ctemplate%20%23tool%3E%0D%0A%20%20%20%20%20%20%3Cel-button%20%3Aicon%3D%22Upload%22%20class%3D%22u-small%22%3E%E5%AF%BC%E5%85%A5%3C%2Fel-button%3E%0D%0A%20%20%20%20%20%20%3Cel-button%20%3Aicon%3D%22Download%22%20class%3D%22u-small%22%20type%3D%22info%22%20%40click%3D%22download%22%3E%E5%AF%BC%E5%87%BA%3C%2Fel-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23table-role%3D%22%7Brow%7D%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20v-for%3D%22(item%2C%20index)%20in%20state.tags%22%20%3Akey%3D%22index%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-tag%20v-if%3D%22row.role%20%3D%3D%20item.label%22%20%3Atype%3D%22item.value%22%3E%7B%7B%20item.label%20%7D%7D%3C%2Fel-tag%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23form-role%3D%22%7B%20item%2C%20data%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cel-radio-group%20v-model%3D%22data.role%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%94%A8%E6%88%B7%22%20size%3D%22small%22%3E%E7%94%A8%E6%88%B7%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%AE%A1%E7%90%86%E5%91%98%22%20size%3D%22small%22%3E%E7%AE%A1%E7%90%86%E5%91%98%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%3C%2Fel-radio-group%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-crud%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20debounce%20%7D%20from%20'undraw-ui'%0D%0Aimport%20%7B%20Download%2C%20Upload%20%7D%20from%20'%40element-plus%2Ficons-vue'%0D%0Aimport%20%7B%20TableApi%2C%20CrudApi%2C%20FormApi%2C%20CrudInstance%2C%20Time%2C%20throttle%7D%20from%20'undraw-ui'%0D%0A%0D%0AdefineOptions(%7B%0D%0A%20%20name%3A%20'assets'%0D%0A%7D)%0D%0A%0D%0Aconst%20crudRef%20%3D%20ref%3CCrudInstance%3E()%0D%0A%0D%0Aconst%20table%20%3D%20reactive%3CTableApi%3E(%7B%0D%0A%20%20columns%3A%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20type%3A%20'selection'%2C%0D%0A%20%20%20%20%20%20width%3A%2050%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%BA%8F%E5%8F%B7'%2C%0D%0A%20%20%20%20%20%20type%3A%20'index'%2C%0D%0A%20%20%20%20%20%20width%3A%2060%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%90%8D'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'username'%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20140%2C%0D%0A%20%20%20%20%20%20align%3A%20'center'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E8%A7%92%E8%89%B2'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'role'%2C%0D%0A%20%20%20%20%20%20type%3A%20'custom'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'sex'%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20100%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E9%BE%84'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'age'%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20100%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0D%0A%20%20%20%20%20%20minWidth%3A%20160%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20type%3A%20'operation'%2C%0D%0A%20%20%20%20%20%20width%3A%20110%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20data%3A%20%5B%5D%2C%0D%0A%20%20total%3A%200%2C%0D%0A%20%20refresh%3A%20refresh%0D%0A%7D)%0D%0A%0D%0Aconst%20crud%20%3D%20reactive%3CCrudApi%3E(%7B%0D%0A%20%20save%3A%20(val%2C%20finish)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log('save'%2C%20val)%0D%0A%20%20%20%20finish()%0D%0A%20%20%7D%2C%0D%0A%20%20update%3A%20(val%2C%20finish)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log('update'%2C%20val)%0D%0A%20%20%20%20finish()%0D%0A%20%20%7D%2C%0D%0A%20%20remove%3A%20(val%2C%20finish)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(val)%0D%0A%20%20%20%20finish()%0D%0A%20%20%7D%0D%0A%7D)%0D%0A%0D%0Aconst%20form%20%3D%20reactive%3CFormApi%3E(%7B%0D%0A%20%20data%3A%20%7B%7D%2C%0D%0A%20%20group%3A%20%7B%0D%0A%20%20%20%20type%3A%20'tabs'%2C%0D%0A%20%20%20%20labels%3A%20%5B'%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF'%2C%20'%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF'%5D%0D%0A%20%20%7D%2C%0D%0A%20%20items%3A%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%90%8D'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'username'%2C%0D%0A%20%20%20%20%20%20width%3A%20300%2C%0D%0A%20%20%20%20%20%20required%3A%20true%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-input'%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'sex'%2C%0D%0A%20%20%20%20%20%20value%3A%20''%2C%0D%0A%20%20%20%20%20%20width%3A%20200%2C%0D%0A%20%20%20%20%20%20rule%3A%20%5B%7B%20required%3A%20true%2C%20message%3A%20'%E6%80%A7%E5%88%AB%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%2C%20trigger%3A%20'blur'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-select'%2C%0D%0A%20%20%20%20%20%20%20%20options%3A%20%5B'%E7%94%B7'%2C%20'%E5%A5%B3'%5D%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E8%A7%92%E8%89%B2'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'role'%2C%0D%0A%20%20%20%20%20%20value%3A%20'%E7%94%A8%E6%88%B7'%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E9%BE%84'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'age'%2C%0D%0A%20%20%20%20%20%20value%3A%200%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-input'%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0D%0A%20%20%20%20%20%20value%3A%20new%20Time().value%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-date'%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%0D%0A%7D)%0D%0A%0D%0Aconst%20state%20%3D%20reactive(%7B%0D%0A%20%20tags%3A%20%5B%7Blabel%3A%20'%E7%94%A8%E6%88%B7'%2C%20value%3A%20'primary'%7D%2C%20%7B%20label%3A%20'%E7%AE%A1%E7%90%86%E5%91%98'%2C%20value%3A%20'success'%7D%5D%0D%0A%7D)%0D%0A%0D%0A%2F%2F%20--%3E%20%E6%9F%A5%E8%AF%A2%0D%0Aconst%20query%20%3D%20reactive(%7B%0D%0A%20%20keyword%3A%20''%2C%0D%0A%20%20assetsNum%3A%20%5B''%2C%20''%5D%0D%0A%7D)%0D%0Aexport%20type%20queryType%20%3D%20typeof%20query%0D%0A%0D%0Afunction%20refresh(finish%3A%20()%20%3D%3E%20void%2C%20current%3A%20number%2C%20size%3A%20number)%20%7B%0D%0A%20%20let%20data%20%3D%20%5B%0D%0A%20%20%20%20%7B%20username%3A%20'%E5%88%98%E4%B8%80'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2023%2C%20date%3A%20'2024-07-01'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E9%99%88%E4%BA%8C'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%AE%A1%E7%90%86%E5%91%98'%2C%20age%3A%2022%2C%20date%3A%20'2024-07-06'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E5%BC%A0%E4%B8%89'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2025%2C%20date%3A%20'2024-07-21'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E6%9D%8E%E5%9B%9B'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%AE%A1%E7%90%86%E5%91%98'%2C%20age%3A%2021%2C%20date%3A%20'2024-07-11'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E7%8E%8B%E4%BA%94'%2C%20sex%3A%20'%E5%A5%B3'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2024%2C%20date%3A%20'2024-07-03'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E8%B5%B5%E5%85%AD'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2023%2C%20date%3A%20'2024-04-01'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E5%AD%99%E4%B8%83'%2C%20sex%3A%20'%E5%A5%B3'%2C%20role%3A%20'%E7%AE%A1%E7%90%86%E5%91%98'%2C%20age%3A%2024%2C%20date%3A%20'2024-07-01'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E5%91%A8%E5%85%AB'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2026%2C%20date%3A%20'2024-05-05'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E5%90%B4%E4%B9%9D'%2C%20sex%3A%20'%E5%A5%B3'%2C%20role%3A%20'%E7%AE%A1%E7%90%86%E5%91%98'%2C%20age%3A%2022%2C%20date%3A%20'2024-03-01'%20%7D%2C%0D%0A%20%20%20%20%7B%20username%3A%20'%E9%83%91%E5%8D%81'%2C%20sex%3A%20'%E7%94%B7'%2C%20role%3A%20'%E7%94%A8%E6%88%B7'%2C%20age%3A%2024%2C%20date%3A%20'2024-02-21'%20%7D%0D%0A%20%20%5D%0D%0A%20%20setTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20table.data%20%3D%20data%0D%0A%20%20%20%20table.total%20%3D%2010%0D%0A%20%20%20%20finish()%0D%0A%20%20%7D%2C%20300)%0D%0A%7D%0D%0A%2F%2F%20%3C-%0D%0A%0D%0Aconst%20download%20%3D%20throttle(()%20%3D%3E%20%7B%7D%2C%201000)%0D%0A%0D%0Aconst%20_submit%20%3D%20debounce(()%20%3D%3E%20%7B%0D%0A%20%20crudRef.value%3F.refresh()%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%3E%0D%0A.u-form%20%7B%0D%0A%20%20.el-form%20%7B%0D%0A%20%20%20%20display%3A%20grid%3B%0D%0A%20%20%20%20%40media%20only%20screen%20and%20(max-width%3A%20768px)%20%7B%0D%0A%20%20%20%20%20%20grid-template-columns%3A%20repeat(1%2C%201fr)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20grid-template-columns%3A%20repeat(2%2C%201fr)%3B%0D%0A%20%20%20%20.form-role%20%7B%0D%0A%20%20%20%20%20%20grid-column%3A%201%20%2F%20-1%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",path:"crud/basic",description:""},{default:D(()=>[y]),_:1}),F])}const v=n(r,[["render",i]]);export{g as __pageData,v as default};
