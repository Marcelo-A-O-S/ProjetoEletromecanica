import { cookies } from "next/headers";

const getAsyncToken = async ()=>{
    const cookieStore = await cookies();
    return cookieStore.get("auth-token")?.value || null;
}
export {
    getAsyncToken
}