window.tumi||(window.tumi={}),tumi.iScroll=function(t){return this instanceof arguments.callee?void this.init(t):new arguments.callee(t)},tumi.iScroll.prototype={constructor:tumi.iScroll,init:function(t){var o=this;return t.swipeDom&&"object"==typeof t.swipeDom&&(o.parentDom=t.swipeDom),!!o.parentDom&&(o.childDom=o.parentDom.children&&o.parentDom.children[0]?o.parentDom.children[0]:"",!!o.childDom&&(o.settings={},o.settings.swipeType=t.swipeType?t.swipeType:"y",o.settings.swipeDistance=t.swipeDistance>=0?t.swipeDistance:150,void o._scroll()))},setTranslate:function(t){this.currPostion=t,this._addTransition(),this._changeTranslate(this.currPostion)},_addTransition:function(){this.childDom.style.transition="all .2s ease",this.childDom.style.webkitTransition="all .2s ease"},_removeTransition:function(){this.childDom.style.transition="none",this.childDom.style.webkitTransition="none"},_changeTranslate:function(t){"y"==this.settings.swipeType?(this.childDom.style.transform="translateY("+t+"px)",this.childDom.style.webkitTransform="translateY("+t+"px)"):(this.childDom.style.transform="translateX("+t+"px)",this.childDom.style.webkitTransform="translateX("+t+"px)")},_scroll:function(){var t=this,o="y"==t.settings.swipeType,i=o?t.parentDom.offsetHeight:t.parentDom.offsetWidth,n=o?t.childDom.offsetHeight:t.childDom.offsetWidth;n<i&&(o?(t.childDom.style.height=i+"px",n=i):(t.childDom.style.width=i+"px",n=i));var s=t.settings.swipeDistance;t.maxPostion=0,t.minPostion=-(n-i),t.currPostion=0,t.startPostion=0,t.endPostion=0,t.movePostion=0,t.childDom.addEventListener("touchstart",function(i){t.startPostion=o?i.touches[0].clientY:i.touches[0].clientX},!1),t.childDom.addEventListener("touchmove",function(i){i.preventDefault(),t.endPostion=o?i.touches[0].clientY:i.touches[0].clientX,t.movePostion=t.startPostion-t.endPostion,t.currPostion-t.movePostion<t.maxPostion+s&&t.currPostion-t.movePostion>t.minPostion-s&&(t._removeTransition(),t._changeTranslate(t.currPostion-t.movePostion))},!1),window.addEventListener("touchend",function(o){console.log(123),t.currPostion-t.movePostion>t.maxPostion?(t.currPostion=t.maxPostion,t._addTransition(),t._changeTranslate(t.currPostion)):t.currPostion-t.movePostion<t.minPostion?(t.currPostion=t.minPostion,t._addTransition(),t._changeTranslate(t.currPostion)):t.currPostion=t.currPostion-t.movePostion,t._reset()},!1)},_reset:function(){var t=this;t.startPostion=0,t.endPostion=0,t.movePostion=0}};