(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  }("twerking.lol ")); // title mismatch of the domain
  window.oncontextmenu=function(){console.log("Stop Trying To Skid... ego'd :D");return false;}
  
