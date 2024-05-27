 
//  FAQ SECTION

// Onclick opens the answer DIV
function faqOpen1() {
    document.getElementById("additionIcon1").style.display = "none";
    document.getElementById('faq1').style.display = "block";
}

function faqOpen2() {
    document.getElementById("additionIcon2").style.display = "none";
    document.getElementById('faq2').style.display = "block";
}

function faqOpen3() {
    document.getElementById("additionIcon3").style.display = "none";
    document.getElementById('faq3').style.display = "block";
}

function faqOpen4() {
    document.getElementById("additionIcon4").style.display = "none";
    document.getElementById('faq4').style.display = "block";
}

function faqOpen5() {
    document.getElementById("additionIcon5").style.display = "none";
    document.getElementById('faq5').style.display = "block";
}

function faqOpen6() {
    document.getElementById("down").style.display = "none";
    document.getElementById('faq6').style.display = "block";
}

// Onclick closes the hidden div
function faqClose() {
    document.getElementById('faq1').style.display = "none";
    document.getElementById('faq2').style.display = "none";
    document.getElementById('faq3').style.display = "none";
    document.getElementById('faq4').style.display = "none";
    document.getElementById('faq5').style.display = "none";
    document.getElementById('faq6').style.display = "none";
    document.getElementById("additionIcon1").style.display = "block";
    document.getElementById("additionIcon2").style.display = "block";
    document.getElementById("additionIcon3").style.display = "block";
    document.getElementById("additionIcon4").style.display = "block";
    document.getElementById("additionIcon5").style.display = "block";
    document.getElementById("additionIcon6").style.display = "block";
}
// FOOTER Language Div
function langsOpen() {
    document.getElementById("right").style.display = "none";
    document.getElementById("langs-container").style.display = "block";
    document.getElementById("down").style.display = "block";
}

// FOOTER Language Div
function langsClose() {
    document.getElementById("down").style.display = "none";
    document.getElementById("langs-container").style.display = "none";
    document.getElementById("right").style.display = "block";
}