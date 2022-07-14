<script lang="ts">
  import { onMount } from 'svelte'
  import { openModal } from 'svelte-modals'
  import api from '$lib/api'
  import type { DirType, FileType } from '$lib/api/user/listFiles'
  import FileUpload from '$lib/icons/FileUpload.svelte'
  import Modal from '$lib/Modal.svelte'

  let apiExecuted = false

  let dirs: DirType[] = []
  let files: FileType[] = []

  // on page load get a list of files and directories
  onMount(() => {
    getFilesList()
  })

  // Send a request to the api to get a list of files and directories
  async function getFilesList() {
    const data = await api.user.listFiles('/')
    dirs = data.dirs
    files = data.files

    apiExecuted = true
  }

  function openUploadFileModal() {
    openModal(Modal, { title: 'Upload File', type: 'upload', refreshFiled: getFilesList })
  }
</script>

<svelte:head>
  <title>Dashboard - HomeDisk</title>
</svelte:head>

<div>
  <a href="#upload" on:click={openUploadFileModal}>
    <FileUpload />
  </a>
</div>

<!-- To not show an empty table when a request is sent to the api -->
{#if dirs.length > 0 || files.length > 0}
  <table>
    <!-- Table header -->
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Size</th>
        <th>Modified</th>
      </tr>
    </thead>

    <!-- Table body -->
    <tbody>
      <!-- Show directories -->
      {#each dirs as dir}
        <tr>
          <td>Directory</td>
          <td><a href={`?path=${dir.name}`}>{dir.name}</a></td>
          <td>{dir.size}</td>
          <td>{dir.modified || 'unknown'}</td>
        </tr>
      {/each}

      <!-- Show files -->
      {#each files as file}
        <tr>
          <td>File</td>
          <td>{file.name}</td>
          <td>{file.size}</td>
          <td>{file.modified}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else if apiExecuted}
  <!-- Directory is empty -->
  Empty directory
{:else}
  <!-- Loading message -->
  Loading...
{/if}

<style>
  div {
    margin: 10px;
  }

  table {
    table-layout: fixed;
    border: 1px dashed #ffffff;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 8px;
  }

  thead {
    color: #b8c7f4;
  }

  td,
  tr {
    width: 100px;
    border-top: 1px solid #ffffff;
    padding: 8px;
  }
</style>
