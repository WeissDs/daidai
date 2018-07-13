function CurentTime()  
    {   
        var now = new Date();  
          
        var year = now.getFullYear();       //年  
        var month = now.getMonth() + 1;     //月  
        var day = now.getDate();            //日  
          
        var hh = now.getHours();            //时  
        var mm = now.getMinutes();          //分  
        var ss = now.getSeconds();           //秒  
          
        var clock = year + "-";  
          
        if(month < 10)  
            clock += "0";  
          
        clock += month + "-";  
          
        if(day < 10)  
            clock += "0";  
              
        clock += day + " ";  
          
        if(hh < 10)  
            clock += "0";  
              
        clock += hh + ":";  
        if (mm < 10) clock += '0';   
        clock += mm + ":";   
           
        if (ss < 10) clock += '0';   
        clock += ss;   
        return(clock);   
}  
  
 alert(CurentTime());  

dateObj.getTime()得到时间戳,  
dateObj.getYear()得到年份,  
dateObj.getFullYear()得到四位的年份,  
dateObj.getMonth()得到月份,  
dateObj.getDate()得到日,  
dateObj.getDay()得到日期几,  
dateObj.getHours()得到小时,  
dateObj.getMinutes()得到分,  
dateObj.getSeconds()得到秒,  
dateObj.setTime(value)设置时间,  
dateObj.setYear(val)设置年,  
dateObj.setMonth(val)设置月,  
dateObj.setDate(val)设置日,  
dateObj.setDay(val)设置星期几,  
dateObj.setHours(val)设置小时,  
dateObj.setMinutes(val)设置分,  
dateObj.setSeconds(val)设置秒 [注意:此日期时间从0开始计]