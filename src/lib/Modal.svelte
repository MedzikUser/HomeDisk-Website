<script lang="ts">
  import { fly } from 'svelte/transition'
  import '$lib/css/button.css'
  import ModalUpload from './ModalUpload.svelte'

  export let refreshFiled: () => void
  export let isOpen: boolean
  export let title: string
  export let type: string
</script>

{#if isOpen}
  <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
  <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
    <div class="contents">
      <h2>{title}</h2>

      {#if type == 'upload'}
        <ModalUpload {refreshFiled} />
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
    background: #000000;
    border: 1px solid #f9bdc0;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }
</style>
