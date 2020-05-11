(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(58);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},58:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},59:function(e,t,n){"use strict";var r=n(23);n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));var a=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,a=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,c=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(a=a&&e.trim().length>0),"MINLENGTH"===c.type&&(a=a&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(a=a&&e.trim().length<=c.val),"MIN"===c.type&&(a=a&&+e>=c.val),"MAX"===c.type&&(a=a&&+e<=c.val),"EMAIL"===c.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return a}},60:function(e,t,n){"use strict";var r=n(7),a=n(57),i=n(0),c=n.n(i),l=n(59),u=(n(61),function(e,t){switch(t.type){case"CHANGE":return Object(a.a)(Object(a.a)({},e),{},{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(a.a)(Object(a.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(r.a)(t,2),a=n[0],l=n[1],o=e.id,s=e.onInput,p=a.value,d=a.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){l({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:b,value:a.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:b,value:a.value});return c.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!a.isValid&&a.isTouched&&c.a.createElement("p",null,e.errorText))}},61:function(e,t,n){},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(7),a=n(58),i=n(57),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),a=Object(r.a)(n,2),i=a[0],u=a[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),i=n(12),c=n(7),l=n(0),u=n.n(l),o=n(9),s=n(60),p=n(20),d=n(14),f=n(13),b=n(21),v=n(59),O=n(62),m=n(22),j=n(15);n(65);t.default=function(){var e=Object(l.useContext)(j.a),t=Object(m.a)(),n=t.isLoading,r=t.error,y=t.sendRequest,E=t.clearError,h=Object(l.useState)(),V=Object(c.a)(h,2),T=V[0],A=V[1],I=Object(o.h)().placeId,N=Object(o.g)(),C=Object(O.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),P=Object(c.a)(C,3),w=P[0],g=P[1],x=P[2];Object(l.useEffect)((function(){(function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL,"/places/").concat(I));case 3:t=e.sent,A(t.place),x({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[y,I,x]);var S=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL,"/places/").concat(I),"PATCH",JSON.stringify({title:w.inputs.title.value,description:w.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:N.push("/"+e.userId+"/places"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return n?u.a.createElement("div",{className:"center"},u.a.createElement(f.a,null)):T||r?u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{error:r,onClear:E}),!n&&T&&u.a.createElement("form",{className:"place-form",onSubmit:S},u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(v.c)()],errorText:"Please enter a valid title.",onInput:g,initialValue:T.title,initialValid:!0}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(v.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:g,initialValue:T.description,initialValid:!0}),u.a.createElement(p.a,{type:"submit",disabled:!w.isValid},"UPDATE PLACE"))):u.a.createElement("div",{className:"center"},u.a.createElement(d.a,null,u.a.createElement("h2",null,"Could not find place!")))}}}]);
//# sourceMappingURL=5.17b68051.chunk.js.map