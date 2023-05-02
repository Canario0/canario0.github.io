<script lang="ts">
  let active = false;

  const handleClick = () => {
    active = !active;
  };
</script>

<button class="container" on:click={handleClick} on:click class:active>
  <div class="bar1" />
  <div class="bar2" />
  <div class="bar3" />
</button>

<style>
  .container {
    display: inline-block;
    cursor: pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 20px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.4s;
  }

  .active .bar1 {
    transform: translate(0, 6px) rotate(-45deg);
  }

  .active .bar2 {
    opacity: 0;
  }

  .active .bar3 {
    transform: translate(0, -6px) rotate(45deg);
  }
</style>
