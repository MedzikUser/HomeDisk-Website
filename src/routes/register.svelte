<script lang="ts">
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'
  import { getNotificationsContext } from 'svelte-notifications'
  import { goto } from '$app/navigation'
  import api from '$lib/api'
  import { getToken, setToken } from '$lib/utils/token'

  let username = ''
  let password = ''

  onMount(() => {
    let token = getToken()

    if (token) {
      goto('/user/dashboard')
    }
  })

  const { addNotification } = getNotificationsContext()

  async function submit() {
    if (username == '' || password == '') {
      addNotification({
        text: $_('auth.notification.emptyInput'),
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

      goto('/user/dashboard')
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

<form class="box" on:submit|preventDefault={submit}>
  <h2 class="title">Home<span>Disk</span></h2>
  <h4 class="description">{$_('auth.register.description')}</h4>
  <input
    type="text"
    name="username"
    placeholder={$_('auth.input.username')}
    autocomplete="off"
    bind:value={username}
  />
  <input
    type="password"
    name="password"
    placeholder={$_('auth.input.password')}
    autocomplete="off"
    bind:value={password}
  />
  <input type="submit" value={$_('auth.register.button')} />
</form>

<a href="/login" class="other-auth-link">{$_('auth.register.link')}</a>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

  .title {
    font-family: 'Source Sans Pro', sans-serif;
    color: #5c6bc0;
  }

  .title span {
    color: #dfdeee;
    font-weight: lighter;
  }

  .description {
    font-family: 'Source Sans Pro', sans-serif;
    color: #abadb8;
    letter-spacing: 1.5px;
    margin-top: -1rem;
    margin-bottom: 2em;
  }

  input[type='text'],
  input[type='password'] {
    display: block;
    margin: 1em;
    background: inherit;
    border-radius: 5px;
    padding: 14px 10px;
    width: 300px;
    outline: none;
    color: #ffffff;
    font-size: 1em;
    transition: all 500ms;
    border: 2px solid #ff8aff;
  }

  input[type='password'] {
    margin-bottom: 0;
  }

  input[type='text']:focus,
  input[type='password']:focus {
    border-color: #ff2eff;
  }

  input[type='submit'] {
    margin-top: 1rem;
    padding: 10px 40px;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
    border-radius: 100px;
    background: transparent;
    transition: all 500ms;
    border: 2px solid #ef7c8e;
    color: #ef7c8e;
  }

  input[type='submit']:hover {
    border-color: #ff3b9d;
    color: #ff3b9d;
    cursor: pointer;
  }

  a {
    color: #ff69b4;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .other-auth-link {
    display: block;
    margin-top: 10px;
  }
</style>
