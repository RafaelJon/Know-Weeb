import "../component/search-bar.js"

class AppHeader extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDom.innerHTML = `
        <div class="flex-container">
            <h1>KnowWeeb</h1>
            <h3>By Rafael Jonathan</h3>
            <h3><i>Search your favorite anime or manga here! • Jikan API</i></h3>
        </div>`;
    }
}

customElements.define("app-header", AppHeader);