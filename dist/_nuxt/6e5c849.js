(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{232:function(e,t,r){"use strict";r.r(t);var o=r(26),n=r(24),l=r(58);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(152),f={name:"setting",middleware:"router",data:function(){return{email:"",username:"",password:"",image:"",bio:"",isFetching:!1}},created:function(){if(this.userInfo){var e=this.userInfo,t=e.email,r=e.username,o=e.password,image=e.image,n=e.bio;this.email=t,this.username=r,this.password=o,this.image=image,this.bio=n}},methods:m(m({},Object(n.d)(["setUser"])),{},{onUpdate:function(e){var t=this;this.isFetching=!0,Object(l.o)({user:e}).then((function(e){var r=e.data.user;t.setUser(r),d.set("userInfo",JSON.stringify(r)),t.$router.push({path:"profile/".concat(t.userInfo.username)}),t.isFetching=!1})).catch((function(e){t.isFetching=!1}))}}),computed:m({},Object(n.e)(["userInfo"]))},v=r(14),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onUpdate({email:e.email,username:e.username,password:e.password,image:e.image,bio:e.bio})}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.bio,expression:"bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.bio},on:{input:function(t){t.target.composing||(e.bio=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:e.isFetching}},[e._v("\n              Update Settings\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);