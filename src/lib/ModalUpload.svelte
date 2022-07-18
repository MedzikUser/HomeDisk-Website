<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import { getNotificationsContext } from 'svelte-notifications'

  import api from './api'

  const { addNotification } = getNotificationsContext()

  export let refreshFiled: () => void

  let files: FileList
  let filePath: string

  function getFilename(event: any) {
    files = event.target.files

    filePath = `/${files[0].name}`
  }

  async function upload() {
    if (!files) {
      addNotification({
        text: 'No file selected',
        position: 'bottom-center',
        type: 'danger',
        removeAfter: 5000 // 5 seconds
      })

      return
    }

    try {
      await api.user.upload(filePath, files[0])
    } catch (err: any) {
      addNotification({
        text: err.toString(),
        position: 'bottom-center',
        type: 'danger',
        removeAfter: 5000 // 5 seconds
      })

      return
    }

    refreshFiled()

    addNotification({
      text: 'Uploaded!',
      position: 'bottom-center',
      type: 'success',
      removeAfter: 5000 // 5 seconds
    })

    closeModal()
  }
</script>

<input type="file" id="file-upload" on:change={getFilename} />

{#if files && files.length > 0}
  <p>Selected: {files[0].name}</p>
{/if}

<label for="file-upload">
  <span>Select a file</span>
</label>

<div class="actions">
  <button class="upload-button" on:click={upload}>Upload</button>
  <button class="close-button" on:click={closeModal}>Close</button>
</div>

<style>
  input[type='file'] {
    display: none;
  }

  span {
    display: inline-block;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: 0.2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #000000;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: #fa53a0;
    cursor: pointer;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  .upload-button {
    color: #a0e7e5;
    border-color: #a0e7e5;
  }

  .close-button {
    color: #ffaebc;
    border-color: #ffaebc;
  }
</style>
