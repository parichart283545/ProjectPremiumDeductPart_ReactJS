export const actionTypes = {
    MANAGEDEDUCT_RESET: "[Reset] Action",
    MANAGEDEDUCT_UPDATESEARCH_ADV: "[MANAGEDEDUCT_UPDATESEARCH_ADV] Action",
    MANAGEDEDUCT_UPDATESEARCH_REN: "[MANAGEDEDUCT_UPDATESEARCH_REN] Action",
    MANAGEDEDUCT_UPDATESELCETEDGROUP: "[MANAGEDEDUCT_UPDATESELCETEDGROUP] Action",
    // UPDATE_PAYMENT: "[UPDATE_PAYMENT] Action",
    // DELETE_BY_ID: "[DELETE_BY_ID] Action",
    // CALCULATE: "[Calculate] Action",
};

// state ค่าที่ถูกเก็บไว้
const initialState = {
    searchAdvanceWord: '',
    advanceGroup: [
        {
            GroupId: 0,
            GroupCode: '', //รหัสกลุ่ม
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม
            DateDeductSent: '',//วันที่ส่งหักเบี้ย
            BankName: '',//ธนาคาร
            GroupStatusId: '',//id สถานะ
            GroupStatusDetail: '',//รายละเอียด สถานะ
            SeeMoreDetail: '',//รายละเอียด
            Action: '',//link ทำรายการ
            GroupRemark: ''
        },
    ],
    searchRenewalWord: '',
    renewalGroup: [
        {
            GroupId: 0,
            GroupCode: '', //รหัสกลุ่ม
            BillingItemCount: 0,//จำนวนรายการ
            TotalNet: 0.0,//เบี้ยรวม
            DateDeductSent: '',//วันที่ส่งหักเบี้
            BankName: '',//ธนาคาร
            GroupStatusId: '',//id สถานะ
            GroupStatusDetail: '',//รายละเอียด สถานะ
            SeeMoreDetail: '',//รายละเอียด
            Action: '',//link ทำรายการ
            GroupRemark: ''
        },
    ],
    selectedGroup: {
        GroupId: 1,
        GroupCode: 'RB00001',
        groupMode: 'หักส่งล่วงหน้า',
        groupStatus: 'หักไม่ได้',
        groupRemark: 'พบปัญหาที่บัญชี',
    },
    groupSelectedData: [
        // {
        //     ItemId: 0,//id
        //     ItemCode: '',//รหัสอ้างอิง
        //     BankAccountNo: '',//เลขที่บัญชี
        //     BankAccountName: '',//ชื่อบัญชี
        //     TotalNet: 0.00,//จำนวน
        //     StatusDetail: '',//สถานะ
        //     Remark: '',//สาเหตุที่หักไม่ได้
        //     Manage: '',//จัดการ
        // },
        {
            ItemId: 1,//id
            ItemCode: 'RD000001',//รหัสอ้างอิง
            BankAccountNo: '9845229557',//เลขที่บัญชี
            BankAccountName: 'นางสมศรี ปองหมาย',//ชื่อบัญชี
            TotalNet: 430,//จำนวน
            StatusDetail: 'หักได้',//สถานะ
            Remark: '',//สาเหตุที่หักไม่ได้
            Manage: '',//จัดการ
        },
        {
            ItemId: 2,//id
            ItemCode: 'RD000002',//รหัสอ้างอิง
            BankAccountNo: '98452212536',//เลขที่บัญชี
            BankAccountName: 'นายสมหมาย รักการดี',//ชื่อบัญชี
            TotalNet: 540,//จำนวน
            StatusDetail: 'หักไม่ได้',//สถานะ
            Remark: 'จำนวนเงินไม่พอ',//สาเหตุที่หักไม่ได้
            Manage: '',//จัดการ
        },
        {
            ItemId: 3,//id
            ItemCode: 'RD000003',//รหัสอ้างอิง
            BankAccountNo: '9845229774',//เลขที่บัญชี
            BankAccountName: 'นางสมาน รักษาสะอาด',//ชื่อบัญชี
            TotalNet: 423,//จำนวน
            StatusDetail: 'หักไม่ได้',//สถานะ
            Remark: 'จำนวนเงินไม่พอ',//สาเหตุที่หักไม่ได้
            Manage: '',//จัดการ
        },
    ]
};

// reducer แต่ละ Action จะไป update State อย่างไร
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MANAGEDEDUCT_RESET: {
            return initialState;
        }
        case actionTypes.MANAGEDEDUCT_UPDATESEARCH_ADV: {
            return { ...state, searchAdvanceWord: action.payload };
        }
        case actionTypes.MANAGEDEDUCT_UPDATESEARCH_REN: {
            return { ...state, searchRenewalWord: action.payload };
        }
        case actionTypes.MANAGEDEDUCT_UPDATESELCETEDGROUP: {
            return { ...state, selectedGroupCode: action.payload };
        }


        default:
            return state;
    }
};

//action เอาไว้เรียกจากข้างนอก เพื่อเปลี่ยน state
export const actions = {
    reset: () => ({ type: actionTypes.MANAGEDEDUCT_RESET }),
    updateSearchAdvance: (payload) => ({ type: actionTypes.MANAGEDEDUCT_UPDATESEARCH_ADV, payload }),
    updateSearchRenewal: (payload) => ({ type: actionTypes.MANAGEDEDUCT_UPDATESEARCH_REN, payload }),
    updateSelectedGroupCode: (payload) => ({ type: actionTypes.MANAGEDEDUCT_UPDATESELCETEDGROUP, payload }),
    // calculate: () => ({ type: actionTypes.CALCULATE }),
    // updatePayment: (payload) => ({ type: actionTypes.UPDATE_PAYMENT, payload }),
    // deleteById: (payload) => ({ type: actionTypes.DELETE_BY_ID, payload }),
};