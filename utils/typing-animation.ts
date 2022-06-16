// Typing animation
export default function typingAnimation() {
    // get text to animate
    const animatedText = document.getElementById('animatedText').innerHTML

    // clear the initial text
    document.getElementById('animatedText').innerHTML = ''

    // animate function
    async function animateText() {
        for (let i = 0; i < animatedText.length; i++) {
            // wait 100ms before add new letter
            await new Promise(resolve => setTimeout(resolve, 100))
            // add new letter to the document
            updateText(i)
        }
    }

    // update text function
    function updateText(i: number) {
        document.getElementById('animatedText').innerHTML += animatedText[i]
    }

    // run animation
    animateText()
}
