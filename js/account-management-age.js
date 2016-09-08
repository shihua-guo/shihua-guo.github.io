// JavaScript Document
function YMDstart()   
   {   
           MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
    
           //先给年下拉框赋内容   
           var y  = new Date().getFullYear();   
           for (var i = y; i > (y-101); i--) //以今年为准，前30年，后30年   
                   document.reg_testdate.year.options.add(new Option(" "+ i +" 年", i));   
    
           //赋月份的下拉框   
           for (var i = 1; i < 13; i++)   
                   document.reg_testdate.month.options.add(new Option(" " + i + " 月", i));   
    
           document.reg_testdate.year.value = y;   
           document.reg_testdate.month.value = new Date().getMonth() + 1;   
           var n = MonHead[new Date().getMonth()];  
           
            
           if (new Date().getMonth() ==1 && IsPinYear(yearvalue)) n++;   
                writeDay(n); //赋日期下拉框Author:meizz   
           document.reg_testdate.day.value = new Date().getDate();   
   }   
   if(document.attachEvent)   
       window.attachEvent("onload", YMDstart);   
   else   
       window.addEventListener('load', YMDstart, false);   
   function yearDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
   {   
           var monthvalue = document.reg_testdate.month.options[document.reg_testdate.month.selectedIndex].value;   
           if (monthvalue == ""){ var e = document.reg_testdate.day; optionsClear(e); return;}   
           var n = MonHead[monthvalue - 1];   
           if (monthvalue ==2 && IsPinYear(str)) n++;   
                writeDay(n)   
   }   
   function monthDD(str)   //月发生变化时日期联动   
   {   
        var yearvalue = document.reg_testdate.year.options[document.reg_testdate.year.selectedIndex].value;   
        if (yearvalue == ""){ var e = document.reg_testdate.day; optionsClear(e); return;}   
        var n = MonHead[str - 1];   
        if (str ==2 && IsPinYear(yearvalue)) n++;   
       writeDay(n)   
   }   
   function writeDay(n)   //据条件写日期的下拉框   
   {   
           var e = document.reg_testdate.day; optionsClear(e);   
           for (var i=1; i<(n+1); i++)   
                e.options.add(new Option(" "+ i + " 日", i));   
   }   
   function IsPinYear(year)//判断是否闰平年   
   {     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
   function optionsClear(e)   
   {   
        e.options.length = 1;   
   }   