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

@media (min-width: var(--breakpoints-2)) {
  .container {
    max-width: var(--breakpoints-3);
  }
}

@media (min-width: var(--breakpoints-3)) {
  .container {
    max-width: var(--breakpoints-4);
  }
}
</style>