<script lang="ts">
  import { onMount } from 'svelte'
  import api from '$lib/api'
  import type { DirType, FileType } from '$lib/api/user/listFiles'

  let dirs: DirType[] = []
  let files: FileType[] = []

  onMount(async () => {
    const data = await api.user.listFiles('/')
    dirs = data.dirs
    files = data.files
  })
</script>

<svelte:head>
  <title>Dashboard - HomeDisk</title>
</svelte:head>

<!-- To not show an empty table when a request is sent to the api -->
{#if dirs.length > 0 && files.length > 0}
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Size</th>
        <th>Modified</th>
      </tr>
    </thead>
    <tbody>
      <!-- Directories -->
      {#each dirs as dir}
        <tr>
          <td>Directory</td>
          <td><a href={`?path=${dir.name}`}>{dir.name}</a></td>
          <td>{dir.size}</td>
          <td>{dir.modified || 'unknown'}</td>
        </tr>
      {/each}

      <!-- Files -->
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
{:else}
  <!-- Loading message -->
  Loading...
{/if}

<style>
  table {
    table-layout: fixed;
    border: 1px dashed #fff;
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
    border-top: 1px solid #fff;
    padding: 8px;
  }
</style>
