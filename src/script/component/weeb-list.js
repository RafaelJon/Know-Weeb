import "./weeb-item.js"

class WeebList extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set items(items){
        this._items = items;
        this.render();
    }

    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: darkblue;
                text-align: center;
            }

        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message}</h2>`
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                weeb-item{
                    width: 20%;
                    display: flex;
                    margin: 20px 0;
                    overflow: hidden;
                }
                @media screen and (max-width: 800px){
                    weeb-item{
                        width: 100%;
                        margin: 10px;
                    }
                }
            </style>`;
        this._items.forEach( item => {
            const weebItemElement = document.createElement("weeb-item");
            weebItemElement.item = item;
            this.shadowDOM.appendChild(weebItemElement);
        })
    }
}

customElements.define("weeb-list", WeebList);