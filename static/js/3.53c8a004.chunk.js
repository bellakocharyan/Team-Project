(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[3],{106:function(e,t,n){e.exports=n.p+"static/media/slide_1.67137dca.jpg"},107:function(e,t,n){e.exports=n.p+"static/media/slide_2.d2707581.jpg"},108:function(e,t,n){e.exports=n.p+"static/media/slide_3.0736f682.jpg"},109:function(e,t,n){"use strict";var a=n(23);t.__esModule=!0,t.default=void 0;var i=a(n(46));t.end=i.default;var r=a(n(41));t.properties=r.default;var s={end:i.default,properties:r.default};t.default=s},115:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n(3),c=n(9),l=n(5),o=n.n(l),d=n(30),u=n.n(d),h=n(109),v=n.n(h),p=n(31),f=n(28),m=Object(f.a)("carousel-caption",{Component:"div"}),x=Object(f.a)("carousel-item"),I=n(49);var S=n(47),b=n(6),E=function(e){return i.a.Children.toArray(e).filter(i.a.isValidElement).length},g=40,N={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=i.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<g||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===u()(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,i=n.activeIndex+1;if(i>E(t.props.children)-1){if(!a)return;i=0}t.select(i,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,i=n.activeIndex-1;if(i<0){if(!a)return;i=E(t.props.children)-1}t.select(i,e,"prev")}},t}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var a=E(e.children)-1,i=Math.max(0,Math.min(e.activeIndex,a));return{direction:0===i&&n>=a||n<=i?"next":"prev",previousActiveIndex:n,activeIndex:i}}return null},n.componentDidUpdate=function(e,t){var n=this,a=this.props,i=a.bsPrefix,r=a.slide,s=a.onSlideEnd;if(r&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var c,l,d=this.state,u=d.activeIndex,h=d.direction;"next"===h?(c=i+"-item-next",l=i+"-item-left"):"prev"===h&&(c=i+"-item-prev",l=i+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:c},(function(){var e=n.carousel.current.children[u];Object(S.a)(e),n.safeSetState({prevClasses:o()("active",l),currentClasses:o()(c,l)},(function(){return v.a.end(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),s&&s()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>E(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var a=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(a.timeout);var i=a.props,r=i.activeIndex,s=i.onSelect;e===r||a._isSliding||a.isUnmounted||s(e,n||(e<r?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,a=e.children,r=e.activeIndex,s=e.prevIcon,c=e.nextIcon,l=e.prevLabel,o=e.nextLabel,d=E(a);return[(n||0!==r)&&i.a.createElement(I.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},s,l&&i.a.createElement("span",{className:"sr-only"},l)),(n||r!==d-1)&&i.a.createElement(I.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},c,o&&i.a.createElement("span",{className:"sr-only"},o))]},n.renderIndicators=function(e,t){var n=this,a=this.props.bsPrefix,r=[];return function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,a){r.push(i.a.createElement("li",{key:a,className:a===t?"active":null,onClick:function(e){return n.to(a,e)}})," ")})),i.a.createElement("ol",{className:a+"-indicators"},r)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,c=e.bsPrefix,l=e.slide,d=e.fade,u=e.indicators,h=e.controls,v=e.wrap,p=e.touch,f=e.prevIcon,m=e.prevLabel,x=e.nextIcon,I=e.nextLabel,S=e.className,b=e.children,E=e.keyboard,g=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(s.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),N=this.state,_=N.activeIndex,y=N.previousActiveIndex,C=N.prevClasses,O=N.currentClasses;return i.a.createElement(n,Object(r.a)({onTouchStart:p?this.handleTouchStart:void 0,onTouchEnd:p?this.handleTouchEnd:void 0},g,{className:o()(S,c,l&&"slide",d&&c+"-fade"),onKeyDown:E?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),u&&this.renderIndicators(b,_),i.a.createElement("div",{className:c+"-inner",ref:this.carousel},function(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}(b,(function(e,t){var n=t===_,i=t===y;return Object(a.cloneElement)(e,{className:o()(e.props.className,c+"-item",n&&O,i&&C)})}))),h&&this.renderControls({wrap:v,children:b,activeIndex:_,prevIcon:f,prevLabel:m,nextIcon:x,nextLabel:I}))},t}(i.a.Component);_.defaultProps=N;var y=Object(b.a)(Object(p.a)(_,{activeIndex:"onSelect"}),"carousel");y.Caption=m,y.Item=x;var C=y,O=n(106),w=n.n(O),T=n(107),P=n.n(T),j=n(108),k=n.n(j);function L(){return i.a.createElement("div",null,i.a.createElement("div",{className:"carusel"},i.a.createElement(C,null,i.a.createElement(C.Item,null,i.a.createElement("img",{src:w.a,alt:"First slide"})),i.a.createElement(C.Item,null,i.a.createElement("img",{src:P.a,alt:"Second slide"})),i.a.createElement(C.Item,null,i.a.createElement("img",{src:k.a,alt:"Third slide"})))))}n.d(t,"default",(function(){return L}))}}]);
//# sourceMappingURL=3.53c8a004.chunk.js.map