<div class="animated-text"><slot /></div>

<style>
  .animated-text {
    animation: letterspacing 2s alternate cubic-bezier(0.2, 0, 0, 1);
  }

  @keyframes letterspacing {
    0% {
      letter-spacing: -1em;
      filter: blur(1rem);
    }

    100% {
      filter: none;
    }
  }
</style>
