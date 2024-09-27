$("[type='submit']").click(function() {
  let text = $(".in").val();

  // if pelada bagres
  let new_text = text.split("Fabiao: danado")[1];
  new_text = new_text.split("Lista de espera")[0];
  new_text = new_text.trim();
  new_text = new_text.split("\n");

  // time de 4
  let teams = [];
  for(let i = 0; i < new_text.length; i+=4){
    teams.push(new_text.slice(i, i+4).join("\n"));
  }
  $(".out").val(teams.join("\n\n"));
})