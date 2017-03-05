t = document.getElementsByTagName("title")[0],
		s = document.createElement("script");
s.type = "text/javascript";
s.src = 'https://togetherjs.com/togetherjs-min.js';
s.async = false;
s.onload = s.onreadystatechange = function () {
  TogetherJS();
};
t.parentNode.insertBefore(s, t);
