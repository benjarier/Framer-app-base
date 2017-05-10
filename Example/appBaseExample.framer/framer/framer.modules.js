require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"appBase":[function(require,module,exports){
var appBase;

exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvYXBwQmFzZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby5cbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXVxuXG5leHBvcnRzLmFwcEJhc2UgPSBjbGFzcyBhcHBCYXNlXG5cdGNvbnN0cnVjdG9yOiAoQGxheWVycywgQGhlYWRlciwgQG1lbnUpIC0+XG5cdFx0aWYgQGxheWVycy5sZW5ndGggIT0gQG1lbnUuY2hpbGRyZW4ubGVuZ3RoXG5cdFx0XHRwcmludCBcIk11c3QgaGF2ZSB0aGUgc2FtZSBzaXplIG9mIGxheWVycyBhbmQgbWVudVwiXG5cdFx0IyBDdXN0b20gdHJhbnNpdGlvblxuXHRcdHRyYW5zaXRpb25MZWZ0ID0gKG5hdiwgbGF5ZXJBLCBsYXllckIsIG92ZXJsYXkpIC0+XG5cdFx0XHR0cmFuc2l0aW9uID1cblx0XHRcdFx0bGF5ZXJBOlxuXHRcdFx0XHRcdHNob3c6XG5cdFx0XHRcdFx0XHR4OiAwXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0aGlkZTpcblx0XHRcdFx0XHRcdHg6IC0xMDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuMVxuXHRcdFx0XHRsYXllckI6XG5cdFx0XHRcdFx0c2hvdzpcblx0XHRcdFx0XHRcdHg6IDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuM1xuXHRcdFx0XHRcdGhpZGU6XG5cdFx0XHRcdFx0XHR4OiAxMDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblxuXHRcdHRyYW5zaXRpb25SaWdodCA9IChuYXYsIGxheWVyQSwgbGF5ZXJCLCBvdmVybGF5KSAtPlxuXHRcdFx0dHJhbnNpdGlvbiA9XG5cdFx0XHRcdGxheWVyQTpcblx0XHRcdFx0XHRzaG93OlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdGhpZGU6XG5cdFx0XHRcdFx0XHR4OiAxMDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuMVxuXHRcdFx0XHRsYXllckI6XG5cdFx0XHRcdFx0c2hvdzpcblx0XHRcdFx0XHRcdHg6IDBcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuM1xuXHRcdFx0XHRcdGhpZGU6XG5cdFx0XHRcdFx0XHR4OiAtMTAwXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0IyBDcmVhdGUgRmxvd0NvbXBvbmVudFxuXHRcdGZsb3cgPSBuZXcgRmxvd0NvbXBvbmVudFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIlxuXHRcdGZsb3cuaGVhZGVyID0gQGhlYWRlclxuXHRcdGZsb3cuZm9vdGVyID0gQG1lbnVcblx0XHRmbG93LnNob3dOZXh0KEBsYXllcnNbMF0pXG5cblxuXHRcdCMgQ3JlYXRlIE1lbnVcblx0XHRtZW51SW5kZXggPSAwXG5cdFx0bWVudVByZXZpb3VzID0gMVxuXHRcdGZvciBuYW1lLCBsYXllciBvZiBAbWVudS5jaGlsZHJlblxuXHRcdFx0bGF5ZXIubUluZGV4ID0gbWVudUluZGV4XG5cdFx0XHRsYXllci5zYXR1cmF0ZSA9IDBcblx0XHRcdGxheWVyLnN0YXRlcy5vbiA9XG5cdFx0XHRcdHNhdHVyYXRlOiAxMDBcblx0XHRcdFx0YW5pbWF0aW9uT3B0aW9uczpcblx0XHRcdFx0XHR0aW1lOiAwLjdcblx0XHRcdGxheWVyLm9uVGFwIC0+XG5cdFx0XHRcdHN3aXRjaE1lbnUodGhpcy5tSW5kZXgpXG5cdFx0XHRtZW51SW5kZXgrK1xuXG5cdFx0c3dpdGNoTWVudSA9IChpKSA9PlxuXHRcdFx0aWYoaSAhPSBtZW51UHJldmlvdXMpXG5cdFx0XHRcdEBtZW51LmNoaWxkcmVuW21lbnVQcmV2aW91c10uc3RhdGVDeWNsZShcImRlZmF1bHRcIilcblx0XHRcdFx0QG1lbnUuY2hpbGRyZW5baV0uc3RhdGVDeWNsZSgpXG5cdFx0XHRcdGlmIGkgPiBtZW51UHJldmlvdXNcblx0XHRcdFx0XHRmbG93LnRyYW5zaXRpb24oQGxheWVyc1tpXSwgdHJhbnNpdGlvbkxlZnQpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmbG93LnRyYW5zaXRpb24oQGxheWVyc1tpXSwgdHJhbnNpdGlvblJpZ2h0KVxuXHRcdFx0XHRtZW51UHJldmlvdXMgPSBpXG5cblx0XHRzd2l0Y2hNZW51KDApXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBRElBLElBQUE7O0FBQUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7QUFFbEIsT0FBTyxDQUFDLE9BQVIsR0FBd0I7RUFDVixpQkFBQyxNQUFELEVBQVUsTUFBVixFQUFtQixJQUFuQjtBQUNaLFFBQUE7SUFEYSxJQUFDLENBQUEsU0FBRDtJQUFTLElBQUMsQ0FBQSxTQUFEO0lBQVMsSUFBQyxDQUFBLE9BQUQ7SUFDL0IsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsSUFBQyxDQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBcEM7TUFDQyxLQUFBLENBQU0sNENBQU4sRUFERDs7SUFHQSxjQUFBLEdBQWlCLFNBQUMsR0FBRCxFQUFNLE1BQU4sRUFBYyxNQUFkLEVBQXNCLE9BQXRCO0FBQ2hCLFVBQUE7YUFBQSxVQUFBLEdBQ0M7UUFBQSxNQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQ0M7WUFBQSxDQUFBLEVBQUcsQ0FBSDtZQUNBLE9BQUEsRUFBUyxDQURUO1dBREQ7VUFHQSxJQUFBLEVBQ0M7WUFBQSxDQUFBLEVBQUcsQ0FBQyxHQUFKO1lBQ0EsT0FBQSxFQUFTLENBRFQ7WUFFQSxPQUFBLEVBQ0M7Y0FBQSxJQUFBLEVBQU0sR0FBTjthQUhEO1dBSkQ7U0FERDtRQVNBLE1BQUEsRUFDQztVQUFBLElBQUEsRUFDQztZQUFB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
