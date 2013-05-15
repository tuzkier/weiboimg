// ==UserScript==
// @name				新标签开图
// @description		原始的在新标签打开大图
// @version			0.1
// @revision			1
// @author			@斌4d12
// @grant			unsafeWindow
// @include			http://weibo.com/*
// @include			http://www.weibo.com/*
document.addEventListener("click", function(e){
	e = e || window.event;
	var target = e.target;
	target.onclick = function(){}
	if (target.tagName.toLowerCase() != "a" || target.getAttribute("action-type") != "images_view_tobig")
		return;
	var params = target.getAttribute("action-data").split('&');
	var imgid = null;
	
	for (var p in params)
	{
		ps = params[p].split("=")
		if (ps[0] != "pid")
			continue;
		imgid = ps[1];
		break;
	}
	if (imgid)
	{
		window.open("http://ww4.sinaimg.cn/large/" + imgid, "_blank")
		if (document.getElementsByClassName("close").length > 0)
			document.getElementsByClassName("close")[0].click();
	}
	return false;
}, false);
