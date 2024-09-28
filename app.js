document.getElementById('check').addEventListener('click',function(){
    fetch(`http://apilayer.net/api/validate?access_key=216ab70f0035ae73c01c9c4ece6dedf8&number=${document.getElementById('num').value}&country_code=MA&format=1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      if(data.valid){
      document.getElementById('carrier').textContent = data.carrier != '' ? data.carrier : 'none' 
      document.getElementById('lineType').textContent = data.line_type != '' ? data.line_type : 'none' 
        document.getElementById('res').style.display = 'block'
    }
    if(!data.valid){
            document.getElementById('res').innerHTML = "No valid"
    }
    })
    .catch(error => {
      alert('There was a problem with the check operation:', error);
    });
  })