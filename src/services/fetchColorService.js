import {axiosWithAuth} from '../helpers/axiosWithAuth';

export default fetchColorService = () => {

    return axiosWithAuth()
        .get(`/colors`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
};
