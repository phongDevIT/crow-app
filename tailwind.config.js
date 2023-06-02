module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Epilogue", "sans-serif"],
            },
            colors: {
                primary: "#1DC071",
                secondary: "#6F49FD",
                secondaryOP: "#A992FE",
                secondaryBT: "#EEEAFD",
                darkbg: "#3A3A43",
                darkSecondary: "#1C1C24",
                softDark: "#22222C",
                darkSoft: "#24242C",
                darkStrock: "#3A3A43",
                darkRef: "#422C32",
                text1: "#171725",
                text2: "#4B5264",
                text3: "#808191",
                text5: "#B2B3BD",
                text4: "#A2A2A8",
                white: "#ffffff",
                whiteSoft: "#FCFBFF",
                graySoft: "#FCFCFC",
                strock: "#F1F1F3",
                lite: "#FCFCFD",
                error: "#EB5757",
                refSoft: "#F9E3E3",
            },
            boxShadow: {
                sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
            },
        },
    },
    plugins: [],
};
