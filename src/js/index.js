import Glide from '@glidejs/glide';

import('@glidejs/glide/src/assets/sass/glide.core.scss');


const config = {
  type: 'slider',
  startAt: 0,
  perView: 1,
  breakpoints: {
    800: {
      perView: 2,
    },
  },

};

new Glide('.glide', config).mount();
