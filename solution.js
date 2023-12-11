let boxes= document.querySelectorAll(".box");
let reset=document.querySelector('#reset-btn');
let newGame=document.querySelector('#new-game');
let msgContainer=document.querySelector('.msg-container')
let msg = document.querySelector('.msg')
let count=0

const winner =[
  [0,1,2],
  [0,3,6],
  [0,4,8],

  [1,4,7],
  [2,5,8],
  [2,4,6],

  [3,4,5],
  [6,7,8],
];
let turn=0;
 boxes.forEach((box)=>{
  box.addEventListener('click', ()=>{
    if(turn){
      box.innerText="X";
      turn=0;
    }else{
      turn=1;
      box.innerText="O"
    }
    box.disabled = true;
    count++
    if (count===9){
      count=0;
      msg.innerText= `The Game is draw` 
      msgContainer.classList.remove('hide');
      
    }
    checkWinner();
  })
 })


const resetGame =()=>{
  turn=0;
  count=0;
  enableBoxes();
  msgContainer.classList.add('hide');
}

const enableBoxes =()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerText=""
  }
}

const disableBtn= ()=>{
  for (let box of boxes){
    box.disabled=true;
  }
}
const showWinner= (winner)=>{
  count=0;
  msg.innerText= `Winner is ${winner}` 
  msgContainer.classList.remove('hide');
  
}
const checkWinner = ()=>{
  for (let win of winner){
    let pos1=boxes[win[0]].innerText;
    let pos2=boxes[win[1]].innerText;
    let pos3=boxes[win[2]].innerText;

    if (pos1!=="" && pos2!=="" && pos3!==""){
      if (pos1===pos2 && pos2===pos3){
        document.getElementsByClassName('.winner-msg').innerText+=pos1;
        showWinner(pos1);
      }
    }
  }
 };

 newGame.addEventListener('click',resetGame);
 reset.addEventListener('click',resetGame);
