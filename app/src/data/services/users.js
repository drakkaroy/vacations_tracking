import axios from 'axios';
const data = {
    "users": [
        {
            "user": "Rafael Monroy",
            "email": "drakkaroy@gmail.com",
            "idNumber": "112500420",
            "phoneNumber": "88925162",
            "startDay": "2021-18-01",
            "vacationsTaken": [
                {
                    "day": "2021-15-02",
                    "description": "birthday"
                },
                {
                    "day": "2021-31-03",
                    "description": "one day more added to next holy days"
                }
            ]
        },
        {
            "user": "Erick Espinoza",
            "email": "erick@gmail.com",
            "idNumber": "113450934",
            "phoneNumber": "88776655",
            "startDay": "2020-15-02",
            "vacationsTaken": [
                {
                    "day": "2020-27-02",
                    "description": "birthday"
                },
                {
                    "day": "2020-02-07",
                    "description": ""
                },
                {
                    "day": "2020-24-12",
                    "description": "christmas"
                }
            ]
        }
    ]
}

export const getUsers = () => {

    // return new Promise((resolve, reject) => {
    //     resolve(data);
    // })
    axios.get(data)
        .then(res => {
            return res.data;
        });
};