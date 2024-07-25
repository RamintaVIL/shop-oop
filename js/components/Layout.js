export class Layout {
    constructor() { }

    header() {
        const HTML = '<header><img src ="./img/logo.png" alt = "is telefono iseina ranka su pirkiniu krepsiais"><p>Pirkinių Guru</p></header > '
        return HTML;
    }

    main() {
        const HTML = '<main>MAIN</main>';
        return HTML;
    }

    footer() {
        const HTML = '<footer>FOOTER</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}