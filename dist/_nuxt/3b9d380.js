(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{229:function(e,t,r){"use strict";r.r(t);var o=r(26),n=r(24);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"register",data:function(){return{username:"",password:"",email:""}},created:function(){this.setError(null)},methods:c(c(c({},Object(n.b)(["Register"])),Object(n.d)(["setError"])),{},{onRegister:function(e){this.Register(e)}}),computed:c({},Object(n.e)(["errorMsg"]))},d=r(14),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Sign up")]),e._v(" "),r("p",{staticClass:"text-xs-center"},[r("NuxtLink",{attrs:{to:{name:"login"}}},[e._v("Have an account")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},e._l(e.errorMsg,(function(t,o,n){return r("li",{key:n},[e._v("\n            "+e._s(o)+":\n            "),e._l(t,(function(text){return r("span",{key:text},[e._v(e._s(text))])}))],2)})),0),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onRegister({username:e.username,password:e.password,email:e.email})}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            Sign up\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);