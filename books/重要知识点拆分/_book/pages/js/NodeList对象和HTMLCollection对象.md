####以下方法获取的为HTMLCollection对象

    document.images //所有img元素
    document.links //所有带href属性的a元素和area元素
    document.anchors //所有带name属性的a元素
    document.forms //所有form元素
    document.scripts //所有script元素
    document.applets //所有applet元素
    document.embeds //所有embed元素
    document.plugins //document.与embeds相同
    document.getElementById("table").children
    document.getElementById("table").tBodies
    document.getElementById("table").rows
    document.getElementById("row").cells
    document.getElementById("Map").areas
    document.getElementById("f2").elements //HTMLFormControlsCollection extends HTMLCollection
    document.getElementById("s").options //HTMLOptionsCollection extends HTMLCollection


####以下方法获取的为NodeList对象.

        document.getElementsByName("name1")
        document.getElementsByClassName("class1")  
        document.getElementsByTagName("a")
        document.querySelectorAll("a")
        document.getElementById("table").childNodes
        document.styleSheets //StyleSheetList，与NodeList类似
