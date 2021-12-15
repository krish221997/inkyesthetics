import TYPES from "./config/types";
import {content} from "./content";

export const projectData = {
    0: {
        image: "/images/fusion.jpg",
        heading: "Fusion",
        brief: content.p0.brief,
        url: "https://tanvimehta6697.wixsite.com/my-site"
    },
    1: {
        image: "/images/list-page-cc.jpg",
        heading: "Creative Collaborations",
        brief: content.p1.brief,
        url: `/${TYPES.ROUTES.CREATIVE_COLLABORATIONS}`
    },
    2: {
        image: "/images/list-page-amp.jpg",
        heading: "Ampmateur",
        brief:content.p2.brief,
        url: `/${TYPES.ROUTES.AMPMATEUR}`
    },
    3: {
        image: "/images/list-page-chatea.jpg",
        heading: "Chatea",
        brief: "How would you package yourself? Does it really represent who you are and what you\n" +
            "                    aspire to be?",
        url: `/${TYPES.ROUTES.CHATEA}`
    },
    4: {
        image: "/images/list-page-brahma.jpg",
        heading: "Devata Hastas",
        brief: content.p4.brief,
        url: `/${TYPES.ROUTES.DEVATA_HASTAS}`
    }
}