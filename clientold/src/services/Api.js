/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-20 15:33:45
 * @modify date 2020-09-20 15:33:46
 * @desc [description]
 */

import axios from 'axios'

export default () => {
    return axios.create({
        /**
         * connect to server 
         */
        baseURL: 'http://localhost:8081/'
    })
}