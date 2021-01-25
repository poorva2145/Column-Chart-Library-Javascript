export function createColumnChart(myCanvas, obj) {

  const x_axis_label = obj.x_axis_label;
  const y_axis_label = obj.y_axis_label;
  const categories = obj.categories;
  const data = obj.data;
  const default_color = obj.color;

  myCanvas.width = x_axis_label;
  myCanvas.height = y_axis_label;
  var ctx = myCanvas.getContext("2d");


  function draw_grid() {
    let xpos = myCanvas.height - 20;
    while (xpos > 0) {
      ctx.beginPath();
      ctx.moveTo(0, xpos);
      ctx.lineTo(myCanvas.width, xpos);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cccccc';
      ctx.stroke();

      ctx.fillStyle = '#545454';
      ctx.font = "15px Arial";
      ctx.fillText(myCanvas.height - xpos, 0, xpos);

      xpos -= 20;
    }
  }
  draw_grid();

  let width = 40; //bar width
  let X = 60; // first bar position 
  let gap = 20; // gap between two bars

  if (obj.bar_width !== undefined) {
    width = obj.bar_width;
  }
  if (obj.bar_gap !== undefined) {
    gap = obj.bar_gap;
  }

  for (let i = 0; i < data.length; i++) {
    ctx.fillStyle = default_color;
    if (data[i].color !== undefined) {
      ctx.fillStyle = data[i].color;
    }
    let h = data[i].value;
    ctx.fillRect(X, myCanvas.height - h, width, h);

    X += width + gap;
    /* text to display Bar number */
    ctx.fillStyle = default_color;
    if (data[i].color !== undefined) {
      ctx.fillStyle = data[i].color;
    }
    ctx.font = "15px Arial";
    ctx.fillText(`${categories[i]}`, X - width - gap, myCanvas.height - h - 30);
    ctx.fillText(`${h}`, X - width - (gap / 2), myCanvas.height - h - 10);
  }

  /* Text to display scale */
  ctx.fillStyle = '#000000';
  ctx.font = "15px Arial";
  ctx.fillText('Scale X : ' + myCanvas.width + ', Y : ' + myCanvas.height, myCanvas.width - 200, 20);
}