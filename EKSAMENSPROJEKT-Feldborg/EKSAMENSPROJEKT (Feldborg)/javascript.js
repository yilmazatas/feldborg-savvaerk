"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var length = $("lengthre");
var width = $("widthre");
var height = $("heightre");
var radius =$("radius");
var height = $("height");
var height = $("heighttra");
var grundlinje = $("grundlinje");
var length = $("lengthtra");
var amountVolume = 0;


function calculateVolume(length, width, height) {
  amountVolume = parseFloat(length) * parseFloat(width) *
    parseFloat(height);
  var volumeRound = amountVolume.toFixed(2);
  $('volume').value = volumeRound;
};


 function calculateVolume1(radius, heightcy) {
  amountVolume =(radius * radius * heightcy * Math.PI)
  var volumeRound = amountVolume.toFixed(2);
  $('volume').value = volumeRound;
};


function calculateVolume2(heighttra, grundlinje,lengthtra) {
  amountVolume =(heighttra * grundlinje * lengthtra * 0.5)
  var volumeRound = amountVolume.toFixed(2);
  $('volume').value = volumeRound;
};


var divState = {};
  function showhide(id) {
      if (document.getElementById) {
          var divid = document.getElementById(id);
          divState[id] = (divState[id]) ? false : true;
          
          //close others
          for (var div in divState){
              if (divState[div] && div != id){
                  document.getElementById(div).style.display = 'none';
                  divState[div] = false;
              }
          }
          divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
      }
      showfigur(id); 
    }


  function showfigur(id) {
    let fig = document.getElementById("figur");
    if (id == "row41")
    {
      if (fig.innerHTML == "")
        fig.innerHTML="<img src='img/rekt.png'>";
      else
        fig.innerHTML="";
    }
    if (id == "row42")
    {
      if (fig.innerHTML == "")
        fig.innerHTML="<img src='img/cirk.png'>";
      else
        fig.innerHTML="";
    }    
    if (id == "row43")
    {
      if (fig.innerHTML == "")
        fig.innerHTML="<img src='img/trek.png'>";
      else
        fig.innerHTML="";
    }
  }
   

  var imgs = document.getElementById("images");
  var cN = "active";
  
  
  for (var i = 0; i < imgs.children.length; i += 1) 
  {
      if (imgs.children[i].tagName == 'IMG')
      {
      (function(i) {
          imgs.children[i].addEventListener("click", function() {
              this.className === "" ? this.className = cN : this.className = ""; 
              var temp = list.children[i].innerHTML;
              list.children[i].innerHTML = this.alt;
              this.alt = temp;
          });
      })(i);
      }
      else
        continue;
  }
  