let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winpatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// const resetgame = () => {
//   window.location.reload();
// };

const resetgame = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  turn0 = true;
  msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disablebtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkwinner = () => {
  for (pattern of winpatters) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner");
        show_winner(pos1);
        disablebtns();
      }
    }
  }
};

const show_winner = (winner) => {
  msg.innerText = `Congratulations! The winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};
