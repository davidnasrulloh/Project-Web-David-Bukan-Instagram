function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getMail());

    var x = document.getElementsByClassName("logged");
    var i;
    for (i = 0; i <= x.length; i++){
        x[0].classList.remove("logged");
    }
}

function onSignOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        hideDashboard();
    });
}

function hideDashboard(){
    var x = document.getElementsByClassName("onlylogged");
    var i;
    for (i = 0; i <= x.length; i++){
        x[i].classList.add("logged");
    }
}

function gotoDashboard(){
    window.location.replace("http://localhost:9000/dashboard.html");
}