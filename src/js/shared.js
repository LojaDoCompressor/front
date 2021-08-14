// Polyfills para navegadores antigos (async, promise, await)
import "core-js/es/promise";
import "regenerator-runtime/runtime";

// Barra que fica no topo de todas as páginas
import '../scss/desktop-topbar.scss';
// Normaliza entre navegadores
import 'normalize.css';

(async () => {
    // https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
    // adds the fontawesome library and run dom.i2svg
    const faSvgCore = import('@fortawesome/fontawesome-svg-core');
    const faSvgFreeSolid = import('@fortawesome/free-solid-svg-icons');
    const faSvgFreeRegular = import('@fortawesome/free-regular-svg-icons');
    const faSvgFreeBrands = import('@fortawesome/free-brands-svg-icons');

    const { library, dom } = await faSvgCore;
    const { fas } = await faSvgFreeSolid;
    const { far } = await faSvgFreeRegular;
    const { fab } = await faSvgFreeBrands;

    library.add(fas, far, fab);

    dom.i2svg();
})();
