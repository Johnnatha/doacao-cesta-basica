(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0jMp":function(e,a,t){"use strict";t("KKXr");a.a={formatMoney:function(e){return e}}},NjHL:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t("q1tI"),o=t.n(n),r=t("R/WZ"),i=t("ye/S"),c=t("wx14"),l=t("Ff2n"),s=(t("17x9"),t("iuhU")),d=t("NqtD"),p=t("H2TA"),m=t("tr08"),b=n.forwardRef((function(e,a){var t=e.classes,o=e.className,r=e.color,i=void 0===r?"primary":r,p=e.value,b=e.valueBuffer,u=e.variant,f=void 0===u?"indeterminate":u,g=Object(l.a)(e,["classes","className","color","value","valueBuffer","variant"]),x=Object(m.a)(),h={},y={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==p){h["aria-valuenow"]=Math.round(p);var v=p-100;"rtl"===x.direction&&(v=-v),y.bar1.transform="translateX(".concat(v,"%)")}else 0;if("buffer"===f)if(void 0!==b){var S=(b||0)-100;"rtl"===x.direction&&(S=-S),y.bar2.transform="translateX(".concat(S,"%)")}else 0;return n.createElement("div",Object(c.a)({className:Object(s.a)(t.root,t["color".concat(Object(d.a)(i))],o,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[f]),role:"progressbar"},h,{ref:a},g),"buffer"===f?n.createElement("div",{className:Object(s.a)(t.dashed,t["dashedColor".concat(Object(d.a)(i))])}):null,n.createElement("div",{className:Object(s.a)(t.bar,t["barColor".concat(Object(d.a)(i))],("indeterminate"===f||"query"===f)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[f]),style:y.bar1}),"determinate"===f?null:n.createElement("div",{className:Object(s.a)(t.bar,("indeterminate"===f||"query"===f)&&t.bar2Indeterminate,"buffer"===f?[t["color".concat(Object(d.a)(i))],t.bar2Buffer]:t["barColor".concat(Object(d.a)(i))]),style:y.bar2}))})),u=Object(p.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(i.e)(a,.62):Object(i.a)(a,.5)},t=a(e.palette.primary.main),n=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0px -23px"},"50%":{opacity:0,backgroundPosition:"0px -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(b),f=t("tRbT"),g=t("Z3vd"),x=t("0jMp"),h=t("ucgz"),y=t("eKNW"),v=t.n(y),S=Object(r.a)((function(e){return{image:{maxWidth:"100%"},labelFinal:{display:"block",fontSize:16,marginBottom:16},labelFinalAccent:{display:"block",textAlign:"center",fontSize:22,marginBottom:16,marginTop:22},containerDonate:{display:"flex",flexDirection:"column",padding:"15% 34px !important"},bannerMobile:{display:"none"},"@media only screen and (max-width: 992px)":{bannerMobile:{display:"flex",justifyContent:"center",marginTop:-24,marginBottom:24,"& img":{maxWidth:"100%"}},containerDonate:{padding:"22px 0 !important"}}}})),w=Object(h.a)({root:{height:15,backgroundColor:Object(i.e)("#1D5F31",.5),marginBottom:16},bar:{backgroundColor:"#1D5F31"}})(u);function j(e){var a=e.data,t=e.next,n=S(),r={};return a&&a.campanha&&(r=a.campanha),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{container:!0,spacing:3},o.a.createElement(f.a,{item:!0,xs:12,md:12,className:n.containerDonate},o.a.createElement("div",{className:n.bannerMobile},o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("span",{className:n.labelFinal,style:{textAlign:"center"}},"Doado ",o.a.createElement("strong",null,"R$ ",x.a.formatMoney(r.vlrDoado))),o.a.createElement(w,{variant:"determinate",color:"secondary",value:r.percAtingimento}),o.a.createElement("span",{className:n.labelFinal,style:{textAlign:"center"}},"Desafio ",o.a.createElement("strong",null,"R$ ",x.a.formatMoney(r.vlrDesafio))),o.a.createElement("span",{className:n.labelFinalAccent},"Faltam ",o.a.createElement("strong",null,r.diasEncerramento," dias!")),o.a.createElement(g.a,{onClick:t,fullWidth:!0,color:"primary",variant:"contained"},"Doar"))))}},Z3vd:function(e,a,t){"use strict";var n=t("Ff2n"),o=t("wx14"),r=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=t("ye/S"),s=t("VD++"),d=t("NqtD"),p=r.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,p=e.color,m=void 0===p?"default":p,b=e.component,u=void 0===b?"button":b,f=e.disabled,g=void 0!==f&&f,x=e.disableElevation,h=void 0!==x&&x,y=e.disableFocusRipple,v=void 0!==y&&y,S=e.endIcon,w=e.focusVisibleClassName,j=e.fullWidth,C=void 0!==j&&j,k=e.size,O=void 0===k?"medium":k,z=e.startIcon,E=e.type,N=void 0===E?"button":E,I=e.variant,R=void 0===I?"text":I,W=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),D=z&&r.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(d.a)(O))])},z),M=S&&r.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(d.a)(O))])},S);return r.createElement(s.a,Object(o.a)({className:Object(i.a)(c.root,c[R],l,"inherit"===m?c.colorInherit:"default"!==m&&c["".concat(R).concat(Object(d.a)(m))],"medium"!==O&&[c["".concat(R,"Size").concat(Object(d.a)(O))],c["size".concat(Object(d.a)(O))]],h&&c.disableElevation,g&&c.disabled,C&&c.fullWidth),component:u,disabled:g,focusRipple:!v,focusVisibleClassName:Object(i.a)(c.focusVisible,w),ref:a,type:N},W),r.createElement("span",{className:c.label},D,t,M))}));a.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},eKNW:function(e,a,t){e.exports=t.p+"static/banner_app_320x380_view-c6497de39828d651db2769edf30f47f9.png"},tRbT:function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("DNiP"),t("pIFo"),t("8+KV");var n=t("Ff2n"),o=t("wx14"),r=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var p=r.forwardRef((function(e,a){var t=e.alignContent,c=void 0===t?"stretch":t,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,p=e.className,m=e.component,b=void 0===m?"div":m,u=e.container,f=void 0!==u&&u,g=e.direction,x=void 0===g?"row":g,h=e.item,y=void 0!==h&&h,v=e.justify,S=void 0===v?"flex-start":v,w=e.lg,j=void 0!==w&&w,C=e.md,k=void 0!==C&&C,O=e.sm,z=void 0!==O&&O,E=e.spacing,N=void 0===E?0:E,I=e.wrap,R=void 0===I?"wrap":I,W=e.xl,D=void 0!==W&&W,M=e.xs,B=void 0!==M&&M,T=e.zeroMinWidth,$=void 0!==T&&T,F=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(i.a)(d.root,p,f&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],y&&d.item,$&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==S&&d["justify-xs-".concat(String(S))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==z&&d["grid-sm-".concat(String(z))],!1!==k&&d["grid-md-".concat(String(k))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==D&&d["grid-xl-".concat(String(D))]);return r.createElement(b,Object(o.a)({className:P,ref:a},F))})),m=Object(c.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return l.forEach((function(n){var o=e.spacing(n);0!==o&&(t["spacing-".concat(a,"-").concat(n)]={margin:"-".concat(d(o,2)),width:"calc(100% + ".concat(d(o),")"),"& > $item":{padding:d(o,2)}})})),t}(e,"xs"),{},e.breakpoints.keys.reduce((function(a,t){return function(e,a,t){var n={};s.forEach((function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:o,flexGrow:0,maxWidth:o}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(o.a)(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a}),{}))}),{name:"MuiGrid"})(p);a.a=m},tr08:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("aXM8"),o=(t("q1tI"),t("cNwE"));function r(){return Object(n.a)()||o.a}}}]);
//# sourceMappingURL=component---src-pages-home-page-js-646ed01e6a8fe0b9fcd3.js.map