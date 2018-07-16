$(function()
{

  var items = document.getElementById("items");

  $.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=cQeNL_sxSGc3TLMiO8TwyKY9eTuNOhPccPvZnnRjTIk27dCllA4PEu5f-trcLHNjBx5XVIejVVfn_hOaeooYfjmnYr-4sS1Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNuT4VuMR1XyNSR4UCpILev2jBSmriMlWvFJwQvbBWKgCF_FbWgoeheklgKJBC-vysG0qewgMQGJ&lib=MFshQPy37C18ZD8LDzatERLLRIzCuRgtx", printData);

  function printData(data)
  {
    for(i=0;i<data.data.length;i++)
    {
      var col = document.createElement("div");
      var card = document.createElement("div");
      var title = document.createElement("div");
      var body = document.createElement("div");

      col.className = "col-6 col-md-4 col-lg-2 py-3";
      card.className = "card";
      title.className = "card-title";
      body.className = "card-body";

      title.innerHTML = data.data[i].name;
      body.innerHTML = data.data[i].description;

      card.appendChild(title);
      card.appendChild(body);

      col.appendChild(card);

      items.appendChild(col);
    }
  }

});
