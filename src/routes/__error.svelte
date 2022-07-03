<script context="module" lang="ts">
  export function load({ error, status }: any) {
    return {
      props: {
        message: error.message,
        status
      }
    }
  }
</script>

<script lang="ts">
  export let status: number
  export let message: string
</script>

{#if status == 404}
  <h1>404</h1>
  <code>Error: {message}</code>
{:else}
  <h1>{status}</h1>
  <code>Error: A server-side error occurred ({message})</code>
{/if}
