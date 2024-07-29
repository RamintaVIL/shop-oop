import { Layout } from "../components/Layout.js";

// galima ir taip kviesti, bet sutrumpinome
// const homePage = new Layout();
// homePage.render();

// nebera 'render' iskvieciamas, tai turinys neatsivaizduoja 
// norint, kad issispausdintu, reikia Layout file prie constructor nusirodyti, this.render.
new Layout();

