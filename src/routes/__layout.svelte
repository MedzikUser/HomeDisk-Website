<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } })
</script>

<script>
  import Notifications from 'svelte-notifications'
  import { getLocaleFromNavigator, init, register, isLoading } from 'svelte-i18n'
  import Header from '$lib/Header.svelte'
  import config from '../config'
  import '../app.sass'
  import Container from '$lib/Container.svelte'
  import Footer from '$lib/Footer.svelte'
  import PageTransition from '$lib/PageTransition.svelte'

  // setup language
  register('en', () => import('$lib/langs/en'))

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  })

  export let url = ''
</script>

<svelte:head>
  <!-- Open Sans font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />

  <!-- <meta> tags -->
  <meta name="description" content={config.description} />

  <!-- OpenGraph -->
  <meta property="og:url" content={config.url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.description} />
  <meta property="og:image" content={config.previewImage} />

  <title>HomeDisk</title>
</svelte:head>

<Notifications>
  <Container>
    <Header />
    <main>
      {#if !$isLoading}
        <PageTransition {url}><slot /></PageTransition>
      {/if}
    </main>

    <Footer />
  </Container>
</Notifications>
