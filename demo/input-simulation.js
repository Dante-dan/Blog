window.___inputValue = function (dom, st) {
	// 模拟输入事件
  var evt = new InputEvent('input', {
    inputType: 'insertText',
    data: st,
    dataTransfer: null,
    isComposing: false
  });
  dom.value = st;
  dom.dispatchEvent(evt);
}

var messages = [
	'🎉老米粉了！！！支持！！！🎉',
	'小米牛皮~~✨✨✨',
	'明人不说暗话,让我中奖吧😄😄',
	'💖💖不得不说, RedMi的品牌分离是一件很正确的事情💖💖',
	'666666666666, 小米越来越好',
	'I like😍 MI',
	'智能家居行业, 小米的开放之路是正确的选择d=====(￣▽￣*)b',
	'小米的生态是最好😍的, 最蓬勃的, 也是最与时俱进🦄的',
	'🦄爱小米, 🦄爱科技, 希望科技带给每个人快乐🦄',
	'小米加油!!! 国货加油!!! ❤❤❤',
	'抽我!!!抽我!!!💥'
];

setInterval(() => {
	var value = messages[Math.round(10 * Math.random())];
	window.___inputValue(
		document.querySelector("#app > div > div:nth-child(5) > div > div > div > div.chat > div > div.bottom-box > div.input-box > input[type=text]"),
		value
	);
	document.querySelector("#app > div > div:nth-child(5) > div > div > div > div.chat > div > div.bottom-box > div.input-box > button").click();
}, (9000 * Math.random()));