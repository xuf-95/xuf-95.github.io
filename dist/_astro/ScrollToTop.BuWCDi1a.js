import{_ as s,b as l}from"./_plugin-vue_export-helper.b2k9fM_b.js";import{d as i,o as a,c,n as p,a as _}from"./runtime-core.esm-bundler.DGm2jzk-.js";const d=i({__name:"ScrollToTop",setup(n,{expose:o}){o();const{y:r}=l();function e(){window.scrollTo({top:0,behavior:"smooth"})}const t={scroll:r,toTop:e};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),u=_("i",{"i-ri-arrow-up-line":""},null,-1),f=[u];function m(n,o,r,e,t,h){return a(),c("button",{"aria-label":"Scroll to top",fixed:"","right-5":"","sm:right-30":"","bottom-30":"","w-12":"","h-12":"","text-lg":"","hover:op100":"","rounded-full":"",flex:"~ items-center justify-center","bg-hex-8883":"",transition:"","duration-300":"","z-100":"","print:hidden":"",class:p(e.scroll>300?"op75":"op0 pointer-events-none"),onClick:o[0]||(o[0]=b=>e.toTop())},f,2)}const S=s(d,[["render",m]]);export{S as default};