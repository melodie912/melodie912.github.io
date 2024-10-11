// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color;
let x2 = canvas.width, y2 = 0, dx2 = 5, dy2 = 5, r2 = 30, color2;
let x3 = canvas.height, y3 = 0, dx3 = 5, dy3 = 5, r3 = 30, color3;
color=["#9999CC", "#B8B8DC", "#D8D8EB"];
color2=["#EBD3E8", "#D3A4FF", "#E6CAFF"];
color3=["#B7FF4A", "#CCFF80", "#DEFFAC"];
let i=0;
let j=0;
let k=0;

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
	
	x2 = x2 + dx2;
    y2 = y2 + dy2;
	
	x3 = x3 + dx3;
    y3 = y3 + dy3;
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if(x<0 || x>canvas.width){
		dx=-dx;
		i++;
	}
	if(y<0 || y>canvas.height){
		dy=-dy;
		i++;
	}
	if(x2<0 || x2>canvas.width){
		dx2=-dx2;
		j++;
	}
	if(y2<0 || y2>canvas.height){
		dy2=-dy2;
		j++
	}
	if(x3<0 || x3>canvas.width){
		dx3=-dx3;
		k++;
	}
	if(y3<0 || y3>canvas.height){
		dy3=-dy3;
		k++;
	}
	
	
	if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2))		[dx, dy, dx2, dy2] = [dx2, dy2, dx, dy];
	if((x-x3)*(x-x3) + (y-y3)*(y-y3) < (r+r3)*(r+r3))		[dx, dy, dx3, dy3] = [dx3, dy3, dx, dy];
    if((x2-x3)*(x2-x3) + (y2-y3)*(y2-y3) < (r2+r3)*(r2+r3))	[dx2, dy2, dx3, dy3] = [dx3, dy3, dx2, dy2];
	
	
	drawBall(x, y, r, color[i%3]);
	drawBall(x2, y2, r2, color2[j%3]);
	drawBall(x3, y3, r3, color3[i%3]);

    requestAnimationFrame(draw);
}
draw();
