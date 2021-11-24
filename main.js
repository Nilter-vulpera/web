/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show2");
}
function myFunction3(){
    document.getElementById("myDropdown3").classList.toggle("show3");
}
function myFunction4(){
    document.getElementById("myDropdown4").classList.toggle("show4");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.getElementById('intro_btn2').onclick = function() {
  document.getElementById('cofe-img2').classList.add('cofe-img2_active');
}

document.getElementById('intro_btn').onclick = function() {
  document.getElementById('cofe-img').classList.add('cofe-img_active');
}


