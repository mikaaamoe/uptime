import{_ as k,u as S,r as f,o as s,c as o,a as i,w as l,b as _,t as a,d as c,e as w,v as P,f as n,F as b,g as M,h as v,i as D,T as x,j as E}from"./index-967ebe55.js";const C={data(){return{show:!0,settings:{},settingsLoaded:!1}},computed:{currentPage(){let t=S().path.split("/"),e=t[t.length-1];return!e||e==="settings"?null:e},showSubMenu(){return this.$root.isMobile?!this.currentPage:!0},subMenus(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"reverse-proxy":{title:this.$t("Reverse Proxy")},tags:{title:this.$t("Tags")},"monitor-history":{title:this.$t("Monitor History")},"docker-hosts":{title:this.$t("Docker Hosts")},security:{title:this.$t("Security")},"api-keys":{title:this.$t("API Keys")},proxies:{title:this.$t("Proxies")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile"(){this.loadGeneralPage()}},mounted(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage(){!this.currentPage&&!this.$root.isMobile&&this.$router.push("/settings/general")},loadSettings(){this.$root.getSocket().emit("getSettings",t=>{this.settings=t.data,this.settings.checkUpdate===void 0&&(this.settings.checkUpdate=!0),this.settings.searchEngineIndex===void 0&&(this.settings.searchEngineIndex=!1),this.settings.entryPage===void 0&&(this.settings.entryPage="dashboard"),this.settings.nscd===void 0&&(this.settings.nscd=!0),this.settings.dnsCache===void 0&&(this.settings.dnsCache=!1),this.settings.keepDataPeriodDays===void 0&&(this.settings.keepDataPeriodDays=180),this.settings.tlsExpiryNotifyDays===void 0&&(this.settings.tlsExpiryNotifyDays=[7,14,21]),this.settings.trustProxy===void 0&&(this.settings.trustProxy=!1),this.settingsLoaded=!0})},saveSettings(t,e){let u=this.validateSettings();u.success?this.$root.getSocket().emit("setSettings",this.settings,e,m=>{this.$root.toastRes(m),this.loadSettings(),t&&t()}):this.$root.toastError(u.msg)},validateSettings(){return this.settings.keepDataPeriodDays<0?{success:!1,msg:this.$t("dataRetentionTimeError")}:{success:!0,msg:""}}}},N={key:0,class:"shadow-box mb-3"},I={class:"shadow-box shadow-box-settings"},L={class:"row"},T={key:0,class:"settings-menu col-lg-3 col-md-5"},B={class:"menu-item"},G={class:"menu-item"},R={class:"settings-content col-lg-9 col-md-7"},V={key:0,class:"settings-content-header"},A={class:"mx-3"};function F(t,e,u,m,y,r){const h=f("font-awesome-icon"),g=f("router-link"),$=f("router-view");return s(),o("div",null,[t.$root.isMobile?(s(),o("div",N,[i(g,{to:"/manage-status-page",class:"nav-link"},{default:l(()=>[i(h,{icon:"stream"}),_(" "+a(t.$t("Status Pages")),1)]),_:1}),i(g,{to:"/maintenance",class:"nav-link"},{default:l(()=>[i(h,{icon:"wrench"}),_(" "+a(t.$t("Maintenance")),1)]),_:1})])):c("",!0),w(n("h1",{class:"mb-3"},a(t.$t("Settings")),513),[[P,y.show]]),n("div",I,[n("div",L,[r.showSubMenu?(s(),o("div",T,[(s(!0),o(b,null,M(r.subMenus,(d,p)=>(s(),v(g,{key:p,to:`/settings/${p}`},{default:l(()=>[n("div",B,a(d.title),1)]),_:2},1032,["to"]))),128)),t.$root.isMobile&&t.$root.loggedIn&&t.$root.socket.token!=="autoLogin"?(s(),o("a",{key:0,class:"logout",onClick:e[0]||(e[0]=D((...d)=>t.$root.logout&&t.$root.logout(...d),["prevent"]))},[n("div",G,[i(h,{icon:"sign-out-alt"}),_(" "+a(t.$t("Logout")),1)])])):c("",!0)])):c("",!0),n("div",R,[r.currentPage?(s(),o("div",V,a(r.subMenus[r.currentPage].title),1)):c("",!0),n("div",A,[i($,null,{default:l(({Component:d})=>[i(x,{name:"slide-fade",appear:""},{default:l(()=>[(s(),v(E(d)))]),_:2},1024)]),_:1})])])])])])}const U=k(C,[["render",F],["__scopeId","data-v-f2c59d6c"]]);export{U as default};