// https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
// importer fontAwesome from fortawesome, add the library and run dom.i2svg
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Barra que fica no topo de todas as páginas
import '../scss/desktop-topbar.scss';
// Normaliza entre navegadores
import 'normalize.css';

library.add(fas, far, fab);

dom.i2svg();
