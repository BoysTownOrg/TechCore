$(function(){
console.log("hi");
  $.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=cQeNL_sxSGc3TLMiO8TwyKY9eTuNOhPccPvZnnRjTIk27dCllA4PEu5f-trcLHNjBx5XVIejVVfn_hOaeooYfjmnYr-4sS1Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNuT4VuMR1XyNSR4UCpILev2jBSmriMlWvFJwQvbBWKgCF_FbWgoeheklgKJBC-vysG0qewgMQGJ&lib=MFshQPy37C18ZD8LDzatERLLRIzCuRgtx", printData);

    function printData(data){

    for(i=0;i<data.data.length;i++)
        console.log("hi");
  }

});
