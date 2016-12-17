$( document ).ready(function() {
    $(".animals , .education , .environment , .form").hide();
    
    $(".round-button1").on("click", function(){
    $(".animals , .education").hide();
    }); 
    
    $(".environmentlist").on("click", function(){
    $(".form").show();
    }); 
    
    $(".round-button1").on("click", function(){
    $(".environment").show();
      var defaultLocation = { lat: 40.7566846 , lng: -73.9918376};
        var map = new google.maps.Map(document.getElementById('environmentmap'), {
          zoom: 12,
          center: defaultLocation
        });
        var category=[];
        category["enviroment"]=[{lat: 40.6725757 , lng: -74.0109782},
                                {lat:40.7191847, lng:-73.9738762},
                                {lat:40.8911232,lng:-73.8961311},
                                {lat:40.8790776,lng:-74.1067679},
                                {lat:40.7481253,lng:-73.9960727}];
                           for(var i=0;i<category["enviroment"].length;i++){
         addMarker(category["enviroment"][i], map);
        }     
    });
    
    $(".round-button2").on("click", function(){
    $(".environment , .education").hide();
    }); 
    
    $(".round-button2").on("click", function(){
    $(".animals").show();
    });
    
    $(".round-button3").on("click", function(){
    $(".environment , .animals").hide();
    }); 
    
    $(".round-button3").on("click", function(){
    $(".education").show();
    });
    
    $(".close").on("click", function(){
    $(".environment , .animals , .education").hide();
    }); 
    var labels = 'ABCDE';
      var labelIndex = 0;

  function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
          position: location,
          label: labels[labelIndex++ % labels.length],
          map: map
        });
      }
});
 
    
    

  