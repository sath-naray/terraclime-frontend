// import axios from "axios";
async function LoginApi() {
    try
    {
        // const result = await axios.post('http://localhost:3003/api/v1/add-connections');
        return result.data;
    }
    catch (error)
    {
        console.error("Error in API", error);
        throw error;
    }
}