//此文件用于封装axios
import request from "./index";
import type {StudentRegisterForm} from "./model"
export const StudentRegister=(form:StudentRegisterForm)=>{
    return request({
    url:"/student/register",
    method:"post",
    data:form
})
}       