const vardaytoday = document.getElementById('daytoday');
const varhourdiv = document.getElementById('hourdiv');
const varminutediv = document.getElementById('minutediv');
const varsecdiv = document.getElementById('secdiv');
const varampmdiv = document.getElementById('ampmdiv');
const vardivtodaydate = document.getElementById('divtodaydate');
const vardivmonth = document.getElementById('divmonth');
const vardivyear = document.getElementById('divyear');
const varspannexthour = document.getElementById('spannexthour');

function currentdatetime(){
    const d = new Date();
    let currdate = d.getDate();
    let currmonth = d.getMonth();
    let curryear = d.getFullYear();
    let currday = d.getDay();
    let currhour = d.getHours();
    let currminute = d.getMinutes();
    let currsecond = d.getSeconds();
    // alert(currsecond);

    const daytodayfn = function(){
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let day = days[currday];
        return day;
    }
    vardaytoday.innerText = daytodayfn();

    function fncurrenttime(){
        if(currhour==0){
            currhour = 12;
        }
        if(currhour==0 && currminute>0){
            varampmdiv.innerText = "a.m"
        }
        if(currhour==12 && currsecond>0){
            varampmdiv.innerText = "p.m"
        }
        if(currhour>12){
            currhour = currhour-12;
            varampmdiv.innerHTML = "p.m";
        }
        else{
            varampmdiv.innerHTML = "a.m";
        }

        currhour < 10 ? varhourdiv.innerText = "0" + currhour : varhourdiv.innerText = currhour;
        currminute < 10 ? varminutediv.innerText = "0" + currminute : varminutediv.innerText = currminute;
        currsecond < 10 ? varsecdiv.innerText = "0" + currsecond : varsecdiv.innerText = currsecond;
    }
    fncurrenttime();

    function fncurrentdate(){
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let month = months[currmonth];
        vardivtodaydate.innerText = currdate;
        vardivmonth.innerText = month;
        vardivyear.innerText = curryear;
    }
    fncurrentdate();

    /*function fnnextday(){
        let nexthour = 24 - currhour;
        let nextminute = 60 - currminute;
        let nextsecond = 60 - currsecond;
        varspannexthour.innerText = " " +nexthour+" "+"hours"+" "+nextminute+" "+"minutes"+" "+nextsecond+" "+"seconds";
    }
    fnnextday();*/

    setTimeout(currentdatetime, 1000);
}
currentdatetime();

