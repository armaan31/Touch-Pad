var lx, ly; //my last x mouse position and last y mouse position 
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    color = "black";
    width = 1;
    var w = screen.width;
    var nw = screen.width-70;
    var nh = screen.height-300;
    if(w<992){
        document.getElementById("myCanvas").width=nw;
        document.getElementById("myCanvas").height=nh;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", mytouchstart);
    function mytouchstart(e)
    {
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        var lx = e.touches[0].clientX - canvas.offsetLeft; //current x position of mouse
        var ly = e.touches[0].clientY - canvas.offsetTop; //current y position of mouse
    }
    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {
        var cx = e.touches[0].clientX - canvas.offsetLeft; //current x position of mouse
        var cy = e.touches[0].clientY - canvas.offsetTop; //current y position of mouse
        ctx.beginPath();  
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lx, ly);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        lx = cx; 
        ly = cy;
    }
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      document.getElementById("color").value=null;
    document.getElementById("width").value=null;
}