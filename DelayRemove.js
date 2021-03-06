(function() {

  $.fn.delay_remove = function(options) {
    var _this = this;
    this.settings = $.extend({
      delay: 2000,
      speed: 'fast',
      callback: null
    }, options);
    return this.delay(this.settings.delay).slideUp(this.settings.speed, function() {
      _this.remove();
      if (_this.settings.callback != null) {
        return _this.settings.callback();
      }
    });
  };

}).call(this);
