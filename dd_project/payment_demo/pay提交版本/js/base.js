	document.removeEventListener('scroll', this.scrollFun, false)
    window.onresize = function () {
      document.documentElement.style.fontSize = document.documentElement.clientWidth * 100 / 720 + 'px'
    }
    window.onload = function () {
      window.onresize()
        // 阻止safari缩放页面
        // 阻止双击放大
        var lastTouchEnd = 0;
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        });
        document.addEventListener('touchend', function(event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // 阻止双指放大
        document.addEventListener('gesturestart', function(event) {
            event.preventDefault();
        });
    }
    window.onresize()
