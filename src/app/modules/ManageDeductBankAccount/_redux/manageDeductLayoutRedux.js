// action type บอกว่า Redux ตัวนี้ สามารถทำอะไรได้บ้าง
export const actionTypes = {
    UPDATE_TABINDEXID: "[UPDATE_TABINDEXID] Action",

};

const initialState = {
    tabIndex: 0,
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
            //end layout redux

            default:
                return state;

        }
    };

export const actions = {

    updateTabIndex: (payload) => ({
        type: actionTypes.UPDATE_TABINDEXID,
        payload
    }),

}