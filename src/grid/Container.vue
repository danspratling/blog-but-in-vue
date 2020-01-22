<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
}

@media (min-width: 48em) {
  .container {
    max-width: var(--breakpoint-3);
  }
}

@media (min-width: 72em) {
  .container {
    max-width: var(--breakpoint-4);
  }
}
</style>