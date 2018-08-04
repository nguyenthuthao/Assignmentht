//Check password
$('.signup-btn').on('click',function () {
    var txtPassword = $('.password').val();
    var txtRePassword = $('.re-password').val();
    if ((txtPassword !== '') && (txtPassword === txtRePassword)){
        $('form#register').submit();
        return true;
    }
    alert("Password incorrect");
    return false;
});
