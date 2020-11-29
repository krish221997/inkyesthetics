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
            },

            async setNextAndPreviousProject(payload, store) {
                const {currentProject} = payload;
                let nextProject = false;
                let previousProject = false;

                if (currentProject === 0) {
                    nextProject = projectData[currentProject + 1];
                } else if (currentProject === Object.keys(projectData).length - 1) {
                    previousProject = projectData[currentProject - 1];
                } else {
                    nextProject = projectData[currentProject + 1];
                    previousProject = projectData[currentProject - 1];
                }

                dispatch.select.setSelectedKeyAction({key: TYPES.SELECT.PREVIOUS_PROJECT_DATA, value: previousProject});
                dispatch.select.setSelectedKeyAction({key: TYPES.SELECT.NEXT_PROJECT_DATA, value: nextProject});

            }
        }
    }
};

export default flow;