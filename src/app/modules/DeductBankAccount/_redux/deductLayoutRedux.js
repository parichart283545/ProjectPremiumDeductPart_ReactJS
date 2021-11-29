
// action type บอกว่า Redux ตัวนี้ สามารถทำอะไรได้บ้าง
export const actionTypes = {
    LAYOUT_RESET: '[LAYOUT_RESET] Action',
    LAYOUT_OPEN_FIRST: '[LAYOUT_OPEN_FIRST] Action',
    LAYOUT_CLOSE_FIRST: '[LAYOUT_CLOSE_FIRST] Action',
    UPDATE_SELECTEDID_FIRST: '[UPDATE_SELECTEDID_FIRST] Action',
    LAYOUT_OPEN_CONTINUE: '[LAYOUT_OPEN_CONTINUE] Action',
    LAYOUT_CLOSE_CONTINUE: '[LAYOUT_CLOSE_CONTINUE] Action',
    UPDATE_SELECTEDID_CONTINUE: '[UPDATE_SELECTEDID_CONTINUE] Action',
};


// state ค่าที่ถูกเก็บไว้
const initialState = {
    dialogFirst: {
        open: false,
        selectedId: 0
    },
    dialogContinue: {
        open: false,
        selectedId: 0
    },

};


export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LAYOUT_RESET: {
            return initialState
        }
        case actionTypes.LAYOUT_OPEN_FIRST: {
            let newDialogFirst = {
                open: true,
                selectedId: 0//action.payload
            };
            return { ...state, dialogFirst: newDialogFirst };
        }
        case actionTypes.LAYOUT_CLOSE_FIRST: {
            let newDialogFirst = {
                open: false,
                selectedId: 0
            };
            return { ...state, dialogFirst: newDialogFirst };
        }
        case actionTypes.UPDATE_SELECTEDID_FIRST: {
            let newDialogFirst = { ...state.dialogFirst, selectedId: action.payload };
            return { ...state, dialogFirst: newDialogFirst };
        }
        case actionTypes.LAYOUT_OPEN_CONTINUE: {
            let newDialogCont = {
                open: true,
                selectedId: 0//action.payload
            };
            return { ...state, dialogContinue: newDialogCont };
        }
        case actionTypes.LAYOUT_CLOSE_CONTINUE: {
            let newDialogCont = {
                open: false,
                selectedId: 0
            };
            return { ...state, dialogContinue: newDialogCont };
        }
        case actionTypes.UPDATE_SELECTEDID_CONTINUE: {
            let newDialogCont = { ...state.dialogContinue, selectedId: action.payload };
            return { ...state, dialogContinue: newDialogCont };
        }
        default:
            return state;
    }

};

//action เอาไว้เรียกจากข้างนอก เพื่อเปลี่ยน state
export const actions = {
    reset: () => ({ type: actionTypes.LAYOUT_RESET }),//LAYOUT_RESET
    openFirst: () => ({ type: actionTypes.LAYOUT_OPEN_FIRST }),// LAYOUT_OPEN_FIRST
    closeFirst: () => ({ type: actionTypes.LAYOUT_CLOSE_FIRST }),// LAYOUT_CLOSE_FIRST
    updateSelcectedIdFirst: (payload) => ({ type: actionTypes.UPDATE_SELECTEDID_FIRST, payload }),// UPDATE_SELECTEDID_FIRST
    openCont: () => ({ type: actionTypes.LAYOUT_OPEN_CONTINUE }),// LAYOUT_OPEN_CONTINUE
    closeCont: () => ({ type: actionTypes.LAYOUT_CLOSE_CONTINUE }),// LAYOUT_CLOSE_CONTINUE
    updateSelcectedIdCont: (payload) => ({ type: actionTypes.UPDATE_SELECTEDID_CONTINUE, payload }),// UPDATE_SELECTEDID_CONTINUE

};