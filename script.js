$( document ).ready(function() {
    $(".animals , .education , .environment").hide();
    
    $(".round-button1").on("click", function(){
    $(".animals , .education").hide();
    }); 
    
    $(".round-button1").on("click", function(){
    $(".environment").show();
      var defaultLocation = { lat: 40.7566846 , lng: -73.9918376};
        var map = new google.maps.Map(document.getElementById('enviromentmap'), {
          zoom: 12,
          center: defaultLocation
        });
         var category=[];
        
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
    
 
});
    
    
    

  