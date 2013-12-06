var pubsub = (function() {
  var cache = {};

  return {
    pub: function(id) {
      var args = [].slice.call(arguments, 1);

      if (!cache[id]) cache[id] = [];

      for (var i = 0, il = cache[id].length; i < il, i++) {
        cache[id][i].apply(null, args);
      }
    },
    sub: function(id, fn) {
      if (!cache[id]) {
        cache[id] = [fn]
      } else {
        cache[id].push(fn);
      }
    }
  }
})();