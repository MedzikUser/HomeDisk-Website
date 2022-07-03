<!-- Disable prerendering -->
<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from 'svelte'
  import redirect from '$lib/utils/redirect'
  import { getToken } from '$lib/utils/token'

  onMount(() => {
    const token = getToken()
    if (!token) {
      redirect('/login')
    }
  })
</script>

<slot />
