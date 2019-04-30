/**
 * Created by leon on 2017/8/16.
 */
//animation
var animation = {
    times : 10, // 每个动画分10步完成
    interval : 10, // 每一步用10毫秒
    timer : null,
    tasks : [], // 保存每次移动的任务

    addTask : function (source, target) {
        var sourceDiv = document.getElementById(source);
        var targetDiv = document.getElementById(target);
        var sourceStyle = getComputedStyle(sourceDiv);
        var targetStyle = getComputedStyle(targetDiv);
        var topStep = (parseInt(targetStyle.top) - parseInt(sourceStyle.top)) / this.times;
        var leftStep = (parseInt(targetStyle.left) - parseInt(sourceStyle.left)) / this.times;
        var task = new Task(sourceDiv, topStep, leftStep);
        this.tasks.push(task);
    },

    start : function () {
        this.timer = setInterval(function () {
            for (var i = 0; i < animation.tasks.length; i++) {
                animation.tasks[i].moveStep();
            }
            animation.times--;
            if (animation.times == 0) {
                for (var i = 0; i < animation.tasks.length; i++) {
                    animation.tasks[i].clear();
                }
                clearInterval(animation.timer);
                animation.timer = null;
                animation.tasks = [];
                animation.times = 10;
            }
        }, this.interval);
    }
}

function Task(obj, topStep, leftStep) {
    this.obj = obj;
    this.topStep = topStep;
    this.leftStep = leftStep;
}

Task.prototype.moveStep = function () {
    var style = getComputedStyle(this.obj);
    var top = parseInt(style.top);
    var left = parseInt(style.left);
    this.obj.style.top = top + this.topStep + "px";
    this.obj.style.left = left + this.leftStep + "px";
};

Task.prototype.clear = function () {
    this.obj.style.top = "";
    this.obj.style.left = "";
};