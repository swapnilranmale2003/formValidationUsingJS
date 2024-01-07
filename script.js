function mydata()
    {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    
    if(a==""||b==""||c==""||d=="")
    {
        alert("All fields are required");
        return false;
    }
    else if(b>10||b<10){
        alert("enter 10 digit mobile number");
        return false;
    }
    else if(isNaN(b)){
        alert("Dont allowed character");
        return false;
    }
    else if(c!=d)
    {
        alert("Enter correct password");
        return false;
    }
    else{
        true;
    }


    }
