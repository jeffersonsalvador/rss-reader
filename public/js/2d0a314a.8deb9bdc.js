(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row col-12 justify-center"},[s("div",{staticClass:"q-mt-xl card-login"},[s("h1",[e._v(e._s(e.title[e.type]))]),s("q-input",{attrs:{rules:[e.validMail],"bg-color":"white","bottom-slots":"",label:"E-mail",outlined:"","lazy-rules":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("q-input",{attrs:{type:"password","bg-color":"white","bottom-slots":"",label:"Password",outlined:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("q-btn",{staticClass:"full-width",attrs:{color:"secondary",unelevated:""},on:{click:function(t){"login"===e.type?e.login():e.register()}}},[e._v(e._s("login"===e.type?"LOGIN":"REGISTER")+"\n            ")])],1)]),s("div",{staticClass:"row justify-center q-pa-md"},["login"===e.type?s("span",{staticClass:"q-mb-md"},[e._v("If you don't have an account, "),s("router-link",{attrs:{to:"/register"}},[e._v("register here")]),e._v(".")],1):s("span",[e._v("If you already have an account, "),s("router-link",{attrs:{to:"/login"}},[e._v("login here")]),e._v(".")],1)])])},i=[],o=(s("a481"),s("bc3a")),n=s.n(o),r={name:"Login",props:{type:{type:String,default:"login"}},data:function(){return{user:{email:"",password:""},title:{login:"Log in to your account",register:"Create an account"},message:""}},watch:{type:function(){this.user.email="",this.user.password=""}},methods:{login:function(){var e=this;""!==this.user.email&&""!==this.user.password?n.a.post("/api/login",{email:this.user.email,password:this.user.password}).then((function(t){t.data?(e.$root.$emit("authenticated",!0),e.$router.replace({name:"home"})):(e.message="Email or Password invalid.",e.showNotif())})):(e.message="A username and password must be present",e.showNotif())},register:function(e){var t=this;""!==this.user.email&&""!==this.user.password?n.a.post("/api/create",{email:this.user.email,password:this.user.password}).then((function(s){if(1!==s.data)return t.message="This email already in use.",t.showNotif(),!!e;t.$root.$emit("authenticated",!0),t.$router.replace({name:"home"})})):(t.message="A username and password must be present",t.showNotif())},showNotif:function(){this.$q.notify({message:this.message||"Cadê a mensagem?",color:"red",position:"bottom-right"})},validMail:function(e){if("register"===this.type){var t=this;n.a.post("/api/validate/email",{email:e}).then((function(e){if(e.data)return t.message="This email already in use.",t.showNotif(),"This email already in use."}))}return!!e||"Invalid email"}}},l=r,u=s("2877"),c=s("27f9"),p=s("0016"),d=s("9c40"),m=Object(u["a"])(l,a,i,!1,null,null,null);t["default"]=m.exports;m.options.components=Object.assign({QInput:c["a"],QIcon:p["a"],QBtn:d["a"]},m.options.components)}}]);