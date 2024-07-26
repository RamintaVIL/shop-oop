export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
        <header class="container">
           <div class="row">
             <div class="col>
                <img src="./img/logo.png" alt = "is telefono iseina ranka su pirkiniu krepsiais">
                <p>Pirkinių Guru</p>
                <nav>
                    <a href="./">Home</a>
                    <a href="./services">Services</a>
                    <a href="./team">Team</a>
                    <a href="./contact-us">Contact us</a>
                </nav>
            </div>
          </div>
        </header >`;
        return HTML;
    }

    main() {
        const HTML = `
        <main class="container">
           <section class="row">
               <h1 class="col-12 main-title">Pirmas Posukis</h1>
           </section>
            <section class="row">
              <div class="col-12 main-title">Pirmas posukis</div>
              <div class="col-12 main-title">Pirmas posukis</div>
              <div class="col-6 main-title">Pirmas posukis</div>
              <div class="col-6 main-title">Pirmas posukis</div>
              <div class="col-12 main-title">Pirmas posukis</div>
              <div class="col-12 main-title">Pirmas posukis</div>
           </section>
           
        </main>`;
        return HTML;
    }

    footer() {
        const HTML = '<footer class="conatiner">&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}
