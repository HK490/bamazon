
$(document).ready(function () {

    $("#reqSubmit").on("click", function () {
        $("#herbCount").text($("#herbReq").val()+" Herbal Essence")
        console.log($("#herbReq").val()+" Herbal Essence")
        console.log($("#herbCount"))
    })
    $("#reqSubmit").on("click", function () {
        $("#doveCount").text($("#doveReq").val()+" Dove")
    })
    $("#reqSubmit").on("click", function () {
        $("#tresCount").text($("#tresReq").val()+" Tresemme")
    })
    $("#reqSubmit").on("click", function () {
        $("#lorCount").text($("#lorReq").val()+" Loreal")
    })
    $("#reqSubmit").on("click", function () {
        $("#pantCount").text($("#pantReq").val()+" Pantene")
    })
    $("#reqSubmit").on("click", function () {
        $("#hdCount").text($("#hdReq").val()+" Head & Shoulder")
    })
    $("#reqSubmit").on("click", function () {
        $("#garnCount").text($("#garnReq").val()+" Garnier")
    })
    $("#reqSubmit").on("click", function () {
        $("#bioCount").text($("#bioReq").val()+" Biolage")
    })
    $("#reqSubmit").on("click", function () {
        $("#nexCount").text($("#nexReq").val()+" Nexxus")
    })
    $("#reqSubmit").on("click", function () {
        $("#joCount").text($("#joReq").val()+" Joico")
    })


    $.get("/home", function(req,res) {
        res.json();
        console.log(res.json())
    })

});