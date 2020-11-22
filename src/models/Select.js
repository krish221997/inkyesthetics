const select = {
    state: {}, // initial state
    reducers: {
        setKey(state, payload) {
            const {key, value} = payload
            return {...state, [key]: value}
        }

    },
    effects: (dispatch) => {
        return ({
            async setSelectedKeyAction(payload, rootState) {
                dispatch.select.setKey(payload)
            }
        });
    }
};

export default select;
