<script>
  import AnimatedText from '$lib/AnimatedText.svelte'
  import Card from '$lib/Card.svelte'
  import Grid from '$lib/Grid.svelte'
</script>

<svelte:head>
  <title>HomeDisk</title>
</svelte:head>

<h1 class="title">
  <AnimatedText>Welcome to HomeDisk!</AnimatedText>
</h1>

<p class="description">Fast and lightweight local cloud for your data written in Rust</p>

<Grid>
  <a href="/login" class="card-signin">
    <Card>
      <h1>Sign in &rarr;</h1>
      <p>Log in to your account</p>
    </Card>
  </a>

  <a href="/register" class="card-register">
    <Card>
      <h1>Register &rarr;</h1>
      <p>Create a new account</p>
    </Card>
  </a>
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
</style>
