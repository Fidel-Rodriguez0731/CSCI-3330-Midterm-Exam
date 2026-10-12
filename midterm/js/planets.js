
$(function() {
 
    //Write your code below
    function planets(){
    async function load(){
        fetch("data/planets.json") // path to JSON file
        .then(response => response.json()) // handles the response obj as JSON
        .then((planets) => { // handles the data within the JSON file
      console.log(planets); // process the file
      loadActors(planets);
   })
    }



   

       
    }

});
