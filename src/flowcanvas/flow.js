import { STORAGE_KEY } from '../nodes/nodeTypes';

function saveToLocalStorage(data) {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        postToApi();
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromLocalStorage() {
    try{
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
} 

async function postToApi() {
    try{
        const data = loadFromLocalStorage();
        if(!data) return;

        const response = await fetch('http://localhost:9000/api/sync-nodes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log('Data posted to API', await response.json());
    } catch {
        console.error('Error posting to API');
    }
}

function pathToKey(path) {
    return path.join('__');
} 

export {
    pathToKey,
    saveToLocalStorage,
    loadFromLocalStorage,
    postToApi
}