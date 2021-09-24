function Rventura(){
    if(confirm("Are you sure you want to register for Ventura?")){
        var x = document.getElementById("snackbar");
        x.innerHTML="Successfully Registered for Ventura";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }	
}
function Resummit(){
    if(confirm("Are you sure you want to register for E-Summit?")){
        var x = document.getElementById("snackbar");
        x.innerHTML="Successfully Registered for E-Summit";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }	
}
function Reconclave(){
    if(confirm("Are you sure you want to register for E-Conclave?")){
        var x = document.getElementById("snackbar");
        x.innerHTML="Successfully Registered for E-Conclave";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }	
}