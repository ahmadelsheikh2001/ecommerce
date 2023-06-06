import baseUrl from '../Components/Api/baseURL';
const useGetData = async (url, parmas) => {
    const res = await baseUrl(url, parmas);
    return res.data;

}
export default useGetData;