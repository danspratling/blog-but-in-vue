<template>
  <div class="col">
    <slot />
  </div>
</template>

<style>
.col {
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  width: 100%;
  flex: 1 0 auto;
  max-width: 100%;
}
.col-1 {
  flex: 1 0 8.33%;
  max-width: 8.33%;
}
.col-2 {
  flex: 1 0 16.66%;
  max-width: 16.66%;
}
.col-3 {
  flex: 1 0 25%;
  max-width: 25%;
}
.col-4 {
  flex: 1 0 33.33%;
  max-width: 33.33%;
}
.col-5 {
  flex: 1 0 41.66%;
  max-width: 41.66%;
}
.col-6 {
  flex: 1 0 50%;
  max-width: 50%;
}
.col-7 {
  flex: 1 0 58.33%;
  max-width: 7/12;
}
.col-8 {
  flex: 1 0 66.66%;
  max-width: 66.66%;
}
.col-9 {
  flex: 1 0 75%;
  max-width: 75%;
}
.col-10 {
  flex: 1 0 83.33%;
  max-width: 83.33%;
}
.col-11 {
  flex: 1 0 91.66%;
  max-width: 91.66%;
}
.col-12 {
  flex: 1 0 100%;
  max-width: 100%;
}

@media (min-width: 16em) {
  .col-sm {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .col-sm-1 {
    flex: 1 0 8.33%;
    max-width: 8.33%;
  }
  .col-sm-2 {
    flex: 1 0 16.66%;
    max-width: 16.66%;
  }
  .col-sm-3 {
    flex: 1 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
  .col-sm-5 {
    flex: 1 0 41.66%;
    max-width: 41.66%;
  }
  .col-sm-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 1 0 58.33%;
    max-width: 7/12;
  }
  .col-sm-8 {
    flex: 1 0 66.66%;
    max-width: 66.66%;
  }
  .col-sm-9 {
    flex: 1 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 1 0 83.33%;
    max-width: 83.33%;
  }
  .col-sm-11 {
    flex: 1 0 91.66%;
    max-width: 91.66%;
  }
  .col-sm-12 {
    flex: 1 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 32em) {
  .col-md {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 1 0 8.33%;
    max-width: 8.33%;
  }
  .col-md-2 {
    flex: 1 0 16.66%;
    max-width: 16.66%;
  }
  .col-md-3 {
    flex: 1 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
  .col-md-5 {
    flex: 1 0 41.66%;
    max-width: 41.66%;
  }
  .col-md-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 1 0 58.33%;
    max-width: 58%;
  }
  .col-md-8 {
    flex: 1 0 66.66%;
    max-width: 66.66%;
  }
  .col-md-9 {
    flex: 1 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 1 0 83.33%;
    max-width: 83.33%;
  }
  .col-md-11 {
    flex: 1 0 91.66%;
    max-width: 91.66%;
  }
  .col-md-12 {
    flex: 1 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 48em) {
  .col-md {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 1 0 8.33%;
    max-width: 8.33%;
  }
  .col-md-2 {
    flex: 1 0 16.66%;
    max-width: 16.66%;
  }
  .col-md-3 {
    flex: 1 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
  .col-md-5 {
    flex: 1 0 41.66%;
    max-width: 41.66%;
  }
  .col-md-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 1 0 58.33%;
    max-width: 58%;
  }
  .col-md-8 {
    flex: 1 0 66.66%;
    max-width: 66.66%;
  }
  .col-md-9 {
    flex: 1 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 1 0 83.33%;
    max-width: 83.33%;
  }
  .col-md-11 {
    flex: 1 0 91.66%;
    max-width: 91.66%;
  }
  .col-md-12 {
    flex: 1 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 64em) {
  .col-md {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 1 0 8.33%;
    max-width: 8.33%;
  }
  .col-md-2 {
    flex: 1 0 16.66%;
    max-width: 16.66%;
  }
  .col-md-3 {
    flex: 1 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
  .col-md-5 {
    flex: 1 0 41.66%;
    max-width: 41.66%;
  }
  .col-md-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 1 0 58.33%;
    max-width: 58%;
  }
  .col-md-8 {
    flex: 1 0 66.66%;
    max-width: 66.66%;
  }
  .col-md-9 {
    flex: 1 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 1 0 83.33%;
    max-width: 83.33%;
  }
  .col-md-11 {
    flex: 1 0 91.66%;
    max-width: 91.66%;
  }
  .col-md-12 {
    flex: 1 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 72em) {
  .col-md {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 1 0 8.33%;
    max-width: 8.33%;
  }
  .col-md-2 {
    flex: 1 0 16.66%;
    max-width: 16.66%;
  }
  .col-md-3 {
    flex: 1 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
  .col-md-5 {
    flex: 1 0 41.66%;
    max-width: 41.66%;
  }
  .col-md-6 {
    flex: 1 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 1 0 58.33%;
    max-width: 58%;
  }
  .col-md-8 {
    flex: 1 0 66.66%;
    max-width: 66.66%;
  }
  .col-md-9 {
    flex: 1 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 1 0 83.33%;
    max-width: 83.33%;
  }
  .col-md-11 {
    flex: 1 0 91.66%;
    max-width: 91.66%;
  }
  .col-md-12 {
    flex: 1 0 100%;
    max-width: 100%;
  }
}
</style>