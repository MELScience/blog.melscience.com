define(["jquery","utils"],function(t,e){var n;return n=function(){function n(e){var n,r,i;this._cid=""+this._namespace+o++,this.options=t.extend(!0,{},this.defaults||{},e),this.options.el?(n=this.options.el,delete this.options.el):n="<div>",this.ensureElement(n),(i=this._getElementNs())&&(r=this.el.data(i),r instanceof this.constructor&&r.destructor(),this.el.data(i,this)),this.init(e)}var o;return o=0,n.prototype.destructor=function(){var t;return this.el&&(this.undelegate(),(t=this._getElementNs())&&this.el.removeData(t)),this.destroy()},n.prototype._getElementNs=function(t){return null==t&&(t=this),(null!=t?t._namespace:void 0)||null},n.prototype._getDataSelector=function(t){var e,n,o;return null==t&&(t=this),n=null,(e=null!=t?t._namespace:void 0)&&(n="data-"+e),n&&(o=null!=t?t._sub_namespace:void 0)&&(n=n+'="'+o+'"'),n?"["+n+"]":null},n.prototype.$=function(t){return this.el.find(t)},n.prototype.ensureElement=function(e){return this.el&&this.undelegate(),e?(this.el=t(e),this.delegate()):void 0},n.prototype.init=function(){},n.prototype.destroy=function(){},n.prototype.delegate=function(){},n.prototype.undelegate=function(){},n.prototype.redirectPage=function(t){return window.location=t},n.prototype.reloadPage=function(){return window.location.reload()},n.prototype.i18n=function(){return e.i18n.apply(e,arguments)},n}(),n.create=function(e){var n;return(n=this.prototype._getDataSelector(this.prototype))?t(n,e).each(function(t){return function(e,n){var o;return new(o=t)({el:n})}}(this)):void 0},n.remove=function(e){var n;return(n=this.prototype._getDataSelector(this.prototype))?t(n,e).each(function(e){return function(n,o){var r,i;return o=t(o),(i=e.prototype._getElementNs(e.prototype))&&(r=o.data(i),r instanceof e)?r.destructor():void 0}}(this)):void 0},n});