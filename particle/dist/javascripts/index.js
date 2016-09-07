define(["exports"],function(t){"use strict";function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function t(t,i){for(var e=0;e<i.length;e++){var h=i[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}return function(i,e,h){return e&&t(i.prototype,e),h&&t(i,h),i}}(),h={width:document.body.offsetWidth,height:document.body.offsetHeight,imgSize:[512,512],backgroundColor:"#fff",filter:function(t,i,e,h){return!0},x:void 0,y:void 0,r:.5,cols:128,rows:128,mouseRange:60,recovery:.95},n=function(){function t(e,n){i(this,t),Object.assign(this,h,n),this.canvas=document.getElementById(e),this.canvas.style.backgroundColor=this.backgroundColor,this.cxt=this.canvas.getContext("2d"),this.particles=[],this.range=Math.pow(this.mouseRange,2),this.isAnimate=!0,this.init()}return e(t,[{key:"init",value:function(){this.setSize(),this.setImage(this.src)}},{key:"bindEvent",value:function(){this.canvas.addEventListener("mousemove",this.getMousePos.bind(this))}},{key:"getMousePos",value:function(t){this.mx=t.clientX-this.bounds.left,this.my=t.clientY-this.bounds.top}},{key:"setSize",value:function(){this.canvas.width=this.width,this.canvas.height=this.height}},{key:"setImage",value:function(t){var i=this;this.img=new Image,this.img.onload=function(){i.imgSize?(i.img_width=i.imgSize[0],i.img_height=i.imgSize[1],i.x=i.x||(i.width-i.img_width)/2,i.y=i.y||(i.height-i.img_height)/2,i.cxt.drawImage(i.img,i.x,i.y,i.img_width,i.img_height)):(i.img_width=i.img.width,i.img_height=i.img.height,i.x=i.x||(i.width-i.img_width)/2,i.y=i.y||(i.height-i.img_height)/2,i.cxt.drawImage(i.img,i.x,i.y)),i.getParticle(),i.bounds=i.canvas.getBoundingClientRect(),i.bindEvent()},this.img.src=t}},{key:"getParticle",value:function(){for(var t=this.getImageData(),i=parseInt(this.img_width/this.cols),e=parseInt(this.img_height/this.rows),h=0,n=1;n<=this.cols;n++)for(var s=1;s<=this.rows;s++)if(h=s*e*this.img_width+n*i,t[h]&&this.filter&&this.filter.apply(this,t[h])){var a=this.x+n*i+5*(Math.random()-.5),o=this.y+s*e+5*(Math.random()-.5),r={x:a,y:o,ox:a,oy:o,vx:0,vy:0,color:t[h].join(",")};this.particles.push(r)}this.start()}},{key:"getImageData",value:function(){var t=this.cxt.getImageData(this.x,this.y,this.img_width,this.img_height),i=t.data,e=t.data.length,h=[];t.width!==this.img_width&&(this.img_width=t.width),t.height!==this.img_height&&(this.img_height=t.height);for(var n=0;n<e/4;n++)h.push([i[4*n],i[4*n+1],i[4*n+2],i[4*n+3]]);return h}},{key:"start",value:function(){var t=this;this.isAnimate=!0;var i=function e(){return!!t.isAnimate&&(t.render(),t.update(),void requestAnimationFrame(e))};requestAnimationFrame(i)}},{key:"stop",value:function(){this.isAnimate=!1}},{key:"render",value:function(){var t=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.particles,function(i){t.cxt.fillStyle="rgba("+i.color+")",t.cxt.beginPath(),t.cxt.arc(i.x,i.y,t.r,0,2*Math.PI,!0),t.cxt.closePath(),t.cxt.fill()})}},{key:"update",value:function(){var t=this,i=null,e=void 0,h=void 0,n=void 0,s=void 0,a=void 0;Array.from(this.particles,function(o){i=o,e=t.mx-i.x,h=t.my-i.y,n=e*e+h*h,a=-t.range/n,n<t.range&&(s=Math.atan2(h,e),i.vx+=a*Math.cos(s),i.vy+=a*Math.sin(s)),i.vx*=t.recovery,i.vy*=t.recovery,i.x+=i.vx+.25*(i.ox-i.x),i.y+=i.vy+.25*(i.oy-i.y)})}}]),t}();t["default"]=n});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImV4cG9ydHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmF1bHQiLCJ3aWR0aCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW1nU2l6ZSIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsInIiLCJnIiwiYiIsImEiLCJ4IiwidW5kZWZpbmVkIiwieSIsImNvbHMiLCJyb3dzIiwibW91c2VSYW5nZSIsInJlY292ZXJ5IiwiUGFydGljbGUiLCJpZCIsIm9wdGlvbiIsInRoaXMiLCJhc3NpZ24iLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiY3h0IiwiZ2V0Q29udGV4dCIsInBhcnRpY2xlcyIsInJhbmdlIiwiTWF0aCIsInBvdyIsImlzQW5pbWF0ZSIsImluaXQiLCJzZXRTaXplIiwic2V0SW1hZ2UiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0TW91c2VQb3MiLCJiaW5kIiwiZSIsIm14IiwiY2xpZW50WCIsImJvdW5kcyIsImxlZnQiLCJteSIsImNsaWVudFkiLCJ0b3AiLCJfdGhpcyIsImltZyIsIkltYWdlIiwib25sb2FkIiwiaW1nX3dpZHRoIiwiaW1nX2hlaWdodCIsImRyYXdJbWFnZSIsImdldFBhcnRpY2xlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYmluZEV2ZW50IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwic193aWR0aCIsInBhcnNlSW50Iiwic19oZWlnaHQiLCJwb3MiLCJqIiwiYXBwbHkiLCJyYW5kb20iLCJwYXJ0aWNsZSIsIm94Iiwib3kiLCJ2eCIsInZ5IiwiY29sb3IiLCJqb2luIiwicHVzaCIsInN0YXJ0IiwiZGF0YSIsImxlbiIsImFyciIsIl90aGlzMiIsInN0ZXAiLCJyZW5kZXIiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpczMiLCJjbGVhclJlY3QiLCJBcnJheSIsImZyb20iLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJfdGhpczQiLCJwIiwiZHgiLCJkeSIsImQiLCJ0IiwiZiIsImF0YW4yIiwiY29zIiwic2luIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxXQUFZLFNBQVVDLEdBQTlCLFlBT0MsU0FBU0MsR0FBZ0JDLEVBQVVDLEdBQ2xDLEtBQU1ELFlBQW9CQyxJQUN6QixLQUFNLElBQUlDLFdBQVUscUNBTnRCQyxPQUFPQyxlQUFlTixFQUFTLGNBQzlCTyxPQUFPLEdBU1IsSUFBSUMsR0FBZSxXQUNsQixRQUFTQyxHQUFpQkMsRUFBUUMsR0FDakMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FDdEMsR0FBSUUsR0FBYUgsRUFBTUMsRUFDdkJFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFDakRELEVBQVdFLGNBQWUsRUFDdEIsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUNqRFosT0FBT0MsZUFBZUksRUFBUUksRUFBV0ksSUFBS0osSUFJaEQsTUFBTyxVQUFVWCxFQUFhZ0IsRUFBWUMsR0FHekMsTUFGSUQsSUFBWVYsRUFBaUJOLEVBQVlrQixVQUFXRixHQUNwREMsR0FBYVgsRUFBaUJOLEVBQWFpQixHQUN4Q2pCLE1BekJKbUIsR0FDTEMsTUFBT0MsU0FBU0MsS0FBS0MsWUFDckJDLE9BQVFILFNBQVNDLEtBQUtHLGFBQ3RCQyxTQUFV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QUFLN0UsU0FDYjhFLEVBQUV4QixJQUFNdUIsRUFBSzdFLFNBQ2I4RSxFQUFFcEYsR0FBS29GLEVBQUV6QixHQUFvQixLQUFkeUIsRUFBRTNCLEdBQUsyQixFQUFFcEYsR0FDeEJvRixFQUFFbEYsR0FBS2tGLEVBQUV4QixHQUFvQixLQUFkd0IsRUFBRTFCLEdBQUswQixFQUFFbEYsU0F3RWxCSyxJQUdSM0MsR0FBQUEsV0E5TW9CMkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IF9kZWZhdWx0ID0ge1xuXHR3aWR0aDogZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgLy9jYW52YXPnmoTlrr3luqbvvIzpu5jorqTnqpflj6Plrr3luqZcblx0aGVpZ2h0OiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgLy9jYW52YXPnmoTpq5jluqbvvIzpu5jorqTnqpflj6Ppq5jluqZcblx0aW1nU2l6ZTogWzUxMiwgNTEyXSwgLy/lm77niYfnmoTlpKflsI8gW3dpZHRoLCBoZWlnaHRd77yM6buY6K6k5Y6f5aeL5aSn5bCPXG5cdGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuXHRmaWx0ZXI6IGZ1bmN0aW9uKHIsIGcsIGIsIGEpIHsgIC8v6L+H5ruk5pa55rOVXG5cdFx0cmV0dXJuIHRydWVcblx0fSxcblx0eDogdW5kZWZpbmVkLCAvL+WbvuWDj+WcqGNhbnZhc+S4reeahHjlnZDmoIfvvIzpu5jorqTlsYXkuK1cblx0eTogdW5kZWZpbmVkLCAvL+WbvuWDj+WcqGNhbnZhc+S4reeahHnlnZDmoIfvvIzpu5jorqTlsYXkuK1cblx0cjogMC41LCAgLy/nspLlrZDljYrlvoRcblx0Y29sczogMTI4LCAvL+WbvuWDj+WIhuS4uuWHoOWIl++8jOaoquWdkOagh+e7huW6plxuXHRyb3dzOiAxMjgsIC8v5Zu+5YOP5YiG5Li65Yeg6KGM77yM57q15Z2Q5qCH57uG5bqmXG5cdG1vdXNlUmFuZ2U6IDYwLCAgLy/lvbHlk43ojIPlm7Rcblx0cmVjb3Zlcnk6IDAuOTUgIC8v5oGi5aSN6YCf5bqm77yM6LaK5bCP6LaK5b+r77yMMeaXtuS4jeaBouWkjVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG5cdGNvbnN0cnVjdG9yKGlkLCBvcHRpb24pIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIF9kZWZhdWx0LCBvcHRpb24pXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblx0XHR0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvclxuXHRcdHRoaXMuY3h0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXHRcdHRoaXMucGFydGljbGVzID0gW11cblx0XHR0aGlzLnJhbmdlID0gTWF0aC5wb3codGhpcy5tb3VzZVJhbmdlLCAyKVxuXHRcdHRoaXMuaXNBbmltYXRlID0gdHJ1ZVxuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblx0aW5pdCgpIHtcblx0XHR0aGlzLnNldFNpemUoKVxuXHRcdHRoaXMuc2V0SW1hZ2UodGhpcy5zcmMpXG5cdH1cblx0YmluZEV2ZW50KCkge1xuXHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZ2V0TW91c2VQb3MuYmluZCh0aGlzKSlcblx0fVxuXHRnZXRNb3VzZVBvcyhlKSB7XG5cdCAgICB0aGlzLm14ID0gZS5jbGllbnRYIC0gdGhpcy5ib3VuZHMubGVmdDtcblx0XHR0aGlzLm15ID0gZS5jbGllbnRZIC0gdGhpcy5ib3VuZHMudG9wO1xuXHR9XG5cdHNldFNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoXG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHRcblx0fVxuXHRzZXRJbWFnZShzcmMpIHtcblx0XHR0aGlzLmltZyA9IG5ldyBJbWFnZSgpXG5cdFx0dGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLmltZ1NpemUpIHtcblx0XHRcdFx0dGhpcy5pbWdfd2lkdGggPSB0aGlzLmltZy53aWR0aFxuXHRcdFx0XHR0aGlzLmltZ19oZWlnaHQgPSB0aGlzLmltZy5oZWlnaHRcblx0XHRcdFx0dGhpcy54ID0gdGhpcy54IHx8ICgodGhpcy53aWR0aCAtIHRoaXMuaW1nX3dpZHRoKSAvIDIpXG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueSB8fCAoKHRoaXMuaGVpZ2h0IC0gdGhpcy5pbWdfaGVpZ2h0KSAvIDIpXG5cdFx0XHRcdHRoaXMuY3h0LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnkpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmltZ193aWR0aCA9IHRoaXMuaW1nU2l6ZVswXVxuXHRcdFx0XHR0aGlzLmltZ19oZWlnaHQgPSB0aGlzLmltZ1NpemVbMV1cblx0XHRcdFx0dGhpcy54ID0gdGhpcy54IHx8ICgodGhpcy53aWR0aCAtIHRoaXMuaW1nX3dpZHRoKSAvIDIpXG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueSB8fCAoKHRoaXMuaGVpZ2h0IC0gdGhpcy5pbWdfaGVpZ2h0KSAvIDIpXG5cdFx0XHRcdHRoaXMuY3h0LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaW1nX3dpZHRoLCB0aGlzLmltZ19oZWlnaHQpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmdldFBhcnRpY2xlKClcblx0XHRcdHRoaXMuYm91bmRzID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHRcdHRoaXMuYmluZEV2ZW50KClcblx0XHR9XG5cdFx0dGhpcy5pbWcuc3JjID0gc3JjXG5cdH1cblx0Z2V0UGFydGljbGUoKSB7XG5cdFx0bGV0IGltYWdlRGF0YSA9IHRoaXMuZ2V0SW1hZ2VEYXRhKClcblx0XHRsZXQgc193aWR0aCA9IHBhcnNlSW50KCh0aGlzLmltZ193aWR0aCkgLyB0aGlzLmNvbHMpXG5cdFx0bGV0IHNfaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5pbWdfaGVpZ2h0IC8gdGhpcy5yb3dzKVxuXHRcdGxldCBwb3MgPSAwXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5jb2xzOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMucm93czsgaisrKSB7XG5cdFx0XHRcdHBvcyA9IChqICogc19oZWlnaHQpICogKHRoaXMuaW1nX3dpZHRoKSArIChpICogc193aWR0aClcblx0XHRcdFx0aWYgKGltYWdlRGF0YVtwb3NdICYmIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLmFwcGx5KHRoaXMsIGltYWdlRGF0YVtwb3NdKSkge1xuXHRcdFx0XHRcdGxldCB4ID0gdGhpcy54ICsgaSAqIHNfd2lkdGggKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1XG5cdFx0XHRcdFx0bGV0IHkgPSB0aGlzLnkgKyBqICogc19oZWlnaHQgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1XG5cdFx0XHRcdFx0bGV0IHBhcnRpY2xlID0ge1xuXHRcdFx0XHRcdFx0eDogeCxcblx0XHRcdFx0XHRcdHk6IHksXG5cdFx0XHRcdFx0XHRveDogeCxcblx0XHRcdFx0XHRcdG95OiB5LFxuXHRcdFx0XHRcdFx0dng6IDAsXG5cdFx0XHRcdFx0XHR2eTogMCxcblx0XHRcdFx0XHRcdGNvbG9yOiBpbWFnZURhdGFbcG9zXS5qb2luKCcsJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnN0YXJ0KClcblx0fVxuXHRnZXRJbWFnZURhdGEoKSB7XG5cdFx0bGV0IGltYWdlRGF0YSA9IHRoaXMuY3h0LmdldEltYWdlRGF0YSh0aGlzLngsIHRoaXMueSwgdGhpcy5pbWdfd2lkdGgsIHRoaXMuaW1nX2hlaWdodClcblx0XHRsZXQgZGF0YSA9IGltYWdlRGF0YS5kYXRhXG5cdFx0bGV0IGxlbiA9IGltYWdlRGF0YS5kYXRhLmxlbmd0aFxuXHRcdGxldCBhcnIgPSBbXVxuXHRcdC8qXG5cdFx0ICog6L+35LmL5LiN55u4562J77yfXG5cdFx0ICovXG5cdFx0aWYgKGltYWdlRGF0YS53aWR0aCAhPT0gdGhpcy5pbWdfd2lkdGgpIHRoaXMuaW1nX3dpZHRoID0gaW1hZ2VEYXRhLndpZHRoXG5cdFx0aWYgKGltYWdlRGF0YS5oZWlnaHQgIT09IHRoaXMuaW1nX2hlaWdodCkgdGhpcy5pbWdfaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC8gNDsgaSsrKSB7XG5cdFx0XHRhcnIucHVzaChbZGF0YVtpICogNF0sIGRhdGFbaSAqIDQgKyAxXSwgZGF0YVtpICogNCArIDJdLCBkYXRhW2kgKiA0ICsgM11dKVxuXHRcdH1cblx0XHRyZXR1cm4gYXJyXG5cdH1cblx0c3RhcnQoKSB7XG5cdFx0dGhpcy5pc0FuaW1hdGUgPSB0cnVlXG5cdFx0Y29uc3Qgc3RlcCA9ICgpID0+IHtcblx0XHRcdGlmICghdGhpcy5pc0FuaW1hdGUpIHJldHVybiBmYWxzZVxuXHRcdFx0dGhpcy5yZW5kZXIoKVxuXHRcdFx0dGhpcy51cGRhdGUoKVxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXHRcdH1cblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cdH1cblx0c3RvcCgpIHtcblx0XHR0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuY3h0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRBcnJheS5mcm9tKHRoaXMucGFydGljbGVzLCAocGFydGljbGUpID0+IHtcblx0XHRcdHRoaXMuY3h0LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyBwYXJ0aWNsZS5jb2xvciArICcpJ1xuXG5cdFx0XHR0aGlzLmN4dC5iZWdpblBhdGgoKVxuXHRcdFx0dGhpcy5jeHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHRoaXMuciwgMCwgMiAqIE1hdGguUEksIHRydWUpXG5cdFx0XHR0aGlzLmN4dC5jbG9zZVBhdGgoKVxuXG5cdFx0XHR0aGlzLmN4dC5maWxsKClcblx0XHR9KVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRsZXQgcCA9IG51bGwsXG5cdFx0XHRkeCwgZHksIGQsIHQsIGZcblx0XHRBcnJheS5mcm9tKHRoaXMucGFydGljbGVzLCAocGFydGljbGUpID0+IHtcblx0XHRcdHAgPSBwYXJ0aWNsZVxuXHRcdFx0ZHggPSB0aGlzLm14IC0gcC54XG5cdFx0XHRkeSA9IHRoaXMubXkgLSBwLnlcblx0XHRcdGQgPSBkeCAqIGR4ICsgZHkgKiBkeVxuXHRcdFx0ZiA9IC10aGlzLnJhbmdlIC8gZFxuXHRcdFx0aWYgKGQgPCB0aGlzLnJhbmdlKSB7XG5cdFx0XHRcdHQgPSBNYXRoLmF0YW4yKGR5LCBkeClcblx0XHRcdFx0cC52eCArPSBmICogTWF0aC5jb3ModClcblx0XHRcdFx0cC52eSArPSBmICogTWF0aC5zaW4odClcblx0XHRcdH1cblx0XHRcdHAudnggKj0gdGhpcy5yZWNvdmVyeVxuXHRcdFx0cC52eSAqPSB0aGlzLnJlY292ZXJ5XG5cdFx0XHRwLnggKz0gcC52eCArIChwLm94IC0gcC54KSAqIDAuMjVcblx0XHRcdHAueSArPSBwLnZ5ICsgKHAub3kgLSBwLnkpICogMC4yNVxuXHRcdH0pXG5cdH1cbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9