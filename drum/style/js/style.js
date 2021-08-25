window.addEventListener('keydown',function (e) {
    const audio = document.querySelector(`audio[datd-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    // 利用return回傳最新的data-key 避免出現空值
    if (!audio) return;

    // 將時間軸拉回最開始
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
})

function removeTransition(e) {
if (e.propertyName !== 'transform') return;//如果沒有變化則直接跳過
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach( key => key.addEventListener('transitionend',removeTransition))
