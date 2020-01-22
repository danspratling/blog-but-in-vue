<template>
<Layout>
      <!-- <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      /> -->
      <div
      class="background"
      />
      <Container>
        <Row>
          <Col class="col-xs-12 col-md-8">
            <header>
              <h1 class="title">{{ $page.post.title }}</h1>
              <p class="date">{{ new Date($page.post.date).toLocaleDateString() }}</p>
            </header>
            <section v-html="$page.post.content" />
          </Col>
        </Row>
      </Container>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
post(id: $id) {
    id
    date
    title
    content
  }
}
</page-query>

<style>
.background {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  height: 68vh;
  max-height: 800px;
  min-height: 520px;
  background-color: var(--primary);
  background-image: linear-gradient(to bottom left, var(--primary) 0%, var(--secondary) 100%);
}

.col {
  padding: var(--space-4);
  background-color: var(--background);
  margin-top: var(--space-6);
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--radii-1);
}

@media(min-width: 48em) {
  .col {
    padding: var(--space-4) var(--space-5);
  }
}

@media(min-width: 64em) {
  .col {
    padding: var(--space-5) var(--space-6);
  }
}

header {
  margin-bottom: var(--space-5);
}

.title {
  font-family: var(--font-heading);
  font-weight: var(--fontweight-bold);
  color: var(--primary);
  text-align: center;
  margin-bottom: var(--space-1);
}

.date {
  font-size: var(--fontsize-2);
  text-align: center;
}
</style>







/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import { Container, Row, Col } from '../components/Grid'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div
        sx={{
          ...style.background,
          backgroundImage: theme =>
            `linear-gradient(to bottom left, ${theme.colors.pink} 0%, ${theme.colors.yellow} 100%)`,
        }}
      />
      <Container>
        <Row sx={{ justifyContent: 'center' }}>
          <Col xs={12} lg={10} sx={style.wrapper}>
            <header sx={{ marginBottom: 5 }}>
              <h1 sx={style.title}>{post.frontmatter.title}</h1>
              <p sx={style.date}>{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
