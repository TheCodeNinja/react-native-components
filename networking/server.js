/*
This contains functions, that send GET, POST, DELETE, PUT requests to server
*/

const apiGetAllFoods = 'http://localhost:3001/list_all_foods';
const apiInsertNewFood = 'http://localhost:3001/insert_new_food';

// get all foods
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json(); // {"result": "ok", "data": {}, "message": "" }
        return responseJson.data; // list of foods
    } 
    catch(error) {
        console.error(`Error is : ${error}`);
    }
}

// insert new food
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json(); // {"result": "ok", "data": {}, "message": "" }
        return responseJson.result; 
    } 
    catch(error) {
        console.error(`Error is : ${error}`);
    }
}

export {getFoodsFromServer};
export {insertNewFoodToServer};