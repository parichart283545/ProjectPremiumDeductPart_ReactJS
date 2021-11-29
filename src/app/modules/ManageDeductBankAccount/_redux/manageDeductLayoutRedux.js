// action type บอกว่า Redux ตัวนี้ สามารถทำอะไรได้บ้าง
export const actionTypes = {
    MANAGELAYOUT_RESET: '[MANAGELAYOUT_RESET] Action',
    UPDATE_TABINDEXID: "[UPDATE_TABINDEXID] Action",
    UPDATE_ITEMOPEN: "[UPDATE_ITEMOPEN] Action",
    UPDATE_ITEMCLOSE: "[UPDATE_ITEMCLOSE] Action",
};

const initialState = {
    tabIndex: 0,
    itemView: {
        selectedItemId: 0,
        showDialog: false
    }
}

export const reducer =
    (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.UPDATE_TABINDEXID: {
                return {
                    ...state,
                    tabIndex: action.payload,
                };
            }
            case actionTypes.UPDATE_ITEMOPEN: {
                let newItemView = {
                    selectedItemId: action.payload,
                    showDialog: true
                }
                return { ...state, itemView: newItemView }
            }
            case actionTypes.UPDATE_ITEMCLOSE: {
                let newItemView = {
                    selectedItemId: 0,
                    showDialog: false
                }
                return { ...state, itemView: newItemView }
            }

            default:
                return state;

        }
    };

export const actions = {
    reset: () => ({ type: actionTypes.MANAGELAYOUT_RESET }),//LAYOUT_RESET
    updateTabIndex: (payload) => ({ type: actionTypes.UPDATE_TABINDEXID, payload }),
    updateItemOpen: (payload) => ({ type: actionTypes.UPDATE_ITEMOPEN, payload }),
    updateItemClose: () => ({ type: actionTypes.UPDATE_ITEMCLOSE }),
}