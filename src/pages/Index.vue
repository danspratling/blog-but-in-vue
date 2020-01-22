<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <Hero />

    <Container>
      <Row class="blog-list">
        <Col class="col-md-12">
          <p>test</p>
        </Col>
      </Row>
    </Container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.blog-list {
  position: relative;
  margin: -100px auto auto;
  justify-content: center;
}
</style>
