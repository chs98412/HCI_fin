
      var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    iconwidth=42;
    distance=5;
    mode=1;

   {//화면3변수

    player={x:80,y:180,rad:18,bodywidth:30,bodyheight:70 };
    Afood={x:400,y:230};
    jump=0;
    count=0;
    count2=0;

    index=0;
    index2=0;
    foods=[{x:400,y:230}];
    coins2=[{x:450,y:210}];
    coins={};
    key={right:false};
    life=400;
    ouch={x:300,y:260};
    point=122725;
    coinpoint=8;
}
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

            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.fillRect(x,y,w,h);
                this.context.strokeStyle='#020202';
                this.context.strokeRect(x,y,w,h);


            }

        },
        circle: function(x,y,rad){
            if(this.fill==0){
                this.context.strokeStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.stroke();
            }
            else if(this.fill==1){
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();

            }
            else{
                this.context.fillStyle=this.color;
                this.context.beginPath();
                this.context.arc(x,y,rad,Math.PI,Math.PI*3);
                this.context.fill();
                this.context.strokeStyle='#020202';
                this.context.stroke();
                

            }
        },

        line: function(x1,y1,x2,y2,width){
            this.context.lineWidth=width;
            this.context.strokeStlye=this.color;
            this.context.beginPath();
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

    function UpBar(){

  

    bar = new Drawback('#5b5a4c',2,context);
    
    bar.rect(60,40,60,15);
    bar.rect(140,40,80,15);
    bar.rect(230,40,100,15);
    barwhite = new Drawback('#eeece0',3,context);
    
    barwhite.rect(350,40,100,15);
    
    bargreen = new Drawback('#09c813',1,context);
    
    bargreen.circle(220,47,7);
    bargreen.circle(330,47,7);
    bargreen.circle(450,47,7);
    
    
    
    
    barwhite.text("53%",85,52);
    barwhite.text("923",180,52);
    barwhite.text("15,460",285,52);
    barcyon = new Drawback('#12afb9',1,context);
    
    barcyon.circle(500,47,7);
    
    barred=new Drawback('#dc1414',2,context);
    for(i=0;i<6;i++)barred.circle(380+i*7,48,7);


star=new Polygon("#f7ec24",context);
star.Drawpoly(60,45,10,5);
crystal=new Polygon("#48e8ff",context);
crystal.Drawpoly(145,45,10,6);
bargray=new Drawback("#9e9d9d",1,context);
bargray.circle(239,47 ,10);
    }
{//객체선언
    dpblue=new Drawback("#2082e7",1,context);
    blue=new Drawback("#50a0f2",1,context);
    wkgreen=new Drawback("#9cdd78",1,context);
    navy=new Drawback("#4d51fa",0,context);
    cyon = new Drawback('#12afb9',1,context);

    white = new Drawback('#eeece0',2,context);
    gray= new Drawback('#d7d5d5',2,context);
    green = new Drawback('#09c813',1,context);
    dkbrown = new Drawback('#712e00',1,context);
    ck = new Drawback('#eca009',1,context);
    red=new Drawback("#dc1414",1,context);
    backcolor=new Drawback("#792904",1,context);
    gold=new Drawback("#c5c100",1,context);
    backcolor2=new Drawback("#a03f4e",1,context);

    black= new Drawback('#020202',1,context);

     
         
redpoly=new Polygon("#ef4b00",context);
cyonpoly=new Polygon("#28e4de",context);
bluepoly=new Polygon("#6db1ff",context);
brownpoly =new Polygon("#ae2f0a",context);

viopoly =new Polygon("#b449f8",context);

pinkpoly =new Polygon("#ef26d8",context);


brown = new Drawback('#c3580d',2,context);
pet=new Polygon("#662700",context);
gbadg=new Polygon("#c5c100",context);
sbadg=new Polygon("#b9b6b6",context);
massag=new Polygon("white",context);
gift=new Polygon("#dc1414",context);




}
    image1st = new Image();
    image1st.src='img/1st.jpeg';
    image1st.onload= (e)=>{
        context.drawImage(image1st,25, 25, 500,300);
        
    UpBar();

{ //1번화면
brown.rect(100,70,100,30);
brown.rect(200,80,100,20);
brown.rect(100,100,200,200);


white.rect(110,110,85,25);
white.rect(100,135,200,15);
for(i=0;i<5;i++)white.rect(100,150+i*30,200,30);




for(i=0;i<4;i++)gray.rect(105,190+30*i,10,10);

for(i=0;i<5;i++)gray.circle(140,165+i*30,7);




cyon.circle(400,90,10);
cyon.rect(400,80,70,20);
cyon.circle(470,90,10);
cyon.rect(370,240,70,20);
cyon.circle(370,250,10);
cyon.circle(440,250,10);



for(i=0;i<5;i++){
green.circle(270,165+i*30,7);
green.rect(270,158+i*30,20,14);
green.circle(290,165+i*30,7);
}
green.circle(370,290,10);
green.rect(370,280,70,20);
green.circle(440,290,10);

brown.rect(100,300,200,23);

dkbrown.rect(210,85,30,12);
dkbrown.rect(260,85,30,12);

dkbrown.rect(205,110,85,25);
dkbrown.rect(115,305,39,15);
dkbrown.rect(160,305,40,8);

// 쿠키ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

ck.circle(410,150,16);
ck.rect(401,160,18,30);
ck.rect(398,190,7,20);
ck.rect(416,190,7,20);
ck.circle(401.5,210,3.5);
ck.circle(419.5,210,3.5);

ck.rect(390,167,15,7);
ck.rect(415,167,15,7);
ck.circle(390,170.5,3.5);
ck.circle(430,170.5,3.5);

white.rect(380,160,5,30);
white.rect(370,155,15,5);
white.circle(404,148,4,4);
white.circle(416,148,4,4);
blue.circle(404,148,1.5,1.5);
blue.circle(416,148,1.5,1.5);
white.circle(410,173,3);
white.circle(410,180,3);

for(i=0;i<4;i++)red.rect(380,160+i*8,5,4);
 
context.strokeStyle='#dc1414'; 
context.arc(410,154,7,Math.PI*2,Math.PI);
context.stroke();

context. beginPath();
context.strokeStyle='white';
context.moveTo(398,140);
context.bezierCurveTo(410, 139, 408, 135, 413, 134);
context.stroke();

context.beginPath();
context.moveTo(408,140);
context.bezierCurveTo(416, 140, 418, 138, 420, 136);
context.stroke();


//mmmmmmmmmmmmmmmmmmmmmmmmmmm
ck.rect(330,120,50,15);





pet.Drawpoly(350,160,10,8);

white.circle(347,158,2);
white.circle(353,158,2);
white.text("이벤트",340,131);

gold.text("1",108,170);

gbadg.Drawpoly(130,165,7,5);
for(i=0;i<4;i++)sbadg.Drawpoly(130,195+i*30,7,5);

for(i=0;i<3;i++)massag.Drawpoly(240+i*20,310,7,5+i);
context.strokeStlye="#020202";
context.beginPath();
context.moveTo(250,300);
context.lineTo(250, 323);
context.stroke();

context.beginPath();
context.moveTo(270,300);
context.lineTo(270, 323);
context.stroke();

context.beginPath();
context.moveTo(230,300);
context.lineTo(230, 323);
context.stroke();


//asdasd



for(i=0;i<5;i++){
    gift.Drawpoly(270,164+i*30,7,5);
    dkbrown.text("ON",276,168+i*30);
}
//다시 시자그ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
white.text("에피소드 지도",402,95);
white.text("오븐 탈출",128,90);
white.text("0/3",215,94);
white.text("0/39",264,94);
white.text("리그랭킹",228,126);
gray.rect(365,210,100,20);
black.text("추가체력 5 보너스",370,225);
white.text("펫",370,255);
white.text("쿠키",392,255);
white.text("보물",420,255);
white.text("게임 시작",385,295);
white.text("랭킹보상",112,316);
white.text("0/100",165,320);



black.text("친구 랭킹",130,125);
black.text("최혁순      422,300",170,168);
black.text("손흥민       58,298",170,198);
black.text("리오넬 메시  1,000",170,228);
black.text("호날두           980",170,258);
black.text("네이마르        680",170,288);


    }
}


canvas.onmousedown = function (e) {
    var loc = windowToCanvas(e.clientX, e.clientY);

    e.preventDefault(); 

    context.beginPath();

    context.arc(370, 290, 10, Math.PI,Math.PI*3);
    context.arc(440,290,10, Math.PI,Math.PI*3);
    context.rect(370,280,70,20);


    if (context.isPointInPath(loc.x, loc.y)) {
        console.log("1번화면");

        if(mode==1){
            image2back = new Image();
            image2back.src='img/1st.jpeg';
            image2back.onload= (e)=>{
                context.drawImage(image2back,25, 25, 500,300);
                
            UpBar();
        


            mode=2;
            { //2번화면
                context.beginPath();
            
            
            context.font ='14px Helvetica';
            context.fillStyle='white';
            
            
            white.rect(80, 70, 170, 200);
            
            
            
            dpblue.rect(95-distance, 100-distance, iconwidth*3+distance*4, iconwidth+distance*2)
            
            for(i=0;i<3;i++) blue.rect(95+i*(iconwidth+distance), 100, iconwidth, iconwidth);
            
            
            green.rect(95-distance, 100+iconwidth+5*distance, iconwidth*3+distance*4, iconwidth*2+distance*3);
            
            for(i=0;i<3;i++) wkgreen.rect(95+i*(iconwidth+distance), 100+iconwidth+6*distance, iconwidth, iconwidth);
            for(i=0;i<3;i++) wkgreen.rect(95+i*(iconwidth+distance), 100+2*iconwidth+7*distance, iconwidth, iconwidth);
            
            
            navy.rect(80+170+10*distance,70+4*distance,170,150);
            
            blue.rect(80+170+13*distance, 70+7*distance, iconwidth, iconwidth);//아이템
            
            
            
            gray.circle(80+170+20*distance+iconwidth, 70+12*distance, 5);//동전
            
            
            context.font ='12px Helvetica';
            
            context.fillText("800",80+170+22*distance+iconwidth, 70+13*distance);   
            context.fillText("Lv.2",80+170+15*distance, 70+14*distance);   
            
            cyon.circle(250+17*distance+iconwidth, 70+18*distance, 10);
            cyon.circle(300+17*distance+iconwidth, 70+18*distance, 10);
            cyon.rect(250+17*distance+iconwidth,70+18*distance-10,50,20);
            
            
            
            white.text("업그레이드",250+17*distance+iconwidth,70+18*distance+4);   
            gray.text("추가체력이 총 10 늘어납니다.",250+5*distance+iconwidth,70+23*distance+4);   
            gray.text("모든 쿠키들에게 적용됩니다.",250+5*distance+iconwidth,70+26*distance+4);   
            
            
            green.circle(330, 265, 16);
            green.circle(430,265, 16);
            green.rect(330, 265-16,100,32);
            
            
            context.font ='24px Helvetica';
            context.fillStyle='white';
            context.fillText("게임 시작",336, 272);   
            
            context.font ='18px Helvetica';
            context.fillStyle='white';
            context.fillText("체력강화 Lv.2",250+15*distance+iconwidth, 70+9*distance);  
            
            black.text("능력을 업그레이드하세요",93,90); 
            black.text("부스트를 구매하세요",93,163); 
            
            
                gray.circle(250, 75, 9);
                black.line(244,68,256,82,1);
                black.line(256,68,244,82,1);

                context.beginPath();
context.strokeStyle='#0032b7';
context.moveTo(330,111);
context.bezierCurveTo(330, 105, 337, 105, 338, 111);
context.stroke();

            redpoly.Drawpoly(210,193,10,6);
            bluepoly.Drawpoly(210,240,10,5);
            
         
                image2nd = new Image();
                image2nd.src='img/아이콘.png';
                image2nd.onload= (e)=>{
                    context.drawImage(image2nd,138,168,50,50);
                    
                }
            
            pinkpoly.Drawpoly(162,240,10,5);
            cyonpoly.Drawpoly(116,193,10,5);
            
            viopoly.Drawpoly(116,240,10,5);
            
            
            redpoly.Drawpoly(210,120,10,8);
            star.Drawpoly(162,120,10,8)

            viopoly.Drawpoly(116,120,10,8);
            
            redpoly.Drawpoly(335,120,10,8);
            }}
        }
        
    }
    
    context.beginPath();
    context.arc(330, 265, 16, Math.PI,Math.PI*3);
    context.arc(430,265, 16, Math.PI,Math.PI*3);
    context.rect(330, 265-16,100,32);
    if (context.isPointInPath(loc.x, loc.y)) {
        console.log("2번화면");
        if(mode==2){
            mode=3;
            setInterval(function(){
                if(count==100){             
                    count=0;
                    if(index<6)
                    index+=1;             
                    foods[foods.length]={x:400,y:230};

                    if(index2<3)
                    index2+=1;             
                    coins2[coins2.length]={x:450,y:210};
                    
                }
                if(count2==500){        
                    
                    coins={x:480,y:230};
                    
                    count2=0;
                    
                }
                
                
                count+=1
                count2+=1;    
                drawback();
                update();
            },10)
            
        }
    }
    
    context.beginPath();
    context.arc(100, 300, 20, Math.PI , Math.PI*3/1 );
    if (context.isPointInPath(loc.x, loc.y)) {
                if(mode==3)
                    if(jump==0)
                        jump=1;
                
             }
    
    context.beginPath();
    context.arc(450, 300, 20, Math.PI , Math.PI*3/1 );
    if (context.isPointInPath(loc.x, loc.y)) {
                if(mode==3){
                    mode=1;
                    location.reload(true);}
                    console.log("뒤로가기");

                }

};

function windowToCanvas(x, y) { //실좌표계산
    var bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left * (canvas.width  / bbox.width),
             y: y - bbox.top  * (canvas.height / bbox.height)
           };
 }


 function drawback(){
    //배경
  
    image3rd = new Image();
image3rd.src='img/back.png';
image3rd.onload= (e)=>{
    for(i=0;i<5;i++){
    for(j=0;j<4;j++)context.drawImage(image3rd,25+i*100, 25+j*75, 100,75);
    }
    white.circle(500, 45, 10);
    gray.line(495,40,495,50,4); 
    gray.line(505,40,505,50,4); 

    context.beginPath();
       
    context.font ='24px Helvetica';
    context.fillStyle='#dadde4';
    context.fillText("BONUSTIME",50,50);   
    context.fillStyle='white';
    context.fillText(point,400,50);   
    context.closePath();
    cyon.circle(380, 42, 10);

    
    //동전
    gray.circle(280, 42, 7 );
    
    context.font ='15px Helvetica';
    context.fillStyle='white';
    white.text(coinpoint,295,48); 

    //생명바
context.lineWidth=10;
context.strokeStyle='#dbd840';
context.beginPath();
context.moveTo(50,70);
context.lineTo(50+life,70);
context.stroke();

context.strokeStyle='#868686';
context.beginPath();
context.lineWidth=2;
context.moveTo(50,90);
context.lineTo(120,90);
context.stroke();
gold.circle(120, 90, 2 );


gold.circle(40, 70, 10 );
red.circle(40, 70, 5 );
black.circle(40,242,5);
brown.circle(40,250,7);
black.circle(38,248,1);
black.circle(42,248,1);
  
//바닥
context.beginPath();
context.lineWidth=6;
context.strokeStyle='#a6a4a4';
context.strokeRect(28, 275, 494, 50);
context.stroke();

context.lineWidth=4;
for(i=0;i<9;i++){
context.beginPath();
context.moveTo(40+i*55,275);
context.lineTo(40+i*55,325);
context.stroke();

context.beginPath();
context.moveTo(40+i*55+10,275);
context.lineTo(40+i*55+10,325);
context.stroke();
}
//바닥ui
context.fillStyle='#e1e6fa';
context.fillRect(180, 290, 80, 30);
context.fillRect(180+10+80, 290, 80, 30);

context.fillStyle='#8d8e96';
for(i=0;i<3;i++){
context.fillRect(185+i*25, 295, 20, 20);
context.strokeStyle='black';
context.lineWidth=1;
context.strokeRect(185+i*25, 295, 20, 20);
}
for(i=0;i<3;i++){
    context.fillRect(275+i*25, 295, 20, 20);
    context.strokeStyle='black';
    context.strokeRect(275+i*25, 295, 20, 20);
    }
context.fillStyle='white';
context.lineWidth=5;

context.font ='14px Helvetica';

context.fillText("부스트",205,290); 
context.fillText("보물",300,290); 
drawplayer();
drawouch();
drawBttn();
drawcoin(coins);
for(i=0;i<=index;i++)drawfood(foods[i]);
for(i=0;i<=index2;i++)drawcoins2(coins2[i]);


   
}}





