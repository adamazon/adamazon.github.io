/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.c3 = factory());
}(this, (function () { 'use strict';

var CLASS = {
    target: 'c3-target',
    chart: 'c3-chart',
    chartLine: 'c3-chart-line',
    chartLines: 'c3-chart-lines',
    chartBar: 'c3-chart-bar',
    chartBars: 'c3-chart-bars',
    chartText: 'c3-chart-text',
    chartTexts: 'c3-chart-texts',
    chartArc: 'c3-chart-arc',
    chartArcs: 'c3-chart-arcs',
    chartArcsTitle: 'c3-chart-arcs-title',
    chartArcsBackground: 'c3-chart-arcs-background',
    chartArcsGaugeUnit: 'c3-chart-arcs-gauge-unit',
    chartArcsGaugeMax: 'c3-chart-arcs-gauge-max',
    chartArcsGaugeMin: 'c3-chart-arcs-gauge-min',
    selectedCircle: 'c3-selected-circle',
    selectedCircles: 'c3-selected-circles',
    eventRect: 'c3-event-rect',
    eventRects: 'c3-event-rects',
    eventRectsSingle: 'c3-event-rects-single',
    eventRectsMultiple: 'c3-event-rects-multiple',
    zoomRect: 'c3-zoom-rect',
    brush: 'c3-brush',
    focused: 'c3-focused',
    defocused: 'c3-defocused',
    region: 'c3-region',
    regions: 'c3-regions',
    title: 'c3-title',
    tooltipContainer: 'c3-tooltip-container',
    tooltip: 'c3-tooltip',
    tooltipName: 'c3-tooltip-name',
    shape: 'c3-shape',
    shapes: 'c3-shapes',
    line: 'c3-line',
    lines: 'c3-lines',
    bar: 'c3-bar',
    bars: 'c3-bars',
    circle: 'c3-circle',
    circles: 'c3-circles',
    arc: 'c3-arc',
    arcs: 'c3-arcs',
    area: 'c3-area',
    areas: 'c3-areas',
    empty: 'c3-empty',
    text: 'c3-text',
    texts: 'c3-texts',
    gaugeValue: 'c3-gauge-value',
    grid: 'c3-grid',
    gridLines: 'c3-grid-lines',
    xgrid: 'c3-xgrid',
    xgrids: 'c3-xgrids',
    xgridLine: 'c3-xgrid-line',
    xgridLines: 'c3-xgrid-lines',
    xgridFocus: 'c3-xgrid-focus',
    ygrid: 'c3-ygrid',
    ygrids: 'c3-ygrids',
    ygridLine: 'c3-ygrid-line',
    ygridLines: 'c3-ygrid-lines',
    axis: 'c3-axis',
    axisX: 'c3-axis-x',
    axisXLabel: 'c3-axis-x-label',
    axisY: 'c3-axis-y',
    axisYLabel: 'c3-axis-y-label',
    axisY2: 'c3-axis-y2',
    axisY2Label: 'c3-axis-y2-label',
    legendBackground: 'c3-legend-background',
    legendItem: 'c3-legend-item',
    legendItemEvent: 'c3-legend-item-event',
    legendItemTile: 'c3-legend-item-tile',
    legendItemHidden: 'c3-legend-item-hidden',
    legendItemFocused: 'c3-legend-item-focused',
    dragarea: 'c3-dragarea',
    EXPANDED: '_expanded_',
    SELECTED: '_selected_',
    INCLUDED: '_included_'
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var isValue = function isValue(v) {
    return v || v === 0;
};
var isFunction = function isFunction(o) {
    return typeof o === 'function';
};
var isArray = function isArray(o) {
    return Array.isArray(o);
};
var isString = function isString(o) {
    return typeof o === 'string';
};
var isUndefined = function isUndefined(v) {
    return typeof v === 'undefined';
};
var isDefined = function isDefined(v) {
    return typeof v !== 'undefined';
};
var ceil10 = function ceil10(v) {
    return Math.ceil(v / 10) * 10;
};
var asHalfPixel = function asHalfPixel(n) {
    return Math.ceil(n) + 0.5;
};
var diffDomain = function diffDomain(d) {
    return d[1] - d[0];
};
var isEmpty = function isEmpty(o) {
    return typeof o === 'undefined' || o === null || isString(o) && o.length === 0 || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && Object.keys(o).length === 0;
};
var notEmpty = function notEmpty(o) {
    return !c3_chart_internal_fn.isEmpty(o);
};
var getOption = function getOption(options, key, defaultValue) {
    return isDefined(options[key]) ? options[key] : defaultValue;
};
var hasValue = function hasValue(dict, value) {
    var found = false;
    Object.keys(dict).forEach(function (key) {
        if (dict[key] === value) {
            found = true;
        }
    });
    return found;
};
var sanitise = function sanitise(str) {
    return typeof str === 'string' ? str.replace(/</g, '&lt;').replace(/>/g, '&gt;') : str;
};
var getPathBox = function getPathBox(path) {
    var box = path.getBoundingClientRect(),
        items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
        minX = items[0].x,
        minY = Math.min(items[0].y, items[1].y);
    return { x: minX, y: minY, width: box.width, height: box.height };
};

var c3_axis_fn;
var c3_axis_internal_fn;

function AxisInternal(component, params) {
    var internal = this;
    internal.component = component;
    internal.params = params || {};

    internal.d3 = component.d3;
    internal.scale = internal.d3.scale.linear();
    internal.range;
    internal.orient = "bottom";
    internal.innerTickSize = 6;
    internal.outerTickSize = this.params.withOuterTick ? 6 : 0;
    internal.tickPadding = 3;
    internal.tickValues = null;
    internal.tickFormat;
    internal.tickArguments;

    internal.tickOffset = 0;
    internal.tickCulling = true;
    internal.tickCentered;
    internal.tickTextCharSize;
    internal.tickTextRotate = internal.params.tickTextRotate;
    internal.tickLength;

    internal.axis = internal.generateAxis();
}
c3_axis_internal_fn = AxisInternal.prototype;

c3_axis_internal_fn.axisX = function (selection, x, tickOffset) {
    selection.attr("transform", function (d) {
        return "translate(" + Math.ceil(x(d) + tickOffset) + ", 0)";
    });
};
c3_axis_internal_fn.axisY = function (selection, y) {
    selection.attr("transform", function (d) {
        return "translate(0," + Math.ceil(y(d)) + ")";
    });
};
c3_axis_internal_fn.scaleExtent = function (domain) {
    var start = domain[0],
        stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
};
c3_axis_internal_fn.generateTicks = function (scale) {
    var internal = this;
    var i,
        domain,
        ticks = [];
    if (scale.ticks) {
        return scale.ticks.apply(scale, internal.tickArguments);
    }
    domain = scale.domain();
    for (i = Math.ceil(domain[0]); i < domain[1]; i++) {
        ticks.push(i);
    }
    if (ticks.length > 0 && ticks[0] > 0) {
        ticks.unshift(ticks[0] - (ticks[1] - ticks[0]));
    }
    return ticks;
};
c3_axis_internal_fn.copyScale = function () {
    var internal = this;
    var newScale = internal.scale.copy(),
        domain;
    if (internal.params.isCategory) {
        domain = internal.scale.domain();
        newScale.domain([domain[0], domain[1] - 1]);
    }
    return newScale;
};
c3_axis_internal_fn.textFormatted = function (v) {
    var internal = this,
        formatted = internal.tickFormat ? internal.tickFormat(v) : v;
    return typeof formatted !== 'undefined' ? formatted : '';
};
c3_axis_internal_fn.updateRange = function () {
    var internal = this;
    internal.range = internal.scale.rangeExtent ? internal.scale.rangeExtent() : internal.scaleExtent(internal.scale.range());
    return internal.range;
};
c3_axis_internal_fn.updateTickTextCharSize = function (tick) {
    var internal = this;
    if (internal.tickTextCharSize) {
        return internal.tickTextCharSize;
    }
    var size = {
        h: 11.5,
        w: 5.5
    };
    tick.select('text').text(function (d) {
        return internal.textFormatted(d);
    }).each(function (d) {
        var box = this.getBoundingClientRect(),
            text = internal.textFormatted(d),
            h = box.height,
            w = text ? box.width / text.length : undefined;
        if (h && w) {
            size.h = h;
            size.w = w;
        }
    }).text('');
    internal.tickTextCharSize = size;
    return size;
};
c3_axis_internal_fn.transitionise = function (selection) {
    return this.params.withoutTransition ? selection : this.d3.transition(selection);
};
c3_axis_internal_fn.isVertical = function () {
    return this.orient === 'left' || this.orient === 'right';
};
c3_axis_internal_fn.tspanData = function (d, i, ticks, scale) {
    var internal = this;
    var splitted = internal.params.tickMultiline ? internal.splitTickText(d, ticks, scale) : [].concat(internal.textFormatted(d));
    return splitted.map(function (s) {
        return { index: i, splitted: s, length: splitted.length };
    });
};
c3_axis_internal_fn.splitTickText = function (d, ticks, scale) {
    var internal = this,
        tickText = internal.textFormatted(d),
        maxWidth = internal.params.tickWidth,
        subtext,
        spaceIndex,
        textWidth,
        splitted = [];

    if (Object.prototype.toString.call(tickText) === "[object Array]") {
        return tickText;
    }

    if (!maxWidth || maxWidth <= 0) {
        maxWidth = internal.isVertical() ? 95 : internal.params.isCategory ? Math.ceil(scale(ticks[1]) - scale(ticks[0])) - 12 : 110;
    }

    function split(splitted, text) {
        spaceIndex = undefined;
        for (var i = 1; i < text.length; i++) {
            if (text.charAt(i) === ' ') {
                spaceIndex = i;
            }
            subtext = text.substr(0, i + 1);
            textWidth = internal.tickTextCharSize.w * subtext.length;
            // if text width gets over tick width, split by space index or crrent index
            if (maxWidth < textWidth) {
                return split(splitted.concat(text.substr(0, spaceIndex ? spaceIndex : i)), text.slice(spaceIndex ? spaceIndex + 1 : i));
            }
        }
        return splitted.concat(text);
    }

    return split(splitted, tickText + "");
};
c3_axis_internal_fn.updateTickLength = function () {
    var internal = this;
    internal.tickLength = Math.max(internal.innerTickSize, 0) + internal.tickPadding;
};
c3_axis_internal_fn.lineY2 = function (d) {
    var internal = this,
        tickPosition = internal.scale(d) + (internal.tickCentered ? 0 : internal.tickOffset);
    return internal.range[0] < tickPosition && tickPosition < internal.range[1] ? internal.innerTickSize : 0;
};
c3_axis_internal_fn.textY = function () {
    var internal = this,
        rotate = internal.tickTextRotate;
    return rotate ? 11.5 - 2.5 * (rotate / 15) * (rotate > 0 ? 1 : -1) : internal.tickLength;
};
c3_axis_internal_fn.textTransform = function () {
    var internal = this,
        rotate = internal.tickTextRotate;
    return rotate ? "rotate(" + rotate + ")" : "";
};
c3_axis_internal_fn.textTextAnchor = function () {
    var internal = this,
        rotate = internal.tickTextRotate;
    return rotate ? rotate > 0 ? "start" : "end" : "middle";
};
c3_axis_internal_fn.tspanDx = function () {
    var internal = this,
        rotate = internal.tickTextRotate;
    return rotate ? 8 * Math.sin(Math.PI * (rotate / 180)) : 0;
};
c3_axis_internal_fn.tspanDy = function (d, i) {
    var internal = this,
        dy = internal.tickTextCharSize.h;
    if (i === 0) {
        if (internal.isVertical()) {
            dy = -((d.length - 1) * (internal.tickTextCharSize.h / 2) - 3);
        } else {
            dy = ".71em";
        }
    }
    return dy;
};

c3_axis_internal_fn.generateAxis = function () {
    var internal = this,
        d3 = internal.d3,
        params = internal.params;
    function axis(g) {
        g.each(function () {
            var g = axis.g = d3.select(this);

            var scale0 = this.__chart__ || internal.scale,
                scale1 = this.__chart__ = internal.copyScale();

            var ticks = internal.tickValues ? internal.tickValues : internal.generateTicks(scale1),
                tick = g.selectAll(".tick").data(ticks, scale1),
                tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),

            // MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
            tickExit = tick.exit().remove(),
                tickUpdate = internal.transitionise(tick).style("opacity", 1),
                tickTransform,
                tickX,
                tickY;

            if (params.isCategory) {
                internal.tickOffset = Math.ceil((scale1(1) - scale1(0)) / 2);
                tickX = internal.tickCentered ? 0 : internal.tickOffset;
                tickY = internal.tickCentered ? internal.tickOffset : 0;
            } else {
                internal.tickOffset = tickX = 0;
            }

            tickEnter.append("line");
            tickEnter.append("text");

            internal.updateRange();
            internal.updateTickLength();
            internal.updateTickTextCharSize(g.select('.tick'));

            var lineUpdate = tickUpdate.select("line"),
                textUpdate = tickUpdate.select("text"),
                tspanUpdate = tick.select("text").selectAll('tspan').data(function (d, i) {
                return internal.tspanData(d, i, ticks, scale1);
            });

            tspanUpdate.enter().append('tspan');
            tspanUpdate.exit().remove();
            tspanUpdate.text(function (d) {
                return d.splitted;
            });

            var path = g.selectAll(".domain").data([0]),
                pathUpdate = (path.enter().append("path").attr("class", "domain"), internal.transitionise(path));

            // TODO: each attr should be one function and change its behavior by internal.orient, probably
            switch (internal.orient) {
                case "bottom":
                    {
                        tickTransform = internal.axisX;
                        lineUpdate.attr("x1", tickX).attr("x2", tickX).attr("y2", function (d, i) {
                            return internal.lineY2(d, i);
                        });
                        textUpdate.attr("x", 0).attr("y", function (d, i) {
                            return internal.textY(d, i);
                        }).attr("transform", function (d, i) {
                            return internal.textTransform(d, i);
                        }).style("text-anchor", function (d, i) {
                            return internal.textTextAnchor(d, i);
                        });
                        tspanUpdate.attr('x', 0).attr("dy", function (d, i) {
                            return internal.tspanDy(d, i);
                        }).attr('dx', function (d, i) {
                            return internal.tspanDx(d, i);
                        });
                        pathUpdate.attr("d", "M" + internal.range[0] + "," + internal.outerTickSize + "V0H" + internal.range[1] + "V" + internal.outerTickSize);
                        break;
                    }
                case "top":
                    {
                        // TODO: rotated tick text
                        tickTransform = internal.axisX;
                        lineUpdate.attr("x2", 0).attr("y2", -internal.innerTickSize);
                        textUpdate.attr("x", 0).attr("y", -internal.tickLength).style("text-anchor", "middle");
                        tspanUpdate.attr('x', 0).attr("dy", "0em");
                        pathUpdate.attr("d", "M" + internal.range[0] + "," + -internal.outerTickSize + "V0H" + internal.range[1] + "V" + -internal.outerTickSize);
                        break;
                    }
                case "left":
                    {
                        tickTransform = internal.axisY;
                        lineUpdate.attr("x2", -internal.innerTickSize).attr("y1", tickY).attr("y2", tickY);
                        textUpdate.attr("x", -internal.tickLength).attr("y", internal.tickOffset).style("text-anchor", "end");
                        tspanUpdate.attr('x', -internal.tickLength).attr("dy", function (d, i) {
                            return internal.tspanDy(d, i);
                        });
                        pathUpdate.attr("d", "M" + -internal.outerTickSize + "," + internal.range[0] + "H0V" + internal.range[1] + "H" + -internal.outerTickSize);
                        break;
                    }
                case "right":
                    {
                        tickTransform = internal.axisY;
                        lineUpdate.attr("x2", internal.innerTickSize).attr("y2", 0);
                        textUpdate.attr("x", internal.tickLength).attr("y", 0).style("text-anchor", "start");
                        tspanUpdate.attr('x', internal.tickLength).attr("dy", function (d, i) {
                            return internal.tspanDy(d, i);
                        });
                        pathUpdate.attr("d", "M" + internal.outerTickSize + "," + internal.range[0] + "H0V" + internal.range[1] + "H" + internal.outerTickSize);
                        break;
                    }
            }
            if (scale1.rangeBand) {
                var x = scale1,
                    dx = x.rangeBand() / 2;
                scale0 = scale1 = function scale1(d) {
                    return x(d) + dx;
                };
            } else if (scale0.rangeBand) {
                scale0 = scale1;
            } else {
                tickExit.call(tickTransform, scale1, internal.tickOffset);
            }
            tickEnter.call(tickTransform, scale0, internal.tickOffset);
            tickUpdate.call(tickTransform, scale1, internal.tickOffset);
        });
    }
    axis.scale = function (x) {
        if (!arguments.length) {
            return internal.scale;
        }
        internal.scale = x;
        return axis;
    };
    axis.orient = function (x) {
        if (!arguments.length) {
            return internal.orient;
        }
        internal.orient = x in { top: 1, right: 1, bottom: 1, left: 1 } ? x + "" : "bottom";
        return axis;
    };
    axis.tickFormat = function (format) {
        if (!arguments.length) {
            return internal.tickFormat;
        }
        internal.tickFormat = format;
        return axis;
    };
    axis.tickCentered = function (isCentered) {
        if (!arguments.length) {
            return internal.tickCentered;
        }
        internal.tickCentered = isCentered;
        return axis;
    };
    axis.tickOffset = function () {
        return internal.tickOffset;
    };
    axis.tickInterval = function () {
        var interval, length;
        if (params.isCategory) {
            interval = internal.tickOffset * 2;
        } else {
            length = axis.g.select('path.domain').node().getTotalLength() - internal.outerTickSize * 2;
            interval = length / axis.g.selectAll('line').size();
        }
        return interval === Infinity ? 0 : interval;
    };
    axis.ticks = function () {
        if (!arguments.length) {
            return internal.tickArguments;
        }
        internal.tickArguments = arguments;
        return axis;
    };
    axis.tickCulling = function (culling) {
        if (!arguments.length) {
            return internal.tickCulling;
        }
        internal.tickCulling = culling;
        return axis;
    };
    axis.tickValues = function (x) {
        if (typeof x === 'function') {
            internal.tickValues = function () {
                return x(internal.scale.domain());
            };
        } else {
            if (!arguments.length) {
                return internal.tickValues;
            }
            internal.tickValues = x;
        }
        return axis;
    };
    return axis;
};

var Axis = function (_Component) {
    inherits(Axis, _Component);

    function Axis(owner) {
        classCallCheck(this, Axis);

        var fn = {
            fn: c3_axis_fn,
            internal: {
                fn: c3_axis_internal_fn
            }
        };

        var _this = possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, owner, 'axis', fn));

        _this.d3 = owner.d3;
        _this.internal = AxisInternal;
        return _this;
    }

    return Axis;
}(Component);

c3_axis_fn = Axis.prototype;

c3_axis_fn.init = function init() {
    var $$ = this.owner,
        config = $$.config,
        main = $$.main;
    $$.axes.x = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisX).attr("clip-path", $$.clipPathForXAxis).attr("transform", $$.getTranslate('x')).style("visibility", config.axis_x_show ? 'visible' : 'hidden');
    $$.axes.x.append("text").attr("class", CLASS.axisXLabel).attr("transform", config.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this));
    $$.axes.y = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisY).attr("clip-path", config.axis_y_inner ? "" : $$.clipPathForYAxis).attr("transform", $$.getTranslate('y')).style("visibility", config.axis_y_show ? 'visible' : 'hidden');
    $$.axes.y.append("text").attr("class", CLASS.axisYLabel).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this));

    $$.axes.y2 = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisY2
    // clip-path?
    ).attr("transform", $$.getTranslate('y2')).style("visibility", config.axis_y2_show ? 'visible' : 'hidden');
    $$.axes.y2.append("text").attr("class", CLASS.axisY2Label).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
};
c3_axis_fn.getXAxis = function getXAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
    var $$ = this.owner,
        config = $$.config,
        axisParams = {
        isCategory: $$.isCategorized(),
        withOuterTick: withOuterTick,
        tickMultiline: config.axis_x_tick_multiline,
        tickWidth: config.axis_x_tick_width,
        tickTextRotate: withoutRotateTickText ? 0 : config.axis_x_tick_rotate,
        withoutTransition: withoutTransition
    },
        axis = new this.internal(this, axisParams).axis.scale(scale).orient(orient);

    if ($$.isTimeSeries() && tickValues && typeof tickValues !== "function") {
        tickValues = tickValues.map(function (v) {
            return $$.parseDate(v);
        });
    }

    // Set tick
    axis.tickFormat(tickFormat).tickValues(tickValues);
    if ($$.isCategorized()) {
        axis.tickCentered(config.axis_x_tick_centered);
        if (isEmpty(config.axis_x_tick_culling)) {
            config.axis_x_tick_culling = false;
        }
    }

    return axis;
};
c3_axis_fn.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
    var $$ = this.owner,
        config = $$.config,
        tickValues;
    if (config.axis_x_tick_fit || config.axis_x_tick_count) {
        tickValues = this.generateTickValues($$.mapTargetsToUniqueXs(targets), config.axis_x_tick_count, $$.isTimeSeries());
    }
    if (axis) {
        axis.tickValues(tickValues);
    } else {
        $$.xAxis.tickValues(tickValues);
        $$.subXAxis.tickValues(tickValues);
    }
    return tickValues;
};
c3_axis_fn.getYAxis = function getYAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
    var $$ = this.owner,
        config = $$.config,
        axisParams = {
        withOuterTick: withOuterTick,
        withoutTransition: withoutTransition,
        tickTextRotate: withoutRotateTickText ? 0 : config.axis_y_tick_rotate
    },
        axis = new this.internal(this, axisParams).axis.scale(scale).orient(orient).tickFormat(tickFormat);
    if ($$.isTimeSeriesY()) {
        axis.ticks($$.d3.time[config.axis_y_tick_time_value], config.axis_y_tick_time_interval);
    } else {
        axis.tickValues(tickValues);
    }
    return axis;
};
c3_axis_fn.getId = function getId(id) {
    var config = this.owner.config;
    return id in config.data_axes ? config.data_axes[id] : 'y';
};
c3_axis_fn.getXAxisTickFormat = function getXAxisTickFormat() {
    var $$ = this.owner,
        config = $$.config,
        format = $$.isTimeSeries() ? $$.defaultAxisTimeFormat : $$.isCategorized() ? $$.categoryName : function (v) {
        return v < 0 ? v.toFixed(0) : v;
    };
    if (config.axis_x_tick_format) {
        if (isFunction(config.axis_x_tick_format)) {
            format = config.axis_x_tick_format;
        } else if ($$.isTimeSeries()) {
            format = function format(date) {
                return date ? $$.axisTimeFormat(config.axis_x_tick_format)(date) : "";
            };
        }
    }
    return isFunction(format) ? function (v) {
        return format.call($$, v);
    } : format;
};
c3_axis_fn.getTickValues = function getTickValues(tickValues, axis) {
    return tickValues ? tickValues : axis ? axis.tickValues() : undefined;
};
c3_axis_fn.getXAxisTickValues = function getXAxisTickValues() {
    return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
};
c3_axis_fn.getYAxisTickValues = function getYAxisTickValues() {
    return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
};
c3_axis_fn.getY2AxisTickValues = function getY2AxisTickValues() {
    return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
};
c3_axis_fn.getLabelOptionByAxisId = function getLabelOptionByAxisId(axisId) {
    var $$ = this.owner,
        config = $$.config,
        option;
    if (axisId === 'y') {
        option = config.axis_y_label;
    } else if (axisId === 'y2') {
        option = config.axis_y2_label;
    } else if (axisId === 'x') {
        option = config.axis_x_label;
    }
    return option;
};
c3_axis_fn.getLabelText = function getLabelText(axisId) {
    var option = this.getLabelOptionByAxisId(axisId);
    return isString(option) ? option : option ? option.text : null;
};
c3_axis_fn.setLabelText = function setLabelText(axisId, text) {
    var $$ = this.owner,
        config = $$.config,
        option = this.getLabelOptionByAxisId(axisId);
    if (isString(option)) {
        if (axisId === 'y') {
            config.axis_y_label = text;
        } else if (axisId === 'y2') {
            config.axis_y2_label = text;
        } else if (axisId === 'x') {
            config.axis_x_label = text;
        }
    } else if (option) {
        option.text = text;
    }
};
c3_axis_fn.getLabelPosition = function getLabelPosition(axisId, defaultPosition) {
    var option = this.getLabelOptionByAxisId(axisId),
        position = option && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option.position ? option.position : defaultPosition;
    return {
        isInner: position.indexOf('inner') >= 0,
        isOuter: position.indexOf('outer') >= 0,
        isLeft: position.indexOf('left') >= 0,
        isCenter: position.indexOf('center') >= 0,
        isRight: position.indexOf('right') >= 0,
        isTop: position.indexOf('top') >= 0,
        isMiddle: position.indexOf('middle') >= 0,
        isBottom: position.indexOf('bottom') >= 0
    };
};
c3_axis_fn.getXAxisLabelPosition = function getXAxisLabelPosition() {
    return this.getLabelPosition('x', this.owner.config.axis_rotated ? 'inner-top' : 'inner-right');
};
c3_axis_fn.getYAxisLabelPosition = function getYAxisLabelPosition() {
    return this.getLabelPosition('y', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
};
c3_axis_fn.getY2AxisLabelPosition = function getY2AxisLabelPosition() {
    return this.getLabelPosition('y2', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
};
c3_axis_fn.getLabelPositionById = function getLabelPositionById(id) {
    return id === 'y2' ? this.getY2AxisLabelPosition() : id === 'y' ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
};
c3_axis_fn.textForXAxisLabel = function textForXAxisLabel() {
    return this.getLabelText('x');
};
c3_axis_fn.textForYAxisLabel = function textForYAxisLabel() {
    return this.getLabelText('y');
};
c3_axis_fn.textForY2AxisLabel = function textForY2AxisLabel() {
    return this.getLabelText('y2');
};
c3_axis_fn.xForAxisLabel = function xForAxisLabel(forHorizontal, position) {
    var $$ = this.owner;
    if (forHorizontal) {
        return position.isLeft ? 0 : position.isCenter ? $$.width / 2 : $$.width;
    } else {
        return position.isBottom ? -$$.height : position.isMiddle ? -$$.height / 2 : 0;
    }
};
c3_axis_fn.dxForAxisLabel = function dxForAxisLabel(forHorizontal, position) {
    if (forHorizontal) {
        return position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
    } else {
        return position.isTop ? "-0.5em" : position.isBottom ? "0.5em" : "0";
    }
};
c3_axis_fn.textAnchorForAxisLabel = function textAnchorForAxisLabel(forHorizontal, position) {
    if (forHorizontal) {
        return position.isLeft ? 'start' : position.isCenter ? 'middle' : 'end';
    } else {
        return position.isBottom ? 'start' : position.isMiddle ? 'middle' : 'end';
    }
};
c3_axis_fn.xForXAxisLabel = function xForXAxisLabel() {
    return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
};
c3_axis_fn.xForYAxisLabel = function xForYAxisLabel() {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
};
c3_axis_fn.xForY2AxisLabel = function xForY2AxisLabel() {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
};
c3_axis_fn.dxForXAxisLabel = function dxForXAxisLabel() {
    return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
};
c3_axis_fn.dxForYAxisLabel = function dxForYAxisLabel() {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
};
c3_axis_fn.dxForY2AxisLabel = function dxForY2AxisLabel() {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
};
c3_axis_fn.dyForXAxisLabel = function dyForXAxisLabel() {
    var $$ = this.owner,
        config = $$.config,
        position = this.getXAxisLabelPosition();
    if (config.axis_rotated) {
        return position.isInner ? "1.2em" : -25 - this.getMaxTickWidth('x');
    } else {
        return position.isInner ? "-0.5em" : config.axis_x_height ? config.axis_x_height - 10 : "3em";
    }
};
c3_axis_fn.dyForYAxisLabel = function dyForYAxisLabel() {
    var $$ = this.owner,
        position = this.getYAxisLabelPosition();
    if ($$.config.axis_rotated) {
        return position.isInner ? "-0.5em" : "3em";
    } else {
        return position.isInner ? "1.2em" : -10 - ($$.config.axis_y_inner ? 0 : this.getMaxTickWidth('y') + 10);
    }
};
c3_axis_fn.dyForY2AxisLabel = function dyForY2AxisLabel() {
    var $$ = this.owner,
        position = this.getY2AxisLabelPosition();
    if ($$.config.axis_rotated) {
        return position.isInner ? "1.2em" : "-2.2em";
    } else {
        return position.isInner ? "-0.5em" : 15 + ($$.config.axis_y2_inner ? 0 : this.getMaxTickWidth('y2') + 15);
    }
};
c3_axis_fn.textAnchorForXAxisLabel = function textAnchorForXAxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel(!$$.config.axis_rotated, this.getXAxisLabelPosition());
};
c3_axis_fn.textAnchorForYAxisLabel = function textAnchorForYAxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getYAxisLabelPosition());
};
c3_axis_fn.textAnchorForY2AxisLabel = function textAnchorForY2AxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getY2AxisLabelPosition());
};
c3_axis_fn.getMaxTickWidth = function getMaxTickWidth(id, withoutRecompute) {
    var $$ = this.owner,
        config = $$.config,
        maxWidth = 0,
        targetsToShow,
        scale,
        axis,
        dummy,
        svg;
    if (withoutRecompute && $$.currentMaxTickWidths[id]) {
        return $$.currentMaxTickWidths[id];
    }
    if ($$.svg) {
        targetsToShow = $$.filterTargetsToShow($$.data.targets);
        if (id === 'y') {
            scale = $$.y.copy().domain($$.getYDomain(targetsToShow, 'y'));
            axis = this.getYAxis(scale, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, false, true, true);
        } else if (id === 'y2') {
            scale = $$.y2.copy().domain($$.getYDomain(targetsToShow, 'y2'));
            axis = this.getYAxis(scale, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, false, true, true);
        } else {
            scale = $$.x.copy().domain($$.getXDomain(targetsToShow));
            axis = this.getXAxis(scale, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, false, true, true);
            this.updateXAxisTickValues(targetsToShow, axis);
        }
        dummy = $$.d3.select('body').append('div').classed('c3', true);
        svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0), svg.append('g').call(axis).each(function () {
            $$.d3.select(this).selectAll('text').each(function () {
                var box = this.getBoundingClientRect();
                if (maxWidth < box.width) {
                    maxWidth = box.width;
                }
            });
            dummy.remove();
        });
    }
    $$.currentMaxTickWidths[id] = maxWidth <= 0 ? $$.currentMaxTickWidths[id] : maxWidth;
    return $$.currentMaxTickWidths[id];
};

c3_axis_fn.updateLabels = function updateLabels(withTransition) {
    var $$ = this.owner;
    var axisXLabel = $$.main.select('.' + CLASS.axisX + ' .' + CLASS.axisXLabel),
        axisYLabel = $$.main.select('.' + CLASS.axisY + ' .' + CLASS.axisYLabel),
        axisY2Label = $$.main.select('.' + CLASS.axisY2 + ' .' + CLASS.axisY2Label);
    (withTransition ? axisXLabel.transition() : axisXLabel).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this));
    (withTransition ? axisYLabel.transition() : axisYLabel).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this));
    (withTransition ? axisY2Label.transition() : axisY2Label).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
};
c3_axis_fn.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
    var p = typeof padding === 'number' ? padding : padding[key];
    if (!isValue(p)) {
        return defaultValue;
    }
    if (padding.unit === 'ratio') {
        return padding[key] * domainLength;
    }
    // assume padding is pixels if unit is not specified
    return this.convertPixelsToAxisPadding(p, domainLength);
};
c3_axis_fn.convertPixelsToAxisPadding = function convertPixelsToAxisPadding(pixels, domainLength) {
    var $$ = this.owner,
        length = $$.config.axis_rotated ? $$.width : $$.height;
    return domainLength * (pixels / length);
};
c3_axis_fn.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
    var tickValues = values,
        targetCount,
        start,
        end,
        count,
        interval,
        i,
        tickValue;
    if (tickCount) {
        targetCount = isFunction(tickCount) ? tickCount() : tickCount;
        // compute ticks according to tickCount
        if (targetCount === 1) {
            tickValues = [values[0]];
        } else if (targetCount === 2) {
            tickValues = [values[0], values[values.length - 1]];
        } else if (targetCount > 2) {
            count = targetCount - 2;
            start = values[0];
            end = values[values.length - 1];
            interval = (end - start) / (count + 1);
            // re-construct unique values
            tickValues = [start];
            for (i = 0; i < count; i++) {
                tickValue = +start + interval * (i + 1);
                tickValues.push(forTimeSeries ? new Date(tickValue) : tickValue);
            }
            tickValues.push(end);
        }
    }
    if (!forTimeSeries) {
        tickValues = tickValues.sort(function (a, b) {
            return a - b;
        });
    }
    return tickValues;
};
c3_axis_fn.generateTransitions = function generateTransitions(duration) {
    var $$ = this.owner,
        axes = $$.axes;
    return {
        axisX: duration ? axes.x.transition().duration(duration) : axes.x,
        axisY: duration ? axes.y.transition().duration(duration) : axes.y,
        axisY2: duration ? axes.y2.transition().duration(duration) : axes.y2,
        axisSubX: duration ? axes.subx.transition().duration(duration) : axes.subx
    };
};
c3_axis_fn.redraw = function redraw(transitions, isHidden) {
    var $$ = this.owner;
    $$.axes.x.style("opacity", isHidden ? 0 : 1);
    $$.axes.y.style("opacity", isHidden ? 0 : 1);
    $$.axes.y2.style("opacity", isHidden ? 0 : 1);
    $$.axes.subx.style("opacity", isHidden ? 0 : 1);
    transitions.axisX.call($$.xAxis);
    transitions.axisY.call($$.yAxis);
    transitions.axisY2.call($$.y2Axis);
    transitions.axisSubX.call($$.subXAxis);
};

var c3$1 = { version: "0.4.18" };

var c3_chart_fn;
var c3_chart_internal_fn;

function Component(owner, componentKey, fn) {
    this.owner = owner;
    c3$1.chart.internal[componentKey] = fn;
}

function Chart(config) {
    var $$ = this.internal = new ChartInternal(this);
    $$.loadConfig(config);

    $$.beforeInit(config);
    $$.init();
    $$.afterInit(config);

    // bind "this" to nested API
    (function bindThis(fn, target, argThis) {
        Object.keys(fn).forEach(function (key) {
            target[key] = fn[key].bind(argThis);
            if (Object.keys(fn[key]).length > 0) {
                bindThis(fn[key], target[key], argThis);
            }
        });
    })(c3_chart_fn, this, this);
}

function ChartInternal(api) {
    var $$ = this;
    $$.d3 = window.d3 ? window.d3 :  true ? __webpack_require__(15) : undefined;
    $$.api = api;
    $$.config = $$.getDefaultConfig();
    $$.data = {};
    $$.cache = {};
    $$.axes = {};
}

c3$1.generate = function (config) {
    return new Chart(config);
};

c3$1.chart = {
    fn: Chart.prototype,
    internal: {
        fn: ChartInternal.prototype
    }
};
c3_chart_fn = c3$1.chart.fn;
c3_chart_internal_fn = c3$1.chart.internal.fn;

c3_chart_internal_fn.beforeInit = function () {
    // can do something
};
c3_chart_internal_fn.afterInit = function () {
    // can do something
};
c3_chart_internal_fn.init = function () {
    var $$ = this,
        config = $$.config;

    $$.initParams();

    if (config.data_url) {
        $$.convertUrlToData(config.data_url, config.data_mimeType, config.data_headers, config.data_keys, $$.initWithData);
    } else if (config.data_json) {
        $$.initWithData($$.convertJsonToData(config.data_json, config.data_keys));
    } else if (config.data_rows) {
        $$.initWithData($$.convertRowsToData(config.data_rows));
    } else if (config.data_columns) {
        $$.initWithData($$.convertColumnsToData(config.data_columns));
    } else {
        throw Error('url or json or rows or columns is required.');
    }
};

c3_chart_internal_fn.initParams = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;

    // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
    $$.clipId = "c3-" + +new Date() + '-clip', $$.clipIdForXAxis = $$.clipId + '-xaxis', $$.clipIdForYAxis = $$.clipId + '-yaxis', $$.clipIdForGrid = $$.clipId + '-grid', $$.clipIdForSubchart = $$.clipId + '-subchart', $$.clipPath = $$.getClipPath($$.clipId), $$.clipPathForXAxis = $$.getClipPath($$.clipIdForXAxis), $$.clipPathForYAxis = $$.getClipPath($$.clipIdForYAxis);
    $$.clipPathForGrid = $$.getClipPath($$.clipIdForGrid), $$.clipPathForSubchart = $$.getClipPath($$.clipIdForSubchart), $$.dragStart = null;
    $$.dragging = false;
    $$.flowing = false;
    $$.cancelClick = false;
    $$.mouseover = false;
    $$.transiting = false;

    $$.color = $$.generateColor();
    $$.levelColor = $$.generateLevelColor();

    $$.dataTimeFormat = config.data_xLocaltime ? d3.time.format : d3.time.format.utc;
    $$.axisTimeFormat = config.axis_x_localtime ? d3.time.format : d3.time.format.utc;
    $$.defaultAxisTimeFormat = $$.axisTimeFormat.multi([[".%L", function (d) {
        return d.getMilliseconds();
    }], [":%S", function (d) {
        return d.getSeconds();
    }], ["%I:%M", function (d) {
        return d.getMinutes();
    }], ["%I %p", function (d) {
        return d.getHours();
    }], ["%-m/%-d", function (d) {
        return d.getDay() && d.getDate() !== 1;
    }], ["%-m/%-d", function (d) {
        return d.getDate() !== 1;
    }], ["%-m/%-d", function (d) {
        return d.getMonth();
    }], ["%Y/%-m/%-d", function () {
        return true;
    }]]);

    $$.hiddenTargetIds = [];
    $$.hiddenLegendIds = [];
    $$.focusedTargetIds = [];
    $$.defocusedTargetIds = [];

    $$.xOrient = config.axis_rotated ? "left" : "bottom";
    $$.yOrient = config.axis_rotated ? config.axis_y_inner ? "top" : "bottom" : config.axis_y_inner ? "right" : "left";
    $$.y2Orient = config.axis_rotated ? config.axis_y2_inner ? "bottom" : "top" : config.axis_y2_inner ? "left" : "right";
    $$.subXOrient = config.axis_rotated ? "left" : "bottom";

    $$.isLegendRight = config.legend_position === 'right';
    $$.isLegendInset = config.legend_position === 'inset';
    $$.isLegendTop = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'top-right';
    $$.isLegendLeft = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'bottom-left';
    $$.legendStep = 0;
    $$.legendItemWidth = 0;
    $$.legendItemHeight = 0;

    $$.currentMaxTickWidths = {
        x: 0,
        y: 0,
        y2: 0
    };

    $$.rotated_padding_left = 30;
    $$.rotated_padding_right = config.axis_rotated && !config.axis_x_show ? 0 : 30;
    $$.rotated_padding_top = 5;

    $$.withoutFadeIn = {};

    $$.intervalForObserveInserted = undefined;

    $$.axes.subx = d3.selectAll([]); // needs when excluding subchart.js
};

c3_chart_internal_fn.initChartElements = function () {
    if (this.initBar) {
        this.initBar();
    }
    if (this.initLine) {
        this.initLine();
    }
    if (this.initArc) {
        this.initArc();
    }
    if (this.initGauge) {
        this.initGauge();
    }
    if (this.initText) {
        this.initText();
    }
};

c3_chart_internal_fn.initWithData = function (data) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;
    var defs,
        main,
        binding = true;

    $$.axis = new Axis($$);

    if ($$.initPie) {
        $$.initPie();
    }
    if ($$.initBrush) {
        $$.initBrush();
    }
    if ($$.initZoom) {
        $$.initZoom();
    }

    if (!config.bindto) {
        $$.selectChart = d3.selectAll([]);
    } else if (typeof config.bindto.node === 'function') {
        $$.selectChart = config.bindto;
    } else {
        $$.selectChart = d3.select(config.bindto);
    }
    if ($$.selectChart.empty()) {
        $$.selectChart = d3.select(document.createElement('div')).style('opacity', 0);
        $$.observeInserted($$.selectChart);
        binding = false;
    }
    $$.selectChart.html("").classed("c3", true);

    // Init data as targets
    $$.data.xs = {};
    $$.data.targets = $$.convertDataToTargets(data);

    if (config.data_filter) {
        $$.data.targets = $$.data.targets.filter(config.data_filter);
    }

    // Set targets to hide if needed
    if (config.data_hide) {
        $$.addHiddenTargetIds(config.data_hide === true ? $$.mapToIds($$.data.targets) : config.data_hide);
    }
    if (config.legend_hide) {
        $$.addHiddenLegendIds(config.legend_hide === true ? $$.mapToIds($$.data.targets) : config.legend_hide);
    }

    // when gauge, hide legend // TODO: fix
    if ($$.hasType('gauge')) {
        config.legend_show = false;
    }

    // Init sizes and scales
    $$.updateSizes();
    $$.updateScales();

    // Set domains for each scale
    $$.x.domain(d3.extent($$.getXDomain($$.data.targets)));
    $$.y.domain($$.getYDomain($$.data.targets, 'y'));
    $$.y2.domain($$.getYDomain($$.data.targets, 'y2'));
    $$.subX.domain($$.x.domain());
    $$.subY.domain($$.y.domain());
    $$.subY2.domain($$.y2.domain());

    // Save original x domain for zoom update
    $$.orgXDomain = $$.x.domain();

    // Set initialized scales to brush and zoom
    if ($$.brush) {
        $$.brush.scale($$.subX);
    }
    if (config.zoom_enabled) {
        $$.zoom.scale($$.x);
    }

    /*-- Basic Elements --*/

    // Define svgs
    $$.svg = $$.selectChart.append("svg").style("overflow", "hidden").on('mouseenter', function () {
        return config.onmouseover.call($$);
    }).on('mouseleave', function () {
        return config.onmouseout.call($$);
    });

    if ($$.config.svg_classname) {
        $$.svg.attr('class', $$.config.svg_classname);
    }

    // Define defs
    defs = $$.svg.append("defs");
    $$.clipChart = $$.appendClip(defs, $$.clipId);
    $$.clipXAxis = $$.appendClip(defs, $$.clipIdForXAxis);
    $$.clipYAxis = $$.appendClip(defs, $$.clipIdForYAxis);
    $$.clipGrid = $$.appendClip(defs, $$.clipIdForGrid);
    $$.clipSubchart = $$.appendClip(defs, $$.clipIdForSubchart);
    $$.updateSvgSize();

    // Define regions
    main = $$.main = $$.svg.append("g").attr("transform", $$.getTranslate('main'));

    if ($$.initSubchart) {
        $$.initSubchart();
    }
    if ($$.initTooltip) {
        $$.initTooltip();
    }
    if ($$.initLegend) {
        $$.initLegend();
    }
    if ($$.initTitle) {
        $$.initTitle();
    }

    /*-- Main Region --*/

    // text when empty
    main.append("text").attr("class", CLASS.text + ' ' + CLASS.empty).attr("text-anchor", "middle" // horizontal centering of text at x position in all browsers.
    ).attr("dominant-baseline", "middle"); // vertical centering of text at y position in all browsers, except IE.

    // Regions
    $$.initRegion();

    // Grids
    $$.initGrid();

    // Define g for chart area
    main.append('g').attr("clip-path", $$.clipPath).attr('class', CLASS.chart);

    // Grid lines
    if (config.grid_lines_front) {
        $$.initGridLines();
    }

    // Cover whole with rects for events
    $$.initEventRect();

    // Define g for chart
    $$.initChartElements();

    // if zoom privileged, insert rect to forefront
    // TODO: is this needed?
    main.insert('rect', config.zoom_privileged ? null : 'g.' + CLASS.regions).attr('class', CLASS.zoomRect).attr('width', $$.width).attr('height', $$.height).style('opacity', 0).on("dblclick.zoom", null);

    // Set default extent if defined
    if (config.axis_x_extent) {
        $$.brush.extent($$.getDefaultExtent());
    }

    // Add Axis
    $$.axis.init();

    // Set targets
    $$.updateTargets($$.data.targets);

    // Draw with targets
    if (binding) {
        $$.updateDimension();
        $$.config.oninit.call($$);
        $$.redraw({
            withTransition: false,
            withTransform: true,
            withUpdateXDomain: true,
            withUpdateOrgXDomain: true,
            withTransitionForAxis: false
        });
    }

    // Bind resize event
    $$.bindResize();

    // export element of the chart
    $$.api.element = $$.selectChart.node();
};

c3_chart_internal_fn.smoothLines = function (el, type) {
    var $$ = this;
    if (type === 'grid') {
        el.each(function () {
            var g = $$.d3.select(this),
                x1 = g.attr('x1'),
                x2 = g.attr('x2'),
                y1 = g.attr('y1'),
                y2 = g.attr('y2');
            g.attr({
                'x1': Math.ceil(x1),
                'x2': Math.ceil(x2),
                'y1': Math.ceil(y1),
                'y2': Math.ceil(y2)
            });
        });
    }
};

c3_chart_internal_fn.updateSizes = function () {
    var $$ = this,
        config = $$.config;
    var legendHeight = $$.legend ? $$.getLegendHeight() : 0,
        legendWidth = $$.legend ? $$.getLegendWidth() : 0,
        legendHeightForBottom = $$.isLegendRight || $$.isLegendInset ? 0 : legendHeight,
        hasArc = $$.hasArcType(),
        xAxisHeight = config.axis_rotated || hasArc ? 0 : $$.getHorizontalAxisHeight('x'),
        subchartHeight = config.subchart_show && !hasArc ? config.subchart_size_height + xAxisHeight : 0;

    $$.currentWidth = $$.getCurrentWidth();
    $$.currentHeight = $$.getCurrentHeight();

    // for main
    $$.margin = config.axis_rotated ? {
        top: $$.getHorizontalAxisHeight('y2') + $$.getCurrentPaddingTop(),
        right: hasArc ? 0 : $$.getCurrentPaddingRight(),
        bottom: $$.getHorizontalAxisHeight('y') + legendHeightForBottom + $$.getCurrentPaddingBottom(),
        left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
    } : {
        top: 4 + $$.getCurrentPaddingTop(), // for top tick text
        right: hasArc ? 0 : $$.getCurrentPaddingRight(),
        bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
        left: hasArc ? 0 : $$.getCurrentPaddingLeft()
    };

    // for subchart
    $$.margin2 = config.axis_rotated ? {
        top: $$.margin.top,
        right: NaN,
        bottom: 20 + legendHeightForBottom,
        left: $$.rotated_padding_left
    } : {
        top: $$.currentHeight - subchartHeight - legendHeightForBottom,
        right: NaN,
        bottom: xAxisHeight + legendHeightForBottom,
        left: $$.margin.left
    };

    // for legend
    $$.margin3 = {
        top: 0,
        right: NaN,
        bottom: 0,
        left: 0
    };
    if ($$.updateSizeForLegend) {
        $$.updateSizeForLegend(legendHeight, legendWidth);
    }

    $$.width = $$.currentWidth - $$.margin.left - $$.margin.right;
    $$.height = $$.currentHeight - $$.margin.top - $$.margin.bottom;
    if ($$.width < 0) {
        $$.width = 0;
    }
    if ($$.height < 0) {
        $$.height = 0;
    }

    $$.width2 = config.axis_rotated ? $$.margin.left - $$.rotated_padding_left - $$.rotated_padding_right : $$.width;
    $$.height2 = config.axis_rotated ? $$.height : $$.currentHeight - $$.margin2.top - $$.margin2.bottom;
    if ($$.width2 < 0) {
        $$.width2 = 0;
    }
    if ($$.height2 < 0) {
        $$.height2 = 0;
    }

    // for arc
    $$.arcWidth = $$.width - ($$.isLegendRight ? legendWidth + 10 : 0);
    $$.arcHeight = $$.height - ($$.isLegendRight ? 0 : 10);
    if ($$.hasType('gauge') && !config.gauge_fullCircle) {
        $$.arcHeight += $$.height - $$.getGaugeLabelHeight();
    }
    if ($$.updateRadius) {
        $$.updateRadius();
    }

    if ($$.isLegendRight && hasArc) {
        $$.margin3.left = $$.arcWidth / 2 + $$.radiusExpanded * 1.1;
    }
};

c3_chart_internal_fn.updateTargets = function (targets) {
    var $$ = this;

    /*-- Main --*/

    //-- Text --//
    $$.updateTargetsForText(targets);

    //-- Bar --//
    $$.updateTargetsForBar(targets);

    //-- Line --//
    $$.updateTargetsForLine(targets);

    //-- Arc --//
    if ($$.hasArcType() && $$.updateTargetsForArc) {
        $$.updateTargetsForArc(targets);
    }

    /*-- Sub --*/

    if ($$.updateTargetsForSubchart) {
        $$.updateTargetsForSubchart(targets);
    }

    // Fade-in each chart
    $$.showTargets();
};
c3_chart_internal_fn.showTargets = function () {
    var $$ = this;
    $$.svg.selectAll('.' + CLASS.target).filter(function (d) {
        return $$.isTargetToShow(d.id);
    }).transition().duration($$.config.transition_duration).style("opacity", 1);
};

c3_chart_internal_fn.redraw = function (options, transitions) {
    var $$ = this,
        main = $$.main,
        d3 = $$.d3,
        config = $$.config;
    var areaIndices = $$.getShapeIndices($$.isAreaType),
        barIndices = $$.getShapeIndices($$.isBarType),
        lineIndices = $$.getShapeIndices($$.isLineType);
    var withY, withSubchart, withTransition, withTransitionForExit, withTransitionForAxis, withTransform, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain, withLegend, withEventRect, withDimension, withUpdateXAxis;
    var hideAxis = $$.hasArcType();
    var drawArea, drawBar, drawLine, xForText, yForText;
    var duration, durationForExit, durationForAxis;
    var waitForDraw, flow;
    var targetsToShow = $$.filterTargetsToShow($$.data.targets),
        tickValues,
        i,
        intervalForCulling,
        xDomainForZoom;
    var xv = $$.xv.bind($$),
        cx,
        cy;

    options = options || {};
    withY = getOption(options, "withY", true);
    withSubchart = getOption(options, "withSubchart", true);
    withTransition = getOption(options, "withTransition", true);
    withTransform = getOption(options, "withTransform", false);
    withUpdateXDomain = getOption(options, "withUpdateXDomain", false);
    withUpdateOrgXDomain = getOption(options, "withUpdateOrgXDomain", false);
    withTrimXDomain = getOption(options, "withTrimXDomain", true);
    withUpdateXAxis = getOption(options, "withUpdateXAxis", withUpdateXDomain);
    withLegend = getOption(options, "withLegend", false);
    withEventRect = getOption(options, "withEventRect", true);
    withDimension = getOption(options, "withDimension", true);
    withTransitionForExit = getOption(options, "withTransitionForExit", withTransition);
    withTransitionForAxis = getOption(options, "withTransitionForAxis", withTransition);

    duration = withTransition ? config.transition_duration : 0;
    durationForExit = withTransitionForExit ? duration : 0;
    durationForAxis = withTransitionForAxis ? duration : 0;

    transitions = transitions || $$.axis.generateTransitions(durationForAxis);

    // update legend and transform each g
    if (withLegend && config.legend_show) {
        $$.updateLegend($$.mapToIds($$.data.targets), options, transitions);
    } else if (withDimension) {
        // need to update dimension (e.g. axis.y.tick.values) because y tick values should change
        // no need to update axis in it because they will be updated in redraw()
        $$.updateDimension(true);
    }

    // MEMO: needed for grids calculation
    if ($$.isCategorized() && targetsToShow.length === 0) {
        $$.x.domain([0, $$.axes.x.selectAll('.tick').size()]);
    }

    if (targetsToShow.length) {
        $$.updateXDomain(targetsToShow, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain);
        if (!config.axis_x_tick_values) {
            tickValues = $$.axis.updateXAxisTickValues(targetsToShow);
        }
    } else {
        $$.xAxis.tickValues([]);
        $$.subXAxis.tickValues([]);
    }

    if (config.zoom_rescale && !options.flow) {
        xDomainForZoom = $$.x.orgDomain();
    }

    $$.y.domain($$.getYDomain(targetsToShow, 'y', xDomainForZoom));
    $$.y2.domain($$.getYDomain(targetsToShow, 'y2', xDomainForZoom));

    if (!config.axis_y_tick_values && config.axis_y_tick_count) {
        $$.yAxis.tickValues($$.axis.generateTickValues($$.y.domain(), config.axis_y_tick_count));
    }
    if (!config.axis_y2_tick_values && config.axis_y2_tick_count) {
        $$.y2Axis.tickValues($$.axis.generateTickValues($$.y2.domain(), config.axis_y2_tick_count));
    }

    // axes
    $$.axis.redraw(transitions, hideAxis);

    // Update axis label
    $$.axis.updateLabels(withTransition);

    // show/hide if manual culling needed
    if ((withUpdateXDomain || withUpdateXAxis) && targetsToShow.length) {
        if (config.axis_x_tick_culling && tickValues) {
            for (i = 1; i < tickValues.length; i++) {
                if (tickValues.length / i < config.axis_x_tick_culling_max) {
                    intervalForCulling = i;
                    break;
                }
            }
            $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').each(function (e) {
                var index = tickValues.indexOf(e);
                if (index >= 0) {
                    d3.select(this).style('display', index % intervalForCulling ? 'none' : 'block');
                }
            });
        } else {
            $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').style('display', 'block');
        }
    }

    // setup drawer - MEMO: these must be called after axis updated
    drawArea = $$.generateDrawArea ? $$.generateDrawArea(areaIndices, false) : undefined;
    drawBar = $$.generateDrawBar ? $$.generateDrawBar(barIndices) : undefined;
    drawLine = $$.generateDrawLine ? $$.generateDrawLine(lineIndices, false) : undefined;
    xForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, true);
    yForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, false);

    // Update sub domain
    if (withY) {
        $$.subY.domain($$.getYDomain(targetsToShow, 'y'));
        $$.subY2.domain($$.getYDomain(targetsToShow, 'y2'));
    }

    // xgrid focus
    $$.updateXgridFocus();

    // Data empty label positioning and text.
    main.select("text." + CLASS.text + '.' + CLASS.empty).attr("x", $$.width / 2).attr("y", $$.height / 2).text(config.data_empty_label_text).transition().style('opacity', targetsToShow.length ? 0 : 1);

    // grid
    $$.updateGrid(duration);

    // rect for regions
    $$.updateRegion(duration);

    // bars
    $$.updateBar(durationForExit);

    // lines, areas and cricles
    $$.updateLine(durationForExit);
    $$.updateArea(durationForExit);
    $$.updateCircle();

    // text
    if ($$.hasDataLabel()) {
        $$.updateText(durationForExit);
    }

    // title
    if ($$.redrawTitle) {
        $$.redrawTitle();
    }

    // arc
    if ($$.redrawArc) {
        $$.redrawArc(duration, durationForExit, withTransform);
    }

    // subchart
    if ($$.redrawSubchart) {
        $$.redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices);
    }

    // circles for select
    main.selectAll('.' + CLASS.selectedCircles).filter($$.isBarType.bind($$)).selectAll('circle').remove();

    // event rects will redrawn when flow called
    if (config.interaction_enabled && !options.flow && withEventRect) {
        $$.redrawEventRect();
        if ($$.updateZoom) {
            $$.updateZoom();
        }
    }

    // update circleY based on updated parameters
    $$.updateCircleY();

    // generate circle x/y functions depending on updated params
    cx = ($$.config.axis_rotated ? $$.circleY : $$.circleX).bind($$);
    cy = ($$.config.axis_rotated ? $$.circleX : $$.circleY).bind($$);

    if (options.flow) {
        flow = $$.generateFlow({
            targets: targetsToShow,
            flow: options.flow,
            duration: options.flow.duration,
            drawBar: drawBar,
            drawLine: drawLine,
            drawArea: drawArea,
            cx: cx,
            cy: cy,
            xv: xv,
            xForText: xForText,
            yForText: yForText
        });
    }

    if ((duration || flow) && $$.isTabVisible()) {
        // Only use transition if tab visible. See #938.
        // transition should be derived from one transition
        d3.transition().duration(duration).each(function () {
            var transitionsToWait = [];

            // redraw and gather transitions
            [$$.redrawBar(drawBar, true), $$.redrawLine(drawLine, true), $$.redrawArea(drawArea, true), $$.redrawCircle(cx, cy, true), $$.redrawText(xForText, yForText, options.flow, true), $$.redrawRegion(true), $$.redrawGrid(true)].forEach(function (transitions) {
                transitions.forEach(function (transition) {
                    transitionsToWait.push(transition);
                });
            });

            // Wait for end of transitions to call flow and onrendered callback
            waitForDraw = $$.generateWait();
            transitionsToWait.forEach(function (t) {
                waitForDraw.add(t);
            });
        }).call(waitForDraw, function () {
            if (flow) {
                flow();
            }
            if (config.onrendered) {
                config.onrendered.call($$);
            }
        });
    } else {
        $$.redrawBar(drawBar);
        $$.redrawLine(drawLine);
        $$.redrawArea(drawArea);
        $$.redrawCircle(cx, cy);
        $$.redrawText(xForText, yForText, options.flow);
        $$.redrawRegion();
        $$.redrawGrid();
        if (config.onrendered) {
            config.onrendered.call($$);
        }
    }

    // update fadein condition
    $$.mapToIds($$.data.targets).forEach(function (id) {
        $$.withoutFadeIn[id] = true;
    });
};

c3_chart_internal_fn.updateAndRedraw = function (options) {
    var $$ = this,
        config = $$.config,
        transitions;
    options = options || {};
    // same with redraw
    options.withTransition = getOption(options, "withTransition", true);
    options.withTransform = getOption(options, "withTransform", false);
    options.withLegend = getOption(options, "withLegend", false);
    // NOT same with redraw
    options.withUpdateXDomain = true;
    options.withUpdateOrgXDomain = true;
    options.withTransitionForExit = false;
    options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition);
    // MEMO: this needs to be called before updateLegend and it means this ALWAYS needs to be called)
    $$.updateSizes();
    // MEMO: called in updateLegend in redraw if withLegend
    if (!(options.withLegend && config.legend_show)) {
        transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0);
        // Update scales
        $$.updateScales();
        $$.updateSvgSize();
        // Update g positions
        $$.transformAll(options.withTransitionForTransform, transitions);
    }
    // Draw with new sizes & scales
    $$.redraw(options, transitions);
};
c3_chart_internal_fn.redrawWithoutRescale = function () {
    this.redraw({
        withY: false,
        withSubchart: false,
        withEventRect: false,
        withTransitionForAxis: false
    });
};

c3_chart_internal_fn.isTimeSeries = function () {
    return this.config.axis_x_type === 'timeseries';
};
c3_chart_internal_fn.isCategorized = function () {
    return this.config.axis_x_type.indexOf('categor') >= 0;
};
c3_chart_internal_fn.isCustomX = function () {
    var $$ = this,
        config = $$.config;
    return !$$.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
};

c3_chart_internal_fn.isTimeSeriesY = function () {
    return this.config.axis_y_type === 'timeseries';
};

c3_chart_internal_fn.getTranslate = function (target) {
    var $$ = this,
        config = $$.config,
        x,
        y;
    if (target === 'main') {
        x = asHalfPixel($$.margin.left);
        y = asHalfPixel($$.margin.top);
    } else if (target === 'context') {
        x = asHalfPixel($$.margin2.left);
        y = asHalfPixel($$.margin2.top);
    } else if (target === 'legend') {
        x = $$.margin3.left;
        y = $$.margin3.top;
    } else if (target === 'x') {
        x = 0;
        y = config.axis_rotated ? 0 : $$.height;
    } else if (target === 'y') {
        x = 0;
        y = config.axis_rotated ? $$.height : 0;
    } else if (target === 'y2') {
        x = config.axis_rotated ? 0 : $$.width;
        y = config.axis_rotated ? 1 : 0;
    } else if (target === 'subx') {
        x = 0;
        y = config.axis_rotated ? 0 : $$.height2;
    } else if (target === 'arc') {
        x = $$.arcWidth / 2;
        y = $$.arcHeight / 2;
    }
    return "translate(" + x + "," + y + ")";
};
c3_chart_internal_fn.initialOpacity = function (d) {
    return d.value !== null && this.withoutFadeIn[d.id] ? 1 : 0;
};
c3_chart_internal_fn.initialOpacityForCircle = function (d) {
    return d.value !== null && this.withoutFadeIn[d.id] ? this.opacityForCircle(d) : 0;
};
c3_chart_internal_fn.opacityForCircle = function (d) {
    var isPointShouldBeShown = isFunction(this.config.point_show) ? this.config.point_show(d) : this.config.point_show;
    var opacity = isPointShouldBeShown ? 1 : 0;
    return isValue(d.value) ? this.isScatterType(d) ? 0.5 : opacity : 0;
};
c3_chart_internal_fn.opacityForText = function () {
    return this.hasDataLabel() ? 1 : 0;
};
c3_chart_internal_fn.xx = function (d) {
    return d ? this.x(d.x) : null;
};
c3_chart_internal_fn.xv = function (d) {
    var $$ = this,
        value = d.value;
    if ($$.isTimeSeries()) {
        value = $$.parseDate(d.value);
    } else if ($$.isCategorized() && typeof d.value === 'string') {
        value = $$.config.axis_x_categories.indexOf(d.value);
    }
    return Math.ceil($$.x(value));
};
c3_chart_internal_fn.yv = function (d) {
    var $$ = this,
        yScale = d.axis && d.axis === 'y2' ? $$.y2 : $$.y;
    return Math.ceil(yScale(d.value));
};
c3_chart_internal_fn.subxx = function (d) {
    return d ? this.subX(d.x) : null;
};

c3_chart_internal_fn.transformMain = function (withTransition, transitions) {
    var $$ = this,
        xAxis,
        yAxis,
        y2Axis;
    if (transitions && transitions.axisX) {
        xAxis = transitions.axisX;
    } else {
        xAxis = $$.main.select('.' + CLASS.axisX);
        if (withTransition) {
            xAxis = xAxis.transition();
        }
    }
    if (transitions && transitions.axisY) {
        yAxis = transitions.axisY;
    } else {
        yAxis = $$.main.select('.' + CLASS.axisY);
        if (withTransition) {
            yAxis = yAxis.transition();
        }
    }
    if (transitions && transitions.axisY2) {
        y2Axis = transitions.axisY2;
    } else {
        y2Axis = $$.main.select('.' + CLASS.axisY2);
        if (withTransition) {
            y2Axis = y2Axis.transition();
        }
    }
    (withTransition ? $$.main.transition() : $$.main).attr("transform", $$.getTranslate('main'));
    xAxis.attr("transform", $$.getTranslate('x'));
    yAxis.attr("transform", $$.getTranslate('y'));
    y2Axis.attr("transform", $$.getTranslate('y2'));
    $$.main.select('.' + CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
};
c3_chart_internal_fn.transformAll = function (withTransition, transitions) {
    var $$ = this;
    $$.transformMain(withTransition, transitions);
    if ($$.config.subchart_show) {
        $$.transformContext(withTransition, transitions);
    }
    if ($$.legend) {
        $$.transformLegend(withTransition);
    }
};

c3_chart_internal_fn.updateSvgSize = function () {
    var $$ = this,
        brush = $$.svg.select(".c3-brush .background");
    $$.svg.attr('width', $$.currentWidth).attr('height', $$.currentHeight);
    $$.svg.selectAll(['#' + $$.clipId, '#' + $$.clipIdForGrid]).select('rect').attr('width', $$.width).attr('height', $$.height);
    $$.svg.select('#' + $$.clipIdForXAxis).select('rect').attr('x', $$.getXAxisClipX.bind($$)).attr('y', $$.getXAxisClipY.bind($$)).attr('width', $$.getXAxisClipWidth.bind($$)).attr('height', $$.getXAxisClipHeight.bind($$));
    $$.svg.select('#' + $$.clipIdForYAxis).select('rect').attr('x', $$.getYAxisClipX.bind($$)).attr('y', $$.getYAxisClipY.bind($$)).attr('width', $$.getYAxisClipWidth.bind($$)).attr('height', $$.getYAxisClipHeight.bind($$));
    $$.svg.select('#' + $$.clipIdForSubchart).select('rect').attr('width', $$.width).attr('height', brush.size() ? brush.attr('height') : 0);
    $$.svg.select('.' + CLASS.zoomRect).attr('width', $$.width).attr('height', $$.height);
    // MEMO: parent div's height will be bigger than svg when <!DOCTYPE html>
    $$.selectChart.style('max-height', $$.currentHeight + "px");
};

c3_chart_internal_fn.updateDimension = function (withoutAxis) {
    var $$ = this;
    if (!withoutAxis) {
        if ($$.config.axis_rotated) {
            $$.axes.x.call($$.xAxis);
            $$.axes.subx.call($$.subXAxis);
        } else {
            $$.axes.y.call($$.yAxis);
            $$.axes.y2.call($$.y2Axis);
        }
    }
    $$.updateSizes();
    $$.updateScales();
    $$.updateSvgSize();
    $$.transformAll(false);
};

c3_chart_internal_fn.observeInserted = function (selection) {
    var $$ = this,
        observer;
    if (typeof MutationObserver === 'undefined') {
        window.console.error("MutationObserver not defined.");
        return;
    }
    observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.previousSibling) {
                observer.disconnect();
                // need to wait for completion of load because size calculation requires the actual sizes determined after that completion
                $$.intervalForObserveInserted = window.setInterval(function () {
                    // parentNode will NOT be null when completed
                    if (selection.node().parentNode) {
                        window.clearInterval($$.intervalForObserveInserted);
                        $$.updateDimension();
                        if ($$.brush) {
                            $$.brush.update();
                        }
                        $$.config.oninit.call($$);
                        $$.redraw({
                            withTransform: true,
                            withUpdateXDomain: true,
                            withUpdateOrgXDomain: true,
                            withTransition: false,
                            withTransitionForTransform: false,
                            withLegend: true
                        });
                        selection.transition().style('opacity', 1);
                    }
                }, 10);
            }
        });
    });
    observer.observe(selection.node(), { attributes: true, childList: true, characterData: true });
};

c3_chart_internal_fn.bindResize = function () {
    var $$ = this,
        config = $$.config;

    $$.resizeFunction = $$.generateResize();

    $$.resizeFunction.add(function () {
        config.onresize.call($$);
    });
    if (config.resize_auto) {
        $$.resizeFunction.add(function () {
            if ($$.resizeTimeout !== undefined) {
                window.clearTimeout($$.resizeTimeout);
            }
            $$.resizeTimeout = window.setTimeout(function () {
                delete $$.resizeTimeout;
                $$.api.flush();
            }, 100);
        });
    }
    $$.resizeFunction.add(function () {
        config.onresized.call($$);
    });

    if (window.attachEvent) {
        window.attachEvent('onresize', $$.resizeFunction);
    } else if (window.addEventListener) {
        window.addEventListener('resize', $$.resizeFunction, false);
    } else {
        // fallback to this, if this is a very old browser
        var wrapper = window.onresize;
        if (!wrapper) {
            // create a wrapper that will call all charts
            wrapper = $$.generateResize();
        } else if (!wrapper.add || !wrapper.remove) {
            // there is already a handler registered, make sure we call it too
            wrapper = $$.generateResize();
            wrapper.add(window.onresize);
        }
        // add this graph to the wrapper, we will be removed if the user calls destroy
        wrapper.add($$.resizeFunction);
        window.onresize = wrapper;
    }
};

c3_chart_internal_fn.generateResize = function () {
    var resizeFunctions = [];
    function callResizeFunctions() {
        resizeFunctions.forEach(function (f) {
            f();
        });
    }
    callResizeFunctions.add = function (f) {
        resizeFunctions.push(f);
    };
    callResizeFunctions.remove = function (f) {
        for (var i = 0; i < resizeFunctions.length; i++) {
            if (resizeFunctions[i] === f) {
                resizeFunctions.splice(i, 1);
                break;
            }
        }
    };
    return callResizeFunctions;
};

c3_chart_internal_fn.endall = function (transition, callback) {
    var n = 0;
    transition.each(function () {
        ++n;
    }).each("end", function () {
        if (! --n) {
            callback.apply(this, arguments);
        }
    });
};
c3_chart_internal_fn.generateWait = function () {
    var transitionsToWait = [],
        f = function f(transition, callback) {
        var timer = setInterval(function () {
            var done = 0;
            transitionsToWait.forEach(function (t) {
                if (t.empty()) {
                    done += 1;
                    return;
                }
                try {
                    t.transition();
                } catch (e) {
                    done += 1;
                }
            });
            if (done === transitionsToWait.length) {
                clearInterval(timer);
                if (callback) {
                    callback();
                }
            }
        }, 10);
    };
    f.add = function (transition) {
        transitionsToWait.push(transition);
    };
    return f;
};

c3_chart_internal_fn.parseDate = function (date) {
    var $$ = this,
        parsedDate;
    if (date instanceof Date) {
        parsedDate = date;
    } else if (typeof date === 'string') {
        parsedDate = $$.dataTimeFormat($$.config.data_xFormat).parse(date);
    } else if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object') {
        parsedDate = new Date(+date);
    } else if (typeof date === 'number' && !isNaN(date)) {
        parsedDate = new Date(+date);
    }
    if (!parsedDate || isNaN(+parsedDate)) {
        window.console.error("Failed to parse x '" + date + "' to Date object");
    }
    return parsedDate;
};

c3_chart_internal_fn.isTabVisible = function () {
    var hidden;
    if (typeof document.hidden !== "undefined") {
        // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
    }

    return document[hidden] ? false : true;
};

c3_chart_internal_fn.isValue = isValue;
c3_chart_internal_fn.isFunction = isFunction;
c3_chart_internal_fn.isString = isString;
c3_chart_internal_fn.isUndefined = isUndefined;
c3_chart_internal_fn.isDefined = isDefined;
c3_chart_internal_fn.ceil10 = ceil10;
c3_chart_internal_fn.asHalfPixel = asHalfPixel;
c3_chart_internal_fn.diffDomain = diffDomain;
c3_chart_internal_fn.isEmpty = isEmpty;
c3_chart_internal_fn.notEmpty = notEmpty;
c3_chart_internal_fn.notEmpty = notEmpty;
c3_chart_internal_fn.getOption = getOption;
c3_chart_internal_fn.hasValue = hasValue;
c3_chart_internal_fn.sanitise = sanitise;
c3_chart_internal_fn.getPathBox = getPathBox;
c3_chart_internal_fn.CLASS = CLASS;

/* jshint ignore:start */

// PhantomJS doesn't have support for Function.prototype.bind, which has caused confusion. Use
// this polyfill to avoid the confusion.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function fNOP() {},
            fBound = function fBound() {
            return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function () {
    "use strict";

    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function (type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        };

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function () {
            if (this._owningPathSegList) this._owningPathSegList.segmentChanged(this);
        };

        window.SVGPathSegClosePath = function (owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        };
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function () {
            return "[object SVGPathSegClosePath]";
        };
        window.SVGPathSegClosePath.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter;
        };
        window.SVGPathSegClosePath.prototype.clone = function () {
            return new window.SVGPathSegClosePath(undefined);
        };

        window.SVGPathSegMovetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function () {
            return "[object SVGPathSegMovetoAbs]";
        };
        window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegMovetoAbs.prototype.clone = function () {
            return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegMovetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function () {
            return "[object SVGPathSegMovetoRel]";
        };
        window.SVGPathSegMovetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegMovetoRel.prototype.clone = function () {
            return new window.SVGPathSegMovetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoAbs]";
        };
        window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegLinetoAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoRel]";
        };
        window.SVGPathSegLinetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegLinetoRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicAbs]";
        };
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicRel]";
        };
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticRel]";
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegArcAbs = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        };
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function () {
            return "[object SVGPathSegArcAbs]";
        };
        window.SVGPathSegArcAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        };
        window.SVGPathSegArcAbs.prototype.clone = function () {
            return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        };
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function get() {
                return this._r1;
            }, set: function set(r1) {
                this._r1 = r1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function get() {
                return this._r2;
            }, set: function set(r2) {
                this._r2 = r2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function get() {
                return this._angle;
            }, set: function set(angle) {
                this._angle = angle;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function get() {
                return this._largeArcFlag;
            }, set: function set(largeArcFlag) {
                this._largeArcFlag = largeArcFlag;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function get() {
                return this._sweepFlag;
            }, set: function set(sweepFlag) {
                this._sweepFlag = sweepFlag;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegArcRel = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        };
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function () {
            return "[object SVGPathSegArcRel]";
        };
        window.SVGPathSegArcRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        };
        window.SVGPathSegArcRel.prototype.clone = function () {
            return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        };
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function get() {
                return this._r1;
            }, set: function set(r1) {
                this._r1 = r1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function get() {
                return this._r2;
            }, set: function set(r2) {
                this._r2 = r2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function get() {
                return this._angle;
            }, set: function set(angle) {
                this._angle = angle;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function get() {
                return this._largeArcFlag;
            }, set: function set(largeArcFlag) {
                this._largeArcFlag = largeArcFlag;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function get() {
                return this._sweepFlag;
            }, set: function set(sweepFlag) {
                this._sweepFlag = sweepFlag;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalAbs]";
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x);
        };
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        };
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalRel]";
        };
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x);
        };
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        };
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalAbs]";
        };
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        };
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalRel]";
        };
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalRel(undefined, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
            return new window.SVGPathSegClosePath(undefined);
        };
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (x, y) {
            return new window.SVGPathSegMovetoAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (x, y) {
            return new window.SVGPathSegMovetoRel(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (x, y) {
            return new window.SVGPathSegLinetoAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (x, y) {
            return new window.SVGPathSegLinetoRel(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1);
        };
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
        };
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (x) {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, x);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (x) {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, x);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (y) {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (y) {
            return new window.SVGPathSegLinetoVerticalRel(undefined, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y);
        };

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function (distance) {
                if (distance === undefined || !isFinite(distance)) throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0) return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength()) break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            };
        }
    }

    if (!("SVGPathSegList" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function (pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        };

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function get() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function get() {
                if (!this._pathSegList) this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        };

        window.SVGPathSegList.prototype._updateListFromPathMutations = function (mutationRecords) {
            if (!this._pathElement) return;
            var hasPathMutations = false;
            mutationRecords.forEach(function (record) {
                if (record.attributeName == "d") hasPathMutations = true;
            });
            if (hasPathMutations) this._list = this._parsePath(this._pathElement.getAttribute("d"));
        };

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        };

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function (pathSeg) {
            this._writeListToPath();
        };

        window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList();

            this._list.forEach(function (pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        };

        window.SVGPathSegList.prototype.initialize = function (newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype._checkValidIndex = function (index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems) throw "INDEX_SIZE_ERR";
        };

        window.SVGPathSegList.prototype.getItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        };

        window.SVGPathSegList.prototype.insertItemBefore = function (newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems) index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype.replaceItem = function (newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype.removeItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        };

        window.SVGPathSegList.prototype.appendItem = function (newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList._pathSegArrayAsString = function (pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function (pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        };

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function (string) {
            if (!string || string.length == 0) return [];

            var owningPathSegList = this;

            var Builder = function Builder() {
                this.pathSegList = [];
            };

            Builder.prototype.appendSegment = function (pathSeg) {
                this.pathSegList.push(pathSeg);
            };

            var Source = function Source(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            };

            Source.prototype._isCurrentSpace = function () {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            };

            Source.prototype._skipOptionalSpaces = function () {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
                    this._currentIndex++;
                }return this._currentIndex < this._endIndex;
            };

            Source.prototype._skipOptionalSpacesOrDelimiter = function () {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            };

            Source.prototype.hasMoreData = function () {
                return this._currentIndex < this._endIndex;
            };

            Source.prototype.peekSegmentType = function () {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            };

            Source.prototype._pathSegTypeFromChar = function (lookahead) {
                switch (lookahead) {
                    case "Z":
                    case "z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            };

            Source.prototype._nextCommandHelper = function (lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS) return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL) return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            };

            Source.prototype.initialCommandIsMoveTo = function () {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData()) return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            };

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function () {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".")
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                    this._currentIndex++;
                } // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += this._string.charAt(this._currentIndex) - "0";
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent) number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex) return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            };

            Source.prototype._parseArcFlag = function () {
                if (this._currentIndex >= this._endIndex) return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0") flag = false;else if (flagChar == "1") flag = true;else return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            };

            Source.prototype.parseSegment = function () {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        this._skipOptionalSpaces();
                        return new window.SVGPathSegClosePath(owningPathSegList);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                    default:
                        throw "Unknown path seg type.";
                }
            };

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo()) return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg) return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        };
    }
})();

/* jshint ignore:end */

c3_chart_fn.axis = function () {};
c3_chart_fn.axis.labels = function (labels) {
    var $$ = this.internal;
    if (arguments.length) {
        Object.keys(labels).forEach(function (axisId) {
            $$.axis.setLabelText(axisId, labels[axisId]);
        });
        $$.axis.updateLabels();
    }
    // TODO: return some values?
};
c3_chart_fn.axis.max = function (max) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length) {
        if ((typeof max === 'undefined' ? 'undefined' : _typeof(max)) === 'object') {
            if (isValue(max.x)) {
                config.axis_x_max = max.x;
            }
            if (isValue(max.y)) {
                config.axis_y_max = max.y;
            }
            if (isValue(max.y2)) {
                config.axis_y2_max = max.y2;
            }
        } else {
            config.axis_y_max = config.axis_y2_max = max;
        }
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    } else {
        return {
            x: config.axis_x_max,
            y: config.axis_y_max,
            y2: config.axis_y2_max
        };
    }
};
c3_chart_fn.axis.min = function (min) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length) {
        if ((typeof min === 'undefined' ? 'undefined' : _typeof(min)) === 'object') {
            if (isValue(min.x)) {
                config.axis_x_min = min.x;
            }
            if (isValue(min.y)) {
                config.axis_y_min = min.y;
            }
            if (isValue(min.y2)) {
                config.axis_y2_min = min.y2;
            }
        } else {
            config.axis_y_min = config.axis_y2_min = min;
        }
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    } else {
        return {
            x: config.axis_x_min,
            y: config.axis_y_min,
            y2: config.axis_y2_min
        };
    }
};
c3_chart_fn.axis.range = function (range) {
    if (arguments.length) {
        if (isDefined(range.max)) {
            this.axis.max(range.max);
        }
        if (isDefined(range.min)) {
            this.axis.min(range.min);
        }
    } else {
        return {
            max: this.axis.max(),
            min: this.axis.min()
        };
    }
};

c3_chart_fn.category = function (i, category) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length > 1) {
        config.axis_x_categories[i] = category;
        $$.redraw();
    }
    return config.axis_x_categories[i];
};
c3_chart_fn.categories = function (categories) {
    var $$ = this.internal,
        config = $$.config;
    if (!arguments.length) {
        return config.axis_x_categories;
    }
    config.axis_x_categories = categories;
    $$.redraw();
    return config.axis_x_categories;
};

c3_chart_fn.resize = function (size) {
    var $$ = this.internal,
        config = $$.config;
    config.size_width = size ? size.width : null;
    config.size_height = size ? size.height : null;
    this.flush();
};

c3_chart_fn.flush = function () {
    var $$ = this.internal;
    $$.updateAndRedraw({ withLegend: true, withTransition: false, withTransitionForTransform: false });
};

c3_chart_fn.destroy = function () {
    var $$ = this.internal;

    window.clearInterval($$.intervalForObserveInserted);

    if ($$.resizeTimeout !== undefined) {
        window.clearTimeout($$.resizeTimeout);
    }

    if (window.detachEvent) {
        window.detachEvent('onresize', $$.resizeFunction);
    } else if (window.removeEventListener) {
        window.removeEventListener('resize', $$.resizeFunction);
    } else {
        var wrapper = window.onresize;
        // check if no one else removed our wrapper and remove our resizeFunction from it
        if (wrapper && wrapper.add && wrapper.remove) {
            wrapper.remove($$.resizeFunction);
        }
    }

    $$.selectChart.classed('c3', false).html("");

    // MEMO: this is needed because the reference of some elements will not be released, then memory leak will happen.
    Object.keys($$).forEach(function (key) {
        $$[key] = null;
    });

    return null;
};

// TODO: fix
c3_chart_fn.color = function (id) {
    var $$ = this.internal;
    return $$.color(id); // more patterns
};

c3_chart_fn.data = function (targetIds) {
    var targets = this.internal.data.targets;
    return typeof targetIds === 'undefined' ? targets : targets.filter(function (t) {
        return [].concat(targetIds).indexOf(t.id) >= 0;
    });
};
c3_chart_fn.data.shown = function (targetIds) {
    return this.internal.filterTargetsToShow(this.data(targetIds));
};
c3_chart_fn.data.values = function (targetId) {
    var targets,
        values = null;
    if (targetId) {
        targets = this.data(targetId);
        values = targets[0] ? targets[0].values.map(function (d) {
            return d.value;
        }) : null;
    }
    return values;
};
c3_chart_fn.data.names = function (names) {
    this.internal.clearLegendItemTextBoxCache();
    return this.internal.updateDataAttributes('names', names);
};
c3_chart_fn.data.colors = function (colors) {
    return this.internal.updateDataAttributes('colors', colors);
};
c3_chart_fn.data.axes = function (axes) {
    return this.internal.updateDataAttributes('axes', axes);
};

c3_chart_fn.flow = function (args) {
    var $$ = this.internal,
        targets,
        data,
        notfoundIds = [],
        orgDataCount = $$.getMaxDataCount(),
        dataCount,
        domain,
        baseTarget,
        baseValue,
        length = 0,
        tail = 0,
        diff,
        to;

    if (args.json) {
        data = $$.convertJsonToData(args.json, args.keys);
    } else if (args.rows) {
        data = $$.convertRowsToData(args.rows);
    } else if (args.columns) {
        data = $$.convertColumnsToData(args.columns);
    } else {
        return;
    }
    targets = $$.convertDataToTargets(data, true);

    // Update/Add data
    $$.data.targets.forEach(function (t) {
        var found = false,
            i,
            j;
        for (i = 0; i < targets.length; i++) {
            if (t.id === targets[i].id) {
                found = true;

                if (t.values[t.values.length - 1]) {
                    tail = t.values[t.values.length - 1].index + 1;
                }
                length = targets[i].values.length;

                for (j = 0; j < length; j++) {
                    targets[i].values[j].index = tail + j;
                    if (!$$.isTimeSeries()) {
                        targets[i].values[j].x = tail + j;
                    }
                }
                t.values = t.values.concat(targets[i].values);

                targets.splice(i, 1);
                break;
            }
        }
        if (!found) {
            notfoundIds.push(t.id);
        }
    });

    // Append null for not found targets
    $$.data.targets.forEach(function (t) {
        var i, j;
        for (i = 0; i < notfoundIds.length; i++) {
            if (t.id === notfoundIds[i]) {
                tail = t.values[t.values.length - 1].index + 1;
                for (j = 0; j < length; j++) {
                    t.values.push({
                        id: t.id,
                        index: tail + j,
                        x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + j) : tail + j,
                        value: null
                    });
                }
            }
        }
    });

    // Generate null values for new target
    if ($$.data.targets.length) {
        targets.forEach(function (t) {
            var i,
                missing = [];
            for (i = $$.data.targets[0].values[0].index; i < tail; i++) {
                missing.push({
                    id: t.id,
                    index: i,
                    x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
                    value: null
                });
            }
            t.values.forEach(function (v) {
                v.index += tail;
                if (!$$.isTimeSeries()) {
                    v.x += tail;
                }
            });
            t.values = missing.concat(t.values);
        });
    }
    $$.data.targets = $$.data.targets.concat(targets); // add remained

    // check data count because behavior needs to change when it's only one
    dataCount = $$.getMaxDataCount();
    baseTarget = $$.data.targets[0];
    baseValue = baseTarget.values[0];

    // Update length to flow if needed
    if (isDefined(args.to)) {
        length = 0;
        to = $$.isTimeSeries() ? $$.parseDate(args.to) : args.to;
        baseTarget.values.forEach(function (v) {
            if (v.x < to) {
                length++;
            }
        });
    } else if (isDefined(args.length)) {
        length = args.length;
    }

    // If only one data, update the domain to flow from left edge of the chart
    if (!orgDataCount) {
        if ($$.isTimeSeries()) {
            if (baseTarget.values.length > 1) {
                diff = baseTarget.values[baseTarget.values.length - 1].x - baseValue.x;
            } else {
                diff = baseValue.x - $$.getXDomain($$.data.targets)[0];
            }
        } else {
            diff = 1;
        }
        domain = [baseValue.x - diff, baseValue.x];
        $$.updateXDomain(null, true, true, false, domain);
    } else if (orgDataCount === 1) {
        if ($$.isTimeSeries()) {
            diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
            domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
            $$.updateXDomain(null, true, true, false, domain);
        }
    }

    // Set targets
    $$.updateTargets($$.data.targets);

    // Redraw with new targets
    $$.redraw({
        flow: {
            index: baseValue.index,
            length: length,
            duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
            done: args.done,
            orgDataCount: orgDataCount
        },
        withLegend: true,
        withTransition: orgDataCount > 1,
        withTrimXDomain: false,
        withUpdateXAxis: true
    });
};

c3_chart_internal_fn.generateFlow = function (args) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;

    return function () {
        var targets = args.targets,
            flow = args.flow,
            drawBar = args.drawBar,
            drawLine = args.drawLine,
            drawArea = args.drawArea,
            cx = args.cx,
            cy = args.cy,
            xv = args.xv,
            xForText = args.xForText,
            yForText = args.yForText,
            duration = args.duration;

        var translateX,
            scaleX = 1,
            transform,
            flowIndex = flow.index,
            flowLength = flow.length,
            flowStart = $$.getValueOnIndex($$.data.targets[0].values, flowIndex),
            flowEnd = $$.getValueOnIndex($$.data.targets[0].values, flowIndex + flowLength),
            orgDomain = $$.x.domain(),
            domain,
            durationForFlow = flow.duration || duration,
            done = flow.done || function () {},
            wait = $$.generateWait();

        var xgrid = $$.xgrid || d3.selectAll([]),
            xgridLines = $$.xgridLines || d3.selectAll([]),
            mainRegion = $$.mainRegion || d3.selectAll([]),
            mainText = $$.mainText || d3.selectAll([]),
            mainBar = $$.mainBar || d3.selectAll([]),
            mainLine = $$.mainLine || d3.selectAll([]),
            mainArea = $$.mainArea || d3.selectAll([]),
            mainCircle = $$.mainCircle || d3.selectAll([]);

        // set flag
        $$.flowing = true;

        // remove head data after rendered
        $$.data.targets.forEach(function (d) {
            d.values.splice(0, flowLength);
        });

        // update x domain to generate axis elements for flow
        domain = $$.updateXDomain(targets, true, true);
        // update elements related to x scale
        if ($$.updateXGrid) {
            $$.updateXGrid(true);
        }

        // generate transform to flow
        if (!flow.orgDataCount) {
            // if empty
            if ($$.data.targets[0].values.length !== 1) {
                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
            } else {
                if ($$.isTimeSeries()) {
                    flowStart = $$.getValueOnIndex($$.data.targets[0].values, 0);
                    flowEnd = $$.getValueOnIndex($$.data.targets[0].values, $$.data.targets[0].values.length - 1);
                    translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
                } else {
                    translateX = diffDomain(domain) / 2;
                }
            }
        } else if (flow.orgDataCount === 1 || (flowStart && flowStart.x) === (flowEnd && flowEnd.x)) {
            translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
        } else {
            if ($$.isTimeSeries()) {
                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
            } else {
                translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
            }
        }
        scaleX = diffDomain(orgDomain) / diffDomain(domain);
        transform = 'translate(' + translateX + ',0) scale(' + scaleX + ',1)';

        $$.hideXGridFocus();

        d3.transition().ease('linear').duration(durationForFlow).each(function () {
            wait.add($$.axes.x.transition().call($$.xAxis));
            wait.add(mainBar.transition().attr('transform', transform));
            wait.add(mainLine.transition().attr('transform', transform));
            wait.add(mainArea.transition().attr('transform', transform));
            wait.add(mainCircle.transition().attr('transform', transform));
            wait.add(mainText.transition().attr('transform', transform));
            wait.add(mainRegion.filter($$.isRegionOnX).transition().attr('transform', transform));
            wait.add(xgrid.transition().attr('transform', transform));
            wait.add(xgridLines.transition().attr('transform', transform));
        }).call(wait, function () {
            var i,
                shapes = [],
                texts = [],
                eventRects = [];

            // remove flowed elements
            if (flowLength) {
                for (i = 0; i < flowLength; i++) {
                    shapes.push('.' + CLASS.shape + '-' + (flowIndex + i));
                    texts.push('.' + CLASS.text + '-' + (flowIndex + i));
                    eventRects.push('.' + CLASS.eventRect + '-' + (flowIndex + i));
                }
                $$.svg.selectAll('.' + CLASS.shapes).selectAll(shapes).remove();
                $$.svg.selectAll('.' + CLASS.texts).selectAll(texts).remove();
                $$.svg.selectAll('.' + CLASS.eventRects).selectAll(eventRects).remove();
                $$.svg.select('.' + CLASS.xgrid).remove();
            }

            // draw again for removing flowed elements and reverting attr
            xgrid.attr('transform', null).attr($$.xgridAttr);
            xgridLines.attr('transform', null);
            xgridLines.select('line').attr("x1", config.axis_rotated ? 0 : xv).attr("x2", config.axis_rotated ? $$.width : xv);
            xgridLines.select('text').attr("x", config.axis_rotated ? $$.width : 0).attr("y", xv);
            mainBar.attr('transform', null).attr("d", drawBar);
            mainLine.attr('transform', null).attr("d", drawLine);
            mainArea.attr('transform', null).attr("d", drawArea);
            mainCircle.attr('transform', null).attr("cx", cx).attr("cy", cy);
            mainText.attr('transform', null).attr('x', xForText).attr('y', yForText).style('fill-opacity', $$.opacityForText.bind($$));
            mainRegion.attr('transform', null);
            mainRegion.select('rect').filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$));

            if (config.interaction_enabled) {
                $$.redrawEventRect();
            }

            // callback for end of flow
            done();

            $$.flowing = false;
        });
    };
};

c3_chart_fn.focus = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))), this.revert();
    this.defocus();
    candidates.classed(CLASS.focused, true).classed(CLASS.defocused, false);
    if ($$.hasArcType()) {
        $$.expandArc(targetIds);
    }
    $$.toggleFocusLegend(targetIds, true);

    $$.focusedTargetIds = targetIds;
    $$.defocusedTargetIds = $$.defocusedTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};

c3_chart_fn.defocus = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))), candidates.classed(CLASS.focused, false).classed(CLASS.defocused, true);
    if ($$.hasArcType()) {
        $$.unexpandArc(targetIds);
    }
    $$.toggleFocusLegend(targetIds, false);

    $$.focusedTargetIds = $$.focusedTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
    $$.defocusedTargetIds = targetIds;
};

c3_chart_fn.revert = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds)); // should be for all targets

    candidates.classed(CLASS.focused, false).classed(CLASS.defocused, false);
    if ($$.hasArcType()) {
        $$.unexpandArc(targetIds);
    }
    if ($$.config.legend_show) {
        $$.showLegend(targetIds.filter($$.isLegendToShow.bind($$)));
        $$.legend.selectAll($$.selectorLegends(targetIds)).filter(function () {
            return $$.d3.select(this).classed(CLASS.legendItemFocused);
        }).classed(CLASS.legendItemFocused, false);
    }

    $$.focusedTargetIds = [];
    $$.defocusedTargetIds = [];
};

c3_chart_fn.xgrids = function (grids) {
    var $$ = this.internal,
        config = $$.config;
    if (!grids) {
        return config.grid_x_lines;
    }
    config.grid_x_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_x_lines;
};
c3_chart_fn.xgrids.add = function (grids) {
    var $$ = this.internal;
    return this.xgrids($$.config.grid_x_lines.concat(grids ? grids : []));
};
c3_chart_fn.xgrids.remove = function (params) {
    // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, true);
};

c3_chart_fn.ygrids = function (grids) {
    var $$ = this.internal,
        config = $$.config;
    if (!grids) {
        return config.grid_y_lines;
    }
    config.grid_y_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_y_lines;
};
c3_chart_fn.ygrids.add = function (grids) {
    var $$ = this.internal;
    return this.ygrids($$.config.grid_y_lines.concat(grids ? grids : []));
};
c3_chart_fn.ygrids.remove = function (params) {
    // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, false);
};

c3_chart_fn.groups = function (groups) {
    var $$ = this.internal,
        config = $$.config;
    if (isUndefined(groups)) {
        return config.data_groups;
    }
    config.data_groups = groups;
    $$.redraw();
    return config.data_groups;
};

c3_chart_fn.legend = function () {};
c3_chart_fn.legend.show = function (targetIds) {
    var $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
};
c3_chart_fn.legend.hide = function (targetIds) {
    var $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
};

c3_chart_fn.load = function (args) {
    var $$ = this.internal,
        config = $$.config;
    // update xs if specified
    if (args.xs) {
        $$.addXs(args.xs);
    }
    // update names if exists
    if ('names' in args) {
        c3_chart_fn.data.names.bind(this)(args.names);
    }
    // update classes if exists
    if ('classes' in args) {
        Object.keys(args.classes).forEach(function (id) {
            config.data_classes[id] = args.classes[id];
        });
    }
    // update categories if exists
    if ('categories' in args && $$.isCategorized()) {
        config.axis_x_categories = args.categories;
    }
    // update axes if exists
    if ('axes' in args) {
        Object.keys(args.axes).forEach(function (id) {
            config.data_axes[id] = args.axes[id];
        });
    }
    // update colors if exists
    if ('colors' in args) {
        Object.keys(args.colors).forEach(function (id) {
            config.data_colors[id] = args.colors[id];
        });
    }
    // use cache if exists
    if ('cacheIds' in args && $$.hasCaches(args.cacheIds)) {
        $$.load($$.getCaches(args.cacheIds), args.done);
        return;
    }
    // unload if needed
    if ('unload' in args) {
        // TODO: do not unload if target will load (included in url/rows/columns)
        $$.unload($$.mapToTargetIds(typeof args.unload === 'boolean' && args.unload ? null : args.unload), function () {
            $$.loadFromArgs(args);
        });
    } else {
        $$.loadFromArgs(args);
    }
};

c3_chart_fn.unload = function (args) {
    var $$ = this.internal;
    args = args || {};
    if (args instanceof Array) {
        args = { ids: args };
    } else if (typeof args === 'string') {
        args = { ids: [args] };
    }
    $$.unload($$.mapToTargetIds(args.ids), function () {
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
        if (args.done) {
            args.done();
        }
    });
};

c3_chart_fn.regions = function (regions) {
    var $$ = this.internal,
        config = $$.config;
    if (!regions) {
        return config.regions;
    }
    config.regions = regions;
    $$.redrawWithoutRescale();
    return config.regions;
};
c3_chart_fn.regions.add = function (regions) {
    var $$ = this.internal,
        config = $$.config;
    if (!regions) {
        return config.regions;
    }
    config.regions = config.regions.concat(regions);
    $$.redrawWithoutRescale();
    return config.regions;
};
c3_chart_fn.regions.remove = function (options) {
    var $$ = this.internal,
        config = $$.config,
        duration,
        classes,
        regions;

    options = options || {};
    duration = $$.getOption(options, "duration", config.transition_duration);
    classes = $$.getOption(options, "classes", [CLASS.region]);

    regions = $$.main.select('.' + CLASS.regions).selectAll(classes.map(function (c) {
        return '.' + c;
    }));
    (duration ? regions.transition().duration(duration) : regions).style('opacity', 0).remove();

    config.regions = config.regions.filter(function (region) {
        var found = false;
        if (!region['class']) {
            return true;
        }
        region['class'].split(' ').forEach(function (c) {
            if (classes.indexOf(c) >= 0) {
                found = true;
            }
        });
        return !found;
    });

    return config.regions;
};

c3_chart_fn.selected = function (targetId) {
    var $$ = this.internal,
        d3 = $$.d3;
    return d3.merge($$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(targetId)).selectAll('.' + CLASS.shape).filter(function () {
        return d3.select(this).classed(CLASS.SELECTED);
    }).map(function (d) {
        return d.map(function (d) {
            var data = d.__data__;return data.data ? data.data : data;
        });
    }));
};
c3_chart_fn.select = function (ids, indices, resetOther) {
    var $$ = this.internal,
        d3 = $$.d3,
        config = $$.config;
    if (!config.data_selection_enabled) {
        return;
    }
    $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
        var shape = d3.select(this),
            id = d.data ? d.data.id : d.id,
            toggle = $$.getToggle(this, d).bind($$),
            isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
            isTargetIndex = !indices || indices.indexOf(i) >= 0,
            isSelected = shape.classed(CLASS.SELECTED);
        // line/area selection not supported yet
        if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
            return;
        }
        if (isTargetId && isTargetIndex) {
            if (config.data_selection_isselectable(d) && !isSelected) {
                toggle(true, shape.classed(CLASS.SELECTED, true), d, i);
            }
        } else if (isDefined(resetOther) && resetOther) {
            if (isSelected) {
                toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
            }
        }
    });
};
c3_chart_fn.unselect = function (ids, indices) {
    var $$ = this.internal,
        d3 = $$.d3,
        config = $$.config;
    if (!config.data_selection_enabled) {
        return;
    }
    $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
        var shape = d3.select(this),
            id = d.data ? d.data.id : d.id,
            toggle = $$.getToggle(this, d).bind($$),
            isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
            isTargetIndex = !indices || indices.indexOf(i) >= 0,
            isSelected = shape.classed(CLASS.SELECTED);
        // line/area selection not supported yet
        if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
            return;
        }
        if (isTargetId && isTargetIndex) {
            if (config.data_selection_isselectable(d)) {
                if (isSelected) {
                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                }
            }
        }
    });
};

c3_chart_fn.show = function (targetIds, options) {
    var $$ = this.internal,
        targets;

    targetIds = $$.mapToTargetIds(targetIds);
    options = options || {};

    $$.removeHiddenTargetIds(targetIds);
    targets = $$.svg.selectAll($$.selectorTargets(targetIds));

    targets.transition().style('opacity', 1, 'important').call($$.endall, function () {
        targets.style('opacity', null).style('opacity', 1);
    });

    if (options.withLegend) {
        $$.showLegend(targetIds);
    }

    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
};

c3_chart_fn.hide = function (targetIds, options) {
    var $$ = this.internal,
        targets;

    targetIds = $$.mapToTargetIds(targetIds);
    options = options || {};

    $$.addHiddenTargetIds(targetIds);
    targets = $$.svg.selectAll($$.selectorTargets(targetIds));

    targets.transition().style('opacity', 0, 'important').call($$.endall, function () {
        targets.style('opacity', null).style('opacity', 0);
    });

    if (options.withLegend) {
        $$.hideLegend(targetIds);
    }

    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
};

c3_chart_fn.toggle = function (targetIds, options) {
    var that = this,
        $$ = this.internal;
    $$.mapToTargetIds(targetIds).forEach(function (targetId) {
        $$.isTargetToShow(targetId) ? that.hide(targetId, options) : that.show(targetId, options);
    });
};

c3_chart_fn.tooltip = function () {};
c3_chart_fn.tooltip.show = function (args) {
    var $$ = this.internal,
        index,
        mouse;

    // determine mouse position on the chart
    if (args.mouse) {
        mouse = args.mouse;
    }

    // determine focus data
    if (args.data) {
        if ($$.isMultipleX()) {
            // if multiple xs, target point will be determined by mouse
            mouse = [$$.x(args.data.x), $$.getYScale(args.data.id)(args.data.value)];
            index = null;
        } else {
            // TODO: when tooltip_grouped = false
            index = isValue(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x);
        }
    } else if (typeof args.x !== 'undefined') {
        index = $$.getIndexByX(args.x);
    } else if (typeof args.index !== 'undefined') {
        index = args.index;
    }

    // emulate mouse events to show
    $$.dispatchEvent('mouseover', index, mouse);
    $$.dispatchEvent('mousemove', index, mouse);

    $$.config.tooltip_onshow.call($$, args.data);
};
c3_chart_fn.tooltip.hide = function () {
    // TODO: get target data by checking the state of focus
    this.internal.dispatchEvent('mouseout', 0);

    this.internal.config.tooltip_onhide.call(this);
};

c3_chart_fn.transform = function (type, targetIds) {
    var $$ = this.internal,
        options = ['pie', 'donut'].indexOf(type) >= 0 ? { withTransform: true } : null;
    $$.transformTo(targetIds, type, options);
};

c3_chart_internal_fn.transformTo = function (targetIds, type, optionsForRedraw) {
    var $$ = this,
        withTransitionForAxis = !$$.hasArcType(),
        options = optionsForRedraw || { withTransitionForAxis: withTransitionForAxis };
    options.withTransitionForTransform = false;
    $$.transiting = false;
    $$.setTargetType(targetIds, type);
    $$.updateTargets($$.data.targets); // this is needed when transforming to arc
    $$.updateAndRedraw(options);
};

c3_chart_fn.x = function (x) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetX($$.data.targets, x);
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    }
    return $$.data.xs;
};
c3_chart_fn.xs = function (xs) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetXs($$.data.targets, xs);
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    }
    return $$.data.xs;
};

c3_chart_fn.zoom = function (domain) {
    var $$ = this.internal;
    if (domain) {
        if ($$.isTimeSeries()) {
            domain = domain.map(function (x) {
                return $$.parseDate(x);
            });
        }
        $$.brush.extent(domain);
        $$.redraw({ withUpdateXDomain: true, withY: $$.config.zoom_rescale });
        $$.config.zoom_onzoom.call(this, $$.x.orgDomain());
    }
    return $$.brush.extent();
};
c3_chart_fn.zoom.enable = function (enabled) {
    var $$ = this.internal;
    $$.config.zoom_enabled = enabled;
    $$.updateAndRedraw();
};
c3_chart_fn.unzoom = function () {
    var $$ = this.internal;
    $$.brush.clear().update();
    $$.redraw({ withUpdateXDomain: true });
};

c3_chart_fn.zoom.max = function (max) {
    var $$ = this.internal,
        config = $$.config,
        d3 = $$.d3;
    if (max === 0 || max) {
        config.zoom_x_max = d3.max([$$.orgXDomain[1], max]);
    } else {
        return config.zoom_x_max;
    }
};

c3_chart_fn.zoom.min = function (min) {
    var $$ = this.internal,
        config = $$.config,
        d3 = $$.d3;
    if (min === 0 || min) {
        config.zoom_x_min = d3.min([$$.orgXDomain[0], min]);
    } else {
        return config.zoom_x_min;
    }
};

c3_chart_fn.zoom.range = function (range) {
    if (arguments.length) {
        if (isDefined(range.max)) {
            this.domain.max(range.max);
        }
        if (isDefined(range.min)) {
            this.domain.min(range.min);
        }
    } else {
        return {
            max: this.domain.max(),
            min: this.domain.min()
        };
    }
};

c3_chart_internal_fn.initPie = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.pie = d3.layout.pie().value(function (d) {
        return d.values.reduce(function (a, b) {
            return a + b.value;
        }, 0);
    });
    $$.pie.sort($$.getOrderFunction() || null);
};

c3_chart_internal_fn.updateRadius = function () {
    var $$ = this,
        config = $$.config,
        w = config.gauge_width || config.donut_width;
    $$.radiusExpanded = Math.min($$.arcWidth, $$.arcHeight) / 2;
    $$.radius = $$.radiusExpanded * 0.95;
    $$.innerRadiusRatio = w ? ($$.radius - w) / $$.radius : 0.6;
    $$.innerRadius = $$.hasType('donut') || $$.hasType('gauge') ? $$.radius * $$.innerRadiusRatio : 0;
};

c3_chart_internal_fn.updateArc = function () {
    var $$ = this;
    $$.svgArc = $$.getSvgArc();
    $$.svgArcExpanded = $$.getSvgArcExpanded();
    $$.svgArcExpandedSub = $$.getSvgArcExpanded(0.98);
};

c3_chart_internal_fn.updateAngle = function (d) {
    var $$ = this,
        config = $$.config,
        found = false,
        index = 0,
        gMin,
        gMax,
        gTic,
        gValue;

    if (!config) {
        return null;
    }

    $$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
        if (!found && t.data.id === d.data.id) {
            found = true;
            d = t;
            d.index = index;
        }
        index++;
    });
    if (isNaN(d.startAngle)) {
        d.startAngle = 0;
    }
    if (isNaN(d.endAngle)) {
        d.endAngle = d.startAngle;
    }
    if ($$.isGaugeType(d.data)) {
        gMin = config.gauge_min;
        gMax = config.gauge_max;
        gTic = Math.PI * (config.gauge_fullCircle ? 2 : 1) / (gMax - gMin);
        gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin;
        d.startAngle = config.gauge_startingAngle;
        d.endAngle = d.startAngle + gTic * gValue;
    }
    return found ? d : null;
};

c3_chart_internal_fn.getSvgArc = function () {
    var $$ = this,
        arc = $$.d3.svg.arc().outerRadius($$.radius).innerRadius($$.innerRadius),
        newArc = function newArc(d, withoutUpdate) {
        var updated;
        if (withoutUpdate) {
            return arc(d);
        } // for interpolate
        updated = $$.updateAngle(d);
        return updated ? arc(updated) : "M 0 0";
    };
    // TODO: extends all function
    newArc.centroid = arc.centroid;
    return newArc;
};

c3_chart_internal_fn.getSvgArcExpanded = function (rate) {
    var $$ = this,
        arc = $$.d3.svg.arc().outerRadius($$.radiusExpanded * (rate ? rate : 1)).innerRadius($$.innerRadius);
    return function (d) {
        var updated = $$.updateAngle(d);
        return updated ? arc(updated) : "M 0 0";
    };
};

c3_chart_internal_fn.getArc = function (d, withoutUpdate, force) {
    return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
};

c3_chart_internal_fn.transformForArcLabel = function (d) {
    var $$ = this,
        config = $$.config,
        updated = $$.updateAngle(d),
        c,
        x,
        y,
        h,
        ratio,
        translate = "";
    if (updated && !$$.hasType('gauge')) {
        c = this.svgArc.centroid(updated);
        x = isNaN(c[0]) ? 0 : c[0];
        y = isNaN(c[1]) ? 0 : c[1];
        h = Math.sqrt(x * x + y * y);
        if ($$.hasType('donut') && config.donut_label_ratio) {
            ratio = isFunction(config.donut_label_ratio) ? config.donut_label_ratio(d, $$.radius, h) : config.donut_label_ratio;
        } else if ($$.hasType('pie') && config.pie_label_ratio) {
            ratio = isFunction(config.pie_label_ratio) ? config.pie_label_ratio(d, $$.radius, h) : config.pie_label_ratio;
        } else {
            ratio = $$.radius && h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0;
        }
        translate = "translate(" + x * ratio + ',' + y * ratio + ")";
    }
    return translate;
};

c3_chart_internal_fn.getArcRatio = function (d) {
    var $$ = this,
        config = $$.config,
        whole = Math.PI * ($$.hasType('gauge') && !config.gauge_fullCircle ? 1 : 2);
    return d ? (d.endAngle - d.startAngle) / whole : null;
};

c3_chart_internal_fn.convertToArcData = function (d) {
    return this.addName({
        id: d.data.id,
        value: d.value,
        ratio: this.getArcRatio(d),
        index: d.index
    });
};

c3_chart_internal_fn.textForArcLabel = function (d) {
    var $$ = this,
        updated,
        value,
        ratio,
        id,
        format;
    if (!$$.shouldShowArcLabel()) {
        return "";
    }
    updated = $$.updateAngle(d);
    value = updated ? updated.value : null;
    ratio = $$.getArcRatio(updated);
    id = d.data.id;
    if (!$$.hasType('gauge') && !$$.meetsArcLabelThreshold(ratio)) {
        return "";
    }
    format = $$.getArcLabelFormat();
    return format ? format(value, ratio, id) : $$.defaultArcValueFormat(value, ratio);
};

c3_chart_internal_fn.textForGaugeMinMax = function (value, isMax) {
    var $$ = this,
        format = $$.getGaugeLabelExtents();

    return format ? format(value, isMax) : value;
};

c3_chart_internal_fn.expandArc = function (targetIds) {
    var $$ = this,
        interval;

    // MEMO: avoid to cancel transition
    if ($$.transiting) {
        interval = window.setInterval(function () {
            if (!$$.transiting) {
                window.clearInterval(interval);
                if ($$.legend.selectAll('.c3-legend-item-focused').size() > 0) {
                    $$.expandArc(targetIds);
                }
            }
        }, 10);
        return;
    }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).each(function (d) {
        if (!$$.shouldExpand(d.data.id)) {
            return;
        }
        $$.d3.select(this).selectAll('path').transition().duration($$.expandDuration(d.data.id)).attr("d", $$.svgArcExpanded).transition().duration($$.expandDuration(d.data.id) * 2).attr("d", $$.svgArcExpandedSub).each(function (d) {
            if ($$.isDonutType(d.data)) {
                // callback here
            }
        });
    });
};

c3_chart_internal_fn.unexpandArc = function (targetIds) {
    var $$ = this;

    if ($$.transiting) {
        return;
    }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).selectAll('path').transition().duration(function (d) {
        return $$.expandDuration(d.data.id);
    }).attr("d", $$.svgArc);
    $$.svg.selectAll('.' + CLASS.arc);
};

c3_chart_internal_fn.expandDuration = function (id) {
    var $$ = this,
        config = $$.config;

    if ($$.isDonutType(id)) {
        return config.donut_expand_duration;
    } else if ($$.isGaugeType(id)) {
        return config.gauge_expand_duration;
    } else if ($$.isPieType(id)) {
        return config.pie_expand_duration;
    } else {
        return 50;
    }
};

c3_chart_internal_fn.shouldExpand = function (id) {
    var $$ = this,
        config = $$.config;
    return $$.isDonutType(id) && config.donut_expand || $$.isGaugeType(id) && config.gauge_expand || $$.isPieType(id) && config.pie_expand;
};

c3_chart_internal_fn.shouldShowArcLabel = function () {
    var $$ = this,
        config = $$.config,
        shouldShow = true;
    if ($$.hasType('donut')) {
        shouldShow = config.donut_label_show;
    } else if ($$.hasType('pie')) {
        shouldShow = config.pie_label_show;
    }
    // when gauge, always true
    return shouldShow;
};

c3_chart_internal_fn.meetsArcLabelThreshold = function (ratio) {
    var $$ = this,
        config = $$.config,
        threshold = $$.hasType('donut') ? config.donut_label_threshold : config.pie_label_threshold;
    return ratio >= threshold;
};

c3_chart_internal_fn.getArcLabelFormat = function () {
    var $$ = this,
        config = $$.config,
        format = config.pie_label_format;
    if ($$.hasType('gauge')) {
        format = config.gauge_label_format;
    } else if ($$.hasType('donut')) {
        format = config.donut_label_format;
    }
    return format;
};

c3_chart_internal_fn.getGaugeLabelExtents = function () {
    var $$ = this,
        config = $$.config;
    return config.gauge_label_extents;
};

c3_chart_internal_fn.getArcTitle = function () {
    var $$ = this;
    return $$.hasType('donut') ? $$.config.donut_title : "";
};

c3_chart_internal_fn.updateTargetsForArc = function (targets) {
    var $$ = this,
        main = $$.main,
        mainPieUpdate,
        mainPieEnter,
        classChartArc = $$.classChartArc.bind($$),
        classArcs = $$.classArcs.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainPieUpdate = main.select('.' + CLASS.chartArcs).selectAll('.' + CLASS.chartArc).data($$.pie(targets)).attr("class", function (d) {
        return classChartArc(d) + classFocus(d.data);
    });
    mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc);
    mainPieEnter.append('g').attr('class', classArcs);
    mainPieEnter.append("text").attr("dy", $$.hasType('gauge') ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none");
    // MEMO: can not keep same color..., but not bad to update color in redraw
    //mainPieUpdate.exit().remove();
};

c3_chart_internal_fn.initArc = function () {
    var $$ = this;
    $$.arcs = $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
    $$.arcs.append('text').attr('class', CLASS.chartArcsTitle).style("text-anchor", "middle").text($$.getArcTitle());
};

c3_chart_internal_fn.redrawArc = function (duration, durationForExit, withTransform) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        main = $$.main,
        mainArc;
    mainArc = main.selectAll('.' + CLASS.arcs).selectAll('.' + CLASS.arc).data($$.arcData.bind($$));
    mainArc.enter().append('path').attr("class", $$.classArc.bind($$)).style("fill", function (d) {
        return $$.color(d.data);
    }).style("cursor", function (d) {
        return config.interaction_enabled && config.data_selection_isselectable(d) ? "pointer" : null;
    }).each(function (d) {
        if ($$.isGaugeType(d.data)) {
            d.startAngle = d.endAngle = config.gauge_startingAngle;
        }
        this._current = d;
    });
    mainArc.attr("transform", function (d) {
        return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
    }).on('mouseover', config.interaction_enabled ? function (d) {
        var updated, arcData;
        if ($$.transiting) {
            // skip while transiting
            return;
        }
        updated = $$.updateAngle(d);
        if (updated) {
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.expandArc(updated.data.id);
            $$.api.focus(updated.data.id);
            $$.toggleFocusLegend(updated.data.id, true);
            $$.config.data_onmouseover(arcData, this);
        }
    } : null).on('mousemove', config.interaction_enabled ? function (d) {
        var updated = $$.updateAngle(d),
            arcData,
            selectedData;
        if (updated) {
            arcData = $$.convertToArcData(updated), selectedData = [arcData];
            $$.showTooltip(selectedData, this);
        }
    } : null).on('mouseout', config.interaction_enabled ? function (d) {
        var updated, arcData;
        if ($$.transiting) {
            // skip while transiting
            return;
        }
        updated = $$.updateAngle(d);
        if (updated) {
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.unexpandArc(updated.data.id);
            $$.api.revert();
            $$.revertLegend();
            $$.hideTooltip();
            $$.config.data_onmouseout(arcData, this);
        }
    } : null).on('click', config.interaction_enabled ? function (d, i) {
        var updated = $$.updateAngle(d),
            arcData;
        if (updated) {
            arcData = $$.convertToArcData(updated);
            if ($$.toggleShape) {
                $$.toggleShape(this, arcData, i);
            }
            $$.config.data_onclick.call($$.api, arcData, this);
        }
    } : null).each(function () {
        $$.transiting = true;
    }).transition().duration(duration).attrTween("d", function (d) {
        var updated = $$.updateAngle(d),
            interpolate;
        if (!updated) {
            return function () {
                return "M 0 0";
            };
        }
        //                if (this._current === d) {
        //                    this._current = {
        //                        startAngle: Math.PI*2,
        //                        endAngle: Math.PI*2,
        //                    };
        //                }
        if (isNaN(this._current.startAngle)) {
            this._current.startAngle = 0;
        }
        if (isNaN(this._current.endAngle)) {
            this._current.endAngle = this._current.startAngle;
        }
        interpolate = d3.interpolate(this._current, updated);
        this._current = interpolate(0);
        return function (t) {
            var interpolated = interpolate(t);
            interpolated.data = d.data; // data.id will be updated by interporator
            return $$.getArc(interpolated, true);
        };
    }).attr("transform", withTransform ? "scale(1)" : "").style("fill", function (d) {
        return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
    } // Where gauge reading color would receive customization.
    ).call($$.endall, function () {
        $$.transiting = false;
    });
    mainArc.exit().transition().duration(durationForExit).style('opacity', 0).remove();
    main.selectAll('.' + CLASS.chartArc).select('text').style("opacity", 0).attr('class', function (d) {
        return $$.isGaugeType(d.data) ? CLASS.gaugeValue : '';
    }).text($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style('font-size', function (d) {
        return $$.isGaugeType(d.data) ? Math.round($$.radius / 5) + 'px' : '';
    }).transition().duration(duration).style("opacity", function (d) {
        return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? 1 : 0;
    });
    main.select('.' + CLASS.chartArcsTitle).style("opacity", $$.hasType('donut') || $$.hasType('gauge') ? 1 : 0);

    if ($$.hasType('gauge')) {
        $$.arcs.select('.' + CLASS.chartArcsBackground).attr("d", function () {
            var d = {
                data: [{ value: config.gauge_max }],
                startAngle: config.gauge_startingAngle,
                endAngle: -1 * config.gauge_startingAngle
            };
            return $$.getArc(d, true, true);
        });
        $$.arcs.select('.' + CLASS.chartArcsGaugeUnit).attr("dy", ".75em").text(config.gauge_label_show ? config.gauge_units : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMin).attr("dx", -1 * ($$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_min, false) : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMax).attr("dx", $$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_max, true) : '');
    }
};
c3_chart_internal_fn.initGauge = function () {
    var arcs = this.arcs;
    if (this.hasType('gauge')) {
        arcs.append('path').attr("class", CLASS.chartArcsBackground);
        arcs.append("text").attr("class", CLASS.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none");
        arcs.append("text").attr("class", CLASS.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none");
        arcs.append("text").attr("class", CLASS.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none");
    }
};
c3_chart_internal_fn.getGaugeLabelHeight = function () {
    return this.config.gauge_label_show ? 20 : 0;
};

c3_chart_internal_fn.hasCaches = function (ids) {
    for (var i = 0; i < ids.length; i++) {
        if (!(ids[i] in this.cache)) {
            return false;
        }
    }
    return true;
};
c3_chart_internal_fn.addCache = function (id, target) {
    this.cache[id] = this.cloneTarget(target);
};
c3_chart_internal_fn.getCaches = function (ids) {
    var targets = [],
        i;
    for (i = 0; i < ids.length; i++) {
        if (ids[i] in this.cache) {
            targets.push(this.cloneTarget(this.cache[ids[i]]));
        }
    }
    return targets;
};

c3_chart_internal_fn.categoryName = function (i) {
    var config = this.config;
    return i < config.axis_x_categories.length ? config.axis_x_categories[i] : i;
};

c3_chart_internal_fn.generateClass = function (prefix, targetId) {
    return " " + prefix + " " + prefix + this.getTargetSelectorSuffix(targetId);
};
c3_chart_internal_fn.classText = function (d) {
    return this.generateClass(CLASS.text, d.index);
};
c3_chart_internal_fn.classTexts = function (d) {
    return this.generateClass(CLASS.texts, d.id);
};
c3_chart_internal_fn.classShape = function (d) {
    return this.generateClass(CLASS.shape, d.index);
};
c3_chart_internal_fn.classShapes = function (d) {
    return this.generateClass(CLASS.shapes, d.id);
};
c3_chart_internal_fn.classLine = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.line, d.id);
};
c3_chart_internal_fn.classLines = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.lines, d.id);
};
c3_chart_internal_fn.classCircle = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.circle, d.index);
};
c3_chart_internal_fn.classCircles = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.circles, d.id);
};
c3_chart_internal_fn.classBar = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.bar, d.index);
};
c3_chart_internal_fn.classBars = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.bars, d.id);
};
c3_chart_internal_fn.classArc = function (d) {
    return this.classShape(d.data) + this.generateClass(CLASS.arc, d.data.id);
};
c3_chart_internal_fn.classArcs = function (d) {
    return this.classShapes(d.data) + this.generateClass(CLASS.arcs, d.data.id);
};
c3_chart_internal_fn.classArea = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.area, d.id);
};
c3_chart_internal_fn.classAreas = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.areas, d.id);
};
c3_chart_internal_fn.classRegion = function (d, i) {
    return this.generateClass(CLASS.region, i) + ' ' + ('class' in d ? d['class'] : '');
};
c3_chart_internal_fn.classEvent = function (d) {
    return this.generateClass(CLASS.eventRect, d.index);
};
c3_chart_internal_fn.classTarget = function (id) {
    var $$ = this;
    var additionalClassSuffix = $$.config.data_classes[id],
        additionalClass = '';
    if (additionalClassSuffix) {
        additionalClass = ' ' + CLASS.target + '-' + additionalClassSuffix;
    }
    return $$.generateClass(CLASS.target, id) + additionalClass;
};
c3_chart_internal_fn.classFocus = function (d) {
    return this.classFocused(d) + this.classDefocused(d);
};
c3_chart_internal_fn.classFocused = function (d) {
    return ' ' + (this.focusedTargetIds.indexOf(d.id) >= 0 ? CLASS.focused : '');
};
c3_chart_internal_fn.classDefocused = function (d) {
    return ' ' + (this.defocusedTargetIds.indexOf(d.id) >= 0 ? CLASS.defocused : '');
};
c3_chart_internal_fn.classChartText = function (d) {
    return CLASS.chartText + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartLine = function (d) {
    return CLASS.chartLine + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartBar = function (d) {
    return CLASS.chartBar + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartArc = function (d) {
    return CLASS.chartArc + this.classTarget(d.data.id);
};
c3_chart_internal_fn.getTargetSelectorSuffix = function (targetId) {
    return targetId || targetId === 0 ? ('-' + targetId).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, '-') : '';
};
c3_chart_internal_fn.selectorTarget = function (id, prefix) {
    return (prefix || '') + '.' + CLASS.target + this.getTargetSelectorSuffix(id);
};
c3_chart_internal_fn.selectorTargets = function (ids, prefix) {
    var $$ = this;
    ids = ids || [];
    return ids.length ? ids.map(function (id) {
        return $$.selectorTarget(id, prefix);
    }) : null;
};
c3_chart_internal_fn.selectorLegend = function (id) {
    return '.' + CLASS.legendItem + this.getTargetSelectorSuffix(id);
};
c3_chart_internal_fn.selectorLegends = function (ids) {
    var $$ = this;
    return ids && ids.length ? ids.map(function (id) {
        return $$.selectorLegend(id);
    }) : null;
};

c3_chart_internal_fn.getClipPath = function (id) {
    var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
    return "url(" + (isIE9 ? "" : document.URL.split('#')[0]) + "#" + id + ")";
};
c3_chart_internal_fn.appendClip = function (parent, id) {
    return parent.append("clipPath").attr("id", id).append("rect");
};
c3_chart_internal_fn.getAxisClipX = function (forHorizontal) {
    // axis line width + padding for left
    var left = Math.max(30, this.margin.left);
    return forHorizontal ? -(1 + left) : -(left - 1);
};
c3_chart_internal_fn.getAxisClipY = function (forHorizontal) {
    return forHorizontal ? -20 : -this.margin.top;
};
c3_chart_internal_fn.getXAxisClipX = function () {
    var $$ = this;
    return $$.getAxisClipX(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getXAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipX = function () {
    var $$ = this;
    return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY($$.config.axis_rotated);
};
c3_chart_internal_fn.getAxisClipWidth = function (forHorizontal) {
    var $$ = this,
        left = Math.max(30, $$.margin.left),
        right = Math.max(30, $$.margin.right);
    // width + axis line width + padding for left/right
    return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
};
c3_chart_internal_fn.getAxisClipHeight = function (forHorizontal) {
    // less than 20 is not enough to show the axis label 'outer' without legend
    return (forHorizontal ? this.margin.bottom : this.margin.top + this.height) + 20;
};
c3_chart_internal_fn.getXAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getXAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
};
c3_chart_internal_fn.getYAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight($$.config.axis_rotated);
};

c3_chart_internal_fn.generateColor = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        colors = config.data_colors,
        pattern = notEmpty(config.color_pattern) ? config.color_pattern : d3.scale.category10().range(),
        callback = config.data_color,
        ids = [];

    return function (d) {
        var id = d.id || d.data && d.data.id || d,
            color;

        // if callback function is provided
        if (colors[id] instanceof Function) {
            color = colors[id](d);
        }
        // if specified, choose that color
        else if (colors[id]) {
                color = colors[id];
            }
            // if not specified, choose from pattern
            else {
                    if (ids.indexOf(id) < 0) {
                        ids.push(id);
                    }
                    color = pattern[ids.indexOf(id) % pattern.length];
                    colors[id] = color;
                }
        return callback instanceof Function ? callback(color, d) : color;
    };
};
c3_chart_internal_fn.generateLevelColor = function () {
    var $$ = this,
        config = $$.config,
        colors = config.color_pattern,
        threshold = config.color_threshold,
        asValue = threshold.unit === 'value',
        values = threshold.values && threshold.values.length ? threshold.values : [],
        max = threshold.max || 100;
    return notEmpty(config.color_threshold) ? function (value) {
        var i,
            v,
            color = colors[colors.length - 1];
        for (i = 0; i < values.length; i++) {
            v = asValue ? value : value * 100 / max;
            if (v < values[i]) {
                color = colors[i];
                break;
            }
        }
        return color;
    } : null;
};

c3_chart_internal_fn.getDefaultConfig = function () {
    var config = {
        bindto: '#chart',
        svg_classname: undefined,
        size_width: undefined,
        size_height: undefined,
        padding_left: undefined,
        padding_right: undefined,
        padding_top: undefined,
        padding_bottom: undefined,
        resize_auto: true,
        zoom_enabled: false,
        zoom_extent: undefined,
        zoom_privileged: false,
        zoom_rescale: false,
        zoom_onzoom: function zoom_onzoom() {},
        zoom_onzoomstart: function zoom_onzoomstart() {},
        zoom_onzoomend: function zoom_onzoomend() {},
        zoom_x_min: undefined,
        zoom_x_max: undefined,
        interaction_brighten: true,
        interaction_enabled: true,
        onmouseover: function onmouseover() {},
        onmouseout: function onmouseout() {},
        onresize: function onresize() {},
        onresized: function onresized() {},
        oninit: function oninit() {},
        onrendered: function onrendered() {},
        transition_duration: 350,
        data_x: undefined,
        data_xs: {},
        data_xFormat: '%Y-%m-%d',
        data_xLocaltime: true,
        data_xSort: true,
        data_idConverter: function data_idConverter(id) {
            return id;
        },
        data_names: {},
        data_classes: {},
        data_groups: [],
        data_axes: {},
        data_type: undefined,
        data_types: {},
        data_labels: {},
        data_order: 'desc',
        data_regions: {},
        data_color: undefined,
        data_colors: {},
        data_hide: false,
        data_filter: undefined,
        data_selection_enabled: false,
        data_selection_grouped: false,
        data_selection_isselectable: function data_selection_isselectable() {
            return true;
        },
        data_selection_multiple: true,
        data_selection_draggable: false,
        data_onclick: function data_onclick() {},
        data_onmouseover: function data_onmouseover() {},
        data_onmouseout: function data_onmouseout() {},
        data_onselected: function data_onselected() {},
        data_onunselected: function data_onunselected() {},
        data_url: undefined,
        data_headers: undefined,
        data_json: undefined,
        data_rows: undefined,
        data_columns: undefined,
        data_mimeType: undefined,
        data_keys: undefined,
        // configuration for no plot-able data supplied.
        data_empty_label_text: "",
        // subchart
        subchart_show: false,
        subchart_size_height: 60,
        subchart_axis_x_show: true,
        subchart_onbrush: function subchart_onbrush() {},
        // color
        color_pattern: [],
        color_threshold: {},
        // legend
        legend_show: true,
        legend_hide: false,
        legend_position: 'bottom',
        legend_inset_anchor: 'top-left',
        legend_inset_x: 10,
        legend_inset_y: 0,
        legend_inset_step: undefined,
        legend_item_onclick: undefined,
        legend_item_onmouseover: undefined,
        legend_item_onmouseout: undefined,
        legend_equally: false,
        legend_padding: 0,
        legend_item_tile_width: 10,
        legend_item_tile_height: 10,
        // axis
        axis_rotated: false,
        axis_x_show: true,
        axis_x_type: 'indexed',
        axis_x_localtime: true,
        axis_x_categories: [],
        axis_x_tick_centered: false,
        axis_x_tick_format: undefined,
        axis_x_tick_culling: {},
        axis_x_tick_culling_max: 10,
        axis_x_tick_count: undefined,
        axis_x_tick_fit: true,
        axis_x_tick_values: null,
        axis_x_tick_rotate: 0,
        axis_x_tick_outer: true,
        axis_x_tick_multiline: true,
        axis_x_tick_width: null,
        axis_x_max: undefined,
        axis_x_min: undefined,
        axis_x_padding: {},
        axis_x_height: undefined,
        axis_x_extent: undefined,
        axis_x_label: {},
        axis_y_show: true,
        axis_y_type: undefined,
        axis_y_max: undefined,
        axis_y_min: undefined,
        axis_y_inverted: false,
        axis_y_center: undefined,
        axis_y_inner: undefined,
        axis_y_label: {},
        axis_y_tick_format: undefined,
        axis_y_tick_outer: true,
        axis_y_tick_values: null,
        axis_y_tick_rotate: 0,
        axis_y_tick_count: undefined,
        axis_y_tick_time_value: undefined,
        axis_y_tick_time_interval: undefined,
        axis_y_padding: {},
        axis_y_default: undefined,
        axis_y2_show: false,
        axis_y2_max: undefined,
        axis_y2_min: undefined,
        axis_y2_inverted: false,
        axis_y2_center: undefined,
        axis_y2_inner: undefined,
        axis_y2_label: {},
        axis_y2_tick_format: undefined,
        axis_y2_tick_outer: true,
        axis_y2_tick_values: null,
        axis_y2_tick_count: undefined,
        axis_y2_padding: {},
        axis_y2_default: undefined,
        // grid
        grid_x_show: false,
        grid_x_type: 'tick',
        grid_x_lines: [],
        grid_y_show: false,
        // not used
        // grid_y_type: 'tick',
        grid_y_lines: [],
        grid_y_ticks: 10,
        grid_focus_show: true,
        grid_lines_front: true,
        // point - point of each data
        point_show: true,
        point_r: 2.5,
        point_sensitivity: 10,
        point_focus_expand_enabled: true,
        point_focus_expand_r: undefined,
        point_select_r: undefined,
        // line
        line_connectNull: false,
        line_step_type: 'step',
        // bar
        bar_width: undefined,
        bar_width_ratio: 0.6,
        bar_width_max: undefined,
        bar_zerobased: true,
        bar_space: 0,
        // area
        area_zerobased: true,
        area_above: false,
        // pie
        pie_label_show: true,
        pie_label_format: undefined,
        pie_label_threshold: 0.05,
        pie_label_ratio: undefined,
        pie_expand: {},
        pie_expand_duration: 50,
        // gauge
        gauge_fullCircle: false,
        gauge_label_show: true,
        gauge_label_format: undefined,
        gauge_min: 0,
        gauge_max: 100,
        gauge_startingAngle: -1 * Math.PI / 2,
        gauge_label_extents: undefined,
        gauge_units: undefined,
        gauge_width: undefined,
        gauge_expand: {},
        gauge_expand_duration: 50,
        // donut
        donut_label_show: true,
        donut_label_format: undefined,
        donut_label_threshold: 0.05,
        donut_label_ratio: undefined,
        donut_width: undefined,
        donut_title: "",
        donut_expand: {},
        donut_expand_duration: 50,
        // spline
        spline_interpolation_type: 'cardinal',
        // region - region to change style
        regions: [],
        // tooltip - show when mouseover on each data
        tooltip_show: true,
        tooltip_grouped: true,
        tooltip_order: undefined,
        tooltip_format_title: undefined,
        tooltip_format_name: undefined,
        tooltip_format_value: undefined,
        tooltip_position: undefined,
        tooltip_contents: function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
            return this.getTooltipContent ? this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) : '';
        },
        tooltip_init_show: false,
        tooltip_init_x: 0,
        tooltip_init_position: { top: '0px', left: '50px' },
        tooltip_onshow: function tooltip_onshow() {},
        tooltip_onhide: function tooltip_onhide() {},
        // title
        title_text: undefined,
        title_padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        title_position: 'top-center'
    };

    Object.keys(this.additionalConfig).forEach(function (key) {
        config[key] = this.additionalConfig[key];
    }, this);

    return config;
};
c3_chart_internal_fn.additionalConfig = {};

c3_chart_internal_fn.loadConfig = function (config) {
    var this_config = this.config,
        target,
        keys,
        read;
    function find() {
        var key = keys.shift();
        //        console.log("key =>", key, ", target =>", target);
        if (key && target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && key in target) {
            target = target[key];
            return find();
        } else if (!key) {
            return target;
        } else {
            return undefined;
        }
    }
    Object.keys(this_config).forEach(function (key) {
        target = config;
        keys = key.split('_');
        read = find();
        //        console.log("CONFIG : ", key, read);
        if (isDefined(read)) {
            this_config[key] = read;
        }
    });
};

c3_chart_internal_fn.convertUrlToData = function (url, mimeType, headers, keys, done) {
    var $$ = this,
        type = mimeType ? mimeType : 'csv';
    var req = $$.d3.xhr(url);
    if (headers) {
        Object.keys(headers).forEach(function (header) {
            req.header(header, headers[header]);
        });
    }
    req.get(function (error, data) {
        var d;
        var dataResponse = data.response || data.responseText; // Fixes IE9 XHR issue; see #1345
        if (!data) {
            throw new Error(error.responseURL + ' ' + error.status + ' (' + error.statusText + ')');
        }
        if (type === 'json') {
            d = $$.convertJsonToData(JSON.parse(dataResponse), keys);
        } else if (type === 'tsv') {
            d = $$.convertTsvToData(dataResponse);
        } else {
            d = $$.convertCsvToData(dataResponse);
        }
        done.call($$, d);
    });
};
c3_chart_internal_fn.convertXsvToData = function (xsv, parser) {
    var rows = parser.parseRows(xsv),
        d;
    if (rows.length === 1) {
        d = [{}];
        rows[0].forEach(function (id) {
            d[0][id] = null;
        });
    } else {
        d = parser.parse(xsv);
    }
    return d;
};
c3_chart_internal_fn.convertCsvToData = function (csv) {
    return this.convertXsvToData(csv, this.d3.csv);
};
c3_chart_internal_fn.convertTsvToData = function (tsv) {
    return this.convertXsvToData(tsv, this.d3.tsv);
};
c3_chart_internal_fn.convertJsonToData = function (json, keys) {
    var $$ = this,
        new_rows = [],
        targetKeys,
        data;
    if (keys) {
        // when keys specified, json would be an array that includes objects
        if (keys.x) {
            targetKeys = keys.value.concat(keys.x);
            $$.config.data_x = keys.x;
        } else {
            targetKeys = keys.value;
        }
        new_rows.push(targetKeys);
        json.forEach(function (o) {
            var new_row = [];
            targetKeys.forEach(function (key) {
                // convert undefined to null because undefined data will be removed in convertDataToTargets()
                var v = $$.findValueInJson(o, key);
                if (isUndefined(v)) {
                    v = null;
                }
                new_row.push(v);
            });
            new_rows.push(new_row);
        });
        data = $$.convertRowsToData(new_rows);
    } else {
        Object.keys(json).forEach(function (key) {
            new_rows.push([key].concat(json[key]));
        });
        data = $$.convertColumnsToData(new_rows);
    }
    return data;
};
c3_chart_internal_fn.findValueInJson = function (object, path) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties (replace [] with .)
    path = path.replace(/^\./, ''); // strip a leading dot
    var pathArray = path.split('.');
    for (var i = 0; i < pathArray.length; ++i) {
        var k = pathArray[i];
        if (k in object) {
            object = object[k];
        } else {
            return;
        }
    }
    return object;
};

/**
 * Converts the rows to normalized data.
 * @param {any[][]} rows The row data
 * @return {Object[]}
 */
c3_chart_internal_fn.convertRowsToData = function (rows) {
    var newRows = [];
    var keys = rows[0];

    for (var i = 1; i < rows.length; i++) {
        var newRow = {};
        for (var j = 0; j < rows[i].length; j++) {
            if (isUndefined(rows[i][j])) {
                throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
            }
            newRow[keys[j]] = rows[i][j];
        }
        newRows.push(newRow);
    }
    return newRows;
};

/**
 * Converts the columns to normalized data.
 * @param {any[][]} columns The column data
 * @return {Object[]}
 */
c3_chart_internal_fn.convertColumnsToData = function (columns) {
    var newRows = [];

    for (var i = 0; i < columns.length; i++) {
        var key = columns[i][0];
        for (var j = 1; j < columns[i].length; j++) {
            if (isUndefined(newRows[j - 1])) {
                newRows[j - 1] = {};
            }
            if (isUndefined(columns[i][j])) {
                throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
            }
            newRows[j - 1][key] = columns[i][j];
        }
    }

    return newRows;
};

c3_chart_internal_fn.convertDataToTargets = function (data, appendXs) {
    var $$ = this,
        config = $$.config,
        ids = $$.d3.keys(data[0]).filter($$.isNotX, $$),
        xs = $$.d3.keys(data[0]).filter($$.isX, $$),
        targets;

    // save x for update data by load when custom x and c3.x API
    ids.forEach(function (id) {
        var xKey = $$.getXKey(id);

        if ($$.isCustomX() || $$.isTimeSeries()) {
            // if included in input data
            if (xs.indexOf(xKey) >= 0) {
                $$.data.xs[id] = (appendXs && $$.data.xs[id] ? $$.data.xs[id] : []).concat(data.map(function (d) {
                    return d[xKey];
                }).filter(isValue).map(function (rawX, i) {
                    return $$.generateTargetX(rawX, id, i);
                }));
            }
            // if not included in input data, find from preloaded data of other id's x
            else if (config.data_x) {
                    $$.data.xs[id] = $$.getOtherTargetXs();
                }
                // if not included in input data, find from preloaded data
                else if (notEmpty(config.data_xs)) {
                        $$.data.xs[id] = $$.getXValuesOfXKey(xKey, $$.data.targets);
                    }
            // MEMO: if no x included, use same x of current will be used
        } else {
            $$.data.xs[id] = data.map(function (d, i) {
                return i;
            });
        }
    });

    // check x is defined
    ids.forEach(function (id) {
        if (!$$.data.xs[id]) {
            throw new Error('x is not defined for id = "' + id + '".');
        }
    });

    // convert to target
    targets = ids.map(function (id, index) {
        var convertedId = config.data_idConverter(id);
        return {
            id: convertedId,
            id_org: id,
            values: data.map(function (d, i) {
                var xKey = $$.getXKey(id),
                    rawX = d[xKey],
                    value = d[id] !== null && !isNaN(d[id]) ? +d[id] : null,
                    x;
                // use x as categories if custom x and categorized
                if ($$.isCustomX() && $$.isCategorized() && !isUndefined(rawX)) {
                    if (index === 0 && i === 0) {
                        config.axis_x_categories = [];
                    }
                    x = config.axis_x_categories.indexOf(rawX);
                    if (x === -1) {
                        x = config.axis_x_categories.length;
                        config.axis_x_categories.push(rawX);
                    }
                } else {
                    x = $$.generateTargetX(rawX, id, i);
                }
                // mark as x = undefined if value is undefined and filter to remove after mapped
                if (isUndefined(d[id]) || $$.data.xs[id].length <= i) {
                    x = undefined;
                }
                return { x: x, value: value, id: convertedId };
            }).filter(function (v) {
                return isDefined(v.x);
            })
        };
    });

    // finish targets
    targets.forEach(function (t) {
        var i;
        // sort values by its x
        if (config.data_xSort) {
            t.values = t.values.sort(function (v1, v2) {
                var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
                    x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
                return x1 - x2;
            });
        }
        // indexing each value
        i = 0;
        t.values.forEach(function (v) {
            v.index = i++;
        });
        // this needs to be sorted because its index and value.index is identical
        $$.data.xs[t.id].sort(function (v1, v2) {
            return v1 - v2;
        });
    });

    // cache information about values
    $$.hasNegativeValue = $$.hasNegativeValueInTargets(targets);
    $$.hasPositiveValue = $$.hasPositiveValueInTargets(targets);

    // set target types
    if (config.data_type) {
        $$.setTargetType($$.mapToIds(targets).filter(function (id) {
            return !(id in config.data_types);
        }), config.data_type);
    }

    // cache as original id keyed
    targets.forEach(function (d) {
        $$.addCache(d.id_org, d);
    });

    return targets;
};

c3_chart_internal_fn.isX = function (key) {
    var $$ = this,
        config = $$.config;
    return config.data_x && key === config.data_x || notEmpty(config.data_xs) && hasValue(config.data_xs, key);
};
c3_chart_internal_fn.isNotX = function (key) {
    return !this.isX(key);
};
c3_chart_internal_fn.getXKey = function (id) {
    var $$ = this,
        config = $$.config;
    return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
};
c3_chart_internal_fn.getXValuesOfXKey = function (key, targets) {
    var $$ = this,
        xValues,
        ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
    ids.forEach(function (id) {
        if ($$.getXKey(id) === key) {
            xValues = $$.data.xs[id];
        }
    });
    return xValues;
};
c3_chart_internal_fn.getIndexByX = function (x) {
    var $$ = this,
        data = $$.filterByX($$.data.targets, x);
    return data.length ? data[0].index : null;
};
c3_chart_internal_fn.getXValue = function (id, i) {
    var $$ = this;
    return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
};
c3_chart_internal_fn.getOtherTargetXs = function () {
    var $$ = this,
        idsForX = Object.keys($$.data.xs);
    return idsForX.length ? $$.data.xs[idsForX[0]] : null;
};
c3_chart_internal_fn.getOtherTargetX = function (index) {
    var xs = this.getOtherTargetXs();
    return xs && index < xs.length ? xs[index] : null;
};
c3_chart_internal_fn.addXs = function (xs) {
    var $$ = this;
    Object.keys(xs).forEach(function (id) {
        $$.config.data_xs[id] = xs[id];
    });
};
c3_chart_internal_fn.hasMultipleX = function (xs) {
    return this.d3.set(Object.keys(xs).map(function (id) {
        return xs[id];
    })).size() > 1;
};
c3_chart_internal_fn.isMultipleX = function () {
    return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType('scatter');
};
c3_chart_internal_fn.addName = function (data) {
    var $$ = this,
        name;
    if (data) {
        name = $$.config.data_names[data.id];
        data.name = name !== undefined ? name : data.id;
    }
    return data;
};
c3_chart_internal_fn.getValueOnIndex = function (values, index) {
    var valueOnIndex = values.filter(function (v) {
        return v.index === index;
    });
    return valueOnIndex.length ? valueOnIndex[0] : null;
};
c3_chart_internal_fn.updateTargetX = function (targets, x) {
    var $$ = this;
    targets.forEach(function (t) {
        t.values.forEach(function (v, i) {
            v.x = $$.generateTargetX(x[i], t.id, i);
        });
        $$.data.xs[t.id] = x;
    });
};
c3_chart_internal_fn.updateTargetXs = function (targets, xs) {
    var $$ = this;
    targets.forEach(function (t) {
        if (xs[t.id]) {
            $$.updateTargetX([t], xs[t.id]);
        }
    });
};
c3_chart_internal_fn.generateTargetX = function (rawX, id, index) {
    var $$ = this,
        x;
    if ($$.isTimeSeries()) {
        x = rawX ? $$.parseDate(rawX) : $$.parseDate($$.getXValue(id, index));
    } else if ($$.isCustomX() && !$$.isCategorized()) {
        x = isValue(rawX) ? +rawX : $$.getXValue(id, index);
    } else {
        x = index;
    }
    return x;
};
c3_chart_internal_fn.cloneTarget = function (target) {
    return {
        id: target.id,
        id_org: target.id_org,
        values: target.values.map(function (d) {
            return { x: d.x, value: d.value, id: d.id };
        })
    };
};
c3_chart_internal_fn.updateXs = function () {
    var $$ = this;
    if ($$.data.targets.length) {
        $$.xs = [];
        $$.data.targets[0].values.forEach(function (v) {
            $$.xs[v.index] = v.x;
        });
    }
};
c3_chart_internal_fn.getPrevX = function (i) {
    var x = this.xs[i - 1];
    return typeof x !== 'undefined' ? x : null;
};
c3_chart_internal_fn.getNextX = function (i) {
    var x = this.xs[i + 1];
    return typeof x !== 'undefined' ? x : null;
};
c3_chart_internal_fn.getMaxDataCount = function () {
    var $$ = this;
    return $$.d3.max($$.data.targets, function (t) {
        return t.values.length;
    });
};
c3_chart_internal_fn.getMaxDataCountTarget = function (targets) {
    var length = targets.length,
        max = 0,
        maxTarget;
    if (length > 1) {
        targets.forEach(function (t) {
            if (t.values.length > max) {
                maxTarget = t;
                max = t.values.length;
            }
        });
    } else {
        maxTarget = length ? targets[0] : null;
    }
    return maxTarget;
};
c3_chart_internal_fn.getEdgeX = function (targets) {
    var $$ = this;
    return !targets.length ? [0, 0] : [$$.d3.min(targets, function (t) {
        return t.values[0].x;
    }), $$.d3.max(targets, function (t) {
        return t.values[t.values.length - 1].x;
    })];
};
c3_chart_internal_fn.mapToIds = function (targets) {
    return targets.map(function (d) {
        return d.id;
    });
};
c3_chart_internal_fn.mapToTargetIds = function (ids) {
    var $$ = this;
    return ids ? [].concat(ids) : $$.mapToIds($$.data.targets);
};
c3_chart_internal_fn.hasTarget = function (targets, id) {
    var ids = this.mapToIds(targets),
        i;
    for (i = 0; i < ids.length; i++) {
        if (ids[i] === id) {
            return true;
        }
    }
    return false;
};
c3_chart_internal_fn.isTargetToShow = function (targetId) {
    return this.hiddenTargetIds.indexOf(targetId) < 0;
};
c3_chart_internal_fn.isLegendToShow = function (targetId) {
    return this.hiddenLegendIds.indexOf(targetId) < 0;
};
c3_chart_internal_fn.filterTargetsToShow = function (targets) {
    var $$ = this;
    return targets.filter(function (t) {
        return $$.isTargetToShow(t.id);
    });
};
c3_chart_internal_fn.mapTargetsToUniqueXs = function (targets) {
    var $$ = this;
    var xs = $$.d3.set($$.d3.merge(targets.map(function (t) {
        return t.values.map(function (v) {
            return +v.x;
        });
    }))).values();
    xs = $$.isTimeSeries() ? xs.map(function (x) {
        return new Date(+x);
    }) : xs.map(function (x) {
        return +x;
    });
    return xs.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    });
};
c3_chart_internal_fn.addHiddenTargetIds = function (targetIds) {
    targetIds = targetIds instanceof Array ? targetIds : new Array(targetIds);
    for (var i = 0; i < targetIds.length; i++) {
        if (this.hiddenTargetIds.indexOf(targetIds[i]) < 0) {
            this.hiddenTargetIds = this.hiddenTargetIds.concat(targetIds[i]);
        }
    }
};
c3_chart_internal_fn.removeHiddenTargetIds = function (targetIds) {
    this.hiddenTargetIds = this.hiddenTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};
c3_chart_internal_fn.addHiddenLegendIds = function (targetIds) {
    targetIds = targetIds instanceof Array ? targetIds : new Array(targetIds);
    for (var i = 0; i < targetIds.length; i++) {
        if (this.hiddenLegendIds.indexOf(targetIds[i]) < 0) {
            this.hiddenLegendIds = this.hiddenLegendIds.concat(targetIds[i]);
        }
    }
};
c3_chart_internal_fn.removeHiddenLegendIds = function (targetIds) {
    this.hiddenLegendIds = this.hiddenLegendIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};
c3_chart_internal_fn.getValuesAsIdKeyed = function (targets) {
    var ys = {};
    targets.forEach(function (t) {
        ys[t.id] = [];
        t.values.forEach(function (v) {
            ys[t.id].push(v.value);
        });
    });
    return ys;
};
c3_chart_internal_fn.checkValueInTargets = function (targets, checker) {
    var ids = Object.keys(targets),
        i,
        j,
        values;
    for (i = 0; i < ids.length; i++) {
        values = targets[ids[i]].values;
        for (j = 0; j < values.length; j++) {
            if (checker(values[j].value)) {
                return true;
            }
        }
    }
    return false;
};
c3_chart_internal_fn.hasNegativeValueInTargets = function (targets) {
    return this.checkValueInTargets(targets, function (v) {
        return v < 0;
    });
};
c3_chart_internal_fn.hasPositiveValueInTargets = function (targets) {
    return this.checkValueInTargets(targets, function (v) {
        return v > 0;
    });
};
c3_chart_internal_fn.isOrderDesc = function () {
    var config = this.config;
    return typeof config.data_order === 'string' && config.data_order.toLowerCase() === 'desc';
};
c3_chart_internal_fn.isOrderAsc = function () {
    var config = this.config;
    return typeof config.data_order === 'string' && config.data_order.toLowerCase() === 'asc';
};
c3_chart_internal_fn.getOrderFunction = function () {
    var $$ = this,
        config = $$.config,
        orderAsc = $$.isOrderAsc(),
        orderDesc = $$.isOrderDesc();
    if (orderAsc || orderDesc) {
        return function (t1, t2) {
            var reducer = function reducer(p, c) {
                return p + Math.abs(c.value);
            };
            var t1Sum = t1.values.reduce(reducer, 0),
                t2Sum = t2.values.reduce(reducer, 0);
            return orderDesc ? t2Sum - t1Sum : t1Sum - t2Sum;
        };
    } else if (isFunction(config.data_order)) {
        return config.data_order;
    } else if (isArray(config.data_order)) {
        var order = config.data_order;
        return function (t1, t2) {
            return order.indexOf(t1.id) - order.indexOf(t2.id);
        };
    }
};
c3_chart_internal_fn.orderTargets = function (targets) {
    var fct = this.getOrderFunction();
    if (fct) {
        targets.sort(fct);
        if (this.isOrderAsc() || this.isOrderDesc()) {
            targets.reverse();
        }
    }
    return targets;
};
c3_chart_internal_fn.filterByX = function (targets, x) {
    return this.d3.merge(targets.map(function (t) {
        return t.values;
    })).filter(function (v) {
        return v.x - x === 0;
    });
};
c3_chart_internal_fn.filterRemoveNull = function (data) {
    return data.filter(function (d) {
        return isValue(d.value);
    });
};
c3_chart_internal_fn.filterByXDomain = function (targets, xDomain) {
    return targets.map(function (t) {
        return {
            id: t.id,
            id_org: t.id_org,
            values: t.values.filter(function (v) {
                return xDomain[0] <= v.x && v.x <= xDomain[1];
            })
        };
    });
};
c3_chart_internal_fn.hasDataLabel = function () {
    var config = this.config;
    if (typeof config.data_labels === 'boolean' && config.data_labels) {
        return true;
    } else if (_typeof(config.data_labels) === 'object' && notEmpty(config.data_labels)) {
        return true;
    }
    return false;
};
c3_chart_internal_fn.getDataLabelLength = function (min, max, key) {
    var $$ = this,
        lengths = [0, 0],
        paddingCoef = 1.3;
    $$.selectChart.select('svg').selectAll('.dummy').data([min, max]).enter().append('text').text(function (d) {
        return $$.dataLabelFormat(d.id)(d);
    }).each(function (d, i) {
        lengths[i] = this.getBoundingClientRect()[key] * paddingCoef;
    }).remove();
    return lengths;
};
c3_chart_internal_fn.isNoneArc = function (d) {
    return this.hasTarget(this.data.targets, d.id);
}, c3_chart_internal_fn.isArc = function (d) {
    return 'data' in d && this.hasTarget(this.data.targets, d.data.id);
};
c3_chart_internal_fn.findSameXOfValues = function (values, index) {
    var i,
        targetX = values[index].x,
        sames = [];
    for (i = index - 1; i >= 0; i--) {
        if (targetX !== values[i].x) {
            break;
        }
        sames.push(values[i]);
    }
    for (i = index; i < values.length; i++) {
        if (targetX !== values[i].x) {
            break;
        }
        sames.push(values[i]);
    }
    return sames;
};

c3_chart_internal_fn.findClosestFromTargets = function (targets, pos) {
    var $$ = this,
        candidates;

    // map to array of closest points of each target
    candidates = targets.map(function (target) {
        return $$.findClosest(target.values, pos);
    });

    // decide closest point and return
    return $$.findClosest(candidates, pos);
};
c3_chart_internal_fn.findClosest = function (values, pos) {
    var $$ = this,
        minDist = $$.config.point_sensitivity,
        closest;

    // find mouseovering bar
    values.filter(function (v) {
        return v && $$.isBarType(v.id);
    }).forEach(function (v) {
        var shape = $$.main.select('.' + CLASS.bars + $$.getTargetSelectorSuffix(v.id) + ' .' + CLASS.bar + '-' + v.index).node();
        if (!closest && $$.isWithinBar(shape)) {
            closest = v;
        }
    });

    // find closest point from non-bar
    values.filter(function (v) {
        return v && !$$.isBarType(v.id);
    }).forEach(function (v) {
        var d = $$.dist(v, pos);
        if (d < minDist) {
            minDist = d;
            closest = v;
        }
    });

    return closest;
};
c3_chart_internal_fn.dist = function (data, pos) {
    var $$ = this,
        config = $$.config,
        xIndex = config.axis_rotated ? 1 : 0,
        yIndex = config.axis_rotated ? 0 : 1,
        y = $$.circleY(data, data.index),
        x = $$.x(data.x);
    return Math.sqrt(Math.pow(x - pos[xIndex], 2) + Math.pow(y - pos[yIndex], 2));
};
c3_chart_internal_fn.convertValuesToStep = function (values) {
    var converted = [].concat(values),
        i;

    if (!this.isCategorized()) {
        return values;
    }

    for (i = values.length + 1; 0 < i; i--) {
        converted[i] = converted[i - 1];
    }

    converted[0] = {
        x: converted[0].x - 1,
        value: converted[0].value,
        id: converted[0].id
    };
    converted[values.length + 1] = {
        x: converted[values.length].x + 1,
        value: converted[values.length].value,
        id: converted[values.length].id
    };

    return converted;
};
c3_chart_internal_fn.updateDataAttributes = function (name, attrs) {
    var $$ = this,
        config = $$.config,
        current = config['data_' + name];
    if (typeof attrs === 'undefined') {
        return current;
    }
    Object.keys(attrs).forEach(function (id) {
        current[id] = attrs[id];
    });
    $$.redraw({ withLegend: true });
    return current;
};

c3_chart_internal_fn.load = function (targets, args) {
    var $$ = this;
    if (targets) {
        // filter loading targets if needed
        if (args.filter) {
            targets = targets.filter(args.filter);
        }
        // set type if args.types || args.type specified
        if (args.type || args.types) {
            targets.forEach(function (t) {
                var type = args.types && args.types[t.id] ? args.types[t.id] : args.type;
                $$.setTargetType(t.id, type);
            });
        }
        // Update/Add data
        $$.data.targets.forEach(function (d) {
            for (var i = 0; i < targets.length; i++) {
                if (d.id === targets[i].id) {
                    d.values = targets[i].values;
                    targets.splice(i, 1);
                    break;
                }
            }
        });
        $$.data.targets = $$.data.targets.concat(targets); // add remained
    }

    // Set targets
    $$.updateTargets($$.data.targets);

    // Redraw with new targets
    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });

    if (args.done) {
        args.done();
    }
};
c3_chart_internal_fn.loadFromArgs = function (args) {
    var $$ = this;
    if (args.data) {
        $$.load($$.convertDataToTargets(args.data), args);
    } else if (args.url) {
        $$.convertUrlToData(args.url, args.mimeType, args.headers, args.keys, function (data) {
            $$.load($$.convertDataToTargets(data), args);
        });
    } else if (args.json) {
        $$.load($$.convertDataToTargets($$.convertJsonToData(args.json, args.keys)), args);
    } else if (args.rows) {
        $$.load($$.convertDataToTargets($$.convertRowsToData(args.rows)), args);
    } else if (args.columns) {
        $$.load($$.convertDataToTargets($$.convertColumnsToData(args.columns)), args);
    } else {
        $$.load(null, args);
    }
};
c3_chart_internal_fn.unload = function (targetIds, done) {
    var $$ = this;
    if (!done) {
        done = function done() {};
    }
    // filter existing target
    targetIds = targetIds.filter(function (id) {
        return $$.hasTarget($$.data.targets, id);
    });
    // If no target, call done and return
    if (!targetIds || targetIds.length === 0) {
        done();
        return;
    }
    $$.svg.selectAll(targetIds.map(function (id) {
        return $$.selectorTarget(id);
    })).transition().style('opacity', 0).remove().call($$.endall, done);
    targetIds.forEach(function (id) {
        // Reset fadein for future load
        $$.withoutFadeIn[id] = false;
        // Remove target's elements
        if ($$.legend) {
            $$.legend.selectAll('.' + CLASS.legendItem + $$.getTargetSelectorSuffix(id)).remove();
        }
        // Remove target
        $$.data.targets = $$.data.targets.filter(function (t) {
            return t.id !== id;
        });
    });
};

c3_chart_internal_fn.getYDomainMin = function (targets) {
    var $$ = this,
        config = $$.config,
        ids = $$.mapToIds(targets),
        ys = $$.getValuesAsIdKeyed(targets),
        j,
        k,
        baseId,
        idsInGroup,
        id,
        hasNegativeValue;
    if (config.data_groups.length > 0) {
        hasNegativeValue = $$.hasNegativeValueInTargets(targets);
        for (j = 0; j < config.data_groups.length; j++) {
            // Determine baseId
            idsInGroup = config.data_groups[j].filter(function (id) {
                return ids.indexOf(id) >= 0;
            });
            if (idsInGroup.length === 0) {
                continue;
            }
            baseId = idsInGroup[0];
            // Consider negative values
            if (hasNegativeValue && ys[baseId]) {
                ys[baseId].forEach(function (v, i) {
                    ys[baseId][i] = v < 0 ? v : 0;
                });
            }
            // Compute min
            for (k = 1; k < idsInGroup.length; k++) {
                id = idsInGroup[k];
                if (!ys[id]) {
                    continue;
                }
                ys[id].forEach(function (v, i) {
                    if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
                        ys[baseId][i] += +v;
                    }
                });
            }
        }
    }
    return $$.d3.min(Object.keys(ys).map(function (key) {
        return $$.d3.min(ys[key]);
    }));
};
c3_chart_internal_fn.getYDomainMax = function (targets) {
    var $$ = this,
        config = $$.config,
        ids = $$.mapToIds(targets),
        ys = $$.getValuesAsIdKeyed(targets),
        j,
        k,
        baseId,
        idsInGroup,
        id,
        hasPositiveValue;
    if (config.data_groups.length > 0) {
        hasPositiveValue = $$.hasPositiveValueInTargets(targets);
        for (j = 0; j < config.data_groups.length; j++) {
            // Determine baseId
            idsInGroup = config.data_groups[j].filter(function (id) {
                return ids.indexOf(id) >= 0;
            });
            if (idsInGroup.length === 0) {
                continue;
            }
            baseId = idsInGroup[0];
            // Consider positive values
            if (hasPositiveValue && ys[baseId]) {
                ys[baseId].forEach(function (v, i) {
                    ys[baseId][i] = v > 0 ? v : 0;
                });
            }
            // Compute max
            for (k = 1; k < idsInGroup.length; k++) {
                id = idsInGroup[k];
                if (!ys[id]) {
                    continue;
                }
                ys[id].forEach(function (v, i) {
                    if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
                        ys[baseId][i] += +v;
                    }
                });
            }
        }
    }
    return $$.d3.max(Object.keys(ys).map(function (key) {
        return $$.d3.max(ys[key]);
    }));
};
c3_chart_internal_fn.getYDomain = function (targets, axisId, xDomain) {
    var $$ = this,
        config = $$.config,
        targetsByAxisId = targets.filter(function (t) {
        return $$.axis.getId(t.id) === axisId;
    }),
        yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId,
        yMin = axisId === 'y2' ? config.axis_y2_min : config.axis_y_min,
        yMax = axisId === 'y2' ? config.axis_y2_max : config.axis_y_max,
        yDomainMin = $$.getYDomainMin(yTargets),
        yDomainMax = $$.getYDomainMax(yTargets),
        domain,
        domainLength,
        padding,
        padding_top,
        padding_bottom,
        center = axisId === 'y2' ? config.axis_y2_center : config.axis_y_center,
        yDomainAbs,
        lengths,
        diff,
        ratio,
        isAllPositive,
        isAllNegative,
        isZeroBased = $$.hasType('bar', yTargets) && config.bar_zerobased || $$.hasType('area', yTargets) && config.area_zerobased,
        isInverted = axisId === 'y2' ? config.axis_y2_inverted : config.axis_y_inverted,
        showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
        showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;

    // MEMO: avoid inverting domain unexpectedly
    yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? yDomainMin < yMax ? yDomainMin : yMax - 10 : yDomainMin;
    yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? yMin < yDomainMax ? yDomainMax : yMin + 10 : yDomainMax;

    if (yTargets.length === 0) {
        // use current domain if target of axisId is none
        return axisId === 'y2' ? $$.y2.domain() : $$.y.domain();
    }
    if (isNaN(yDomainMin)) {
        // set minimum to zero when not number
        yDomainMin = 0;
    }
    if (isNaN(yDomainMax)) {
        // set maximum to have same value as yDomainMin
        yDomainMax = yDomainMin;
    }
    if (yDomainMin === yDomainMax) {
        yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
    }
    isAllPositive = yDomainMin >= 0 && yDomainMax >= 0;
    isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;

    // Cancel zerobased if axis_*_min / axis_*_max specified
    if (isValue(yMin) && isAllPositive || isValue(yMax) && isAllNegative) {
        isZeroBased = false;
    }

    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
        if (isAllPositive) {
            yDomainMin = 0;
        }
        if (isAllNegative) {
            yDomainMax = 0;
        }
    }

    domainLength = Math.abs(yDomainMax - yDomainMin);
    padding = padding_top = padding_bottom = domainLength * 0.1;

    if (typeof center !== 'undefined') {
        yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
        yDomainMax = center + yDomainAbs;
        yDomainMin = center - yDomainAbs;
    }
    // add padding for data label
    if (showHorizontalDataLabel) {
        lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'width');
        diff = diffDomain($$.y.range());
        ratio = [lengths[0] / diff, lengths[1] / diff];
        padding_top += domainLength * (ratio[1] / (1 - ratio[0] - ratio[1]));
        padding_bottom += domainLength * (ratio[0] / (1 - ratio[0] - ratio[1]));
    } else if (showVerticalDataLabel) {
        lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'height');
        padding_top += $$.axis.convertPixelsToAxisPadding(lengths[1], domainLength);
        padding_bottom += $$.axis.convertPixelsToAxisPadding(lengths[0], domainLength);
    }
    if (axisId === 'y' && notEmpty(config.axis_y_padding)) {
        padding_top = $$.axis.getPadding(config.axis_y_padding, 'top', padding_top, domainLength);
        padding_bottom = $$.axis.getPadding(config.axis_y_padding, 'bottom', padding_bottom, domainLength);
    }
    if (axisId === 'y2' && notEmpty(config.axis_y2_padding)) {
        padding_top = $$.axis.getPadding(config.axis_y2_padding, 'top', padding_top, domainLength);
        padding_bottom = $$.axis.getPadding(config.axis_y2_padding, 'bottom', padding_bottom, domainLength);
    }
    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
        if (isAllPositive) {
            padding_bottom = yDomainMin;
        }
        if (isAllNegative) {
            padding_top = -yDomainMax;
        }
    }
    domain = [yDomainMin - padding_bottom, yDomainMax + padding_top];
    return isInverted ? domain.reverse() : domain;
};
c3_chart_internal_fn.getXDomainMin = function (targets) {
    var $$ = this,
        config = $$.config;
    return isDefined(config.axis_x_min) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_min) : config.axis_x_min : $$.d3.min(targets, function (t) {
        return $$.d3.min(t.values, function (v) {
            return v.x;
        });
    });
};
c3_chart_internal_fn.getXDomainMax = function (targets) {
    var $$ = this,
        config = $$.config;
    return isDefined(config.axis_x_max) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_max) : config.axis_x_max : $$.d3.max(targets, function (t) {
        return $$.d3.max(t.values, function (v) {
            return v.x;
        });
    });
};
c3_chart_internal_fn.getXDomainPadding = function (domain) {
    var $$ = this,
        config = $$.config,
        diff = domain[1] - domain[0],
        maxDataCount,
        padding,
        paddingLeft,
        paddingRight;
    if ($$.isCategorized()) {
        padding = 0;
    } else if ($$.hasType('bar')) {
        maxDataCount = $$.getMaxDataCount();
        padding = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : 0.5;
    } else {
        padding = diff * 0.01;
    }
    if (_typeof(config.axis_x_padding) === 'object' && notEmpty(config.axis_x_padding)) {
        paddingLeft = isValue(config.axis_x_padding.left) ? config.axis_x_padding.left : padding;
        paddingRight = isValue(config.axis_x_padding.right) ? config.axis_x_padding.right : padding;
    } else if (typeof config.axis_x_padding === 'number') {
        paddingLeft = paddingRight = config.axis_x_padding;
    } else {
        paddingLeft = paddingRight = padding;
    }
    return { left: paddingLeft, right: paddingRight };
};
c3_chart_internal_fn.getXDomain = function (targets) {
    var $$ = this,
        xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
        firstX = xDomain[0],
        lastX = xDomain[1],
        padding = $$.getXDomainPadding(xDomain),
        min = 0,
        max = 0;
    // show center of x domain if min and max are the same
    if (firstX - lastX === 0 && !$$.isCategorized()) {
        if ($$.isTimeSeries()) {
            firstX = new Date(firstX.getTime() * 0.5);
            lastX = new Date(lastX.getTime() * 1.5);
        } else {
            firstX = firstX === 0 ? 1 : firstX * 0.5;
            lastX = lastX === 0 ? -1 : lastX * 1.5;
        }
    }
    if (firstX || firstX === 0) {
        min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
    }
    if (lastX || lastX === 0) {
        max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
    }
    return [min, max];
};
c3_chart_internal_fn.updateXDomain = function (targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
    var $$ = this,
        config = $$.config;

    if (withUpdateOrgXDomain) {
        $$.x.domain(domain ? domain : $$.d3.extent($$.getXDomain(targets)));
        $$.orgXDomain = $$.x.domain();
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x).updateScaleExtent();
        }
        $$.subX.domain($$.x.domain());
        if ($$.brush) {
            $$.brush.scale($$.subX);
        }
    }
    if (withUpdateXDomain) {
        $$.x.domain(domain ? domain : !$$.brush || $$.brush.empty() ? $$.orgXDomain : $$.brush.extent());
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x).updateScaleExtent();
        }
    }

    // Trim domain when too big by zoom mousemove event
    if (withTrim) {
        $$.x.domain($$.trimXDomain($$.x.orgDomain()));
    }

    return $$.x.domain();
};
c3_chart_internal_fn.trimXDomain = function (domain) {
    var zoomDomain = this.getZoomDomain(),
        min = zoomDomain[0],
        max = zoomDomain[1];
    if (domain[0] <= min) {
        domain[1] = +domain[1] + (min - domain[0]);
        domain[0] = min;
    }
    if (max <= domain[1]) {
        domain[0] = +domain[0] - (domain[1] - max);
        domain[1] = max;
    }
    return domain;
};

c3_chart_internal_fn.drag = function (mouse) {
    var $$ = this,
        config = $$.config,
        main = $$.main,
        d3 = $$.d3;
    var sx, sy, mx, my, minX, maxX, minY, maxY;

    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    if (config.zoom_enabled && !$$.zoom.altDomain) {
        return;
    } // skip if zoomable because of conflict drag dehavior
    if (!config.data_selection_multiple) {
        return;
    } // skip when single selection because drag is used for multiple selection

    sx = $$.dragStart[0];
    sy = $$.dragStart[1];
    mx = mouse[0];
    my = mouse[1];
    minX = Math.min(sx, mx);
    maxX = Math.max(sx, mx);
    minY = config.data_selection_grouped ? $$.margin.top : Math.min(sy, my);
    maxY = config.data_selection_grouped ? $$.height : Math.max(sy, my);

    main.select('.' + CLASS.dragarea).attr('x', minX).attr('y', minY).attr('width', maxX - minX).attr('height', maxY - minY);
    // TODO: binary search when multiple xs
    main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).filter(function (d) {
        return config.data_selection_isselectable(d);
    }).each(function (d, i) {
        var shape = d3.select(this),
            isSelected = shape.classed(CLASS.SELECTED),
            isIncluded = shape.classed(CLASS.INCLUDED),
            _x,
            _y,
            _w,
            _h,
            toggle,
            isWithin = false,
            box;
        if (shape.classed(CLASS.circle)) {
            _x = shape.attr("cx") * 1;
            _y = shape.attr("cy") * 1;
            toggle = $$.togglePoint;
            isWithin = minX < _x && _x < maxX && minY < _y && _y < maxY;
        } else if (shape.classed(CLASS.bar)) {
            box = getPathBox(this);
            _x = box.x;
            _y = box.y;
            _w = box.width;
            _h = box.height;
            toggle = $$.togglePath;
            isWithin = !(maxX < _x || _x + _w < minX) && !(maxY < _y || _y + _h < minY);
        } else {
            // line/area selection not supported yet
            return;
        }
        if (isWithin ^ isIncluded) {
            shape.classed(CLASS.INCLUDED, !isIncluded);
            // TODO: included/unincluded callback here
            shape.classed(CLASS.SELECTED, !isSelected);
            toggle.call($$, !isSelected, shape, d, i);
        }
    });
};

c3_chart_internal_fn.dragstart = function (mouse) {
    var $$ = this,
        config = $$.config;
    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    $$.dragStart = mouse;
    $$.main.select('.' + CLASS.chart).append('rect').attr('class', CLASS.dragarea).style('opacity', 0.1);
    $$.dragging = true;
};

c3_chart_internal_fn.dragend = function () {
    var $$ = this,
        config = $$.config;
    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    $$.main.select('.' + CLASS.dragarea).transition().duration(100).style('opacity', 0).remove();
    $$.main.selectAll('.' + CLASS.shape).classed(CLASS.INCLUDED, false);
    $$.dragging = false;
};

c3_chart_internal_fn.getYFormat = function (forArc) {
    var $$ = this,
        formatForY = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.yFormat,
        formatForY2 = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.y2Format;
    return function (v, ratio, id) {
        var format = $$.axis.getId(id) === 'y2' ? formatForY2 : formatForY;
        return format.call($$, v, ratio);
    };
};
c3_chart_internal_fn.yFormat = function (v) {
    var $$ = this,
        config = $$.config,
        format = config.axis_y_tick_format ? config.axis_y_tick_format : $$.defaultValueFormat;
    return format(v);
};
c3_chart_internal_fn.y2Format = function (v) {
    var $$ = this,
        config = $$.config,
        format = config.axis_y2_tick_format ? config.axis_y2_tick_format : $$.defaultValueFormat;
    return format(v);
};
c3_chart_internal_fn.defaultValueFormat = function (v) {
    return isValue(v) ? +v : "";
};
c3_chart_internal_fn.defaultArcValueFormat = function (v, ratio) {
    return (ratio * 100).toFixed(1) + '%';
};
c3_chart_internal_fn.dataLabelFormat = function (targetId) {
    var $$ = this,
        data_labels = $$.config.data_labels,
        format,
        defaultFormat = function defaultFormat(v) {
        return isValue(v) ? +v : "";
    };
    // find format according to axis id
    if (typeof data_labels.format === 'function') {
        format = data_labels.format;
    } else if (_typeof(data_labels.format) === 'object') {
        if (data_labels.format[targetId]) {
            format = data_labels.format[targetId] === true ? defaultFormat : data_labels.format[targetId];
        } else {
            format = function format() {
                return '';
            };
        }
    } else {
        format = defaultFormat;
    }
    return format;
};

c3_chart_internal_fn.initGrid = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;
    $$.grid = $$.main.append('g').attr("clip-path", $$.clipPathForGrid).attr('class', CLASS.grid);
    if (config.grid_x_show) {
        $$.grid.append("g").attr("class", CLASS.xgrids);
    }
    if (config.grid_y_show) {
        $$.grid.append('g').attr('class', CLASS.ygrids);
    }
    if (config.grid_focus_show) {
        $$.grid.append('g').attr("class", CLASS.xgridFocus).append('line').attr('class', CLASS.xgridFocus);
    }
    $$.xgrid = d3.selectAll([]);
    if (!config.grid_lines_front) {
        $$.initGridLines();
    }
};
c3_chart_internal_fn.initGridLines = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.gridLines = $$.main.append('g').attr("clip-path", $$.clipPathForGrid).attr('class', CLASS.grid + ' ' + CLASS.gridLines);
    $$.gridLines.append('g').attr("class", CLASS.xgridLines);
    $$.gridLines.append('g').attr('class', CLASS.ygridLines);
    $$.xgridLines = d3.selectAll([]);
};
c3_chart_internal_fn.updateXGrid = function (withoutUpdate) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        xgridData = $$.generateGridData(config.grid_x_type, $$.x),
        tickOffset = $$.isCategorized() ? $$.xAxis.tickOffset() : 0;

    $$.xgridAttr = config.axis_rotated ? {
        'x1': 0,
        'x2': $$.width,
        'y1': function y1(d) {
            return $$.x(d) - tickOffset;
        },
        'y2': function y2(d) {
            return $$.x(d) - tickOffset;
        }
    } : {
        'x1': function x1(d) {
            return $$.x(d) + tickOffset;
        },
        'x2': function x2(d) {
            return $$.x(d) + tickOffset;
        },
        'y1': 0,
        'y2': $$.height
    };

    $$.xgrid = $$.main.select('.' + CLASS.xgrids).selectAll('.' + CLASS.xgrid).data(xgridData);
    $$.xgrid.enter().append('line').attr("class", CLASS.xgrid);
    if (!withoutUpdate) {
        $$.xgrid.attr($$.xgridAttr).style("opacity", function () {
            return +d3.select(this).attr(config.axis_rotated ? 'y1' : 'x1') === (config.axis_rotated ? $$.height : 0) ? 0 : 1;
        });
    }
    $$.xgrid.exit().remove();
};

c3_chart_internal_fn.updateYGrid = function () {
    var $$ = this,
        config = $$.config,
        gridValues = $$.yAxis.tickValues() || $$.y.ticks(config.grid_y_ticks);
    $$.ygrid = $$.main.select('.' + CLASS.ygrids).selectAll('.' + CLASS.ygrid).data(gridValues);
    $$.ygrid.enter().append('line').attr('class', CLASS.ygrid);
    $$.ygrid.attr("x1", config.axis_rotated ? $$.y : 0).attr("x2", config.axis_rotated ? $$.y : $$.width).attr("y1", config.axis_rotated ? 0 : $$.y).attr("y2", config.axis_rotated ? $$.height : $$.y);
    $$.ygrid.exit().remove();
    $$.smoothLines($$.ygrid, 'grid');
};

c3_chart_internal_fn.gridTextAnchor = function (d) {
    return d.position ? d.position : "end";
};
c3_chart_internal_fn.gridTextDx = function (d) {
    return d.position === 'start' ? 4 : d.position === 'middle' ? 0 : -4;
};
c3_chart_internal_fn.xGridTextX = function (d) {
    return d.position === 'start' ? -this.height : d.position === 'middle' ? -this.height / 2 : 0;
};
c3_chart_internal_fn.yGridTextX = function (d) {
    return d.position === 'start' ? 0 : d.position === 'middle' ? this.width / 2 : this.width;
};
c3_chart_internal_fn.updateGrid = function (duration) {
    var $$ = this,
        main = $$.main,
        config = $$.config,
        xgridLine,
        ygridLine,
        yv;

    // hide if arc type
    $$.grid.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

    main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
    if (config.grid_x_show) {
        $$.updateXGrid();
    }
    $$.xgridLines = main.select('.' + CLASS.xgridLines).selectAll('.' + CLASS.xgridLine).data(config.grid_x_lines);
    // enter
    xgridLine = $$.xgridLines.enter().append('g').attr("class", function (d) {
        return CLASS.xgridLine + (d['class'] ? ' ' + d['class'] : '');
    });
    xgridLine.append('line').style("opacity", 0);
    xgridLine.append('text').attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "" : "rotate(-90)").attr('dx', $$.gridTextDx).attr('dy', -5).style("opacity", 0);
    // udpate
    // done in d3.transition() of the end of this function
    // exit
    $$.xgridLines.exit().transition().duration(duration).style("opacity", 0).remove();

    // Y-Grid
    if (config.grid_y_show) {
        $$.updateYGrid();
    }
    $$.ygridLines = main.select('.' + CLASS.ygridLines).selectAll('.' + CLASS.ygridLine).data(config.grid_y_lines);
    // enter
    ygridLine = $$.ygridLines.enter().append('g').attr("class", function (d) {
        return CLASS.ygridLine + (d['class'] ? ' ' + d['class'] : '');
    });
    ygridLine.append('line').style("opacity", 0);
    ygridLine.append('text').attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "rotate(-90)" : "").attr('dx', $$.gridTextDx).attr('dy', -5).style("opacity", 0);
    // update
    yv = $$.yv.bind($$);
    $$.ygridLines.select('line').transition().duration(duration).attr("x1", config.axis_rotated ? yv : 0).attr("x2", config.axis_rotated ? yv : $$.width).attr("y1", config.axis_rotated ? 0 : yv).attr("y2", config.axis_rotated ? $$.height : yv).style("opacity", 1);
    $$.ygridLines.select('text').transition().duration(duration).attr("x", config.axis_rotated ? $$.xGridTextX.bind($$) : $$.yGridTextX.bind($$)).attr("y", yv).text(function (d) {
        return d.text;
    }).style("opacity", 1);
    // exit
    $$.ygridLines.exit().transition().duration(duration).style("opacity", 0).remove();
};
c3_chart_internal_fn.redrawGrid = function (withTransition) {
    var $$ = this,
        config = $$.config,
        xv = $$.xv.bind($$),
        lines = $$.xgridLines.select('line'),
        texts = $$.xgridLines.select('text');
    return [(withTransition ? lines.transition() : lines).attr("x1", config.axis_rotated ? 0 : xv).attr("x2", config.axis_rotated ? $$.width : xv).attr("y1", config.axis_rotated ? xv : 0).attr("y2", config.axis_rotated ? xv : $$.height).style("opacity", 1), (withTransition ? texts.transition() : texts).attr("x", config.axis_rotated ? $$.yGridTextX.bind($$) : $$.xGridTextX.bind($$)).attr("y", xv).text(function (d) {
        return d.text;
    }).style("opacity", 1)];
};
c3_chart_internal_fn.showXGridFocus = function (selectedData) {
    var $$ = this,
        config = $$.config,
        dataToShow = selectedData.filter(function (d) {
        return d && isValue(d.value);
    }),
        focusEl = $$.main.selectAll('line.' + CLASS.xgridFocus),
        xx = $$.xx.bind($$);
    if (!config.tooltip_show) {
        return;
    }
    // Hide when scatter plot exists
    if ($$.hasType('scatter') || $$.hasArcType()) {
        return;
    }
    focusEl.style("visibility", "visible").data([dataToShow[0]]).attr(config.axis_rotated ? 'y1' : 'x1', xx).attr(config.axis_rotated ? 'y2' : 'x2', xx);
    $$.smoothLines(focusEl, 'grid');
};
c3_chart_internal_fn.hideXGridFocus = function () {
    this.main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
};
c3_chart_internal_fn.updateXgridFocus = function () {
    var $$ = this,
        config = $$.config;
    $$.main.select('line.' + CLASS.xgridFocus).attr("x1", config.axis_rotated ? 0 : -10).attr("x2", config.axis_rotated ? $$.width : -10).attr("y1", config.axis_rotated ? -10 : 0).attr("y2", config.axis_rotated ? -10 : $$.height);
};
c3_chart_internal_fn.generateGridData = function (type, scale) {
    var $$ = this,
        gridData = [],
        xDomain,
        firstYear,
        lastYear,
        i,
        tickNum = $$.main.select("." + CLASS.axisX).selectAll('.tick').size();
    if (type === 'year') {
        xDomain = $$.getXDomain();
        firstYear = xDomain[0].getFullYear();
        lastYear = xDomain[1].getFullYear();
        for (i = firstYear; i <= lastYear; i++) {
            gridData.push(new Date(i + '-01-01 00:00:00'));
        }
    } else {
        gridData = scale.ticks(10);
        if (gridData.length > tickNum) {
            // use only int
            gridData = gridData.filter(function (d) {
                return ("" + d).indexOf('.') < 0;
            });
        }
    }
    return gridData;
};
c3_chart_internal_fn.getGridFilterToRemove = function (params) {
    return params ? function (line) {
        var found = false;
        [].concat(params).forEach(function (param) {
            if ('value' in param && line.value === param.value || 'class' in param && line['class'] === param['class']) {
                found = true;
            }
        });
        return found;
    } : function () {
        return true;
    };
};
c3_chart_internal_fn.removeGridLines = function (params, forX) {
    var $$ = this,
        config = $$.config,
        toRemove = $$.getGridFilterToRemove(params),
        toShow = function toShow(line) {
        return !toRemove(line);
    },
        classLines = forX ? CLASS.xgridLines : CLASS.ygridLines,
        classLine = forX ? CLASS.xgridLine : CLASS.ygridLine;
    $$.main.select('.' + classLines).selectAll('.' + classLine).filter(toRemove).transition().duration(config.transition_duration).style('opacity', 0).remove();
    if (forX) {
        config.grid_x_lines = config.grid_x_lines.filter(toShow);
    } else {
        config.grid_y_lines = config.grid_y_lines.filter(toShow);
    }
};

c3_chart_internal_fn.initEventRect = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.eventRects).style('fill-opacity', 0);
};
c3_chart_internal_fn.redrawEventRect = function () {
    var $$ = this,
        config = $$.config,
        eventRectUpdate,
        maxDataCountTarget,
        isMultipleX = $$.isMultipleX();

    // rects for mouseover
    var eventRects = $$.main.select('.' + CLASS.eventRects).style('cursor', config.zoom_enabled ? config.axis_rotated ? 'ns-resize' : 'ew-resize' : null).classed(CLASS.eventRectsMultiple, isMultipleX).classed(CLASS.eventRectsSingle, !isMultipleX);

    // clear old rects
    eventRects.selectAll('.' + CLASS.eventRect).remove();

    // open as public variable
    $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);

    if (isMultipleX) {
        eventRectUpdate = $$.eventRect.data([0]);
        // enter : only one rect will be added
        $$.generateEventRectsForMultipleXs(eventRectUpdate.enter());
        // update
        $$.updateEventRect(eventRectUpdate);
        // exit : not needed because always only one rect exists
    } else {
        // Set data and update $$.eventRect
        maxDataCountTarget = $$.getMaxDataCountTarget($$.data.targets);
        eventRects.datum(maxDataCountTarget ? maxDataCountTarget.values : []);
        $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);
        eventRectUpdate = $$.eventRect.data(function (d) {
            return d;
        });
        // enter
        $$.generateEventRectsForSingleX(eventRectUpdate.enter());
        // update
        $$.updateEventRect(eventRectUpdate);
        // exit
        eventRectUpdate.exit().remove();
    }
};
c3_chart_internal_fn.updateEventRect = function (eventRectUpdate) {
    var $$ = this,
        config = $$.config,
        x,
        y,
        w,
        h,
        rectW,
        rectX;

    // set update selection if null
    eventRectUpdate = eventRectUpdate || $$.eventRect.data(function (d) {
        return d;
    });

    if ($$.isMultipleX()) {
        // TODO: rotated not supported yet
        x = 0;
        y = 0;
        w = $$.width;
        h = $$.height;
    } else {
        if (($$.isCustomX() || $$.isTimeSeries()) && !$$.isCategorized()) {

            // update index for x that is used by prevX and nextX
            $$.updateXs();

            rectW = function rectW(d) {
                var prevX = $$.getPrevX(d.index),
                    nextX = $$.getNextX(d.index);

                // if there this is a single data point make the eventRect full width (or height)
                if (prevX === null && nextX === null) {
                    return config.axis_rotated ? $$.height : $$.width;
                }

                if (prevX === null) {
                    prevX = $$.x.domain()[0];
                }
                if (nextX === null) {
                    nextX = $$.x.domain()[1];
                }

                return Math.max(0, ($$.x(nextX) - $$.x(prevX)) / 2);
            };
            rectX = function rectX(d) {
                var prevX = $$.getPrevX(d.index),
                    nextX = $$.getNextX(d.index),
                    thisX = $$.data.xs[d.id][d.index];

                // if there this is a single data point position the eventRect at 0
                if (prevX === null && nextX === null) {
                    return 0;
                }

                if (prevX === null) {
                    prevX = $$.x.domain()[0];
                }

                return ($$.x(thisX) + $$.x(prevX)) / 2;
            };
        } else {
            rectW = $$.getEventRectWidth();
            rectX = function rectX(d) {
                return $$.x(d.x) - rectW / 2;
            };
        }
        x = config.axis_rotated ? 0 : rectX;
        y = config.axis_rotated ? rectX : 0;
        w = config.axis_rotated ? $$.width : rectW;
        h = config.axis_rotated ? rectW : $$.height;
    }

    eventRectUpdate.attr('class', $$.classEvent.bind($$)).attr("x", x).attr("y", y).attr("width", w).attr("height", h);
};
c3_chart_internal_fn.generateEventRectsForSingleX = function (eventRectEnter) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;
    eventRectEnter.append("rect").attr("class", $$.classEvent.bind($$)).style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on('mouseover', function (d) {
        var index = d.index;

        if ($$.dragging || $$.flowing) {
            return;
        } // do nothing while dragging/flowing
        if ($$.hasArcType()) {
            return;
        }

        // Expand shapes for selection
        if (config.point_focus_expand_enabled) {
            $$.expandCircles(index, null, true);
        }
        $$.expandBars(index, null, true);

        // Call event handler
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            config.data_onmouseover.call($$.api, d);
        });
    }).on('mouseout', function (d) {
        var index = d.index;
        if (!$$.config) {
            return;
        } // chart is destroyed
        if ($$.hasArcType()) {
            return;
        }
        $$.hideXGridFocus();
        $$.hideTooltip();
        // Undo expanded shapes
        $$.unexpandCircles();
        $$.unexpandBars();
        // Call event handler
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            config.data_onmouseout.call($$.api, d);
        });
    }).on('mousemove', function (d) {
        var selectedData,
            index = d.index,
            eventRect = $$.svg.select('.' + CLASS.eventRect + '-' + index);

        if ($$.dragging || $$.flowing) {
            return;
        } // do nothing while dragging/flowing
        if ($$.hasArcType()) {
            return;
        }

        if ($$.isStepType(d) && $$.config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
            index -= 1;
        }

        // Show tooltip
        selectedData = $$.filterTargetsToShow($$.data.targets).map(function (t) {
            return $$.addName($$.getValueOnIndex(t.values, index));
        });

        if (config.tooltip_grouped) {
            $$.showTooltip(selectedData, this);
            $$.showXGridFocus(selectedData);
        }

        if (config.tooltip_grouped && (!config.data_selection_enabled || config.data_selection_grouped)) {
            return;
        }

        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function () {
            d3.select(this).classed(CLASS.EXPANDED, true);
            if (config.data_selection_enabled) {
                eventRect.style('cursor', config.data_selection_grouped ? 'pointer' : null);
            }
            if (!config.tooltip_grouped) {
                $$.hideXGridFocus();
                $$.hideTooltip();
                if (!config.data_selection_grouped) {
                    $$.unexpandCircles(index);
                    $$.unexpandBars(index);
                }
            }
        }).filter(function (d) {
            return $$.isWithinShape(this, d);
        }).each(function (d) {
            if (config.data_selection_enabled && (config.data_selection_grouped || config.data_selection_isselectable(d))) {
                eventRect.style('cursor', 'pointer');
            }
            if (!config.tooltip_grouped) {
                $$.showTooltip([d], this);
                $$.showXGridFocus([d]);
                if (config.point_focus_expand_enabled) {
                    $$.expandCircles(index, d.id, true);
                }
                $$.expandBars(index, d.id, true);
            }
        });
    }).on('click', function (d) {
        var index = d.index;
        if ($$.hasArcType() || !$$.toggleShape) {
            return;
        }
        if ($$.cancelClick) {
            $$.cancelClick = false;
            return;
        }
        if ($$.isStepType(d) && config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
            index -= 1;
        }
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            if (config.data_selection_grouped || $$.isWithinShape(this, d)) {
                $$.toggleShape(this, d, index);
                $$.config.data_onclick.call($$.api, d, this);
            }
        });
    }).call(config.data_selection_draggable && $$.drag ? d3.behavior.drag().origin(Object).on('drag', function () {
        $$.drag(d3.mouse(this));
    }).on('dragstart', function () {
        $$.dragstart(d3.mouse(this));
    }).on('dragend', function () {
        $$.dragend();
    }) : function () {});
};

c3_chart_internal_fn.generateEventRectsForMultipleXs = function (eventRectEnter) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;

    function mouseout() {
        $$.svg.select('.' + CLASS.eventRect).style('cursor', null);
        $$.hideXGridFocus();
        $$.hideTooltip();
        $$.unexpandCircles();
        $$.unexpandBars();
    }

    eventRectEnter.append('rect').attr('x', 0).attr('y', 0).attr('width', $$.width).attr('height', $$.height).attr('class', CLASS.eventRect).on('mouseout', function () {
        if (!$$.config) {
            return;
        } // chart is destroyed
        if ($$.hasArcType()) {
            return;
        }
        mouseout();
    }).on('mousemove', function () {
        var targetsToShow = $$.filterTargetsToShow($$.data.targets);
        var mouse, closest, sameXData, selectedData;

        if ($$.dragging) {
            return;
        } // do nothing when dragging
        if ($$.hasArcType(targetsToShow)) {
            return;
        }

        mouse = d3.mouse(this);
        closest = $$.findClosestFromTargets(targetsToShow, mouse);

        if ($$.mouseover && (!closest || closest.id !== $$.mouseover.id)) {
            config.data_onmouseout.call($$.api, $$.mouseover);
            $$.mouseover = undefined;
        }

        if (!closest) {
            mouseout();
            return;
        }

        if ($$.isScatterType(closest) || !config.tooltip_grouped) {
            sameXData = [closest];
        } else {
            sameXData = $$.filterByX(targetsToShow, closest.x);
        }

        // show tooltip when cursor is close to some point
        selectedData = sameXData.map(function (d) {
            return $$.addName(d);
        });
        $$.showTooltip(selectedData, this);

        // expand points
        if (config.point_focus_expand_enabled) {
            $$.expandCircles(closest.index, closest.id, true);
        }
        $$.expandBars(closest.index, closest.id, true);

        // Show xgrid focus line
        $$.showXGridFocus(selectedData);

        // Show cursor as pointer if point is close to mouse position
        if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
            $$.svg.select('.' + CLASS.eventRect).style('cursor', 'pointer');
            if (!$$.mouseover) {
                config.data_onmouseover.call($$.api, closest);
                $$.mouseover = closest;
            }
        }
    }).on('click', function () {
        var targetsToShow = $$.filterTargetsToShow($$.data.targets);
        var mouse, closest;
        if ($$.hasArcType(targetsToShow)) {
            return;
        }

        mouse = d3.mouse(this);
        closest = $$.findClosestFromTargets(targetsToShow, mouse);
        if (!closest) {
            return;
        }
        // select if selection enabled
        if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
            $$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll('.' + CLASS.shape + '-' + closest.index).each(function () {
                if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
                    $$.toggleShape(this, closest, closest.index);
                    $$.config.data_onclick.call($$.api, closest, this);
                }
            });
        }
    }).call(config.data_selection_draggable && $$.drag ? d3.behavior.drag().origin(Object).on('drag', function () {
        $$.drag(d3.mouse(this));
    }).on('dragstart', function () {
        $$.dragstart(d3.mouse(this));
    }).on('dragend', function () {
        $$.dragend();
    }) : function () {});
};
c3_chart_internal_fn.dispatchEvent = function (type, index, mouse) {
    var $$ = this,
        selector = '.' + CLASS.eventRect + (!$$.isMultipleX() ? '-' + index : ''),
        eventRect = $$.main.select(selector).node(),
        box = eventRect.getBoundingClientRect(),
        x = box.left + (mouse ? mouse[0] : 0),
        y = box.top + (mouse ? mouse[1] : 0),
        event = document.createEvent("MouseEvents");

    event.initMouseEvent(type, true, true, window, 0, x, y, x, y, false, false, false, false, 0, null);
    eventRect.dispatchEvent(event);
};

c3_chart_internal_fn.initLegend = function () {
    var $$ = this;
    $$.legendItemTextBox = {};
    $$.legendHasRendered = false;
    $$.legend = $$.svg.append("g").attr("transform", $$.getTranslate('legend'));
    if (!$$.config.legend_show) {
        $$.legend.style('visibility', 'hidden');
        $$.hiddenLegendIds = $$.mapToIds($$.data.targets);
        return;
    }
    // MEMO: call here to update legend box and tranlate for all
    // MEMO: translate will be upated by this, so transform not needed in updateLegend()
    $$.updateLegendWithDefaults();
};
c3_chart_internal_fn.updateLegendWithDefaults = function () {
    var $$ = this;
    $$.updateLegend($$.mapToIds($$.data.targets), { withTransform: false, withTransitionForTransform: false, withTransition: false });
};
c3_chart_internal_fn.updateSizeForLegend = function (legendHeight, legendWidth) {
    var $$ = this,
        config = $$.config,
        insetLegendPosition = {
        top: $$.isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : $$.currentHeight - legendHeight - $$.getCurrentPaddingBottom() - config.legend_inset_y,
        left: $$.isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : $$.currentWidth - legendWidth - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
    };

    $$.margin3 = {
        top: $$.isLegendRight ? 0 : $$.isLegendInset ? insetLegendPosition.top : $$.currentHeight - legendHeight,
        right: NaN,
        bottom: 0,
        left: $$.isLegendRight ? $$.currentWidth - legendWidth : $$.isLegendInset ? insetLegendPosition.left : 0
    };
};
c3_chart_internal_fn.transformLegend = function (withTransition) {
    var $$ = this;
    (withTransition ? $$.legend.transition() : $$.legend).attr("transform", $$.getTranslate('legend'));
};
c3_chart_internal_fn.updateLegendStep = function (step) {
    this.legendStep = step;
};
c3_chart_internal_fn.updateLegendItemWidth = function (w) {
    this.legendItemWidth = w;
};
c3_chart_internal_fn.updateLegendItemHeight = function (h) {
    this.legendItemHeight = h;
};
c3_chart_internal_fn.getLegendWidth = function () {
    var $$ = this;
    return $$.config.legend_show ? $$.isLegendRight || $$.isLegendInset ? $$.legendItemWidth * ($$.legendStep + 1) : $$.currentWidth : 0;
};
c3_chart_internal_fn.getLegendHeight = function () {
    var $$ = this,
        h = 0;
    if ($$.config.legend_show) {
        if ($$.isLegendRight) {
            h = $$.currentHeight;
        } else {
            h = Math.max(20, $$.legendItemHeight) * ($$.legendStep + 1);
        }
    }
    return h;
};
c3_chart_internal_fn.opacityForLegend = function (legendItem) {
    return legendItem.classed(CLASS.legendItemHidden) ? null : 1;
};
c3_chart_internal_fn.opacityForUnfocusedLegend = function (legendItem) {
    return legendItem.classed(CLASS.legendItemHidden) ? null : 0.3;
};
c3_chart_internal_fn.toggleFocusLegend = function (targetIds, focus) {
    var $$ = this;
    targetIds = $$.mapToTargetIds(targetIds);
    $$.legend.selectAll('.' + CLASS.legendItem).filter(function (id) {
        return targetIds.indexOf(id) >= 0;
    }).classed(CLASS.legendItemFocused, focus).transition().duration(100).style('opacity', function () {
        var opacity = focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend;
        return opacity.call($$, $$.d3.select(this));
    });
};
c3_chart_internal_fn.revertLegend = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.legend.selectAll('.' + CLASS.legendItem).classed(CLASS.legendItemFocused, false).transition().duration(100).style('opacity', function () {
        return $$.opacityForLegend(d3.select(this));
    });
};
c3_chart_internal_fn.showLegend = function (targetIds) {
    var $$ = this,
        config = $$.config;
    if (!config.legend_show) {
        config.legend_show = true;
        $$.legend.style('visibility', 'visible');
        if (!$$.legendHasRendered) {
            $$.updateLegendWithDefaults();
        }
    }
    $$.removeHiddenLegendIds(targetIds);
    $$.legend.selectAll($$.selectorLegends(targetIds)).style('visibility', 'visible').transition().style('opacity', function () {
        return $$.opacityForLegend($$.d3.select(this));
    });
};
c3_chart_internal_fn.hideLegend = function (targetIds) {
    var $$ = this,
        config = $$.config;
    if (config.legend_show && isEmpty(targetIds)) {
        config.legend_show = false;
        $$.legend.style('visibility', 'hidden');
    }
    $$.addHiddenLegendIds(targetIds);
    $$.legend.selectAll($$.selectorLegends(targetIds)).style('opacity', 0).style('visibility', 'hidden');
};
c3_chart_internal_fn.clearLegendItemTextBoxCache = function () {
    this.legendItemTextBox = {};
};
c3_chart_internal_fn.updateLegend = function (targetIds, options, transitions) {
    var $$ = this,
        config = $$.config;
    var xForLegend, xForLegendText, xForLegendRect, yForLegend, yForLegendText, yForLegendRect, x1ForLegendTile, x2ForLegendTile, yForLegendTile;
    var paddingTop = 4,
        paddingRight = 10,
        maxWidth = 0,
        maxHeight = 0,
        posMin = 10,
        tileWidth = config.legend_item_tile_width + 5;
    var l,
        totalLength = 0,
        offsets = {},
        widths = {},
        heights = {},
        margins = [0],
        steps = {},
        step = 0;
    var withTransition, withTransitionForTransform;
    var texts, rects, tiles, background;

    // Skip elements when their name is set to null
    targetIds = targetIds.filter(function (id) {
        return !isDefined(config.data_names[id]) || config.data_names[id] !== null;
    });

    options = options || {};
    withTransition = getOption(options, "withTransition", true);
    withTransitionForTransform = getOption(options, "withTransitionForTransform", true);

    function getTextBox(textElement, id) {
        if (!$$.legendItemTextBox[id]) {
            $$.legendItemTextBox[id] = $$.getTextRect(textElement.textContent, CLASS.legendItem, textElement);
        }
        return $$.legendItemTextBox[id];
    }

    function updatePositions(textElement, id, index) {
        var reset = index === 0,
            isLast = index === targetIds.length - 1,
            box = getTextBox(textElement, id),
            itemWidth = box.width + tileWidth + (isLast && !($$.isLegendRight || $$.isLegendInset) ? 0 : paddingRight) + config.legend_padding,
            itemHeight = box.height + paddingTop,
            itemLength = $$.isLegendRight || $$.isLegendInset ? itemHeight : itemWidth,
            areaLength = $$.isLegendRight || $$.isLegendInset ? $$.getLegendHeight() : $$.getLegendWidth(),
            margin,
            maxLength;

        // MEMO: care about condifion of step, totalLength
        function updateValues(id, withoutStep) {
            if (!withoutStep) {
                margin = (areaLength - totalLength - itemLength) / 2;
                if (margin < posMin) {
                    margin = (areaLength - itemLength) / 2;
                    totalLength = 0;
                    step++;
                }
            }
            steps[id] = step;
            margins[step] = $$.isLegendInset ? 10 : margin;
            offsets[id] = totalLength;
            totalLength += itemLength;
        }

        if (reset) {
            totalLength = 0;
            step = 0;
            maxWidth = 0;
            maxHeight = 0;
        }

        if (config.legend_show && !$$.isLegendToShow(id)) {
            widths[id] = heights[id] = steps[id] = offsets[id] = 0;
            return;
        }

        widths[id] = itemWidth;
        heights[id] = itemHeight;

        if (!maxWidth || itemWidth >= maxWidth) {
            maxWidth = itemWidth;
        }
        if (!maxHeight || itemHeight >= maxHeight) {
            maxHeight = itemHeight;
        }
        maxLength = $$.isLegendRight || $$.isLegendInset ? maxHeight : maxWidth;

        if (config.legend_equally) {
            Object.keys(widths).forEach(function (id) {
                widths[id] = maxWidth;
            });
            Object.keys(heights).forEach(function (id) {
                heights[id] = maxHeight;
            });
            margin = (areaLength - maxLength * targetIds.length) / 2;
            if (margin < posMin) {
                totalLength = 0;
                step = 0;
                targetIds.forEach(function (id) {
                    updateValues(id);
                });
            } else {
                updateValues(id, true);
            }
        } else {
            updateValues(id);
        }
    }

    if ($$.isLegendInset) {
        step = config.legend_inset_step ? config.legend_inset_step : targetIds.length;
        $$.updateLegendStep(step);
    }

    if ($$.isLegendRight) {
        xForLegend = function xForLegend(id) {
            return maxWidth * steps[id];
        };
        yForLegend = function yForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
    } else if ($$.isLegendInset) {
        xForLegend = function xForLegend(id) {
            return maxWidth * steps[id] + 10;
        };
        yForLegend = function yForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
    } else {
        xForLegend = function xForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
        yForLegend = function yForLegend(id) {
            return maxHeight * steps[id];
        };
    }
    xForLegendText = function xForLegendText(id, i) {
        return xForLegend(id, i) + 4 + config.legend_item_tile_width;
    };
    yForLegendText = function yForLegendText(id, i) {
        return yForLegend(id, i) + 9;
    };
    xForLegendRect = function xForLegendRect(id, i) {
        return xForLegend(id, i);
    };
    yForLegendRect = function yForLegendRect(id, i) {
        return yForLegend(id, i) - 5;
    };
    x1ForLegendTile = function x1ForLegendTile(id, i) {
        return xForLegend(id, i) - 2;
    };
    x2ForLegendTile = function x2ForLegendTile(id, i) {
        return xForLegend(id, i) - 2 + config.legend_item_tile_width;
    };
    yForLegendTile = function yForLegendTile(id, i) {
        return yForLegend(id, i) + 4;
    };

    // Define g for legend area
    l = $$.legend.selectAll('.' + CLASS.legendItem).data(targetIds).enter().append('g').attr('class', function (id) {
        return $$.generateClass(CLASS.legendItem, id);
    }).style('visibility', function (id) {
        return $$.isLegendToShow(id) ? 'visible' : 'hidden';
    }).style('cursor', 'pointer').on('click', function (id) {
        if (config.legend_item_onclick) {
            config.legend_item_onclick.call($$, id);
        } else {
            if ($$.d3.event.altKey) {
                $$.api.hide();
                $$.api.show(id);
            } else {
                $$.api.toggle(id);
                $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert();
            }
        }
    }).on('mouseover', function (id) {
        if (config.legend_item_onmouseover) {
            config.legend_item_onmouseover.call($$, id);
        } else {
            $$.d3.select(this).classed(CLASS.legendItemFocused, true);
            if (!$$.transiting && $$.isTargetToShow(id)) {
                $$.api.focus(id);
            }
        }
    }).on('mouseout', function (id) {
        if (config.legend_item_onmouseout) {
            config.legend_item_onmouseout.call($$, id);
        } else {
            $$.d3.select(this).classed(CLASS.legendItemFocused, false);
            $$.api.revert();
        }
    });
    l.append('text').text(function (id) {
        return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }).each(function (id, i) {
        updatePositions(this, id, i);
    }).style("pointer-events", "none").attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200).attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendText);
    l.append('rect').attr("class", CLASS.legendItemEvent).style('fill-opacity', 0).attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendRect : -200).attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendRect);
    l.append('line').attr('class', CLASS.legendItemTile).style('stroke', $$.color).style("pointer-events", "none").attr('x1', $$.isLegendRight || $$.isLegendInset ? x1ForLegendTile : -200).attr('y1', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr('x2', $$.isLegendRight || $$.isLegendInset ? x2ForLegendTile : -200).attr('y2', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr('stroke-width', config.legend_item_tile_height);

    // Set background for inset legend
    background = $$.legend.select('.' + CLASS.legendBackground + ' rect');
    if ($$.isLegendInset && maxWidth > 0 && background.size() === 0) {
        background = $$.legend.insert('g', '.' + CLASS.legendItem).attr("class", CLASS.legendBackground).append('rect');
    }

    texts = $$.legend.selectAll('text').data(targetIds).text(function (id) {
        return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    } // MEMO: needed for update
    ).each(function (id, i) {
        updatePositions(this, id, i);
    });
    (withTransition ? texts.transition() : texts).attr('x', xForLegendText).attr('y', yForLegendText);

    rects = $$.legend.selectAll('rect.' + CLASS.legendItemEvent).data(targetIds);
    (withTransition ? rects.transition() : rects).attr('width', function (id) {
        return widths[id];
    }).attr('height', function (id) {
        return heights[id];
    }).attr('x', xForLegendRect).attr('y', yForLegendRect);

    tiles = $$.legend.selectAll('line.' + CLASS.legendItemTile).data(targetIds);
    (withTransition ? tiles.transition() : tiles).style('stroke', $$.color).attr('x1', x1ForLegendTile).attr('y1', yForLegendTile).attr('x2', x2ForLegendTile).attr('y2', yForLegendTile);

    if (background) {
        (withTransition ? background.transition() : background).attr('height', $$.getLegendHeight() - 12).attr('width', maxWidth * (step + 1) + 10);
    }

    // toggle legend state
    $$.legend.selectAll('.' + CLASS.legendItem).classed(CLASS.legendItemHidden, function (id) {
        return !$$.isTargetToShow(id);
    });

    // Update all to reflect change of legend
    $$.updateLegendItemWidth(maxWidth);
    $$.updateLegendItemHeight(maxHeight);
    $$.updateLegendStep(step);
    // Update size and scale
    $$.updateSizes();
    $$.updateScales();
    $$.updateSvgSize();
    // Update g positions
    $$.transformAll(withTransitionForTransform, transitions);
    $$.legendHasRendered = true;
};

c3_chart_internal_fn.initRegion = function () {
    var $$ = this;
    $$.region = $$.main.append('g').attr("clip-path", $$.clipPath).attr("class", CLASS.regions);
};
c3_chart_internal_fn.updateRegion = function (duration) {
    var $$ = this,
        config = $$.config;

    // hide if arc type
    $$.region.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

    $$.mainRegion = $$.main.select('.' + CLASS.regions).selectAll('.' + CLASS.region).data(config.regions);
    $$.mainRegion.enter().append('g').append('rect').style("fill-opacity", 0);
    $$.mainRegion.attr('class', $$.classRegion.bind($$));
    $$.mainRegion.exit().transition().duration(duration).style("opacity", 0).remove();
};
c3_chart_internal_fn.redrawRegion = function (withTransition) {
    var $$ = this,
        regions = $$.mainRegion.selectAll('rect').each(function () {
        // data is binded to g and it's not transferred to rect (child node) automatically,
        // then data of each rect has to be updated manually.
        // TODO: there should be more efficient way to solve this?
        var parentData = $$.d3.select(this.parentNode).datum();
        $$.d3.select(this).datum(parentData);
    }),
        x = $$.regionX.bind($$),
        y = $$.regionY.bind($$),
        w = $$.regionWidth.bind($$),
        h = $$.regionHeight.bind($$);
    return [(withTransition ? regions.transition() : regions).attr("x", x).attr("y", y).attr("width", w).attr("height", h).style("fill-opacity", function (d) {
        return isValue(d.opacity) ? d.opacity : 0.1;
    })];
};
c3_chart_internal_fn.regionX = function (d) {
    var $$ = this,
        config = $$.config,
        xPos,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        xPos = config.axis_rotated ? 'start' in d ? yScale(d.start) : 0 : 0;
    } else {
        xPos = config.axis_rotated ? 0 : 'start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0;
    }
    return xPos;
};
c3_chart_internal_fn.regionY = function (d) {
    var $$ = this,
        config = $$.config,
        yPos,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        yPos = config.axis_rotated ? 0 : 'end' in d ? yScale(d.end) : 0;
    } else {
        yPos = config.axis_rotated ? 'start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0 : 0;
    }
    return yPos;
};
c3_chart_internal_fn.regionWidth = function (d) {
    var $$ = this,
        config = $$.config,
        start = $$.regionX(d),
        end,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        end = config.axis_rotated ? 'end' in d ? yScale(d.end) : $$.width : $$.width;
    } else {
        end = config.axis_rotated ? $$.width : 'end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.width;
    }
    return end < start ? 0 : end - start;
};
c3_chart_internal_fn.regionHeight = function (d) {
    var $$ = this,
        config = $$.config,
        start = this.regionY(d),
        end,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        end = config.axis_rotated ? $$.height : 'start' in d ? yScale(d.start) : $$.height;
    } else {
        end = config.axis_rotated ? 'end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.height : $$.height;
    }
    return end < start ? 0 : end - start;
};
c3_chart_internal_fn.isRegionOnX = function (d) {
    return !d.axis || d.axis === 'x';
};

c3_chart_internal_fn.getScale = function (min, max, forTimeseries) {
    return (forTimeseries ? this.d3.time.scale() : this.d3.scale.linear()).range([min, max]);
};
c3_chart_internal_fn.getX = function (min, max, domain, offset) {
    var $$ = this,
        scale = $$.getScale(min, max, $$.isTimeSeries()),
        _scale = domain ? scale.domain(domain) : scale,
        key;
    // Define customized scale if categorized axis
    if ($$.isCategorized()) {
        offset = offset || function () {
            return 0;
        };
        scale = function scale(d, raw) {
            var v = _scale(d) + offset(d);
            return raw ? v : Math.ceil(v);
        };
    } else {
        scale = function scale(d, raw) {
            var v = _scale(d);
            return raw ? v : Math.ceil(v);
        };
    }
    // define functions
    for (key in _scale) {
        scale[key] = _scale[key];
    }
    scale.orgDomain = function () {
        return _scale.domain();
    };
    // define custom domain() for categorized axis
    if ($$.isCategorized()) {
        scale.domain = function (domain) {
            if (!arguments.length) {
                domain = this.orgDomain();
                return [domain[0], domain[1] + 1];
            }
            _scale.domain(domain);
            return scale;
        };
    }
    return scale;
};
c3_chart_internal_fn.getY = function (min, max, domain) {
    var scale = this.getScale(min, max, this.isTimeSeriesY());
    if (domain) {
        scale.domain(domain);
    }
    return scale;
};
c3_chart_internal_fn.getYScale = function (id) {
    return this.axis.getId(id) === 'y2' ? this.y2 : this.y;
};
c3_chart_internal_fn.getSubYScale = function (id) {
    return this.axis.getId(id) === 'y2' ? this.subY2 : this.subY;
};
c3_chart_internal_fn.updateScales = function () {
    var $$ = this,
        config = $$.config,
        forInit = !$$.x;
    // update edges
    $$.xMin = config.axis_rotated ? 1 : 0;
    $$.xMax = config.axis_rotated ? $$.height : $$.width;
    $$.yMin = config.axis_rotated ? 0 : $$.height;
    $$.yMax = config.axis_rotated ? $$.width : 1;
    $$.subXMin = $$.xMin;
    $$.subXMax = $$.xMax;
    $$.subYMin = config.axis_rotated ? 0 : $$.height2;
    $$.subYMax = config.axis_rotated ? $$.width2 : 1;
    // update scales
    $$.x = $$.getX($$.xMin, $$.xMax, forInit ? undefined : $$.x.orgDomain(), function () {
        return $$.xAxis.tickOffset();
    });
    $$.y = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y_default : $$.y.domain());
    $$.y2 = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y2_default : $$.y2.domain());
    $$.subX = $$.getX($$.xMin, $$.xMax, $$.orgXDomain, function (d) {
        return d % 1 ? 0 : $$.subXAxis.tickOffset();
    });
    $$.subY = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y_default : $$.subY.domain());
    $$.subY2 = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y2_default : $$.subY2.domain());
    // update axes
    $$.xAxisTickFormat = $$.axis.getXAxisTickFormat();
    $$.xAxisTickValues = $$.axis.getXAxisTickValues();
    $$.yAxisTickValues = $$.axis.getYAxisTickValues();
    $$.y2AxisTickValues = $$.axis.getY2AxisTickValues();

    $$.xAxis = $$.axis.getXAxis($$.x, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
    $$.subXAxis = $$.axis.getXAxis($$.subX, $$.subXOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
    $$.yAxis = $$.axis.getYAxis($$.y, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, config.axis_y_tick_outer);
    $$.y2Axis = $$.axis.getYAxis($$.y2, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, config.axis_y2_tick_outer);

    // Set initialized scales to brush and zoom
    if (!forInit) {
        if ($$.brush) {
            $$.brush.scale($$.subX);
        }
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x);
        }
    }
    // update for arc
    if ($$.updateArc) {
        $$.updateArc();
    }
};

c3_chart_internal_fn.selectPoint = function (target, d, i) {
    var $$ = this,
        config = $$.config,
        cx = (config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
        cy = (config.axis_rotated ? $$.circleX : $$.circleY).bind($$),
        r = $$.pointSelectR.bind($$);
    config.data_onselected.call($$.api, d, target.node());
    // add selected-circle on low layer g
    $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i).data([d]).enter().append('circle').attr("class", function () {
        return $$.generateClass(CLASS.selectedCircle, i);
    }).attr("cx", cx).attr("cy", cy).attr("stroke", function () {
        return $$.color(d);
    }).attr("r", function (d) {
        return $$.pointSelectR(d) * 1.4;
    }).transition().duration(100).attr("r", r);
};
c3_chart_internal_fn.unselectPoint = function (target, d, i) {
    var $$ = this;
    $$.config.data_onunselected.call($$.api, d, target.node());
    // remove selected-circle from low layer g
    $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i).transition().duration(100).attr('r', 0).remove();
};
c3_chart_internal_fn.togglePoint = function (selected, target, d, i) {
    selected ? this.selectPoint(target, d, i) : this.unselectPoint(target, d, i);
};
c3_chart_internal_fn.selectPath = function (target, d) {
    var $$ = this;
    $$.config.data_onselected.call($$, d, target.node());
    if ($$.config.interaction_brighten) {
        target.transition().duration(100).style("fill", function () {
            return $$.d3.rgb($$.color(d)).brighter(0.75);
        });
    }
};
c3_chart_internal_fn.unselectPath = function (target, d) {
    var $$ = this;
    $$.config.data_onunselected.call($$, d, target.node());
    if ($$.config.interaction_brighten) {
        target.transition().duration(100).style("fill", function () {
            return $$.color(d);
        });
    }
};
c3_chart_internal_fn.togglePath = function (selected, target, d, i) {
    selected ? this.selectPath(target, d, i) : this.unselectPath(target, d, i);
};
c3_chart_internal_fn.getToggle = function (that, d) {
    var $$ = this,
        toggle;
    if (that.nodeName === 'circle') {
        if ($$.isStepType(d)) {
            // circle is hidden in step chart, so treat as within the click area
            toggle = function toggle() {}; // TODO: how to select step chart?
        } else {
            toggle = $$.togglePoint;
        }
    } else if (that.nodeName === 'path') {
        toggle = $$.togglePath;
    }
    return toggle;
};
c3_chart_internal_fn.toggleShape = function (that, d, i) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        shape = d3.select(that),
        isSelected = shape.classed(CLASS.SELECTED),
        toggle = $$.getToggle(that, d).bind($$);

    if (config.data_selection_enabled && config.data_selection_isselectable(d)) {
        if (!config.data_selection_multiple) {
            $$.main.selectAll('.' + CLASS.shapes + (config.data_selection_grouped ? $$.getTargetSelectorSuffix(d.id) : "")).selectAll('.' + CLASS.shape).each(function (d, i) {
                var shape = d3.select(this);
                if (shape.classed(CLASS.SELECTED)) {
                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                }
            });
        }
        shape.classed(CLASS.SELECTED, !isSelected);
        toggle(!isSelected, shape, d, i);
    }
};

c3_chart_internal_fn.initBar = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartBars);
};
c3_chart_internal_fn.updateTargetsForBar = function (targets) {
    var $$ = this,
        config = $$.config,
        mainBarUpdate,
        mainBarEnter,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainBarUpdate = $$.main.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar).data(targets).attr('class', function (d) {
        return classChartBar(d) + classFocus(d);
    });
    mainBarEnter = mainBarUpdate.enter().append('g').attr('class', classChartBar).style("pointer-events", "none");
    // Bars for each data
    mainBarEnter.append('g').attr("class", classBars).style("cursor", function (d) {
        return config.data_selection_isselectable(d) ? "pointer" : null;
    });
};
c3_chart_internal_fn.updateBar = function (durationForExit) {
    var $$ = this,
        barData = $$.barData.bind($$),
        classBar = $$.classBar.bind($$),
        initialOpacity = $$.initialOpacity.bind($$),
        color = function color(d) {
        return $$.color(d.id);
    };
    $$.mainBar = $$.main.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar).data(barData);
    $$.mainBar.enter().append('path').attr("class", classBar).style("stroke", color).style("fill", color);
    $$.mainBar.style("opacity", initialOpacity);
    $$.mainBar.exit().transition().duration(durationForExit).remove();
};
c3_chart_internal_fn.redrawBar = function (drawBar, withTransition) {
    return [(withTransition ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr('d', drawBar).style("stroke", this.color).style("fill", this.color).style("opacity", 1)];
};
c3_chart_internal_fn.getBarW = function (axis, barTargetsNum) {
    var $$ = this,
        config = $$.config,
        w = typeof config.bar_width === 'number' ? config.bar_width : barTargetsNum ? axis.tickInterval() * config.bar_width_ratio / barTargetsNum : 0;
    return config.bar_width_max && w > config.bar_width_max ? config.bar_width_max : w;
};
c3_chart_internal_fn.getBars = function (i, id) {
    var $$ = this;
    return (id ? $$.main.selectAll('.' + CLASS.bars + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.bar + (isValue(i) ? '-' + i : ''));
};
c3_chart_internal_fn.expandBars = function (i, id, reset) {
    var $$ = this;
    if (reset) {
        $$.unexpandBars();
    }
    $$.getBars(i, id).classed(CLASS.EXPANDED, true);
};
c3_chart_internal_fn.unexpandBars = function (i) {
    var $$ = this;
    $$.getBars(i).classed(CLASS.EXPANDED, false);
};
c3_chart_internal_fn.generateDrawBar = function (barIndices, isSub) {
    var $$ = this,
        config = $$.config,
        getPoints = $$.generateGetBarPoints(barIndices, isSub);
    return function (d, i) {
        // 4 points that make a bar
        var points = getPoints(d, i);

        // switch points if axis is rotated, not applicable for sub chart
        var indexX = config.axis_rotated ? 1 : 0;
        var indexY = config.axis_rotated ? 0 : 1;

        var path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' + 'L' + points[1][indexX] + ',' + points[1][indexY] + ' ' + 'L' + points[2][indexX] + ',' + points[2][indexY] + ' ' + 'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' + 'z';

        return path;
    };
};
c3_chart_internal_fn.generateGetBarPoints = function (barIndices, isSub) {
    var $$ = this,
        axis = isSub ? $$.subXAxis : $$.xAxis,
        barTargetsNum = barIndices.__max__ + 1,
        barW = $$.getBarW(axis, barTargetsNum),
        barX = $$.getShapeX(barW, barTargetsNum, barIndices, !!isSub),
        barY = $$.getShapeY(!!isSub),
        barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
        barSpaceOffset = barW * ($$.config.bar_space / 2),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = barOffset(d, i) || y0,
            // offset is for stacked bar chart
        posX = barX(d),
            posY = barY(d);
        // fix posY not to overflow opposite quadrant
        if ($$.config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 4 points that make a bar
        return [[posX + barSpaceOffset, offset], [posX + barSpaceOffset, posY - (y0 - offset)], [posX + barW - barSpaceOffset, posY - (y0 - offset)], [posX + barW - barSpaceOffset, offset]];
    };
};
c3_chart_internal_fn.isWithinBar = function (that) {
    var mouse = this.d3.mouse(that),
        box = that.getBoundingClientRect(),
        seg0 = that.pathSegList.getItem(0),
        seg1 = that.pathSegList.getItem(1),
        x = Math.min(seg0.x, seg1.x),
        y = Math.min(seg0.y, seg1.y),
        w = box.width,
        h = box.height,
        offset = 2,
        sx = x - offset,
        ex = x + w + offset,
        sy = y + h + offset,
        ey = y - offset;
    return sx < mouse[0] && mouse[0] < ex && ey < mouse[1] && mouse[1] < sy;
};

c3_chart_internal_fn.getShapeIndices = function (typeFilter) {
    var $$ = this,
        config = $$.config,
        indices = {},
        i = 0,
        j,
        k;
    $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
        for (j = 0; j < config.data_groups.length; j++) {
            if (config.data_groups[j].indexOf(d.id) < 0) {
                continue;
            }
            for (k = 0; k < config.data_groups[j].length; k++) {
                if (config.data_groups[j][k] in indices) {
                    indices[d.id] = indices[config.data_groups[j][k]];
                    break;
                }
            }
        }
        if (isUndefined(indices[d.id])) {
            indices[d.id] = i++;
        }
    });
    indices.__max__ = i - 1;
    return indices;
};
c3_chart_internal_fn.getShapeX = function (offset, targetsNum, indices, isSub) {
    var $$ = this,
        scale = isSub ? $$.subX : $$.x;
    return function (d) {
        var index = d.id in indices ? indices[d.id] : 0;
        return d.x || d.x === 0 ? scale(d.x) - offset * (targetsNum / 2 - index) : 0;
    };
};
c3_chart_internal_fn.getShapeY = function (isSub) {
    var $$ = this;
    return function (d) {
        var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id);
        return scale(d.value);
    };
};
c3_chart_internal_fn.getShapeOffset = function (typeFilter, indices, isSub) {
    var $$ = this,
        targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
        targetIds = targets.map(function (t) {
        return t.id;
    });
    return function (d, i) {
        var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
            y0 = scale(0),
            offset = y0;
        targets.forEach(function (t) {
            var values = $$.isStepType(d) ? $$.convertValuesToStep(t.values) : t.values;
            if (t.id === d.id || indices[t.id] !== indices[d.id]) {
                return;
            }
            if (targetIds.indexOf(t.id) < targetIds.indexOf(d.id)) {
                // check if the x values line up
                if (typeof values[i] === 'undefined' || +values[i].x !== +d.x) {
                    // "+" for timeseries
                    // if not, try to find the value that does line up
                    i = -1;
                    values.forEach(function (v, j) {
                        if (v.x === d.x) {
                            i = j;
                        }
                    });
                }
                if (i in values && values[i].value * d.value >= 0) {
                    offset += scale(values[i].value) - y0;
                }
            }
        });
        return offset;
    };
};
c3_chart_internal_fn.isWithinShape = function (that, d) {
    var $$ = this,
        shape = $$.d3.select(that),
        isWithin;
    if (!$$.isTargetToShow(d.id)) {
        isWithin = false;
    } else if (that.nodeName === 'circle') {
        isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.pointSelectR(d) * 1.5);
    } else if (that.nodeName === 'path') {
        isWithin = shape.classed(CLASS.bar) ? $$.isWithinBar(that) : true;
    }
    return isWithin;
};

c3_chart_internal_fn.getInterpolate = function (d) {
    var $$ = this,
        interpolation = $$.isInterpolationType($$.config.spline_interpolation_type) ? $$.config.spline_interpolation_type : 'cardinal';
    return $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? $$.config.line_step_type : "linear";
};

c3_chart_internal_fn.initLine = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartLines);
};
c3_chart_internal_fn.updateTargetsForLine = function (targets) {
    var $$ = this,
        config = $$.config,
        mainLineUpdate,
        mainLineEnter,
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classAreas = $$.classAreas.bind($$),
        classCircles = $$.classCircles.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainLineUpdate = $$.main.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine).data(targets).attr('class', function (d) {
        return classChartLine(d) + classFocus(d);
    });
    mainLineEnter = mainLineUpdate.enter().append('g').attr('class', classChartLine).style('opacity', 0).style("pointer-events", "none");
    // Lines for each data
    mainLineEnter.append('g').attr("class", classLines);
    // Areas
    mainLineEnter.append('g').attr('class', classAreas);
    // Circles for each data point on lines
    mainLineEnter.append('g').attr("class", function (d) {
        return $$.generateClass(CLASS.selectedCircles, d.id);
    });
    mainLineEnter.append('g').attr("class", classCircles).style("cursor", function (d) {
        return config.data_selection_isselectable(d) ? "pointer" : null;
    });
    // Update date for selected circles
    targets.forEach(function (t) {
        $$.main.selectAll('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll('.' + CLASS.selectedCircle).each(function (d) {
            d.value = t.values[d.index].value;
        });
    });
    // MEMO: can not keep same color...
    //mainLineUpdate.exit().remove();
};
c3_chart_internal_fn.updateLine = function (durationForExit) {
    var $$ = this;
    $$.mainLine = $$.main.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line).data($$.lineData.bind($$));
    $$.mainLine.enter().append('path').attr('class', $$.classLine.bind($$)).style("stroke", $$.color);
    $$.mainLine.style("opacity", $$.initialOpacity.bind($$)).style('shape-rendering', function (d) {
        return $$.isStepType(d) ? 'crispEdges' : '';
    }).attr('transform', null);
    $$.mainLine.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawLine = function (drawLine, withTransition) {
    return [(withTransition ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", drawLine).style("stroke", this.color).style("opacity", 1)];
};
c3_chart_internal_fn.generateDrawLine = function (lineIndices, isSub) {
    var $$ = this,
        config = $$.config,
        line = $$.d3.svg.line(),
        getPoints = $$.generateGetLinePoints(lineIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function xValue(d) {
        return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        yValue = function yValue(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(d.value);
    };

    line = config.axis_rotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue);
    if (!config.line_connectNull) {
        line = line.defined(function (d) {
            return d.value != null;
        });
    }
    return function (d) {
        var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
            x = isSub ? $$.x : $$.subX,
            y = yScaleGetter.call($$, d.id),
            x0 = 0,
            y0 = 0,
            path;
        if ($$.isLineType(d)) {
            if (config.data_regions[d.id]) {
                path = $$.lineWithRegions(values, x, y, config.data_regions[d.id]);
            } else {
                if ($$.isStepType(d)) {
                    values = $$.convertValuesToStep(values);
                }
                path = line.interpolate($$.getInterpolate(d))(values);
            }
        } else {
            if (values[0]) {
                x0 = x(values[0].x);
                y0 = y(values[0].value);
            }
            path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
        }
        return path ? path : "M 0 0";
    };
};
c3_chart_internal_fn.generateGetLinePoints = function (lineIndices, isSub) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        lineTargetsNum = lineIndices.__max__ + 1,
        x = $$.getShapeX(0, lineTargetsNum, lineIndices, !!isSub),
        y = $$.getShapeY(!!isSub),
        lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = lineOffset(d, i) || y0,
            // offset is for stacked area chart
        posX = x(d),
            posY = y(d);
        // fix posY not to overflow opposite quadrant
        if (config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 1 point that marks the line position
        return [[posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, posY - (y0 - offset)] // needed for compatibility
        ];
    };
};

c3_chart_internal_fn.lineWithRegions = function (d, x, y, _regions) {
    var $$ = this,
        config = $$.config,
        prev = -1,
        i,
        j,
        s = "M",
        sWithRegion,
        xp,
        yp,
        dx,
        dy,
        dd,
        diff,
        diffx2,
        xOffset = $$.isCategorized() ? 0.5 : 0,
        xValue,
        yValue,
        regions = [];

    function isWithinRegions(x, regions) {
        var i;
        for (i = 0; i < regions.length; i++) {
            if (regions[i].start < x && x <= regions[i].end) {
                return true;
            }
        }
        return false;
    }

    // Check start/end of regions
    if (isDefined(_regions)) {
        for (i = 0; i < _regions.length; i++) {
            regions[i] = {};
            if (isUndefined(_regions[i].start)) {
                regions[i].start = d[0].x;
            } else {
                regions[i].start = $$.isTimeSeries() ? $$.parseDate(_regions[i].start) : _regions[i].start;
            }
            if (isUndefined(_regions[i].end)) {
                regions[i].end = d[d.length - 1].x;
            } else {
                regions[i].end = $$.isTimeSeries() ? $$.parseDate(_regions[i].end) : _regions[i].end;
            }
        }
    }

    // Set scales
    xValue = config.axis_rotated ? function (d) {
        return y(d.value);
    } : function (d) {
        return x(d.x);
    };
    yValue = config.axis_rotated ? function (d) {
        return x(d.x);
    } : function (d) {
        return y(d.value);
    };

    // Define svg generator function for region
    function generateM(points) {
        return 'M' + points[0][0] + ' ' + points[0][1] + ' ' + points[1][0] + ' ' + points[1][1];
    }
    if ($$.isTimeSeries()) {
        sWithRegion = function sWithRegion(d0, d1, j, diff) {
            var x0 = d0.x.getTime(),
                x_diff = d1.x - d0.x,
                xv0 = new Date(x0 + x_diff * j),
                xv1 = new Date(x0 + x_diff * (j + diff)),
                points;
            if (config.axis_rotated) {
                points = [[y(yp(j)), x(xv0)], [y(yp(j + diff)), x(xv1)]];
            } else {
                points = [[x(xv0), y(yp(j))], [x(xv1), y(yp(j + diff))]];
            }
            return generateM(points);
        };
    } else {
        sWithRegion = function sWithRegion(d0, d1, j, diff) {
            var points;
            if (config.axis_rotated) {
                points = [[y(yp(j), true), x(xp(j))], [y(yp(j + diff), true), x(xp(j + diff))]];
            } else {
                points = [[x(xp(j), true), y(yp(j))], [x(xp(j + diff), true), y(yp(j + diff))]];
            }
            return generateM(points);
        };
    }

    // Generate
    for (i = 0; i < d.length; i++) {

        // Draw as normal
        if (isUndefined(regions) || !isWithinRegions(d[i].x, regions)) {
            s += " " + xValue(d[i]) + " " + yValue(d[i]);
        }
        // Draw with region // TODO: Fix for horizotal charts
        else {
                xp = $$.getScale(d[i - 1].x + xOffset, d[i].x + xOffset, $$.isTimeSeries());
                yp = $$.getScale(d[i - 1].value, d[i].value);

                dx = x(d[i].x) - x(d[i - 1].x);
                dy = y(d[i].value) - y(d[i - 1].value);
                dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                diff = 2 / dd;
                diffx2 = diff * 2;

                for (j = diff; j <= 1; j += diffx2) {
                    s += sWithRegion(d[i - 1], d[i], j, diff);
                }
            }
        prev = d[i].x;
    }

    return s;
};

c3_chart_internal_fn.updateArea = function (durationForExit) {
    var $$ = this,
        d3 = $$.d3;
    $$.mainArea = $$.main.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area).data($$.lineData.bind($$));
    $$.mainArea.enter().append('path').attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
        $$.orgAreaOpacity = +d3.select(this).style('opacity');return 0;
    });
    $$.mainArea.style("opacity", $$.orgAreaOpacity);
    $$.mainArea.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawArea = function (drawArea, withTransition) {
    return [(withTransition ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", drawArea).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
};
c3_chart_internal_fn.generateDrawArea = function (areaIndices, isSub) {
    var $$ = this,
        config = $$.config,
        area = $$.d3.svg.area(),
        getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function xValue(d) {
        return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        value0 = function value0(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.getAreaBaseValue(d.id));
    },
        value1 = function value1(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)(d.value);
    };

    area = config.axis_rotated ? area.x0(value0).x1(value1).y(xValue) : area.x(xValue).y0(config.area_above ? 0 : value0).y1(value1);
    if (!config.line_connectNull) {
        area = area.defined(function (d) {
            return d.value !== null;
        });
    }

    return function (d) {
        var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
            x0 = 0,
            y0 = 0,
            path;
        if ($$.isAreaType(d)) {
            if ($$.isStepType(d)) {
                values = $$.convertValuesToStep(values);
            }
            path = area.interpolate($$.getInterpolate(d))(values);
        } else {
            if (values[0]) {
                x0 = $$.x(values[0].x);
                y0 = $$.getYScale(d.id)(values[0].value);
            }
            path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
        }
        return path ? path : "M 0 0";
    };
};
c3_chart_internal_fn.getAreaBaseValue = function () {
    return 0;
};
c3_chart_internal_fn.generateGetAreaPoints = function (areaIndices, isSub) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        areaTargetsNum = areaIndices.__max__ + 1,
        x = $$.getShapeX(0, areaTargetsNum, areaIndices, !!isSub),
        y = $$.getShapeY(!!isSub),
        areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = areaOffset(d, i) || y0,
            // offset is for stacked area chart
        posX = x(d),
            posY = y(d);
        // fix posY not to overflow opposite quadrant
        if (config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 1 point that marks the area position
        return [[posX, offset], [posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, offset] // needed for compatibility
        ];
    };
};

c3_chart_internal_fn.updateCircle = function () {
    var $$ = this;
    $$.mainCircle = $$.main.selectAll('.' + CLASS.circles).selectAll('.' + CLASS.circle).data($$.lineOrScatterData.bind($$));
    $$.mainCircle.enter().append("circle").attr("class", $$.classCircle.bind($$)).attr("r", $$.pointR.bind($$)).style("fill", $$.color);
    $$.mainCircle.style("opacity", $$.initialOpacityForCircle.bind($$));
    $$.mainCircle.exit().remove();
};
c3_chart_internal_fn.redrawCircle = function (cx, cy, withTransition) {
    var selectedCircles = this.main.selectAll('.' + CLASS.selectedCircle);
    return [(withTransition ? this.mainCircle.transition(Math.random().toString()) : this.mainCircle).style('opacity', this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", cx).attr("cy", cy), (withTransition ? selectedCircles.transition(Math.random().toString()) : selectedCircles).attr("cx", cx).attr("cy", cy)];
};
c3_chart_internal_fn.circleX = function (d) {
    return d.x || d.x === 0 ? this.x(d.x) : null;
};
c3_chart_internal_fn.updateCircleY = function () {
    var $$ = this,
        lineIndices,
        getPoints;
    if ($$.config.data_groups.length > 0) {
        lineIndices = $$.getShapeIndices($$.isLineType), getPoints = $$.generateGetLinePoints(lineIndices);
        $$.circleY = function (d, i) {
            return getPoints(d, i)[0][1];
        };
    } else {
        $$.circleY = function (d) {
            return $$.getYScale(d.id)(d.value);
        };
    }
};
c3_chart_internal_fn.getCircles = function (i, id) {
    var $$ = this;
    return (id ? $$.main.selectAll('.' + CLASS.circles + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.circle + (isValue(i) ? '-' + i : ''));
};
c3_chart_internal_fn.expandCircles = function (i, id, reset) {
    var $$ = this,
        r = $$.pointExpandedR.bind($$);
    if (reset) {
        $$.unexpandCircles();
    }
    $$.getCircles(i, id).classed(CLASS.EXPANDED, true).attr('r', r);
};
c3_chart_internal_fn.unexpandCircles = function (i) {
    var $$ = this,
        r = $$.pointR.bind($$);
    $$.getCircles(i).filter(function () {
        return $$.d3.select(this).classed(CLASS.EXPANDED);
    }).classed(CLASS.EXPANDED, false).attr('r', r);
};
c3_chart_internal_fn.pointR = function (d) {
    var $$ = this,
        config = $$.config;
    return $$.isStepType(d) ? 0 : isFunction(config.point_r) ? config.point_r(d) : config.point_r;
};
c3_chart_internal_fn.pointExpandedR = function (d) {
    var $$ = this,
        config = $$.config;
    if (config.point_focus_expand_enabled) {
        return isFunction(config.point_focus_expand_r) ? config.point_focus_expand_r(d) : config.point_focus_expand_r ? config.point_focus_expand_r : $$.pointR(d) * 1.75;
    } else {
        return $$.pointR(d);
    }
};
c3_chart_internal_fn.pointSelectR = function (d) {
    var $$ = this,
        config = $$.config;
    return isFunction(config.point_select_r) ? config.point_select_r(d) : config.point_select_r ? config.point_select_r : $$.pointR(d) * 4;
};
c3_chart_internal_fn.isWithinCircle = function (that, r) {
    var d3 = this.d3,
        mouse = d3.mouse(that),
        d3_this = d3.select(that),
        cx = +d3_this.attr("cx"),
        cy = +d3_this.attr("cy");
    return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < r;
};
c3_chart_internal_fn.isWithinStep = function (that, y) {
    return Math.abs(y - this.d3.mouse(that)[1]) < 30;
};

c3_chart_internal_fn.getCurrentWidth = function () {
    var $$ = this,
        config = $$.config;
    return config.size_width ? config.size_width : $$.getParentWidth();
};
c3_chart_internal_fn.getCurrentHeight = function () {
    var $$ = this,
        config = $$.config,
        h = config.size_height ? config.size_height : $$.getParentHeight();
    return h > 0 ? h : 320 / ($$.hasType('gauge') && !config.gauge_fullCircle ? 2 : 1);
};
c3_chart_internal_fn.getCurrentPaddingTop = function () {
    var $$ = this,
        config = $$.config,
        padding = isValue(config.padding_top) ? config.padding_top : 0;
    if ($$.title && $$.title.node()) {
        padding += $$.getTitlePadding();
    }
    return padding;
};
c3_chart_internal_fn.getCurrentPaddingBottom = function () {
    var config = this.config;
    return isValue(config.padding_bottom) ? config.padding_bottom : 0;
};
c3_chart_internal_fn.getCurrentPaddingLeft = function (withoutRecompute) {
    var $$ = this,
        config = $$.config;
    if (isValue(config.padding_left)) {
        return config.padding_left;
    } else if (config.axis_rotated) {
        return !config.axis_x_show ? 1 : Math.max(ceil10($$.getAxisWidthByAxisId('x', withoutRecompute)), 40);
    } else if (!config.axis_y_show || config.axis_y_inner) {
        // && !config.axis_rotated
        return $$.axis.getYAxisLabelPosition().isOuter ? 30 : 1;
    } else {
        return ceil10($$.getAxisWidthByAxisId('y', withoutRecompute));
    }
};
c3_chart_internal_fn.getCurrentPaddingRight = function () {
    var $$ = this,
        config = $$.config,
        defaultPadding = 10,
        legendWidthOnRight = $$.isLegendRight ? $$.getLegendWidth() + 20 : 0;
    if (isValue(config.padding_right)) {
        return config.padding_right + 1; // 1 is needed not to hide tick line
    } else if (config.axis_rotated) {
        return defaultPadding + legendWidthOnRight;
    } else if (!config.axis_y2_show || config.axis_y2_inner) {
        // && !config.axis_rotated
        return 2 + legendWidthOnRight + ($$.axis.getY2AxisLabelPosition().isOuter ? 20 : 0);
    } else {
        return ceil10($$.getAxisWidthByAxisId('y2')) + legendWidthOnRight;
    }
};

c3_chart_internal_fn.getParentRectValue = function (key) {
    var parent = this.selectChart.node(),
        v;
    while (parent && parent.tagName !== 'BODY') {
        try {
            v = parent.getBoundingClientRect()[key];
        } catch (e) {
            if (key === 'width') {
                // In IE in certain cases getBoundingClientRect
                // will cause an "unspecified error"
                v = parent.offsetWidth;
            }
        }
        if (v) {
            break;
        }
        parent = parent.parentNode;
    }
    return v;
};
c3_chart_internal_fn.getParentWidth = function () {
    return this.getParentRectValue('width');
};
c3_chart_internal_fn.getParentHeight = function () {
    var h = this.selectChart.style('height');
    return h.indexOf('px') > 0 ? +h.replace('px', '') : 0;
};

c3_chart_internal_fn.getSvgLeft = function (withoutRecompute) {
    var $$ = this,
        config = $$.config,
        hasLeftAxisRect = config.axis_rotated || !config.axis_rotated && !config.axis_y_inner,
        leftAxisClass = config.axis_rotated ? CLASS.axisX : CLASS.axisY,
        leftAxis = $$.main.select('.' + leftAxisClass).node(),
        svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : { right: 0 },
        chartRect = $$.selectChart.node().getBoundingClientRect(),
        hasArc = $$.hasArcType(),
        svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
    return svgLeft > 0 ? svgLeft : 0;
};

c3_chart_internal_fn.getAxisWidthByAxisId = function (id, withoutRecompute) {
    var $$ = this,
        position = $$.axis.getLabelPositionById(id);
    return $$.axis.getMaxTickWidth(id, withoutRecompute) + (position.isInner ? 20 : 40);
};
c3_chart_internal_fn.getHorizontalAxisHeight = function (axisId) {
    var $$ = this,
        config = $$.config,
        h = 30;
    if (axisId === 'x' && !config.axis_x_show) {
        return 8;
    }
    if (axisId === 'x' && config.axis_x_height) {
        return config.axis_x_height;
    }
    if (axisId === 'y' && !config.axis_y_show) {
        return config.legend_show && !$$.isLegendRight && !$$.isLegendInset ? 10 : 1;
    }
    if (axisId === 'y2' && !config.axis_y2_show) {
        return $$.rotated_padding_top;
    }
    // Calculate x axis height when tick rotated
    if (axisId === 'x' && !config.axis_rotated && config.axis_x_tick_rotate) {
        h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_x_tick_rotate) / 180);
    }
    // Calculate y axis height when tick rotated
    if (axisId === 'y' && config.axis_rotated && config.axis_y_tick_rotate) {
        h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_y_tick_rotate) / 180);
    }
    return h + ($$.axis.getLabelPositionById(axisId).isInner ? 0 : 10) + (axisId === 'y2' ? -10 : 0);
};

c3_chart_internal_fn.getEventRectWidth = function () {
    return Math.max(0, this.xAxis.tickInterval());
};

c3_chart_internal_fn.initBrush = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.brush = d3.svg.brush().on("brush", function () {
        $$.redrawForBrush();
    });
    $$.brush.update = function () {
        if ($$.context) {
            $$.context.select('.' + CLASS.brush).call(this);
        }
        return this;
    };
    $$.brush.scale = function (scale) {
        return $$.config.axis_rotated ? this.y(scale) : this.x(scale);
    };
};
c3_chart_internal_fn.initSubchart = function () {
    var $$ = this,
        config = $$.config,
        context = $$.context = $$.svg.append("g").attr("transform", $$.getTranslate('context')),
        visibility = config.subchart_show ? 'visible' : 'hidden';

    context.style('visibility', visibility);

    // Define g for chart area
    context.append('g').attr("clip-path", $$.clipPathForSubchart).attr('class', CLASS.chart);

    // Define g for bar chart area
    context.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartBars);

    // Define g for line chart area
    context.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartLines);

    // Add extent rect for Brush
    context.append("g").attr("clip-path", $$.clipPath).attr("class", CLASS.brush).call($$.brush);

    // ATTENTION: This must be called AFTER chart added
    // Add Axis
    $$.axes.subx = context.append("g").attr("class", CLASS.axisX).attr("transform", $$.getTranslate('subx')).attr("clip-path", config.axis_rotated ? "" : $$.clipPathForXAxis).style("visibility", config.subchart_axis_x_show ? visibility : 'hidden');
};
c3_chart_internal_fn.updateTargetsForSubchart = function (targets) {
    var $$ = this,
        context = $$.context,
        config = $$.config,
        contextLineEnter,
        contextLineUpdate,
        contextBarEnter,
        contextBarUpdate,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classAreas = $$.classAreas.bind($$);

    if (config.subchart_show) {
        //-- Bar --//
        contextBarUpdate = context.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar).data(targets).attr('class', classChartBar);
        contextBarEnter = contextBarUpdate.enter().append('g').style('opacity', 0).attr('class', classChartBar);
        // Bars for each data
        contextBarEnter.append('g').attr("class", classBars);

        //-- Line --//
        contextLineUpdate = context.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine).data(targets).attr('class', classChartLine);
        contextLineEnter = contextLineUpdate.enter().append('g').style('opacity', 0).attr('class', classChartLine);
        // Lines for each data
        contextLineEnter.append("g").attr("class", classLines);
        // Area
        contextLineEnter.append("g").attr("class", classAreas);

        //-- Brush --//
        context.selectAll('.' + CLASS.brush + ' rect').attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? $$.width2 : $$.height2);
    }
};
c3_chart_internal_fn.updateBarForSubchart = function (durationForExit) {
    var $$ = this;
    $$.contextBar = $$.context.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar).data($$.barData.bind($$));
    $$.contextBar.enter().append('path').attr("class", $$.classBar.bind($$)).style("stroke", 'none').style("fill", $$.color);
    $$.contextBar.style("opacity", $$.initialOpacity.bind($$));
    $$.contextBar.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawBarForSubchart = function (drawBarOnSub, withTransition, duration) {
    (withTransition ? this.contextBar.transition(Math.random().toString()).duration(duration) : this.contextBar).attr('d', drawBarOnSub).style('opacity', 1);
};
c3_chart_internal_fn.updateLineForSubchart = function (durationForExit) {
    var $$ = this;
    $$.contextLine = $$.context.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line).data($$.lineData.bind($$));
    $$.contextLine.enter().append('path').attr('class', $$.classLine.bind($$)).style('stroke', $$.color);
    $$.contextLine.style("opacity", $$.initialOpacity.bind($$));
    $$.contextLine.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawLineForSubchart = function (drawLineOnSub, withTransition, duration) {
    (withTransition ? this.contextLine.transition(Math.random().toString()).duration(duration) : this.contextLine).attr("d", drawLineOnSub).style('opacity', 1);
};
c3_chart_internal_fn.updateAreaForSubchart = function (durationForExit) {
    var $$ = this,
        d3 = $$.d3;
    $$.contextArea = $$.context.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area).data($$.lineData.bind($$));
    $$.contextArea.enter().append('path').attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
        $$.orgAreaOpacity = +d3.select(this).style('opacity');return 0;
    });
    $$.contextArea.style("opacity", 0);
    $$.contextArea.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawAreaForSubchart = function (drawAreaOnSub, withTransition, duration) {
    (withTransition ? this.contextArea.transition(Math.random().toString()).duration(duration) : this.contextArea).attr("d", drawAreaOnSub).style("fill", this.color).style("opacity", this.orgAreaOpacity);
};
c3_chart_internal_fn.redrawSubchart = function (withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        drawAreaOnSub,
        drawBarOnSub,
        drawLineOnSub;

    $$.context.style('visibility', config.subchart_show ? 'visible' : 'hidden');

    // subchart
    if (config.subchart_show) {
        // reflect main chart to extent on subchart if zoomed
        if (d3.event && d3.event.type === 'zoom') {
            $$.brush.extent($$.x.orgDomain()).update();
        }
        // update subchart elements if needed
        if (withSubchart) {

            // extent rect
            if (!$$.brush.empty()) {
                $$.brush.extent($$.x.orgDomain()).update();
            }
            // setup drawer - MEMO: this must be called after axis updated
            drawAreaOnSub = $$.generateDrawArea(areaIndices, true);
            drawBarOnSub = $$.generateDrawBar(barIndices, true);
            drawLineOnSub = $$.generateDrawLine(lineIndices, true);

            $$.updateBarForSubchart(duration);
            $$.updateLineForSubchart(duration);
            $$.updateAreaForSubchart(duration);

            $$.redrawBarForSubchart(drawBarOnSub, duration, duration);
            $$.redrawLineForSubchart(drawLineOnSub, duration, duration);
            $$.redrawAreaForSubchart(drawAreaOnSub, duration, duration);
        }
    }
};
c3_chart_internal_fn.redrawForBrush = function () {
    var $$ = this,
        x = $$.x;
    $$.redraw({
        withTransition: false,
        withY: $$.config.zoom_rescale,
        withSubchart: false,
        withUpdateXDomain: true,
        withDimension: false
    });
    $$.config.subchart_onbrush.call($$.api, x.orgDomain());
};
c3_chart_internal_fn.transformContext = function (withTransition, transitions) {
    var $$ = this,
        subXAxis;
    if (transitions && transitions.axisSubX) {
        subXAxis = transitions.axisSubX;
    } else {
        subXAxis = $$.context.select('.' + CLASS.axisX);
        if (withTransition) {
            subXAxis = subXAxis.transition();
        }
    }
    $$.context.attr("transform", $$.getTranslate('context'));
    subXAxis.attr("transform", $$.getTranslate('subx'));
};
c3_chart_internal_fn.getDefaultExtent = function () {
    var $$ = this,
        config = $$.config,
        extent = isFunction(config.axis_x_extent) ? config.axis_x_extent($$.getXDomain($$.data.targets)) : config.axis_x_extent;
    if ($$.isTimeSeries()) {
        extent = [$$.parseDate(extent[0]), $$.parseDate(extent[1])];
    }
    return extent;
};

c3_chart_internal_fn.initText = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartTexts);
    $$.mainText = $$.d3.selectAll([]);
};
c3_chart_internal_fn.updateTargetsForText = function (targets) {
    var $$ = this,
        mainTextUpdate,
        mainTextEnter,
        classChartText = $$.classChartText.bind($$),
        classTexts = $$.classTexts.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainTextUpdate = $$.main.select('.' + CLASS.chartTexts).selectAll('.' + CLASS.chartText).data(targets).attr('class', function (d) {
        return classChartText(d) + classFocus(d);
    });
    mainTextEnter = mainTextUpdate.enter().append('g').attr('class', classChartText).style('opacity', 0).style("pointer-events", "none");
    mainTextEnter.append('g').attr('class', classTexts);
};
c3_chart_internal_fn.updateText = function (durationForExit) {
    var $$ = this,
        config = $$.config,
        barOrLineData = $$.barOrLineData.bind($$),
        classText = $$.classText.bind($$);
    $$.mainText = $$.main.selectAll('.' + CLASS.texts).selectAll('.' + CLASS.text).data(barOrLineData);
    $$.mainText.enter().append('text').attr("class", classText).attr('text-anchor', function (d) {
        return config.axis_rotated ? d.value < 0 ? 'end' : 'start' : 'middle';
    }).style("stroke", 'none').style("fill", function (d) {
        return $$.color(d);
    }).style("fill-opacity", 0);
    $$.mainText.text(function (d, i, j) {
        return $$.dataLabelFormat(d.id)(d.value, d.id, i, j);
    });
    $$.mainText.exit().transition().duration(durationForExit).style('fill-opacity', 0).remove();
};
c3_chart_internal_fn.redrawText = function (xForText, yForText, forFlow, withTransition) {
    return [(withTransition ? this.mainText.transition() : this.mainText).attr('x', xForText).attr('y', yForText).style("fill", this.color).style("fill-opacity", forFlow ? 0 : this.opacityForText.bind(this))];
};
c3_chart_internal_fn.getTextRect = function (text, cls, element) {
    var dummy = this.d3.select('body').append('div').classed('c3', true),
        svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0),
        font = this.d3.select(element).style('font'),
        rect;
    svg.selectAll('.dummy').data([text]).enter().append('text').classed(cls ? cls : "", true).style('font', font).text(text).each(function () {
        rect = this.getBoundingClientRect();
    });
    dummy.remove();
    return rect;
};
c3_chart_internal_fn.generateXYForText = function (areaIndices, barIndices, lineIndices, forX) {
    var $$ = this,
        getAreaPoints = $$.generateGetAreaPoints(areaIndices, false),
        getBarPoints = $$.generateGetBarPoints(barIndices, false),
        getLinePoints = $$.generateGetLinePoints(lineIndices, false),
        getter = forX ? $$.getXForText : $$.getYForText;
    return function (d, i) {
        var getPoints = $$.isAreaType(d) ? getAreaPoints : $$.isBarType(d) ? getBarPoints : getLinePoints;
        return getter.call($$, getPoints(d, i), d, this);
    };
};
c3_chart_internal_fn.getXForText = function (points, d, textElement) {
    var $$ = this,
        box = textElement.getBoundingClientRect(),
        xPos,
        padding;
    if ($$.config.axis_rotated) {
        padding = $$.isBarType(d) ? 4 : 6;
        xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1);
    } else {
        xPos = $$.hasType('bar') ? (points[2][0] + points[0][0]) / 2 : points[0][0];
    }
    // show labels regardless of the domain if value is null
    if (d.value === null) {
        if (xPos > $$.width) {
            xPos = $$.width - box.width;
        } else if (xPos < 0) {
            xPos = 4;
        }
    }
    return xPos;
};
c3_chart_internal_fn.getYForText = function (points, d, textElement) {
    var $$ = this,
        box = textElement.getBoundingClientRect(),
        yPos;
    if ($$.config.axis_rotated) {
        yPos = (points[0][0] + points[2][0] + box.height * 0.6) / 2;
    } else {
        yPos = points[2][1];
        if (d.value < 0 || d.value === 0 && !$$.hasPositiveValue) {
            yPos += box.height;
            if ($$.isBarType(d) && $$.isSafari()) {
                yPos -= 3;
            } else if (!$$.isBarType(d) && $$.isChrome()) {
                yPos += 3;
            }
        } else {
            yPos += $$.isBarType(d) ? -3 : -6;
        }
    }
    // show labels regardless of the domain if value is null
    if (d.value === null && !$$.config.axis_rotated) {
        if (yPos < box.height) {
            yPos = box.height;
        } else if (yPos > this.height) {
            yPos = this.height - 4;
        }
    }
    return yPos;
};

c3_chart_internal_fn.initTitle = function () {
    var $$ = this;
    $$.title = $$.svg.append("text").text($$.config.title_text).attr("class", $$.CLASS.title);
};
c3_chart_internal_fn.redrawTitle = function () {
    var $$ = this;
    $$.title.attr("x", $$.xForTitle.bind($$)).attr("y", $$.yForTitle.bind($$));
};
c3_chart_internal_fn.xForTitle = function () {
    var $$ = this,
        config = $$.config,
        position = config.title_position || 'left',
        x;
    if (position.indexOf('right') >= 0) {
        x = $$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width - config.title_padding.right;
    } else if (position.indexOf('center') >= 0) {
        x = ($$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width) / 2;
    } else {
        // left
        x = config.title_padding.left;
    }
    return x;
};
c3_chart_internal_fn.yForTitle = function () {
    var $$ = this;
    return $$.config.title_padding.top + $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).height;
};
c3_chart_internal_fn.getTitlePadding = function () {
    var $$ = this;
    return $$.yForTitle() + $$.config.title_padding.bottom;
};

c3_chart_internal_fn.initTooltip = function () {
    var $$ = this,
        config = $$.config,
        i;
    $$.tooltip = $$.selectChart.style("position", "relative").append("div").attr('class', CLASS.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none");
    // Show tooltip if needed
    if (config.tooltip_init_show) {
        if ($$.isTimeSeries() && isString(config.tooltip_init_x)) {
            config.tooltip_init_x = $$.parseDate(config.tooltip_init_x);
            for (i = 0; i < $$.data.targets[0].values.length; i++) {
                if ($$.data.targets[0].values[i].x - config.tooltip_init_x === 0) {
                    break;
                }
            }
            config.tooltip_init_x = i;
        }
        $$.tooltip.html(config.tooltip_contents.call($$, $$.data.targets.map(function (d) {
            return $$.addName(d.values[config.tooltip_init_x]);
        }), $$.axis.getXAxisTickFormat(), $$.getYFormat($$.hasArcType()), $$.color));
        $$.tooltip.style("top", config.tooltip_init_position.top).style("left", config.tooltip_init_position.left).style("display", "block");
    }
};
c3_chart_internal_fn.getTooltipSortFunction = function () {
    var $$ = this,
        config = $$.config;

    if (config.data_groups.length === 0 || config.tooltip_order !== undefined) {
        // if data are not grouped or if an order is specified
        // for the tooltip values we sort them by their values

        var order = config.tooltip_order;
        if (order === undefined) {
            order = config.data_order;
        }

        var valueOf = function valueOf(obj) {
            return obj ? obj.value : null;
        };

        // if data are not grouped, we sort them by their value
        if (isString(order) && order.toLowerCase() === 'asc') {
            return function (a, b) {
                return valueOf(a) - valueOf(b);
            };
        } else if (isString(order) && order.toLowerCase() === 'desc') {
            return function (a, b) {
                return valueOf(b) - valueOf(a);
            };
        } else if (isFunction(order)) {

            // if the function is from data_order we need
            // to wrap the returned function in order to format
            // the sorted value to the expected format

            var sortFunction = order;

            if (config.tooltip_order === undefined) {
                sortFunction = function sortFunction(a, b) {
                    return order(a ? {
                        id: a.id,
                        values: [a]
                    } : null, b ? {
                        id: b.id,
                        values: [b]
                    } : null);
                };
            }

            return sortFunction;
        } else if (isArray(order)) {
            return function (a, b) {
                return order.indexOf(a.id) - order.indexOf(b.id);
            };
        }
    } else {
        // if data are grouped, we follow the order of grouped targets
        var ids = $$.orderTargets($$.data.targets).map(function (i) {
            return i.id;
        });

        // if it was either asc or desc we need to invert the order
        // returned by orderTargets
        if ($$.isOrderAsc() || $$.isOrderDesc()) {
            ids = ids.reverse();
        }

        return function (a, b) {
            return ids.indexOf(a.id) - ids.indexOf(b.id);
        };
    }
};
c3_chart_internal_fn.getTooltipContent = function (d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this,
        config = $$.config,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) {
        return name;
    },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        text,
        i,
        title,
        value,
        name,
        bgcolor;

    var tooltipSortFunction = this.getTooltipSortFunction();
    if (tooltipSortFunction) {
        d.sort(tooltipSortFunction);
    }

    for (i = 0; i < d.length; i++) {
        if (!(d[i] && (d[i].value || d[i].value === 0))) {
            continue;
        }

        if (!text) {
            title = sanitise(titleFormat ? titleFormat(d[i].x) : d[i].x);
            text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        value = sanitise(valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index, d));
        if (value !== undefined) {
            // Skip elements when their name is set to null
            if (d[i].name === null) {
                continue;
            }
            name = sanitise(nameFormat(d[i].name, d[i].ratio, d[i].id, d[i].index));
            bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

            text += "<tr class='" + $$.CLASS.tooltipName + "-" + $$.getTargetSelectorSuffix(d[i].id) + "'>";
            text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
            text += "<td class='value'>" + value + "</td>";
            text += "</tr>";
        }
    }
    return text + "</table>";
};
c3_chart_internal_fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;
    var svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
    var forArc = $$.hasArcType(),
        mouse = d3.mouse(element);
    // Determin tooltip position
    if (forArc) {
        tooltipLeft = ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0];
        tooltipTop = $$.height / 2 + mouse[1] + 20;
    } else {
        svgLeft = $$.getSvgLeft(true);
        if (config.axis_rotated) {
            tooltipLeft = svgLeft + mouse[0] + 100;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = $$.x(dataToShow[0].x) + 20;
        } else {
            tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = mouse[1] + 15;
        }

        if (tooltipRight > chartRight) {
            // 20 is needed for Firefox to keep tooltip width
            tooltipLeft -= tooltipRight - chartRight + 20;
        }
        if (tooltipTop + tHeight > $$.currentHeight) {
            tooltipTop -= tHeight + 30;
        }
    }
    if (tooltipTop < 0) {
        tooltipTop = 0;
    }
    return { top: tooltipTop, left: tooltipLeft };
};
c3_chart_internal_fn.showTooltip = function (selectedData, element) {
    var $$ = this,
        config = $$.config;
    var tWidth, tHeight, position;
    var forArc = $$.hasArcType(),
        dataToShow = selectedData.filter(function (d) {
        return d && isValue(d.value);
    }),
        positionFunction = config.tooltip_position || c3_chart_internal_fn.tooltipPosition;
    if (dataToShow.length === 0 || !config.tooltip_show) {
        return;
    }
    $$.tooltip.html(config.tooltip_contents.call($$, selectedData, $$.axis.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", "block");

    // Get tooltip dimensions
    tWidth = $$.tooltip.property('offsetWidth');
    tHeight = $$.tooltip.property('offsetHeight');

    position = positionFunction.call(this, dataToShow, tWidth, tHeight, element);
    // Set tooltip
    $$.tooltip.style("top", position.top + "px").style("left", position.left + 'px');
};
c3_chart_internal_fn.hideTooltip = function () {
    this.tooltip.style("display", "none");
};

c3_chart_internal_fn.setTargetType = function (targetIds, type) {
    var $$ = this,
        config = $$.config;
    $$.mapToTargetIds(targetIds).forEach(function (id) {
        $$.withoutFadeIn[id] = type === config.data_types[id];
        config.data_types[id] = type;
    });
    if (!targetIds) {
        config.data_type = type;
    }
};
c3_chart_internal_fn.hasType = function (type, targets) {
    var $$ = this,
        types = $$.config.data_types,
        has = false;
    targets = targets || $$.data.targets;
    if (targets && targets.length) {
        targets.forEach(function (target) {
            var t = types[target.id];
            if (t && t.indexOf(type) >= 0 || !t && type === 'line') {
                has = true;
            }
        });
    } else if (Object.keys(types).length) {
        Object.keys(types).forEach(function (id) {
            if (types[id] === type) {
                has = true;
            }
        });
    } else {
        has = $$.config.data_type === type;
    }
    return has;
};
c3_chart_internal_fn.hasArcType = function (targets) {
    return this.hasType('pie', targets) || this.hasType('donut', targets) || this.hasType('gauge', targets);
};
c3_chart_internal_fn.isLineType = function (d) {
    var config = this.config,
        id = isString(d) ? d : d.id;
    return !config.data_types[id] || ['line', 'spline', 'area', 'area-spline', 'step', 'area-step'].indexOf(config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isStepType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['step', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isSplineType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['spline', 'area-spline'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isAreaType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['area', 'area-spline', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isBarType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'bar';
};
c3_chart_internal_fn.isScatterType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'scatter';
};
c3_chart_internal_fn.isPieType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'pie';
};
c3_chart_internal_fn.isGaugeType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'gauge';
};
c3_chart_internal_fn.isDonutType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'donut';
};
c3_chart_internal_fn.isArcType = function (d) {
    return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d);
};
c3_chart_internal_fn.lineData = function (d) {
    return this.isLineType(d) ? [d] : [];
};
c3_chart_internal_fn.arcData = function (d) {
    return this.isArcType(d.data) ? [d] : [];
};
/* not used
 function scatterData(d) {
 return isScatterType(d) ? d.values : [];
 }
 */
c3_chart_internal_fn.barData = function (d) {
    return this.isBarType(d) ? d.values : [];
};
c3_chart_internal_fn.lineOrScatterData = function (d) {
    return this.isLineType(d) || this.isScatterType(d) ? d.values : [];
};
c3_chart_internal_fn.barOrLineData = function (d) {
    return this.isBarType(d) || this.isLineType(d) ? d.values : [];
};
c3_chart_internal_fn.isInterpolationType = function (type) {
    return ['linear', 'linear-closed', 'basis', 'basis-open', 'basis-closed', 'bundle', 'cardinal', 'cardinal-open', 'cardinal-closed', 'monotone'].indexOf(type) >= 0;
};

c3_chart_internal_fn.isSafari = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Safari') >= 0 && ua.indexOf('Chrome') < 0;
};
c3_chart_internal_fn.isChrome = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Chrome') >= 0;
};

c3_chart_internal_fn.initZoom = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        startEvent;

    $$.zoom = d3.behavior.zoom().on("zoomstart", function () {
        startEvent = d3.event.sourceEvent;
        $$.zoom.altDomain = d3.event.sourceEvent.altKey ? $$.x.orgDomain() : null;
        config.zoom_onzoomstart.call($$.api, d3.event.sourceEvent);
    }).on("zoom", function () {
        $$.redrawForZoom.call($$);
    }).on('zoomend', function () {
        var event = d3.event.sourceEvent;
        // if click, do nothing. otherwise, click interaction will be canceled.
        if (event && startEvent.clientX === event.clientX && startEvent.clientY === event.clientY) {
            return;
        }
        $$.redrawEventRect();
        $$.updateZoom();
        config.zoom_onzoomend.call($$.api, $$.x.orgDomain());
    });
    $$.zoom.scale = function (scale) {
        return config.axis_rotated ? this.y(scale) : this.x(scale);
    };
    $$.zoom.orgScaleExtent = function () {
        var extent = config.zoom_extent ? config.zoom_extent : [1, 10];
        return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
    };
    $$.zoom.updateScaleExtent = function () {
        var ratio = diffDomain($$.x.orgDomain()) / diffDomain($$.getZoomDomain()),
            extent = this.orgScaleExtent();
        this.scaleExtent([extent[0] * ratio, extent[1] * ratio]);
        return this;
    };
};
c3_chart_internal_fn.getZoomDomain = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        min = d3.min([$$.orgXDomain[0], config.zoom_x_min]),
        max = d3.max([$$.orgXDomain[1], config.zoom_x_max]);
    return [min, max];
};
c3_chart_internal_fn.updateZoom = function () {
    var $$ = this,
        z = $$.config.zoom_enabled ? $$.zoom : function () {};
    $$.main.select('.' + CLASS.zoomRect).call(z).on("dblclick.zoom", null);
    $$.main.selectAll('.' + CLASS.eventRect).call(z).on("dblclick.zoom", null);
};
c3_chart_internal_fn.redrawForZoom = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        zoom = $$.zoom,
        x = $$.x;
    if (!config.zoom_enabled) {
        return;
    }
    if ($$.filterTargetsToShow($$.data.targets).length === 0) {
        return;
    }
    if (d3.event.sourceEvent.type === 'mousemove' && zoom.altDomain) {
        x.domain(zoom.altDomain);
        zoom.scale(x).updateScaleExtent();
        return;
    }
    if ($$.isCategorized() && x.orgDomain()[0] === $$.orgXDomain[0]) {
        x.domain([$$.orgXDomain[0] - 1e-10, x.orgDomain()[1]]);
    }
    $$.redraw({
        withTransition: false,
        withY: config.zoom_rescale,
        withSubchart: false,
        withEventRect: false,
        withDimension: false
    });
    if (d3.event.sourceEvent.type === 'mousemove') {
        $$.cancelClick = true;
    }
    config.zoom_onzoom.call($$.api, x.orgDomain());
};

return c3$1;

})));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fontawesome-webfont.eot";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(33);

var _vue2 = _interopRequireDefault(_vue);

var _aos = __webpack_require__(8);

var _aos2 = _interopRequireDefault(_aos);

var _appMain = __webpack_require__(24);

var _appMain2 = _interopRequireDefault(_appMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default(_appMain2.default).$mount('#app-main');
_aos2.default.init();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [{"Rating's grade":"🟊","Number of ratings":14853},{"Rating's grade":"🟊🟊","Number of ratings":13663},{"Rating's grade":"🟊🟊🟊","Number of ratings":28275},{"Rating's grade":"🟊🟊🟊🟊","Number of ratings":54804},{"Rating's grade":"🟊🟊🟊🟊🟊","Number of ratings":120185}]

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"Product ID":"B00BGA9WK2","Number of reviews":802},{"Product ID":"B003ZSP0WW","Number of reviews":303},{"Product ID":"B00503E9FY","Number of reviews":248},{"Product ID":"B000ZKA0J6","Number of reviews":224},{"Product ID":"B00BGAA29M","Number of reviews":194},{"Product ID":"B004FSE52C","Number of reviews":178},{"Product ID":"B00006IJJK","Number of reviews":163},{"Product ID":"B007TYC8MI","Number of reviews":151},{"Product ID":"B000067DPM","Number of reviews":141},{"Product ID":"B00AKIPBNS","Number of reviews":134},{"Product ID":"B00005Q8LR","Number of reviews":129},{"Product ID":"B002I0J4NE","Number of reviews":124},{"Product ID":"B003R7H5TC","Number of reviews":119},{"Product ID":"B001VJ4DHK","Number of reviews":114},{"Product ID":"B000UU5T7E","Number of reviews":109},{"Product ID":"B002I0HKRQ","Number of reviews":104},{"Product ID":"B004FYJFNA","Number of reviews":100},{"Product ID":"B00EDU8H9E","Number of reviews":95},{"Product ID":"B00BY0G0YU","Number of reviews":91},{"Product ID":"B002I0K50U","Number of reviews":87},{"Product ID":"B002TDIEEK","Number of reviews":85},{"Product ID":"B004P7VGF2","Number of reviews":83},{"Product ID":"B002I0EMBI","Number of reviews":81},{"Product ID":"B00004S99R","Number of reviews":78},{"Product ID":"B006WQR3GA","Number of reviews":76},{"Product ID":"B0086V5V8G","Number of reviews":75},{"Product ID":"B000P297F2","Number of reviews":73},{"Product ID":"B002I0GKA4","Number of reviews":72},{"Product ID":"B002BXKJA0","Number of reviews":71},{"Product ID":"B00C27SCC2","Number of reviews":69},{"Product ID":"B002BU0DPE","Number of reviews":67},{"Product ID":"B00DE2W5XG","Number of reviews":66},{"Product ID":"B002I0K780","Number of reviews":64},{"Product ID":"B0015HZLVA","Number of reviews":63},{"Product ID":"B00006M3R6","Number of reviews":62},{"Product ID":"B00CRL9TU2","Number of reviews":61},{"Product ID":"B00002SVWG","Number of reviews":60},{"Product ID":"B005THAX5Q","Number of reviews":59},{"Product ID":"B007V9QKH0","Number of reviews":58},{"Product ID":"B000HX1P72","Number of reviews":57},{"Product ID":"B00149MEVY","Number of reviews":56},{"Product ID":"B00434FED2","Number of reviews":55},{"Product ID":"B007M6W38W","Number of reviews":54},{"Product ID":"B00FF9MLQW","Number of reviews":53},{"Product ID":"B003CP0BHM","Number of reviews":53},{"Product ID":"B000038IFX","Number of reviews":52},{"Product ID":"B000B9RI00","Number of reviews":51},{"Product ID":"B002I0J5CO","Number of reviews":50},{"Product ID":"B002I0H0FS","Number of reviews":49},{"Product ID":"B000069BD9","Number of reviews":49},{"Product ID":"B0054IV0A2","Number of reviews":48},{"Product ID":"B0050SZ49Y","Number of reviews":47},{"Product ID":"B00CD90R72","Number of reviews":47},{"Product ID":"B001HKPUKC","Number of reviews":46},{"Product ID":"B000ZKDOVW","Number of reviews":45},{"Product ID":"B002AU0HZQ","Number of reviews":45},{"Product ID":"B000CNESHG","Number of reviews":44},{"Product ID":"B00005QX4F","Number of reviews":44},{"Product ID":"B00006F7S8","Number of reviews":43},{"Product ID":"B002MPPRPO","Number of reviews":43},{"Product ID":"B004K6LQAS","Number of reviews":42},{"Product ID":"B0010EK3SE","Number of reviews":42},{"Product ID":"B002MED6EO","Number of reviews":41},{"Product ID":"B00005BR6H","Number of reviews":40},{"Product ID":"B00006409Z","Number of reviews":40},{"Product ID":"B0016GC9D8","Number of reviews":39},{"Product ID":"B003GSZ9ZE","Number of reviews":39},{"Product ID":"B003BMJKI2","Number of reviews":39},{"Product ID":"B001UW9ZW6","Number of reviews":38},{"Product ID":"B000ZK6946","Number of reviews":38},{"Product ID":"B00009PS24","Number of reviews":37},{"Product ID":"B004EW948E","Number of reviews":37},{"Product ID":"B000K1GZIU","Number of reviews":37},{"Product ID":"B002JAU20W","Number of reviews":36},{"Product ID":"B004FZ9822","Number of reviews":36},{"Product ID":"B000FJSIUA","Number of reviews":35},{"Product ID":"B00004T1M7","Number of reviews":35},{"Product ID":"B002LBGB1S","Number of reviews":35},{"Product ID":"B002NILRUY","Number of reviews":34},{"Product ID":"B00008URUB","Number of reviews":34},{"Product ID":"B001PB9J14","Number of reviews":34},{"Product ID":"B0009E3U4K","Number of reviews":34},{"Product ID":"B00008KU9Z","Number of reviews":33},{"Product ID":"B00E4MQODC","Number of reviews":33},{"Product ID":"B001NXDBI6","Number of reviews":33},{"Product ID":"B004FUI84G","Number of reviews":32},{"Product ID":"B001TD6SN0","Number of reviews":32},{"Product ID":"B00000DMAQ","Number of reviews":32},{"Product ID":"B004C34D2M","Number of reviews":31},{"Product ID":"B004RIACMW","Number of reviews":31},{"Product ID":"B000WJFZEA","Number of reviews":31},{"Product ID":"B000066RKC","Number of reviews":31},{"Product ID":"B0009Z3MQ0","Number of reviews":30},{"Product ID":"B004JSDQPU","Number of reviews":30},{"Product ID":"B00007KQE9","Number of reviews":30},{"Product ID":"B007FTE33O","Number of reviews":30},{"Product ID":"B0000TSR4C","Number of reviews":29},{"Product ID":"B009DYE3JI","Number of reviews":29},{"Product ID":"B003O6EFKI","Number of reviews":29},{"Product ID":"B001CRM3YQ","Number of reviews":29},{"Product ID":"B008TXMPJE","Number of reviews":28},{"Product ID":"B000GACEHQ","Number of reviews":28},{"Product ID":"B00006599Q","Number of reviews":28},{"Product ID":"B002BSC57U","Number of reviews":28},{"Product ID":"B0024ZT3XO","Number of reviews":27},{"Product ID":"B005UDTTQ8","Number of reviews":27},{"Product ID":"B000SQRYUU","Number of reviews":27},{"Product ID":"B000VSEF52","Number of reviews":27},{"Product ID":"B00CD90R4K","Number of reviews":27},{"Product ID":"B00B98HG18","Number of reviews":26},{"Product ID":"B002BXN6GY","Number of reviews":26},{"Product ID":"B00000ID61","Number of reviews":26},{"Product ID":"B00004S9AA","Number of reviews":26},{"Product ID":"B005S0KHIC","Number of reviews":26},{"Product ID":"B0047SIUZI","Number of reviews":25},{"Product ID":"B0094MYU4M","Number of reviews":25},{"Product ID":"B0001I9YE4","Number of reviews":25},{"Product ID":"B001LGFPSY","Number of reviews":25},{"Product ID":"B0026IUSXI","Number of reviews":24},{"Product ID":"B000088NQB","Number of reviews":24},{"Product ID":"B000BNKSVC","Number of reviews":24},{"Product ID":"B000MTK2KM","Number of reviews":24},{"Product ID":"B000G7YX4G","Number of reviews":24},{"Product ID":"B003LDKIUA","Number of reviews":24},{"Product ID":"B003O6G2RW","Number of reviews":24},{"Product ID":"B0050SZ0JI","Number of reviews":23},{"Product ID":"B00006LU9C","Number of reviews":23},{"Product ID":"B00002ST27","Number of reviews":23},{"Product ID":"B00006599O","Number of reviews":23},{"Product ID":"B00E8JZILA","Number of reviews":23},{"Product ID":"B0000A92KX","Number of reviews":23},{"Product ID":"B000NU9VPW","Number of reviews":22},{"Product ID":"B0012N2AB6","Number of reviews":22},{"Product ID":"B000QCU9IK","Number of reviews":22},{"Product ID":"B003O6CACS","Number of reviews":22},{"Product ID":"B00ARCWQOO","Number of reviews":22},{"Product ID":"B002SRP9VI","Number of reviews":22},{"Product ID":"B00006GSNY","Number of reviews":22},{"Product ID":"B000BPBAPI","Number of reviews":21},{"Product ID":"B001CU4EMW","Number of reviews":21},{"Product ID":"B009DL02E6","Number of reviews":21},{"Product ID":"B0091A3AHA","Number of reviews":21},{"Product ID":"B00006CRVI","Number of reviews":21},{"Product ID":"B001N2EVPE","Number of reviews":21},{"Product ID":"B00009WAUF","Number of reviews":21},{"Product ID":"B0046CC4R0","Number of reviews":21},{"Product ID":"B00A418B7Y","Number of reviews":20},{"Product ID":"B000JV78XC","Number of reviews":20},{"Product ID":"B005YR1VP2","Number of reviews":20},{"Product ID":"B00B59L9VO","Number of reviews":20},{"Product ID":"B002MCG8MI","Number of reviews":20},{"Product ID":"B00002STFP","Number of reviews":20},{"Product ID":"B00004TJ2T","Number of reviews":20},{"Product ID":"B006D3JT0U","Number of reviews":19},{"Product ID":"B00005Y4JF","Number of reviews":19},{"Product ID":"B0007ZSHOY","Number of reviews":19},{"Product ID":"B0013ZGPV4","Number of reviews":19},{"Product ID":"B000J165AO","Number of reviews":19},{"Product ID":"B0028ZJ4O8","Number of reviews":19},{"Product ID":"B000087PM3","Number of reviews":19},{"Product ID":"B001NY42J2","Number of reviews":19},{"Product ID":"B002I0EL1Y","Number of reviews":19},{"Product ID":"B000G7X5P4","Number of reviews":18},{"Product ID":"B00002SVYB","Number of reviews":18},{"Product ID":"B004TMGZ9K","Number of reviews":18},{"Product ID":"B00006ISBU","Number of reviews":18},{"Product ID":"B002V1PTO8","Number of reviews":18},{"Product ID":"B00000I1C1","Number of reviews":18},{"Product ID":"B0014G98WA","Number of reviews":18},{"Product ID":"B00EM5UFEK","Number of reviews":18},{"Product ID":"B002E1OXVU","Number of reviews":18},{"Product ID":"B004LM37FI","Number of reviews":17},{"Product ID":"B00008DHNY","Number of reviews":17},{"Product ID":"B0028A8PZM","Number of reviews":17},{"Product ID":"B001V135P4","Number of reviews":17},{"Product ID":"B00004W4WK","Number of reviews":17},{"Product ID":"B00005NZ1S","Number of reviews":17},{"Product ID":"B0000631WE","Number of reviews":17},{"Product ID":"B00005RCQR","Number of reviews":17},{"Product ID":"B00007F8PB","Number of reviews":17},{"Product ID":"B000035XLL","Number of reviews":17},{"Product ID":"B0012N94P6","Number of reviews":16},{"Product ID":"B00005UOS7","Number of reviews":16},{"Product ID":"B000R39GPK","Number of reviews":16},{"Product ID":"B001CP0Q8S","Number of reviews":16},{"Product ID":"B000SH3XEK","Number of reviews":16},{"Product ID":"B001DI6O6C","Number of reviews":16},{"Product ID":"B001EQPDOC","Number of reviews":16},{"Product ID":"B000EHIXJY","Number of reviews":16},{"Product ID":"B003Y70W4U","Number of reviews":16},{"Product ID":"B00BI9ME4M","Number of reviews":16},{"Product ID":"B000HNJ5WE","Number of reviews":16},{"Product ID":"B000BHEQ1G","Number of reviews":15},{"Product ID":"B001AWFIPO","Number of reviews":15},{"Product ID":"B002EE1PBS","Number of reviews":15},{"Product ID":"B000059Z7W","Number of reviews":15},{"Product ID":"B009791CW0","Number of reviews":15},{"Product ID":"B005QUQP94","Number of reviews":15},{"Product ID":"B00BJH11FQ","Number of reviews":15},{"Product ID":"B0042PUW2A","Number of reviews":15},{"Product ID":"B00386ZE6I","Number of reviews":15},{"Product ID":"B00E8A06DO","Number of reviews":15},{"Product ID":"B00008W2R8","Number of reviews":15},{"Product ID":"B00083G5BM","Number of reviews":15},{"Product ID":"B00006599P","Number of reviews":15},{"Product ID":"B004YVC1CG","Number of reviews":15},{"Product ID":"B006VB2W0S","Number of reviews":14},{"Product ID":"B00113X7YQ","Number of reviews":14},{"Product ID":"B003YCQF3C","Number of reviews":14},{"Product ID":"B00000DMAU","Number of reviews":14},{"Product ID":"B0028J34UO","Number of reviews":14},{"Product ID":"B0009Z3MGA","Number of reviews":14},{"Product ID":"B003UT9XII","Number of reviews":14},{"Product ID":"B001OHUTQI","Number of reviews":14},{"Product ID":"B0013TLQH8","Number of reviews":14},{"Product ID":"B00000I1BB","Number of reviews":14},{"Product ID":"B0051873RE","Number of reviews":14},{"Product ID":"B008GWJKE6","Number of reviews":14},{"Product ID":"B000V9CCLU","Number of reviews":14},{"Product ID":"B00000J9JI","Number of reviews":14},{"Product ID":"B001V6OT2M","Number of reviews":14},{"Product ID":"B000OAOJ12","Number of reviews":13},{"Product ID":"B00127VDVK","Number of reviews":13},{"Product ID":"B000CC3IEQ","Number of reviews":13},{"Product ID":"B0028ZNWWS","Number of reviews":13},{"Product ID":"B007FMSH4M","Number of reviews":13},{"Product ID":"B0012RWQ3Y","Number of reviews":13},{"Product ID":"B002S5NKIY","Number of reviews":13},{"Product ID":"B002I0EPP6","Number of reviews":13},{"Product ID":"B0013ZAM22","Number of reviews":13},{"Product ID":"B003UI518U","Number of reviews":13},{"Product ID":"9861019731","Number of reviews":13},{"Product ID":"B002BSC5CU","Number of reviews":13},{"Product ID":"B004EDSBYQ","Number of reviews":13},{"Product ID":"B000GABTVS","Number of reviews":13},{"Product ID":"B00DWXV074","Number of reviews":13},{"Product ID":"B009VURJ18","Number of reviews":13},{"Product ID":"B002VA593A","Number of reviews":13},{"Product ID":"B00002STEX","Number of reviews":12},{"Product ID":"B000059Z7U","Number of reviews":12},{"Product ID":"B0028A8POI","Number of reviews":12},{"Product ID":"B000058A57","Number of reviews":12},{"Product ID":"B00002ST7U","Number of reviews":12},{"Product ID":"B005DVAAZG","Number of reviews":12},{"Product ID":"B001MW3TS0","Number of reviews":12},{"Product ID":"B002WZH9HS","Number of reviews":12},{"Product ID":"B003ICNKB8","Number of reviews":12},{"Product ID":"B0081FKLJG","Number of reviews":12},{"Product ID":"B00000K1V9","Number of reviews":12},{"Product ID":"B00069BV7G","Number of reviews":12},{"Product ID":"B000GOZIBQ","Number of reviews":12},{"Product ID":"B00005O629","Number of reviews":12},{"Product ID":"B0018YDKAY","Number of reviews":12},{"Product ID":"B000KI99ZE","Number of reviews":12},{"Product ID":"B00009WAVG","Number of reviews":12},{"Product ID":"B00007KUW5","Number of reviews":12},{"Product ID":"B000NJFMGK","Number of reviews":12},{"Product ID":"B000VBI5IW","Number of reviews":11},{"Product ID":"B000P0QIP6","Number of reviews":11},{"Product ID":"B00004TMC8","Number of reviews":11},{"Product ID":"B003O6EEN6","Number of reviews":11},{"Product ID":"B00004RIPJ","Number of reviews":11},{"Product ID":"B002DGG9KY","Number of reviews":11},{"Product ID":"B002I7Q606","Number of reviews":11},{"Product ID":"B0009Z3LHK","Number of reviews":11},{"Product ID":"B00004SVVH","Number of reviews":11},{"Product ID":"B000B7Q4CK","Number of reviews":11},{"Product ID":"B00004WMQB","Number of reviews":11},{"Product ID":"B00EC6V9XU","Number of reviews":11},{"Product ID":"B00005NGS3","Number of reviews":11},{"Product ID":"B00005MDZ8","Number of reviews":11},{"Product ID":"B001BSA5Z0","Number of reviews":11},{"Product ID":"B001S86IRW","Number of reviews":11},{"Product ID":"B0018BEGBE","Number of reviews":11},{"Product ID":"B000093NQN","Number of reviews":11},{"Product ID":"B00386VN0E","Number of reviews":11},{"Product ID":"B000QTD05W","Number of reviews":11},{"Product ID":"B0056C2LIG","Number of reviews":11},{"Product ID":"B001Q24UAM","Number of reviews":10},{"Product ID":"B002DC8GIG","Number of reviews":10},{"Product ID":"B00008DHLK","Number of reviews":10},{"Product ID":"B008ZXBYJU","Number of reviews":10},{"Product ID":"B00008DHNZ","Number of reviews":10},{"Product ID":"B003Y73B2U","Number of reviews":10},{"Product ID":"B007PKSO3S","Number of reviews":10},{"Product ID":"B00009XS6G","Number of reviews":10},{"Product ID":"B0076DO5A0","Number of reviews":10},{"Product ID":"B0043QTG0M","Number of reviews":10},{"Product ID":"B002G5JXMS","Number of reviews":10},{"Product ID":"B009ZY17CC","Number of reviews":10},{"Product ID":"B00005AW1Y","Number of reviews":10},{"Product ID":"B009SHV6DG","Number of reviews":10},{"Product ID":"B00002SVO9","Number of reviews":10},{"Product ID":"B000Q4UJ8S","Number of reviews":10},{"Product ID":"B000TG72OM","Number of reviews":10},{"Product ID":"B005QUQP76","Number of reviews":10},{"Product ID":"B0000A03AI","Number of reviews":10},{"Product ID":"B00000I1BS","Number of reviews":10},{"Product ID":"B00000JHPD","Number of reviews":10},{"Product ID":"B00004TJ2N","Number of reviews":10},{"Product ID":"B000OCXK5Q","Number of reviews":10},{"Product ID":"B0056JPS84","Number of reviews":10},{"Product ID":"B001IKC3QA","Number of reviews":10},{"Product ID":"B000EXU98G","Number of reviews":10},{"Product ID":"B00EPOTBUC","Number of reviews":10},{"Product ID":"B000TTZI0E","Number of reviews":9},{"Product ID":"B000CC1DLG","Number of reviews":9},{"Product ID":"B000OCXK6K","Number of reviews":9},{"Product ID":"B000PDOTXG","Number of reviews":9},{"Product ID":"B0015Z1I0A","Number of reviews":9},{"Product ID":"B0013LTP4W","Number of reviews":9},{"Product ID":"B002I0JE66","Number of reviews":9},{"Product ID":"B002RL8K3E","Number of reviews":9},{"Product ID":"B003C3WZ0A","Number of reviews":9},{"Product ID":"B003WY86NE","Number of reviews":9},{"Product ID":"B001J2SEY2","Number of reviews":9},{"Product ID":"B001E3VKHY","Number of reviews":9},{"Product ID":"B0001O10V8","Number of reviews":9},{"Product ID":"B00006JZDZ","Number of reviews":9},{"Product ID":"B0030T1AIO","Number of reviews":9},{"Product ID":"B000038AB3","Number of reviews":9},{"Product ID":"B007RMU47S","Number of reviews":9},{"Product ID":"B00DWXV1DM","Number of reviews":9},{"Product ID":"B00009KO3F","Number of reviews":9},{"Product ID":"B00I0A363A","Number of reviews":9},{"Product ID":"B00FFL0T46","Number of reviews":9},{"Product ID":"B003ZTP95O","Number of reviews":9},{"Product ID":"B0000488VO","Number of reviews":9},{"Product ID":"B000OPOCFU","Number of reviews":9},{"Product ID":"B00001NFSY","Number of reviews":9},{"Product ID":"B006C4B9I0","Number of reviews":9},{"Product ID":"B008SBZFVW","Number of reviews":9},{"Product ID":"B0007YXB8W","Number of reviews":9},{"Product ID":"B004Q4PE8E","Number of reviews":9},{"Product ID":"B000035Y6U","Number of reviews":8},{"Product ID":"B008DNUXC6","Number of reviews":8},{"Product ID":"B00005QI67","Number of reviews":8},{"Product ID":"B001GM6C2Q","Number of reviews":8},{"Product ID":"B00069ZINO","Number of reviews":8},{"Product ID":"B0009IB6KQ","Number of reviews":8},{"Product ID":"B00004S9AC","Number of reviews":8},{"Product ID":"B00320J6W8","Number of reviews":8},{"Product ID":"B00002ST2A","Number of reviews":8},{"Product ID":"B000NJBD90","Number of reviews":8},{"Product ID":"B000QAXZZ6","Number of reviews":8},{"Product ID":"B000057URK","Number of reviews":8},{"Product ID":"B003A6X0H6","Number of reviews":8},{"Product ID":"B003WTR2QQ","Number of reviews":8},{"Product ID":"B000035XQ6","Number of reviews":8},{"Product ID":"B0042AMMDW","Number of reviews":8},{"Product ID":"B0031B2OR2","Number of reviews":8},{"Product ID":"B004FUGKSW","Number of reviews":8},{"Product ID":"B00008RUYR","Number of reviews":8},{"Product ID":"B0001HAI8G","Number of reviews":8},{"Product ID":"B00006JLQ0","Number of reviews":8},{"Product ID":"B00095LEEW","Number of reviews":8},{"Product ID":"B007MZUFW4","Number of reviews":8},{"Product ID":"B00081UR7C","Number of reviews":8},{"Product ID":"B0088MVP2Y","Number of reviews":8},{"Product ID":"B0016OVBG6","Number of reviews":8},{"Product ID":"B000AOEUOI","Number of reviews":8},{"Product ID":"B002PEPRHA","Number of reviews":8},{"Product ID":"B002EJVTC8","Number of reviews":8},{"Product ID":"B0074ZXLH8","Number of reviews":8},{"Product ID":"B0009R1SRS","Number of reviews":8},{"Product ID":"B006X0KBY6","Number of reviews":8},{"Product ID":"B0017UGFBK","Number of reviews":8},{"Product ID":"B0002B90BW","Number of reviews":8},{"Product ID":"B00005EBC1","Number of reviews":8},{"Product ID":"B0009YN1T4","Number of reviews":7},{"Product ID":"B00002SUMA","Number of reviews":7},{"Product ID":"B002DY9KJ8","Number of reviews":7},{"Product ID":"B0053OMR5Y","Number of reviews":7},{"Product ID":"B000930DOG","Number of reviews":7},{"Product ID":"B002W5GI8Y","Number of reviews":7},{"Product ID":"B000AO5E66","Number of reviews":7},{"Product ID":"B000S1MMEI","Number of reviews":7},{"Product ID":"B002JQ43BU","Number of reviews":7},{"Product ID":"B00005V3EY","Number of reviews":7},{"Product ID":"B006HPLJFC","Number of reviews":7},{"Product ID":"B0011E08YC","Number of reviews":7},{"Product ID":"B008BT80UY","Number of reviews":7},{"Product ID":"B000083JTN","Number of reviews":7},{"Product ID":"B008J16BAU","Number of reviews":7},{"Product ID":"B000035Y7G","Number of reviews":7},{"Product ID":"B0087OY17Y","Number of reviews":7},{"Product ID":"B002BUSK4A","Number of reviews":7},{"Product ID":"B004BWKRXS","Number of reviews":7},{"Product ID":"B0009KQOPG","Number of reviews":7},{"Product ID":"B000LD263K","Number of reviews":7},{"Product ID":"B00015H0Y8","Number of reviews":7},{"Product ID":"B0016HLABO","Number of reviews":7},{"Product ID":"B00DVPMYXC","Number of reviews":7},{"Product ID":"B001OAKV1S","Number of reviews":7},{"Product ID":"B001NCJQIQ","Number of reviews":7},{"Product ID":"B003R3JNMI","Number of reviews":7},{"Product ID":"B000G29G8Y","Number of reviews":7},{"Product ID":"B0002GTFJ4","Number of reviews":7},{"Product ID":"B00004OCXR","Number of reviews":7},{"Product ID":"B0014KM2KG","Number of reviews":7},{"Product ID":"B009OAVUOM","Number of reviews":7},{"Product ID":"B00438XY6W","Number of reviews":7},{"Product ID":"B000M4YHK8","Number of reviews":7},{"Product ID":"B00000I1BA","Number of reviews":7},{"Product ID":"B0041OS882","Number of reviews":7},{"Product ID":"B001KC034K","Number of reviews":7},{"Product ID":"B003RRTXYW","Number of reviews":7},{"Product ID":"B00478OT26","Number of reviews":7},{"Product ID":"B00004TEXR","Number of reviews":7},{"Product ID":"B001L5TIBK","Number of reviews":6},{"Product ID":"B000GCA5NY","Number of reviews":6},{"Product ID":"B001O1OO3I","Number of reviews":6},{"Product ID":"B0029TQV4E","Number of reviews":6},{"Product ID":"B0041T9L2Y","Number of reviews":6},{"Product ID":"B003CGRMNW","Number of reviews":6},{"Product ID":"B001EYU1VO","Number of reviews":6},{"Product ID":"B003PHLTIC","Number of reviews":6},{"Product ID":"B0033T1UWW","Number of reviews":6},{"Product ID":"B00061M0RE","Number of reviews":6},{"Product ID":"B002E0ISC6","Number of reviews":6},{"Product ID":"B000809NXM","Number of reviews":6},{"Product ID":"B0002719LK","Number of reviews":6},{"Product ID":"B000930DO6","Number of reviews":6},{"Product ID":"B000ARW4RU","Number of reviews":6},{"Product ID":"B0009JPV8I","Number of reviews":6},{"Product ID":"B00HSR3CQW","Number of reviews":6},{"Product ID":"B00GOOSTFE","Number of reviews":6},{"Product ID":"B0000AI1KG","Number of reviews":6},{"Product ID":"B0002I9ROK","Number of reviews":6},{"Product ID":"B0002SNN4A","Number of reviews":6},{"Product ID":"B003WF1LEO","Number of reviews":6},{"Product ID":"B000ECX0AQ","Number of reviews":6},{"Product ID":"B000E0OCRS","Number of reviews":6},{"Product ID":"B000FII14Y","Number of reviews":6},{"Product ID":"B008U6SRYW","Number of reviews":6},{"Product ID":"B002N2YLDA","Number of reviews":6},{"Product ID":"B001CRQXJM","Number of reviews":6},{"Product ID":"B007YZ5QP8","Number of reviews":6},{"Product ID":"B00005AT8B","Number of reviews":6},{"Product ID":"B000Q7TGL6","Number of reviews":6},{"Product ID":"B0000639VQ","Number of reviews":6},{"Product ID":"B00006IQTH","Number of reviews":6},{"Product ID":"B00005MEMR","Number of reviews":6},{"Product ID":"7293000936","Number of reviews":6},{"Product ID":"B000021Y3D","Number of reviews":6},{"Product ID":"B000056PJF","Number of reviews":6},{"Product ID":"B00006FMS8","Number of reviews":6},{"Product ID":"B00008VU6X","Number of reviews":6},{"Product ID":"B00006HCI8","Number of reviews":6},{"Product ID":"B00002SVBA","Number of reviews":6},{"Product ID":"B00002EPYX","Number of reviews":6},{"Product ID":"B00004U4SR","Number of reviews":6},{"Product ID":"B00182QCYC","Number of reviews":6},{"Product ID":"B000R1CS5W","Number of reviews":6},{"Product ID":"B00005B444","Number of reviews":6},{"Product ID":"B000H683YC","Number of reviews":6},{"Product ID":"B000JISJXS","Number of reviews":6},{"Product ID":"B000MI0W3U","Number of reviews":6},{"Product ID":"B0014Z16I0","Number of reviews":6},{"Product ID":"B001AYLZAO","Number of reviews":6},{"Product ID":"B005SZ02IM","Number of reviews":6},{"Product ID":"B000TU1IH0","Number of reviews":6},{"Product ID":"B001BXAC62","Number of reviews":6},{"Product ID":"B000059Z7S","Number of reviews":5},{"Product ID":"B00018RR6G","Number of reviews":5},{"Product ID":"B0007RDM6A","Number of reviews":5},{"Product ID":"B0002ZVMMI","Number of reviews":5},{"Product ID":"B0007KQ6EW","Number of reviews":5},{"Product ID":"B000ASDU5Y","Number of reviews":5},{"Product ID":"B00006ZCCQ","Number of reviews":5},{"Product ID":"B0000E32YM","Number of reviews":5},{"Product ID":"B000NA251O","Number of reviews":5},{"Product ID":"B0000AHOOP","Number of reviews":5},{"Product ID":"B0002I9RPO","Number of reviews":5},{"Product ID":"B00020V5AM","Number of reviews":5},{"Product ID":"B0001YM07G","Number of reviews":5},{"Product ID":"B000IOGZ98","Number of reviews":5},{"Product ID":"B000RI37XC","Number of reviews":5},{"Product ID":"B002ADD6WO","Number of reviews":5},{"Product ID":"B002DC8GHW","Number of reviews":5},{"Product ID":"B000VM0NKY","Number of reviews":5},{"Product ID":"B001KRPU3E","Number of reviews":5},{"Product ID":"B0015RPD7M","Number of reviews":5},{"Product ID":"B000QJLQAS","Number of reviews":5},{"Product ID":"B001C3N0RE","Number of reviews":5},{"Product ID":"B001G9F9JQ","Number of reviews":5},{"Product ID":"B00005MIR3","Number of reviews":5},{"Product ID":"B000V1OUQS","Number of reviews":5},{"Product ID":"B00005UMZZ","Number of reviews":5},{"Product ID":"B00113NYJE","Number of reviews":5},{"Product ID":"B001QWVW2G","Number of reviews":5},{"Product ID":"B001IAT7O6","Number of reviews":5},{"Product ID":"B002N7GHNM","Number of reviews":5},{"Product ID":"B002I0K24E","Number of reviews":5},{"Product ID":"B00366KE60","Number of reviews":5},{"Product ID":"B002Q4V82C","Number of reviews":5},{"Product ID":"B0031TG9DO","Number of reviews":5},{"Product ID":"B000R39IVM","Number of reviews":5},{"Product ID":"B0017K85HM","Number of reviews":5},{"Product ID":"B000E260NU","Number of reviews":5},{"Product ID":"B00I9GARIM","Number of reviews":5},{"Product ID":"B005EW68X2","Number of reviews":5},{"Product ID":"B008YIJCAO","Number of reviews":5},{"Product ID":"B00H45K6KS","Number of reviews":5},{"Product ID":"B0090PX85A","Number of reviews":5},{"Product ID":"B00002ST7D","Number of reviews":5},{"Product ID":"8176503290","Number of reviews":5},{"Product ID":"B000006OVI","Number of reviews":5},{"Product ID":"B000035Y2R","Number of reviews":5},{"Product ID":"B00462Q5XY","Number of reviews":5},{"Product ID":"B00897Z1OQ","Number of reviews":5},{"Product ID":"B0083RDT9Q","Number of reviews":5},{"Product ID":"B00002STHI","Number of reviews":5},{"Product ID":"B00004SVS9","Number of reviews":5},{"Product ID":"B00000IWIW","Number of reviews":5},{"Product ID":"B00BCNV1CA","Number of reviews":5},{"Product ID":"B000035XZC","Number of reviews":5},{"Product ID":"B000BL0WFQ","Number of reviews":5},{"Product ID":"B004S0PN2I","Number of reviews":5},{"Product ID":"B000HGMH12","Number of reviews":5},{"Product ID":"B000068WNR","Number of reviews":5},{"Product ID":"B000FN31NU","Number of reviews":5},{"Product ID":"B00CPC8896","Number of reviews":5},{"Product ID":"B004SFLBW4","Number of reviews":5},{"Product ID":"B00AKJBY74","Number of reviews":5},{"Product ID":"B004K7AOYG","Number of reviews":5},{"Product ID":"B0069W5F58","Number of reviews":5},{"Product ID":"B00002STKH","Number of reviews":5},{"Product ID":"B004PALCKS","Number of reviews":5},{"Product ID":"B00A2V30K4","Number of reviews":5},{"Product ID":"B00002SX0F","Number of reviews":5},{"Product ID":"B00002SV6D","Number of reviews":5},{"Product ID":"B00AU0UDIY","Number of reviews":5},{"Product ID":"B00005NJZJ","Number of reviews":5}]

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grades_distribution_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews_distribution_vue__ = __webpack_require__(26);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app-main',
  components: {
    GradesDistribution: __WEBPACK_IMPORTED_MODULE_1__grades_distribution_vue__["a" /* default */],
    ReviewsDistribution: __WEBPACK_IMPORTED_MODULE_2__reviews_distribution_vue__["a" /* default */]
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c3__);
//
//
//
//



let chart;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'grades-distribution',
  mounted() {
    chart = __WEBPACK_IMPORTED_MODULE_0_c3___default.a.generate({
      bindto: this.$refs.gradesDistribution,
      data: {
        json: __webpack_require__(6),
        type: 'bar',
        keys: {
          x: "Rating's grade",
          value: ['Number of ratings']
        }
      },
      axis: {
        x: {
          type: 'category'
        }
      },
      grid: {
        y: {
          show: true
        }
      }
    });
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c3__);
//
//
//
//



let chart;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'reviews-distribution',
  mounted() {
    chart = __WEBPACK_IMPORTED_MODULE_0_c3___default.a.generate({
      bindto: this.$refs.reviewsDistribution,
      data: {
        json: __webpack_require__(7),
        keys: {
          value: ['Number of reviews']
        }
      },
      axis: {
        x: {
          tick: {
            values: [...Array(27).keys()].map(val => val * 20)
          },
          label: {
            text: 'Product',
            position: 'outer'
          }
        },
        y: {
          label: {
            text: 'Number of reviews',
            position: 'outer'
          }
        }
      },
      grid: {
        y: {
          show: true
        }
      }
    });
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translate(0)}[data-aos=fade-up]{transform:translateY(100px)}[data-aos=fade-down]{transform:translateY(-100px)}[data-aos=fade-right]{transform:translate(-100px)}[data-aos=fade-left]{transform:translate(100px)}[data-aos=fade-up-right]{transform:translate(-100px,100px)}[data-aos=fade-up-left]{transform:translate(100px,100px)}[data-aos=fade-down-right]{transform:translate(-100px,-100px)}[data-aos=fade-down-left]{transform:translate(100px,-100px)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translate(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translateY(100px) scale(.6)}[data-aos=zoom-in-down]{transform:translateY(-100px) scale(.6)}[data-aos=zoom-in-right]{transform:translate(-100px) scale(.6)}[data-aos=zoom-in-left]{transform:translate(100px) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translateY(100px) scale(1.2)}[data-aos=zoom-out-down]{transform:translateY(-100px) scale(1.2)}[data-aos=zoom-out-right]{transform:translate(-100px) scale(1.2)}[data-aos=zoom-out-left]{transform:translate(100px) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translate(0)}[data-aos=slide-up]{transform:translateY(100%)}[data-aos=slide-down]{transform:translateY(-100%)}[data-aos=slide-right]{transform:translateX(-100%)}[data-aos=slide-left]{transform:translateX(100%)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}\n/*# sourceMappingURL=aos.css.map*/", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".c3 svg{font:10px sans-serif;-webkit-tap-highlight-color:transparent}.c3 line,.c3 path{fill:none;stroke:#000}.c3 text{-webkit-user-select:none;-moz-user-select:none;user-select:none}.c3-bars path,.c3-event-rect,.c3-legend-item-tile,.c3-xgrid-focus,.c3-ygrid{shape-rendering:crispEdges}.c3-chart-arc path{stroke:#fff}.c3-chart-arc text{fill:#fff;font-size:13px}.c3-grid line{stroke:#aaa}.c3-grid text{fill:#aaa}.c3-xgrid,.c3-ygrid{stroke-dasharray:3 3}.c3-text.c3-empty{fill:grey;font-size:2em}.c3-line{stroke-width:1px}.c3-circle._expanded_{stroke-width:1px;stroke:#fff}.c3-selected-circle{fill:#fff;stroke-width:2px}.c3-bar{stroke-width:0}.c3-bar._expanded_{fill-opacity:1;fill-opacity:.75}.c3-target.c3-focused{opacity:1}.c3-target.c3-focused path.c3-line,.c3-target.c3-focused path.c3-step{stroke-width:2px}.c3-target.c3-defocused{opacity:.3!important}.c3-region{fill:#4682b4;fill-opacity:.1}.c3-brush .extent{fill-opacity:.1}.c3-legend-item{font-size:12px}.c3-legend-item-hidden{opacity:.15}.c3-legend-background{opacity:.75;fill:#fff;stroke:#d3d3d3;stroke-width:1}.c3-title{font:14px sans-serif}.c3-tooltip-container{z-index:10}.c3-tooltip{border-collapse:collapse;border-spacing:0;background-color:#fff;empty-cells:show;-webkit-box-shadow:7px 7px 12px -9px #777;-moz-box-shadow:7px 7px 12px -9px #777;box-shadow:7px 7px 12px -9px #777;opacity:.9}.c3-tooltip tr{border:1px solid #ccc}.c3-tooltip th{background-color:#aaa;font-size:14px;padding:2px 5px;text-align:left;color:#fff}.c3-tooltip td{font-size:13px;padding:3px 6px;background-color:#fff;border-left:1px dotted #999}.c3-tooltip td>span{display:inline-block;width:10px;height:10px;margin-right:6px}.c3-tooltip td.value{text-align:right}.c3-area{stroke-width:0;opacity:.2}.c3-chart-arcs-title{dominant-baseline:middle;font-size:1.3em}.c3-chart-arcs .c3-chart-arcs-background{fill:#e0e0e0;stroke:none}.c3-chart-arcs .c3-chart-arcs-gauge-unit{fill:#000;font-size:16px}.c3-chart-arcs .c3-chart-arcs-gauge-max{fill:#777}.c3-chart-arcs .c3-chart-arcs-gauge-min{fill:#777}.c3-chart-arc .c3-gauge-value{fill:#000}.c3-chart-arc.c3-target g path{opacity:1}.c3-chart-arc.c3-target.c3-focused g path{opacity:1}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.i(__webpack_require__(12), "");
exports.i(__webpack_require__(13), "");

// module
exports.push([module.i, "\n@charset \"UTF-8\";\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #FFF;\n}\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\ndfn {\n  font-style: italic;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\n\n/*!\n * Bootstrap Grid v4.0.0-beta.2 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width;\n}\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n.container {\n    max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container {\n    max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container {\n    max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n    max-width: 1140px;\n}\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12,\n.col,\n.col-auto,\n.col-sm-1,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm,\n.col-sm-auto,\n.col-md-1,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md,\n.col-md-auto,\n.col-lg-1,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg,\n.col-lg-auto,\n.col-xl-1,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12,\n.col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  order: -1;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.order-4 {\n  order: 4;\n}\n.order-5 {\n  order: 5;\n}\n.order-6 {\n  order: 6;\n}\n.order-7 {\n  order: 7;\n}\n.order-8 {\n  order: 8;\n}\n.order-9 {\n  order: 9;\n}\n.order-10 {\n  order: 10;\n}\n.order-11 {\n  order: 11;\n}\n.order-12 {\n  order: 12;\n}\n.offset-1 {\n  margin-left: 8.33333%;\n}\n.offset-2 {\n  margin-left: 16.66667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.33333%;\n}\n.offset-5 {\n  margin-left: 41.66667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.33333%;\n}\n.offset-8 {\n  margin-left: 66.66667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.33333%;\n}\n.offset-11 {\n  margin-left: 91.66667%;\n}\n@media (min-width: 576px) {\n.col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-sm-first {\n    order: -1;\n}\n.order-sm-1 {\n    order: 1;\n}\n.order-sm-2 {\n    order: 2;\n}\n.order-sm-3 {\n    order: 3;\n}\n.order-sm-4 {\n    order: 4;\n}\n.order-sm-5 {\n    order: 5;\n}\n.order-sm-6 {\n    order: 6;\n}\n.order-sm-7 {\n    order: 7;\n}\n.order-sm-8 {\n    order: 8;\n}\n.order-sm-9 {\n    order: 9;\n}\n.order-sm-10 {\n    order: 10;\n}\n.order-sm-11 {\n    order: 11;\n}\n.order-sm-12 {\n    order: 12;\n}\n.offset-sm-0 {\n    margin-left: 0;\n}\n.offset-sm-1 {\n    margin-left: 8.33333%;\n}\n.offset-sm-2 {\n    margin-left: 16.66667%;\n}\n.offset-sm-3 {\n    margin-left: 25%;\n}\n.offset-sm-4 {\n    margin-left: 33.33333%;\n}\n.offset-sm-5 {\n    margin-left: 41.66667%;\n}\n.offset-sm-6 {\n    margin-left: 50%;\n}\n.offset-sm-7 {\n    margin-left: 58.33333%;\n}\n.offset-sm-8 {\n    margin-left: 66.66667%;\n}\n.offset-sm-9 {\n    margin-left: 75%;\n}\n.offset-sm-10 {\n    margin-left: 83.33333%;\n}\n.offset-sm-11 {\n    margin-left: 91.66667%;\n}\n}\n@media (min-width: 768px) {\n.col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-md-first {\n    order: -1;\n}\n.order-md-1 {\n    order: 1;\n}\n.order-md-2 {\n    order: 2;\n}\n.order-md-3 {\n    order: 3;\n}\n.order-md-4 {\n    order: 4;\n}\n.order-md-5 {\n    order: 5;\n}\n.order-md-6 {\n    order: 6;\n}\n.order-md-7 {\n    order: 7;\n}\n.order-md-8 {\n    order: 8;\n}\n.order-md-9 {\n    order: 9;\n}\n.order-md-10 {\n    order: 10;\n}\n.order-md-11 {\n    order: 11;\n}\n.order-md-12 {\n    order: 12;\n}\n.offset-md-0 {\n    margin-left: 0;\n}\n.offset-md-1 {\n    margin-left: 8.33333%;\n}\n.offset-md-2 {\n    margin-left: 16.66667%;\n}\n.offset-md-3 {\n    margin-left: 25%;\n}\n.offset-md-4 {\n    margin-left: 33.33333%;\n}\n.offset-md-5 {\n    margin-left: 41.66667%;\n}\n.offset-md-6 {\n    margin-left: 50%;\n}\n.offset-md-7 {\n    margin-left: 58.33333%;\n}\n.offset-md-8 {\n    margin-left: 66.66667%;\n}\n.offset-md-9 {\n    margin-left: 75%;\n}\n.offset-md-10 {\n    margin-left: 83.33333%;\n}\n.offset-md-11 {\n    margin-left: 91.66667%;\n}\n}\n@media (min-width: 992px) {\n.col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-lg-first {\n    order: -1;\n}\n.order-lg-1 {\n    order: 1;\n}\n.order-lg-2 {\n    order: 2;\n}\n.order-lg-3 {\n    order: 3;\n}\n.order-lg-4 {\n    order: 4;\n}\n.order-lg-5 {\n    order: 5;\n}\n.order-lg-6 {\n    order: 6;\n}\n.order-lg-7 {\n    order: 7;\n}\n.order-lg-8 {\n    order: 8;\n}\n.order-lg-9 {\n    order: 9;\n}\n.order-lg-10 {\n    order: 10;\n}\n.order-lg-11 {\n    order: 11;\n}\n.order-lg-12 {\n    order: 12;\n}\n.offset-lg-0 {\n    margin-left: 0;\n}\n.offset-lg-1 {\n    margin-left: 8.33333%;\n}\n.offset-lg-2 {\n    margin-left: 16.66667%;\n}\n.offset-lg-3 {\n    margin-left: 25%;\n}\n.offset-lg-4 {\n    margin-left: 33.33333%;\n}\n.offset-lg-5 {\n    margin-left: 41.66667%;\n}\n.offset-lg-6 {\n    margin-left: 50%;\n}\n.offset-lg-7 {\n    margin-left: 58.33333%;\n}\n.offset-lg-8 {\n    margin-left: 66.66667%;\n}\n.offset-lg-9 {\n    margin-left: 75%;\n}\n.offset-lg-10 {\n    margin-left: 83.33333%;\n}\n.offset-lg-11 {\n    margin-left: 91.66667%;\n}\n}\n@media (min-width: 1200px) {\n.col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-xl-first {\n    order: -1;\n}\n.order-xl-1 {\n    order: 1;\n}\n.order-xl-2 {\n    order: 2;\n}\n.order-xl-3 {\n    order: 3;\n}\n.order-xl-4 {\n    order: 4;\n}\n.order-xl-5 {\n    order: 5;\n}\n.order-xl-6 {\n    order: 6;\n}\n.order-xl-7 {\n    order: 7;\n}\n.order-xl-8 {\n    order: 8;\n}\n.order-xl-9 {\n    order: 9;\n}\n.order-xl-10 {\n    order: 10;\n}\n.order-xl-11 {\n    order: 11;\n}\n.order-xl-12 {\n    order: 12;\n}\n.offset-xl-0 {\n    margin-left: 0;\n}\n.offset-xl-1 {\n    margin-left: 8.33333%;\n}\n.offset-xl-2 {\n    margin-left: 16.66667%;\n}\n.offset-xl-3 {\n    margin-left: 25%;\n}\n.offset-xl-4 {\n    margin-left: 33.33333%;\n}\n.offset-xl-5 {\n    margin-left: 41.66667%;\n}\n.offset-xl-6 {\n    margin-left: 50%;\n}\n.offset-xl-7 {\n    margin-left: 58.33333%;\n}\n.offset-xl-8 {\n    margin-left: 66.66667%;\n}\n.offset-xl-9 {\n    margin-left: 75%;\n}\n.offset-xl-10 {\n    margin-left: 83.33333%;\n}\n.offset-xl-11 {\n    margin-left: 91.66667%;\n}\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n.flex-sm-row {\n    flex-direction: row !important;\n}\n.flex-sm-column {\n    flex-direction: column !important;\n}\n.flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-sm-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-sm-start {\n    justify-content: flex-start !important;\n}\n.justify-content-sm-end {\n    justify-content: flex-end !important;\n}\n.justify-content-sm-center {\n    justify-content: center !important;\n}\n.justify-content-sm-between {\n    justify-content: space-between !important;\n}\n.justify-content-sm-around {\n    justify-content: space-around !important;\n}\n.align-items-sm-start {\n    align-items: flex-start !important;\n}\n.align-items-sm-end {\n    align-items: flex-end !important;\n}\n.align-items-sm-center {\n    align-items: center !important;\n}\n.align-items-sm-baseline {\n    align-items: baseline !important;\n}\n.align-items-sm-stretch {\n    align-items: stretch !important;\n}\n.align-content-sm-start {\n    align-content: flex-start !important;\n}\n.align-content-sm-end {\n    align-content: flex-end !important;\n}\n.align-content-sm-center {\n    align-content: center !important;\n}\n.align-content-sm-between {\n    align-content: space-between !important;\n}\n.align-content-sm-around {\n    align-content: space-around !important;\n}\n.align-content-sm-stretch {\n    align-content: stretch !important;\n}\n.align-self-sm-auto {\n    align-self: auto !important;\n}\n.align-self-sm-start {\n    align-self: flex-start !important;\n}\n.align-self-sm-end {\n    align-self: flex-end !important;\n}\n.align-self-sm-center {\n    align-self: center !important;\n}\n.align-self-sm-baseline {\n    align-self: baseline !important;\n}\n.align-self-sm-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 768px) {\n.flex-md-row {\n    flex-direction: row !important;\n}\n.flex-md-column {\n    flex-direction: column !important;\n}\n.flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-md-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-md-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-md-start {\n    justify-content: flex-start !important;\n}\n.justify-content-md-end {\n    justify-content: flex-end !important;\n}\n.justify-content-md-center {\n    justify-content: center !important;\n}\n.justify-content-md-between {\n    justify-content: space-between !important;\n}\n.justify-content-md-around {\n    justify-content: space-around !important;\n}\n.align-items-md-start {\n    align-items: flex-start !important;\n}\n.align-items-md-end {\n    align-items: flex-end !important;\n}\n.align-items-md-center {\n    align-items: center !important;\n}\n.align-items-md-baseline {\n    align-items: baseline !important;\n}\n.align-items-md-stretch {\n    align-items: stretch !important;\n}\n.align-content-md-start {\n    align-content: flex-start !important;\n}\n.align-content-md-end {\n    align-content: flex-end !important;\n}\n.align-content-md-center {\n    align-content: center !important;\n}\n.align-content-md-between {\n    align-content: space-between !important;\n}\n.align-content-md-around {\n    align-content: space-around !important;\n}\n.align-content-md-stretch {\n    align-content: stretch !important;\n}\n.align-self-md-auto {\n    align-self: auto !important;\n}\n.align-self-md-start {\n    align-self: flex-start !important;\n}\n.align-self-md-end {\n    align-self: flex-end !important;\n}\n.align-self-md-center {\n    align-self: center !important;\n}\n.align-self-md-baseline {\n    align-self: baseline !important;\n}\n.align-self-md-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 992px) {\n.flex-lg-row {\n    flex-direction: row !important;\n}\n.flex-lg-column {\n    flex-direction: column !important;\n}\n.flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-lg-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-lg-start {\n    justify-content: flex-start !important;\n}\n.justify-content-lg-end {\n    justify-content: flex-end !important;\n}\n.justify-content-lg-center {\n    justify-content: center !important;\n}\n.justify-content-lg-between {\n    justify-content: space-between !important;\n}\n.justify-content-lg-around {\n    justify-content: space-around !important;\n}\n.align-items-lg-start {\n    align-items: flex-start !important;\n}\n.align-items-lg-end {\n    align-items: flex-end !important;\n}\n.align-items-lg-center {\n    align-items: center !important;\n}\n.align-items-lg-baseline {\n    align-items: baseline !important;\n}\n.align-items-lg-stretch {\n    align-items: stretch !important;\n}\n.align-content-lg-start {\n    align-content: flex-start !important;\n}\n.align-content-lg-end {\n    align-content: flex-end !important;\n}\n.align-content-lg-center {\n    align-content: center !important;\n}\n.align-content-lg-between {\n    align-content: space-between !important;\n}\n.align-content-lg-around {\n    align-content: space-around !important;\n}\n.align-content-lg-stretch {\n    align-content: stretch !important;\n}\n.align-self-lg-auto {\n    align-self: auto !important;\n}\n.align-self-lg-start {\n    align-self: flex-start !important;\n}\n.align-self-lg-end {\n    align-self: flex-end !important;\n}\n.align-self-lg-center {\n    align-self: center !important;\n}\n.align-self-lg-baseline {\n    align-self: baseline !important;\n}\n.align-self-lg-stretch {\n    align-self: stretch !important;\n}\n}\n@media (min-width: 1200px) {\n.flex-xl-row {\n    flex-direction: row !important;\n}\n.flex-xl-column {\n    flex-direction: column !important;\n}\n.flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n}\n.flex-xl-wrap {\n    flex-wrap: wrap !important;\n}\n.flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-xl-start {\n    justify-content: flex-start !important;\n}\n.justify-content-xl-end {\n    justify-content: flex-end !important;\n}\n.justify-content-xl-center {\n    justify-content: center !important;\n}\n.justify-content-xl-between {\n    justify-content: space-between !important;\n}\n.justify-content-xl-around {\n    justify-content: space-around !important;\n}\n.align-items-xl-start {\n    align-items: flex-start !important;\n}\n.align-items-xl-end {\n    align-items: flex-end !important;\n}\n.align-items-xl-center {\n    align-items: center !important;\n}\n.align-items-xl-baseline {\n    align-items: baseline !important;\n}\n.align-items-xl-stretch {\n    align-items: stretch !important;\n}\n.align-content-xl-start {\n    align-content: flex-start !important;\n}\n.align-content-xl-end {\n    align-content: flex-end !important;\n}\n.align-content-xl-center {\n    align-content: center !important;\n}\n.align-content-xl-between {\n    align-content: space-between !important;\n}\n.align-content-xl-around {\n    align-content: space-around !important;\n}\n.align-content-xl-stretch {\n    align-content: stretch !important;\n}\n.align-self-xl-auto {\n    align-self: auto !important;\n}\n.align-self-xl-start {\n    align-self: flex-start !important;\n}\n.align-self-xl-end {\n    align-self: flex-end !important;\n}\n.align-self-xl-center {\n    align-self: center !important;\n}\n.align-self-xl-baseline {\n    align-self: baseline !important;\n}\n.align-self-xl-stretch {\n    align-self: stretch !important;\n}\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n.d-sm-none {\n    display: none !important;\n}\n.d-sm-inline {\n    display: inline !important;\n}\n.d-sm-inline-block {\n    display: inline-block !important;\n}\n.d-sm-block {\n    display: block !important;\n}\n.d-sm-table {\n    display: table !important;\n}\n.d-sm-table-row {\n    display: table-row !important;\n}\n.d-sm-table-cell {\n    display: table-cell !important;\n}\n.d-sm-flex {\n    display: flex !important;\n}\n.d-sm-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 768px) {\n.d-md-none {\n    display: none !important;\n}\n.d-md-inline {\n    display: inline !important;\n}\n.d-md-inline-block {\n    display: inline-block !important;\n}\n.d-md-block {\n    display: block !important;\n}\n.d-md-table {\n    display: table !important;\n}\n.d-md-table-row {\n    display: table-row !important;\n}\n.d-md-table-cell {\n    display: table-cell !important;\n}\n.d-md-flex {\n    display: flex !important;\n}\n.d-md-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 992px) {\n.d-lg-none {\n    display: none !important;\n}\n.d-lg-inline {\n    display: inline !important;\n}\n.d-lg-inline-block {\n    display: inline-block !important;\n}\n.d-lg-block {\n    display: block !important;\n}\n.d-lg-table {\n    display: table !important;\n}\n.d-lg-table-row {\n    display: table-row !important;\n}\n.d-lg-table-cell {\n    display: table-cell !important;\n}\n.d-lg-flex {\n    display: flex !important;\n}\n.d-lg-inline-flex {\n    display: inline-flex !important;\n}\n}\n@media (min-width: 1200px) {\n.d-xl-none {\n    display: none !important;\n}\n.d-xl-inline {\n    display: inline !important;\n}\n.d-xl-inline-block {\n    display: inline-block !important;\n}\n.d-xl-block {\n    display: block !important;\n}\n.d-xl-table {\n    display: table !important;\n}\n.d-xl-table-row {\n    display: table-row !important;\n}\n.d-xl-table-cell {\n    display: table-cell !important;\n}\n.d-xl-flex {\n    display: flex !important;\n}\n.d-xl-inline-flex {\n    display: inline-flex !important;\n}\n}\n.d-print-block {\n  display: none !important;\n}\n@media print {\n.d-print-block {\n    display: block !important;\n}\n}\n.d-print-inline {\n  display: none !important;\n}\n@media print {\n.d-print-inline {\n    display: inline !important;\n}\n}\n.d-print-inline-block {\n  display: none !important;\n}\n@media print {\n.d-print-inline-block {\n    display: inline-block !important;\n}\n}\n@media print {\n.d-print-none {\n    display: none !important;\n}\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n.m-sm-0 {\n    margin: 0 !important;\n}\n.mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n}\n.mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n}\n.mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n}\n.ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n}\n.m-sm-1 {\n    margin: 0.25rem !important;\n}\n.mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n}\n.m-sm-2 {\n    margin: 0.5rem !important;\n}\n.mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n}\n.m-sm-3 {\n    margin: 1rem !important;\n}\n.mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n}\n.mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n}\n.mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n}\n.m-sm-4 {\n    margin: 1.5rem !important;\n}\n.mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n}\n.m-sm-5 {\n    margin: 3rem !important;\n}\n.mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n}\n.mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n}\n.mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n}\n.p-sm-0 {\n    padding: 0 !important;\n}\n.pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n}\n.pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n}\n.pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n}\n.pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n}\n.p-sm-1 {\n    padding: 0.25rem !important;\n}\n.pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n}\n.p-sm-2 {\n    padding: 0.5rem !important;\n}\n.pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n}\n.p-sm-3 {\n    padding: 1rem !important;\n}\n.pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n}\n.pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n}\n.pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n}\n.p-sm-4 {\n    padding: 1.5rem !important;\n}\n.pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n}\n.p-sm-5 {\n    padding: 3rem !important;\n}\n.pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n}\n.pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n}\n.pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n}\n.m-sm-auto {\n    margin: auto !important;\n}\n.mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n}\n.mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n}\n.mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n}\n.ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 768px) {\n.m-md-0 {\n    margin: 0 !important;\n}\n.mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n}\n.mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n}\n.mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n}\n.ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n}\n.m-md-1 {\n    margin: 0.25rem !important;\n}\n.mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n}\n.m-md-2 {\n    margin: 0.5rem !important;\n}\n.mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n}\n.m-md-3 {\n    margin: 1rem !important;\n}\n.mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n}\n.mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n}\n.mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n}\n.m-md-4 {\n    margin: 1.5rem !important;\n}\n.mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n}\n.m-md-5 {\n    margin: 3rem !important;\n}\n.mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n}\n.mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n}\n.mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n}\n.p-md-0 {\n    padding: 0 !important;\n}\n.pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n}\n.pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n}\n.pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n}\n.pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n}\n.p-md-1 {\n    padding: 0.25rem !important;\n}\n.pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n}\n.p-md-2 {\n    padding: 0.5rem !important;\n}\n.pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n}\n.p-md-3 {\n    padding: 1rem !important;\n}\n.pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n}\n.pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n}\n.pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n}\n.p-md-4 {\n    padding: 1.5rem !important;\n}\n.pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n}\n.p-md-5 {\n    padding: 3rem !important;\n}\n.pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n}\n.pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n}\n.pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n}\n.m-md-auto {\n    margin: auto !important;\n}\n.mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n}\n.mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n}\n.mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n}\n.ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 992px) {\n.m-lg-0 {\n    margin: 0 !important;\n}\n.mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n}\n.mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n}\n.mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n}\n.ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n}\n.m-lg-1 {\n    margin: 0.25rem !important;\n}\n.mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n}\n.m-lg-2 {\n    margin: 0.5rem !important;\n}\n.mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n}\n.m-lg-3 {\n    margin: 1rem !important;\n}\n.mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n}\n.mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n}\n.mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n}\n.m-lg-4 {\n    margin: 1.5rem !important;\n}\n.mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n}\n.m-lg-5 {\n    margin: 3rem !important;\n}\n.mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n}\n.mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n}\n.mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n}\n.p-lg-0 {\n    padding: 0 !important;\n}\n.pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n}\n.pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n}\n.pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n}\n.pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n}\n.p-lg-1 {\n    padding: 0.25rem !important;\n}\n.pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n}\n.p-lg-2 {\n    padding: 0.5rem !important;\n}\n.pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n}\n.p-lg-3 {\n    padding: 1rem !important;\n}\n.pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n}\n.pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n}\n.pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n}\n.p-lg-4 {\n    padding: 1.5rem !important;\n}\n.pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n}\n.p-lg-5 {\n    padding: 3rem !important;\n}\n.pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n}\n.pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n}\n.pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n}\n.m-lg-auto {\n    margin: auto !important;\n}\n.mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n}\n.mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n}\n.mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n}\n.ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 1200px) {\n.m-xl-0 {\n    margin: 0 !important;\n}\n.mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n}\n.mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n}\n.mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n}\n.ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n}\n.m-xl-1 {\n    margin: 0.25rem !important;\n}\n.mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n}\n.m-xl-2 {\n    margin: 0.5rem !important;\n}\n.mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n}\n.m-xl-3 {\n    margin: 1rem !important;\n}\n.mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n}\n.mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n}\n.mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n}\n.m-xl-4 {\n    margin: 1.5rem !important;\n}\n.mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n}\n.m-xl-5 {\n    margin: 3rem !important;\n}\n.mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n}\n.mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n}\n.mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n}\n.p-xl-0 {\n    padding: 0 !important;\n}\n.pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n}\n.pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n}\n.pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n}\n.pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n}\n.p-xl-1 {\n    padding: 0.25rem !important;\n}\n.pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n}\n.p-xl-2 {\n    padding: 0.5rem !important;\n}\n.pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n}\n.p-xl-3 {\n    padding: 1rem !important;\n}\n.pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n}\n.pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n}\n.pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n}\n.p-xl-4 {\n    padding: 1.5rem !important;\n}\n.pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n}\n.p-xl-5 {\n    padding: 3rem !important;\n}\n.pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n}\n.pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n}\n.pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n}\n.m-xl-auto {\n    margin: auto !important;\n}\n.mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n}\n.mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n}\n.mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n}\n.ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n}\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(3) + ");\n  src: url(" + __webpack_require__(3) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(23) + ") format(\"woff2\"), url(" + __webpack_require__(22) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\"), url(" + __webpack_require__(20) + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n}\n}\n@keyframes fa-spin {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n}\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #fff;\n}\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\nbody {\n  background: #efefef;\n  color: #303030;\n}\nmain {\n  background: white;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 30px;\n  font-family: Raleway, sans-serif;\n  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);\n}\nh1 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: 2.4em;\n  margin: 40px 0 10px;\n}\nh2 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: 1.9em;\n  margin: 30px 0 10px;\n}\nh3 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: 1.4em;\n  margin: 20px 0 10px;\n}\nh4 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: 0.9em;\n  margin: 10px 0 10px;\n}\nh5 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: 0.4em;\n  margin: 0px 0 10px;\n}\nh6 {\n  font-weight: normal;\n  font-family: Oswald, sans-serif;\n  font-size: -0.1em;\n  margin: -10px 0 10px;\n}\nh1 {\n  text-align: center;\n  line-height: 1.05em;\n  font-family: Raleway, sans-serif;\n  margin: 0;\n}\nh1 small {\n  font-weight: bold;\n  font-family: Oswald, sans-serif;\n}\nh1 .team {\n  font-size: 0.4em;\n  font-style: italic;\n  line-height: 0;\n}\nhr {\n  height: 1px;\n  background: #eaeaea;\n  border: 0;\n  margin: 45px auto;\n  width: 60%;\n  text-align: center;\n}\nhr::after {\n  content: '\\F005   \\F005   \\F005   \\F005   \\F005';\n  font-family: FontAwesome, sans-serif;\n  color: #FF9900;\n  display: inline-block;\n  background: white;\n  position: relative;\n  top: -0.8em;\n  padding: 0 10px;\n}\nsection.intro {\n  font-size: 1.3em;\n  font-family: Raleway, sans-serif;\n}\nsection.intro img {\n  display: block;\n  max-width: 400px;\n  margin: 30px auto;\n}\nsection.citations {\n  font-size: 0.8em;\n}\n.fa.fa-star {\n  color: #FF9900;\n}\n.fa.fa-star-o {\n  color: #b2b2b2;\n}\n.centered {\n  text-align: center;\n}\n.c3 .c3-tooltip th {\n  background: #FF9900;\n}\n.c3 .c3-chart-lines .c3-circles .c3-circle {\n  display: none;\n}\ndiv.review {\n  background: #efefef;\n  padding: 10px 15px 5px;\n  max-width: 700px;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);\n  margin: 40px 0;\n}\ndiv.review div.grade {\n  float: right;\n  padding: 10px 0;\n  position: relative;\n}\ndiv.review div.grade .explanation {\n  width: 250px;\n  top: -28px;\n  height: 38px;\n  right: 0;\n}\ndiv.review div.grade .explanation::after {\n  margin-top: 7px;\n  margin-left: 40px;\n}\ndiv.review h3 {\n  margin: 0 0 10px;\n  position: relative;\n}\ndiv.review h3 .explanation {\n  height: 22px;\n  left: 0;\n  top: -20px;\n}\ndiv.review h3 .explanation::after {\n  border-left: 1px solid #343434;\n  border-top: 1px solid #343434;\n  border-bottom: 1px solid #343434;\n  margin-left: -28px;\n  margin-top: -8px;\n  width: 15px;\n  height: 29px;\n}\ndiv.review p.review-text {\n  font-style: italic;\n  position: relative;\n}\ndiv.review p.review-text .explanation {\n  height: 22px;\n  right: 0;\n  margin-top: 20px;\n}\ndiv.review p.review-text .explanation::after {\n  margin-top: -15px;\n  margin-left: -115px;\n}\ndiv.review p.helpfulness {\n  font-size: 0.8em;\n  position: relative;\n}\ndiv.review p.helpfulness .explanation {\n  height: 22px;\n  margin-top: 22px;\n  left: 110px;\n}\ndiv.review p.helpfulness .explanation::after {\n  margin-top: -15px;\n  margin-left: -115px;\n}\ndiv.review .explanation {\n  position: absolute;\n  font-size: 12px;\n  background: #343434;\n  padding: 3px 5px;\n  border-radius: 3px;\n  border-left: 5px solid #FF9900;\n  color: white;\n  line-height: 1.3em;\n  font-style: italic;\n  font-weight: normal;\n  font-family: Raleway, sans-serif;\n}\ndiv.review .explanation::after {\n  content: ' ';\n  height: 10px;\n  display: block;\n  border-left: 1px solid #343434;\n  border-bottom: 1px solid #343434;\n  width: 100px;\n}\ntable {\n  margin-bottom: 20px;\n}\ntable th {\n  background: #dfdfdf;\n  font-weight: bold;\n}\ntable th,\ntable td {\n  border: 1px solid #d5d5d5;\n  padding: 8px 5px;\n}\ntable tr:nth-child(2n + 1) {\n  background: #f1f1f1;\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(16)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/amazon.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fontawesome-webfont.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fontawesome-webfont.ttf";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fontawesome-webfont.woff";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fontawesome-webfont.woff2";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_429f94f6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_main_vue__ = __webpack_require__(27);
function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_429f94f6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grades_distribution_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5513542c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grades_distribution_vue__ = __webpack_require__(28);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grades_distribution_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5513542c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grades_distribution_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reviews_distribution_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9da587a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reviews_distribution_vue__ = __webpack_require__(29);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reviews_distribution_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9da587a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reviews_distribution_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._m(0,false,false),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(1,false,false),_vm._v(" "),_c('section',[_c('h2',[_vm._v("Discovering the data")]),_vm._v(" "),_vm._m(2,false,false),_vm._v(" "),_vm._m(3,false,false),_vm._v(" "),_vm._m(4,false,false),_vm._v(" "),_vm._m(5,false,false),_vm._v(" "),_c('grades-distribution'),_vm._v(" "),_vm._m(6,false,false),_vm._v(" "),_c('reviews-distribution'),_vm._v(" "),_c('p',[_vm._v("We can see here an extract of the products database (one on twenty product) sorted by the number of reviews.")])],1),_vm._v(" "),_vm._m(7,false,false)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v("\n    Adamazon"),_c('br'),_c('small',[_vm._v("Investigating factors behind product reviews")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"team"},[_vm._v("Victor Le, Quentin de Longraye, Karttikeya Mangalam • ADA • EPFL")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"intro"},[_c('p',[_vm._v("\n      Reviews on Amazon are done by thousands of people to share their advices and analysis concerning products\n      in dozens of categories and subcategories. These reviews can influence positively or negatively the potential\n      buyers to make their purchase a reality or buy an other product. We will here try to focus on which factors\n      can determine whether a review is "),_c('em',[_vm._v("good")]),_vm._v(" and which product's features can influence reviews. See\n      this website's "),_c('a',{attrs:{"href":"https://github.com/adamazon/adamazon","target":"_blank"}},[_vm._v("source code")]),_vm._v(" and\n      "),_c('a',{attrs:{"href":"https://github.com/Coac/epfl-ada/tree/master/Project","target":"_blank"}},[_vm._v("detailed analysis")]),_vm._v(".\n    ")]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(19),"data-aos":"fade"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n      We will use data from "),_c('em',[_vm._v("Amazon product data")]),_c('sup',[_c('a',{attrs:{"href":"#ups-and-down"}},[_vm._v("[1]")])]),_vm._v("\n      containing Amazon product reviews (142.8 million) and metadata. We will more precisely focus on the Video Games section\n      to try to find correlations and insights for understanding how reviews are written. The Video Games section contains\n      about 1,300,000 reviews (after de-duplication) and will be useful to reduce bias in our analysis, as we could expect\n      reviews to be done based on the same family of criteria.\n    ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n      If you're not familiar with Amazon or the concept of "),_c('em',[_vm._v("review")]),_vm._v(", here is what it look likes:\n    ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"review"},[_c('div',{staticClass:"grade"},[_c('i',{staticClass:"fa fa-star",attrs:{"data-aos":"zoom-in","data-aos-delay":"100"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-star",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-star",attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-star",attrs:{"data-aos":"zoom-in","data-aos-delay":"400"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-star-o",attrs:{"data-aos":"zoom-in","data-aos-delay":"500"}}),_vm._v(" "),_c('span',{staticClass:"explanation",attrs:{"data-aos":"fade","data-aos-offset":"300"}},[_vm._v("\n          The product's score given by the reviewer,"),_c('br'),_vm._v("between 1 and 5 stars\n        ")])]),_vm._v(" "),_c('h3',[_vm._v("\n        Review by\n        "),_c('strong',[_vm._v("Electronic Junky")]),_vm._v(" "),_c('span',{staticClass:"explanation",attrs:{"data-aos":"fade","data-aos-offset":"300"}},[_vm._v("\n          Reviewers are identified to allow gathering of all their reviews\n        ")])]),_vm._v(" "),_c('p',{staticClass:"review-text"},[_c('strong',[_vm._v("Good rally game")]),_vm._v(" •\n        If you like rally cars get this game you will have fun. It is more oriented to \"European market\" since here in America there isn't a huge rally fan party. Music it is very European and even the voices from the game very \"English\" accent. The multiplayer isn't the best but it works just ok.\n        "),_c('span',{staticClass:"explanation",attrs:{"data-aos":"fade","data-aos-offset":"300"}},[_vm._v("\n          The review text containing the product analysis\n        ")])]),_vm._v(" "),_c('p',{staticClass:"helpfulness"},[_c('strong',[_vm._v("13")]),_vm._v(" of 15 people found this review useful\n        "),_c('span',{staticClass:"explanation",attrs:{"data-aos":"fade","data-aos-offset":"300"}},[_vm._v("\n          Other customers can say if the review was helpful\n        ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n      Relevant data is mostly textual. The "),_c('em',[_vm._v("helpfulness")]),_vm._v(" level of each review is a good way to understand\n      if the review was useful for the other customers. It is determined by the vote of other customers. But before\n      focusing on this aspect, let's see how reviews grades are distributed among products:\n    ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n      Users tend to give priority to the highest grades, 4 "),_c('i',{staticClass:"fa fa-star"}),_vm._v(" and 5 "),_c('i',{staticClass:"fa fa-star"}),_vm._v("\n      are representing more than 50% of the overall. There is a a slightly increase between 2 "),_c('i',{staticClass:"fa fa-star"}),_vm._v("\n      and 1 "),_c('i',{staticClass:"fa fa-star"}),_vm._v(", which can be understood by the will to "),_c('em',[_vm._v("punish")]),_vm._v(" products when something\n      went wrong for the customer. But are these reviews representative and equally distributed for all the products?\n    ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"citations"},[_c('span',{attrs:{"id":"ups-and-down"}},[_vm._v("[1]")]),_vm._v(" "),_c('strong',[_vm._v("Ups and downs: Modeling the visual evolution of fashion trends with one-class collaborative filtering")]),_c('br'),_vm._v("\n    R. He, J. McAuley"),_c('br'),_vm._v(" "),_c('em',[_vm._v("WWW")]),_vm._v(", 2016\n  ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"gradesDistribution",attrs:{"data-aos":"fade"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"reviewsDistribution",attrs:{"data-aos":"fade"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(31)("236281a2", content, true);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(32)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.9
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}function a(e){return"[object Object]"===Si.call(e)}function s(e){return"[object RegExp]"===Si.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function l(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function d(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function p(e,t){return ji.call(e,t)}function v(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function h(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function m(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function y(e,t){for(var n in t)e[n]=t[n];return e}function g(e){for(var t={},n=0;n<e.length;n++)e[n]&&y(t,e[n]);return t}function _(e,t,n){}function b(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return b(e,t[n])});if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return b(e[n],t[n])})}catch(e){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(b(e[n],t))return n;return-1}function C(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function w(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function k(e){if(!Vi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function A(e){return"function"==typeof e&&/native code/.test(e.toString())}function O(e){lo.target&&fo.push(lo.target),lo.target=e}function S(){lo.target=fo.pop()}function T(e){return new po(void 0,void 0,void 0,String(e))}function E(e,t){var n=e.componentOptions,r=new po(e.tag,e.data,e.children,e.text,e.elm,e.context,n,e.asyncFactory);return r.ns=e.ns,r.isStatic=e.isStatic,r.key=e.key,r.isComment=e.isComment,r.fnContext=e.fnContext,r.fnOptions=e.fnOptions,r.fnScopeId=e.fnScopeId,r.isCloned=!0,t&&(e.children&&(r.children=j(e.children,!0)),n&&n.children&&(n.children=j(n.children,!0))),r}function j(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=E(e[i],t);return r}function N(e,t,n){e.__proto__=t}function L(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function I(e,t){if(o(e)&&!(e instanceof po)){var n;return p(e,"__ob__")&&e.__ob__ instanceof bo?n=e.__ob__:_o.shouldConvert&&!oo()&&(Array.isArray(e)||a(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new bo(e)),t&&n&&n.vmCount++,n}}function M(e,t,n,r,i){var o=new lo,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&I(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return lo.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&F(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||(c?c.call(e,t):n=t,u=!i&&I(t),o.notify())}})}}function D(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(M(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function P(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}function F(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&F(t)}function R(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),s=0;s<o.length;s++)r=e[n=o[s]],i=t[n],p(e,n)?a(r)&&a(i)&&R(r,i):D(e,n,i);return e}function H(e,t,n){return n?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):e;return r?R(r,i):i}:t?e?function(){return R("function"==typeof t?t.call(this):t,"function"==typeof e?e.call(this):e)}:t:e}function B(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function U(e,t,n,r){var i=Object.create(e||null);return t?y(i,t):i}function V(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[Li(i)]={type:null});else if(a(n))for(var s in n)i=n[s],o[Li(s)]=a(i)?i:{type:i};e.props=o}}function z(e,t){var n=e.inject,r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(a(n))for(var o in n){var s=n[o];r[o]=a(s)?y({from:o},s):{from:s}}}function K(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function J(e,t,n){function r(r){var i=$o[r]||xo;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),V(t,n),z(t,n),K(t);var i=t.extends;if(i&&(e=J(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=J(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)p(e,s)||r(s);return c}function q(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=Li(n);if(p(i,o))return i[o];var a=Ii(o);if(p(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function W(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e];if(X(Boolean,i.type)&&(o&&!p(i,"default")?a=!1:X(String,i.type)||""!==a&&a!==Di(e)||(a=!0)),void 0===a){a=G(r,i,e);var s=_o.shouldConvert;_o.shouldConvert=!0,I(a),_o.shouldConvert=s}return a}function G(e,t,n){if(p(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==Z(t.type)?r.call(e):r}}function Z(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function X(e,t){if(!Array.isArray(t))return Z(t)===Z(e);for(var n=0,r=t.length;n<r;n++)if(Z(t[n])===Z(e))return!0;return!1}function Y(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Q(e,r,"errorCaptured hook")}}Q(e,t,n)}function Q(e,t,n){if(Ui.errorHandler)try{return Ui.errorHandler.call(null,e,t,n)}catch(e){ee(e,null,"config.errorHandler")}ee(e,t,n)}function ee(e,t,n){if(!Ki&&!Ji||"undefined"==typeof console)throw e;console.error(e)}function te(){Ao=!1;var e=ko.slice(0);ko.length=0;for(var t=0;t<e.length;t++)e[t]()}function ne(e){return e._withTask||(e._withTask=function(){Oo=!0;var t=e.apply(null,arguments);return Oo=!1,t})}function re(e,t){var n;if(ko.push(function(){if(e)try{e.call(t)}catch(e){Y(e,t,"nextTick")}else n&&n(t)}),Ao||(Ao=!0,Oo?wo():Co()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function ie(e){oe(e,No),No.clear()}function oe(e,t){var n,r,i=Array.isArray(e);if((i||o(e))&&!Object.isFrozen(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(i)for(n=e.length;n--;)oe(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)oe(e[r[n]],t)}}function ae(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function se(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=Lo(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=ae(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&i((u=Lo(a)).name,n[a],u.capture)}function ce(r,i,o){function a(){o.apply(this,arguments),d(s.fns,a)}r instanceof po&&(r=r.data.hook||(r.data.hook={}));var s,c=r[i];e(c)?s=ae([a]):t(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=ae([c,a]),s.merged=!0,r[i]=s}function ue(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=Di(u);le(a,c,u,l,!0)||le(a,s,u,l,!1)}return a}}function le(e,n,r,i,o){if(t(n)){if(p(n,r))return e[r]=n[r],o||delete n[r],!0;if(p(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function fe(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function de(e){return i(e)?[T(e)]:Array.isArray(e)?ve(e):void 0}function pe(e){return t(e)&&t(e.text)&&r(e.isComment)}function ve(r,o){var a,s,c,u,l=[];for(a=0;a<r.length;a++)e(s=r[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(pe((s=ve(s,(o||"")+"_"+a))[0])&&pe(u)&&(l[c]=T(u.text+s[0].text),s.shift()),l.push.apply(l,s)):i(s)?pe(u)?l[c]=T(u.text+s):""!==s&&l.push(T(s)):pe(s)&&pe(u)?l[c]=T(u.text+s.text):(n(r._isVList)&&t(s.tag)&&e(s.key)&&t(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function he(e,t){return(e.__esModule||so&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function me(e,t,n,r,i){var o=ho();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function ye(r,i,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=C(function(e){r.resolved=he(e,i),c||u()}),f=C(function(e){t(r.errorComp)&&(r.error=!0,u())}),d=r(l,f);return o(d)&&("function"==typeof d.then?e(r.resolved)&&d.then(l,f):t(d.component)&&"function"==typeof d.component.then&&(d.component.then(l,f),t(d.error)&&(r.errorComp=he(d.error,i)),t(d.loading)&&(r.loadingComp=he(d.loading,i),0===d.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},d.delay||200)),t(d.timeout)&&setTimeout(function(){e(r.resolved)&&f(null)},d.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function ge(e){return e.isComment&&e.asyncFactory}function _e(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&(t(r.componentOptions)||ge(r)))return r}}function be(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&we(e,t)}function $e(e,t,n){n?jo.$once(e,t):jo.$on(e,t)}function Ce(e,t){jo.$off(e,t)}function we(e,t,n){jo=e,se(t,n||{},$e,Ce,e),jo=void 0}function xe(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=o.data.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children):c.push(o)}}for(var u in n)n[u].every(ke)&&delete n[u];return n}function ke(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ae(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?Ae(e[n],t):t[e[n].key]=e[n].fn;return t}function Oe(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Se(e,t,n){e.$el=t,e.$options.render||(e.$options.render=ho),Le(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},new Uo(e,r,_,null,!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Le(e,"mounted")),e}function Te(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Oi);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data&&r.data.attrs||Oi,e.$listeners=n||Oi,t&&e.$options.props){_o.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=W(u,e.$options.props,t,e)}_o.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,we(e,n,l)}o&&(e.$slots=xe(i,r.context),e.$forceUpdate())}function Ee(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function je(e,t){if(t){if(e._directInactive=!1,Ee(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)je(e.$children[n]);Le(e,"activated")}}function Ne(e,t){if(!(t&&(e._directInactive=!0,Ee(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Ne(e.$children[n]);Le(e,"deactivated")}}function Le(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){Y(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function Ie(){Ho=Mo.length=Do.length=0,Po={},Fo=Ro=!1}function Me(){Ro=!0;var e,t;for(Mo.sort(function(e,t){return e.id-t.id}),Ho=0;Ho<Mo.length;Ho++)t=(e=Mo[Ho]).id,Po[t]=null,e.run();var n=Do.slice(),r=Mo.slice();Ie(),Fe(n),De(r),ao&&Ui.devtools&&ao.emit("flush")}function De(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&Le(r,"updated")}}function Pe(e){e._inactive=!1,Do.push(e)}function Fe(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,je(e[t],!0)}function Re(e){var t=e.id;if(null==Po[t]){if(Po[t]=!0,Ro){for(var n=Mo.length-1;n>Ho&&Mo[n].id>e.id;)n--;Mo.splice(n+1,0,e)}else Mo.push(e);Fo||(Fo=!0,re(Me))}}function He(e,t,n){Vo.get=function(){return this[t][n]},Vo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Vo)}function Be(e){e._watchers=[];var t=e.$options;t.props&&Ue(e,t.props),t.methods&&We(e,t.methods),t.data?Ve(e):I(e._data={},!0),t.computed&&Ke(e,t.computed),t.watch&&t.watch!==eo&&Ge(e,t.watch)}function Ue(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;_o.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=W(o,t,n,e);M(r,o,a),o in e||He(e,"_props",o)}(a);_o.shouldConvert=!0}function Ve(e){var t=e.$options.data;a(t=e._data="function"==typeof t?ze(t,e):t||{})||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;){var o=n[i];r&&p(r,o)||w(o)||He(e,"_data",o)}I(t,!0)}function ze(e,t){try{return e.call(t,t)}catch(e){return Y(e,t,"data()"),{}}}function Ke(e,t){var n=e._computedWatchers=Object.create(null),r=oo();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new Uo(e,a||_,_,zo)),i in e||Je(e,i,o)}}function Je(e,t,n){var r=!oo();"function"==typeof n?(Vo.get=r?qe(t):n,Vo.set=_):(Vo.get=n.get?r&&!1!==n.cache?qe(t):n.get:_,Vo.set=n.set?n.set:_),Object.defineProperty(e,t,Vo)}function qe(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),lo.target&&t.depend(),t.value}}function We(e,t){for(var n in t)e[n]=null==t[n]?_:h(t[n],e)}function Ge(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Ze(e,n,r[i]);else Ze(e,n,r)}}function Ze(e,t,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Xe(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ye(e){var t=Qe(e.$options.inject,e);t&&(_o.shouldConvert=!1,Object.keys(t).forEach(function(n){M(e,n,t[n])}),_o.shouldConvert=!0)}function Qe(e,t){if(e){for(var n=Object.create(null),r=so?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}return n}}function et(e,n){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=n(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=n(i+1,i);else if(o(e))for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(e[c],c,i);return t(r)&&(r._isVList=!0),r}function tt(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=y(y({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function nt(e){return q(this.$options,"filters",e,!0)||Fi}function rt(e,t,n,r){var i=Ui.keyCodes[t]||n;return i?Array.isArray(i)?-1===i.indexOf(e):i!==e:r?Di(r)!==t:void 0}function it(e,t,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||Ei(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||Ui.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))}(s)}else;return e}function ot(e,t,n){var r=arguments.length<3,i=this.$options.staticRenderFns,o=r||n?this._staticTrees||(this._staticTrees=[]):i.cached||(i.cached=[]),a=o[e];return a&&!t?Array.isArray(a)?j(a):E(a):(a=o[e]=i[e].call(this._renderProxy,null,this),st(a,"__static__"+e,!1),a)}function at(e,t,n){return st(e,"__once__"+t+(n?"_"+n:""),!0),e}function st(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&ct(e[r],t+"_"+r,n);else ct(e,t,n)}function ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function ut(e,t){if(t)if(a(t)){var n=e.on=e.on?y({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function lt(e){e._o=at,e._n=l,e._s=u,e._l=et,e._t=tt,e._q=b,e._i=$,e._m=ot,e._f=nt,e._k=rt,e._b=it,e._v=T,e._e=ho,e._u=Ae,e._g=ut}function ft(e,t,r,i,o){var a=o.options;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||Oi,this.injections=Qe(a.inject,i),this.slots=function(){return xe(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||Oi),a._scopeId?this._c=function(e,t,n,r){var o=_t(s,e,t,n,r,u);return o&&(o.fnScopeId=a._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return _t(s,e,t,n,r,u)}}function dt(e,n,r,i,o){var a=e.options,s={},c=a.props;if(t(c))for(var u in c)s[u]=W(u,c,n||Oi);else t(r.attrs)&&pt(s,r.attrs),t(r.props)&&pt(s,r.props);var l=new ft(r,s,o,i,e),f=a.render.call(null,l._c,l);return f instanceof po&&(f.fnContext=i,f.fnOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function pt(e,t){for(var n in t)e[Li(n)]=t[n]}function vt(r,i,a,s,c){if(!e(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(e(r.cid)&&(l=r,void 0===(r=ye(l,u,a))))return me(l,i,a,s,c);i=i||{},xt(r),t(i.model)&&gt(r.options,i);var f=ue(i,r,c);if(n(r.options.functional))return dt(r,f,i,a,s);var d=i.on;if(i.on=i.nativeOn,n(r.options.abstract)){var p=i.slot;i={},p&&(i.slot=p)}mt(i);var v=r.options.name||c;return new po("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:d,tag:c,children:s},l)}}}function ht(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function mt(e){e.hook||(e.hook={});for(var t=0;t<Jo.length;t++){var n=Jo[t],r=e.hook[n],i=Ko[n];e.hook[n]=r?yt(i,r):i}}function yt(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function gt(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function _t(e,t,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=Wo),bt(e,t,r,o,a)}function bt(e,n,r,i,o){if(t(r)&&t(r.__ob__))return ho();if(t(r)&&t(r.is)&&(n=r.is),!n)return ho();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===Wo?i=de(i):o===qo&&(i=fe(i));var a,s;if("string"==typeof n){var c;s=e.$vnode&&e.$vnode.ns||Ui.getTagNamespace(n),a=Ui.isReservedTag(n)?new po(Ui.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=q(e.$options,"components",n))?vt(c,r,e,i,n):new po(n,r,i,void 0,void 0,e)}else a=vt(n,r,e,i);return t(a)?(s&&$t(a,s),a):ho()}function $t(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),t(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];t(c.tag)&&(e(c.ns)||n(o))&&$t(c,i,o)}}function Ct(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=xe(t._renderChildren,r),e.$scopedSlots=Oi,e._c=function(t,n,r,i){return _t(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return _t(e,t,n,r,i,!0)};var i=n&&n.data;M(e,"$attrs",i&&i.attrs||Oi,null,!0),M(e,"$listeners",t._parentListeners||Oi,null,!0)}function wt(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function xt(e){var t=e.options;if(e.super){var n=xt(e.super);if(n!==e.superOptions){e.superOptions=n;var r=kt(e);r&&y(e.extendOptions,r),(t=e.options=J(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function kt(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=At(n[o],r[o],i[o]));return t}function At(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function Ot(e){this._init(e)}function St(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function Tt(e){e.mixin=function(e){return this.options=J(this.options,e),this}}function Et(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=J(n.options,e),a.super=n,a.options.props&&jt(a),a.options.computed&&Nt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Hi.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=y({},a.options),i[r]=a,a}}function jt(e){var t=e.options.props;for(var n in t)He(e.prototype,"_props",n)}function Nt(e){var t=e.options.computed;for(var n in t)Je(e.prototype,n,t[n])}function Lt(e){Hi.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&a(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function It(e){return e&&(e.Ctor.options.name||e.tag)}function Mt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!s(e)&&e.test(t)}function Dt(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=It(a.componentOptions);s&&!t(s)&&Pt(n,o,r,i)}}}function Pt(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,d(n,t)}function Ft(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=Rt(i.data,n));for(;t(r=r.parent);)r.data&&(n=Rt(n,r.data));return Ht(n.staticClass,n.class)}function Rt(e,n){return{staticClass:Bt(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function Ht(e,n){return t(e)||t(n)?Bt(e,Ut(n)):""}function Bt(e,t){return e?t?e+" "+t:e:t||""}function Ut(e){return Array.isArray(e)?Vt(e):o(e)?zt(e):"string"==typeof e?e:""}function Vt(e){for(var n,r="",i=0,o=e.length;i<o;i++)t(n=Ut(e[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function zt(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Kt(e){return ya(e)?"svg":"math"===e?"math":void 0}function Jt(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function qt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?d(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Wt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&t(r.data)===t(i.data)&&Gt(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&e(i.asyncFactory.error))}function Gt(e,n){if("input"!==e.tag)return!0;var r,i=t(r=e.data)&&t(r=r.attrs)&&r.type,o=t(r=n.data)&&t(r=r.attrs)&&r.type;return i===o||ba(i)&&ba(o)}function Zt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)t(o=e[i].key)&&(a[o]=i);return a}function Xt(e,t){(e.data.directives||t.data.directives)&&Yt(e,t)}function Yt(e,t){var n,r,i,o=e===wa,a=t===wa,s=Qt(e.data.directives,e.context),c=Qt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,tn(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(tn(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)tn(u[n],"inserted",t,e)};o?ce(t,"insert",f):f()}if(l.length&&ce(t,"postpatch",function(){for(var n=0;n<l.length;n++)tn(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||tn(s[n],"unbind",e,e,a)}function Qt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)(i=e[r]).modifiers||(i.modifiers=Aa),n[en(i)]=i,i.def=q(t.$options,"directives",i.name,!0);return n}function en(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function tn(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Y(r,n.context,"directive "+e.name+" "+t+" hook")}}function nn(n,r){var i=r.componentOptions;if(!(t(i)&&!1===i.Ctor.options.inheritAttrs||e(n.data.attrs)&&e(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};t(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&rn(s,o,a);(Gi||Xi)&&u.value!==c.value&&rn(s,"value",u.value);for(o in c)e(u[o])&&(da(o)?s.removeAttributeNS(fa,pa(o)):ua(o)||s.removeAttribute(o))}}function rn(e,t,n){if(la(t))va(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n));else if(ua(t))e.setAttribute(t,va(n)||"false"===n?"false":"true");else if(da(t))va(n)?e.removeAttributeNS(fa,pa(t)):e.setAttributeNS(fa,t,n);else if(va(n))e.removeAttribute(t);else{if(Gi&&!Zi&&"TEXTAREA"===e.tagName&&"placeholder"===t&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}function on(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=Ft(r),c=i._transitionClasses;t(c)&&(s=Bt(s,Ut(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function an(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&Ea.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=sn(o,a[i]);return o}function sn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function cn(e){console.error("[Vue compiler]: "+e)}function un(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function ln(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function fn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function dn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function pn(e,t,n,r,i,o){(r=r||Oi).capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup"));var a;r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n};r!==Oi&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function vn(e,t,n){var r=hn(e,":"+t)||hn(e,"v-bind:"+t);if(null!=r)return an(r);if(!1!==n){var i=hn(e,t);if(null!=i)return JSON.stringify(i)}}function hn(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function mn(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=yn(t,o);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+a+"}"}}function yn(e,t){var n=gn(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function gn(e){if(Yo=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Yo-1)return(ta=e.lastIndexOf("."))>-1?{exp:e.slice(0,ta),key:'"'+e.slice(ta+1)+'"'}:{exp:e,key:null};for(Qo=e,ta=na=ra=0;!bn();)$n(ea=_n())?wn(ea):91===ea&&Cn(ea);return{exp:e.slice(0,na),key:e.slice(na+1,ra)}}function _n(){return Qo.charCodeAt(++ta)}function bn(){return ta>=Yo}function $n(e){return 34===e||39===e}function Cn(e){var t=1;for(na=ta;!bn();)if(e=_n(),$n(e))wn(e);else if(91===e&&t++,93===e&&t--,0===t){ra=ta;break}}function wn(e){for(var t=e;!bn()&&(e=_n())!==t;);}function xn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null",o=vn(e,"true-value")||"true",a=vn(e,"false-value")||"false";ln(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),pn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+t+"=$$a.concat([$$v]))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+yn(t,"$$c")+"}",null,!0)}function kn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null";ln(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),pn(e,"change",yn(t,i),null,!0)}function An(e,t,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";pn(e,"change",r=r+" "+yn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function On(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ja:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=yn(t,l);c&&(f="if($event.target.composing)return;"+f),ln(e,"value","("+t+")"),pn(e,u,f,null,!0),(s||a)&&pn(e,"blur","$forceUpdate()")}function Sn(e){if(t(e[ja])){var n=Gi?"change":"input";e[n]=[].concat(e[ja],e[n]||[]),delete e[ja]}t(e[Na])&&(e.change=[].concat(e[Na],e.change||[]),delete e[Na])}function Tn(e,t,n){var r=ia;return function i(){null!==e.apply(null,arguments)&&jn(t,i,n,r)}}function En(e,t,n,r,i){t=ne(t),n&&(t=Tn(t,e,r)),ia.addEventListener(e,t,to?{capture:r,passive:i}:r)}function jn(e,t,n,r){(r||ia).removeEventListener(e,t._withTask||t,n)}function Nn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};ia=n.elm,Sn(r),se(r,i,En,jn,n.context),ia=void 0}}function Ln(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var u=e(o)?"":String(o);In(a,u)&&(a.value=u)}else a[i]=o}}}function In(e,t){return!e.composing&&("OPTION"===e.tagName||Mn(e,t)||Dn(e,t))}function Mn(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function Dn(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number?l(r)!==l(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Pn(e){var t=Fn(e.style);return e.staticStyle?y(e.staticStyle,t):t}function Fn(e){return Array.isArray(e)?g(e):"string"==typeof e?Ma(e):e}function Rn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Pn(i.data))&&y(r,n);(n=Pn(e.data))&&y(r,n);for(var o=e;o=o.parent;)o.data&&(n=Pn(o.data))&&y(r,n);return r}function Hn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=Fn(r.data.style)||{};r.data.normalizedStyle=t(d.__ob__)?y({},d):d;var p=Rn(r,!0);for(s in f)e(p[s])&&Fa(c,s,"");for(s in p)(a=p[s])!==f[s]&&Fa(c,s,null==a?"":a)}}function Bn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Un(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Vn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&y(t,Ua(e.name||"v")),y(t,e),t}return"string"==typeof e?Ua(e):void 0}}function zn(e){Za(function(){Za(e)})}function Kn(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Bn(e,t))}function Jn(e,t){e._transitionClasses&&d(e._transitionClasses,t),Un(e,t)}function qn(e,t,n){var r=Wn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===za?qa:Ga,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Wn(e,t){var n,r=window.getComputedStyle(e),i=r[Ja+"Delay"].split(", "),o=r[Ja+"Duration"].split(", "),a=Gn(i,o),s=r[Wa+"Delay"].split(", "),c=r[Wa+"Duration"].split(", "),u=Gn(s,c),l=0,f=0;return t===za?a>0&&(n=za,l=a,f=o.length):t===Ka?u>0&&(n=Ka,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?za:Ka:null)?n===za?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===za&&Xa.test(r[Ja+"Property"])}}function Gn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Zn(t)+Zn(e[n])}))}function Zn(e){return 1e3*Number(e.slice(0,-1))}function Xn(n,r){var i=n.elm;t(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=Vn(n.data.transition);if(!e(a)&&!t(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,d=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=Io,O=Io.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||$||""===$){var T=S&&p?p:u,E=S&&h?h:d,j=S&&v?v:f,N=S?b||m:m,L=S&&"function"==typeof $?$:y,I=S?w||g:g,M=S?x||_:_,D=l(o(k)?k.enter:k),P=!1!==s&&!Zi,F=er(L),R=i._enterCb=C(function(){P&&(Jn(i,j),Jn(i,E)),R.cancelled?(P&&Jn(i,T),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||ce(n,"insert",function(){var e=i.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),L&&L(i,R)}),N&&N(i),P&&(Kn(i,T),Kn(i,E),zn(function(){Kn(i,j),Jn(i,T),R.cancelled||F||(Qn(D)?setTimeout(R,D):qn(i,c,R))})),n.data.show&&(r&&r(),L&&L(i,R)),P||F||R()}}}function Yn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Kn(a,f),Kn(a,p),zn(function(){Kn(a,d),Jn(a,f),x.cancelled||$||(Qn(w)?setTimeout(x,w):qn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Vn(n.data.transition);if(e(s)||1!==a.nodeType)return r();if(!t(a._leaveCb)){var c=s.css,u=s.type,f=s.leaveClass,d=s.leaveToClass,p=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!Zi,$=er(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Jn(a,d),Jn(a,p)),x.cancelled?(b&&Jn(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function Qn(e){return"number"==typeof e&&!isNaN(e)}function er(n){if(e(n))return!1;var r=n.fns;return t(r)?er(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function tr(e,t){!0!==t.data.show&&Xn(t)}function nr(e,t,n){rr(e,t,n),(Gi||Xi)&&setTimeout(function(){rr(e,t,n)},0)}function rr(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=$(r,or(a))>-1,a.selected!==o&&(a.selected=o);else if(b(or(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ir(e,t){return t.every(function(t){return!b(t,e)})}function or(e){return"_value"in e?e._value:e.value}function ar(e){e.target.composing=!0}function sr(e){e.target.composing&&(e.target.composing=!1,cr(e.target,"input"))}function cr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ur(e){return!e.componentInstance||e.data&&e.data.transition?e:ur(e.componentInstance._vnode)}function lr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lr(_e(t.children)):e}function fr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Li(o)]=i[o];return t}function dr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function pr(e){for(;e=e.parent;)if(e.data.transition)return!0}function vr(e,t){return t.key===e.key&&t.tag===e.tag}function hr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function mr(e){e.data.newPos=e.elm.getBoundingClientRect()}function yr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function gr(e,t){var n=t?cs(t):as;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){(i=r.index)>a&&o.push(JSON.stringify(e.slice(a,i)));var s=an(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function _r(e,t){var n=t?Hs:Rs;return e.replace(n,function(e){return Fs[e]})}function br(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Pi,u=t.canBeLeftOpenTag||Pi,l=0;e;){if(i=e,o&&Ds(o)){var f=0,d=o.toLowerCase(),p=Ps[d]||(Ps[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=e.replace(p,function(e,n,r){return f=r.length,Ds(d)||"noscript"===d||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Us(d,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(d,l-f,l)}else{var h=e.indexOf("<");if(0===h){if(Cs.test(e)){var m=e.indexOf("--\x3e");if(m>=0){t.shouldKeepComment&&t.comment(e.substring(4,m)),n(m+3);continue}}if(ws.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var g=e.match($s);if(g){n(g[0].length);continue}var _=e.match(bs);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(gs);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(_s))&&(o=e.match(hs));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&vs(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=e.attrs.length,d=new Array(f),p=0;p<f;p++){var v=e.attrs[p];xs&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;d[p]={name:v[1],value:_r(h,m)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d}),o=n),t.start&&t.start(n,d,l,e.start,e.end)}($),Us(o,e)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=e.slice(h);!(bs.test(w)||gs.test(w)||Cs.test(w)||ws.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=e.slice(h);C=e.substring(0,h),n(h)}h<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===i){t.chars&&t.chars(e);break}}r()}function $r(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Rr(t),parent:n,children:[]}}function Cr(e,t){function n(e){e.pre&&(s=!1),Es(e.tag)&&(c=!1)}ks=t.warn||cn,Es=t.isPreTag||Pi,js=t.mustUseProp||Pi,Ns=t.getTagNamespace||Pi,Os=un(t.modules,"transformNode"),Ss=un(t.modules,"preTransformNode"),Ts=un(t.modules,"postTransformNode"),As=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return br(e,{warn:ks,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,start:function(e,a,u){var l=i&&i.ns||Ns(e);Gi&&"svg"===l&&(a=Ur(a));var f=$r(e,a,i);l&&(f.ns=l),Br(f)&&!oo()&&(f.forbidden=!0);for(var d=0;d<Ss.length;d++)f=Ss[d](f,t)||f;if(s||(wr(f),f.pre&&(s=!0)),Es(f.tag)&&(c=!0),s?xr(f):f.processed||(Sr(f),Tr(f),Lr(f),kr(f,t)),r?o.length||r.if&&(f.elseif||f.else)&&Nr(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Er(f,i);else if(f.slotScope){i.plain=!1;var p=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[p]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var v=0;v<Ts.length;v++)Ts[v](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Gi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Hr(i)?e:Xs(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=gr(e,As))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}},comment:function(e){i.children.push({type:3,text:e,isComment:!0})}}),r}function wr(e){null!=hn(e,"v-pre")&&(e.pre=!0)}function xr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function kr(e,t){Ar(e),e.plain=!e.key&&!e.attrsList.length,Or(e),Ir(e),Mr(e);for(var n=0;n<Os.length;n++)e=Os[n](e,t)||e;Dr(e)}function Ar(e){var t=vn(e,"key");t&&(e.key=t)}function Or(e){var t=vn(e,"ref");t&&(e.ref=t,e.refInFor=Pr(e))}function Sr(e){var t;if(t=hn(e,"v-for")){var n=t.match(Ks);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Js);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r.replace(qs,"")}}function Tr(e){var t=hn(e,"v-if");if(t)e.if=t,Nr(e,{exp:t,block:e});else{null!=hn(e,"v-else")&&(e.else=!0);var n=hn(e,"v-else-if");n&&(e.elseif=n)}}function Er(e,t){var n=jr(t.children);n&&n.if&&Nr(n,{exp:e.elseif,block:e})}function jr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Nr(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Lr(e){null!=hn(e,"v-once")&&(e.once=!0)}function Ir(e){if("slot"===e.tag)e.slotName=vn(e,"name");else{var t;"template"===e.tag?(t=hn(e,"scope"),e.slotScope=t||hn(e,"slot-scope")):(t=hn(e,"slot-scope"))&&(e.slotScope=t);var n=vn(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||fn(e,"slot",n))}}function Mr(e){var t;(t=vn(e,"is"))&&(e.component=t),null!=hn(e,"inline-template")&&(e.inlineTemplate=!0)}function Dr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,zs.test(r))if(e.hasBindings=!0,(a=Fr(r))&&(r=r.replace(Zs,"")),Gs.test(r))r=r.replace(Gs,""),o=an(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Li(r))&&(r="innerHTML")),a.camel&&(r=Li(r)),a.sync&&pn(e,"update:"+Li(r),yn(o,"$event"))),s||!e.component&&js(e.tag,e.attrsMap.type,r)?ln(e,r,o):fn(e,r,o);else if(Vs.test(r))pn(e,r=r.replace(Vs,""),o,a,!1,ks);else{var u=(r=r.replace(zs,"")).match(Ws),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),dn(e,r,i,o,l,a)}else fn(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&js(e.tag,e.attrsMap.type,r)&&ln(e,r,"true")}function Pr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fr(e){var t=e.match(Zs);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Rr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Hr(e){return"script"===e.tag||"style"===e.tag}function Br(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ur(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ys.test(r.name)||(r.name=r.name.replace(Qs,""),t.push(r))}return t}function Vr(e){return $r(e.tag,e.attrsList.slice(),e.parent)}function zr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Kr(e,t){e&&(Ls=nc(t.staticKeys||""),Is=t.isReservedTag||Pi,Jr(e),qr(e,!1))}function Jr(e){if(e.static=Wr(e),1===e.type){if(!Is(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Jr(r),r.static||(e.static=!1)}if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++){var a=e.ifConditions[i].block;Jr(a),a.static||(e.static=!1)}}}function qr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qr(e.children[n],t||!!e.for);if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++)qr(e.ifConditions[i].block,t)}}function Wr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Ti(e.tag)||!Is(e.tag)||Gr(e)||!Object.keys(e).every(Ls))))}function Gr(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}function Zr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+Xr(i,e[i])+",";return r.slice(0,-1)+"}"}function Xr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Xr(e,t)}).join(",")+"]";var n=ic.test(t.value),r=rc.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(sc[s])o+=sc[s],oc[s]&&a.push(s);else if("exact"===s){var c=t.modifiers;o+=ac(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=Yr(a)),o&&(i+=o),"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Yr(e){return"if(!('button' in $event)&&"+e.map(Qr).join("&&")+")return null;"}function Qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=oc[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key)"}function ei(e,t){var n=new uc(t);return{render:"with(this){return "+(e?ti(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ti(e,t){if(e.staticRoot&&!e.staticProcessed)return ni(e,t);if(e.once&&!e.onceProcessed)return ri(e,t);if(e.for&&!e.forProcessed)return ai(e,t);if(e.if&&!e.ifProcessed)return ii(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return _i(e,t);var n;if(e.component)n=bi(e.component,e,t);else{var r=e.plain?void 0:si(e,t),i=e.inlineTemplate?null:pi(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return pi(e,t)||"void 0"}function ni(e,t,n){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+ti(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+","+(e.staticInFor?"true":"false")+","+(n?"true":"false")+")"}function ri(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ii(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ti(e,t)+","+t.onceId+++","+n+")":ti(e,t)}return ni(e,t,!0)}function ii(e,t,n,r){return e.ifProcessed=!0,oi(e.ifConditions.slice(),t,n,r)}function oi(e,t,n,r){function i(e){return n?n(e,t):e.once?ri(e,t):ti(e,t)}if(!e.length)return r||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+oi(e,t,n,r):""+i(o.block)}function ai(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ti)(e,t)+"})"}function si(e,t){var n="{",r=ci(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+$i(e.attrs)+"},"),e.props&&(n+="domProps:{"+$i(e.props)+"},"),e.events&&(n+=Zr(e.events,!1,t.warn)+","),e.nativeEvents&&(n+=Zr(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=li(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=ui(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function ci(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function ui(e,t){var n=e.children[0];if(1===n.type){var r=ei(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function li(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return fi(n,e[n],t)}).join(",")+"])"}function fi(e,t,n){return t.for&&!t.forProcessed?di(e,t,n):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(pi(t,n)||"undefined")+":undefined":pi(t,n)||"undefined":ti(t,n))+"}")+"}"}function di(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+fi(e,t,n)+"})"}function pi(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||ti)(a,t);var s=n?vi(o,t.maybeComponent):0,c=i||mi;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function vi(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(hi(i)||i.ifConditions&&i.ifConditions.some(function(e){return hi(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function hi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function mi(e,t){return 1===e.type?ti(e,t):3===e.type&&e.isComment?gi(e):yi(e)}function yi(e){return"_v("+(2===e.type?e.expression:Ci(JSON.stringify(e.text)))+")"}function gi(e){return"_e("+JSON.stringify(e.text)+")"}function _i(e,t){var n=e.slotName||'"default"',r=pi(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return Li(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function bi(e,t,n){var r=t.inlineTemplate?null:pi(t,n,!0);return"_c("+e+","+si(t,n)+(r?","+r:"")+")"}function $i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Ci(r.value)+","}return t.slice(0,-1)}function Ci(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function wi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),_}}function xi(e){var t=Object.create(null);return function(n,r,i){delete(r=y({},r)).warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=wi(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return wi(e,c)}),t[o]=s}}function ki(e){return Ms=Ms||document.createElement("div"),Ms.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ms.innerHTML.indexOf("&#10;")>0}function Ai(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Oi=Object.freeze({}),Si=Object.prototype.toString,Ti=f("slot,component",!0),Ei=f("key,ref,slot,slot-scope,is"),ji=Object.prototype.hasOwnProperty,Ni=/-(\w)/g,Li=v(function(e){return e.replace(Ni,function(e,t){return t?t.toUpperCase():""})}),Ii=v(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Mi=/\B([A-Z])/g,Di=v(function(e){return e.replace(Mi,"-$1").toLowerCase()}),Pi=function(e,t,n){return!1},Fi=function(e){return e},Ri="data-server-rendered",Hi=["component","directive","filter"],Bi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Ui={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Pi,isReservedAttr:Pi,isUnknownElement:Pi,getTagNamespace:_,parsePlatformTagName:Fi,mustUseProp:Pi,_lifecycleHooks:Bi},Vi=/[^\w.$]/,zi="__proto__"in{},Ki="undefined"!=typeof window,Ji="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,qi=Ji&&WXEnvironment.platform.toLowerCase(),Wi=Ki&&window.navigator.userAgent.toLowerCase(),Gi=Wi&&/msie|trident/.test(Wi),Zi=Wi&&Wi.indexOf("msie 9.0")>0,Xi=Wi&&Wi.indexOf("edge/")>0,Yi=Wi&&Wi.indexOf("android")>0||"android"===qi,Qi=Wi&&/iphone|ipad|ipod|ios/.test(Wi)||"ios"===qi,eo=(Wi&&/chrome\/\d+/.test(Wi),{}.watch),to=!1;if(Ki)try{var no={};Object.defineProperty(no,"passive",{get:function(){to=!0}}),window.addEventListener("test-passive",null,no)}catch(e){}var ro,io,oo=function(){return void 0===ro&&(ro=!Ki&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),ro},ao=Ki&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,so="undefined"!=typeof Symbol&&A(Symbol)&&"undefined"!=typeof Reflect&&A(Reflect.ownKeys);io="undefined"!=typeof Set&&A(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var co=_,uo=0,lo=function(){this.id=uo++,this.subs=[]};lo.prototype.addSub=function(e){this.subs.push(e)},lo.prototype.removeSub=function(e){d(this.subs,e)},lo.prototype.depend=function(){lo.target&&lo.target.addDep(this)},lo.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},lo.target=null;var fo=[],po=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vo={child:{configurable:!0}};vo.child.get=function(){return this.componentInstance},Object.defineProperties(po.prototype,vo);var ho=function(e){void 0===e&&(e="");var t=new po;return t.text=e,t.isComment=!0,t},mo=Array.prototype,yo=Object.create(mo);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=mo[e];x(yo,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var go=Object.getOwnPropertyNames(yo),_o={shouldConvert:!0},bo=function(e){this.value=e,this.dep=new lo,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)?((zi?N:L)(e,yo,go),this.observeArray(e)):this.walk(e)};bo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)M(e,t[n],e[t[n]])},bo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)I(e[t])};var $o=Ui.optionMergeStrategies;$o.data=function(e,t,n){return n?H(e,t,n):t&&"function"!=typeof t?e:H(e,t)},Bi.forEach(function(e){$o[e]=B}),Hi.forEach(function(e){$o[e+"s"]=U}),$o.watch=function(e,t,n,r){if(e===eo&&(e=void 0),t===eo&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};y(i,e);for(var o in t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},$o.props=$o.methods=$o.inject=$o.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return y(i,e),t&&y(i,t),i},$o.provide=H;var Co,wo,xo=function(e,t){return void 0===t?e:t},ko=[],Ao=!1,Oo=!1;if("undefined"!=typeof setImmediate&&A(setImmediate))wo=function(){setImmediate(te)};else if("undefined"==typeof MessageChannel||!A(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())wo=function(){setTimeout(te,0)};else{var So=new MessageChannel,To=So.port2;So.port1.onmessage=te,wo=function(){To.postMessage(1)}}if("undefined"!=typeof Promise&&A(Promise)){var Eo=Promise.resolve();Co=function(){Eo.then(te),Qi&&setTimeout(_)}}else Co=wo;var jo,No=new io,Lo=v(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),Io=null,Mo=[],Do=[],Po={},Fo=!1,Ro=!1,Ho=0,Bo=0,Uo=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Bo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new io,this.newDepIds=new io,this.expression="","function"==typeof t?this.getter=t:(this.getter=k(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Uo.prototype.get=function(){O(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Y(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ie(e),S(),this.cleanupDeps()}return e},Uo.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Uo.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Uo.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Re(this)},Uo.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Y(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Uo.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Uo.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Uo.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||d(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Vo={enumerable:!0,configurable:!0,get:_,set:_},zo={lazy:!0};lt(ft.prototype);var Ko={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed)(e.componentInstance=ht(e,Io,n,r)).$mount(t?e.elm:void 0,t);else if(e.data.keepAlive){var i=e;Ko.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;Te(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Le(n,"mounted")),e.data.keepAlive&&(t._isMounted?Pe(n):je(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Ne(t,!0):t.$destroy())}},Jo=Object.keys(Ko),qo=1,Wo=2,Go=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Go++,t._isVue=!0,e&&e._isComponent?wt(t,e):t.$options=J(xt(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Oe(t),be(t),Ct(t),Le(t,"beforeCreate"),Ye(t),Be(t),Xe(t),Le(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(Ot),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=D,e.prototype.$delete=P,e.prototype.$watch=function(e,t,n){var r=this;if(a(t))return Ze(r,e,t,n);(n=n||{}).user=!0;var i=new Uo(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(Ot),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(!t)return r._events[e]=null,r;if(t)for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(t,r)}catch(n){Y(n,t,'event handler for "'+e+'"')}}return t}}(Ot),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&Le(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=Io;Io=n,n._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Io=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Le(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||d(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Le(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Ot),function(e){lt(e.prototype),e.prototype.$nextTick=function(e){return re(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;if(e._isMounted)for(var i in e.$slots){var o=e.$slots[i];(o._rendered||o[0]&&o[0].elm)&&(e.$slots[i]=j(o,!0))}e.$scopedSlots=r&&r.data.scopedSlots||Oi,e.$vnode=r;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){Y(t,e,"render"),a=e._vnode}return a instanceof po||(a=ho()),a.parent=r,a}}(Ot);var Zo=[String,RegExp,Array],Xo={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Zo,exclude:Zo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){var e=this;for(var t in e.cache)Pt(e.cache,t,e.keys)},watch:{include:function(e){Dt(this,function(t){return Mt(e,t)})},exclude:function(e){Dt(this,function(t){return!Mt(e,t)})}},render:function(){var e=this.$slots.default,t=_e(e),n=t&&t.componentOptions;if(n){var r=It(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Mt(o,r))||a&&r&&Mt(a,r))return t;var s=this,c=s.cache,u=s.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,d(u,l),u.push(l)):(c[l]=t,u.push(l),this.max&&u.length>parseInt(this.max)&&Pt(c,u[0],u,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={};t.get=function(){return Ui},Object.defineProperty(e,"config",t),e.util={warn:co,extend:y,mergeOptions:J,defineReactive:M},e.set=D,e.delete=P,e.nextTick=re,e.options=Object.create(null),Hi.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,y(e.options.components,Xo),St(e),Tt(e),Et(e),Lt(e)}(Ot),Object.defineProperty(Ot.prototype,"$isServer",{get:oo}),Object.defineProperty(Ot.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ot.version="2.5.9";var Yo,Qo,ea,ta,na,ra,ia,oa,aa=f("style,class"),sa=f("input,textarea,option,select,progress"),ca=function(e,t,n){return"value"===n&&sa(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},ua=f("contenteditable,draggable,spellcheck"),la=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),fa="http://www.w3.org/1999/xlink",da=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},pa=function(e){return da(e)?e.slice(6,e.length):""},va=function(e){return null==e||!1===e},ha={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ma=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ya=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ga=function(e){return ma(e)||ya(e)},_a=Object.create(null),ba=f("text,number,password,search,email,tel,url"),$a=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(ha[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setAttribute:function(e,t,n){e.setAttribute(t,n)}}),Ca={create:function(e,t){qt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(qt(e,!0),qt(t))},destroy:function(e){qt(e,!0)}},wa=new po("",{},[]),xa=["create","activate","update","remove","destroy"],ka={create:Xt,update:Xt,destroy:function(e){Xt(e,wa)}},Aa=Object.create(null),Oa=[Ca,ka],Sa={create:nn,update:nn},Ta={create:on,update:on},Ea=/[\w).+\-_$\]]/,ja="__r",Na="__c",La={create:Nn,update:Nn},Ia={create:Ln,update:Ln},Ma=v(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Da=/^--/,Pa=/\s*!important$/,Fa=function(e,t,n){if(Da.test(t))e.style.setProperty(t,n);else if(Pa.test(n))e.style.setProperty(t,n.replace(Pa,""),"important");else{var r=Ha(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Ra=["Webkit","Moz","ms"],Ha=v(function(e){if(oa=oa||document.createElement("div").style,"filter"!==(e=Li(e))&&e in oa)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Ra.length;n++){var r=Ra[n]+t;if(r in oa)return r}}),Ba={create:Hn,update:Hn},Ua=v(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Va=Ki&&!Zi,za="transition",Ka="animation",Ja="transition",qa="transitionend",Wa="animation",Ga="animationend";Va&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ja="WebkitTransition",qa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Wa="WebkitAnimation",Ga="webkitAnimationEnd"));var Za=Ki?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},Xa=/\b(transform|all)(,|$)/,Ya=function(r){function o(e){return new po(j.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=j.parentNode(e);t(n)&&j.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!u(e,r,i,o)){var s=e.data,c=e.children,l=e.tag;t(l)?(e.elm=e.ns?j.createElementNS(e.ns,l):j.createElement(l,e),y(e),v(e,c,r),t(s)&&m(e,r),p(i,e.elm,o)):n(e.isComment)?(e.elm=j.createComment(e.text),p(i,e.elm,o)):(e.elm=j.createTextNode(e.text),p(i,e.elm,o))}}function u(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return l(e,r),n(s)&&d(e,r,i,o),!0}}function l(e,n){t(e.data.pendingInsert)&&(n.push.apply(n,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,h(e)?(m(e,n),y(e)):(qt(e),n.push(e))}function d(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<T.activate.length;++o)T.activate[o](wa,a);n.push(a);break}p(r,e.elm,i)}function p(e,n,r){t(e)&&(t(r)?r.parentNode===e&&j.insertBefore(e,n,r):j.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0);else i(e.text)&&j.appendChild(e.elm,j.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<T.create.length;++r)T.create[r](wa,e);t(O=e.data.hook)&&(t(O.create)&&O.create(wa,e),t(O.insert)&&n.push(e))}function y(e){var n;if(t(n=e.fnScopeId))j.setAttribute(e.elm,n,"");else for(var r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,""),r=r.parent;t(n=Io)&&n!==e.context&&n!==e.fnContext&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,"")}function g(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<T.destroy.length;++n)T.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=T.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<T.remove.length;++r)T.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,d=0,p=r.length-1,v=r[0],h=r[p],m=i.length-1,y=i[0],_=i[m],$=!a;f<=p&&d<=m;)e(v)?v=r[++f]:e(h)?h=r[--p]:Wt(v,y)?(x(v,y,o),v=r[++f],y=i[++d]):Wt(h,_)?(x(h,_,o),h=r[--p],_=i[--m]):Wt(v,_)?(x(v,_,o),$&&j.insertBefore(n,v.elm,j.nextSibling(h.elm)),v=r[++f],_=i[--m]):Wt(h,y)?(x(h,y,o),$&&j.insertBefore(n,h.elm,v.elm),h=r[--p],y=i[++d]):(e(s)&&(s=Zt(r,f,p)),e(u=t(y.key)?s[y.key]:w(y,r,f,p))?c(y,o,n,v.elm):Wt(l=r[u],y)?(x(l,y,o),r[u]=void 0,$&&j.insertBefore(n,l.elm,v.elm)):c(y,o,n,v.elm),y=i[++d]);f>p?g(n,e(i[m+1])?null:i[m+1].elm,i,d,m,o):d>m&&b(n,r,f,p)}function w(e,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(t(a)&&Wt(e,a))return o}}function x(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))t(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;t(u)&&t(c=u.hook)&&t(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(t(u)&&h(i)){for(c=0;c<T.update.length;++c)T.update[c](r,i);t(c=u.hook)&&t(c=c.update)&&c(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&C(s,l,f,o,a):t(f)?(t(r.text)&&j.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):t(l)?b(s,l,0,l.length-1):t(r.text)&&j.setTextContent(s,""):r.text!==i.text&&j.setTextContent(s,i.text),t(u)&&t(c=u.hook)&&t(c=c.postpatch)&&c(r,i)}}}function k(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(e,r,i,o){var a,s=r.tag,c=r.data,u=r.children;if(o=o||c&&c.pre,r.elm=e,n(r.isComment)&&t(r.asyncFactory))return r.isAsyncPlaceholder=!0,!0;if(t(c)&&(t(a=c.hook)&&t(a=a.init)&&a(r,!0),t(a=r.componentInstance)))return l(r,i),!0;if(t(s)){if(t(u))if(e.hasChildNodes())if(t(a=c)&&t(a=a.domProps)&&t(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var f=!0,d=e.firstChild,p=0;p<u.length;p++){if(!d||!A(d,u[p],i,o)){f=!1;break}d=d.nextSibling}if(!f||d)return!1}else v(r,u,i);if(t(c)){var h=!1;for(var y in c)if(!N(y)){h=!0,m(r,i);break}!h&&c.class&&ie(c.class)}}else e.data!==r.text&&(e.data=r.text);return!0}var O,S,T={},E=r.modules,j=r.nodeOps;for(O=0;O<xa.length;++O)for(T[xa[O]]=[],S=0;S<E.length;++S)t(E[S][xa[O]])&&T[xa[O]].push(E[S][xa[O]]);var N=f("attrs,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!e(i)){var f=!1,d=[];if(e(r))f=!0,c(i,d,u,l);else{var p=t(r.nodeType);if(!p&&Wt(r,i))x(r,i,d,s);else{if(p){if(1===r.nodeType&&r.hasAttribute(Ri)&&(r.removeAttribute(Ri),a=!0),n(a)&&A(r,i,d))return k(i,d,!0),r;r=o(r)}var v=r.elm,m=j.parentNode(v);if(c(i,d,v._leaveCb?null:m,j.nextSibling(v)),t(i.parent))for(var y=i.parent,g=h(i);y;){for(var $=0;$<T.destroy.length;++$)T.destroy[$](y);if(y.elm=i.elm,g){for(var C=0;C<T.create.length;++C)T.create[C](wa,y);var w=y.data.hook.insert;if(w.merged)for(var O=1;O<w.fns.length;O++)w.fns[O]()}else qt(y);y=y.parent}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return k(i,d,f),i.elm}t(r)&&_(r)}}({nodeOps:$a,modules:[Sa,Ta,La,Ia,Ba,Ki?{create:tr,activate:tr,remove:function(e,t){!0!==e.data.show?Yn(e,t):t()}}:{}].concat(Oa)});Zi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&cr(e,"input")});var Qa={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ce(n,"postpatch",function(){Qa.componentUpdated(e,t,n)}):nr(e,t,n.context),e._vOptions=[].map.call(e.options,or)):("textarea"===n.tag||ba(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",sr),Yi||(e.addEventListener("compositionstart",ar),e.addEventListener("compositionend",sr)),Zi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){nr(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,or);i.some(function(e,t){return!b(e,r[t])})&&(e.multiple?t.value.some(function(e){return ir(e,i)}):t.value!==t.oldValue&&ir(t.value,i))&&cr(e,"change")}}},es={model:Qa,show:{bind:function(e,t,n){var r=t.value,i=(n=ur(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Xn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&((n=ur(n)).data&&n.data.transition?(n.data.show=!0,r?Xn(n,function(){e.style.display=e.__vOriginalDisplay}):Yn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},ts={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},ns={name:"transition",props:ts,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||ge(e)})).length){var r=this.mode,o=n[0];if(pr(this.$vnode))return o;var a=lr(o);if(!a)return o;if(this._leaving)return dr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=fr(this),u=this._vnode,l=lr(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!vr(a,l)&&!ge(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=y({},c);if("out-in"===r)return this._leaving=!0,ce(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),dr(e,o);if("in-out"===r){if(ge(a))return u;var d,p=function(){d()};ce(c,"afterEnter",p),ce(c,"enterCancelled",p),ce(f,"delayLeave",function(e){d=e})}}return o}}},rs=y({tag:String,moveClass:String},ts);delete rs.mode;var is={Transition:ns,TransitionGroup:{props:rs,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=fr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(hr),e.forEach(mr),e.forEach(yr),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Kn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(qa,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(qa,e),n._moveCb=null,Jn(n,t))})}}))},methods:{hasMove:function(e,t){if(!Va)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Un(n,e)}),Bn(n,t),n.style.display="none",this.$el.appendChild(n);var r=Wn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Ot.config.mustUseProp=ca,Ot.config.isReservedTag=ga,Ot.config.isReservedAttr=aa,Ot.config.getTagNamespace=Kt,Ot.config.isUnknownElement=function(e){if(!Ki)return!0;if(ga(e))return!1;if(e=e.toLowerCase(),null!=_a[e])return _a[e];var t=document.createElement(e);return e.indexOf("-")>-1?_a[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:_a[e]=/HTMLUnknownElement/.test(t.toString())},y(Ot.options.directives,es),y(Ot.options.components,is),Ot.prototype.__patch__=Ki?Ya:_,Ot.prototype.$mount=function(e,t){return e=e&&Ki?Jt(e):void 0,Se(this,e,t)},Ot.nextTick(function(){Ui.devtools&&ao&&ao.emit("init",Ot)},0);var os,as=/\{\{((?:.|\n)+?)\}\}/g,ss=/[-.*+?^${}()|[\]\/\\]/g,cs=v(function(e){var t=e[0].replace(ss,"\\$&"),n=e[1].replace(ss,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),us={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=hn(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=vn(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},ls={staticKeys:["staticStyle"],transformNode:function(e,t){var n=hn(e,"style");n&&(e.staticStyle=JSON.stringify(Ma(n)));var r=vn(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},fs={decode:function(e){return os=os||document.createElement("div"),os.innerHTML=e,os.textContent}},ds=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ps=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),vs=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),hs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ms="[a-zA-Z_][\\w\\-\\.]*",ys="((?:"+ms+"\\:)?"+ms+")",gs=new RegExp("^<"+ys),_s=/^\s*(\/?)>/,bs=new RegExp("^<\\/"+ys+"[^>]*>"),$s=/^<!DOCTYPE [^>]+>/i,Cs=/^<!--/,ws=/^<!\[/,xs=!1;"x".replace(/x(.)?/g,function(e,t){xs=""===t});var ks,As,Os,Ss,Ts,Es,js,Ns,Ls,Is,Ms,Ds=f("script,style,textarea",!0),Ps={},Fs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Rs=/&(?:lt|gt|quot|amp);/g,Hs=/&(?:lt|gt|quot|amp|#10|#9);/g,Bs=f("pre,textarea",!0),Us=function(e,t){return e&&Bs(e)&&"\n"===t[0]},Vs=/^@|^v-on:/,zs=/^v-|^@|^:/,Ks=/(.*?)\s+(?:in|of)\s+(.*)/,Js=/\((\{[^}]*\}|[^,{]*),([^,]*)(?:,([^,]*))?\)/,qs=/^\(|\)$/g,Ws=/:(.*)$/,Gs=/^:|^v-bind:/,Zs=/\.[^.]+/g,Xs=v(fs.decode),Ys=/^xmlns:NS\d+/,Qs=/^NS\d+:/,ec=[us,ls,{preTransformNode:function(e,t){if("input"===e.tag){var n=e.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=vn(e,"type"),i=hn(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=hn(e,"v-else",!0),s=hn(e,"v-else-if",!0),c=Vr(e);Sr(c),zr(c,"type","checkbox"),kr(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+o,Nr(c,{exp:c.if,block:c});var u=Vr(e);hn(u,"v-for",!0),zr(u,"type","radio"),kr(u,t),Nr(c,{exp:"("+r+")==='radio'"+o,block:u});var l=Vr(e);return hn(l,"v-for",!0),zr(l,":type",r),kr(l,t),Nr(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],tc={expectHTML:!0,modules:ec,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return mn(e,r,i),!1;if("select"===o)An(e,r,i);else if("input"===o&&"checkbox"===a)xn(e,r,i);else if("input"===o&&"radio"===a)kn(e,r,i);else if("input"===o||"textarea"===o)On(e,r,i);else if(!Ui.isReservedTag(o))return mn(e,r,i),!1;return!0},text:function(e,t){t.value&&ln(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&ln(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:ds,mustUseProp:ca,canBeLeftOpenTag:ps,isReservedTag:ga,getTagNamespace:Kt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ec)},nc=v(function(e){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}),rc=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ic=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,oc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ac=function(e){return"if("+e+")return null;"},sc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ac("$event.target !== $event.currentTarget"),ctrl:ac("!$event.ctrlKey"),shift:ac("!$event.shiftKey"),alt:ac("!$event.altKey"),meta:ac("!$event.metaKey"),left:ac("'button' in $event && $event.button !== 0"),middle:ac("'button' in $event && $event.button !== 1"),right:ac("'button' in $event && $event.button !== 2")},cc={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:_},uc=function(e){this.options=e,this.warn=e.warn||cn,this.transforms=un(e.modules,"transformCode"),this.dataGenFns=un(e.modules,"genData"),this.directives=y(y({},cc),e.directives);var t=e.isReservedTag||Pi;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]},lc=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var i=Object.create(t),o=[],a=[];if(i.warn=function(e,t){(t?a:o).push(e)},r){r.modules&&(i.modules=(t.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(t.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=e(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:xi(n)}}}(function(e,t){var n=Cr(e.trim(),t);Kr(n,t);var r=ei(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(tc).compileToFunctions),fc=!!Ki&&ki(!1),dc=!!Ki&&ki(!0),pc=v(function(e){var t=Jt(e);return t&&t.innerHTML}),vc=Ot.prototype.$mount;return Ot.prototype.$mount=function(e,t){if((e=e&&Jt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=pc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Ai(e));if(r){var i=lc(r,{shouldDecodeNewlines:fc,shouldDecodeNewlinesForHref:dc,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return vc.call(this,e,t)},Ot.compile=lc,Ot});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(18).setImmediate))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map