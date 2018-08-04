//Check password
var txtPassword = $('.password').val();
var txtRePassword = $('.re-password').val();
$('.signup-btn').on('click',function () {
    if (txtPassword === txtRePassword){
        $('form#register').submit();
    }
    alert("Password incorrect");
});
