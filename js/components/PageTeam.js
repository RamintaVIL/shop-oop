export class PageTeam {
    constructor(DOM) {
        this.DOM = DOM;

        this.render();
    }

    render() {
        this.DOM.innerHTML = `
        <section class="row">
            <div class="col-12">
                 <h1>Team page</h1>
                 <p>This ours braver!</p>
            </div>
        </section>
        < section class="row services-list">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Chuck Norris</h2>
                    <p>Something about this cool team member!</p>
                </div>
             </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Alisa from Wonderland</h2>
                    <p>Something about this cool team member!</p>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Ironman</h2>
                    <p>Something about this cool team member!</p>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Xena (Lusy Lohan)</h2>
                    <p>Something about this cool team member!</p>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Tom</h2>
                    <p>Something about this cool team member!</p>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="service">
                    <h2>Jerry</h2>
                    <p>Something about this cool team member!</p>
                </div>
            </div> 
        </section >`;
    }
}