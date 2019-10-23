function showInput()
{
  var  coa = document.getElementById('coa').value;
  if(coa >100 || coa<0)
  {
    window.alert("invalid marks");
  }
else if(coa>=90)
{
   document.getElementById("coa grade").innerHTML="S+";
   c1=10;
}
else if(coa>=80)
{
   document.getElementById("coa grade").innerHTML="S";
   c1=9;
}
else if(coa>=70)
{
   document.getElementById("coa grade").innerHTML="A";
   c1=8;
}
else if(coa>=60)
{
   document.getElementById("coa grade").innerHTML="B";
   c1=7;
}
else if(coa>=50)
{
   document.getElementById("coa grade").innerHTML="C";
   c1=6;
}
else if(coa<50)
{
   document.getElementById("coa grade").innerHTML="D";
   c1=5;
}
   

  
  var  ds = document.getElementById('ds').value;
  if(ds >100 || ds<0)
  {
    window.alert("invalid marks");
  }
else if(ds>=90)
{
   document.getElementById("ds grade").innerHTML="S+";
   d1=10;
}
else if(ds>=80)
{
   document.getElementById("ds grade").innerHTML="S";
   d1=9;
}
else if(ds>=70)
{
   document.getElementById("ds grade").innerHTML="A";
   d1=8;
}
else if(ds>=60)
{
   document.getElementById("ds grade").innerHTML="B";
   d1=7;
}
else if(ds>=50)
{
   document.getElementById("ds grade").innerHTML="C";
   d1=6;
}
else if(ds<50)
{
   document.getElementById("ds grade").innerHTML="D";
   d1=5;
}



var  me = document.getElementById('me').value;
  if(me >100 || me<0)
  {
    window.alert("invalid marks");
  }
else if(me>=90)
{
   document.getElementById("me grade").innerHTML="S+";
   m1=10;
}
else if(me>=80)
{
   document.getElementById("me grade").innerHTML="S";
   m1=9;
}
else if(me>=70)
{
   document.getElementById("me grade").innerHTML="A";
   m1=8;
}
else if(me>=60)
{
   document.getElementById("me grade").innerHTML="B";
   m1=7;
}
else if(me>=50)
{
   document.getElementById("me grade").innerHTML="C";
   m1=6;
}
else if(me<50)
{
   document.getElementById("me grade").innerHTML="D";
   m1=5;
}



var  java = document.getElementById('java').value;
  if(java >100 || java<0)
  {
    window.alert("invalid marks");
  }
else if(java>=90)
{
   document.getElementById("java grade").innerHTML="S+";
   j1=10;
}
else if(java>=80)
{
   document.getElementById("java grade").innerHTML="S";
   j1=9;
}
else if(java>=70)
{
   document.getElementById("java grade").innerHTML="A";
   m1=8;
}
else if(java>=60)
{
   document.getElementById("java grade").innerHTML="B";
   j1=7;
}
else if(java>=50)
{
   document.getElementById("java grade").innerHTML="C";
   m1=6;
}
else if(java<50)
{
   document.getElementById("java grade").innerHTML="D";
   j1=5;
}



var  math = document.getElementById('math').value;
  if(math >100 || math<0)
  {
    window.alert("invalid marks");
  }
else if(math>=90)
{
   document.getElementById("math grade").innerHTML="S+";
   m2=10;
}
else if(math>=80)
{
   document.getElementById("math grade").innerHTML="S";
   m2=9;
}
else if(math>=70)
{
   document.getElementById("math grade").innerHTML="A";
   m2=8;
}
else if(math>=60)
{
   document.getElementById("math grade").innerHTML="B";
   m2=7;
}
else if(math>=50)
{
   document.getElementById("math grade").innerHTML="C";
   m2=6;
}
else if(math<50)
{
   document.getElementById("math grade").innerHTML="D";
   m2=5;
}

  cgpa=(m1+c1+j1+d1+m2)/5;
  document.getElementById("result").innerHTML=cgpa;
}