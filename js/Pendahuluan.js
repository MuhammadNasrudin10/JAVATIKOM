function judul(evt, nmrIsi, mtr) {
    var i, isian, pilihan, materian, meteripilihan;
    isian = document.getElementsByClassName("judul");
    for (i = 0; i < isian.length; i++) {
        isian[i].style.display = "none";
    }
    materian = document.getElementsByClassName("materi");
    for (i = 0; i < materian.length; i++) {
        materian[i].style.display = "none";
    }
    pilihan = document.getElementsByClassName("menubar");
    for (i = 0; i < pilihan.length; i++) {
        pilihan[i].className = pilihan[i].className.replace(" menubaractive", "", "");
    }
    document.getElementById(nmrIsi).style.display = "block";
    document.getElementById(mtr).style.display = "block";
    evt.currentTarget.className += " menubaractive";

}

//cek jawaban isian
function cekJawaban() {
    let isi1 = document.getElementById("isian1").value.toLowerCase();
    let jawaban1 = new RegExp('//');
    let result1 = jawaban1.test(isi1);

    if (result1 == true) {

        document.getElementById("cekIsian1").style.color = "green";
        document.getElementById("isian1").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian1").style.color = "red";
        document.getElementById("isian1").style.border = "2px solid red";
    }

    let isi2 = document.getElementById("isian2").value.toLowerCase();
    let jawaban2 = new RegExp('//');
    let result2 = jawaban2.test(isi2);

    if (result2 == true) {

        document.getElementById("cekIsian2").style.color = "green";
        document.getElementById("isian2").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian2").style.color = "red";
        document.getElementById("isian2").style.border = "2px solid red";
    }

    let isi3 = document.getElementById("isian3").value.toLowerCase();
    let jawaban3 = new RegExp('int');
    let result3 = jawaban3.test(isi3);

    if (result3 == true) {

        document.getElementById("cekIsian3").style.color = "green";
        document.getElementById("isian3").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian3").style.color = "red";
        document.getElementById("isian3").style.border = "2px solid red";
    }

    let isi4 = document.getElementById("isian4").value.toLowerCase();
    let jawaban4 = new RegExp('float');
    let result4 = jawaban4.test(isi4);

    if (result4 == true) {

        document.getElementById("cekIsian4").style.color = "green";
        document.getElementById("isian4").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian4").style.color = "red";
        document.getElementById("isian4").style.border = "2px solid red";
    }
    let isi5 = document.getElementById("isian5").value.toLowerCase();
    let jawaban5 = new RegExp('char');
    let result5 = jawaban5.test(isi5);

    if (result5 == true) {

        document.getElementById("cekIsian5").style.color = "green";
        document.getElementById("isian5").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian5").style.color = "red";
        document.getElementById("isian5").style.border = "2px solid red";
    }

    let isi6 = document.getElementById("isian6").value.toLowerCase();
    let jawaban6 = new RegExp('boolean');
    let result6 = jawaban6.test(isi6);

    if (result6 == true) {

        document.getElementById("cekIsian6").style.color = "green";
        document.getElementById("isian6").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian6").style.color = "red";
        document.getElementById("isian6").style.border = "2px solid red";
    }

    let isi7 = document.getElementById("isian7").value.toLowerCase();
    let jawaban7 = new RegExp('string');
    let result7 = jawaban7.test(isi7);

    if (result7 == true) {

        document.getElementById("cekIsian7").style.color = "green";
        document.getElementById("isian7").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian7").style.color = "red";
        document.getElementById("isian7").style.border = "2px solid red";
    }

    let isi8 = document.getElementById("isian8").value.toLowerCase();
    let jawaban8 = new RegExp('primitive');
    let result8 = jawaban8.test(isi8);

    if (result8 == true) {

        document.getElementById("cekIsian8").style.color = "green";
        document.getElementById("isian8").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian8").style.color = "red";
        document.getElementById("isian8").style.border = "2px solid red";
    }

    let isi9 = document.getElementById("isian9").value.toLowerCase();
    let jawaban9 = new RegExp('int');
    let result9 = jawaban9.test(isi9);

    if (result9 == true) {

        document.getElementById("cekIsian9").style.color = "green";
        document.getElementById("isian9").style.border = "2px solid green"
    } else {

        document.getElementById("cekIsian9").style.color = "red";
        document.getElementById("isian9").style.border = "2px solid red";
    }

}
function reset() {
    // document.getElementsByClassName('ini')[0].value = "";
    document.getElementById("isian1").value = "";
    document.getElementById("isian2").value = "";
    document.getElementById("isian3").value = "";
    document.getElementById("isian4").value = "";
    document.getElementById("isian5").value = "";
    document.getElementById("isian6").value = "";
    document.getElementById("isian7").value = "";
    document.getElementById("isian8").value = "";
    document.getElementById("isian9").value = "";
    document.getElementById("isian1").style = "border: 0,5 solid";
    document.getElementById("isian2").style = "border: 0,5 solid";
    document.getElementById("isian3").style = "border: 0,5 solid";
    document.getElementById("isian4").style = "border: 0,5 solid";
    document.getElementById("isian5").style = "border: 0,5 solid";
    document.getElementById("isian6").style = "border: 0,5 solid";
    document.getElementById("isian7").style = "border: 0,5 solid";
    document.getElementById("isian8").style = "border: 0,5 solid";
    document.getElementById("isian9").style = "border: 0,5 solid";
}
