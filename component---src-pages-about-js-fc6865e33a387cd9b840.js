(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(t,e,a){"use strict";a.r(e);var n=a(12),i=(a(0),a(166)),A=a(169),o=a(171),c=a(175),r=a(188),s=a.n(r),u=a(170),l=a.n(u),h=a(163),m=a.n(h);e.default=function(){return Object(n.a)(i.a,null,Object(n.a)(A.b,null),Object(n.a)("div",{className:s.a.titleText,style:{width:"977px"}},"We’re __________ for the future."),Object(n.a)("div",{className:s.a.smallerText},"We’re a small team exploring the edge of technology.",Object(n.a)("br",null),Object(n.a)("br",null),"We’ve built everything from AIs to synthetic organisms, public blockchain infrastructure to drones. We are not blind optimists.",Object(n.a)("br",null),Object(n.a)("br",null),"We feel the best way to prepare for the future is to build it ourselves."),Object(n.a)(o.a,{classname:l.a.about}),Object(n.a)(c.a,{classname:m.a.about}))}},162:function(t,e,a){"use strict";a(12);var n=a(0),i=a.n(n),A=a(5),o=a.n(A),c=a(41),r=a.n(c);a.d(e,"a",function(){return r.a});a(165),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},165:function(t,e,a){var n;t.exports=(n=a(167))&&n.default||n},166:function(t,e,a){"use strict";var n=a(12),i=(a(0),a(177)),A=a.n(i);e.a=function(t){return Object(n.a)("div",{className:A.a.background},t.children)}},167:function(t,e,a){"use strict";a.r(e);a(65);var n=a(0),i=a.n(n),A=a(5),o=a.n(A),c=a(66),r=function(t){var e=t.location,a=t.pageResources;return a?i.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};r.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=r},168:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABQCAYAAAC+neOMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCSURBVHgB7daxEQAgDMSwh/13hhGgSC6NtIE7JwAAAAAAAAAAAMDbSo+TWeVdOwAA0MiZf3LmAAAAAAAAAAAAQKEL7CMCBxt4VXAAAAAASUVORK5CYII="},169:function(t,e,a){"use strict";var n=a(8),i=a.n(n),A=a(12),o=a(0),c=a.n(o),r=a(164),s=a.n(r),u=a(162),l=function(t){return Object(A.a)("div",{className:s.a.topLeftLink},Object(A.a)(u.a,{className:s.a.topLeftText,to:t.to,style:{color:t.color}},t.children))},h=function(t){return Object(A.a)("div",{className:s.a.topRightLink+" "+t.classname},Object(A.a)(u.a,{className:s.a.topRightText,to:t.to,style:{color:t.color}},t.children))},m=a(178),g=a.n(m),b=(a(168),a(179)),d=a.n(b),p=function(){return Object(A.a)("div",null,Object(A.a)("label",{htmlFor:"checkmenu",onClick:f},Object(A.a)("div",{className:d.a.menuDiv})),Object(A.a)("input",{type:"checkbox",id:"checkmenu"}))};function f(){alert("you activated my trap card")}a.d(e,"b",function(){return O}),a.d(e,"a",function(){return v});var O=function(t){function e(e){var a;a=t.call(this,e)||this;var n=e.color?e.color:"#000000";return a.state={color:n},a}return i()(e,t),e.prototype.render=function(){return Object(A.a)("div",{className:s.a.header},Object(A.a)(l,{to:"/",color:this.state.color},"General Futuristics"),Object(A.a)(g.a,{minWidth:840},Object(A.a)(h,{to:"/about/",classname:s.a.about,color:this.state.color},"About"),Object(A.a)(h,{to:"/work/",classname:s.a.work,color:this.state.color},"Work"),Object(A.a)(h,{to:"/inephemera/",classname:s.a.inephemera,color:this.state.color},"InEphemera"),Object(A.a)(h,{to:"/contact/",classname:s.a.contact,color:this.state.color},"Contact")),Object(A.a)(g.a,{maxWidth:840},Object(A.a)(p,null)))},e}(c.a.Component),v=function(){return Object(A.a)(O,{color:"#FFFFFF"})}},171:function(t,e,a){"use strict";var n=a(42),i=a.n(n),A=a(8),o=a.n(A),c=a(12),r=a(0),s=a.n(r),u=a(170),l=a.n(u);e.a=function(t){return Object(c.a)("div",{className:l.a.thoughts+" "+t.classname},Object(c.a)(h,null),Object(c.a)("div",{style:{width:"104px",height:"32px",top:"17px",color:"#C0C0C0"}},"Let’s talk."))};var h=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={word:""},a.changeText=a.changeText.bind(i()(a)),a.update=a.update.bind(i()(a)),a.array=["artificial intelligence","synthetic biology","computer vision","nuclear proliferation","cyberwarfare","cloud computing","robotics","extraplanetary exploration","the microbiome","privacy","climate change","the water crisis","surveillance capitalism","brain-computer interfaces","nootropics","prosthetics","philanthrocapitalism","addictive design","quantum computing","the right to be forgotten"],a.i=-1,a.changeText(),a}o()(e,t);var a=e.prototype;return a.changeText=function(){var t=Math.floor(20*Math.random());this.i=-1;var e=this.array[t];e==this.state.word&&this.changeText(),this.setState({word:e,timeout:150,text:""})},a.componentDidMount=function(){setTimeout(this.update,this.state.timeout)},a.componentDidUpdate=function(t,e,a){e.word!==this.state.word?setTimeout(this.update,this.state.timeout):e.text!==this.state.text&&setTimeout(this.update,this.state.timeout)},a.update=function(){this.i<this.state.word.length-1?(this.i+=1,this.setState({text:this.state.text+this.state.word.charAt(this.i)})):setTimeout(this.changeText,1500)},a.render=function(){return Object(c.a)("div",{style:{width:"400px",height:"32px"}},"Thoughts on ",this.state.text,"?")},e}(s.a.Component)},172:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB5VTbcYJAFF0Y1F9KIBWE/PoKdGAH0oGxAmMHUkG0g1gBGV+/JhWEEvbX0dGcQxYGGRR8/GRyZvRedu+eu/exV4i/Dk1cifl87ui63j0cDpamaRJL00ajMY73gyAwEwer1aq32WymruuGZcgXi8UbhJezFe73+z4cP0N3ms3mk6YOrCHM7XbrFjlZLpcD3Pr1nA325W63c6FKXa3Z+FmVSiUAgX3qIMMuIieQstAwjKBWq9mxA6mkBYI1UwAyK3sQh2xRAqwL0tSv1+vvulqYZGw8RPNNRyymuBx+XHCDf8jXCIRdqGbWEcL14Ij6p7gCUQQgH4BoVGBrq18hVNtGMJR0mDdxJ4AriTYusi/uCKT82AEexAgPZCLuAz5YeeSAaLfbHkIbQg3FDcBFx+nvZBax7/nQ4MREkUxxHUJk4yG9kETAEQHy6Q3kgqMmu6anP1qt1otK08Xgubw5ljuumS6MBQ9qr0xEbBDWMG9PzyE3UYsOiLtlyHFz/xQ5oc1msw4kC8sB9YjbOCWJJeyGbPFzdlGKMKLZoj1RYhSQGMLn/Er3+1kHMZj7arXqIAobt3uMDH7nigTxF0cAGuFD/Cv8APo11wscRiqnAAAAAElFTkSuQmCC"},173:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgBrVXdbeJAEF4bwwsP5xKcDghvCNDZFVw6iK8DrgJMBegqOKeDdGCfAPEYOojTgV+QkPi77+PG1sryOiTkk2zP7Hi/mZ3dnbGUhsVi4du2/Xg+n32onvoAMCe3LOt5v9/PgiDIinGrEFar1RQ/ReoLAEfRcDiclQ4q5CnkmeM4mfoADoeDh3khM6A7sZIk8drt9isHSTwejyN1A5DmCORT4QsckE/FFn+WfLlczvGZSNQR9O/QL/tpQ3gQb09NJFipu16vPT6VceoT4YjkOxOz7+DlUup2u68GYq/T6cxPp5N/PB5diZifuDgx0FOSgfg3DdiPDJmhI89WzVH3sNkv+PEBy3cr5hAkLzggvdFoFLRarTukeFLlsBvIPZAnQrzhhoHI4kMZYxlXDznhv4PBIKvjMTrg5gt5hlQEiC4tbJQxdk/HdMIUmniaUhTyhQh/Is951cgx2H7JPz4PwdUO5GSU0SoDNJv7DbjawVfC5CCX51IATZN1W7/ff7vageQ3pYyNntfll2Ow/RE1VgYYU4TLwg3kKno873q0lDGWQGSBy3nhTDyOycAbiksU8JyTCNEmcoNLkByBBHr9v3oFBArXhucdZeKpSszmAvJ7kG+aOLiCjBFut9s7fN/qVqL+34mwKHS73S6vuxslqeN4IuYOovuLsupJDU9VA0zloApwPYr4bEOJRfHZ2dSNEI6QMjf/0jL1LgTE7A2faZnC4VMvumPZ9CtOboLeei3dwBqEuk5HP2rq/3vIMCflidPr1z+y+0/QUDaYMgAAAABJRU5ErkJggg=="},174:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgB7VXbbYMwFL224LvZIIyQfgNqvEG7QTtB6QZhgnaDkAnaDUzF47sj0A3oN68et4lEXSIi8E+kHMnCOr6+B47vNYyAJEnWjLGVmldV9SaEKMgQWJ7nj23bvvS4EmLCdd0PMgCO5IHGLbqu25AhcJVwgL8igwL/rIBFOzIEjkO9g027vVCB8QT/IzoXMJqJLMtWTdP8lDisLXzfj/8IpGkq8Vz3SVRRiMCNmqNHXrHxVl+v6zqybXur7wUKxIcHmzmNAMm+dA4JlkguB5IrONizxYsHJwkcwb1KNBLzLKV0LJoHVXnlXszRFy3LCqZ+gbLpwfO8awyBUhf0W+J6zM1UgajfK+pyRC+FA3HOJAEc4qfOoVTjgdDFZItOxUVgvgDnfEkzcDmDUVjq94gufNf4+DAZW++hVNe4Tn4DqYN3vX+1ImkAAAAASUVORK5CYII="},175:function(t,e,a){"use strict";var n=a(12),i=(a(0),a(163)),A=a.n(i),o=a(162),c=function(t){return Object(n.a)("div",{className:A.a.bottomLeftLink},Object(n.a)(o.a,{className:A.a.bottomLeftText,to:t.to},t.children))},r=function(t){return Object(n.a)("div",{className:A.a.bottomRightLink+" "+t.classname},Object(n.a)(o.a,{to:t.to},Object(n.a)("img",{src:t.iconpath,alt:""})))},s=a(172),u=a.n(s),l=a(173),h=a.n(l),m=a(174),g=a.n(m);e.a=function(t){return Object(n.a)("div",{className:A.a.footer+" "+t.classname},Object(n.a)(c,{to:"/"},"General Futuristics"),Object(n.a)(r,{to:"/twitter/",iconpath:u.a,classname:A.a.twitter}),Object(n.a)(r,{to:"/instagram/",iconpath:h.a,classname:A.a.instagram}),Object(n.a)(r,{to:"/linkedin/",iconpath:g.a,classname:A.a.linkedin}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-fc6865e33a387cd9b840.js.map