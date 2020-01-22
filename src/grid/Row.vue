<template>
  <div class="row">
    <slot />
  </div>
</template>


<style>
.row {
  display: flex;
  margin-left: -var(--space-3);
  margin-right: -var(--space-3);
  flex-wrap: wrap;
}
</style>