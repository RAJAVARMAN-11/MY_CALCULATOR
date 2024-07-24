var a="";
let p=document.getElementById("dis");
const a1=document.getElementById("one");
const a2=document.getElementById("two");
const a3=document.getElementById("three");
const b1=document.getElementById("add");
const a4=document.getElementById("four");
const a5=document.getElementById("five");
const a6=document.getElementById("six");
const b2=document.getElementById("sub");
const a7=document.getElementById("seven");
const a8=document.getElementById("eight");
const a9=document.getElementById("nine");
const b3=document.getElementById("mul");
const a0=document.getElementById("zero");
const b4=document.getElementById("equal");
const b5=document.getElementById("clc");
const b6=document.getElementById("div");

a1.onclick=function()
{   a+="1";
    document.getElementById("dis").textContent=a;
}
a2.onclick=function()
{   a+="2";
    document.getElementById("dis").textContent=a;
}
a3.onclick=function()
{   a+="3";
    document.getElementById("dis").textContent=a;
}
a4.onclick=function()
{   a+="4";
    document.getElementById("dis").textContent=a;
}
a5.onclick=function()
{   a+="5";
    document.getElementById("dis").textContent=a;
}
a6.onclick=function()
{   a+="6";
    document.getElementById("dis").textContent=a;
}
a7.onclick=function()
{   a+="7";
    document.getElementById("dis").textContent=a;
}
a8.onclick=function()
{   a+="8";
    document.getElementById("dis").textContent=a;
}
a9.onclick=function()
{   a+="9";
    document.getElementById("dis").textContent=a;
}
a0.onclick=function()
{   a+="0";
    document.getElementById("dis").textContent=a;
}
clc.onclick=function()
{
    a=a.substring(0,a.length-1);
    p.textContent=a;
}
var e="";
b1.onclick=function()
{  
    if(a.length==0)
    {
        window.alert("cant use operstor first");
    }
    else{

    a+="+";
    p.textContent=a;
    }
}
b2.onclick=function()
{  
    if(a.length==0)
        {
            window.alert("cant use operstor first");
        }
        else{
    a+="-";
    p.textContent=a;
        }
}
b3.onclick=function()
{   if(a.length==0)
    {
        window.alert("cant use operstor first");
    }
    else{
    a+="*";
    p.textContent=a;
    }
}
b4.onclick=function()
{
    if(a.length==0)
        {
            window.alert("cant use operstor first");
        }
        else
        {
          
 let final=0;
let temp="";
var fun="";
 for(let i=0;i<a.length;i++)
         {
            var ch=a.charAt(i);
            if(ch!='+'&&ch!='*'&&ch!='/'&&ch!='-')
            {
               temp+=ch;
               //console.log(temp);
            if(i==a.length-1)
            {  
                
                if(fun=="+")
                {
                    final+=Number(temp);
                }
                else if(fun=="-")
                {
                    final-=Number(temp);
                }
                else if(fun=="*")
                {
                    final*=Number(temp);
                }
                else if(fun=="/")
                {
                    final/=Number(temp);
                }
            }
            }
            else
            {
                 if(fun=="+")
                 {
                    final+=Number(temp);
                    //console.log(final);
                    temp="";
                 }
                 else if(fun=="-")
                 {
                    final-=Number(temp);
                    temp="";
                 }
                 else if(fun=="*")
                 {
                    final*=Number(temp);
                    //console.log(final);
                    temp="";
                 }
                 else if(fun=="/")
                 {
                    final/=Number(temp);
                    temp="";
                 }
                 else{
                    final=Number(temp);
                    temp="";
                 }
                 fun="";
                 fun+=ch;
                 temp="";
                 
                 

            }
         }
         document.getElementById("ans").textContent=final;
         
        
        }
}
b6.onclick=function()
{  if(a.length==0)
    {
        window.alert("cant use operstor first");
    }
    else{
    a+="/";
    p.textContent=a;
    }
}
document.getElementById("clc_but").onclick=function()
{
    p.textContent="";
    a="";
    document.getElementById("ans").textContent="";
}