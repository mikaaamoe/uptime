import{_ as h,r as p,o as l,c as r,e as y,k as v,f as s,a as d,N as T,t as n,F as _,g as b,b as $,l as S,p as D,m as E}from"./index-967ebe55.js";const I={props:{modelValue:{type:String,default:""},enabled:{type:Boolean,default:!0},placeholder:{type:String,default:""},icon:{type:String,required:!0},type:{type:String,default:"text"},action:{type:Function,default:()=>{}}},emits:["update:modelValue"],computed:{model:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},k={class:"input-group mb-3"},x=["type","placeholder","disabled"];function V(t,e,o,m,a,c){const f=p("font-awesome-icon");return l(),r("div",k,[y(s("input",{ref:"input","onUpdate:modelValue":e[0]||(e[0]=u=>c.model=u),class:"form-control",type:o.type,placeholder:o.placeholder,disabled:!o.enabled},null,8,x),[[v,c.model]]),s("a",{class:"btn btn-outline-primary",onClick:e[1]||(e[1]=u=>o.action())},[d(f,{icon:o.icon},null,8,["icon"])])])}const C=h(I,[["render",V]]);const L={components:{NotificationDialog:T,ActionInput:C},data(){return{toastSuccessTimeoutSecs:20,toastErrorTimeoutSecs:-1,expiryNotifInput:null}},computed:{settings(){return this.$parent.$parent.$parent.settings},saveSettings(){return this.$parent.$parent.$parent.saveSettings},settingsLoaded(){return this.$parent.$parent.$parent.settingsLoaded}},watch:{toastSuccessTimeoutSecs(t){const e=parseInt(t);e!=null&&!Number.isNaN(e)&&(localStorage.toastSuccessTimeout=t>0?t*1e3:t)},toastErrorTimeoutSecs(t){const e=parseInt(t);e!=null&&!Number.isNaN(e)&&(localStorage.toastErrorTimeout=t>0?t*1e3:t)}},mounted(){this.loadToastTimeoutSettings()},methods:{removeExpiryNotifDay(t){this.settings.tlsExpiryNotifyDays=this.settings.tlsExpiryNotifyDays.filter(e=>e!==t)},addExpiryNotifDay(t){if(t!=null&&t!==""){const e=parseInt(t);e!=null&&!isNaN(e)&&e>0&&(this.settings.tlsExpiryNotifyDays.includes(e)||(this.settings.tlsExpiryNotifyDays.push(parseInt(t)),this.settings.tlsExpiryNotifyDays.sort((o,m)=>o-m),this.expiryNotifInput=null))}},loadToastTimeoutSettings(){const t=localStorage.toastSuccessTimeout;if(t!==void 0){const o=parseInt(t);o!=null&&!Number.isNaN(o)&&(this.toastSuccessTimeoutSecs=o>0?o/1e3:o)}const e=localStorage.toastErrorTimeout;if(e!==void 0){const o=parseInt(e);o!=null&&!Number.isNaN(o)&&(this.toastErrorTimeoutSecs=o>0?o/1e3:o)}}}},w=t=>(D("data-v-bacf52aa"),t=t(),E(),t),B={class:"notification-list my-4"},M={key:0},U={key:1},A={class:"list-group mb-3",style:{"border-radius":"1rem"}},F=w(()=>s("br",null,null,-1)),j=["onClick"],q={class:"my-4 pt-4"},z={class:"my-4 settings-subheading"},G={class:"my-4"},H={for:"toastErrorTimeoutSecs",class:"form-label"},J={class:"my-4"},K={for:"toastSuccessTimeoutSecs",class:"form-label"},O={class:"my-4 pt-4"},P={class:"my-4 settings-subheading"},Q={class:"mt-1 mb-3 ps-2 cert-exp-days col-12 col-xl-6"},R=["onClick"],W={class:"col-12 col-xl-6"};function X(t,e,o,m,a,c){const f=p("font-awesome-icon"),u=p("ActionInput"),N=p("NotificationDialog");return l(),r("div",null,[s("div",B,[t.$root.notificationList.length===0?(l(),r("p",M,n(t.$t("Not available, please setup.")),1)):(l(),r("p",U,n(t.$t("notificationDescription")),1)),s("ul",A,[(l(!0),r(_,null,b(t.$root.notificationList,(i,g)=>(l(),r("li",{key:g,class:"list-group-item"},[$(n(i.name),1),F,s("a",{href:"#",onClick:Y=>t.$refs.notificationDialog.show(i.id)},n(t.$t("Edit")),9,j)]))),128))]),s("button",{class:"btn btn-primary me-2",type:"button",onClick:e[0]||(e[0]=i=>t.$refs.notificationDialog.show())},n(t.$t("Setup Notification")),1)]),s("div",q,[s("h5",z,n(t.$t("monitorToastMessagesLabel")),1),s("p",null,n(t.$t("monitorToastMessagesDescription")),1),s("div",G,[s("label",H,n(t.$t("toastErrorTimeout")),1),y(s("input",{id:"toastErrorTimeoutSecs","onUpdate:modelValue":e[1]||(e[1]=i=>a.toastErrorTimeoutSecs=i),type:"number",class:"form-control",min:"-1",step:"1"},null,512),[[S,a.toastErrorTimeoutSecs]])]),s("div",J,[s("label",K,n(t.$t("toastSuccessTimeout")),1),y(s("input",{id:"toastSuccessTimeoutSecs","onUpdate:modelValue":e[2]||(e[2]=i=>a.toastSuccessTimeoutSecs=i),type:"number",class:"form-control",min:"-1",step:"1"},null,512),[[S,a.toastSuccessTimeoutSecs]])])]),s("div",O,[s("h5",P,n(t.$t("settingsCertificateExpiry")),1),s("p",null,n(t.$t("certificationExpiryDescription")),1),s("p",null,n(t.$t("notificationDescription")),1),s("div",Q,[(l(!0),r(_,null,b(c.settings.tlsExpiryNotifyDays,i=>(l(),r("div",{key:i,class:"d-flex align-items-center justify-content-between cert-exp-day-row py-2"},[s("span",null,n(i)+" "+n(t.$tc("day",i)),1),s("button",{type:"button",class:"btn-rm-expiry btn btn-outline-danger ms-2 py-1",onClick:g=>c.removeExpiryNotifDay(i)},[d(f,{class:"",icon:"times"})],8,R)]))),128))]),s("div",W,[d(u,{modelValue:a.expiryNotifInput,"onUpdate:modelValue":e[3]||(e[3]=i=>a.expiryNotifInput=i),type:"number",placeholder:t.$t("day"),icon:"plus",action:()=>c.addExpiryNotifDay(a.expiryNotifInput)},null,8,["modelValue","placeholder","action"])]),s("div",null,[s("button",{class:"btn btn-primary",type:"button",onClick:e[4]||(e[4]=i=>c.saveSettings())},n(t.$t("Save")),1)])]),d(N,{ref:"notificationDialog"},null,512)])}const tt=h(L,[["render",X],["__scopeId","data-v-bacf52aa"]]);export{tt as default};
