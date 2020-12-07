
window.fbAsyncInit = function () {
    FB.init({
        appId: '1119524491830398',
        cookie: true,
        xfbml: true,
        version: 'v8.0', // của mình là ver 8.0
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function loginFb(){
    FB.login((response) => {
        //do something
    }, {scope: 'exampleInputEmail'});}

// logs the user in the application and facebook
// function loginFb(){
//     FB.getLoginStatus(function(r){
//         if(r.status === 'connected'){
//             window.location.href = 'fbconnect.php';
//         }else{
//             FB.login(function(response) {
//                 if(response.authResponse) {
//                     //if (response.perms)
//                     window.location.href = 'fbconnect.php';
//                 } else {
//                     // user is not logged in
//                 }
//             },{scope:'exampleInputEmail'}); // which data to access from user profile
//         }
//     });
// }
// Load the SDK Asynchronously
// (function() {
//     var e = document.createElement('script'); e.async = true;
//     e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
//     document.getElementById('fb-root').appendChild(e);
// }());



