
$(document).ready(function () {

    let hE="";
    let d="";
    let t="";
    let l="";
    let p="";
    let hD="";
    let g="";
    let b="";
    let n="";
    let j="";
    



    $("#reqSubmit").on("click", function () {
        hE=$("#herbReq").val()
        $("#herbCount").text(hE+" Herbal Essence")
    })
    $("#reqSubmit").on("click", function () {
        d=$("#doveReq").val()
        $("#doveCount").text(d+" Dove")
    })
    $("#reqSubmit").on("click", function () {
        t=$("#tresReq").val()
        $("#tresCount").text(t+" Tresemme")
    })
    $("#reqSubmit").on("click", function () {
        l=$("#lorReq").val()
        $("#lorCount").text(l+" Loreal")
    })
    $("#reqSubmit").on("click", function () {
        p=$("#pantReq").val()
        $("#pantCount").text(p+" Pantene")
    })
    $("#reqSubmit").on("click", function () {
        hD=$("#hdReq").val()
        $("#hdCount").text(hD+" Head & Shoulder")
    })
    $("#reqSubmit").on("click", function () {
        g=$("#garnReq").val()
        $("#garnCount").text(g+" Garnier")
    })
    $("#reqSubmit").on("click", function () {
        b=$("#bioReq").val()
        $("#bioCount").text(b+" Biolage")
    })
    $("#reqSubmit").on("click", function () {
        n=$("#nexReq").val()
        $("#nexCount").text(n+" Nexxus")
    })
    $("#reqSubmit").on("click", function () {
        j=$("#joReq").val()
        $("#joCount").text(j+" Joico")
    })

    $("#reqSubmit").on("click", function () {
        const total=eval([hE,5].join('*'))+eval([d,5].join('*'))+eval([t,5].join('*'))+eval([l,5].join('*'))+eval([p,5].join('*'))+eval([hD,5].join('*'))+eval([g,5].join('*'))+eval([b,5].join('*'))+eval([n,5].join('*'))+eval([j,5].join('*'));
        
        $(".price").text("Total : $"+ total)
    })


    $.get("/home", function(req,res) {
        res.json();
        console.log(res.json())
    })

});