//먹을거

function drawfood(food){
    context.beginPath();
    context.fillStyle='#2cd9df';
    if(food!=null){
    context.arc(food.x, food.y, 8, Math.PI , Math.PI*3/1 );
    context.fill();
    if(food.x> 33 ){
        food.x-=1;
    }
    else if(food.x==33){
        foods.splice(0,1);
    }
     
    if(food.x<player.x+player.bodywidth && food.x>player.x-player.bodywidth && food.y>player.y+player.rad && food.y<player.y+player.rad+player.bodyheight)
    {
        console.log(life);
         point+=1000;
        if(life>200&&life<450)
        life+=10;
        foods.splice(i,1);
    }

    }}
    function drawcoins2(coin2){
    context.beginPath();
    context.fillStyle='#d2d927';
    if(coin2!=null){
    context.arc(coin2.x, coin2.y, 8, Math.PI , Math.PI*3/1 );
    context.fill();
    if(coin2.x> 33 ){
        coin2.x-=1;
    }
    else if(coin2.x==33){
        coins2.splice(0,1);
    }
     
    if(coin2.x<player.x+player.bodywidth && coin2.x>player.x-player.bodywidth && coin2.y>player.y+player.rad && coin2.y<player.y+player.rad+player.bodyheight)
    {
        point+=1000;
             coinpoint+=100;
             console.log(coinpoint);
        coins2.splice(i,1);
    }

    }}
    
    function drawcoin(coin){
        

        context.beginPath();
        context.fillStyle='#d1d1d1';
        if(coin!=null){
        context.arc(coin.x, coin.y, 8, Math.PI , Math.PI*3/1 );
        context.fill();
        if(coin.x> 33 ){
            coin.x-=1;
            
        }
        else if(coin.x==33){
            console.log("없어!1");

            coins=null;
        }
         
        if(coin.x<player.x+player.bodywidth && coin.x>player.x-player.bodywidth && coin.y>player.y+player.rad && coin.y<player.y+player.rad+player.bodyheight)
        {
             point+=1000;
             coinpoint+=10;
             console.log("없어!2");
            coins=null;
        }
    
        }
        else if(coin==null)console.log("없어!");
    }
    //캐릭터
    function drawplayer(){
        context.lineWidth=2;

    context.beginPath();
    context.fillStyle='#c87e28';
    context.arc(player.x, player.y, player.rad, Math.PI , Math.PI*3/1 );//머리
    context.fillRect(player.x-player.bodywidth/2,player.y+player.rad,player.bodywidth, player.bodyheight);//몸통
    context.fillRect((player.x-player.bodywidth/2)-5,player.y+player.rad+player.bodyheight*2/3,player.bodywidth/5, player.bodyheight/2);//왼다리
    context.fillRect((player.x+player.bodywidth/2),player.y+player.rad+player.bodyheight*2/3,player.bodywidth/5, player.bodyheight/2);//오른다리


    context.fill();

    context.fillRect(player.x-player.bodywidth/2-player.bodywidth/3-2,player.y+player.rad+3,player.bodywidth/3, player.bodyheight/2);//왼팔
    context.fillRect(player.x-player.bodywidth/2+player.bodywidth/3-8+player.bodywidth,player.y+player.rad+3,player.bodywidth/3, player.bodyheight/2);//오른팔

    context.fillStyle='#ff0000';
    context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15,(player.y+player.rad+3)-20, player.bodyheight/4,player.bodywidth/7);   


    context.fillStyle='#ffffff';//막대기
    context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-5,(player.y+player.rad+3)-20,player.bodywidth/7, player.bodyheight/2);
    context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15,(player.y+player.rad+3)-20,player.bodywidth/7, player.bodyheight/4);
    context.fillStyle='#ff0000';
    context.fillRect((player.x-player.bodywidth/2-player.bodywidth/3-2)-15+player.bodywidth/7,(player.y+player.rad+3)-20,5,player.bodywidth/7); 



    context.fillStyle='#ffffff';//눈,단추
    context.beginPath();
    context.arc(player.x-7, player.y-3, player.rad-12, 0 , Math.PI*3/2 );
    context.fill();
    context.beginPath();
    context.arc(player.x+7, player.y-3, player.rad-12, 0, Math.PI*3/2);
    context.fill();

    context.beginPath();
    context.arc(player.x, player.y+30, 4,Math.PI , Math.PI*3/1);
    context.fill();
    context.beginPath();
    context.arc(player.x, player.y+50, 4,Math.PI , Math.PI*3/1);
    context.fill();

    

    




    context.fillStyle='#6488e8';
    context.beginPath();
    context.arc(player.x-7, player.y-3, player.rad-15, 0 , Math.PI*3/2 );
    context.fill();
    context.beginPath();
    context.arc(player.x+9, player.y-3, player.rad-15, 0, Math.PI*3/2);
    context.fill();  
    context.strokeStyle='#f31515'; 
    context.beginPath();
    context.arc(player.x, player.y+10, player.rad-15, Math.PI/3, Math.PI*3/2);
    context.stroke(); 

    context.beginPath();
