<script lang="ts">
  import ArticlePage from "../lib/ArticlePage.svelte";
  import Title from "../lib/Title.svelte";
  import arrow from "../assets/arrow.svg";
  import Subtitle from "../lib/Subtitle.svelte";

  type ExperienceEntry = {
    time: string;
    company?: string;
    title: string;
    description?: string;
  };

  let {
    sectionTitle,
    experienceEntries
  }: { sectionTitle: string; experienceEntries: ExperienceEntry[] } = $props();
</script>

<ArticlePage>
  {#snippet heading()}
    <div>
      <Title>{sectionTitle}</Title>
    </div>
  {/snippet}
  {#snippet content()}
    {#each experienceEntries as { time, company, title, description } (time)}
      <div class="experience-row">
        <div class="experience-timeline">
          <div class="experience-date">
            <Subtitle>{time}</Subtitle>
          </div>
          <div class="timeline-divider">
            <div class="divider"></div>
            <img width="15px" height="15px" src={arrow} alt="" />
          </div>
          {#if company}
            <div class="experience-company">{company}</div>
          {/if}
        </div>
        <div class="experience-description">
          <h2 class="content-title">{title}</h2>
          {#if description}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- static content from content.ts -->
            <p>{@html description}</p>
          {/if}
        </div>
      </div>
    {/each}
  {/snippet}
</ArticlePage>

<style>
  .experience-row {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
    padding-bottom: 40px;
  }
  .experience-row:last-child {
    padding-bottom: 0px;
  }

  .experience-timeline {
    width: 25%;
    text-align: right;
  }
  .experience-description {
    width: 75%;
    padding-left: 40px;
    padding-top: 1.5rem;
  }

  .experience-date,
  .experience-company {
    padding-right: 50px;
  }
  .experience-company {
    color: var(--text-color-light);
  }

  .timeline-divider {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .divider {
    display: inline-block;
    border-bottom: 0;
    border-top: 1px solid white;
    flex-grow: 1;
  }

  .content-title {
    font-family: "Playfair Display", serif;
    color: var(--primary-color);
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2rem;
    word-wrap: break-word;
  }
  /* Small Screens */
  @media (max-width: 625px) {
    .experience-row {
      flex-wrap: wrap;
    }

    .experience-timeline {
      width: 100%;
    }
    .experience-description {
      width: 100%;
      padding-left: 0px;
    }
    .experience-date,
    .experience-company {
      text-align: left;
    }
  }
</style>
