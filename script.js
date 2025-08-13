

let colseq=[];
let userseq=[];
score=0;
boxtl=document.querySelector(".boxtl")

boxtr=document.querySelector(".boxtr")

boxbl=document.querySelector(".boxbl")

boxbr=document.querySelector(".boxbr")

let array=[boxtl,boxtr,boxbl,boxbr];

let h3=document.querySelector("h3")

let allbtn=document.querySelectorAll("button")

 start=false;
 level=0;

document.addEventListener("keypress",function () {
    if(start==false){
    console.log("game started")}
    start=true;
    flash_levelup();
    
    
})

function flashing() {
    setTimeout(function(){
        randcol.classList.remove("flash")

    },300)
    
}
function btn_press() {
    
    
       
            this.classList.add("flash")
            that=this
            setTimeout(function () {
                that.classList.remove("flash")
                
            },300)
            userseq.push(this)
           console.log(userseq)
           checkAns()
            
            
      
    }
  
function flash_levelup() {
    level++;
    h3.innerText=`LEVEL ${level}`;

    let randomno=Math.floor(Math.random()*array.length);
    randcol=array[randomno]
    randcol.classList.add("flash")
   
    flashing();
     colseq.push(randcol);
     console.log(colseq)
    
   
    
   
}


for (const btn of allbtn) {
    btn.addEventListener("click",btn_press)
    
}
function gameover() {
    document.body.classList.add("incor")
    setTimeout(() => {
        document.body.classList.remove("incor")
        
    }, 300);
    colseq=[]
    userseq=[]
    start=false
    h3.innerText="Press again any key"
    level=0;
    score=0;
    
    
    
}

function checkAns() {
    idx=userseq.length-1;
    if(userseq[idx]!=colseq[idx]){
        console.log("incorrect")
        gameover()

    }
    else{
        console.log("correct")
    }
    if(userseq.length==colseq.length){
        userseq=[]
        score++;
       x= document.createElement("p")
       x.innerText=score
        h3.appendChild(x)
        
    }
    
}




