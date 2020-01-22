<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">Home</g-link>
      <!-- <dark-button></dark-button> -->
    </header>
    <slot />
    <footer>
      © {{ new Date().getFullYear() }}, Built with
      <a href="https://gridsome.org">Gridsome</a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --primary: #ed3ab6;
  --secondary: #fce69c;
  --accent: #f7fafc;
  --text: #2d3748;
  --background: #fff;
  --black: #1a202c;
  --white: #fff;
  --gray-0: #f7fafc;
  --gray-1: #edf2f7;
  --gray-2: #e2e8f0;
  --gray-3: #cbd5e0;
  --gray-4: #a0aec0;
  --gray-5: #718096;
  --gray-6: #4a5568;
  --gray-7: #2d3748;
  --gray-8: #1a202c;

  --font-body: 'system-ui, sans-serif';
  --font-heading: 'Montserrat';
  --font-monospace: 'Menlo, monospace';

  --fontweight-body: 400;
  --fontweight-heading: 700;
  --fontweight-bold: 700;

  --body-lineheight: 1.5;
  --heading-lineheight: 1.125;

  --fontsize-0: 12px;
  --fontsize-1: 14px;
  --fontsize-2: 16px;
  --fontsize-3: 20px;
  --fontsize-4: 24px;
  --fontsize-5: 32px;
  --fontsize-6: 48px;
  --fontsize-7: 64px;
  --fontsize-8: 72px;

  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 32px;
  --space-5: 64px;
  --space-6: 128px;
  --space-7: 256px;
  --space-8: 512px;

  --breakpoint-0: 16em;
  --breakpoint-1: 32em;
  --breakpoint-2: 48em;
  --breakpoint-3: 64em;
  --breakpoint-4: 72em;

  --radii-0: 0;
  --radii-1: 0.5rem;
  --radii-2: 9999px;

  --shadows-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadows-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadows-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadows-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadows-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadows-none: 0;
}

body {
  font-family: var(--font-body);
  line-height: var(--lineheight-body);
  letter-spacing: '.5px';
  margin: 0;
  min-height: '100vh';
  color: var(--text);
  background-color: var(--background);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  line-height: var(--lineheight-heading);
}

h1 {
  font-size: var(--fontsize-6);
}

h2 {
  font-size: var(--fontsize-5);
}

h3 {
  font-size: var(--fontsize-4);
}

h4 {
  font-size: var(--fontsize-3);
}

ul[class],
ol[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--primary);
  box-shadow: none;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */

footer {
  margin-top: 20px;
}
</style>
