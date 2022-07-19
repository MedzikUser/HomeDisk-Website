<script lang="ts">
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'

  import AnimatedText from '$lib/AnimatedText.svelte'
  import Card from '$lib/Card.svelte'
  import Grid from '$lib/Grid.svelte'
  import { getToken } from '$lib/utils/token'

  let token: string | null

  onMount(() => (token = getToken()))
</script>

<svelte:head>
  <title>HomeDisk</title>
</svelte:head>

<h1 class="title">
  <AnimatedText>{$_('index.title')}</AnimatedText>
</h1>

<p class="description">{$_('index.description')}</p>

<Grid>
  {#if !token}
    <!-- Sign in card -->
    <a href="/login" class="card-signin">
      <Card>
        <h1>{$_('index.cards.login.title')} &rarr;</h1>
        <p>{$_('index.cards.login.description')}</p>
      </Card>
    </a>

    <!-- Register card -->
    <a href="/register" class="card-register">
      <Card>
        <h1>{$_('index.cards.register.title')} &rarr;</h1>
        <p>{$_('index.cards.register.description')}</p>
      </Card>
    </a>
  {:else}
    <!-- Dashboard card -->
    <a href="/user/dashboard" class="card-dashboard">
      <Card>
        <h1>{$_('index.cards.dashboard.title')} &rarr;</h1>
        <p>{$_('index.cards.dashboard.description')}</p>
      </Card>
    </a>
  {/if}
</Grid>

<style>
  .title {
    color: #fc3c80;
    font-size: 2rem;
    margin-bottom: 0px;
  }

  .description {
    color: #ffa3b8;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    font-size: 1.5rem;
  }

  .card-signin {
    color: #5cd85a;
  }

  .card-signin:hover,
  .card-signin:focus {
    color: #1dc690;
  }

  .card-register {
    color: #40b0df;
  }

  .card-register:hover,
  .card-register:focus {
    color: #22cae0;
  }

  .card-dashboard {
    color: #fbe7c6;
  }

  .card-dashboard:hover,
  .card-dashboard:focus {
    color: #f1d3a5;
  }
</style>
