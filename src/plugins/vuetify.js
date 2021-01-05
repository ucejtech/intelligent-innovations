import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7A50F0',
        secondary: '#e22726',
        accent: '#fff2f2',
        error: '#b71c1c'
      },
      dark: {
        primary: '#7A50F0',
        secondary: '#e22726',
        accent: '#fff2f2',
        error: '#b71c1c'
      }
    }
  }
});
