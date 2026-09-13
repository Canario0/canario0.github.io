<script lang="ts">
  import ArticlePage from "../lib/ArticlePage.svelte";
  import Title from "../lib/Title.svelte";
  import arrow from "../assets/arrow.svg";
  import Subtitle from "../lib/Subtitle.svelte";

  type Project = {
    name: string;
    role: string;
    time: string;
    description?: string;
  };

  type ExperienceEntry = {
    time: string;
    company?: string;
    title: string;
    description?: string;
    projects?: Project[];
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
    {#each experienceEntries as { time, company, title, description, projects } (time)}
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
          {#if projects?.length}
            <ul class="projects">
              {#each projects as project (project.name)}
                <li class="project">
                  <div class="project-marker">
                    <div class="project-dot"></div>
                    <div class="project-line"></div>
                  </div>
                  <div class="project-content">
                    <h3 class="project-name">{project.name}</h3>
                    <p class="project-role">{project.role}</p>
                    <p class="project-time">{project.time}</p>
                    {#if project.description}
                      <!-- eslint-disable-next-line svelte/no-at-html-tags -- static content from content.ts -->
                      <div class="project-description">{@html project.description}</div>
                    {/if}
                  </div>
                </li>
              {/each}
            </ul>
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

  .projects {
    --dot-size: 9px;
    --name-line-height: 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .project {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .project-marker {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    flex-shrink: 0;
    padding-top: calc((var(--name-line-height) - var(--dot-size)) / 2);
    margin-right: calc(1.75rem - var(--dot-size));
  }
  .project-dot {
    width: var(--dot-size);
    height: var(--dot-size);
    box-sizing: border-box;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
  }
  .project-line {
    flex-grow: 1;
    margin: 4px 0;
    border-left: 1px solid var(--secondary-color);
  }
  .project:last-child .project-line {
    border-left: 0;
  }

  .project-content {
    padding-bottom: 1.25rem;
  }
  .project:last-child .project-content {
    padding-bottom: 0;
  }

  .project-name {
    font-family: "Playfair Display", serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: var(--name-line-height);
    color: var(--text-color);
    margin: 0;
  }

  .project-role {
    font-weight: 500;
    margin: 0.15rem 0 0;
  }

  .project-time {
    color: var(--text-color-light);
    margin: 0.1rem 0 0;
  }

  .project-description {
    margin: 0.5rem 0 0;
  }
  .project-description :global(p) {
    margin: 0;
  }
  .project-description :global(p + p) {
    margin-top: 0.5rem;
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
