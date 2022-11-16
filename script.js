let cells = ["", "", "", "", "", "", "", "", ""];

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
    if (
        (cells[0] == cells[1] && cells[1] == cells[2] && (cells[2] == "X" || cells[2] == "0")) ||
        (cells[3] == cells[4] && cells[4] == cells[5] && (cells[5] == "X" || cells[5] == "0")) ||
        (cells[6] == cells[7] && cells[7] == cells[8] && (cells[8] == "X" || cells[8] == "0")) ||
        (cells[0] == cells[3] && cells[3] == cells[6] && (cells[6] == "X" || cells[6] == "0")) ||
        (cells[1] == cells[4] && cells[4] == cells[7] && (cells[7] == "X" || cells[7] == "0")) ||
        (cells[2] == cells[5] && cells[5] == cells[8] && (cells[8] == "X" || cells[8] == "0")) ||
        (cells[0] == cells[4] && cells[4] == cells[8] && (cells[8] == "X" || cells[8] == "0")) ||
        (cells[2] == cells[4] && cells[4] == cells[6] && (cells[6] == "X" || cells[6] == "0"))
    ) {
        document.getElementById("finalMessage").textContent =
            "PLAYER " + winner + " WINS";
        document.getElementById("endAndreset").style = "display:block";
    } else {
        let emptyCells = 0;
        for (let i = 0; i <= 8; ++i) {
            if (cells[i] == "") {
                ++emptyCells;
            }
        }
        if (emptyCells == 0) {
            document.getElementById("finalMessage").textContent = "DRAW";
            document.getElementById("endAndreset").style = "display:block";
        }
    }
}
function resetGame() {
    document.location.reload();
}
