function login()
{ var x=document.getElementById("p1").value;
    var y=document.getElementById("p2").value;
    var logtype=document.getElementById("dd").value;
    if(logtype=="admin")
    {
    if( (x=="admin") && (y=="12345") )
    { alert("Admin Login Successfull!! Directing to Landing Page");
        document.location.href="index.html";
    } 
else
    {document.getElementById("err").style.display="block";}
}

if(logtype=="user")
    {
    if( (x=="user") && (y=="user123") )
    { alert("User Login Successfull!! Directing to Landing Page");
        document.location.href="book.html";
    } 
else
    {document.getElementById("err").style.display="block";}
}
}
function hide()
{
    document.getElementById("err").style.display="none";
}