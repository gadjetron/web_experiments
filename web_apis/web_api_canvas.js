// fillRect(x, y, width, height) - Draws a filled rectangle.
// 
// strokeRect(x, y, width, height) - Draws a rectangular outline.
// 
// clearRect(x, y, width, height) - Clears the specified rectangular area, making it fully transparent.


// beginPath() - Creates a new path. Once created, future drawing commands are directed 
//               into the path and used to build the path up.
// 
// closePath() - Adds a straight line to the path, going to the start of the current sub-path.
// 
// stroke() - Draws the shape by stroking its outline.
// 
// fill() - Draws a solid shape by filling the path's content area.


// moveTo(x, y) - Moves the pen to the coordinates specified by x and y.
// 
// lineTo(x, y) - Draws a line from the current drawing position to the position specified by x and y.


// arc(x, y, radius, startAngle, endAngle, anticlockwise) - Draws an arc which is centered 
//                                                          at (x, y) position with radius r 
//                                                          starting at startAngle 
//                                                          and ending at endAngle 
//                                                          going in the given direction 
//                                                          indicated by anticlockwise 
//                                                          (defaulting to clockwise).
// 
// arcTo(x1, y1, x2, y2, radius) - Draws an arc with the given control points and radius, 
//                                 connected to the previous point by a straight line.


// quadraticCurveTo(cp1x, cp1y, x, y) - Draws a quadratic Bézier curve from the current pen position 
//                                      to the end point specified by x and y, 
//                                      using the control point specified by cp1x and cp1y.
// 
// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) - Draws a cubic Bézier curve from the current pen position 
//                                               to the end point specified by x and y, 
//                                               using the control points 
//                                               specified by (cp1x, cp1y) and (cp2x, cp2y).


// rect(x, y, width, height) - Draws a rectangle whose top-left corner is specified by (x, y) 
//                             with the specified width and height.


// new Path2D();     // empty path object
// new Path2D(path); // copy from another Path2D object
// new Path2D(d);    // path from SVG path data
// 
// Path2D.addPath(path [, transform]) - Adds a path to the current path 
//                                      with an optional transformation matrix.
// 
// var p = new Path2D('M10 10 h 80 v 80 h -80 Z');


// fillStyle = color - Sets the style used when filling shapes.
// 
// strokeStyle = color - Sets the style for shapes' outlines.


// globalAlpha = transparencyValue - Applies the specified transparency value to all future shapes 
//                                   drawn on the canvas. The value must be between 0.0 
//                                   (fully transparent) to 1.0 (fully opaque). 
//                                   This value is 1.0 (fully opaque) by default.


// lineWidth = value - Sets the width of lines drawn in the future.
// 
// lineCap = type - Sets the appearance of the ends of lines.
// 
//   * butt - The ends of lines are squared off at the endpoints.
// 
//   * round - The ends of lines are rounded.
// 
//   * square - The ends of lines are squared off by adding a box 
//              with an equal width and half the height of the line's thickness.
// 
// 
// lineJoin = type - Sets the appearance of the "corners" where lines meet.
// 
//   * round - Rounds off the corners of a shape by filling an additional sector of disc 
//             centered at the common endpoint of connected segments. 
//             The radius for these rounded corners is equal to half the line width.
// 
//   * bevel - Fills an additional triangular area between the common endpoint of connected segments, 
//             and the separate outside rectangular corners of each segment.
// 
//   * miter - Connected segments are joined by extending their outside edges 
//             to connect at a single point, with the effect of filling 
//             an additional lozenge-shaped area. This setting is effected by the miterLimit property 
//             which is explained below.
// 
// miterLimit = value - Establishes a limit on the miter when two lines join at a sharp angle, 
//                      to let you control how thick the junction becomes.
// 
// getLineDash() - Returns the current line dash pattern array 
//                 containing an even number of non-negative numbers.
// 
// setLineDash(segments) - Sets the current line dash pattern.
// 
// lineDashOffset = value - Specifies where to start a dash array on a line.


