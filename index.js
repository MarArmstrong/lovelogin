function changeImage() {
      if (document.getElementById("imgClickAndChange").class === "check")
       {
          document.getElementById("imgClickAndChange").src ="Gallery/Checkbox-on.png";
          document.getElementById("imgClickAndChange").class = "uncheck"
        }
else
          {
        document.getElementById("imgClickAndChange").src ="Gallery/Checkboxoff.png";
        document.getElementById("imgClickAndChange").class = "check"
    }
}

function showx(){
  if (document.getElementById("cleartext").style.visibility = "hidden")
  {
      document.getElementById("cleartext").style.visibility = "visible";
    }
}
function clearField(){
  if (document.getElementById("userN").value != null)
  {
    document.getElementById("userN").value = null;
    document.getElementById("cleartext").style.visibility = "hidden"
  }
}

function showxemail(){
  if (document.getElementById("clearmail").style.visibility = "hidden")
  {
      document.getElementById("clearmail").style.visibility = "visible";
    }
  }

function clearMail(){
  if (document.getElementById("email").value != null)
  {
    document.getElementById("email").value = null;
    document.getElementById("clearmail").style.visibility = "hidden"
  }
}


function showPass(){
  if (document.getElementById("id-password").type === "password")
  {
    document.getElementById("id-password").type = "text";
    document.getElementById("togglePassword").src = "Gallery/view.png";
  }
  else  {
    document.getElementById("id-password").type = "password";
    document.getElementById("togglePassword").src = "Gallery/visible.png";
  }
}

function showRePass(){
  if (document.getElementById("myInput2").type === "password")
  {
    document.getElementById("myInput2").type = "text";
    document.getElementById("repassimg").src = "Gallery/view.png";
  }
  else  {
    document.getElementById("myInput2").type = "password";
    document.getElementById("repassimg").src = "Gallery/visible.png";
  }
}
