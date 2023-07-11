import axios from "axios"
import { FAIL_REQUEST, GET_TENANT_LIST, MAKE_REQUEST } from "./ActionType"

export const makeRequest=()=>{
    return {
        type:MAKE_REQUEST
}
}

export const failRequest=(err)=>{
    return {
        type:FAIL_REQUEST,
        payload:err
}
}

export const getTenantList=(data)=>{
    return {
        type:GET_TENANT_LIST,
        payload:data
}
}

export const FetchTenantList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:8000/tenantdata').then(res=>{
            const tenantlist=res.data;
            dispatch(getTenantList(tenantlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}