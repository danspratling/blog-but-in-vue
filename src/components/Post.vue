<template>
  <article>
    <g-link :to="path" class="link">
      <h3 class="heading">{{ title }}</h3>
      <small>{{ new Date(date).toLocaleDateString() }}</small>
      <p class="excerpt">{{ description || excerpt }}</p>
    </g-link>
  </article>
</template>

<script>
export default {
  props: ['id', 'excerpt', 'path', 'date', 'title', 'description']
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background);
  border-radius: var(--radii-1);
  border: 2px solid var(--accent);
  box-shadow: var(--shadows-md);
  margin-bottom: var(--space-3);
  transition: 0.3s ease;
}

article:hover,
article:focus {
  box-shadow: var(--shadow-sm);
  border-color: var(--primary);
  margin-left: -(var(--space-2));
  margin-right: var(--space-2);
}

.link {
  color: var(--primary);
  padding: var(--space-4);
  text-decoration: none;
}

.heading {
  font-weight: var(--fontweight-heading);
  margin-top: var(--space-2);
  margin-bottom: var(--space-2);
}

.excerpt {
  color: var(--text);
  margin-bottom: 0;
}
</style>
