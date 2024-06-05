const styles = {
  input: {
    fontSize: "16px",
    fontFamily: "Arial, sans-serif", // Font style for inputs
    transition: "border-color 0.3s ease-in-out", // Add transition for input border-color
  },
  label: {
    fontFamily: "Cursive, Helvetica, sans-serif", // Font style for labels
  },
  button: {
    fontSize: "16px",
    fontFamily: "Arial, sans-serif", // Font style for buttons
    transition: "background-color 0.3s ease-in-out", // Add transition for button background-color
  },
  hoverEffects: {
    button: {
      "&:hover": {
        backgroundColor: "#0056b3", // Hover effect for buttons
      },
    },
    input: {
      "&:hover": {
        borderColor: "#0056b3", // Hover effect for inputs
      },
    },
  },
};

export default styles;
