export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
        <header class="container main-header">
           <div class="row">
             <div class="col-12 main-header-content>
                <img class="logo" src="./img/logo.png" alt="logo">
                <nav class="hidden visible-sm-flex main-nav">
                    <a class="link" href="./">Home</a>
                    <a class="link" href="./services">Services</a>
                    <a class="link" href="./team">Team</a>
                    <a class="link" href="./contact-us">Contact us</a>
                </nav>
            </div>
          </div>
        </header >`;
        return HTML;
    }

    main() {
        const HTML = `
              <main class="container">
                
              </main>`;
        return HTML;
    }

    footer() {
        const HTML = '<footer class="container">&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}
