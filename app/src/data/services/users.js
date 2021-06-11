
const usersApiUrl = 'http://127.0.0.1:8000/api/users/';

export const userRequest = async (packageData = {}) => {

    const { id, method, body } = packageData;

    let url = usersApiUrl;
    const userId = id || false;
    const bodyData = body || {};
    const headers = {
        method: method || 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    if (userId) url = `${usersApiUrl}${userId}/`;
    if (Object.entries(bodyData).length > 0) headers.body = JSON.stringify(bodyData);

    try {
        console.log(headers);
        const response = await fetch(url, headers);
        console.log(response);
        const responseJson = await response.json();
        return responseJson;
    }
    catch (err) {
        console.log(err);
        return { error: err, success: 'false' }
    }
}
