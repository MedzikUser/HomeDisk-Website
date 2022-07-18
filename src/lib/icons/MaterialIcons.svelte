<script>
  export let viewBox = '0 0 24 24'
  export let height = '24px'
  export let width = '24px'
  export let fill = 'currentColor'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {height} {width} {viewBox} {fill}>
  <slot />
</svg>

<style>
  svg {
    height: 1em;
    width: 1em;
    display: inline-flex;
    align-self: center;
    top: 0.125em;
    position: relative;
  }
</style>
