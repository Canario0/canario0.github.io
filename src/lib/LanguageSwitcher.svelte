<script lang="ts">
  import { LOCALE_NAMES, i18n, locales, setLocale } from "../i18n.svelte";

  let { label }: { label: string } = $props();
</script>

<div class="language-switcher" role="group" aria-label={label}>
  {#each locales as locale (locale)}
    <button
      type="button"
      class="language"
      class:active={i18n.locale === locale}
      aria-pressed={i18n.locale === locale}
      aria-label={LOCALE_NAMES[locale]}
      lang={locale}
      onclick={() => setLocale(locale)}
    >
      {locale}
    </button>
  {/each}
</div>

<style>
  .language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 1rem;
    border-left: 1px solid var(--border-color);
  }

  .language {
    background: none;
    border: none;
    padding: 0.25rem 0.5rem;
    font: inherit;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-color);
    cursor: pointer;
  }

  .language:hover,
  .language.active {
    color: var(--primary-color);
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .language-switcher {
      justify-content: center;
      width: 100%;
      padding: 1rem 0;
      border-left: none;
    }
  }
</style>
