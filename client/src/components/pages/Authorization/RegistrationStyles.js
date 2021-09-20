import { red } from "@material-ui/core/colors";

const orange = "#F2A74B";
const textLight = "#e1e1e1";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";
const cursorView = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA2pJREFUSEutlV9II1cUxs9R7IYJQXBEVhmEoZsxIANK0bCGKsnDPomKMSpUCT6soGVCNCpJ8c9DaZbV9jG2hGKWCkFEUR9EKEqCVq2CFB8sIhYJ1biY+OCKi+uYTLkXFPOw1dFcuMzDPff73XO+e89gLBY73t/fXxQE4VuWZT9AmgfOzMwoY2Nj0N/f/6vRaHydZn3A2dlZpaurC/Lz82FxcXGOYZi6dEJuAUS0oKAAxsfHfTzPuxDxUzpAKQBFUaCkpCQ5PDz8kyAIfWkHEMFkMgl5eXmJzc3NnxFReiokJQOO4yAej8Pl5SVwHHfh9/vdBoPhF0S8fiyIAiRJArvdDu3t7cQDOmVZBqPR+K/H4+kQRXH+SQCXywULCwug1+vh4OAAWltbIRqNQlZWFlit1hOv12tGxL8fA6EZOBwO8Pv9YDAYIBAI0AyI4WQgIrhcrkhtbe0rjuP21ELoQxsYGICLiwtgWRZOTk4gMzMzRSc7OxskSfrDYrHYeJ5/rwaC09PTytbWFrS1tUEkEqGlicViNKOrq6tbLQIJBAL/lJaWvlAN2NvbA7fbTfednp7Sm8TzPIyOjoLP54NEIkHXrq+vYWlpaV+v11cgYuwhIJrBDYCId3Z2wurqKng8HmhoaACbzQaHh4e3WjqdDgYHB3+3Wq3fIGL8PkgKYHd3FywWC2g0GigsLIRwOAwmkwmOj49vdYj5Wq02OTExsSyKolkV4Pz8HEZGRmBjY4NcT/ouKisrKYB4kJGRQSe5WeQQoVDoJSL++X+QlAxI4MrKCt1cVlZG9wWDQeKF0tfXF4pGoysMw9B1QRBI3/oBEeUHA8gjq66upvE7Ozv0S0pSXFwMTU1Nb4aGhvoRMXlfWe6u0wxI7evr68lM9Pb2Hk5NTT232+3PGhsbaSzxIhQKfXQ4HF/l5ubuqgLc/NG0Wi1UVFT8JknS9+vr6++cTqeJtI+cnBw4OjqCnp4e6OjocFdVVb1VDZicnITm5ubvampqRhHxTFGUQqfTGSkqKiKitIV7vV4QRfFjXV2dVhVAluWFs7OzZZZlf7xr2Pb29rLP5/uaAEhvCofDiZaWlkh3d/eXqgCfC15bWzMEg8G/ZFnW6HS6dZvNNldeXj6OiNG0ABRF+WJ+ft7EMMwHs9l8hIiqmtzNIf4DR4KmKK+PxhcAAAAASUVORK5CYII=) 0 0, auto";

export const register = theme => ({
    main: {
        margin: theme.spacing(8, 3, 4),
        display: "block",
        width: "auto",
        [theme.breakpoints.up(400 + theme.spacing(2))]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        position: "relative",
        marginTop: theme.spacing(2),
        padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
            "linear-gradient(180deg, rgb(118 136 158) 15%, rgb(208 160 101) 90%)",
        boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",

        "&:hover": {
            boxShadow: "0px 24px 36px rgba(131,153,167,0.99)"
        }
    },
    avatar: {
        marginTop: 20,
        position: "relative",
        width: "100px",
        height: "100px",
    },
    signup: {
        backgroundColor: "#ffffff",

        "&:hover" : {
            backgroundColor: "#f1f1f1",
        }
    },
    telegramCheckbox: {
        //boxShadow: "1px 2px 20px rgb(169 198 217 / 29%)",
        fontFamily: "Cutive Mono, monospace",
        marginLeft: theme.spacing(1),
        borderColor: "rgba(206,212,218, .993)",
        marginRight: theme.spacing(1),
        borderRadius: theme.spacing(1)
    },

    icon: {
        width: "80px",
        height: "80px",
        color: "rgba(131,153,167,0.79)"
    },

    form: {
        margin: theme.spacing(4)
    },
    labels: {
        padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
        fontSize: "13px",
        lineHeight: "5px",
        fontFamily: "PT Mono, monospace",
        fontWeight: 400,
        opacity: 0.45,
        color: `${textDark} !important`,
    },

    inputs: {
        position: "relative",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        fontFamily: "Cutive Mono, monospace",
        color: textDark,
        fontSize: "14px",
        padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
        borderRadius: "8px",
        border: "1.4px solid",
        boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
        borderColor: borderLight,
        cursor: cursorView,

        "&:hover": {
            background: "rgba(169,198,217,0.36457423) ",
        },

        "& > input": {
          cursor: cursorView
        }
    },

    button: {
        color: textDark,
        background: "rgba(255,255,255,.45)",
        position: "relative",
        fontWeight: 400,
        fontFamily: "Raleway, sans-serif",
        overflow: "hidden",
        marginTop: theme.spacing(6),
        padding: `${theme.spacing(1.6)}px`,
        border: "none",
        borderRadius: "8px",
        letterSpacing: "3px",

        "&::before, &::after": {
            position: "absolute",
            content: '""',
            boxSizing: "border-box",
            borderRadius: "8px",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 1
        },
        "&::before": {
            borderBottom: "2px solid rgba(255,255,255,.58)",
            borderTop: "2px solid rgba(255,255,255,.58)",
            transform: "scale(0,1)"
        },
        "&::after": {
            borderLeft: "3px solid rgba(255,255,255,.58)",
            borderRight: "3px solid rgba(255,255,255,.58)",
            transform: "scale(1,0)"
        },
        "&:hover::before": {
            transform: "scale(1,1)",
            transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
        },
        "&:hover::after": {
            transform: "scale(1,1)",
            transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
        },
        "&::first-letter": {
            color: orange
        },
        "&:hover": {
            background: "rgba(169,198,217,0.8)",
            color: textLight
        }
    },
    error: {
        border: `1.2px solid ${red[900]}`,
        background: "rgba(169,198,217,0.29457423)",
        color: red[900],
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Raleway, sans-serif",
        display: "flex",
        alignItems: "center",
        paddingBottom: theme.spacing(3)
    },

    passwordEye: {
        color: "rgba(49,110,148,0.9)",
        opacity: 0.7,
        cursor: "pointer"
    },

    haveAccount: {
        cursor: "pointer",
        width: "fit-content",
        color: "#233a59",
        paddingLeft: theme.spacing(1),
        "&:hover" : {
            color: "#2c4a72"
        }
    },

    fileInput: {
        display: "none"
    },
});
