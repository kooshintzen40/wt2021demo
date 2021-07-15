

const COLS = 7;
const ROWS = 6;
var Player1Color = 'red';
var Player2Color = 'yellow';

var tabelRow = document.getElementsByTagName("tr")
var tabelCell = document.getElementsByTagName("td")
console.log(tabelCell)

function createPlayingField(){
    var table = document.getElementById("playingField"); 
    for(i = 0; i < ROWS; i++){
        let row = document.createElement("tr")
        row.id = i;
        table.append(row);
        for(j = 0; j <COLS; j++){
            let cell = document.createElement("td")
            cell.id = j;
            cell.className = "cells";
            row.appendChild(cell);
        }
    }
};


function hoverfunction(){
    for(i = 0; i < tabelCell.length; i++){
        tabelCell[i].addEventListener('mouseover', function(e){
            var cIndex = e.target.cellIndex;
            for(j = cIndex; j < cIndex+tabelCell.length; j += COLS){
                tabelCell[j].style.backgroundColor = 'yellow';
            }
        })
        tabelCell[i].addEventListener('mouseout', function(e) {
            var cIndex = e.target.cellIndex;
            for(j = cIndex; j < cIndex+tabelCell.length; j += COLS){
                tabelCell[j].style.backgroundColor = 'white';
            }
        })
    }
}

function changeColor() {
    
    for(i = 0; i < tabelCell.length ; i++){
        
        tabelCell[i].addEventListener('click', function(e){
            var rIndex = e.target.parentElement.rowIndex;
            var cIndex = e.target.cellIndex;
            console.log(tabelRow[rIndex])
            console.log(rIndex, cIndex)
         })
    }
}

$(document).ready(function(){
    createPlayingField();
    hoverfunction();
    //changeColor();

});
     

 