// createLinearGradient(x1, y1, x2, y2) - Creates a linear gradient object 
//                                        with a starting point of (x1, y1) 
//                                        and an end point of (x2, y2).
// 
// createRadialGradient(x1, y1, r1, x2, y2, r2) - Creates a radial gradient. 
//                                                The parameters represent two circles, 
//                                                one with its center at (x1, y1) and a radius of r1, 
//                                                and the other with its center at (x2, y2) 
//                                                with a radius of r2.
// 
// gradient.addColorStop(position, color) - Creates a new color stop on the gradient object. 
//                                          The position is a number between 0.0 and 1.0 
//                                          and defines the relative position of the color 
//                                          in the gradient, and the color argument 
//                                          must be a string representing a CSS <color>, 
//                                          indicating the color the gradient should reach 
//                                          at that offset into the transition.


// createPattern(image, type) - Creates and returns a new canvas pattern object. 
//                              image is a CanvasImageSource (that is, an HTMLImageElement, 
//                              another canvas, a <video> element, or the like. 
//                              type is a string indicating how to use the image.
// 
// The type specifies how to use the image in order to create the pattern, 
// and must be one of the following string values:
// 
//   * repeat - Tiles the image in both vertical and horizontal directions.
//   * repeat-x - Tiles the image horizontally but not vertically.
//   * repeat-y - Tiles the image vertically but not horizontally.
//   * no-repeat - Doesn't tile the image. It's used only once.


// shadowOffsetX = float - Indicates the horizontal distance the shadow should extend from the object. 
//                         This value isn't affected by the transformation matrix. The default is 0.
// 
// shadowOffsetY = float - Indicates the vertical distance the shadow should extend from the object. 
//                         This value isn't affected by the transformation matrix. The default is 0.
// 
// shadowBlur = float - Indicates the size of the blurring effect; 
//                      this value doesn't correspond to a number of pixels 
//                      and is not affected by the current transformation matrix. 
//                      The default value is 0.
// 
// shadowColor = color - A standard CSS color value indicating the color of the shadow effect; 
//                       by default, it is fully-transparent black.
// 
// Note: Shadows are only drawn for 'source-over' compositing operations.


// Canvas fill rules
// 
//   * "nonzero" (default) 
//   * "evenodd"


// fillText(text, x, y [, maxWidth]) - Fills a given text at the given (x,y) position. 
//                                     Optionally with a maximum width to draw.
// 
// strokeText(text, x, y [, maxWidth]) - Strokes a given text at the given (x,y) position. 
//                                       Optionally with a maximum width to draw.

// Styling text
// 
//   * font = value - The current text style being used when drawing text. 
//                    This string uses the same syntax as the CSS font property. 
//                    The default font is 10px sans-serif.
// 
//   * textAlign = value - Text alignment setting. Possible values: start, end, left, right or center. 
//                         The default value is start.
// 
//   * textBaseline = value - Baseline alignment setting. 
//                            Possible values: top, hanging, middle, alphabetic, ideographic, bottom. 
//                            The default value is alphabetic.
// 
//   * direction = value - Directionality. Possible values: ltr, rtl, inherit. 
//                         The default value is inherit.
// 
// 
// measureText() - Returns a TextMetrics object containing the width, in pixels, 
//                 that the specified text will be when drawn in the current text style.


// drawImage(image, x, y) - Draws the CanvasImageSource specified by the image parameter 
//                          at the coordinates (x, y).
// 
// The canvas API is able to use any of the following data types as an image source:
// 
//   * HTMLImageElement - These are images created using the Image() constructor, 
//                        as well as any <img> element.
// 
//   * SVGImageElement - These are images embedded using the <image> element.
// 
//   * HTMLVideoElement - Using an HTML <video> element as your image source 
//                        grabs the current frame from the video and uses it as an image.
// 
//   * HTMLCanvasElement - You can use another <canvas> element as your image source.
// 
// These sources are collectively referred to by the type CanvasImageSource.
// 
// drawImage(image, x, y, width, height) - This adds the width and height parameters, 
//                                         which indicate the size to which to scale the image 
//                                         when drawing it onto the canvas.
// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) - 
// 
//     Given an image, this function takes the area of the source image specified by the rectangle 
//     whose top-left corner is (sx, sy) and whose width and height are sWidth and sHeight 
//     and draws it into the canvas, placing it on the canvas at (dx, dy) 
//     and scaling it to the size specified by dWidth and dHeight.
// 
// Controlling image scaling behavior
// 
//   * ctx.mozImageSmoothingEnabled = false;
//   * ctx.webkitImageSmoothingEnabled = false;
//   * ctx.msImageSmoothingEnabled = false;
//   * ctx.imageSmoothingEnabled = false;

