import Cookies from "js-cookie";

const getToken = () =>{
    return Cookies.get("auth-token");
}
export{
    getToken
}
