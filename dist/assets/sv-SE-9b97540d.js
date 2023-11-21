const e="Svenska",t="Uppdatera var {0} sekund.",a="Max antal försök innan tjänsten markeras som nere och en notis skickas",n="Ignorera TLS/SSL-fel för webbsidor med HTTPS",r="Vänd upp och ner på statusen. Om tjänsten är nåbar visas den som NERE.",s="Max antal omdirigeringar att följa. Välj 0 för att avaktivera omdirigeringar.",o="Välj statuskoder som räknas som lyckade.",i="Det bekräftade lösenordet stämmer ej överens.",l="Vänligen lägg till en notistjänst till dina övervakare.",d="Sök efter nyckelord i ren HTML eller JSON-svar. Sökningen är skiftkänslig.",c="Pausa",u="Är du säker på att du vill ta bort den här övervakningen?",p="Är du säker på att du vill ta bort den här notisen för alla övervakare?",g="Cloudflare är den förvalda servern. Du kan byta resolver när som helst.",m="Välj den RR-typ du vill övervaka",v="Är du säker på att du vill pausa?",k="Inställningar",S="Infopanel",h="Språk",y="Utseende",f="Tema",D="Allmänt",T="Version",A="Lista",P="Lägg till",b="Uppe",N="Nere",R="Pågående",I="Okänt",w="Pausa",C="Namn",M="Status",L="Datum & Tid",U="Meddelande",x="Återuppta",H="Redigera",E="Ta bort",j="Nuvarande",V="Drifttid",O="dag | dagar",B="timme",F="Svar",G="Ping",K="Nyckelord",W="URL",J="Värdnamn",q="Port",Q="Försök",z="Avancerat",X="Spara",Y="Notiser",_="Ljust",Z="Mörkt",$="Automatiskt",ee="Normal",te="Botten",ae="Tomt",ne="Tidszon",re="Logga ut",se="Lämna",oe="Bekräfta",ie="Ja",le="Nej",de="Användarnamn",ce="Lösenord",ue="Logga in",pe="Email",ge="Test",me="Svarstid (ms)",ve="Stödjer markdown-syntax",ke="Hämta denna URL var {0} sekund",Se="Valfria parametrar: {0}",he="Välj en fil att importera.",ye="Välj en JSON-formatterad fil.",fe="Hjälp",De="Export",Te="Import",Ae="Spel",Pe="Omsänd efter {0} gånger",be="Övervakare | Övervakare",Ne="Underhåll",Re="Ompröva var {0} sekund",Ie="Underhåll",we="Omsändning inaktiverat",Ce="{multipart} är bra för PHP. Den JSON kommer att bli analyserat med {decodeFunction}",Me="Apprise är installerad.",Le="Behåll övervakare historik data i {0} dagar.",Ue="För att övervaka en Steam Game Server behöver man en Steam Web-API nyckel. Du kan registrera din API nyckel här: ",xe="Utlösa databas VACUUM för SQLite. Om din databas skappades efter 1.10.0, AUTO_VACUUM är redan aktiverat och denna aktion behövs inte.",He="Proxyservrar måste tilldelas en övervakare för att fungera.",Ee="Denna proxyserver kommer att aktiveras som standard för nya övervakare. Du kan fortfarande inaktivera proxyserven var för sig övervakare.",je="Ställer in ytterligare headers skickat med webhooken. Varenda header skulle definieras som ett JSON nyckel/värde par.",Ve="Kallande Enhetsidentifierare",Oe="Slugg",Be="Timeout efter {0} sekunder",Fe="Förfluten tid under den heartbeat indikatorn",Ge="Visa (Utan Linje)",Ke="Visa (Med Linje)",We="Skapa",Je="Skriva över",qe="Alternativ",Qe="Aktiv",ze="Pausad",Xe="Inaktiv",Ye="Token",_e="N/A",Ze="Heartbeats",$e="Färg",et="Grå",tt="Taggar",at="Röd",nt="Orange",rt="Grön",st="Blå",ot="Indigoblå",it="Lila",lt="Rosa",dt="Anpassad",ct="Uppdaterar om: {0}",ut="här",pt="Krävs",gt="{0} är bra för någon moderna HTTP servrar till exempel Express.js",mt="Definiera en anpassad HTTP Body till den request. Mall variabler {msg}, {heartbeat}, {monitor} accepteras.",vt="Ytterligare Headers",kt="Förinställning - {0}",St="Min {notification} Varna ({number})",ht="Anpassad Body",yt="Prioritet",ft="Emoji fusklapp: {0}",Dt="Apprise är inte installerad. {0}",Tt="Metod",At="Body",Pt="Headers",bt="Requestens headers är inte giltig JSON: ",Nt="Requestens body är inte giltig JSON: ",Rt="Lösenorden matchar inte.",It="rekorder",wt="Ämne",Ct="MQTT ämne att övervaka",Mt="MQTT meddelande som ska anses vara framgång",Lt="Framgång Meddelande",Ut="Nyligen",xt="Klar",Ht="Info",Et="Säkerhet",jt="Standard",Vt="Titel",Ot="Innehåll",Bt="Stil",Ft="info",Gt="Push URL",Kt="risk",Wt="fel",Jt="kritisk",qt="primär",Qt="ljus",zt="mörk",Xt="Post",Yt="Skapat",_t="Beskrivning",Zt="Tjänster",$t="Radera",ea="Kancellera",ta="Välj",aa="Valt: {0}",na="Anpassa",ra="Är du säkert att du vill radera denna status sida?",sa="Proxyservrar",oa="Aktiverad",ia="Ange Som Standard",la="Är du säkert att du vill radera denna proxyserver för alla övervakare?",da="Giltig",ca="Ogiltig",ua="Användare",pa="Installerat",ga="Körs",ma="Starta",va="Stoppa",ka="Unpin",Sa="Börja eller sluta med {0} bara",ha="Nästa",ya="Autentisering",fa="Backup",Da="Om",Ta="(Ladda ned cloudflared från {0})",Aa="Cloudflare Webbsida",Pa="Inloggad som {0}",ba="Auth Inaktiverad.",Na="Radius Hemlighet",Ra="Delad Hemlighet mellan client och server",Ia="Kancellerad Station Id",wa="Enhetsidentifierare",Ca="Calling Station Id",Ma="Händelser",La="Aktiv",Ua="Ingenting här, snälla lägg till en grupp eller en monitor.",xa="varning",Ha="Hem",Ea="Visa kod",ja="Vilken databas skulle du vilja använda?",Va="Databas Namn",Oa="Domän",Ba={languageName:e,checkEverySecond:t,retriesDescription:a,ignoreTLSError:n,upsideDownModeDescription:r,maxRedirectDescription:s,acceptedStatusCodesDescription:o,passwordNotMatchMsg:i,notificationDescription:l,keywordDescription:d,pauseDashboardHome:c,deleteMonitorMsg:u,deleteNotificationMsg:p,resolverserverDescription:g,rrtypeDescription:m,pauseMonitorMsg:v,Settings:k,Dashboard:S,"New Update":"Ny uppdatering",Language:h,Appearance:y,Theme:f,General:D,Version:T,"Check Update On GitHub":"Sök efter uppdatering på GitHub",List:A,Add:P,"Add New Monitor":"Lägg Till Ny Övervakare","Quick Stats":"Snabbstatistik",Up:b,Down:N,Pending:R,Unknown:I,Pause:w,Name:C,Status:M,DateTime:L,Message:U,"No important events":"Inga viktiga händelser",Resume:x,Edit:H,Delete:E,Current:j,Uptime:V,"Cert Exp.":"Certifikat utgår",day:O,"-day":" dagar",hour:B,"-hour":" timmar",Response:F,Ping:G,"Monitor Type":"Övervakningstyp",Keyword:K,"Friendly Name":"Namn",URL:W,Hostname:J,Port:q,"Heartbeat Interval":"Hjärtslagsintervall",Retries:Q,Advanced:z,"Upside Down Mode":"Upp och ner-läge","Max. Redirects":"Max antal omdirigeringar","Accepted Status Codes":"Tillåtna statuskoder",Save:X,Notifications:Y,"Not available, please setup.":"Ej tillgänglig, vänligen konfigurera.","Setup Notification":"Ny Notistjänst",Light:_,Dark:Z,Auto:$,"Theme - Heartbeat Bar":"Tema - Heartbeat Bar",Normal:ee,Bottom:te,None:ae,Timezone:ne,"Search Engine Visibility":"Synlighet på Sökmotorer","Allow indexing":"Tillåt indexering","Discourage search engines from indexing site":"Hindra sökmotorer från att indexera sidan","Change Password":"Byt Lösenord","Current Password":"Nuvarande Lösenord","New Password":"Nytt Lösenord","Repeat New Password":"Upprepa Nytt Lösenord","Update Password":"Uppdatera Lösenord","Disable Auth":"Avaktivera Autentisering","Enable Auth":"Aktivera Autentisering",Logout:re,Leave:se,"I understand, please disable":"Jag förstår, vänligen avaktivera",Confirm:oe,Yes:ie,No:le,Username:de,Password:ce,"Remember me":"Kom ihåg mig",Login:ue,"No Monitors, please":"Inga Övervakare, tack","add one":"lägg till en","Notification Type":"Notistyp",Email:pe,Test:ge,"Certificate Info":"Certifikatsinfo","Resolver Server":"Resolverserver","Resource Record Type":"RR-typ","Last Result":"Senaste resultat","Create your admin account":"Skapa ditt administratörskonto","Repeat Password":"Upprepa Lösenord",respTime:me,"Specific Monitor Type":"Applikationsspecifika övervakare","Push URL":"Push URL","Passive Monitor Type":"Passiva övervakare",markdownSupported:ve,"Heartbeat Retry Interval":"Omprövningsintervall",needPushEvery:ke,pushOptionalParams:Se,"disableauth.message1":"Vill du verkligen <strong>avaktivera autentisering</strong>?","disableauth.message2":"Det är designat för när en <strong>tredjeparts autentiseringstjänst</strong> såsom Cloudflare Access eller Authelia används framför Uptime Kuma.","Please use this option carefully!":"Använd denna funktion varsamt!","Import Backup":"Importera backup","Affected Monitors":"Påverkade övervakare","Start of maintenance":"Påbörja underhåll","All Status Pages":"Alla statussidor",alertNoFile:he,alertWrongFileType:ye,Help:fe,Export:De,Import:Te,Game:Ae,resendEveryXTimes:Pe,"Export Backup":"Exportera backup","Schedule maintenance":"Schemalägg underhåll",Monitor:be,"Resend Notification if Down X times consecutively":"Sänd notis igen om nere X gånger i rad",Maintenance:Ne,retryCheckEverySecond:Re,statusMaintenance:Ie,resendDisabled:we,"Pick Affected Monitors...":"Välj påverkade övervakare…","Select status pages...":"Välj statussidor…","General Monitor Type":"Allmänna övervakare",webhookFormDataDesc:Ce,appriseInstalled:Me,clearDataOlderThan:Le,steamApiKeyDescription:Ue,"No Monitors":"Inga Övervaktare",shrinkDatabaseDescription:xe,proxyDescription:He,setAsDefaultProxyDescription:Ee,"Content Type":"Innehållstyp",webhookAdditionalHeadersDesc:je,RadiusCallingStationIdDescription:Ve,Slug:Oe,"Invert Keyword":"Invertera Nyckelord","Degraded Service":"Försämrad Tjänst","Request Timeout":"Request Timeout",timeoutAfter:Be,styleElapsedTime:Fe,styleElapsedTimeShowNoLine:Ge,styleElapsedTimeShowWithLine:Ke,Create:We,"Clear Data":"Radera Data","Auto Get":"Hämta Automatiskt",Overwrite:Je,Options:qe,"Verify Token":"Verifiera Token","Enable 2FA":"Aktivera 2FA","Disable 2FA":"Inaktivera 2FA","2FA Settings":"2FA Inställningar","Two Factor Authentication":"Tvåfaktorsautentisering",filterActive:Qe,filterActivePaused:ze,Inactive:Xe,"Setup 2FA":"Uppstart 2FA","Clear all statistics":"Rensa alla Statistiker","Skip existing":"Hoppa över existerande","Keep both":"Behåll båda",Token:Ye,notAvailableShort:_e,"Apply on all existing monitors":"Applicera på alla existerande övervakare",Heartbeats:Ze,"Show URI":"Visa URI",color:$e,"value (optional)":"Värde (valfritt)",Gray:et,Tags:tt,"Tag with this name already exist.":"Tag med detta namn finns redan.",Red:at,Orange:nt,Green:rt,Blue:st,Indigo:ot,Purple:it,Pink:lt,Custom:dt,"Search...":"Sök…","Avg. Ping":"Medelvärde Ping","Tag with this value already exist.":"Tagg med detta värde finns redan.","Avg. Response":"Medelvärde Respons","Entry Page":"Entry Sida",statusPageRefreshIn:ct,"No Services":"Inga Tjänster","All Systems Operational":"Alla System i Drift","Partially Degraded Service":"Delvis Försämrada Tjänster","Add Group":"Lägg till Grupp","Add New Tag":"Lägg till Ny Tagg","Add New below or Select...":"Lägg till Ny under eller Välj…","Add a monitor":"Lägg till en Övervakare","Edit Status Page":"Hantera Status Sida","Status Page":"Status Sida","Status Pages":"Status Sidor","Go to Dashboard":"Till Dashboard",here:ut,Required:pt,webhookJsonDesc:gt,webhookCustomBodyDesc:mt,webhookAdditionalHeadersTitle:vt,webhookBodyPresetOption:kt,defaultNotificationName:St,webhookBodyCustomOption:ht,"Webhook URL":"Webhook URL","Application Token":"Applikation Token","Server URL":"Server URL",Priority:yt,emojiCheatSheet:ft,"Read more":"Läs mer",appriseNotInstalled:Dt,Method:Tt,Body:At,Headers:Pt,HeadersInvalidFormat:bt,BodyInvalidFormat:Nt,"Monitor History":"Övervakare Historik",PasswordsDoNotMatch:Rt,records:It,"One record":"En rekord","Current User":"Nuvarande Användare",topic:wt,topicExplanation:Ct,successMessageExplanation:Mt,successMessage:Lt,recent:Ut,Done:xt,Info:Ht,Security:Et,"Steam API Key":"Steam API Nyckel","Shrink Database":"Minska Databas","Pick a RR-Type...":"Välj en RR-Typ…","Pick Accepted Status Codes...":"Välj Accepterade Statuskod…",Default:jt,"HTTP Options":"HTTP Alternativ","Create Incident":"Skapa Incident",Title:Vt,Content:Ot,Style:Bt,info:Ft,"Post URL":"Post URL",PushUrl:Gt,danger:Kt,error:Wt,critical:Jt,primary:qt,light:Qt,dark:zt,Post:Xt,"Please input title and content":"Snälla lägg till titel och innehåll",Created:Yt,"Last Updated":"Senaste Uppdaterade","Switch to Light Theme":"Byt till Ljustema","Switch to Dark Theme":"Byt till Mörktema","Show Tags":"Visa Taggar","Hide Tags":"Göma Taggar",Description:_t,"No monitors available.":"Inga övervaktare tillgänglig.","Add one":"Lägg till en","Untitled Group":"Namnlös Grupp",Services:Zt,Discard:$t,Cancel:ea,Select:ta,selectedMonitorCount:aa,"Check/Uncheck":"Markera/Omarkera","Powered by":"Drivs av",Customize:na,"Custom Footer":"Anpassad Footer","Custom CSS":"Anpassad CSS",deleteStatusPageMsg:ra,Proxies:sa,default:"Standard",enabled:oa,setAsDefault:ia,deleteProxyMsg:la,"Certificate Chain":"Certifikatkedja",Valid:da,Invalid:ca,User:ua,Installed:pa,"Not installed":"Installerat ej",Running:ga,"Not running":"Körs inte","Remove Token":"Ta bort Token",Start:ma,Stop:va,"Add New Status Page":"Lägg till Ny Status Sida","Accept characters:":"Acceptera tecken:",Unpin:ka,startOrEndWithOnly:Sa,"No consecutive dashes":"Ingen följande streck",Next:ha,"The slug is already taken. Please choose another slug.":"Sluggen är redan tagit. Snälla välja en annan slugg.","No Proxy":"Ingen Proxyservern",Authentication:ya,"HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"Ny Status Sida","Page Not Found":"Sida hittas inte","Reverse Proxy":"Omvänd Proxyserver",Backup:fa,About:Da,wayToGetCloudflaredURL:Ta,cloudflareWebsite:Aa,"Message:":"Meddelande:","Don't know how to get the token? Please read the guide:":"Vet inte hur att få en token? Snälla läs guiden:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"Den nuvarande anslutningen kan kopplas bort om du närvarande ansluter via Cloudflare Tunnel. Är du säkert du vill avsluta den? Skriv ditt nuvarande lösenord för att konfirmera.","HTTP Headers":"HTTP Headers","Trust Proxy":"Lita på Proxyserver","Other Software":"Annan programvara","For example: nginx, Apache and Traefik.":"Till exempel: nginx, Apache och Traefik.","Please read":"Läs är du snäll","Subject:":"Subjekt:","Valid To:":"Giltig Till:","Days Remaining:":"Dagar kvar:","Fingerprint:":"Fingertryck:","No status pages":"Ingen status sidor",Proxy:"Proxyservern","Date Created":"Datum Skapade","Footer Text":"Footer Text","Show Powered By":"Visa Drivs Av","Domain Names":"Domain Namn",signedInDisp:Pa,signedInDispDisabled:ba,RadiusSecret:Na,RadiusSecretDescription:Ra,RadiusCalledStationId:Ia,RadiusCalledStationIdDescription:wa,RadiusCallingStationId:Ca,"Certificate Expiry Notification":"Notif om certifikatets utgång","Domain Name Expiry Notification":"Notif om Domain Namns utgång","API Key":"API Nyckel","API Username":"API Användarnamn","Show update if available":"Visa uppdatering om tillgänglig","Also check beta release":"Kolla upp också beta version",Events:Ma,Active:La,statusPageNothing:Ua,warning:xa,"Issuer:":"Utfärdare:","Expected Value":"Förväntat Värde","Primary Base URL":"Huvud Bas URL",Home:Ha,"Cannot connect to the socket server":"Kan inte koppla till socketservern","Reconnecting...":"Återanslutar...","Json Query":"Json Query","Default enabled":"Standard aktiverad",pushViewCode:Ea,"Steam Game Server":"Steam Spel Server","Docker Container":"Docker Container",setupDatabaseChooseDatabase:ja,dbName:Va,"What you can try:":"Vad du kan försöka:","Container Name / ID":"Containernamn / ID","Docker Host":"Docker värd","Docker Hosts":"Docker värdar",Domain:Oa,"Most likely causes:":"Störst troliga anledningar:","Coming Soon":"Kommer snart"};export{Da as About,La as Active,P as Add,z as Advanced,y as Appearance,ya as Authentication,$ as Auto,fa as Backup,st as Blue,At as Body,Nt as BodyInvalidFormat,te as Bottom,ea as Cancel,oe as Confirm,Ot as Content,We as Create,Yt as Created,j as Current,dt as Custom,na as Customize,Z as Dark,S as Dashboard,L as DateTime,jt as Default,E as Delete,_t as Description,$t as Discard,Oa as Domain,xt as Done,N as Down,H as Edit,pe as Email,Ma as Events,De as Export,Ae as Game,D as General,et as Gray,rt as Green,Pt as Headers,bt as HeadersInvalidFormat,Ze as Heartbeats,fe as Help,Ha as Home,J as Hostname,Te as Import,Xe as Inactive,ot as Indigo,Ht as Info,pa as Installed,ca as Invalid,K as Keyword,h as Language,se as Leave,_ as Light,A as List,ue as Login,re as Logout,Ne as Maintenance,U as Message,Tt as Method,be as Monitor,C as Name,ha as Next,le as No,ae as None,ee as Normal,Y as Notifications,qe as Options,nt as Orange,Je as Overwrite,ce as Password,Rt as PasswordsDoNotMatch,w as Pause,R as Pending,G as Ping,lt as Pink,q as Port,Xt as Post,yt as Priority,sa as Proxies,it as Purple,Gt as PushUrl,Ia as RadiusCalledStationId,wa as RadiusCalledStationIdDescription,Ca as RadiusCallingStationId,Ve as RadiusCallingStationIdDescription,Na as RadiusSecret,Ra as RadiusSecretDescription,at as Red,pt as Required,F as Response,x as Resume,Q as Retries,ga as Running,X as Save,Et as Security,ta as Select,Zt as Services,k as Settings,Oe as Slug,ma as Start,M as Status,va as Stop,Bt as Style,tt as Tags,ge as Test,f as Theme,ne as Timezone,Vt as Title,Ye as Token,W as URL,I as Unknown,ka as Unpin,b as Up,V as Uptime,ua as User,de as Username,da as Valid,T as Version,ie as Yes,o as acceptedStatusCodesDescription,he as alertNoFile,ye as alertWrongFileType,Me as appriseInstalled,Dt as appriseNotInstalled,t as checkEverySecond,Le as clearDataOlderThan,Aa as cloudflareWebsite,$e as color,Jt as critical,Kt as danger,zt as dark,O as day,Va as dbName,Ba as default,St as defaultNotificationName,u as deleteMonitorMsg,p as deleteNotificationMsg,la as deleteProxyMsg,ra as deleteStatusPageMsg,ft as emojiCheatSheet,oa as enabled,Wt as error,Qe as filterActive,ze as filterActivePaused,ut as here,B as hour,n as ignoreTLSError,Ft as info,d as keywordDescription,e as languageName,Qt as light,ve as markdownSupported,s as maxRedirectDescription,ke as needPushEvery,_e as notAvailableShort,l as notificationDescription,i as passwordNotMatchMsg,c as pauseDashboardHome,v as pauseMonitorMsg,qt as primary,He as proxyDescription,Se as pushOptionalParams,Ea as pushViewCode,Ut as recent,It as records,we as resendDisabled,Pe as resendEveryXTimes,g as resolverserverDescription,me as respTime,a as retriesDescription,Re as retryCheckEverySecond,m as rrtypeDescription,aa as selectedMonitorCount,ia as setAsDefault,Ee as setAsDefaultProxyDescription,ja as setupDatabaseChooseDatabase,xe as shrinkDatabaseDescription,Pa as signedInDisp,ba as signedInDispDisabled,Sa as startOrEndWithOnly,Ie as statusMaintenance,Ua as statusPageNothing,ct as statusPageRefreshIn,Ue as steamApiKeyDescription,Fe as styleElapsedTime,Ge as styleElapsedTimeShowNoLine,Ke as styleElapsedTimeShowWithLine,Lt as successMessage,Mt as successMessageExplanation,Be as timeoutAfter,wt as topic,Ct as topicExplanation,r as upsideDownModeDescription,xa as warning,Ta as wayToGetCloudflaredURL,je as webhookAdditionalHeadersDesc,vt as webhookAdditionalHeadersTitle,ht as webhookBodyCustomOption,kt as webhookBodyPresetOption,mt as webhookCustomBodyDesc,Ce as webhookFormDataDesc,gt as webhookJsonDesc};
