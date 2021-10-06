const animation = document.querySelectorAll('.anim');

observer = new IntersectionObserver ((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

animation.forEach(anima => {
    observer.observe(anima)
})