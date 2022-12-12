let cells = ["", "", "", "", "", "", "", "", ""];
let WinningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
createCells();

function createCells() {
    for (let i = 0; i < 9; ++i) {
        let cell = document.createElement("cell");
        Object.assign(cell, {
            classList: "cells",
            innerHTML: "&nbsp",
            id: i,
            onclick: () => markcell(i),
        });
        document.getElementById("gamePage").appendChild(cell);
    }
}
let evenOrodd = 0;

function markcell(id) {
    if (evenOrodd % 2 == 0) {
        document.getElementById(id).innerHTML = "X";
        cells[id] = "X";
        compareAndcheck("X");
        ++evenOrodd;
    } else {
        document.getElementById(id).innerHTML = "0";
        cells[id] = "0";
        compareAndcheck("0");
        ++evenOrodd;
    }
    document.getElementById(id).onclick = null;
}

function compareAndcheck(winner) {
  for (let i = 0; i < WinningCombination.length; ++i) {
    let leftCell = cells[WinningCombination[i][0]];
    let middleCell = cells[WinningCombination[i][1]];
    let rightCell = cells[WinningCombination[i][2]];
    if (leftCell === middleCell && middleCell === rightCell && rightCell !== "") {
      printMessage(winner);
      break;
    }
    if (evenOrodd == 8) {
      printMessage("DRAW");
    }
  }
}

function printMessage(rezult) {
    if (rezult == "DRAW") {
        document.getElementById("finalMessage").textContent = "DRAW";
    } else {
        document.getElementById("finalMessage").textContent =
            "PLAYER " + rezult + " WINS";
    }
    document.getElementById("endAndreset").style = "display:block";
}

function resetGame() {
    document.location.reload();
}