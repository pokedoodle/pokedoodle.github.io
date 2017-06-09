document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.getElementById('closeTab').addEventListener("click", closeTab);
  function closeTab(){ // Closes the tab.
    window.close();
    close();
  }

  //Gets the Pokemon name from the URL after the ? and opens the iFrame to that page
  var pokemonName = parent.document.URL.substring(parent.document.URL.indexOf('?')+1, parent.document.URL.length);
  function bingSearch(){
    document.getElementById('showImages').src = "https://www.bing.com/images/search?q="+pokemonName;
    document.getElementById('doodleName').innerHTML= pokemonName;
  }
  bingSearch();

  //Scrolling the iFrame using JS doesn't work due to security reasons. Looking into using CSS to scroll.
                                                      //VVVV
  // document.getElementById('scrollUp').addEventListener("click", scrollUp);
  // document.getElementById('scrollDown').addEventListener("click", scrollDown);
  // var bingIFrame = document.getElementById('showImages');
  // var scroll = 0;
  //
  // function scrollUp(){
  //  console.log(scroll);
  //  scroll-=100;
  //   bingIFrame.contentWindow.scrollTo(0,scroll);
  // }
  //
  // function scrollDown(){
  //  console.log(scroll);
  //  scroll+=100;
  //   bingIFrame.contentWindow.scrollTo(0,scroll);
  // }

});
