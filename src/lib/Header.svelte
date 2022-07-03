<script lang='ts'>
    import { onMount } from "svelte"
    import Home from "$lib/icons/Home.svelte"
    import Login from "$lib/icons/Login.svelte"
    import Logout from "$lib/icons/Logout.svelte"
    import { getToken, type tokenType } from "./utils/token"

    let token: tokenType

    onMount(() => {
        token = getToken()
    })
</script>

<header>
    <a href='/' class='logo'><Home /></a>

    <nav>
        <ul class='nav-links'>
            {#if token}
                <li>
                    <a href='#logout'>
                        <Logout />
                    </a>
                </li>
            {:else}
                <li>
                    <a href='/login'>
                        <Login />
                    </a>
                </li>
            {/if}
        </ul>
    </nav>
</header>

<style>
    header {
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        cursor: pointer;
        padding-left: 1em;
    }

    .nav-links {
        list-style: none;
    }

    .nav-links li {
        display: inline-block;
        padding: 0px 20px;
    }

    .nav-links li a {
        transform: all 0.3s ease 0s;
    }
</style>
