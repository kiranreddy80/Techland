import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
window.jQuery = $;
window.$ = $;
import 'jquery-easing';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
