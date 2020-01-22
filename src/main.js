// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from './layouts/Default.vue';
import GridContainer from '~/grid/Container.vue';
import Row from '~/grid/Row.vue';
import Col from '~/grid/Col.vue';
import Hero from '~/components/Hero.vue';

export default function(Vue, { router, head, isClient }) {
  //Layout
  Vue.component('Layout', DefaultLayout);

  //Grid
  Vue.component('Container', GridContainer);
  Vue.component('Row', Row);
  Vue.component('Col', Col);

  //General
  Vue.component('Hero', Hero);
}
