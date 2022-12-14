import config from '../config/default.json';
let api_end_point = config.api_endpoint;



const post_api_call = async (paramEndPoint, requestData) => {
    try {

        // console.log(requestData)
        let result = await fetch(`${api_end_point}${paramEndPoint}`, {
            method: 'POST',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authtoken"),
            },
            body: JSON.stringify(requestData),
        });
        let response = await result.json();

        return response;



    } catch (error) {
        return error;
    }
}
async function ApiCall(endPoint, requestData = null) {
    try {
        let result = await fetch(`${api_end_point}${endPoint}`, {
            method: 'POST',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authtoken"),
            },
        });
        let response = await result.json();

        return response;

    } catch (error) {
        return error;
    }
}

const get_api_call = async (paramEndPoint, requestData) => {
    try {
        let result = await fetch(`${api_end_point}${paramEndPoint}`, {
            method: 'GET',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authtoken"),
            },
            body: JSON.stringify(requestData),
        });
        let response = await result.json();
        return response;
    } catch (error) {
        return error;
    }
}



export {

    post_api_call,
    get_api_call,
    ApiCall
}