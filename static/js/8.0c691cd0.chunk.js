(this["webpackJsonpadultletics-app"]=this["webpackJsonpadultletics-app"]||[]).push([[8],{411:function(e,t,a){},677:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return se})),a.d(t,"Queries",(function(){return me.a})),a.d(t,"Services",(function(){return ie.a})),a.d(t,"Loading",(function(){return re.a})),a.d(t,"constants",(function(){return ue.a}));var n=a(1),r=a.n(n),i=a(17),l=(a(411),a(231)),o=a(181),c=a(199),m=a(151),u=a(412),s=a(537),d=a(615),g=a(150),p=a.n(g),f=a(682),E=a(610);function h(){var e=Object(m.d)(me.a.weeks.subscribeAll),t=e.data,a=e.loading,n=Object(c.a)(p.a.get(t,"weeks",[])).sort((function(e,t){return Object(d.a)(e.week_start)-Object(d.a)(t.week_start)}));return a?r.a.createElement(re.a,null):r.a.createElement(f.a,{className:"v-dashboard"},r.a.createElement(f.a,{display:"flex",marginBottom:48},r.a.createElement(E.a,{size:800,color:"#1070CA"},"Dashboard")),r.a.createElement(f.a,{height:450,elevation:1,background:"white",padding:24,marginBottom:24},r.a.createElement(E.a,{size:300},p.a.upperCase("Workout popularity over time")),r.a.createElement(k,{weeks:n})),r.a.createElement(f.a,{height:300,elevation:1,background:"white",padding:24,marginBottom:24},r.a.createElement(E.a,{size:300},p.a.upperCase("Workout types over time")),r.a.createElement(b,{weeks:n})),r.a.createElement(f.a,{height:300,elevation:1,background:"white",padding:24,marginBottom:24},r.a.createElement(E.a,{size:300},p.a.upperCase("Energy systems over time")),r.a.createElement(y,{weeks:n})))}var b=Object(n.memo)((function(e){var t=e.weeks,a=ue.a.workoutTypes,n=[],i=p.a.compact(p.a.map(p.a.rangeRight(0,10),(function(e){var r=p.a.size(t)-e;if(r<0)return!1;var i=r-10<0?0:r-10,c=p.a.slice(t,i,r);return p.a.reduce(c,(function(e,t,r){return p.a.reduce(p.a.get(t,"days",[]),(function(e,t){var i=p.a.get(p.a.find(a,["value",p.a.get(t,"workout.workout.type")]),"label");if(!i)return e;n.includes(i)||n.push(i);var c=p.a.get(e,["data",i],0)+(1-(10-r)/11);return Object(o.a)({},e,{data:Object(o.a)({},e.data,Object(l.a)({},i,c))})}),Object(o.a)({},e))}),{label:e,data:{}})}))),c=p.a.map(i,(function(e){var t=p.a.toPairs(p.a.get(e,"data")).sort((function(e,t){return t[1]-e[1]}));return Object(o.a)({},e,{data:p.a.reduce(t,(function(e,t,a){return Object(o.a)({},e,Object(l.a)({},t[0],a+1))}),{})})})),m=p.a.map(n,(function(e){return{id:e,data:p.a.map(c,(function(t){return{x:p.a.get(t,"label"),y:p.a.get(t,["data",e],p.a.size(n))}}))}}));return p.a.isEmpty(m)?null:r.a.createElement(u.a,{data:m,margin:{top:40,right:150,bottom:60,left:60},colors:{scheme:"category10"},lineWidth:2,activeLineWidth:4,inactiveLineWidth:2,inactiveOpacity:.6,pointSize:5,activePointSize:10,inactivePointSize:0,pointColor:{theme:"background"},pointBorderWidth:3,activePointBorderWidth:3,pointBorderColor:{from:"serie.color"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Weeks ago",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Rank",legendPosition:"middle",legendOffset:-40},endLabelPadding:8})}),p.a.isEqual),k=Object(n.memo)((function(e){var t=e.weeks,a=[],n=p.a.compact(p.a.map(p.a.rangeRight(0,10),(function(e){var n=p.a.size(t)-e;if(n<=0)return!1;var r=n-10<0?0:n-10,i=p.a.slice(t,r,n);return p.a.reduce(i,(function(e,t,n){return p.a.reduce(p.a.get(t,"days",[]),(function(e,t){var r=p.a.get(t,"workout.workout.title"),i=p.a.get(t,"workout.workout.type");if(!r||"recovery"===i)return e;a.includes(r)||a.push(r);var c=p.a.get(e,["data",r],0)+(1-(10-n)/11);return Object(o.a)({},e,{data:Object(o.a)({},e.data,Object(l.a)({},r,c))})}),Object(o.a)({},e))}),{label:e,data:{}})}))),i=p.a.map(n,(function(e){var t=p.a.toPairs(p.a.get(e,"data")).sort((function(e,t){return t[1]-e[1]}));return Object(o.a)({},e,{data:p.a.reduce(t,(function(e,t,a){return Object(o.a)({},e,Object(l.a)({},t[0],a+1))}),{})})})),c=p.a.filter(p.a.map(a,(function(e){return{id:e,data:p.a.map(i,(function(t){return{x:p.a.get(t,"label"),y:p.a.get(t,["data",e],p.a.size(a))}}))}})),(function(e){var t=e.data;return p.a.get(p.a.last(t),"x")<=12}));return p.a.isEmpty(c)?null:r.a.createElement(u.a,{data:c,margin:{top:40,right:150,bottom:60,left:60},colors:{scheme:"category10"},lineWidth:2,activeLineWidth:4,inactiveLineWidth:2,inactiveOpacity:.6,pointSize:5,activePointSize:10,inactivePointSize:0,pointColor:{theme:"background"},pointBorderWidth:3,activePointBorderWidth:3,pointBorderColor:{from:"serie.color"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Weeks ago",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Rank",legendPosition:"middle",legendOffset:-40},endLabelPadding:8})}),p.a.isEqual),y=Object(n.memo)((function(e){var t=e.weeks,a=ue.a.workoutTypes,n=p.a.uniq(p.a.map(a,"system")).sort(),i=p.a.reduce(n,(function(e,t){return Object(o.a)({},e,Object(l.a)({},t,0))}),{}),c=p.a.map(t,(function(e){var t=e.days;return p.a.reduce(t,(function(e,t){var n=p.a.get(t,"workout.workout.type");if(!n)return e;var r=p.a.find(a,["value",n]),i=p.a.get(r,"system","missing");return Object(o.a)({},e,Object(l.a)({},i,e[i]?e[i]+1:1))}),Object(o.a)({},i))}));return p.a.isEmpty(c)?null:r.a.createElement(s.a,{data:c,keys:n,margin:{top:50,right:110,bottom:50,left:60},axisTop:null,axisRight:null,axisBottom:null,axisLeft:null,offsetType:"none",order:"none",colors:{scheme:"category10"},fillOpacity:.85,legends:[{anchor:"bottom-right",direction:"column",translateX:100,itemWidth:80,itemHeight:20,itemTextColor:"#999999",symbolSize:12,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000000"}}]}]})}),p.a.isEqual),v=a(154),w=a.n(v),x=a(156),j=a(153),O=a(37),B=a(354),_=a(406),C=a(690),z=a(237),P=a(672),I=a(673),A=a(608);function R(e){var t=e.id,a=Object(m.d)(me.a.workouts.subscribe,{variables:{id:t}}),l=a.data,o=a.loading,c=Object(m.b)(me.a.workouts.deleteWorkout,{refetchQueries:[{query:me.a.workouts.getAll}],awaitRefetchQueries:!0}),u=Object(j.a)(c,1)[0],s=Object(m.b)(me.a.workouts.deleteVersion,{refetchQueries:[{query:me.a.workouts.getOne,variables:{id:t}}],awaitRefetchQueries:!0}),d=Object(j.a)(s,1)[0],g=Object(n.useContext)(ie.a.UI).openPanel,h=Object(n.useState)(),b=Object(j.a)(h,2),k=b[0],y=b[1],v=ue.a.intensityOptions,B=ue.a.workoutTypes,R=Object(i.f)(),S=p.a.get(l,"workouts_by_pk.title"),W=p.a.get(l,"workouts_by_pk.type"),D=p.a.get(l,"workouts_by_pk.intensity"),F=p.a.get(l,"workouts_by_pk.versions");if(Object(n.useEffect)((function(){k||y(p.a.get(p.a.last(F),"version_num"))}),[F]),o)return r.a.createElement(re.a,null);var T=p.a.find(F,["version_num",k]),N=p.a.get(T,"body",""),q=p.a.get(T,"stats",{}),U=p.a.map(p.a.get(T,"drills",[]),"drill"),H=p.a.get(p.a.find(v,["value",D]),"label",""),M=p.a.get(p.a.find(B,["value",W]),"label",""),G=function(){var e=Object(x.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({variables:{id:t}});case 2:R.push("/workouts");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(x.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({variables:{id:p.a.get(T,"id")}});case 2:y(p.a.get(p.a.last(F),"version_num"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e){return y(p.a.get(p.a.find(F,["id",e]),"version_num"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{marginLeft:8,iconBefore:"plus",onClick:function(){return g({panel:"workouts/add-version",props:{id:T.id,workoutId:t,emit:Q},size:"wide"})}},"Add Version"),r.a.createElement(_.a,{marginLeft:8,iconBefore:"edit",onClick:function(){return g({panel:"workouts/edit",props:{id:T.id},size:"wide"})}},"Edit")),r.a.createElement(f.a,{marginBottom:32,display:"flex",flexDirection:"row",alignItems:"center"},r.a.createElement(f.a,{marginRight:16},r.a.createElement(E.a,null,S)),r.a.createElement(f.a,{flex:1},r.a.createElement(C.a,{marginRight:8,color:"blue"},M),r.a.createElement(C.a,{color:"blue"},H))),r.a.createElement(f.a,{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:24},r.a.createElement(z.a,null,"Versions:"),r.a.createElement(f.a,{flex:1,marginLeft:16},r.a.createElement(P.a,{alignItems:"center"},F&&p.a.map(F,(function(e){var t=e.version_num;return r.a.createElement(I.a,{key:t,id:t,onSelect:function(){return y(t)},isSelected:k===t,"aria-controls":"panel-".concat(t)},t)}))))),r.a.createElement(f.a,{background:"white",padding:32,marginBottom:32,elevation:1},r.a.createElement(E.a,{marginBottom:16,size:200},"Description:"),N&&p.a.map(N.split("\n"),(function(e,t){return e?r.a.createElement(A.a,{key:t},e):r.a.createElement("br",{key:t})}))),r.a.createElement(f.a,{marginBottom:32},r.a.createElement(E.a,{size:200,marginBottom:16},"Drills:"),p.a.isEmpty(U)?r.a.createElement(A.a,null,"No attached drills"):p.a.map(U,(function(e){var t=e.id,a=e.title;return r.a.createElement(O.b,{to:"/admin/drills/".concat(t),key:t,style:{marginBottom:"24px"}},r.a.createElement(f.a,{display:"flex",elevation:1,height:48,alignItems:"center",background:"white",marginBottom:16},r.a.createElement(z.a,{marginLeft:24},a)))}))),r.a.createElement(f.a,{background:"white",padding:32,elevation:1,marginBottom:24},r.a.createElement(E.a,{size:200},"Workout Minutes:"),r.a.createElement(f.a,{height:225},r.a.createElement(L,{stats:q}))),r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end",marginBottom:32},r.a.createElement(_.a,{intent:"danger",appearance:"minimal",onClick:Y,marginRight:24},"Delete This Version"),r.a.createElement(_.a,{intent:"danger",appearance:"minimal",onClick:G},"Delete This Workout")))}var L=Object(n.memo)((function(e){var t=e.stats,a=p.a.map(["short","long"],(function(e){return{id:"short"===e?"5/10km":"half/ultra",beginner:p.a.get(t,"running_minutes_beginner_".concat(e)),intermediate:p.a.get(t,"running_minutes_intermediate_".concat(e)),advanced:p.a.get(t,"running_minutes_advanced_".concat(e))}}));return r.a.createElement(B.a,{data:a,margin:{top:16,right:16,bottom:32,left:64},innerPadding:2,keys:["beginner","intermediate","advanced"],layout:"horizontal",groupMode:"grouped",colors:{scheme:"category10"},justify:!0,axisTop:null,axisRight:null,axisBottom:null,axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},isInteractive:!1,enableGridY:!1,legends:[{dataFrom:"keys",anchor:"bottom",direction:"row",translateX:0,translateY:32,itemWidth:128,itemHeight:16,itemDirection:"left-to-right",symbolSize:16}]})}),p.a.isEqual);function S(){var e=Object(n.useContext)(ie.a.UI).openPanel,t=Object(m.c)(me.a.workouts.getAll),a=t.data,i=t.loading,l=p.a.get(a,"workouts"),o=ue.a.intensityOptions,c=ue.a.workoutTypes;return i?r.a.createElement(re.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"plus",onClick:function(){return e({panel:"workouts/add",size:"wide"})}},"Add")),r.a.createElement(f.a,{marginBottom:16},r.a.createElement(E.a,null,"All Workouts:")),r.a.createElement(f.a,{marginBottom:40},l&&p.a.map(l,(function(e){var t=e.id,a=e.title,n=e.intensity,i=e.type,l=p.a.get(p.a.find(o,["value",n]),"label",""),m=p.a.get(p.a.find(c,["value",i]),"label","");return r.a.createElement(O.b,{to:"/admin/workouts/".concat(t),key:t,style:{marginBottom:"24px",width:"100%"}},r.a.createElement(f.a,{className:"c-row-hover",display:"flex",elevation:1,height:48,alignItems:"center",background:"white",marginBottom:16},r.a.createElement(f.a,{flex:1},r.a.createElement(z.a,{marginLeft:24,marginRight:8},a),r.a.createElement(C.a,{marginRight:8,color:"blue"},m),r.a.createElement(C.a,{color:"blue"},l))))}))))}function W(){var e=Object(i.h)().id,t=Boolean(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{size:800,color:"#1070CA",marginBottom:48},"Workouts")),r.a.createElement(f.a,null,t?r.a.createElement(R,{id:e}):r.a.createElement(S,null)))}var D=a(675),F=a(574),T=a(583),N=a(165),q=a(618),U=a(613);function H(e){var t=e.id,a=ue.a.workoutTypes,i=Object(m.d)(me.a.weeks.subscribe,{variables:{id:t}}),l=i.data,o=i.loading,c=Object(m.c)(me.a.dailyChallenges.getAll),u=c.data,s=c.loading,g=Object(m.b)(me.a.weeks.updateWeek),h=Object(j.a)(g,1)[0],b=Object(n.useContext)(ie.a.UI).openPanel;if(o||s)return r.a.createElement(re.a,null);var k=p.a.get(l,"weeks_by_pk"),y=k.title,v=k.updated_at,O=k.days,B=k.id,P=p.a.compact(p.a.map(O,"workout")),I=p.a.compact(p.a.map(O,"workout.stats")),R=p.a.get(k,"daily_challenges.id",""),L=p.a.get(u,"daily_challenges",[]),S=p.a.map(L,(function(e){return{value:e.id,label:e.title}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{marginLeft:8,iconBefore:"arrow-down",onClick:function(e){return M(k,e)}},"Download DOCX")),r.a.createElement(f.a,{marginBottom:32,display:"flex",flexDirection:"row",alignItems:"center"},r.a.createElement(f.a,{marginRight:16},r.a.createElement(E.a,null,y)),r.a.createElement(f.a,{flex:1},r.a.createElement(z.a,null,"Last updated: ",r.a.createElement(C.a,{color:"blue"},Object(D.a)(Object(d.a)(v),"dd MMM yyyy @ h:mm a").replace("@","at"))))),r.a.createElement(f.a,{marginBottom:32},r.a.createElement(N.a,{initialValues:{challenge:p.a.isNull(R)?"":R},onSubmit:function(){var e=Object(x.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.challenge,console.log(n),e.prev=2,e.next=5,h({variables:{id:t,data:{_challenge:n}}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),enableReinitialize:!0},(function(e){var t=e.values,a=e.handleSubmit,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement(f.a,{display:"flex",width:"50%",flexDirection:"row",alignItems:"center"},r.a.createElement(q.a,{flex:1,label:"Add a challenge",name:"challenge",value:t.challenge,onChange:function(e){n(e),a()},height:40},r.a.createElement("option",{key:"empty",value:""},"Please select one..."),S&&p.a.map(S,(function(e){var t=e.value,a=e.label;return r.a.createElement("option",{key:t,value:t},a)}))))))}))),r.a.createElement(f.a,{display:"flex",justifyContent:"space-between",marginBottom:32},O&&p.a.map(O,(function(e){var t=e.id,n=e.day.title,i=e.workout,l=p.a.get(i,"workout.title"),o=p.a.get(i,"version_num"),c=p.a.get(i,"id",""),m=p.a.get(i,"workout.type");return r.a.createElement(f.a,{key:t,elevation:1,width:"12%",background:"white",paddingLeft:16,paddingBottom:16},r.a.createElement(f.a,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:8},r.a.createElement(E.a,{size:200},n),r.a.createElement(U.a,{icon:"small-plus",appearance:"minimal",onClick:function(){return b({panel:"weeks/update-workout",props:{id:t,title:n,weekId:B},size:"wide"})}})),r.a.createElement(f.a,{paddingRight:16},p.a.isEmpty(i)?r.a.createElement(z.a,{color:"red"},"No workout chosen"):r.a.createElement("div",{onClick:function(){return b({panel:"weeks/view-workout-version",props:{id:c},size:"wide"})}},r.a.createElement(A.a,{marginBottom:8},l," - v",o),r.a.createElement(C.a,{color:"blue"},p.a.get(p.a.find(a,["value",m]),"label")))))}))),r.a.createElement(f.a,{marginBottom:40},r.a.createElement(E.a,{marginBottom:8},"Stats:"),r.a.createElement(f.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(f.a,{background:"white",padding:32,elevation:1,marginBottom:24,width:"45%"},r.a.createElement(E.a,{size:200},"Workout Minutes:"),r.a.createElement(f.a,{height:250},r.a.createElement(Y,{stats:I}))),r.a.createElement(f.a,{background:"white",padding:32,elevation:1,marginBottom:24,width:"45%"},r.a.createElement(E.a,{size:200},"Energy Systems:"),r.a.createElement(f.a,{height:250},r.a.createElement(G,{workouts:P}))))))}var M=function(e,t){t.preventDefault();var a=e.title,n=e.days,r=e.daily_challenge,i=new F.Document,l=[new F.Paragraph({text:a,heading:F.HeadingLevel.HEADING_1})];r&&p.a.isEmpty(r),p.a.forEach(n,(function(e){var t=p.a.get(e,"day.title",""),a=p.a.get(e,"workout",[]),n=p.a.compact(p.a.get(e,"workout.drills",[]));if(l.push(new F.Paragraph({text:t,heading:F.HeadingLevel.HEADING_3,spacing:{before:300}})),p.a.isEmpty(a))l.push(new F.Paragraph({text:"Nothing assigned today, rest day!"}));else{if(!p.a.isEmpty(n)){var r=p.a.map(n,(function(e){var t=e.drill,a=t.title,n=t.url;return new F.Paragraph({text:"".concat(a,": ").concat(n),bullet:{level:0}})}));l.push(new F.Paragraph({text:"Please perform the following drills:",heading:F.HeadingLevel.HEADING_4})),l.push.apply(l,Object(c.a)(r))}l.push(new F.Paragraph({text:a.body}))}})),i.addSection({children:l}),F.Packer.toBlob(i).then((function(e){return Object(T.save)(e,"".concat(a,".docx"))}))},G=Object(n.memo)((function(e){var t=e.workouts,a=ue.a.workoutTypes,n=p.a.uniq(p.a.map(a,"system")).sort(),i=p.a.map(t,(function(e){return p.a.get(p.a.find(a,["value",p.a.get(e,"workout.type")]),"system")})),l=p.a.map(n,(function(e){return{id:p.a.capitalize(p.a.nth(e.split(" "),1)),value:p.a.size(p.a.filter(i,(function(t){return t===e})))}}));return r.a.createElement(B.a,{data:l,margin:{top:16,right:16,bottom:16,left:72},layout:"horizontal",colors:{scheme:"category10"},colorBy:"index",justify:!0,axisTop:null,axisRight:null,axisBottom:null,axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},isInteractive:!1,enableGridY:!1})}),p.a.isEqual),Y=Object(n.memo)((function(e){var t=e.stats,a=p.a.map(["short","long"],(function(e){return{id:"short"===e?"5/10km":"half/ultra",beginner:p.a.reduce(t,(function(t,a){return p.a.isNull(p.a.get(a,"running_minutes_beginner_".concat(e),0))?t:t+p.a.get(a,"running_minutes_beginner_".concat(e),0)}),0),intermediate:p.a.reduce(t,(function(t,a){return p.a.isNull(p.a.get(a,"running_minutes_intermediate_".concat(e),0))?t:t+p.a.get(a,"running_minutes_intermediate_".concat(e),0)}),0),advanced:p.a.reduce(t,(function(t,a){return p.a.isNull(p.a.get(a,"running_minutes_advanced_".concat(e),0))?t:t+p.a.get(a,"running_minutes_advanced_".concat(e),0)}),0)}}));return r.a.createElement(B.a,{data:a,margin:{top:16,right:16,bottom:32,left:64},innerPadding:2,keys:["beginner","intermediate","advanced"],layout:"horizontal",groupMode:"grouped",colors:{scheme:"category10"},justify:!0,axisTop:null,axisRight:null,axisBottom:null,axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},isInteractive:!1,enableGridY:!1,legends:[{dataFrom:"keys",anchor:"bottom",direction:"row",translateX:0,translateY:32,itemWidth:128,itemHeight:16,itemDirection:"left-to-right",symbolSize:16}]})}),p.a.isEqual),Q=a(686),V=new Date;function X(){var e=Object(n.useContext)(ie.a.UI).openPanel,t=Object(m.c)(me.a.weeks.getAll),a=t.data,i=t.loading,l=Object(c.a)(p.a.get(a,"weeks",[])).sort((function(e,t){return Object(d.a)(t.week_start)-Object(d.a)(e.week_start)}));return i?r.a.createElement(re.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"plus",onClick:function(){return e({panel:"weeks/add"})}},"Add")),r.a.createElement(f.a,{marginBottom:16},r.a.createElement(E.a,null,"All Weeks:")),r.a.createElement(f.a,{marginBottom:40},l&&p.a.map(l,(function(e){var t=e.id,a=e.title,n=e.week_start,i=Object(Q.a)(V,Object(d.a)(n)),l=i>=7?"#FEF6F6":"white";return r.a.createElement(O.b,{to:"/admin/weeks/".concat(t),key:t,style:{marginBottom:"24px"}},r.a.createElement(f.a,{className:"c-row-hover",display:"flex",elevation:1,height:48,alignItems:"center",background:l,marginBottom:16},r.a.createElement(z.a,{marginLeft:24,marginRight:16},a),i>=0&&i<7&&r.a.createElement(C.a,{color:"green"},"Current")))}))))}function J(){var e=Object(i.h)().id,t=Boolean(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{size:800,color:"#1070CA",marginBottom:48},"Weeks")),r.a.createElement(f.a,null,t?r.a.createElement(H,{id:e}):r.a.createElement(X,null)))}var K=a(674);function Z(e){var t=Object(n.useContext)(ie.a.UI).openPanel,a=e.id,i=Object(m.c)(me.a.drills.getOne,{variables:{id:a}}),l=i.data;if(i.loading)return r.a.createElement(re.a,null);var o=p.a.get(l,"drills_by_pk",{}),c=p.a.get(o,"title"),u=p.a.get(o,"description"),s=p.a.get(o,"url"),d="https://www.youtube.com/embed/".concat(p.a.trim(s).substring(p.a.size(s)-11,p.a.size(s))),g=p.a.get(o,"workouts_drills",[]),h=p.a.size(g);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"edit",onClick:function(){return t({panel:"drills/edit",props:{id:a}})}},"Edit")),r.a.createElement(f.a,{marginBottom:32,display:"flex"},r.a.createElement(E.a,{marginRight:16},c),s&&r.a.createElement(K.a,{href:s,target:"_blank",rel:"noreferrer noopener"},s)),r.a.createElement(f.a,{display:"flex"},r.a.createElement(f.a,{flex:1,marginRight:32},u&&r.a.createElement(f.a,{background:"white",padding:32,marginBottom:32,elevation:1},r.a.createElement(A.a,null,u)),r.a.createElement(f.a,{background:"white",padding:32,marginBottom:32,elevation:1},r.a.createElement(z.a,null,"Appears in ",r.a.createElement("strong",null,h)," workouts"))),d&&r.a.createElement(f.a,{elevation:1,height:315,width:560},r.a.createElement("iframe",{width:"560",height:"315",src:d,title:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))}function $(){var e=Object(n.useContext)(ie.a.UI).openPanel,t=Object(m.c)(me.a.drills.getAll),a=t.data,i=t.loading,l=p.a.get(a,"drills");return i?r.a.createElement(re.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"plus",onClick:function(){return e({panel:"drills/add"})}},"Add")),r.a.createElement(f.a,{marginBottom:16},r.a.createElement(E.a,null,"All Drills:")),r.a.createElement(f.a,null,l&&p.a.map(l,(function(e){var t=e.id,a=e.title;return r.a.createElement(O.b,{to:"/admin/drills/".concat(t),key:t,style:{marginBottom:"24px"}},r.a.createElement(f.a,{className:"c-row-hover",display:"flex",elevation:1,height:48,alignItems:"center",background:"white",marginBottom:16},r.a.createElement(z.a,{marginLeft:24},a)))}))))}function ee(){var e=Object(i.h)().id,t=Boolean(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{size:800,color:"#1070CA",marginBottom:48},"Drills")),r.a.createElement(f.a,null,t?r.a.createElement(Z,{id:e}):r.a.createElement($,null)))}function te(e){var t=Object(n.useContext)(ie.a.UI).openPanel,a=e.id,i=Object(m.c)(me.a.dailyChallenges.getOne,{variables:{id:a}}),l=i.data;if(i.loading)return r.a.createElement(re.a,null);var o=p.a.get(l,"daily_challenges_by_pk",{}),c=p.a.get(o,"title"),u=p.a.get(o,"description"),s=p.a.get(o,"workouts_drills",[]),d=p.a.size(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"edit",onClick:function(){return t({panel:"daily-challenges/edit",props:{id:a}})}},"Edit")),r.a.createElement(f.a,{marginBottom:32,display:"flex"},r.a.createElement(E.a,{marginRight:16},c)),r.a.createElement(f.a,{display:"flex"},r.a.createElement(f.a,{flex:1,marginRight:32},u&&r.a.createElement(f.a,{background:"white",padding:32,marginBottom:32,elevation:1},r.a.createElement(A.a,null,u)),r.a.createElement(f.a,{background:"white",padding:32,marginBottom:32,elevation:1},r.a.createElement(z.a,null,"Appears in ",r.a.createElement("strong",null,d)," weeks")))))}function ae(){var e=Object(n.useContext)(ie.a.UI).openPanel,t=Object(m.c)(me.a.dailyChallenges.getAll),a=t.data,i=t.loading,l=p.a.get(a,"daily_challenges");return i?r.a.createElement(re.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(_.a,{iconBefore:"plus",onClick:function(){return e({panel:"daily-challenges/add"})}},"Add")),r.a.createElement(f.a,{marginBottom:16},r.a.createElement(E.a,null,"All Daily Challenges:")),r.a.createElement(f.a,null,l&&p.a.map(l,(function(e){var t=e.id,a=e.title;return r.a.createElement(O.b,{to:"/admin/challenges/".concat(t),key:t,style:{marginBottom:"24px"}},r.a.createElement(f.a,{className:"c-row-hover",display:"flex",elevation:1,height:48,alignItems:"center",background:"white",marginBottom:16},r.a.createElement(z.a,{marginLeft:24},a)))}))))}function ne(){var e=Object(i.h)().id,t=Boolean(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{size:800,color:"#1070CA",marginBottom:48},"Daily Challenges")),r.a.createElement(f.a,null,t?r.a.createElement(te,{id:e}):r.a.createElement(ae,null)))}var re=a(41),ie=a(38),le=a(683),oe=a(60);function ce(){var e=Object(i.f)(),t=Object(i.g)().pathname,a=Object(n.useContext)(oe.c.UI).openPanel,l=Object(n.useContext)(oe.c.Auth),o=l.isAuthenticated,c=l.isAuthenticating,m=l.authUser,u=l.signOut;return r.a.createElement("div",{className:"c-top-nav"},r.a.createElement(f.a,{display:"flex",height:78,alignItems:"center"},r.a.createElement(f.a,{alignItems:"center",justifyContent:"center"},r.a.createElement(E.a,{size:200},"Adultletics Employee Dashboard")),o?r.a.createElement(f.a,{display:"flex",flex:1,justifyContent:"space-between",paddingLeft:16},r.a.createElement(f.a,{display:"flex",alignItems:"center"},r.a.createElement(P.a,{alignItems:"center"},p.a.map([{name:"Dashboard",route:"/admin"},{name:"Workouts",route:"/admin/workouts"},{name:"Weeks",route:"/admin/weeks"},{name:"Drills",route:"/admin/drills"},{name:"Daily Challenges",route:"/admin/challenges"}],(function(a){var n=a.name,i=a.route;return r.a.createElement(I.a,{key:i,id:i,onSelect:function(){return e.push(i)},isSelected:"/admin"===i?t===i:t.startsWith(i),"aria-controls":"panel-".concat(n),height:40},n)})))),r.a.createElement(f.a,{display:"flex",alignItems:"center"},r.a.createElement(_.a,{marginRight:16,onClick:u},"Log Out"),r.a.createElement(le.a,{name:m.first_name,size:40}))):r.a.createElement(f.a,{display:"flex",flex:1,justifyContent:"space-between",paddingLeft:16},r.a.createElement(f.a,{display:"flex",alignItems:"center"},c?r.a.createElement(r.a.Fragment,null):r.a.createElement(z.a,{color:"red"},"You must log in to continue")),r.a.createElement(f.a,{display:"flex",alignItems:"center"},r.a.createElement(_.a,{isLoading:c,marginRight:16,onClick:function(){return a({panel:"auth/sign-in"})}},"Log In"),r.a.createElement(le.a,{name:m.first_name,size:40})))))}var me=a(40),ue=a(42);function se(){var e=Object(n.useContext)(ie.a.Auth),t=e.isAuthenticating,a=e.isAuthenticated;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),t&&r.a.createElement(re.a,null),!t&&a&&r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/admin/drills/:id?"},r.a.createElement(ee,null)),r.a.createElement(i.a,{path:"/admin/workouts/:id?"},r.a.createElement(W,null)),r.a.createElement(i.a,{path:"/admin/weeks/:id?"},r.a.createElement(J,null)),r.a.createElement(i.a,{path:"/admin/challenges/:id?"},r.a.createElement(ne,null)),r.a.createElement(i.a,{path:"/admin"},r.a.createElement(h,null))))}}}]);
//# sourceMappingURL=8.0c691cd0.chunk.js.map