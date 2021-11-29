// action type บอกว่า Redux ตัวนี้ สามารถทำอะไรได้บ้าง
export const actionTypes = {
    RESET: "[Reset] Action",
    // UPDATE_PAYMENT: "[UPDATE_PAYMENT] Action",
    // DELETE_BY_ID: "[DELETE_BY_ID] Action",
    // CALCULATE: "[Calculate] Action",
};


// state ค่าที่ถูกเก็บไว้
const initialState = {
    firstPeriodGroup: [
        {
            GroupId: 0,
            GroupCode: '', //รหัสกลุ่ม
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม
            NoticeBillingDateRange: '',//ช่วงเวลาวันที่แจ้งชำระ
            CreatedDate: '',//วันที่ทำรายการ
            CreatedById: '',//ผู้ทำรายการ
            BillingStatusDetail: ''//สถานะ
        },
    ],
    firstPeriodItem: [
        {
            ItemId: 0,
            NoticeBillingDateRange: '', //ช่วงเวลาวันที่แจ้งชำระ
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม

        }
    ],
    continuePeriodGroup: [
        {
            GroupId: 0,
            GroupCode: '', //รหัสกลุ่ม
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม
            CreatedDate: '',//วันที่ทำรายการ
            CreatedById: '',//ผู้ทำรายการ
            BillingStatusDetail: ''//สถานะ
        },
    ],
    continuePeriodItem: [
        {
            ItemId: 0,
            StatusPolicyDetail: '', //สถานะกรมธรรม์
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม
        }
    ],
};


// reducer แต่ละ Action จะไป update State อย่างไร
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET: {
            return initialState;
        }


        default:
            return state;
    }
};

//action เอาไว้เรียกจากข้างนอก เพื่อเปลี่ยน state
export const actions = {
    reset: () => ({ type: actionTypes.RESET }),
    // calculate: () => ({ type: actionTypes.CALCULATE }),
    // updatePayment: (payload) => ({ type: actionTypes.UPDATE_PAYMENT, payload }),
    // deleteById: (payload) => ({ type: actionTypes.DELETE_BY_ID, payload }),
};