// MoleGame
function makeMoles(nx, ny) {
    var moleState = new Map()
    const W = 50, SPACE = 10
    for (let i = 0; i < nx; i++) {
        for(let j = 0;j <ny; j++){
            let element = document.createElement('div')
            element.style.width = W + "px"
            element.style.height = W + "px"
            element.style.backgrou = "url(./res/bigger.gif)"
            element.style.position = "absolute"
            element.style.opacity = 0.2
            element.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease"
            document.body.appendChild(element)
            element.style.left = SPACE + i * ( W + SPACE) + "px"
            element.style.top = 2 * SPACE + j * (W + SPACE) + "px"
            moleState.set(element,{x:i, y:j, opacity: 0.2})
            element.onclick = function clickEventHandler(e) {
                var element = e.currentTarget
                var state = moleState.get(element)
                if (state.opacity >= 0.5) {
                    document.body.removeChild(element)
                    moleState.delete(element)
                }
            }
        }
    } 
    return moleState
}

window.onload = function () {
    const TIME_INTERVAL = 1500, DISPLAY_TIME = 1050
    let molesState = makeMoles(7, 4)
}