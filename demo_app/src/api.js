const { default: Axios } = require("axios")

const PostData = ({ name, password }) => {

    return new Promise((resolve, reject) => {
        Axios.post(`http://localhost:4000/token`, { name, password }, {
            headers: {
                'content-type': 'application/json'
            },
        }).then(res => {
            resolve(res)
        }).catch(err => {
            debugger
            reject(err)
        })
    })
}

export { PostData }