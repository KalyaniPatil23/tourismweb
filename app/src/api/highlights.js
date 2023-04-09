import axios from 'axios';

const getHighlights = () => {
    const result = axios.get('https://web-dev.dev.kimo.ai/v1/highlights');
    console.log("result", result)
}

export {getHighlights};