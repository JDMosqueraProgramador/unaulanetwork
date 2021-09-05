import { localApi, unaulaApi } from "../modules/apisConfig";
import { upperFisrtLetterPipe } from "../pipes/lettersPipes";

export const getUserAPI = async (body) => {

    let data = { name: '', rol: '', faculty: '', department: '' }

    await unaulaApi.get(`users/studentinfo/?userName=${body.user}`)
        .then(async response => {

            data.name = upperFisrtLetterPipe(response.data[0].strName);
            data.rol = response.data[0].rol;
            data.faculty = response.data[0].strfacultyname;
            data.department = response.data[0].strDepartmentName;

            await localApi.get(`users/${body.user}`)
                .then(response => {
                    data = {...data, ...response.data}
                }).catch(error => console.log(error.response))

        }).catch(error => console.log(error.response))

    return data;

}