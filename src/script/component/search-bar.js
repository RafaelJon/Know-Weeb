class SearchBar extends HTMLElement{
    
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get valueTitle() {
        return this.shadowDom.querySelector("#searchInput").value;
    }

    get valueType() {
        var radioA = this.shadowDom.querySelector("#radioA");
        var radioB = this.shadowDom.querySelector("#radioB");
        if(radioA.checked || radioB.checked){
            if(radioA.checked){
                return radioA.value;
            }
            else{
                return radioB.value;
            }
        }
        alert("select type!");
        return "/\"";
    }

    render(){
        this.shadowDom.innerHTML = `
            <style>
                *{
                    transition: .3s
                }
                .search-container {
                    max-width: 450px;
                    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
                    padding: 10px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    justify-content: space-between;
                    margin: 20px auto;
                    background-color: #7F00FF;
                }
                
                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: none;
                    border-bottom: 1px solid darkblue;
                }
                
                .search-container > input::placeholder {
                    color: darkblue;
                    font-weight: normal;
                }
                
                .search-container > button {
                    width: 20%;
                    cursor: pointer;
                    padding: 10px;
                    background-color: darkblue;
                    color: white;
                    border: none;
                    border-radius: 5px;
                }

                .search-container > button:active{
                    background-color: white;
                    color: darkblue;
                }

                .filter-container{
                    max-width: 600px;
                    margin: 20px auto;
                }

                .flex-row{
                    display: flex;
                    justify-content: center;
                }
                
                @media screen and (max-width: 600px){
                    .search-container {
                        flex-direction: column;
                    }
                
                    .search-container > input {
                        width: 100%;
                        margin-bottom: 10px;
                    }
                
                    .search-container > button {
                        width: 100%;
                    }
                }
            </style>
            <div id="search-container" class="search-container">
                <input placeholder="Search Anime / Manga" id="searchInput" type="search">
                <button id="searchBtn" type="submit">SEARCH</button>
            </div>
            <div class="flex-row filter-container">
                Filter by: 
                <span class="flex-row">
                    <input type="radio" id="radioA" name="type" value="anime" checked>
                    <label for="radioA">ANIME</label><br>
                    <input type="radio" id="radioB" name="type" value="manga">
                    <label for="radioB">MANGA</label>
                </span>
            </div>
        `;

        this.shadowDom.querySelector("#searchBtn").addEventListener("click", this._clickEvent);
    }

}

customElements.define("search-bar", SearchBar);