// save() - Saves the entire state of the canvas.
// 
// restore() - Restores the most recently saved canvas state.
// 
// Canvas states are stored on a stack. Every time the save() method is called, 
// the current drawing state is pushed onto the stack. A drawing state consists of
// 
//   * The transformations that have been applied (i.e. translate, rotate and scale – see below).
// 
//   * The current values of the following attributes: 
//       strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, 
//       lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, 
//       globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
// 
//   * The current clipping path


// translate(x, y) - Moves the canvas and its origin on the grid. 
//                   x indicates the horizontal distance to move, 
//                   and y indicates how far to move the grid vertically.
// 
// rotate(angle) - Rotates the canvas clockwise around the current origin 
//                 by the angle number of radians.
//                 Reminder: Angles are in radians, not degrees. 
//                 To convert, we are using: radians = (Math.PI/180) * degrees.
// 
// scale(x, y) - Scales the canvas units by x horizontally and by y vertically. 
//               Both parameters are real numbers. 
//               Values that are smaller than 1.0 reduce the unit size 
//               and values above 1.0 increase the unit size. 
//               Values of 1.0 leave the units the same size.
// 
// Using negative numbers you can do axis mirroring (for example using translate(0,canvas.height); 
// scale(1,-1); you will have the well-known Cartesian coordinate system, with the origin 
// in the bottom left corner).

// transform(a, b, c, d, e, f) - Multiplies the current transformation matrix with the matrix 
//                               described by its arguments. 
// 
// The transformation matrix is described by:
// 
//   * a (m11) - Horizontal scaling.
//   * b (m12) - Horizontal skewing.
//   * c (m21) - Vertical skewing.
//   * d (m22) - Vertical scaling.
//   * e (dx) - Horizontal moving.
//   * f (dy) -Vertical moving.
// 
// setTransform(a, b, c, d, e, f) - Resets the current transform to the identity matrix, 
//                                  and then invokes the transform() method with the same arguments. 
//                                  This basically undoes the current transformation, 
//                                  then sets the specified transform, all in one step.
// 
// resetTransform() - Resets the current transform to the identity matrix. 
//                    This is the same as calling: ctx.setTransform(1, 0, 0, 1, 0, 0);


