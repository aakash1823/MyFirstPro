function initMap() { 
    var area= {lat: 13.0418, lng: 80.2341}; 
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 13, 
      center: area 
    }); 
    var marker = new google.maps.Marker({ 
      position: area, 
      map: map 
    }); 
  } 


  function data(){
    document.getElementById('23').style.color= "black";
    document.getElementById('25').style.color= "black";
    document.getElementById('24').style.color= "black";


  }
  function data1(){
    document.getElementById('23').style.color= "white";
    document.getElementById('24').style.color= "white";
    document.getElementById('25').style.color= "white";

  }

 
 function validateform(){
    alert("Successfully Completed");
}

