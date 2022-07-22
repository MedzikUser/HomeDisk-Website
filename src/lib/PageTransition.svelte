<script>
  import { scale } from 'svelte/transition'
  import Animated from './Animated.svelte'

  export let url = ''
  const pageTransitionDuration = 500
</script>

{#key url}
  <div in:scale={{ duration: pageTransitionDuration }}>
    <Animated><slot /></Animated>
  </div>
{/key}
