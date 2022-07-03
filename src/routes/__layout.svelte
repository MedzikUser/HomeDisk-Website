<script>
  import Notifications from 'svelte-notifications'
  import Header from '$lib/Header.svelte'
  import config from '../config'
  import '../app.css'
  import Container from '$lib/Container.svelte'
  import Footer from '$lib/Footer.svelte'
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
</svelte:head>

<Notifications>
  <Container>
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </Container>
</Notifications>
