window.onload=function () {





    for(i=0;i<100;i++){
        let w=Math.floor(Math.random()*30+30);
        let top1=Math.floor(Math.random()*(innerHeight-w));
        let left=Math.floor(Math.random()*(innerWidth-w));


        div= document.createElement("div");
        div.classList.add("box");
        div.style.top=top1+"px";
        div.style.left=left+"px";
        div.style.width=w+"px";
        div.style.height=w+"px";
        div.style.backgroundColor=bianse(div);

        document.body.appendChild(div);



    }










    function bianse() {
        let sui1=parseInt(Math.random()*256);
        let sui2=parseInt(Math.random()*256);
        let sui3=parseInt(Math.random()*256);
        let rgb="rgb("+sui1+","+sui2+","+sui3+")"
        return(rgb);
        console.log(rgb);
    }




        let box=document.querySelectorAll(".box");
        let Rheight=box.offsetHeight;
        let Rwidth=box.offsetWidth;

        let boxH=box.offsetTop;
        let boxW=box.offsetLeft;

        let newH=innerHeight;
        let newW=innerWidth;
        console.log(newH,newW);

        let speedY=10;
        let speedX=10;
        setInterval(float,40);

        function float(){
            boxH=boxH+speedY;
            boxW=boxW+speedX;
            // box.style.top = boxH+"px";
            // box.style.left = boxW+"px";
            console.log(boxH,boxW);

            if(boxH>=newH-Rheight){
                speedY*=-1;
            }
            if(boxH<=0){
                speedY*=-1;
            }
            if(boxW>=newW-Rwidth){
                speedX*=-1;
            }
            if(boxW<=0){
                speedX*=-1;
            }


        }









}