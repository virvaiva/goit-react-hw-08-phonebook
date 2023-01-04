"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[103],{5103:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(9434),a=n(4808),i=n(176),c=n(9229),o=n(7886),s=function(e){return e.contacts.contactList},l=function(e){return e.contacts.isLoading},u=function(e){return e.filter},d=function(e){var t=s(e),n=u(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},m=n(184),f=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,m.jsxs)(i.k,{align:"center",justify:"center",flexDirection:"column",mb:10,children:[(0,m.jsx)(c.x,{mb:2,children:"Find contacts by Name"}),(0,m.jsx)(o.I,{type:"text",name:"filter",placeholder:"Search contact",value:t,onChange:function(t){e((0,a.p)(t.target.value))},width:400})]})},h=n(2791),x=n(3634),p=n(9439),b=n(5264),j=n(2701),g=n(4585),v=n(3306);var y=function(){var e=(0,h.useState)(""),t=(0,p.Z)(e,2),n=t[0],a=t[1],i=(0,h.useState)(""),c=(0,p.Z)(i,2),l=c[0],u=c[1],d=(0,r.I0)(),f=(0,r.v9)(s),y=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":u(r);break;default:return}};return(0,m.jsx)(j.NI,{width:300,marginBottom:5,children:(0,m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!f.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return b.Notify.success("".concat(n," is added in contacts")),d((0,x.uK)({name:n,number:l})),u(""),void a("");b.Notify.warning("".concat(n," is already in contacts"))},children:[(0,m.jsxs)(g.l,{m:0,children:["Name",(0,m.jsx)(o.I,{placeholder:"Enter your name",size:"md",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:y,value:n,marginBottom:3})]}),(0,m.jsxs)(g.l,{m:0,children:["Number",(0,m.jsx)(o.I,{placeholder:"+38 (000) 000 00 00",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:y,value:l,marginBottom:5})]}),(0,m.jsx)(v.z,{colorScheme:"teal",variant:"solid",width:"100% ",type:"submit",children:"Add Contact"})]})})},C=n(5946),w=function(){return(0,m.jsxs)(i.k,{align:"center",justify:"center",flexDirection:"column",children:[(0,m.jsx)(C.X,{bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",fontSize:"4xl",fontWeight:"extrabold",mb:5,children:"Phonebook"}),(0,m.jsx)(y,{}),(0,m.jsx)(C.X,{bgGradient:"linear(to-l, #28ca3b, #FF0080)",bgClip:"text",fontSize:"4xl",fontWeight:"extrabold",mb:5,children:"Contacts"})]})},k=n(4373),z=n(6856),F=n(8594),I=n(695),S=function(){var e=(0,r.I0)(),t=(0,r.v9)(d);return(0,h.useEffect)((function(){e((0,x.yF)())}),[e]),(0,m.jsx)(i.k,{align:"center",justify:"center",m:5,children:(0,m.jsx)(F.r,{templateColumns:"repeat(2, 1fr)",gap:6,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,m.jsxs)(I.P,{p:3,w:"100%",h:"10",border:"2px",borderRadius:"4px",borderColor:"gray.200",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,m.jsxs)(i.k,{align:"center",justify:"center",children:[(0,m.jsx)(k.H27,{size:30}),r,": ",a]}),(0,m.jsx)(v.z,{type:"button",onClick:function(){return function(t){return e((0,x.GK)(t))}(n)},ml:10,colorScheme:"teal",variant:"link",children:(0,m.jsx)(z.F1H,{size:28})})]},n)}))})})},A=n(3521),N=function(){var e=(0,r.I0)(),t=(0,r.v9)(l);return(0,h.useEffect)((function(){e((0,x.yF)())}),[e]),(0,m.jsxs)("div",{children:[(0,m.jsx)(w,{}),(0,m.jsx)(f,{}),t&&(0,m.jsx)(A.a,{}),(0,m.jsx)(S,{})]})}}}]);
//# sourceMappingURL=103.ce7df90a.chunk.js.map