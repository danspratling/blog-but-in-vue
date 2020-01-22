<template>
  <div class="hero">
    <Container>
      <Row>
        <Col class>
          <HeroSVG />
          <h2 class="subheading">
            Follow my journey as we learn new Frontend techniques.
          </h2>
        </Col>
      </Row>
    </Container>
  </div>
</template>

<script>
import HeroSVG from '../images/hero.svg';

export default {
  components: {
    HeroSVG
  }
};
</script>

<style>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px var(--space-4);
  height: 68vh;
  max-height: 800px;
  min-height: 520px;
  color: white;
  background-color: var(--primary);
  background-image: linear-gradient(
    to bottom left,
    var(--primary) 0%,
    var(--secondary) 100%
  );
  box-sizing: border-box;
  overflow: hidden;
}

.hero .col {
  text-align: center;
}

.hero .subheading {
  font-size: var(--fontsize-4);
  font-weight: normal;
}

@media (min-width: 64em) {
  .hero .subheading {
    font-size: var(--fontsize-5);
  }
}

.hero-svg {
  max-width: 100%;
}

.hero-svg path {
  stroke: var(--white);
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: line 2s ease forwards, fill 0.5s ease forwards 2s;
}

@keyframes line {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  from {
    fill: transparent;
  }
  to {
    fill: var(--white);
  }
}
</style>
