<script lang="ts">
  import { onMount } from 'svelte'
  import { getNotificationsContext } from 'svelte-notifications'

  import api from '$lib/api'
  import '$lib/css/button.css'
  import '$lib/css/input.css'
  import redirect from '$lib/utils/redirect'
  import { getToken, setToken } from '$lib/utils/token'

  let username = ''
  let password = ''

  onMount(() => {
    let token = getToken()

    if (token) {
      redirect('/user/dashboard')
    }
  })

  const { addNotification } = getNotificationsContext()

  async function submit() {
    if (username == '' || password == '') {
      addNotification({
        text: 'At least one field is empty',
        position: 'bottom-center',
        type: 'danger',
        removeAfter: 5000 // 5 seconds
      })

      return
    }

    const usernameT = username
    const passwordT = password

    username = ''
    password = ''

    try {
      const token = await api.auth.register(usernameT, passwordT)

      setToken(token)

      redirect('/user/dashboard')
    } catch (err: any) {
      addNotification({
        text: err.toString(),
        position: 'bottom-center',
        type: 'danger',
        removeAfter: 5000 // 5 seconds
      })
    }
  }
</script>

<svelte:head>
  <title>Register - HomeDisk</title>
</svelte:head>

<h1>Register</h1>

<input type="text" name="username" placeholder="Username" bind:value={username} />

<input type="password" name="password" placeholder="Password" bind:value={password} />

<button on:click={submit}>Sign in</button>

<style>
  h1 {
    color: #f3bc50;
  }

  input {
    border-color: #ff8aff;
    margin: 0.5em;
  }

  input:focus {
    border-color: #ff2eff;
  }

  input::placeholder {
    color: #ffffff;
  }

  button {
    border: 2px solid #ef7c8e;
    color: #ef7c8e;
  }

  button:hover,
  button:focus {
    border-color: #ff3b9d;
    color: #ff3b9d;
  }
</style>
