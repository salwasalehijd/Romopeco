
function arabic(){
  var html = document.getElementsByTagName('html')[0];
  html.dir='rtl'
  html.lang='ar'
}

function english(){
  var html = document.getElementsByTagName('html')[0];
  html.dir='ltr'
  html.lang='en'
  var languageList= document.getElementById('language-list')
  languageList.classList.add('px-5');
}

// active part


 var header = document.getElementsByClassName("navbar-nav");
 var btns = document.getElementsByClassName("foractive");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", ""); 

   this.className += " active";

   });
 }


