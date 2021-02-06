import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => { //ketika url hash diubah
    app.renderPage();
  });
   
  window.addEventListener('load', () => { //ketika halaman dimuat
    app.renderPage();
    swRegister();
  });