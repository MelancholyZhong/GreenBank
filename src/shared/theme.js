const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            // Purple and green play nicely together.
            main: "#76ff03",
          },
          secondary: {
            // This is green.A700 as hex.
            main: "#80deea",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            // Purple and green play nicely together.
            main: "#121212",
          },
          secondary: {
            // This is green.A700 as hex.
            main: "#fff",
          },
        }),
  },
})

export { getDesignTokens }
