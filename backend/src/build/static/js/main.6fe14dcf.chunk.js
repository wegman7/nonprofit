(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{170:function(e,t,a){e.exports=a(282)},280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),l=a(13),s=a(14),c=a(15),u=a(16),d=a(17),p=a(18),h=a(9),m=(a(179),a(40)),f=a(10),_=a(7),g=a.n(_),b=a(287),y=a(285),v=a(292),E=a(291),k=a(293),S=function(e){var t=e.icon,a=e.text;return i.a.createElement("span",null,i.a.createElement(t,{style:{marginRight:8}}),a)};var O=function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,"Organizations"),i.a.createElement(b.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.profiles,footer:i.a.createElement("div",null,i.a.createElement("b",null,"ant design")," footer part"),renderItem:function(e){return i.a.createElement(b.a.Item,{key:e.username,actions:[i.a.createElement(S,{icon:v.a,text:"156",key:"list-vertical-star-o"}),i.a.createElement(S,{icon:E.a,text:"156",key:"list-vertical-like-o"}),i.a.createElement(S,{icon:k.a,text:"2",key:"list-vertical-message"})]},i.a.createElement("span",{className:"d-flex flex-row-reverse"},e.city,", ",e.state),i.a.createElement(b.a.Item.Meta,{avatar:i.a.createElement(y.a,{src:e.avatar}),title:i.a.createElement(p.b,{to:"profiles/".concat(e.id)},e.organization_name),description:"Seeking ".concat(e.type_of_help_needed)}),e.organization_info)}}))},A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=e.getInitialState(),e.getInitialState=e.getInitialState.bind(Object(f.a)(e)),e.grabFromAPI=e.grabFromAPI.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{profiles:[],organization_profiles:[],helper_profiles:[]}}},{key:"grabFromAPI",value:function(){var e=this;this.props.token?(g.a.get("http://127.0.0.1:8000/api/",{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({profiles:t.data,organization_profiles:t.data.filter((function(e){return e.is_organization})),helper_profiles:t.data.filter((function(e){return!e.is_organization}))})})),g.a.get("http://127.0.0.1:8000/rest-auth/user/",{headers:{Authorization:"Token ".concat(this.props.token.token)}})):g.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({profiles:t.data,organization_profiles:t.data.filter((function(e){return e.is_organization})),helper_profiles:t.data.filter((function(e){return!e.is_organization}))})}))}},{key:"componentDidMount",value:function(){this.grabFromAPI()}},{key:"componentDidUpdate",value:function(){a(65).isEqual(this.state,this.getInitialState())&&this.grabFromAPI()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(O,{profiles:this.state.organization_profiles}))}}]),t}(i.a.Component),I=Object(h.b)((function(e){return{token:e.token,isAuthenticated:null!==e.token}}))(A),j=function(e){var t=e.icon,a=e.text;return i.a.createElement("span",null,i.a.createElement(t,{style:{marginRight:8}}),a)};var z=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-40"},"Helpers"),i.a.createElement(b.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.profiles,footer:i.a.createElement("div",null,i.a.createElement("b",null,"ant design")," footer part"),renderItem:function(e){return i.a.createElement(b.a.Item,{key:e.username,actions:[i.a.createElement(j,{icon:v.a,text:"156",key:"list-vertical-star-o"}),i.a.createElement(j,{icon:E.a,text:"156",key:"list-vertical-like-o"}),i.a.createElement(j,{icon:k.a,text:"2",key:"list-vertical-message"})],extra:i.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},i.a.createElement("span",{className:"d-flex flex-row-reverse"},e.city,", ",e.state),i.a.createElement(b.a.Item.Meta,{avatar:i.a.createElement(y.a,{src:e.avatar}),title:i.a.createElement(p.b,{to:"profiles/".concat(e.id)},e.first_name," ",e.last_name),description:"Expert in ".concat(e.area_of_expertise)}),"Interested in ",e.cause_of_interest)}}))},x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=e.getInitialState(),e.getInitialState=e.getInitialState.bind(Object(f.a)(e)),e.grabFromAPI=e.grabFromAPI.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{profiles:[],organization_profiles:[],helper_profiles:[]}}},{key:"grabFromAPI",value:function(){var e=this;this.props.token?(g.a.get("http://127.0.0.1:8000/api/",{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({profiles:t.data,organization_profiles:t.data.filter((function(e){return e.is_organization})),helper_profiles:t.data.filter((function(e){return!e.is_organization}))})})),g.a.get("http://127.0.0.1:8000/rest-auth/user/",{headers:{Authorization:"Token ".concat(this.props.token.token)}})):g.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({profiles:t.data,organization_profiles:t.data.filter((function(e){return e.is_organization})),helper_profiles:t.data.filter((function(e){return!e.is_organization}))})}))}},{key:"componentDidMount",value:function(){this.grabFromAPI()}},{key:"componentDidUpdate",value:function(){a(65).isEqual(this.state,this.getInitialState())&&this.grabFromAPI()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(z,{profiles:this.state.helper_profiles}))}}]),t}(i.a.Component),C=Object(h.b)((function(e){return{token:e.token,isAuthenticated:null!==e.token}}))(x);var D=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10"},e.profile.organization_name),i.a.createElement("div",null,e.profile.city,", ",e.profile.state)),"Seeking ",e.profile.type_of_help_needed," ",i.a.createElement("br",null),e.profile.organization_info," ",i.a.createElement("br",null),e.is_my_profile?i.a.createElement(p.b,{to:"/update/".concat(e.profile.id)},"Update profile"):null)},w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=e.getInitialState(),e.grabFromAPI=e.grabFromAPI.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{profile:[],my_profile:[],is_my_profile:!1}}},{key:"grabFromAPI",value:function(){var e=this,t=this.props.match.params.profileID;this.props.token?(g.a.get("http://127.0.0.1:8000/api/".concat(t,"/"),{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({profile:t.data})})),g.a.get("http://127.0.0.1:8000/rest-auth/user/",{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({my_profile:t.data})}))):g.a.get("http://127.0.0.1:8000/api/".concat(t,"/")).then((function(t){e.setState({profile:t.data})}))}},{key:"componentDidMount",value:function(){this.grabFromAPI()}},{key:"componentDidUpdate",value:function(e){var t=a(65);this.props.token&&t.isEqual(this.state,this.getInitialState())&&this.grabFromAPI(),!this.state.is_my_profile&&Object.keys(this.state.my_profile).length>0&&this.state.my_profile.pk===this.state.profile.user&&(console.log(this.state.my_profile,this.state.profile.user),this.setState({is_my_profile:!0})),e.isAuthenticated!==this.props.isAuthenticated&&this.props.history.push("/")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(D,{profile:this.state.profile,is_my_profile:this.state.is_my_profile}))}}]),t}(i.a.Component),T=Object(h.b)((function(e){return{token:e.token,isAuthenticated:null!==e.token}}))(w),F=a(82);var P=function(e){return i.a.createElement("div",null,e.my_form&&e.added_is_organization?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("input",{type:"checkbox",name:"added_is_organization",checked:e.added_is_organization,onChange:e.handleChange})," Organization?",i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_organization_name",placeholder:"Name of organization",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_organization_info",placeholder:"Info about organization",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_type_of_help_needed",placeholder:"Type of help needed",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_city",placeholder:"City",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_state",placeholder:"State",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("button",{onClick:e.handleSubmit},"Submit"))):e.my_form&&!e.added_is_organization?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("input",{type:"checkbox",name:"added_is_organization",checked:e.added_is_organization,onChange:e.handleChange})," Organization?",i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_first_name",placeholder:"First name",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_last_name",placeholder:"Last name",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_area_of_expertise",placeholder:"Area of expertise",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_cause_of_interest",placeholder:"Causes of interest",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_city",placeholder:"City",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"added_state",placeholder:"State",onChange:e.handleChange}),i.a.createElement("br",null),i.a.createElement("button",{onClick:e.handleSubmit},"Submit"))):void 0)},U=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=e.getInitialState(),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.grabFromAPI=e.grabFromAPI.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{profile:[],my_profile:[],my_form:!1,added_is_organization:!1,added_first_name:[],added_last_name:[],added_area_of_expertise:[],added_cause_of_interest:[],added_organization_name:[],added_organization_info:[],added_type_of_help_needed:[],added_city:[],added_state:[]}}},{key:"grabFromAPI",value:function(){var e=this,t=this.props.match.params.profileID;this.props.token&&(g.a.get("http://127.0.0.1:8000/api/".concat(t,"/"),{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({profile:t.data})})),g.a.get("http://127.0.0.1:8000/rest-auth/user/",{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({my_profile:t.data})})))}},{key:"componentDidMount",value:function(){this.grabFromAPI()}},{key:"componentDidUpdate",value:function(e){var t=a(65);if(this.props.token&&t.isEqual(this.state,this.getInitialState())&&this.grabFromAPI(),!this.state.my_form&&0!==this.state.my_profile.length){var n=this.state.my_profile.pk===this.state.profile.user;n&&this.setState({my_form:n})}e.isAuthenticated!==this.props.isAuthenticated&&this.props.history.push("/")}},{key:"handleSubmit",value:function(e){g.a.put("http://127.0.0.1:8000/api/".concat(this.state.my_profile.pk,"/"),{is_organization:this.state.added_is_organization,first_name:this.state.added_first_name.length>0?this.state.added_first_name:null,last_name:this.state.added_last_name.length>0?this.state.added_last_name:null,area_of_expertise:this.state.added_area_of_expertise.length>0?this.state.added_area_of_expertise:null,cause_of_interest:this.state.added_cause_of_interest.length>0?this.state.added_cause_of_interest:null,organization_name:this.state.added_organization_name.length>0?this.state.added_organization_name:null,organization_info:this.state.added_organization_info.length>0?this.state.added_organization_info:null,type_of_help_needed:this.state.added_type_of_help_needed.length>0?this.state.added_type_of_help_needed:null,city:this.state.added_city.length>0?this.state.added_city:null,state:this.state.added_state.length>0?this.state.added_state:null,user:this.state.my_profile.pk},{headers:{authorization:"Token ".concat(this.props.token.token)}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.state.added_is_organization?this.props.history.push("/profiles/".concat(this.state.my_profile.pk)):this.props.history.push("/contributors/profiles/".concat(this.state.my_profile.pk))}},{key:"handleChange",value:function(e){var t,a=e.target;t="added_is_organization"===a.name?a.checked:a.value;var n=a.name;this.setState(Object(F.a)({},n,t))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(P,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,my_form:this.state.my_form,handler:this.handler,added_is_organization:this.state.added_is_organization,added_first_name:this.state.added_first_name,added_last_name:this.state.added_last_name,added_area_of_expertise:this.state.added_area_of_expertise,added_cause_of_interest:this.state.added_area_cause_of_interest,added_organization_name:this.state.added_organization_name,added_organization_info:this.state.added_organization_info,added_type_of_help_needed:this.state.added_type_of_help_needed,added_city:this.state.added_city,added_state:this.state.added_state}))}}]),t}(i.a.Component),N=Object(h.b)((function(e){return{token:e.token,isAuthenticated:null!==e.token}}))(U);var L=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10"},e.profile.first_name," ",e.profile.last_name),i.a.createElement("div",null,e.profile.city,", ",e.profile.state)),"Expert in ",e.profile.area_of_expertise," ",i.a.createElement("br",null),"Interested in ",e.profile.cause_of_interest," ",i.a.createElement("br",null),e.is_my_profile?i.a.createElement(p.b,{to:"/update/".concat(e.profile.id)},"Update profile"):null)},H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=e.getInitialState(),e.grabFromAPI=e.grabFromAPI.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{profile:[],my_profile:[],is_my_profile:!1}}},{key:"grabFromAPI",value:function(){var e=this,t=this.props.match.params.profileID;this.props.token?(g.a.get("http://127.0.0.1:8000/api/".concat(t,"/"),{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({profile:t.data})})),g.a.get("http://127.0.0.1:8000/rest-auth/user/",{headers:{Authorization:"Token ".concat(this.props.token.token)}}).then((function(t){e.setState({my_profile:t.data})}))):g.a.get("http://127.0.0.1:8000/api/".concat(t,"/")).then((function(t){e.setState({profile:t.data})}))}},{key:"componentDidMount",value:function(){this.grabFromAPI()}},{key:"componentDidUpdate",value:function(e){var t=a(65);this.props.token&&t.isEqual(this.state,this.getInitialState())&&this.grabFromAPI(),!this.state.is_my_profile&&Object.keys(this.state.my_profile).length>0&&this.state.my_profile.pk===this.state.profile.user&&(console.log(this.state.my_profile,this.state.profile.user),this.setState({is_my_profile:!0})),e.isAuthenticated!==this.props.isAuthenticated&&this.props.history.push("/")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(L,{profile:this.state.profile,is_my_profile:this.state.is_my_profile}))}}]),t}(i.a.Component),M=Object(h.b)((function(e){return{token:e.token,isAuthenticated:null!==e.token}}))(H),q=function(e){return{type:"AUTH_SUCCESS",token:e}},R=function(e){return{type:"AUTH_FAIL",error:e}},G=function(){return localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},B=function(e){return function(t){setTimeout((function(){t(G())}),1e3*e)}},X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.isAuthenticated&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.isAuthenticated&&this.props.history.push("/")}},{key:"handleSubmit",value:function(e){var t=e.target.username.value,a=e.target.password.value;this.props.onAuth(t,a),e.preventDefault()}},{key:"render",value:function(){var e=null;return this.props.error&&(e=i.a.createElement("p",null,this.props.error.message)),i.a.createElement("div",null,e,this.props.loading?i.a.createElement("div",null,"LOADING"):i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"username"}),i.a.createElement("input",{type:"password",name:"password",placeholder:"password"}),i.a.createElement("input",{type:"submit",value:"Login"})),i.a.createElement(p.b,{to:"/signup/"},"Signup")))}}]),t}(n.Component),J=Object(h.b)((function(e){return{loading:e.loading,error:e.error,isAuthenticated:null!==e.token}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(q(t)),a(B(3600))})).catch((function(e){a(R(e))}))}}(t,a))}}}))(X),W=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.isAuthenticated&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.isAuthenticated&&this.props.history.push("/")}},{key:"handleSubmit",value:function(e){var t=e.target.username.value,a=e.target.email.value,n=e.target.password1.value,i=e.target.password2.value;this.props.onAuth(t,a,n,i),e.preventDefault()}},{key:"render",value:function(){var e=null;return this.props.error&&(e=i.a.createElement("p",null,this.props.error.message)),i.a.createElement("div",null,e,this.props.loading?i.a.createElement("div",null,"LOADING"):i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"username"}),i.a.createElement("input",{type:"text",name:"email",placeholder:"email"}),i.a.createElement("input",{type:"password",name:"password1",placeholder:"password"}),i.a.createElement("input",{type:"password",name:"password2",placeholder:"confirm password"}),i.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),K=Object(h.b)((function(e){return{loading:e.loading,error:e.error,isAuthenticated:null!==e.token}}),(function(e){return{onAuth:function(t,a,n,i){return e(function(e,t,a,n){return function(i){i({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),i(q(t)),i(B(3600))})).catch((function(e){i(R(e))}))}}(t,a,n,i))}}}))(W),Q=function(){return i.a.createElement("div",null,i.a.createElement(m.a,{exact:!0,path:"/",component:I}),i.a.createElement(m.a,{exact:!0,path:"/contributors/",component:C}),i.a.createElement(m.a,{exact:!0,path:"/profiles/:profileID",component:T}),i.a.createElement(m.a,{exact:!0,path:"/contributors/profiles/:profileID",component:M}),i.a.createElement(m.a,{exact:!0,path:"/update/:profileID/",component:N}),i.a.createElement(m.a,{exact:!0,path:"/login/",component:J}),i.a.createElement(m.a,{exact:!0,path:"/signup/",component:K}))},V=a(286),Z=a(288),$=a(289),Y=a(290),ee=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement($.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},i.a.createElement($.a.Brand,null,i.a.createElement(p.b,{to:"/",className:"nav-item nav-link"},"Home")),i.a.createElement($.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement($.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(Y.a,{className:"mr-auto"},i.a.createElement(p.b,{to:"/",className:"nav-item nav-link align-self-sm-end"},"Organizations"),i.a.createElement(p.b,{to:"/contributors/",className:"nav-item nav-link align-self-sm-end"},"Contributors")),i.a.createElement(Y.a,null,this.props.isAuthenticated?i.a.createElement("button",{className:"nav-item nav-link btn btn-link align-self-sm-end",onClick:this.props.logout},"Logout"):i.a.createElement(p.b,{to:"/login/",className:"nav-item nav-link align-self-sm-end"},"Login"))))}}]),t}(n.Component),te=Object(h.b)(null,(function(e){return{logout:function(){return e(G())}}}))(ee),ae=V.a.Content,ne=V.a.Footer;var ie=function(e){return i.a.createElement(V.a,{className:"layout"},i.a.createElement(te,e),i.a.createElement(ae,{style:{padding:"0 50px"}},i.a.createElement(Z.a,{style:{margin:"100px 0"}}),i.a.createElement("div",{className:"site-layout-content"},e.children)),i.a.createElement(ne,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))},re=(a(280),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement(ie,this.props,i.a.createElement(Q,null))))}}]),t}(n.Component)),oe=Object(h.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(G());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(G()):(e(q(t)),e(B((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(61),se=a(164),ce=(a(281),a(165)),ue=function(e,t){return Object(ce.a)({},e,{},t)},de={const:null,error:null,loading:!1},pe=function(e,t){return ue(e,{error:null,loading:!0})},he=function(e,t){return ue(e,{token:t,error:null,loading:!1})},me=function(e,t){return ue(e,{error:t.error,loading:!1})},fe=function(e,t){return ue(e,{token:null})},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return pe(e);case"AUTH_SUCCESS":return he(e,t);case"AUTH_FAIL":return me(e,t);case"AUTH_LOGOUT":return fe(e);default:return e}},ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.c,be=Object(le.d)(_e,ge(Object(le.a)(se.a))),ye=i.a.createElement(h.a,{store:be},i.a.createElement(oe,null));o.a.render(ye,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.6fe14dcf.chunk.js.map