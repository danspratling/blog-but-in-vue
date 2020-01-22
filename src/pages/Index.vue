<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <Hero />

    <Container>
      <Row class="blog-list">
        <Col
          class="col-md-12"
          v-for="post in $page.allPost.edges"
          :key="post.node.id"
        >
          <p>{{ post.node.title }}</p>
        </Col>
      </Row>
    </Container>
  </Layout>
</template>

<page-query>
query{
  allPost(sort: {by: "date", order:DESC }) {
    edges {
      node{
        id
        excerpt
      	path
        date
        title
        description
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
};

// console.log($page);
</script>

<style>
.blog-list {
  position: relative;
  margin: -100px auto auto;
  justify-content: center;
}
</style>
