//Initially we have to set the pagecontents div invisible until
//The stipulated time has passed e.g 3s

document.getElementById("pageContents").style.display = "none";

setTimeout(() => {
  //This makes loadr div invisible after 3 secs
  document.getElementById("loader").style.display = "none";

  //Now we have to make the web page content visible
  document.getElementById("pageContents").style.display = "block";
}, 3000);
