import axios from "axios";
import * as CONST from "../../../../Constants";
import { encodeURLWithParams } from "../../Common/components/ParamsEncode";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as swal from "../../_common/components/SweetAlert";

//URL Address
const PREMIUM_API_URL = `${CONST.API_URL}/XXXXXXXX`;

//Declare React Query "QueryKey"
const allDeductBankAccount = "amountOfRecommender";

//#region Call API
//#region UI-2-1
//Get The deduction list of first period customer
export const getDeductFirstPaginated = (paginate, searchValues) => {
    let payload = { ...paginate, ...searchValues };
    return axios.get(
        encodeURLWithParams(`${PREMIUM_API_URL}/XXXXXXXXX`, payload)
    );

};
//Get a deduction of first period customer
export const getDeductFirstById = (id) => {
    return axios.get(`${PREMIUM_API_URL}/${id}`);
};
//Insert Deduction list of first period customer
export const addDeductFirst = (payload) => {
    return axios.post(`${PREMIUM_API_URL}/add`, payload);
};
//#endregion

//#region UI-2-2
//Get The deduction list of first period customer
export const getDeductContAll = (payload) => {
    return axios.get(`${PREMIUM_API_URL}/`, payload);
};
//Get a deduction of first period customer
export const getDeductContById = (id) => {
    return axios.get(`${PREMIUM_API_URL}/${id}`);
};
//Update Deduction list of first period customer
export const addDeductCont = (payload) => {
    return axios.post(`${PREMIUM_API_URL}/add`, payload);
};
//#endregion

//#region UI-2-3
//TODO:
//#endregion

//#region UI-2-4
//TODO:
//#endregion




//#endregion

//#region React Query
export const useGetDeductionPaginated = (
    paginate,
    searchValues,
    mode_Id,//1 is first period,2 is continue period
    onSuccessCallBack = () => { },
    onErrorCallBack = () => { }
) => {
    //let result = {};
    // if (mode_Id === 1) {
    //     result = 
    // }
    // else {

    //  }
    return useQuery([allDeductBankAccount, paginate, searchValues],
        () => getDeductFirstPaginated(paginate, searchValues),
        {
            onSuccess: () => {
                onSuccessCallBack();
            },
            onError: (err) => {
                swal.swalError("Error", err.message).then((res) => {
                    if (res.isConfirmed) {
                        onErrorCallBack();
                    }
                });
            },
        }
    );
};
//#endregion
