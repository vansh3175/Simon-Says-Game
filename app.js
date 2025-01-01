let game=[];
let user=[];
let btnColors=['primary','success','danger','warning'];
let Highest=0;
let started=false;

let level=0;
let body=document.querySelector('body');

function randCol(){
    let c = Math.floor(Math.random()*4);
    return c;
}
function flash(btn){
    
    setTimeout(()=>{
        btn.classList.add('flash');
        setTimeout(function(){
            btn.classList.remove('flash');
        },200);
    
    },300);
}
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },200);

}
function levelUp(){
    level++;
    let h2=document.querySelector('h2');
    h2.innerText=`Level ${level}`;
    
    let idx=randCol();
    let color=btnColors[idx];
    let btn=document.querySelector(`.${color}`);
    flash(btn)
    game.push(color);

}
function resetf(){
    game=[];
    user=[];
    started=false;
    level=0;
}
function check(idx){
    if(user[idx]==game[idx]){
        if(game.length==idx+1){
            levelUp();
            user=[];
        }
        
    }
    else{
        let h2=document.querySelector('h2');
        let high=document.querySelector('#High');
        Highest=Math.max(level-1,Highest);
        high.innerHTML=`Highest Score : &nbsp; ${Highest} `;
        h2.innerHTML=`<b> Game Over! Your score was : ${level-1} </b>  <br> Press any key to start again`;
        resetf();
        
    }


}
function btnpress(){
    
   if(started){
    userFlash(this);
    let color=this.getAttribute('id');
    
    user.push(color);
    check(user.length-1);
   }
    
    
}

body.addEventListener('keypress',function(){
    if(!started){
        started=true;
        levelUp();
    }
})


let start=document.querySelector('#start');
start.addEventListener('click',()=>{
    if(!started){
        started = true;
        levelUp();
    }
})
let reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
    resetf();
    let h2=document.querySelector('h2');
    h2.innerText="Press any key to start";
})
let allbtn=document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener('click',btnpress);

}