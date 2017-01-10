$( document ).ready(function() 
    {
        $("#submitButton").click(function(){
           
            // 1. Get the value of the subway stop IDs from the input field
            // HINT: Use ClickHandlers
            
             var a = $("#input1").val();
             var b= $("#input2").val();
             var c= $("#input3").val();
    
            
            // 2. Make API call to Subway API to get the Stop Info - (mtaapi.herokuapp.com/stop)
            //    Save the stop name
            //    Save the latitude and longitude in the format lat,lon (example: 40.752769,-73.979189)
            //    Repeat this exercise 3 times to get name and coordinates for Stop 1, 2 and 3
            
            var stop1Obj = $.getJSON(
                    "http://mtaapi.herokuapp.com/stop?id="+a,
                    function(response) {
                        return response;
                    }
                );
            var stop1Name = stop1Obj.result.name;
            var stop1Coordinates = stop1Obj.result.lat;
            var Stop1Coordinates2 = stop1Obj.result.lon; 
            
            
            
            var stop2Obj = $.getJSON(
                    "http://mtaapi.herokuapp.com/stop?id="+b,
                    function(response) {
                        return response;
                    }
                );
            var stop2Name = stop2Obj.result.name;
            var stop1Coordinates = stop2Obj.result.lat;
            var Stop1Coordinates2 = stop2Obj.result.lon; 
            
            
            var stop3Obj = $.getJSON(
                    "http://mtaapi.herokuapp.com/stop?id="+c,
                    function(response) {
                        console.log(response)
                        return response;
                    }
                );
            var stop3Name = stop3Obj.result.name;
            var stop1Coordinates = stop3Obj.result.lat;
            var Stop1Coordinates2 = stop3Obj.result.lon; 
            
            
                // Repeat this for Stop 2 and 3

            
            // 3. Display the stop names on the HTML
            // HINT: Use Javascript Object Dot Notation
            $("#stop1").text("....");
                // Repeat this for Stop 2 and 3
                
                
                
            
            // 4. Build the Google Maps API Path using the information gathered in step 2.
            //  HINT: Substitute the coordinates with VARIABLES
            //  EXAMPLE: 
            //    https://maps.googleapis.com/maps/api/staticmap?
            //    zoom=16
            //    &size=2000x2000
            //    &markers=color:red%7Clabel:A%7C40.752769,-73.979189
            //    &markers=color:blue%7Clabel:B%7C40.754222,-73.984569
            //    &markers=color:green%7Clabel:C%7C40.758663,-73.981329
            //    &key=YOUR_API_KEY
            
            var Stop1Co = "40.752769,-73.979189";
            var Stop2Co = "40.754222,-73.984569";
            var Stop3Co = "40.758663,-73.981329";
            
            
            var map_url = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap &markers=color:blue%7Clabel:S%7C"+Stop1Co+"&markers=color:green%7Clabel:G%7C"+Stop2Co+ "&markers=color:red%7Clabel:C%7C"+Stop3Co+ "&key=AIzaSyAfGqR9iLvN2z8FYZdKHCH55hvE8789pjc";
            
            // 5. Display the map on the HTML
                $("#map").append("<img src=" + map_url + ">");

        });
                    
    });