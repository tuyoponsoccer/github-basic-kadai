//2秒(2000ミリ秒)の待ち時間を設定し、非同期処理を実行する
btn.addEventListener('click',() => {
setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    }, 2000);
});
