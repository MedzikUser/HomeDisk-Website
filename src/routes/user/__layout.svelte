<!-- Disable prerendering -->
<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from 'svelte'
  import { Modals, closeModal } from 'svelte-modals'
  import redirect from '$lib/utils/redirect'
  import { getToken } from '$lib/utils/token'

  onMount(() => {
    const token = getToken()
    if (!token) {
      redirect('/login')
    }
  })
</script>

<Modals>
  <div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<slot />

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
