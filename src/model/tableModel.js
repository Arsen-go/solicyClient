import axios from "axios";

class Table {
    constructor(API) {
        this.api = API;
        this.url = "http://localhost:4000/graphql"
    }

    async getUsers() {
        const { data } = await axios.post(this.url, {
            query: this.api.getUsers,
            variables: {
                limit: 100,
                skip: 0
            }
        }, {
            headers: {
                'Content-Type': this.api.contentType,
                'authentication': this.api.authToken
            }
        })

        try {
            return { data: data.data.users, error: null };

        } catch (error) {
            return { error: error.message, data: null };
        }
    }
}

export default Table;