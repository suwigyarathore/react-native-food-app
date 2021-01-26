import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7-h9DVxl8BRRSnJ0DJccIUL465v3zLhxBnJg3UjvRrncgQr6jn1yC8OzycdGrzSLzSTgzmIPuQUtZuVqYPnHBmUKPy5OBKgOi3G2bCfiaNMgx5Dm-UdXdpDB2GsOYHYx'
    }
})