<script lang="ts">
  import profileImage from "../assets/profile.webp";
  import Subtitle from "../lib/Subtitle.svelte";
</script>

<div class="container">
  <div class="image-container">
    <img alt="profile" src={profileImage} class="profile-image" />
  </div>
  <div>
    <Subtitle style="color: var(--subtitle-color); text-transform: uppercase;"
      >Hello, My Name Is</Subtitle
    >
    <div class="divider">
      <div class="line" />
    </div>
    <h1 class="main-title">Pablo<br />Renero<br />Balgañón</h1>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: center;
  }
  .container > div {
    width: 100%;
  }

  .image-container {
    padding: 150px 0;
  }

  .profile-image {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }

  .main-title {
    line-height: 4rem;
    font-size: 4rem;
    font-weight: 800;
    font-family: "Playfair Display", serif;
    margin: 0;
    padding: 0 0 100px 0;
  }

  .divider {
    padding-bottom: 50px;
  }

  .line {
    width: 50px;
    border-color: var(--subtitle-color);
    border-style: solid;
    border-width: 2px 0 0 0;
  }

  /* Small Screens */
  @media (max-width: 625px) {
    .container {
      flex-wrap: wrap;
    }

    .divider {
      padding-bottom: 25px;
    }

    .main-title {
      padding: 0;
      font-size: 3.5rem;
      line-height: 3.5rem;
    }

    .image-container {
      padding: 60px 0 25px 0;
    }
  }
</style>
