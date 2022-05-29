
const API = {
    headers: {
        contentType: 'application/json',
        authToken: 'auth someToken'
    },

    getUsers: `query ($limit: Float!, $skip: Float) {
        users(limit: $limit, skip: $skip){
            id
            name
            email
            createdAt
            birthDay
        }
    }`,
}

export { API };