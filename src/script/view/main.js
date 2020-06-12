import DataConsumer from "../data/data-consumer.js"
import "../component/app-header.js";
import "../component/weeb-list.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const weebListElement = document.querySelector("weeb-list");

    const onSearch = () => {
        weebListElement.items = [];
        DataConsumer.searchWeeb(searchElement.valueType,searchElement.valueTitle)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        weebListElement.items = results;
    };

    const fallbackResult = message => {
        weebListElement.renderError(message);
    };

    searchElement.clickEvent = onSearch;
}

export default main;