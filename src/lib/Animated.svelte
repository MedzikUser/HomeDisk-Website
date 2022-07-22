<div class="animated-text"><slot /></div>

<style>
  .animated-text {
    animation: letterspacing 1s alternate cubic-bezier(0.2, 0, 0, 1);
  }

  @keyframes letterspacing {
    0% {
      filter: blur(0.5rem);
    }

    100% {
      filter: none;
    }
  }
</style>
