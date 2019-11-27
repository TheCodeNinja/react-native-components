/*
This contains functions, that send GET, POST, DELETE, PUT requests to server
*/

const apiGetAllFoods = 'http://localhost:3001/list_all_foods';

// get all foods
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        return responseJson.data; // list of foods
    } 
		catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export {getFoodsFromServer};