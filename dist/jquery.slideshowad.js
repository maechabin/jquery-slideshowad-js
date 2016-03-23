/**
* slideShowAd
+ @version v1.0.7
* @author Takanori Maeda (@maechabin)
* @license MIT license
*/
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj},jQuery="undefined"!=typeof window?window.$:"undefined"!=typeof global?global.$:null;!function(factory){"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=factory("undefined"!=typeof window?window.$:"undefined"!=typeof global?global.$:null,window,document):factory(jQuery,window,document)}(function($,window,document,undefined){var SlideShowAd=function(){function SlideShowAd(element,options){_classCallCheck(this,SlideShowAd),this.element=element,this.$element=$(element),this.linkNumber=1,this.i=2,this.setTimer="",this.displayImgFlag="div1",this.div1=$("<div>"),this.div2=$("<div>"),this.div3=$("<div>").attr("class","cb-slideshow"),this.link="",this.conf={},this.options=options,this.defaults={ad:[],width:"",height:"",zindex:999,duration:1e3,interval:5e3}}return _createClass(SlideShowAd,[{key:"animateImg",value:function(div){var d1="div1"===div?"div2":"div1",d2="div1"===div?"div1":"div2",elm=$(".cb-slideshow"),_this=this;_this.link=this.conf.ad[_this.linkNumber].url,elm.attr("data",_this.link),_this[d2].animate({opacity:0},_this.conf.duration,function(){_this[d2].css({"z-index":0,"background-image":"url("+_this.conf.ad[_this.i].img+")"}),_this.linkNumber++,_this.i++}),_this[d1].css({"z-index":1}).animate({opacity:1},_this.conf.duration),_this.displayImgFlag=d1}},{key:"changeImg",value:function(){this.linkNumber>=this.conf.ad.length&&(this.linkNumber=0),this.i>=this.conf.ad.length&&(this.i=0),this.animateImg(this.displayImgFlag)}},{key:"makeBg",value:function(){var divStyle={"background-size":"contain","background-repeat":"no-repeat",position:"absolute",top:0,left:0,width:this.conf.width,height:this.conf.height},div1Style={"z-index":1,opacity:1,"background-image":"url("+this.conf.ad[0].img+")"},div2Style={"z-index":0,opacity:0,"background-image":"url("+this.conf.ad[1].img+")"},div3Style={"z-index":this.conf.zindex,position:"relative",display:"inline-block",width:this.conf.width,height:this.conf.height,cursor:"pointer"};this.link=this.conf.ad[0].url,this.div1.css($.extend({},divStyle,div1Style)),this.div2.css($.extend({},divStyle,div2Style)),this.div3.append(this.div1,this.div2).css(div3Style).attr("data",this.link),this.$element.after(this.div3)}},{key:"preloadImg",value:function(){this.conf.ad.forEach(function(obj){var imgTag=document.createElement("img");imgTag.src=obj.img,imgTag.src=obj.impimg})}},{key:"getAd",value:function(){var _this=this;return _this.$element.find("a").each(function(){var $this=$(this),adObj={},img=$this.find("img").eq(0).attr("src")||"",url=$this.attr("href")||"",impimg=$this.children().eq(0).attr("src")||"";adObj={img:img,url:url,impimg:impimg},_this.defaults.ad.push(adObj)}),_this.ad}},{key:"getImgSize",value:function(){var _this=this,imgSize={},img=_this.$element.find("a").eq(0).find("img").eq(0);img.each(function(){var $this=$(this);if($this.attr("width")&&$this.attr("height"))_this.defaults.width=$this.attr("width"),_this.defaults.height=$this.attr("height"),imgSize.width=_this.defaults.width,imgSize.height=_this.defaults.height;else{var imgObj=new Image;imgObj.src=$this.attr("src"),_this.defaults.width=imgObj.width,_this.defaults.height=imgObj.height,imgSize.width=_this.defaults.width,imgSize.height=_this.defaults.height}return imgSize})}},{key:"clickAd",value:function(){var _this2=this,elm=$(".cb-slideshow");elm.on("click",function(){window.open(_this2.link)})}},{key:"init",value:function(){var _this3=this;return this.getAd(),this.getImgSize(),this.conf=$.extend({},this.defaults,this.options),this.$element.css({display:"none",width:this.conf.width,height:this.conf.height}),this.makeBg(),this.conf.ad.length&&(this.setTimer=setInterval(function(){_this3.changeImg()},this.conf.interval)),this.clickAd(),this}}]),SlideShowAd}();$.extend($.fn,{slideShowAd:function(options){var _this4=this;return this.each(function(){new SlideShowAd(_this4,options).init()})}})})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