// globalCompositeOperation = type - This sets the type of compositing operation to apply 
//                                   when drawing new shapes, where type is a string 
//                                   identifying which of the twelve compositing operations to use.
// 
// Compositing operations:
// 
//   * source-over -This is the default setting and draws new shapes 
//                  on top of the existing canvas content.
// 
//   * source-in - The new shape is drawn only where both the new shape 
//                 and the destination canvas overlap. Everything else is made transparent.
// 
//   * source-out - The new shape is drawn where it doesn't overlap the existing canvas content.
// 
//   * source-atop - The new shape is only drawn where it overlaps the existing canvas content.
// 
//   * destination-over - New shapes are drawn behind the existing canvas content.
// 
//   * destination-in - The existing canvas content is kept 
//                      where both the new shape and existing canvas content overlap. 
//                      Everything else is made transparent.
// 
//   * destination-out - The existing content is kept where it doesn't overlap the new shape.
// 
//   * destination-atop - The existing canvas is only kept where it overlaps the new shape. 
//                        The new shape is drawn behind the canvas content.
// 
//   * lighter - Where both shapes overlap the color is determined by adding color values.
// 
//   * copy - Only the new shape is shown.
// 
//   * xor - Shapes are made transparent where both overlap and drawn normal everywhere else.
// 
//   * multiply - The pixels are of the top layer 
//                are multiplied with the corresponding pixel of the bottom layer. 
//                A darker picture is the result.
// 
//   * screen - The pixels are inverted, multiplied, and inverted again. 
//              A lighter picture is the result (opposite of multiply)
// 
//   * overlay - A combination of multiply and screen. 
//               Dark parts on the base layer become darker, and light parts become lighter.
// 
//   * darken - Retains the darkest pixels of both layers.
// 
//   * lighten - Retains the lightest pixels of both layers.
// 
//   * color-dodge - Divides the bottom layer by the inverted top layer.
// 
//   * color-burn - Divides the inverted bottom layer by the top layer, and then inverts the result.
// 
//   * hard-light - A combination of multiply and screen like overlay, 
//                  but with top and bottom layer swapped.
// 
//   * soft-light - A softer version of hard-light. 
//                  Pure black or white does not result in pure black or white.
// 
//   * difference - Subtracts the bottom layer from the top layer 
//                  or the other way round to always get a positive value.
// 
//   * exclusion - Like difference, but with lower contrast.
// 
//   * hue - Preserves the luma and chroma of the bottom layer, 
//           while adopting the hue of the top layer.
// 
//   * saturation - Preserves the luma and hue of the bottom layer, 
//                  while adopting the chroma of the top layer.
// 
//   * color - Preserves the luma of the bottom layer, 
//             while adopting the hue and chroma of the top layer.
// 
//   * luminosity - Preserves the hue and chroma of the bottom layer, 
//                  while adopting the luma of the top layer.


// clip() - Turns the path currently being built into the current clipping path.


// setInterval(function, delay) - Starts repeatedly executing the function 
//                                specified by function every delay milliseconds.
// 
// setTimeout(function, delay) - Executes the function specified by function in delay milliseconds.
// 
// requestAnimationFrame(callback) - Tells the browser that you wish to perform an animation 
//                                   and requests that the browser call a specified function 
//                                   to update an animation before the next repaint.
// 


// The ImageData object
// 
// The ImageData object represents the underlying pixel data of an area of a canvas object. 
// It contains the following read-only attributes:
// 
//   * width - The width of the image in pixels.
//   * height - The height of the image in pixels.
//   * data - A Uint8ClampedArray representing a one-dimensional array 
//            containing the data in the RGBA order, 
//            with integer values between 0 and 255 (included).
// 
// var myImageData = ctx.createImageData(width, height);
// 
// var myImageData = ctx.createImageData(anotherImageData);
// 
// var myImageData = ctx.getImageData(left, top, width, height);
// 
// ctx.putImageData(myImageData, dx, dy);


// canvas.toDataURL('image/png') - Default setting. Creates a PNG image.
// 
// canvas.toDataURL('image/jpeg', quality) - Creates a JPG image. Optionally, 
//                                           you can provide a quality in the range from 0 to 1, 
//                                           with one being the best quality 
//                                           and with 0 almost not recognizable but small in file size.
// 
// canvas.toBlob(callback, type, encoderOptions) - Creates a Blob object 
//                                                 representing the image contained in the canvas.


// CanvasRenderingContext2D.addHitRegion() - Adds a hit region to the canvas.
// 
// CanvasRenderingContext2D.removeHitRegion() - Removes the hit region with the specified id 
//                                              from the canvas.
// 
// CanvasRenderingContext2D.clearHitRegions() - Removes all hit regions from the canvas.


// CanvasRenderingContext2D.drawFocusIfNeeded() - If a given element is focused, 
//                                                this method draws a focus ring 
//                                                around the current path.
// 
// CanvasRenderingContext2D.scrollPathIntoView() - Scrolls the current path or a given path 
//                                                 into the view.
// 
// -------------------------------------------------------------------------------------------

