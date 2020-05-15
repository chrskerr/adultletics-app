(this["webpackJsonpadultletics-admin"]=this["webpackJsonpadultletics-admin"]||[]).push([[1],{140:function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i),u=e(31),o=e(37),_=e(17),s=e(57),a=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(6),e.e(7)]).then(e.bind(null,606))})),d=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(5),e.e(9)]).then(e.bind(null,676))}));function l(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(i.Suspense,{fallback:r.a.createElement(r.a.Fragment,null)},r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:a}),r.a.createElement(_.a,{component:d})))))}s.a.initialize("UA-165263586-1");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e(60);var c=document.getElementById("root");c.hasChildNodes()?Object(u.hydrate)(r.a.createElement(l,null),c):Object(u.render)(r.a.createElement(l,null),c),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},38:function(t,n,e){"use strict";var i=e(1),r=Object(i.createContext)({authUser:{},token:"",uid:"",isAuthenticating:!1,isAuthenticated:!1,updateAuth:function(){},signIn:function(){},signOut:function(){}}),u=Object(i.createContext)({panel:{},openPanel:function(){},closePanel:function(){},breakpoint:"",setBreakpoint:function(){}});n.a={Auth:r,UI:u}},40:function(t,n,e){"use strict";var i=e(5),r=e(6),u=e.n(r);function o(){var t=Object(i.a)(["\n    query getAllDays {\n        days {\n            id title  uid\n        }\n    }\n"]);return o=function(){return t},t}function _(){var t=Object(i.a)(["\n    mutation updateWeeksDays ( $objects: [weeks_insert_input!]! ) {\n        insert_weeks( objects: $objects ) {\n            returning { id }\n        }\n    }\n"]);return _=function(){return t},t}function s(){var t=Object(i.a)(["\n    mutation updateWeeksDays ( $id: uuid!, $data: weeks_days_set_input! ) {\n        update_weeks_days( where: { id: { _eq: $id }}, _set: $data ) {\n            returning { id }\n        }\n    }\n"]);return s=function(){return t},t}function a(){var t=Object(i.a)(["\n    mutation updateWeek ( $id: uuid!, $data: weeks_set_input! ) {\n        update_weeks( where: { id: { _eq: $id }}, _set: $data ) {\n            returning { id }\n        }\n    }\n"]);return a=function(){return t},t}function d(){var t=Object(i.a)(["\n    subscription weekSubscription ( $id: uuid! ) {\n        weeks_by_pk( id: $id ) {\n            created_at id week_start\n            title updated_at\n            days ( order_by: { _day: asc }) {\n                id\n                day { id title uid }\n                workout {\n                    body id\n                    version_num\n                    drills {\n                        id\n                        drill {\n                            description\n                            id title url\n                        }\n                    }\n                    workout {\n                        id intensity\n                        title type\n                    }\n                    stats {\n                        id\n                        running_minutes_beginner_short running_km_beginner_short\n                        running_minutes_intermediate_short running_km_intermediate_short\n                        running_minutes_advanced_short running_km_advanced_short\n                        running_minutes_beginner_long running_km_beginner_long\n                        running_minutes_intermediate_long running_km_intermediate_long\n                        running_minutes_advanced_long running_km_advanced_long\n                    }\n                }\n            }\n            daily_challenge { id title description }\n        }\n    }\n"]);return d=function(){return t},t}function l(){var t=Object(i.a)(["\n    subscription getAllWeeks {\n        weeks {\n            id title updated_at week_start\n            days ( order_by: { _day: asc }) {\n                id\n                day { id title uid }\n                workout {\n                    body id\n                    version_num\n                    drills {\n                        id\n                        drill {\n                            description\n                            id title url\n                        }\n                    }\n                    workout {\n                        id intensity\n                        title type\n                    }\n                    stats {\n                        id\n                        running_minutes_beginner_short running_km_beginner_short\n                        running_minutes_intermediate_short running_km_intermediate_short\n                        running_minutes_advanced_short running_km_advanced_short\n                        running_minutes_beginner_long running_km_beginner_long\n                        running_minutes_intermediate_long running_km_intermediate_long\n\t\t\t\t\t    running_minutes_advanced_long running_km_advanced_long\n                    }\n                }\n            }\n        }\n    }\n"]);return l=function(){return t},t}function c(){var t=Object(i.a)(["\n    query getAllWeeks {\n        weeks {\n            id title updated_at week_start _challenge\n            days ( order_by: { _day: asc }) {\n                id\n                day { id title uid }\n                workout {\n                    body id\n                    version_num\n                    drills {\n                        id\n                        drill {\n                            description\n                            id title url\n                        }\n                    }\n                    workout {\n                        id intensity\n                        title type\n                    }\n                    stats {\n                        id\n                        running_minutes_beginner_short running_km_beginner_short\n                        running_minutes_intermediate_short running_km_intermediate_short\n                        running_minutes_advanced_short running_km_advanced_short\n                        running_minutes_beginner_long running_km_beginner_long\n                        running_minutes_intermediate_long running_km_intermediate_long\n                        running_minutes_advanced_long running_km_advanced_long\n                    }\n                }\n            }\n        }\n    }\n"]);return c=function(){return t},t}function g(){var t=Object(i.a)(["\n    mutation deleteWorkout ( $id: uuid! ) {\n        update_weeks_days( where: { _workouts_version: { _eq: $id }}, _set: { _workouts_version: null }) {\n            returning { id }\n        }\n        delete_workouts_drills( where: { workouts_version: { id: { _eq: $id }}}) {\n            returning { id }\n        }\n        delete_workouts_versions( where: { id: { _eq: $id }}) {\n            returning { id }\n        }\n        delete_workouts_stats( where: { workouts_version: { id: { _eq: $id }}}) {\n            returning { id }\n        }\n    }\n"]);return g=function(){return t},t}function m(){var t=Object(i.a)(["\n    mutation deleteWorkout ( $id: uuid! ) {\n        update_weeks_days( where: { workout: { _workout: {_eq: $id }}}, _set: { _workouts_version: null }) {\n            returning { id }\n        }\n        delete_workouts_drills( where: { workouts_version: { workout: { id: { _eq: $id }}}}) {\n            returning { id }\n        }\n        delete_workouts_versions( where: { workout: { id: { _eq: $id }}}) {\n            returning { id }\n        }\n        delete_workouts_stats( where: { workouts_version: { workout: { id: { _eq: $id }}}}) {\n            returning { id }\n        }\n        delete_workouts( where: { id: { _eq: $id }}) {\n            returning { id }\n        }\n    }\n"]);return m=function(){return t},t}function b(){var t=Object(i.a)(["\n\tmutation deleteWorkoutsDrills ( $id: uuid! ) {\n\t\tdelete_workouts_drills( where: { id: { _eq: $id }}) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return b=function(){return t},t}function k(){var t=Object(i.a)(["\n\tmutation insertWorkoutsDrills ( $objects: [workouts_drills_insert_input!]! ) {\n\t\tinsert_workouts_drills( objects: $objects ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return k=function(){return t},t}function v(){var t=Object(i.a)(["\n\tmutation updateWorkoutVersion ( $version_id: uuid!, $stats_id: uuid!, $workout_id: uuid!, $body: String!, $workout_data: workouts_set_input!, $stats_data: workouts_stats_set_input! ) {\n\t\tupdate_workouts_versions( where: { id: { _eq: $version_id }}, _set: { body: $body }) {\n\t\t\treturning { id }\n\t\t}\n\t\tupdate_workouts_stats( where: { id: { _eq: $stats_id }}, _set: $stats_data ) {\n\t\t\treturning { id }\n\t\t}\n\t\tupdate_workouts( where: { id: { _eq: $workout_id }}, _set: $workout_data ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return v=function(){return t},t}function h(){var t=Object(i.a)(["\n\tmutation insertWorkoutVersion ( $objects: [workouts_versions_insert_input!]! ) {\n\t\tinsert_workouts_versions ( objects: $objects ) {\n\t\t\treturning { id workout { id } }\n\t\t}\n\t}\n"]);return h=function(){return t},t}function y(){var t=Object(i.a)(["\n\tquery getWorkout ( $id: uuid! ) {\n\t\tworkouts_versions_by_pk ( id: $id ) {\n\t\t\tid body\n\t\t\tversion_num\n\t\t\towner {\n\t\t\t\tfirst_name\n\t\t\t}\n\t\t\tdrills {\n\t\t\t\tid\n\t\t\t\tdrill {\n\t\t\t\t\ttitle id\n\t\t\t\t}\n\t\t\t}\n\t\t\tstats {\n                id\n                running_minutes_beginner_short running_km_beginner_short\n                running_minutes_intermediate_short running_km_intermediate_short\n                running_minutes_advanced_short running_km_advanced_short\n                running_minutes_beginner_long running_km_beginner_long\n                running_minutes_intermediate_long running_km_intermediate_long\n                running_minutes_advanced_long running_km_advanced_long\n\t\t\t}\n\t\t\tworkout {\n\t\t\t\tid title type\n                intensity\n\t\t\t}\n\t\t}\n\t}\n"]);return y=function(){return t},t}function w(){var t=Object(i.a)(["\n\tsubscription getWorkout ( $id: uuid! ) {\n\t\tworkouts_by_pk( id: $id ) {\n\t\t\tid title type\n            intensity\n\t\t\tversions ( order_by: { version_num: asc } ){\n\t\t\t\tid body\n\t\t\t\tversion_num\n\t\t\t\towner {\n\t\t\t\t\tfirst_name\n\t\t\t\t}\n\t\t\t\tdrills {\n\t\t\t\t\tid\n\t\t\t\t\tdrill {\n\t\t\t\t\t\ttitle id\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstats {\n\t\t\t\t\tid\n\t\t\t\t\trunning_minutes_beginner_short running_km_beginner_short\n\t\t\t\t\trunning_minutes_intermediate_short running_km_intermediate_short\n\t\t\t\t\trunning_minutes_advanced_short running_km_advanced_short\n\t\t\t\t\trunning_minutes_beginner_long running_km_beginner_long\n\t\t\t\t\trunning_minutes_intermediate_long running_km_intermediate_long\n\t\t\t\t\trunning_minutes_advanced_long running_km_advanced_long\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return w=function(){return t},t}function p(){var t=Object(i.a)(["\n\tquery getWorkout ( $id: uuid! ) {\n\t\tworkouts_by_pk( id: $id ) {\n\t\t\tid title type\n            intensity\n\t\t\tversions ( order_by: { version_num: asc } ){\n\t\t\t\tid body\n\t\t\t\tversion_num\n\t\t\t\towner {\n\t\t\t\t\tfirst_name\n\t\t\t\t}\n\t\t\t\tdrills {\n\t\t\t\t\tid\n\t\t\t\t\tdrill {\n\t\t\t\t\t\ttitle id\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstats {\n\t\t\t\t\tid\n\t\t\t\t\trunning_minutes_beginner_short running_km_beginner_short\n\t\t\t\t\trunning_minutes_intermediate_short running_km_intermediate_short\n\t\t\t\t\trunning_minutes_advanced_short running_km_advanced_short\n\t\t\t\t\trunning_minutes_beginner_long running_km_beginner_long\n\t\t\t\t\trunning_minutes_intermediate_long running_km_intermediate_long\n\t\t\t\t\trunning_minutes_advanced_long running_km_advanced_long\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return p=function(){return t},t}function f(){var t=Object(i.a)(["\n\tquery getWorkouts {\n\t\tworkouts {\n\t\t\tid title type intensity\n            versions ( order_by: { version_num: asc } ){\n\t\t\t\tid body\n\t\t\t\tversion_num\n\t\t\t\towner {\n\t\t\t\t\tfirst_name\n\t\t\t\t}\n\t\t\t\tdrills {\n\t\t\t\t\tid\n\t\t\t\t\tdrill {\n\t\t\t\t\t\ttitle id\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstats {\n\t\t\t\t\tid\n\t\t\t\t\trunning_minutes_beginner_short running_km_beginner_short\n\t\t\t\t\trunning_minutes_intermediate_short running_km_intermediate_short\n\t\t\t\t\trunning_minutes_advanced_short running_km_advanced_short\n\t\t\t\t\trunning_minutes_beginner_long running_km_beginner_long\n\t\t\t\t\trunning_minutes_intermediate_long running_km_intermediate_long\n\t\t\t\t\trunning_minutes_advanced_long running_km_advanced_long\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return f=function(){return t},t}function $(){var t=Object(i.a)(["\n\tmutation updateChallenge ( $id: uuid!, $data: daily_challenges_set_input! ) {\n\t\tupdate_daily_challenges ( where: { id: { _eq: $id }}, _set: $data ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return $=function(){return t},t}function j(){var t=Object(i.a)(["\n\tmutation insertChalleenge ( $objects: [daily_challenges_insert_input!]! ) {\n\t\tinsert_daily_challenges ( objects: $objects ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return j=function(){return t},t}function O(){var t=Object(i.a)(["\n\tquery getChallenge ( $id: uuid! ) {\n\t\tdaily_challenges_by_pk ( id: $id ) {\n\t\t\tid title description\n            weeks { id }\n\t\t}\n\t}\n"]);return O=function(){return t},t}function q(){var t=Object(i.a)(["\n\tquery getAllChallenges {\n\t\tdaily_challenges ( order_by: { title: asc }) {\n\t\t\tid title description\n\t\t}\n\t}\n"]);return q=function(){return t},t}function A(){var t=Object(i.a)(["\n\tmutation updateDrills ( $id: uuid!, $data: drills_set_input! ) {\n\t\tupdate_drills( where: { id: { _eq: $id }}, _set: $data ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return A=function(){return t},t}function W(){var t=Object(i.a)(["\n\tmutation insertDrills ( $objects: [drills_insert_input!]! ) {\n\t\tinsert_drills ( objects: $objects ) {\n\t\t\treturning { id }\n\t\t}\n\t}\n"]);return W=function(){return t},t}function E(){var t=Object(i.a)(["\n\tquery getAllDrills ( $id: uuid! ) {\n\t\tdrills_by_pk ( id: $id ) {\n\t\t\tid title url description embed_url\n\t\t\tworkouts_drills {\n\t\t\t\tworkouts_version {\n\t\t\t\t\tworkout { title }\n\t\t\t\t\tversion_num\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return E=function(){return t},t}function D(){var t=Object(i.a)(["\n\tquery getAllDrills {\n\t\tdrills ( order_by: { title: asc }) {\n\t\t\tid title url description embed_url\n\t\t}\n\t}\n"]);return D=function(){return t},t}function C(){var t=Object(i.a)(["\n\tquery getUser ( $uid: String! ) {\n\t\tusers_by_pk( uid: $uid ) {\n\t\t\temail first_name id\n\t\t}\n\t}\n"]);return C=function(){return t},t}var S=u()(C()),V=u()(D()),P=u()(E()),U=u()(W()),x=u()(A()),I=u()(q()),z=u()(O()),B=u()(j()),H=u()($()),N=u()(f()),R=u()(p()),J=u()(w()),L=u()(y()),T=u()(h()),F=u()(v()),M=u()(k()),G=u()(b()),K=u()(m()),Q=u()(g()),X=u()(c()),Y=u()(l()),Z=u()(d()),tt=u()(a()),nt=u()(s()),et=u()(_()),it=u()(o());n.a={auth:{getUser:S},drills:{getAll:V,getOne:P,add:U,update:x},dailyChallenges:{getAll:I,getOne:z,add:B,update:H},workouts:{getAll:N,getOne:R,subscribe:J,getVersion:L,addVersion:T,updateVersion:F,addDrill:M,removeDrill:G,deleteWorkout:K,deleteVersion:Q},weeks:{getAll:X,subscribe:Z,subscribeAll:Y,updateWeek:tt,updateWeekday:nt,add:et},days:{getAll:it}}},41:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e(1),r=e.n(i),u=e(141);function o(){return r.a.createElement("div",{className:"c-loading"},r.a.createElement(u.a,null))}},42:function(t,n,e){"use strict";n.a={intensityOptions:[{label:"Recovery",value:"1"},{label:"Low",value:"2"},{label:"Moderate",value:"3"},{label:"High",value:"4"},{label:"Very High",value:"5"}],workoutTypes:[{label:"Long Aerobic",value:"long-aerobic",system:"2 aerobic"},{label:"Short Aerobic",value:"short-aerobic",system:"2 aerobic"},{label:"Recovery",value:"recovery",system:"1 recovery"},{label:"Intervals",value:"intervals",system:"3 anaerobic"},{label:"Strength",value:"strength",system:"4 atp"},{label:"Tempo Run",value:"tempo",system:"3 anaerobic"},{label:"Speed Play",value:"speed-play",system:"3 anaerobic"},{label:"Hills",value:"hills",system:"3 anaerobic"}]}},60:function(t,n,e){"use strict";e(76);var i=e(40);e.d(n,"b",(function(){return i.a}));var r=e(38);e.d(n,"c",(function(){return r.a}));var u=e(41);e.d(n,"a",(function(){return u.a}));var o=e(42);e.d(n,"d",(function(){return o.a}))},67:function(t,n,e){t.exports=e(140)},76:function(t,n,e){}},[[67,2,4]]]);
//# sourceMappingURL=main.2a93d6e4.chunk.js.map