context.strokeStyle='white';
context.moveTo(player.x-18,player.y-10);
context.bezierCurveTo(player.x-16, player.y-8, player.x-14, player.y-8, player.x-2, player.y-16);
context.stroke();

context.beginPath();
context.moveTo(player.x-2,player.y-10);
context.bezierCurveTo(player.x-18, player.y-8, player.x+2, player.y-8, player.x+14, player.y-16);
context.stroke();


    }

    function drawouch(){
        context.beginPath();
    context.fillStyle='#264f17';
    
    context.arc(ouch.x, ouch.y, 8, Math.PI , Math.PI*3/1 );
    context.fill();    
    if(ouch.x> 33 ){
        ouch.x-=2;
    }
    else if(ouch.x==33){
        ouch.x=300;
    }
     
    if(ouch.x<player.x+player.bodywidth && ouch.x>player.x-player.bodywidth && ouch.y>player.y+player.rad && ouch.y<player.y+player.rad+player.bodyheight)
    {
        if(life>0){
            life-=50;
            if(life<0)
                life=0;
        }
            
        ouch.x=300;
    }
}

function drawBttn(){ //배지어곡선으로 타원의 버튼 만들기
    var x=100;
    var y=300;
    context.beginPath();
    context.fillStyle='#dcf6ff';
    context.strokeStyle='#dcf6ff';
    
    context.arc(x, y, 20, Math.PI , Math.PI*3/1 );
    context.fill(); 
    context.stroke();

    context.beginPath();
    context.arc(x+350, y, 20, Math.PI , Math.PI*3/1 );
    context.fill(); 
    context.stroke();
    
    context.font ='14px Helvetica';
    context.fillStyle='#020202';
    context.fillText("Jump",x-16,y+2);   
    context.fillText("Slide",x+334,y+2);   
 
}

function update(){
  if(jump==1)
    {if(player.y>50)
        player.y-=2;
    else if(player.y==50){
    jump=2;  }
}
if(jump==2){
    if(player.y<180)
         player.y+=2;
    else if(player.y==180){
        jump=0;
        }
}
}
 