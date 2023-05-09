import { style } from "@vanilla-extract/css";

import sprinkles from "@/styles/sprinkles.css";

export const main = style({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: "50vh",
    flexDirection: "column",
    gap: "2rem",
    fontFamily: "monospace",
});

export const buttonWithStyle = style({
    background: "hsla(212, 33%, 18%, 100%)",
    color: "hsla(0, 100%, 100%, 100%)",
    paddingTop: "1.2rem",
    paddingBottom: "1.2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    cursor: "pointer",
});

export const buttonWithSprinkles = sprinkles({
    background: "grey800",
    color: "white",
    paddingTop: "base",
    paddingBottom: "base",
    paddingLeft: "extraLarge",
    paddingRight: "extraLarge",
    cursor: "pointer",
});
