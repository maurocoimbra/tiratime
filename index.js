// automate input
fetch("text.txt")
  .then((res) => res.text())
  .then((text) => {
    $("#players-raw").val(text)
   })
  .catch((e) => console.error(e));

  $("#convert-list").click(function() {
    let text = $("#players-raw").val();
  
    // if pelada bagres
    let new_text = text.split("Fabiao: danado")[1];
    new_text = new_text.split("Lista de espera")[0];
    new_text = new_text.trim();
  
    $("#players-list").val(new_text);
  })

$("#create-teams").click(function() {
  let text = $("#players-list").val();
  new_text = text.split("\n");

  // time de 4
  let teams = [];
  for(let i = 0; i < new_text.length; i+=4){
    teams.push(new_text.slice(i, i+4).join("\n"));
  }
  $("#teams").val(teams.join("\n\n"));
})