import {projectData} from "../projectData";
import TYPES from "../config/types";

const flow = {

    state: {},
    reducers: {},
    effects: (dispatch) => {

        return {
            async changeProjectData(payload, store) {
                const {current} = payload;
                const data = projectData[current];
                dispatch.select.setSelectedKeyAction({key: TYPES.SELECT.PROJECT_DATA, value: data})
            }
        }
    }
};

export default flow;