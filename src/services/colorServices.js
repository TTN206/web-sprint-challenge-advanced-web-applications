import {axiosWithAuth} from '../helpers/axiosWithAuth';

export const editColorService = () => {
    axiosWithAuth()
      .put(`/colors`) // i have the wrong params to find the id of the editingColors
      .then(res => console.log(res))
      .catch(err => console.log(err))
}

export const deleteColorService = () => {
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
}