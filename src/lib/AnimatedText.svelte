<script lang="ts">
  import { onMount } from 'svelte'

  onMount(() => {
    const doc = document as any

    // get text to animate
    const animatedText = doc.getElementById('animatedText').innerHTML

    // clear the initial text
    doc.getElementById('animatedText').innerHTML = ''

    // animate function
    async function animateText() {
      for (let i = 0; i < animatedText.length; i++) {
        // wait 100ms before add new letter
        await new Promise((resolve) => setTimeout(resolve, 100))
        // add new letter to the document
        updateText(i)
      }
    }

    // update text function
    function updateText(i: number) {
      doc.getElementById('animatedText').innerHTML += animatedText[i]
    }

    // run animation
    animateText()
  })
</script>

<p id="animatedText">
  <slot />
</p>
