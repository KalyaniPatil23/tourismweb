
const getHighlights = async(url) => {
    const res = await fetch(url, {
        // mode: 'no-cors',
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) =>
    {
    response.headers("Access-Control-Allow-Origin", "*");
    response.headers("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
    if(!response.ok){
        return Promise.reject("some reason")
    }
    return response.json();
    })
}

const getActivitiesOfHighlight = async(url) => {
    const res = await fetch(url, {
        // mode: 'no-cors',
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) =>
    {
    response.headers("Access-Control-Allow-Origin", "*");
    response.headers("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
    if(!response.ok){
        return Promise.reject("some reason")
    }
    return response.json();
    })
}

export {getHighlights, getActivitiesOfHighlight};