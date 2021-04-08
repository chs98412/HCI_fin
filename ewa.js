var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   

    var Point = function (x, y) {
        this.x = x;
        this.y = y;
     };
     
     var Polygon = function (color,context) {
        
        this.color = color;
        this.context=context;
     };
     
     Polygon.prototype = {
        Drawpoly: function (x,y,rad,sides) {
           var points = [],
               startAngle= Math.PI/sides;
               angle = startAngle || 0;
     
           for (var i=0; i < sides; ++i) {
              points.push(new Point(x + rad * Math.sin(angle),y - rad * Math.cos(angle)));
              angle += 2*Math.PI/sides;
           }
           
           this.context.closePath();
           this.context.save();
           this.context.beginPath();
     
           this.context.moveTo(points[0].x, points[0].y);
     
           for (var i=1; i < sides; ++i) {
              context.lineTo(points[i].x, points[i].y);
           }
           this.context.fillStyle = this.color;
           this.context.fill();
           this.context.restore();
        }
     
       
     };
    {//화면3변수

        player={x:80,y:180,rad:18,bodywidth:30,bodyheight:70 };
        Afood={x:400,y:230};
        jump=0;
        count=0;
        count2=0;
    
        index=0;
        index2=0;
        foods=[{x:400,y:230}];
        coins={};
        key={right:false};
        life=400;
        ouch={x:300,y:260};
        point=122725;
        coinpoint=8;
    }

    function Drawback(color,fill,context){
        //배경
        this.color=color;
        this.fill=fill;
        this.context=context;
    }
    Drawback.prototype={

        rect: function(x,y,w,h){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.strokeRect(x,y,w,h);
                this.context.closePath();

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.closePath();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.strokeStyle='#020202';
                this.context.strokeRect(x,y,w,h);
                this.context.closePath();


            }

        },
        circle: function(x,y,rad){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.stroke();
                this.context.closePath();

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.closePath();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.strokeStyle='#020202';
                this.context.stroke();
                this.context.closePath();
                

            }
        },

        line: function(x1,y1,x2,y2,width){
            
            this.context.beginPath();
            this.context.lineWidth=width;
            this.context.strokeStlye=this.color;
            this.context.moveTo(x1,y1);
            this.context.lineTo(x2, y2);
            this.context.stroke();

        },

        text: function(text,x,y){
            this.context.font ='12px Helvetica';
            this.context.fillStyle=this.color;
            this.context.fillText(text,x,y);      
        }
    }
    dpblue=new Drawback("#2082e7",1,context);
    blue=new Drawback("#50a0f2",1,context);
    wkgreen=new Drawback("#9cdd78",1,context);
    navy=new Drawback("#4d51fa",0,context);
    cyon = new Drawback('#12afb9',1,context);

    white = new Drawback('#eeece0',3,context);
    gray= new Drawback('#a2a2a2',3,context);
    green = new Drawback('#09c813',1,context);
    dkbrown = new Drawback('#712e00',1,context);
    ck = new Drawback('#eca009',1,context);
    red=new Drawback("#dc1414",1,context);
    backcolor=new Drawback("#792904",1,context);
    gold=new Drawback("#c5c100",1,context);
mode=1;

   
   // drawback();

   if(mode==1){


   }

   

    canvas.onmousedown = function (i) {
        var loc = windowToCanvas(i.clientX, i.clientY);
     
        i.preventDefault(); 
        context.beginPath();
            context.arc(450, 300, 20, Math.PI , Math.PI*3/1 );
            if (context.isPointInPath(loc.x, loc.y)) {
                if(mode==3){
                    mode=1;
                }
                console.log("뒤로가기");
                mode=1;
                

             }
                
    };
    


        function windowToCanvas(x, y) { //실좌표계산
            var bbox = canvas.getBoundingClientRect();
            return { x: x - bbox.left * (canvas.width  / bbox.width),
                     y: y - bbox.top  * (canvas.height / bbox.height)
                   };
         }
         






