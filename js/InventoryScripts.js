$(function()
{

  var audio = document.getElementById("audio");
  var cables = document.getElementById("cables");
  var tools = document.getElementById("tools");
  var video = document.getElementById("video");

  $.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=GhjYHCs17Uy6BT75s_sSxuwhfKUi2W_bwGxrfo5jX6AurU2WollQe9jbOMvicQDvBO5Y7zXLAV-qs2RpQXmS820Yb1RFmSdim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNuT4VuMR1XyNSR4UCpILev2jBSmriMlWvFJwQvbBWKgCF_FbWgoeheklgKJBC-vysG0qewgMQGJ&lib=MFshQPy37C18ZD8LDzatERLLRIzCuRgtx", fillInventory);

  function fillInventory(data)
  {
    for(i=0;i<data.data.length;i++)
    {
      var col = document.createElement("div");
      var card = document.createElement("div");
      var title = document.createElement("div");
      var body = document.createElement("div");

      if(data.data[i].status == "Available")
        card.className = "card available";
      else
        card.className = "card unavailable";

      col.className = "col-6 col-sm-4 col-lg-6 py-3";
      title.className = "card-title";
      body.className = "card-body";

      title.innerHTML = data.data[i].name;
      body.innerHTML = data.data[i].description;

      card.appendChild(title);
      card.appendChild(body);

      col.appendChild(card);

      switch(data.data[i].category)
      {
        case "Audio":
              audio.appendChild(col);
              break;
        case "Cables":
              cables.appendChild(col);
              break;
        case "Tools":
              tools.appendChild(col);
              break;
        case "Video":
              video.appendChild(col);
              break;
        default:
      }

    }
  }

});
