<script>
  import Subtitle from "../lib/Subtitle.svelte";
  import Title from "../lib/Title.svelte";
</script>

<div class="container">
  <div>
    <Subtitle style="color: var(--primary-color)">About Me</Subtitle>
  </div>
  <div>
    <Title>
      I am a passionate full-stack developer based in Spain with over 5 years of rich experience.
    </Title>
  </div>
  <section class="content">
    <div>
      <h3 class="content-title">I embrace complex challenges and keep up with new technologies.</h3>
    </div>
    <div>
      <p class="content-entry">
        As a full-stack developer with 5+ years of experience in various niches, including         research at college. I have a diverse skill set that includes both front-end and
        back-end development as well as quality assurance (QA) automation. In my previous
        roles I have taken on complex challenges and developed scalable solutions that
        meet business and user needs.
      </p>
      <p class="content-entry content-entry__light">
        Working as a QA automation engineer has given me a keen eye for detail and a strong
        understanding of the importance of testing and quality assurance in the software
        development process. With a passion for staying up-to-date with the latest
        technologies and trends, I enjoy exploring new tools and techniques to continually
        improve my work.
      </p>
    </div>
  </section>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 100px 0;
  }

  .content {
    display: flex;
    flex-direction: row;
    padding: 100px 0 0;
    flex-wrap: nowrap;
  }

  .content > div {
    width: 100%;
    height: 100%;
    gap: 100px 0;
  }
  .content > div:first-child {
    padding-right: 100px;
  }

  .content-title {
    font-family: "Playfair Display", serif;
    color: var(--primary-color);
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.5rem;
  }

  .content-entry {
    word-wrap: break-word;
    margin-top: 0px;
  }

  .content-entry__light {
    color: var(--text-color-light);
  }

  .content-entry:last-child {
    margin: 0;
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .content {
      flex-wrap: wrap;
      padding: 50px 0 0;
    }
    .content > div:first-child {
      height: unset;
      padding: 0 0 25px;
    }
  }
</style>
