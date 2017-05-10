require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"appBase":[function(require,module,exports){
var appBase;

exports.appBase = appBase = (function() {
  function appBase(layers, header, menu) {
    var flow, layer, menuIndex, menuPrevious, name, ref, switchMenu, transitionLeft, transitionRight;
    this.layers = layers;
    this.header = header;
    this.menu = menu;
    if (this.layers.length !== this.menu.children.length) {
      print("Must have the same size of layers and menu");
    }
    transitionLeft = function(nav, layerA, layerB, overlay) {
      var transition;
      return transition = {
        layerA: {
          show: {
            x: 0,
            opacity: 1
          },
          hide: {
            x: -100,
            opacity: 0,
            options: {
              time: 0.1
            }
          }
        },
        layerB: {
          show: {
            x: 0,
            opacity: 1,
            options: {
              time: 0.3
            }
          },
          hide: {
            x: 100,
            opacity: 0
          }
        }
      };
    };
    transitionRight = function(nav, layerA, layerB, overlay) {
      var transition;
      return transition = {
        layerA: {
          show: {
            x: 0,
            opacity: 1
          },
          hide: {
            x: 100,
            opacity: 0,
            options: {
              time: 0.1
            }
          }
        },
        layerB: {
          show: {
            x: 0,
            opacity: 1,
            options: {
              time: 0.3
            }
          },
          hide: {
            x: -100,
            opacity: 0
          }
        }
      };
    };
    flow = new FlowComponent({
      backgroundColor: "#ffffff"
    });
    flow.header = this.header;
    flow.footer = this.menu;
    flow.showNext(this.layers[0]);
    menuIndex = 0;
    menuPrevious = 1;
    ref = this.menu.children;
    for (name in ref) {
      layer = ref[name];
      layer.mIndex = menuIndex;
      layer.saturate = 0;
      layer.states.on = {
        saturate: 100,
        animationOptions: {
          time: 0.7
        }
      };
      layer.onTap(function() {
        return switchMenu(this.mIndex);
      });
      menuIndex++;
    }
    switchMenu = (function(_this) {
      return function(i) {
        if (i !== menuPrevious) {
          _this.menu.children[menuPrevious].stateCycle("default");
          _this.menu.children[i].stateCycle();
          if (i > menuPrevious) {
            flow.transition(_this.layers[i], transitionLeft);
          } else {
            flow.transition(_this.layers[i], transitionRight);
          }
          return menuPrevious = i;
        }
      };
    })(this);
    switchMenu(0);
  }

  return appBase;

})();


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL0JlbmphbWluL2ZyYW1lci1hcHAtYmFzZS9FeGFtcGxlL2FwcEJhc2VFeGFtcGxlLmZyYW1lci9tb2R1bGVzL2FwcEJhc2UuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLmFwcEJhc2UgPSBjbGFzcyBhcHBCYXNlXG5cdGNvbnN0cnVjdG9yOiAoQGxheWVycywgQGhlYWRlciwgQG1lbnUpIC0+XG5cdFx0IyBDaGVjayBmb3IgdGhlIHJpZ2h0IG51bWJlciBvZiBzY3JlZW4gLyBtZW51IGl0ZW1zXG5cdFx0aWYgQGxheWVycy5sZW5ndGggIT0gQG1lbnUuY2hpbGRyZW4ubGVuZ3RoXG5cdFx0XHRwcmludCBcIk11c3QgaGF2ZSB0aGUgc2FtZSBzaXplIG9mIGxheWVycyBhbmQgbWVudVwiXG5cblx0XHQjIEN1c3RvbSB0cmFuc2l0aW9uXG5cdFx0dHJhbnNpdGlvbkxlZnQgPSAobmF2LCBsYXllckEsIGxheWVyQiwgb3ZlcmxheSkgLT5cblx0XHRcdHRyYW5zaXRpb24gPVxuXHRcdFx0XHRsYXllckE6XG5cdFx0XHRcdFx0c2hvdzpcblx0XHRcdFx0XHRcdHg6IDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0XHRoaWRlOlxuXHRcdFx0XHRcdFx0eDogLTEwMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdFx0dGltZTogMC4xXG5cdFx0XHRcdGxheWVyQjpcblx0XHRcdFx0XHRzaG93OlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdFx0dGltZTogMC4zXG5cdFx0XHRcdFx0aGlkZTpcblx0XHRcdFx0XHRcdHg6IDEwMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXG5cdFx0dHJhbnNpdGlvblJpZ2h0ID0gKG5hdiwgbGF5ZXJBLCBsYXllckIsIG92ZXJsYXkpIC0+XG5cdFx0XHR0cmFuc2l0aW9uID1cblx0XHRcdFx0bGF5ZXJBOlxuXHRcdFx0XHRcdHNob3c6XG5cdFx0XHRcdFx0XHR4OiAwXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0aGlkZTpcblx0XHRcdFx0XHRcdHg6IDEwMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdFx0dGltZTogMC4xXG5cdFx0XHRcdGxheWVyQjpcblx0XHRcdFx0XHRzaG93OlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdFx0dGltZTogMC4zXG5cdFx0XHRcdFx0aGlkZTpcblx0XHRcdFx0XHRcdHg6IC0xMDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblxuXHRcdCMgQ3JlYXRlIEZsb3dDb21wb25lbnRcblx0XHRmbG93ID0gbmV3IEZsb3dDb21wb25lbnRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCJcblx0XHRmbG93LmhlYWRlciA9IEBoZWFkZXJcblx0XHRmbG93LmZvb3RlciA9IEBtZW51XG5cdFx0Zmxvdy5zaG93TmV4dChAbGF5ZXJzWzBdKVxuXG5cblx0XHQjIENyZWF0ZSBNZW51XG5cdFx0bWVudUluZGV4ID0gMFxuXHRcdG1lbnVQcmV2aW91cyA9IDFcblx0XHRmb3IgbmFtZSwgbGF5ZXIgb2YgQG1lbnUuY2hpbGRyZW5cblx0XHRcdGxheWVyLm1JbmRleCA9IG1lbnVJbmRleFxuXHRcdFx0bGF5ZXIuc2F0dXJhdGUgPSAwXG5cdFx0XHRsYXllci5zdGF0ZXMub24gPVxuXHRcdFx0XHRzYXR1cmF0ZTogMTAwXG5cdFx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG5cdFx0XHRcdFx0dGltZTogMC43XG5cdFx0XHRsYXllci5vblRhcCAtPlxuXHRcdFx0XHRzd2l0Y2hNZW51KHRoaXMubUluZGV4KVxuXHRcdFx0bWVudUluZGV4KytcblxuXHRcdHN3aXRjaE1lbnUgPSAoaSkgPT5cblx0XHRcdGlmKGkgIT0gbWVudVByZXZpb3VzKVxuXHRcdFx0XHRAbWVudS5jaGlsZHJlblttZW51UHJldmlvdXNdLnN0YXRlQ3ljbGUoXCJkZWZhdWx0XCIpXG5cdFx0XHRcdEBtZW51LmNoaWxkcmVuW2ldLnN0YXRlQ3ljbGUoKVxuXHRcdFx0XHRpZiBpID4gbWVudVByZXZpb3VzXG5cdFx0XHRcdFx0Zmxvdy50cmFuc2l0aW9uKEBsYXllcnNbaV0sIHRyYW5zaXRpb25MZWZ0KVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Zmxvdy50cmFuc2l0aW9uKEBsYXllcnNbaV0sIHRyYW5zaXRpb25SaWdodClcblx0XHRcdFx0bWVudVByZXZpb3VzID0gaVxuXG5cdFx0c3dpdGNoTWVudSgwKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSki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
