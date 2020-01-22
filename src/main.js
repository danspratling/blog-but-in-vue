// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from './layouts/Default.vue';
import GridContainer from '~/grid/Container.vue';
import Row from '~/grid/Row.vue';
import Col from '~/grid/Col.vue';
import Hero from '~/components/Hero.vue';
import Post from '~/components/Post.vue';

export default function(Vue, { router, head, isClient }) {
  //Fonts

  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Merriweather'
    }
  );

  //Layout Components
  Vue.component('Layout', DefaultLayout);

  //Grid Components
  Vue.component('Container', GridContainer);
  Vue.component('Row', Row);
  Vue.component('Col', Col);

  //General Components
  Vue.component('Hero', Hero);
  Vue.component('Post', Post);
}
