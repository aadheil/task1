import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

export const getItems = async()=>{
    return await commonAPI("GET",`${BASEURL}`,"","")
 }