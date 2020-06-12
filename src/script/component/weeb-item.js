class WeebItem extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set item(item){
        this._item = item;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML=`
        <style>
            *{
                transition: .3s;
            }
            .item-container{
                display: flex;
                justify-content: center;
                margin: auto;
                height: 300px;
                overflow: hidden;
            }
            .item-container img{
                object-fit: contain;
                margin: auto;
            }
            .detail-item{
                position: absolute;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: stretch;
                align-content: center;
                margin: auto;
                max-width: 150px;
                height:300px;
            }

            .detail-item div{
                color: white;
                text-align: center;
                opacity: 0;
            }

            .item-container:hover img{
                filter: brightness(50%);
            }

            .item-container:hover .detail-item div{
                opacity: 1
            }
        </style>
        <div class="item-container">
            <img src="${this._item.image_url}" alt="">
            <div class="detail-item">
                <div><h3>${this._item.title}</h3></div>
                <div><h5>${this._item.score} &#9734;</h5></div>
                <div>${this._item.rated}</div>
            </div>
        </div>`;
    }
}

customElements.define("weeb-item", WeebItem);