/*
 jquery.percentageloader.js

 Copyright (c) 2015, David Jeffrey & Piotr Kwiatkowski
 All rights reserved.

 This jQuery plugin is licensed under the Simplified BSD License. Please
 see the file license.txt that was included with the plugin bundle.

 */

(function () {
    "use strict";
    /*jslint browser: true */

    /*var imageLoaded = false;
     */
    /* Our spiral gradient data */
    /*
     var imgdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM4RjdFNzQ5MzAyMTFFMUFFQTdENUVDNDUwOEI2RUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4RjdFNzU5MzAyMTFFMUFFQTdENUVDNDUwOEI2RUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzhGN0U3MjkzMDIxMUUxQUVBN0Q1RUM0NTA4QjZFRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzhGN0U3MzkzMDIxMUUxQUVBN0Q1RUM0NTA4QjZFRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv4BSzoAAA+OSURBVHja1F1bkutK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",
     gradient = new Image();

     gradient.src = imgdata;
     gradient.addEventListener('load', function () {
     imageLoaded = true;
     });*/


    window.PercentageLoader = function (el, params) {
        var settings, canvas, percentageText, valueText, items, i, item, selectors, s, ctx, progress,
            value, totalValue, cX, cY, lingrad, innerGrad, tubeGrad, innerRadius, innerBarRadius, outerBarRadius,
            radius, startAngle, endAngle, counterClockwise, beginAngle, setProgress, setValue, setValueText,
            applyAngle, drawLoader, clipValue, outerDiv, ready, plugin;

        plugin = this;

        /* Specify default settings */
        settings = {
            width: 256,
            height: 256,
            valueText: '',
            value: 100,
            totalValue: 100,
            progress: 1.0 * this.value / this.totalValue,
            controllable: false
        };

        /* Override default settings with provided params, if any */
        if (params !== undefined) {
            var prop;
            for (prop in settings) {
                if (params.hasOwnProperty(prop)) {
                    settings[prop] = params[prop];
                }
            }
        } else {
            settings = params;
        }

        outerDiv = document.createElement('div');
        outerDiv.style.width = settings.width + 'px';
        outerDiv.style.height = settings.height + 'px';
        outerDiv.style.position = 'relative';

        el.appendChild(outerDiv);

        /* Create our canvas object */
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', settings.width);
        canvas.setAttribute('height', settings.height);
        outerDiv.appendChild(canvas);

        /* Create div elements we'll use for text. Drawing text is
         * possible with canvas but it is tricky working with custom
         * fonts as it is hard to guarantee when they become available
         * with differences between browsers. DOM is a safer bet here */
        percentageText = document.createElement('div');
        percentageText.style.width = (settings.width.toString() - 2) + 'px';
        percentageText.style.textAlign = 'center';
        percentageText.style.height = '50px';
        percentageText.style.left = 0;
        percentageText.style.position = 'absolute';

        valueText = document.createElement('div');
        valueText.style.width = (settings.width - 2).toString() + 'px';
        valueText.style.textAlign = 'center';
        valueText.style.height = '0px';
        valueText.style.overflow = 'hidden';
        valueText.style.left = 0;
        valueText.style.position = 'absolute';

        /* Force text items to not allow selection */
        items = [valueText, percentageText];
        for (i = 0; i < items.length; i += 1) {
            item = items[i];
            selectors = [
                '-webkit-user-select',
                '-khtml-user-select',
                '-moz-user-select',
                '-o-user-select',
                'user-select'];

            for (s = 0; s < selectors.length; s += 1) {
                item.style[selectors[s]] = 'none';
            }
        }

        /* Add the new dom elements to the containing div */
        outerDiv.appendChild(percentageText);
        outerDiv.appendChild(valueText);

        /* Get a reference to the context of our canvas object */
        ctx = canvas.getContext("2d");


        /* Set various initial values */

        /* Centre point 中心点 */
        cX = (canvas.width / 2) - 1;
        cY = (canvas.height / 2) - 1;

        /* The inner circle is 2/3rds the size of the outer one 北外圆大小比例 */
        innerRadius = cX * 0.8;// 0.6666;
        /* Outer radius is the same as the width / 2, same as the centre x
         * (but we leave a little room so the borders aren't truncated)
         * 外半径与宽度/ 2相同，与中心X相同 （但我们离开一个小房间，所以边界没有被截断）*/
        radius = cX - 2;

        /* Calculate the radii of the inner tube 进度条半径 */
        innerBarRadius = innerRadius + (cX * 0.03);
        outerBarRadius = radius - (cX * 0.09);

        /* Bottom left angle 左下角 */
        startAngle = 2.1707963267949;
        /* Bottom right angle 右下角 */
        endAngle = 0.9707963267949 + (Math.PI * 2.0);

        /* Nicer to pass counterClockwise / clockwise into canvas functions 更好地通过逆时针/顺时针进入画布功能
         * than true / false */
        counterClockwise = false;

        /* Borders should be 1px */
        ctx.lineWidth = 0;

        /**
         * Little helper method for transforming points on a given
         * angle and distance for code clarity
         * 给定角度和距离的编码清晰度的变换点
         */
        applyAngle = function (point, angle, distance) {
            return {
                x: point.x + (Math.cos(angle) * distance),
                y: point.y + (Math.sin(angle) * distance)
            };
        };


        /**
         * render the widget in its entirety.
         * 渲染整个部件。
         */
        drawLoader = function () {
            /* Clear canvas entirely */
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            /*** IMAGERY ***/

            /* draw outer circle 外圆 */
            ctx.fillStyle = '#7da92a';
            ctx.beginPath();
            ctx.strokeStyle = '#7da92a';
            ctx.arc(cX, cY, radius, 0, Math.PI * 2, counterClockwise);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();

            /**
             * Helper function - adds a path (without calls to beginPath or closePath)
             * to the context which describes the inner tube. We use this for drawing
             * the background of the inner tube (which is always at 100%) and the
             * progress meter itself, which may vary from 0-100% */
            function makeInnerTubePath(startAngle, endAngle) {
                var centrePoint, startPoint, controlAngle, capLength, c1, c2, point1, point2;
                centrePoint = {
                    x: cX,
                    y: cY
                };

                startPoint = applyAngle(centrePoint, startAngle, innerBarRadius);

                ctx.moveTo(startPoint.x, startPoint.y);

                point1 = applyAngle(centrePoint, endAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, endAngle, outerBarRadius);

                controlAngle = endAngle + (3.142 / 2.0);
                /* Cap length - a fifth of the canvas size minus 4 pixels 帽长度-画布大小的五分之一减去4像素 */
                capLength = (cX * 0.20) - 4;

                /*贝塞尔控制点 */
                c1 = applyAngle(point1, controlAngle, capLength - 15);
                c2 = applyAngle(point2, controlAngle, capLength - 15);

                ctx.arc(cX, cY, innerBarRadius, startAngle, endAngle, false);
                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point2.x, point2.y);
                ctx.arc(cX, cY, outerBarRadius, endAngle, startAngle, true);

                /*结束点的坐标*/
                point1 = applyAngle(centrePoint, startAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, startAngle, outerBarRadius);

                controlAngle = startAngle - (3.142 / 2);

                c1 = applyAngle(point2, controlAngle, capLength - 15);
                c2 = applyAngle(point1, controlAngle, capLength - 15);

                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point1.x, point1.y);
            }

            /* Background tube 进度条背景 */
            ctx.beginPath();
            ctx.strokeStyle = '#9cbf5a';
            makeInnerTubePath(startAngle, endAngle);

            ctx.fillStyle = "#9cbf5a";
            ctx.fill();
            ctx.stroke();

            /* Calculate angles for the the progress metre 进度计的计算角度 */
            beginAngle = endAngle - (progress * (endAngle - startAngle));

            ctx.beginPath();
            makeInnerTubePath(beginAngle, endAngle);

            /* We're going to apply a clip so save the current state */
            ctx.save();
            /* Clip so we can apply the image gradient */
            ctx.clip();

            /* Draw the spiral gradient over the clipped area 绘制剪切区域上的颜色 */
            ctx.fillStyle = '#86e26e';
            if (value <= 1) {
                ctx.fillStyle = '#d72323';
            } else if (value <= 7) {
                ctx.fillStyle = '#f0c533';
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* Undo the clip */
            ctx.restore();

            /* Draw the outline of the path 画出路径的轮廓 */
            ctx.beginPath();
            makeInnerTubePath(beginAngle, endAngle);
            ctx.stroke();

            /*** TEXT ***/
            (function () {
                var fontSize, string, smallSize, heightRemaining;
                /* Calculate the size of the font based on the canvas size  基于画布大小计算字体的大小 内部字体样式 */
                var num = 1;
                if (value > 99) {
                    num = 1.5
                }
                fontSize = cX / num;
                percentageText.style.top = ((settings.height / 2) - (fontSize / 2)-10).toString() + 'px';
                percentageText.style.color = '#FFFFFF';
                percentageText.style.font = fontSize.toString() + 'px Helvetica,Arial,sans-serif';
                percentageText.style.textShadow = '0 1px 1px #cccccc';

                /* Calculate the text for the given percentage  计算给定百分比的文本*/
                string = value;//(progress * 100.0).toFixed(0) + '%';

                percentageText.innerHTML = string;

                /* Calculate font and placement of small 'value' text 计算底部文本的字体和位置 */
                smallSize = cX / 7;
                valueText.style.color = '#FFFFFF';
                valueText.style.font = smallSize.toString() + 'px Helvetica,Arial,sans-serif';
                valueText.style.height = smallSize.toString() + 'px';
                valueText.style.textShadow = 'None';

                /* Ugly vertical align calculations - fit into bottom ring. 丑陋的垂直对齐计算-适合底部环。
                 * The bottom ring occupes 1/6 of the diameter of the circle 底环occupes 1 / 6的圆的直径 */
                heightRemaining = (settings.height * 0.16666) - smallSize;
                valueText.style.top = ((settings.height * 0.81) + (heightRemaining / 4)).toString() + 'px';
            }());
        };

        /**
         * Check the progress value and ensure it is within the correct bounds [0..1]
         */
        clipValue = function () {
            if (progress < 0) {
                progress = 0;
            }

            if (progress > 1.0) {
                progress = 1.0;
            }
        };

        /* Sets the current progress level of the loader
         *
         * @param value the progress value, from 0 to 1. Values outside this range
         * will be clipped
         */
        setProgress = function (val) {
            progress = val;
            clipValue();
            drawLoader();
        };

        this.setProgress = setProgress;

        setValue = function (val, totalVal) {
            value = val;
            totalValue = totalVal
            setProgress(1.0 * value / totalValue)
        };

        setValueText = function (value) {
            valueText.innerHTML = value;
        };
        this.setValueText = setValueText;
        this.setValueText(settings.valueText);

        ready = function (fn) {
            fn();
        };
        this.loaded = ready;

        this.setValue = setValue;
        this.setValue(settings.value, settings.totalValue);

        /* In controllable mode, add event handlers */
        if (params.controllable === true) {
            (function () {
                var mouseDown, getDistance, adjustProgressWithXY;
                getDistance = function (x, y) {
                    return Math.sqrt(Math.pow(x - cX, 2) + Math.pow(y - cY, 2));
                };

                mouseDown = false;

                adjustProgressWithXY = function (x, y) {
                    /* within the bar, calculate angle of touch point */
                    var pX, pY, angle, startTouchAngle, range, posValue;
                    pX = x - cX;
                    pY = y - cY;

                    angle = Math.atan2(pY, pX);
                    if (angle > Math.PI / 2.0) {
                        angle -= (Math.PI * 2.0);
                    }

                    startTouchAngle = startAngle - (Math.PI * 2.0);
                    range = endAngle - startAngle;
                    posValue = (angle - startTouchAngle) / range;
                    setProgress(posValue);

                    if (params.onProgressUpdate !== undefined) {
                        /* use the progress value as this will have been clipped
                         * to the correct range [0..1] after the call to setProgress
                         */
                        params.onProgressUpdate.call(plugin, progress);
                    }
                };

                outerDiv.addEventListener('mousedown', function (e) {
                    var offset, x, y, distance;
                    offset = this.getBoundingClientRect();
                    x = e.pageX - offset.left;
                    y = e.pageY - offset.top;

                    distance = getDistance(x, y);

                    if (distance > innerRadius && distance < radius) {
                        mouseDown = true;
                        adjustProgressWithXY(x, y);
                    }
                });

                outerDiv.addEventListener('mouseup', function () {
                    mouseDown = false;
                });

                outerDiv.addEventListener('mousemove', function (e) {
                    var offset, x, y;
                    if (mouseDown) {
                        offset = this.getBoundingClientRect();
                        x = e.pageX - offset.left;
                        y = e.pageY - offset.top;
                        adjustProgressWithXY(x, y);
                    }
                });

                outerDiv.addEventListener('mouseleave', function (e) {
                    mouseDown = false;
                });
            }());
        }

        return this;
    }
})();

// If jQuery is available, define this as a jQuery plugin
if (typeof jQuery !== 'undefined') {
    /*global jQuery */
    (function ($) {
        /* Strict mode for this plugin */

        /** Percentage loader
         * @param    params    Specify options in {}. May be on of width, height, progress or value.
         *
         * @example $("#myloader-container).percentageLoader({
                width : 256,  // width in pixels
                height : 256, // height in pixels
                progress: 0,  // initialise progress bar position, within the range [0..1]
                value: '0kb'  // initialise text label to this value
            });
         */
        $.fn.percentageLoader = function (params) {
            return this.each(function () {
                if (!$.data(this, 'dj_percentageloader')) {
                    $.data(this, 'dj_percentageloader', new PercentageLoader(this, params));
                } else {
                    var plugin = $.data(this, 'dj_percentageloader');
                    if (params['valueText'] !== undefined) {
                        plugin.setValueText(params['valueText']);
                    }

                    if (params['value'] !== undefined, params['totalValue'] !== undefined) {
                        plugin.setValue(params['value'], params['totalValue']);
                    }

                    if (params['onready'] !== undefined) {
                        plugin.loaded(params['onready']);
                    }
                }
            });
        };
    }(jQuery));
}
