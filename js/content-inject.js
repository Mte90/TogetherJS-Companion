function gup(name) {
  url = location.href;
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];
}

if (gup('togetherjs')) {
  t = document.getElementsByTagName("title")[0],
		  s = document.createElement("script");
  s.type = "text/javascript";
  s.src = 'https://togetherjs.com/togetherjs-min.js';
  s.async = false;
  s.onreadystatechange = function () {
	TogetherJS();
  };
  t.parentNode.insertBefore(s, t);
}