CanvasRenderingContext2D.prototype.addGrid = function (horiz_stripes_count, vert_stripes_count, 
                                                       horiz_lines_color, vert_lines_color,
                                                       horiz_line_width, vert_line_width) {

  if (!(typeof horiz_lines_color == 'string')) {
    console.error("'horiz_lines_color' param must be a string!")
    return
  }

  if (!(typeof vert_lines_color == 'string')) {
    console.error("'vert_lines_color' param must be a string!")
    return
  }

  if (horiz_stripes_count < 2) {
    console.error("'horiz_stripes_count' must be greater than 2")
    return
  }

  if (vert_stripes_count < 2) {
    console.error("'vert_stripes_count' must be greater than 2")
    return
  }
  
  // horizontal lines

  this.lineWidth = horiz_line_width
  this.strokeStyle = horiz_lines_color
  
//   console.log(horiz_stripes_count)
//   console.log(this.canvas.height)

  let y_step = Math.trunc(this.canvas.height / horiz_stripes_count)
//   console.log(y_step)

  this.moveTo(0, 0)

  for (const i = y_step; i < horiz_stripes_count - 1; i += y_step) {
    console.log(i)
    this.moveTo(0,  i)
    this.lineTo(i, this.width)
  }

  // vertical lines

  this.lineWidth = horiz_line_width
  this.strokeStyle = vert_line_width
  
//   console.log(vert_stripes_count)
//   console.log(this.canvas.width)

  let x_step = Math.trunc(this.canvas.width / vert_stripes_count)
//   console.log(x_step)

  this.moveTo(0, 0)
  
  for (const i = x_step; i < vert_stripes_count; i += x_step) {
    this.moveTo(i,  0)
    this.lineTo(i, this.height)
  }
}

// ------------------------------------------------

let canvas = document.createElement('canvas')
canvas.width = document.body.clientWidth
canvas.height = 400

canvas.style.border = '3px solid blue'
canvas.style.marginTop = '0.5em'

canvas.onclick = function (event) {
  let data_url = canvas.toDataURL('image/jpeg')

  let image = document.createElement('img')
  image.src = data_url

  document.body.appendChild(image)
}

window.onresize = function (event) {
  canvas.width = document.body.clientWidth
}

document.body.appendChild(canvas)
canvas.scrollIntoView()

let canvas_context = canvas.getContext('2d', /* {alpha: false} */)
console.log(canvas_context)

function draw_rects_rainbow(canvas_context) {
  let canvas_width = canvas.width
  let canvas_height = canvas.height

  canvas_context.fillStyle = 'red'
  canvas_context.fillRect(0, 0, canvas_width, canvas_height)

  canvas_context.fillStyle = 'orange'
  canvas_context.fillRect(10, 10, canvas_width - 20, canvas_height - 20)

  canvas_context.fillStyle = 'yellow'
  canvas_context.fillRect(20, 20, canvas_width - 40, canvas_height - 40)

  canvas_context.fillStyle = 'green'
  canvas_context.fillRect(30, 30, canvas_width - 60, canvas_height - 60)

  canvas_context.fillStyle = 'skyblue'
  canvas_context.fillRect(40, 40, canvas_width - 80, canvas_height - 80)

  canvas_context.fillStyle = 'blue'
  canvas_context.fillRect(50, 50, canvas_width - 100, canvas_height - 100)

  canvas_context.fillStyle = 'violet'
  canvas_context.fillRect(60, 60, canvas_width - 120, canvas_height - 120)
}

// draw_rects_rainbow(canvas_context)

canvas_context.font = '50px sans-serif'

function rainbow_led(canvas_context) {
  let colors = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'violet']
  let colors_count = colors.length

  let color_index = 0

  let canvas_width = canvas.width
  let canvas_height = canvas.height

  setInterval(() => {
    let color_name = colors[color_index]

    let text_width = canvas_context.measureText(color_name).width

    canvas_context.fillStyle = color_name
    canvas_context.fillRect(0, 0, canvas_width, canvas_height)
    
    canvas_context.fillStyle = 'black'
    canvas_context.fillText(color_name, ((canvas_width / 2) - (text_width / 2)), (canvas_height / 2))

    color_index += 1

    if (color_index > (colors_count - 1)) {
      color_index = 0
    }

  }, 500)
}

// rainbow_led(canvas_context)

// canvas_context.fillStyle = 'lighgrey'
// canvas_context.addGrid(3, 3, 'red', 'green', 5, 5)
