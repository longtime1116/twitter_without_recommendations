// ページロード時
window.addEventListener("load", main, false);

// その後の遷移にも対応
var observer = new MutationObserver(main);
observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
  childList:  true
});

function main() {
  console.log("removing twitter recommendations...")
  const checkTimer = setInterval(jsLoaded, 1000);
  let count = 0;
  function jsLoaded() {
    // 「#話題を検索」「いまどうしてる？」「おすすめユーザー」を削除
    const labels = ["調べたいものを検索", "タイムライン: トレンド", "おすすめユーザー"];
    let elements = [];
    labels.forEach(function(l) {
      elements.push(document.querySelector(`[aria-label="${l}"]`))
    })
    elements = elements.filter(e=>e)
    if (elements.length != 0) {
      elements.map(e => e.remove());
      count += elements.length;
      // 全部消せた
      if (count == labels.length) {
        clearInterval(checkTimer);
        console.log("twitter recommendations are removed!")
      }
    }
  }
};

