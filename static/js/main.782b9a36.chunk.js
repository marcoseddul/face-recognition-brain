(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{345:function(e,t,n){"use strict";n.r(t);var a=n(12),s=n.n(a),i=n(52),o=n.n(i),c=(n(59),n(17)),r=n(18),l=n(20),d=n(19),h=(n(60),n(2)),b=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{onClick:function(){return t("signinout")},className:"f3 link dim black underline pa3 pointer",children:"Sing Out"})}):Object(h.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sing In"}),Object(h.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://stormy-beyond-20223.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(h.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(h.jsx)("div",{className:"lh-copy mt3",children:Object(h.jsx)("p",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onSubmitSignIn=function(){fetch("https://stormy-beyond-20223.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),p=(n(62),function(e){var t=e.imageUrl,n=e.box;return Object(h.jsx)("div",{className:"center ma",children:Object(h.jsxs)("div",{className:"absolute mt2",children:[Object(h.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),j=n(53),g=(n(63),function(){return Object(h.jsx)("div",{className:"ma4 mt0",children:Object(h.jsx)(j.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:100,width:100},children:Object(h.jsxs)("div",{className:"Tilt-inner pa3",children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",syle:{paddingTop:"5px"},alt:"logo"}),"  "]})})})}),f=(n(64),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Git it a try."}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(h.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(h.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),x=function(e){var t=e.name,n=e.entries;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(h.jsx)("div",{className:"white f1",children:n})]})},A=n(54),O=n.n(A),w={fpsLimit:60,interactivity:{modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},v={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:""}},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://stormy-beyond-20223.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://stormy-beyond-20223.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){return e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))}))},e.onRouteChange=function(t){"signinout"===t?e.setState(v):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=v,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O.a,{className:"particles",options:w}),Object(h.jsx)(b,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),Object(h.jsx)(x,{name:this.state.user.name,entries:this.state.user.entries}),Object(h.jsx)(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(p,{box:s,imageUrl:n})]}):"signin"===a?Object(h.jsx)(m,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(h.jsx)(u,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,346)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};n(344);o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),N()},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[345,1,2]]]);
//# sourceMappingURL=main.782b9a36.chunk.js.map