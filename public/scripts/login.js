// This is probably very insecure...

$(document).ready(function(){
    $("form").submit(function(e){
        const password = $("#password").val();
        const confirmation = $("#confirmation").val();
        if (password !== confirmation) {
            e.preventDefault();
        }
    });
    $("#confirmation").keyup(function(e){
        const password = $("#password").val();
        let confirmation = $("#confirmation").val();
        if (password !== confirmation && confirmation.length > 0) {
            $("#confirmation-error").text("Password and confirmation do not match.");
        } else {
            $("#confirmation-error").text("");
        }
    });
});