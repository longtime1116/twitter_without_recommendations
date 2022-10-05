window.addEventListener("load", main, false);

function main(e) {
  const checkTimer = setInterval(jsLoaded, 1000);
  let count = 0;
  function jsLoaded() {
    // 「#話題を検索」「いまどうしてる？」「おすすめユーザー」を削除
    const labels = ["調べたいものを検索", "タイムライン: トレンド", "おすすめユーザー"]
    let elements = [];
    labels.forEach(function(l) {
      elements.push(document.querySelector(`[aria-label="${l}"]`))
    })
    // null とかを排除
    elements = elements.filter(e=>e)
    if (elements.length != 0) {
      elements.map(e => e.remove());
      count += elements.length;
      // 全部消せた
      if (count == labels.length) {
        clearInterval(checkTimer);
      }
    }
  }
};
