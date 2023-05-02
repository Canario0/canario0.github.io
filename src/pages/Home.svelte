<script lang="ts">
  import profileImage from "../assets/profile.webp";
</script>

<div class="container">
  <div class="image-container">
    <img alt="profile" src={profileImage} class="profile-image" />
  </div>
  <div>
    <h6 class="subtitle">Hello, My Name Is</h6>
    <div class="divider">
      <div class="line" />
    </div>
    <h1 class="title">Pablo<br />Renero<br />Balgañón</h1>
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
    max-width: 100%;
    height: auto;
  }

  .title {
    line-height: 4rem;
    font-size: 4rem;
    font-weight: 800;
    font-family: "Playfair Display", serif;
    margin: 0;
    padding: 0 0 100px 0;
  }

  .subtitle {
    text-transform: uppercase;
    color: var(--subtitle-color);
    line-height: 1.25rem;
    font-weight: 500;
    font-size: 1rem;
    margin: 0 0 10px 0;
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

  /* Midsize Screens */
  @media (max-width: 625px) {
    .container {
      flex-wrap: wrap;
    }

    .title {
      padding: 0;
    }

    .image-container {
      padding: 120px 0 25px 0;
    }
  }
</style>
