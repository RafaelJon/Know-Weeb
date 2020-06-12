class DataConsumer{    
    static searchWeeb (type, title) {
        return fetch(`https://api.jikan.moe/v3/search/${type}?q=${title}&limit=15`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.results && responseJson.results.length > 0) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`"${title}" is not found`);
            }
        })
    }
}

export default DataConsumer;