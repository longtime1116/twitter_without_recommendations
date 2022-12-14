window.addEventListener("load", exec, false);

let observer = new MutationObserver(exec);
observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
  subtree: true,
});
console.log("----- twitter_without_recommendations loaded -----");

function exec() {
  // 「#話題を検索」「いまどうしてる？」「おすすめユーザー」「関連性の高いアカウント」を削除
  const labels = [
    "調べたいものを検索",
    "タイムライン: トレンド",
    "おすすめユーザー",
    "関連性の高いアカウント",
  ];
  labels.forEach(function (l) {
    let e = document.querySelector(`[aria-label="${l}"]`);
    if (e != null) {
      e.remove();
      console.log(`-----  [${l}] removed!!! -----`);
    }
  });
}
