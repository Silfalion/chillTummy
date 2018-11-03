function guessThisFood(link){

  const app = new Clarifai.App({
    apiKey: '422054bdd48a43089292049e3b0ab94d'
  });

  var results = "";
  app.models.predict("bd367be194cf45149e75f01d59f77ba7", link)
  .then(
    function(response){
      var concepts = response['outputs'][0]['data']['concepts']
      for(var i = 0; i< concepts.length; i++){
        element = concepts[i]
        results = results + element.name + ": " + element.value
        results += "\n"
      }
      console.log(results)
      document.getElementById("results").innerHTML = results;
    },
    function(err){
      console.log(err)
    },
  );
  
};
