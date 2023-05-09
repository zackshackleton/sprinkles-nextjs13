import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import colors from "@/styles/colors.css";
import spaces from "@/styles/spaces.css";

const customProperties = defineProperties({
    // Comment out any condition and sprinkles will work in production build
    conditions: {
        active: { selector: "&:active" },
        after: { selector: "&:after" },
        before: { selector: "&:before" },
        focus: { selector: "&:focus-within" },
        default: {},
        tablet: { "@media": "screen and (min-width: 768px)" },
    },
    defaultCondition: "default",
    properties: {
        background: colors,
        color: colors,
        paddingBottom: spaces,
        paddingLeft: spaces,
        paddingRight: spaces,
        paddingTop: spaces,
        cursor: ["pointer"],
    }
})

const sprinkles = createSprinkles(customProperties);

export default sprinkles;
