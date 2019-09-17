
function signup() {
    <!-- name -->
    var fname = document.getElementById("FName").value;
    var lname = document.getElementById("LName").value;
    var email = document.getElementById("Email").value;
    var town = document.getElementById("HTown").value;
    var major = document.getElementById("Major").value;
    returner = true;
    <!-- check if items are blank -->
    if(fname==''){alert("you are missing some information"); returner=false;}
    if(lname==''){alert("you are missing some information"); returner=false;}
    if(email==''){alert("you are missing some information"); returner=false;}
    if(town==''){alert("you are missing some information"); returner=false;}
    if(major==''){alert("you are missing some information"); returner=false;}
    <!-- check if first name has a number in it -->
    for (x = 0; x < fname.length; x++) {
        var lett = fname[x];
        ta = true;
        for(y = 0; y<=9;y++){
            if (lett == y) {
                alert("you have something wrong in your first name");
                returner=false;
                ta =false;}
        }
        if (ta==false){break;
            }
    }

    <!-- check if last name has a number in it -->
    for (x = 0; x < lname.length; x++) {
        var lett = lname[x];
        ta = true;
        for(y = 0; y<=9;y++){
            if (lett == y) {
                alert("you have something wrong in your Last name");
                returner=false;
                ta =false;}
        }
        if (ta==false){break;
            }
    }
    <!-- check if email is vaild-->
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        alert("You have entered an invalid email address!")
        returner=false;
    }

    if (returner == true){ alert('your form is validated');}

}






function cancel() {
    window.document.getElementById("FName").value = "";
    window.document.getElementById("LName").value = "";
    window.document.getElementById("HTown").value = "";
    window.document.getElementById("Major").value = "";
    window.document.getElementById("Email").value = "";

}

