try{
(()=>{var v=__STORYBOOK_API__,{ActiveTabs:x,Consumer:H,ManagerContext:M,Provider:N,addons:p,combineParameters:D,controlOrMetaKey:F,controlOrMetaSymbol:W,eventMatchesShortcut:K,eventToShortcut:Y,isMacLike:G,isShortcutTaken:w,keyToSymbol:U,merge:V,mockChannel:j,optionOrAltSymbol:q,shortcutMatchesShortcut:z,shortcutToHumanString:Z,types:m,useAddonState:$,useArgTypes:J,useArgs:Q,useChannel:u,useGlobalTypes:X,useGlobals:S,useParameter:ee,useSharedState:te,useStoryPrepared:oe,useStorybookApi:re,useStorybookState:ae}=__STORYBOOK_API__;var n=__REACT__,{Children:ce,Component:pe,Fragment:me,Profiler:ue,PureComponent:Se,StrictMode:de,Suspense:_e,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Te,cloneElement:be,createContext:ye,createElement:Ce,createFactory:Oe,createRef:he,forwardRef:ke,isValidElement:Ee,lazy:fe,memo:ge,useCallback:Le,useContext:Ae,useDebugValue:Re,useEffect:Be,useImperativeHandle:Ie,useLayoutEffect:Pe,useMemo:ve,useReducer:xe,useRef:He,useState:Me,version:Ne}=__REACT__;var Ye=__STORYBOOK_COMPONENTS__,{A:Ge,ActionBar:we,AddonPanel:Ue,Badge:Ve,Bar:je,Blockquote:qe,Button:ze,ClipboardCode:Ze,Code:$e,DL:Je,Div:Qe,DocumentWrapper:Xe,ErrorFormatter:et,FlexBar:tt,Form:ot,H1:rt,H2:at,H3:nt,H4:lt,H5:st,H6:it,HR:ct,IconButton:d,IconButtonSkeleton:pt,Icons:_,Img:mt,LI:ut,Link:St,ListItem:dt,Loader:_t,OL:Tt,P:bt,Placeholder:yt,Pre:Ct,ResetWrapper:Ot,ScrollArea:ht,Separator:kt,Spaced:Et,Span:ft,StorybookIcon:gt,StorybookLogo:Lt,Symbols:At,SyntaxHighlighter:Rt,TT:Bt,TabBar:It,TabButton:Pt,TabWrapper:vt,Table:xt,Tabs:Ht,TabsState:Mt,TooltipLinkList:T,TooltipMessage:Nt,TooltipNote:Dt,UL:Ft,WithTooltip:b,WithTooltipPure:Wt,Zoom:Kt,codeCommon:Yt,components:Gt,createCopyToClipboardFunction:wt,getStoryHref:Ut,icons:Vt,interleaveSeparators:jt,nameSpaceClassNames:qt,resetComponents:zt,withReset:Zt}=__STORYBOOK_COMPONENTS__;var C="storybook/i18n-addon",O="storybook/i18n-addon/tool",h="LOCALE_CHANGED",k=e=>typeof e=="string"?{title:e}:{title:e.title||"",left:e.left,right:e.right},E=(e,s,l)=>e?Object.entries(e).map(([a,i])=>({...k(i),id:a,active:a===s,onClick:()=>l(a)})):[{id:"none",title:"No locales in parameters",active:!0,onClick:()=>{}}],f=()=>{let[e,s]=S(),{locale:l,locales:a}=e,i=u({});return n.createElement(b,{placement:"top",tooltip:({onHide:y})=>n.createElement(T,{links:E(a,l,c=>{c!==l&&(s({locale:c}),i(h,c)),y()})}),trigger:"click"},n.createElement(d,{key:"i18n-locale",title:"Locale Selector"},n.createElement(_,{icon:"globe"})))},g=f;p.register(C,()=>{p.add(O,{title:"Storybook i18n",type:m.TOOL,match:({viewMode:e})=>!!e?.match(/^(story|docs)$/),render:g})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
