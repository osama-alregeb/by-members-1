y = 0;
function dlll() {

    x =document.getElementById('cost').value ;
    y =x*'1.01'+z;
    document.getElementById("opc").innerHTML = y ;


}
function showdata() {
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var a4 = document.getElementById('a4');
    var a5 = document.getElementById('a5');

    var l1 = document.getElementById('l1');
    var l2 = document.getElementById('l2');
    var l3 = document.getElementById('l3');
    var l4 = document.getElementById('l4');
    var l5 = document.getElementById('l5');
    var back = document.getElementById('back');
    var go = document.getElementById('go');




    var wringmsg =document.getElementById('wringmsg');
    // ---
    var s1 = document.getElementById('s1').value
    var s2 = document.getElementById('s2').value
    var ran = document.getElementById('ran').value
    var cost = document.getElementById('cost').value
    var opc = document.getElementById('opc').value
    l1.innerHTML =s1 ;
    l2.innerHTML =s2 + " days";
    l3.innerHTML =ran ;
    l4.innerHTML =cost ;
    l5.innerHTML =y + " $";
    if (s1==='' || s2 ===''  || ran===''  || cost===''  || opc===''){

        l1.style.display='none';
        l2.style.display='none';
        l3.style.display='none';
        l4.style.display='none';
        l5.style.display='none';
        go.style.display='none';
        back.style.display='none';

        a1.style.display='none';
        a2.style.display='none';
        a3.style.display='none';
        a4.style.display='none';
        a5.style.display='none';


        wringmsg.style.display='block';
        setTimeout(function () {
            location.reload();
        } ,3000)
    }
}

function dm() {
    rank = document.getElementById('ran').value;
    if  (rank =='normal'){
        z=10
    }
    else if (rank =='selvier'){
        z=20
    }
    else if (rank =='gold'){
        z=30
    }
    else if (rank =='dimoand'){
        z=40
    }
    document.getElementById("opc").innerHTML = y ;
}
function dep() {
    setTimeout(function(){
        document.getElementById('ran').style.display="none";
        document.getElementById('h1').style.display="block";
    },1000);
}
function done() {
    document.getElementById('pack1').style.display ='none';
    document.getElementById('succses').style.display ='block';
}
var message="item shop"
var message=message+"          "
i="0"
var temptitle=""
var speed="220"

function titler(){
    if (!document.all&&!document.getElementById)
        return
    document.title=temptitle+message.charAt(i)
    temptitle=temptitle+message.charAt(i)
    i++
    if(i==message.length)
    {
        i="0"
        temptitle=""
    }
    setTimeout("titler()",speed)
}

window.onload=titler



function opentap() {
    myWindow = window.open("payed.html", "_center", "width=1350, height=650");

}
