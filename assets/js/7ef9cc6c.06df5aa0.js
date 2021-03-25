(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(97)),a=n(99),l={title:"IKEA E1744 SYMFONISK Rotary Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1744 SYMFONISK Rotary Remote. Supports deCONZ, ZHA, Zigbee2MQTT."},s={unversionedId:"blueprints/controllers/ikea_e1744",id:"blueprints/controllers/ikea_e1744",isDocsHomePage:!1,title:"IKEA E1744 SYMFONISK Rotary Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1744 SYMFONISK Rotary Remote. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_e1744.mdx",slug:"/blueprints/controllers/ikea_e1744",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e1744",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_e1744.mdx",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[]},{value:"Media Player",id:"media-player",children:[]}]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{id:"ikea_e1744",category:"controllers",mdxType:"ImportCard"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This blueprint is part of the ",Object(i.b)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",Object(i.b)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1744 SYMFONISK Rotary Remote. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),Object(i.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),Object(i.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_e1744#available-hooks"},"Hooks available for this controller")," for additional details."))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(a.c,{id:"deconz",mdxType:"Requirement"}),Object(i.b)(a.c,{id:"zha",mdxType:"Requirement"}),Object(i.b)(a.c,{id:"zigbee2mqtt",mdxType:"Requirement"}),Object(i.b)(a.c,{name:"Input Text Integration",required:"ZHA, Zigbee2MQTT",mdxType:"Requirement"},Object(i.b)("p",null,"This integration provides the entity which will be used to store the last button event. It's required when using ZHA to integrate the remote, as well as when using double press events. This should be activated by default so unless you tweaked the default configuration you're good to go."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)(a.b,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),Object(i.b)(a.b,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"(deCONZ, ZHA)",mdxType:"Input"}),Object(i.b)(a.b,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"(Zigbee2MQTT)",mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate left",description:"Action to run on rotate left.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate left stop",description:"Action to run on when stopping to rotate left the remote.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate right",description:"Action to run on rotate right.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate right stop",description:"Action to run on when stopping to rotate right the remote.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Remote - short press",description:"Action to run on short remote press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Remote - double press",description:"Action to run on double remote press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Remote - triple press",description:"Action to run on triple remote press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate left - loop until stop",description:"Loop the rotate left action until the rotation is stopped.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(a.b,{name:"Rotate right - loop until stop",description:"Loop the rotate right action until the rotation is stopped.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(a.b,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. See docs for more.",selector:"entity",required:"(ZHA, Zigbee2MQTT Required)",mdxType:"Input"}),Object(i.b)("h2",{id:"available-hooks"},"Available Hooks"),Object(i.b)("h3",{id:"light"},"Light"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rotate left -> Brightness down (continuous, until stop)"),Object(i.b)("li",{parentName:"ul"},"Rotate right -> Brightness up (continuous, until stop)"),Object(i.b)("li",{parentName:"ul"},"Click -> Toggle"),Object(i.b)("li",{parentName:"ul"},"Double click -> Color up"),Object(i.b)("li",{parentName:"ul"},"Triple click -> Color down")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),Object(i.b)("h3",{id:"media-player"},"Media Player"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rotate left -> Volume down (continuous, until stop)"),Object(i.b)("li",{parentName:"ul"},"Rotate right -> Volume up (continuous, until stop)"),Object(i.b)("li",{parentName:"ul"},"Click -> Play/Pause"),Object(i.b)("li",{parentName:"ul"},"Double click -> Next track"),Object(i.b)("li",{parentName:"ul"},"Triple click -> Previous track")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),Object(i.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(i.b)("p",null,"The reason why a text input is required to store the last long press event when using a remote with ZHA, Zigbee2MQTT is because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation."),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-07"),": first blueprint version \ud83c\udf89"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-25"),": \u26a0\ufe0f ",Object(i.b)("strong",{parentName:"li"},"Breaking Change"),": standardize input names across all the Controller blueprints.\nIf you plan to update this blueprint, please update the inputs in your automations as follows:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"remote")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"controller_device")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zigbee2mqtt_remote")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"controller_entity")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"action_click")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"action_click_short"))))))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return y}));var o=n(0),r=n.n(o);var i=function(e){return r.a.createElement("span",{className:"badge badge--"+e.variant},e.children)},a={action:{type:"Action"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},l={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var s=function(e){var t=e.selector?a[e.selector]:a.none;return r.a.createElement("div",null,r.a.createElement("span",{style:l.inputName},e.name," ",r.a.createElement(i,{variant:"primary"},t.type)," ",e.required?r.a.createElement(i,{variant:"warning"},e.required," Required"):r.a.createElement(i,{variant:"info"},"Optional")),r.a.createElement("br",null),r.a.createElement("p",{style:l.inputDescription,className:"margin-top--sm"},e.description),r.a.createElement("hr",null))},c={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var u=function(e){return r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("div",{style:c.requirementNameContainer},r.a.createElement("h3",{style:c.requirementName},e.name," "),e.required?r.a.createElement(i,{variant:"warning"},e.required," Required"):r.a.createElement(i,{variant:"info"},"Optional")),e.children)};var p={zigbee2mqtt:function(e){return r.a.createElement(u,{name:"Zigbee2MQTT Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){return r.a.createElement(u,{name:"ZHA Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){return r.a.createElement(u,{name:"deCONZ Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){return r.a.createElement(u,{name:"Controller Automation",required:e.required},r.a.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",r.a.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",r.a.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var d=function(e){var t=e.id?p[e.id]:u;return r.a.createElement(t,{name:e.name,required:e.required,refers:e.refers},e.children)},m=n(105),b=n(106),h=n.n(b),g=n(112),f={myHomeAssistantImage:{width:"100%",maxWidth:212}};var y=function(e){var t=Object(o.useState)(!1),n=t[0],i=t[1],a="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+e.category+"/"+e.id+"/"+e.id+".yaml",l=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(a);case 2:i(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card item shadow--md"},r.a.createElement("div",{className:"card__header margin-bottom--md"},r.a.createElement("h3",null,"Import this blueprint")),r.a.createElement("div",{className:"card__body"},r.a.createElement("div",{class:"row row--no-gutters"},r.a.createElement("div",{class:"col col--6"},r.a.createElement("h5",null,"My Home Assistant"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(a),target:"_blank"},r.a.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:f.myHomeAssistantImage})),r.a.createElement("br",null),r.a.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),r.a.createElement("div",{class:"col col--6"},r.a.createElement("h5",null,"Direct Link"),r.a.createElement("button",{className:"button button--"+(n?"success":"primary"),onClick:l},r.a.createElement("span",null,r.a.createElement(g.a,{size:16}),r.a.createElement("span",null," ",n?"Link Copied!":"Copy Link")))))))}}}]);