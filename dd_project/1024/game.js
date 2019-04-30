/**
 * Created by leon on 2017/8/10.
 */
var data = []; //记录数据
var score = 0;

function start() {
    // 初始化
    data = [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]];

    // 随机赋予两个格子数值
    createRandomNum();
    createRandomNum();
    updateView();
}

// 判断格子是否被占满
function isFull() {
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if (data[row][col] == 0) {
                return false;
            }
        }
    }
    return true;
}

function createRandomNum() {
    if (isFull()) return;

    while(true) { // 所选格有值继续生成随机格，直到找到为0的格子
        var row = Math.floor(Math.random() * 4); // 选取0-3的一个数
        var col = Math.floor(Math.random() * 4);
        if (data[row][col] == 0) {
            //data[row][col] = 2 * Math.ceil(Math.random() * 2);
            if (Math.random() < 0.3) {
                data[row][col] = 4;
            } else {
                data[row][col] = 2;
            }
            break;
        }
    }
}

// 判断能否往左移动,左边为0或者左边等于自身说明可以移动，返回true
function canLeft() {
    for(var row = 0; row < 4; row++) {
        for(var col = 1; col < 4; col++) {
            if(data[row][col] != 0) {
                if(data[row][col-1] == 0 || data[row][col-1] == data[row][col]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 获取当前右侧的值，发现不为0的返回下标，否则返回-1
function getRightIndex(row, col) {
    for(var i = col + 1; i < 4; i++){
        if(data[row][i] != 0){
            return i;
        }
    }
    return -1;
}

// 同行内左移一列
function moveLeftInOneRow(row) {
    for (var col = 0; col < 3; col ++) { //从左往右遍历，除去最右
        var rightCol = getRightIndex(row, col);
        if (rightCol == -1) {
            break;
        } else {
            if (data[row][col] == 0) {
                data[row][col] = data[row][rightCol];
                data[row][rightCol] = 0;
                col--;
            } else if (data[row][col] == data[row][rightCol]) {
                data[row][col] *= 2;
                data[row][rightCol] = 0;
                score +=  data[row][col];
            }
        }

    }
}

function moveLeft() {
    if (canLeft()) {
        for (var row = 0; row < 4; row++) {
            moveLeftInOneRow(row);
        }
        createRandomNum();
        updateView();
    }
}

// 判断能否右移
function canRight() {
    for (var row = 0; row < 4; row++) {
        for (var col = 2; col >= 0; col--) {
            if (data[row][col] != 0) {
                if (data[row][col+1] == 0 || data[row][col+1] == data[row][col]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 获取当前左侧的值，发现不为0的返回下标，否则返回-1
function getLeftIndex(row, col) {
    for (var i = col - 1; i >= 0; i--){
        if (data[row][i] != 0){
            return i;
        }
    }
    return -1;
}

// 同行内右移一列
function moveRightInOneRow(row) {
    for (var col = 3; col > 0; col--) { // 从右往左遍历，除去最左
         var leftCol = getLeftIndex(row, col);
         if (leftCol == -1) {
             break;
         } else {
             if (data[row][col] == 0) {
                 data[row][col] = data[row][leftCol];
                 data[row][leftCol] = 0;
                 col++;
             } else if (data[row][col] == data[row][leftCol]) {
                 data[row][col] *= 2;
                 data[row][leftCol] = 0;
                 score += data[row][col];
             }
         }

    }

}

// 右移
function moveRight() {
    if (canRight()) {
        for (var row = 0; row < 4; row++) {
            moveRightInOneRow(row);
        }
        createRandomNum();
        updateView();
    }
}

// 判断能否上移
function canUp() {
    for (var col = 0; col < 4; col++) {
        for (var row = 1; row < 4; row++) {
            if (data[row][col] != 0) {
                if (data[row-1][col] == 0 || data[row-1][col] == data[row][col]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 查询当前格子下面的值，发现不为0的返回行标，否则返回-1
function getDownIndex(row, col) {
    for (var i = row + 1; i < 4; i++) {
        if (data[i][col] != 0) {
            return i;
        }
    }
    return -1;
}

// 同列内上移
function moveUpInOneColumn(col) {
    for (var row = 0; row < 3; row++) { //从上往下遍历，除去最下
        var downRow = getDownIndex(row, col);
        if (downRow == -1) {
            break;
        } else {
            if (data[row][col] == 0) {
                data[row][col] = data[downRow][col];
                data[downRow][col] = 0;
                row--;
            } else if (data[row][col] == data[downRow][col]) {
                data[row][col] *= 2;
                data[downRow][col] = 0;
                score += data[row][col];
            }
        }
    }
}

function moveUp() {
    if (canUp()) {
        for (var col = 0; col < 4; col++) {
            moveUpInOneColumn(col);
        }
        createRandomNum();
        updateView();
    }
}

// 判断能否下移
function canDown() {
    for (var col = 0; col < 4; col++) {
        for (var row = 2; row >=0 ; row--) {
            if (data[row][col] != 0) {
                if(data[row+1][col] == 0 || data[row+1][col] == data[row][col]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 获取当前上方的值，发现不为0的返回行标，否则返回-1
function getUpIndex(row, col) {
    for (var i = row - 1; i>= 0; i--) {
        if (data[i][col] != 0) {
            return i;
        }
    }
    return -1;
}

function moveDownInOneColumn(col) {
    for (var row = 3; row >0; row--) {
        var upRow = getUpIndex(row, col);
        if (upRow == -1){
            break;
        } else {
            if (data[row][col] == 0) {
                data[row][col] = data[upRow][col];
                data[upRow][col] = 0;
                row++;
            } else if (data[row][col] == data[upRow][col]) {
                data[row][col] *= 2;
                data[upRow][col] = 0;
                score += data[row][col];
            }
        }
    }
}

function moveDown() {
    if (canDown()) {
        for (var col = 0; col < 4; col++) {
            moveDownInOneColumn(col);
        }
        createRandomNum();
        updateView();
    }
}

function updateView() {

    //遍历div
    for(var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            var div = document.getElementById("n" + row + col);
            div.innerHTML = data[row][col] == 0 ? "" : data[row][col];
            div.className = data[row][col] == 0 ? "cell" : "cell n" + data[row][col];
        }
    }
    //写入分数
    var span = document.getElementById("score");
    span.innerHTML = score;
}

window.onload = function() {

    start();
    document.onkeydown = function() {
        var event = window.event;
        if(event.keyCode == 37) {
            moveLeft();
        }else if(event.keyCode == 39) {
            moveRight();
        }
        else if(event.keyCode == 38) {
            moveUp();
        }
        else if(event.keyCode == 40) {
            moveDown();
        }
    }
}




