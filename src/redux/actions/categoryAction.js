import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
// import baseUrl from "../../Components/Api/baseURL";
import useGetData from "../../hook/useGetData";
const getAllCategory = () => async (dispatch) => {

    try {
        // const res = await baseUrl.get('/api/v1/categories');
        const response = await useGetData('/api/v1/categories');
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload:'Error'+ e,
        })
    }
}
export default getAllCategory