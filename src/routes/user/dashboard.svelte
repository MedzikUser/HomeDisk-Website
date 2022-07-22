<script lang="ts">
  import { onMount } from 'svelte'
  import { openModal } from 'svelte-modals'
  import { _ } from 'svelte-i18n'

  import Modal from '$lib/Modal.svelte'
  import api from '$lib/api'
  import type { DirType, FileType } from '$lib/api/user/listFiles'
  import File from '$lib/icons/File.svelte'
  import FileUpload from '$lib/icons/FileUpload.svelte'
  import Folder from '$lib/icons/Folder.svelte'

  let path = new URLSearchParams(window.location.search).get('path') || '/'

  let apiExecuted = false

  let dirs: DirType[] = []
  let files: FileType[] = []

  // on page load get a list of files and directories
  onMount(() => {
    getFilesList()

    setInterval(refreshFiles, 1000)
  })

  // Temporary function to update the files list after click directory link
  async function refreshFiles() {
    let path_old = path
    let path_new = new URLSearchParams(window.location.search).get('path') || '/'

    if (path_new != path_old) {
      getFilesList()
    }
  }

  // Send a request to the api to get a list of files and directories
  async function getFilesList() {
    let path = new URLSearchParams(window.location.search).get('path') || '/'
    const data = await api.user.listFiles(path)
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

<!-- To not show an empty table when a request is sent to the api -->
{#if dirs.length > 0 || files.length > 0}
  <div>
    <span on:click={openUploadFileModal}><FileUpload /></span>
  </div>

  <table>
    <!-- Table header -->
    <thead>
      <tr>
        <th>{$_('dashboard.table.header.name')}</th>
        <th>{$_('dashboard.table.header.size')}</th>
        <th>{$_('dashboard.table.header.modified')}</th>
      </tr>
    </thead>

    <!-- Table body -->
    <tbody>
      <!-- Show directories -->
      {#each dirs as dir}
        <tr>
          <td><Folder /> <a href={`?path=${dir.name}`}>{dir.name}</a></td>
          <td>{dir.size}</td>
          <td>{dir.modified || ''}</td>
        </tr>
      {/each}

      <!-- Show files -->
      {#each files as file}
        <tr>
          <td><File /> {file.name}</td>
          <td>{file.size}</td>
          <td>{file.modified}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else if apiExecuted}
  <!-- Directory is empty -->
  {$_('dashboard.empty_directory')}
{:else}
  <!-- Loading message -->
  {$_('dashboard.loading')}
{/if}

<style>
  table {
    table-layout: fixed;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: start;
    background-color: #F652A0;
    border: 1px solid #F652A0;
    box-shadow: 0px 0px 15px #F652A0;
  }

  thead {
    color: #FBE698;
  }

  td:nth-child(1) {
    width: 300px;
  }

  td:nth-child(2) {
    width: 100px;
    text-align: center;
  }

  td:nth-child(3) {
    text-align: center;
  }

  td,
  tr {
    padding: 8px 4px 8px 4px;
    background-color: #000000;
  }

  span {
    cursor: pointer;
    font-size: 1.5em;
  }
</style>
