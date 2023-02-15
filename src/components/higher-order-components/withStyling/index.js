import { IconContext } from "react-icons";

export default function withStyling(ComponentToBeStyled) {
  return (
    <IconContext.Provider
      value={{
        style: {
          height: "3.5rem",
          width: "3.5rem",
          color: "#a08016",
          marginBottom: "0.5rem",
        },
      }}
    >
      <ComponentToBeStyled />
    </IconContext.Provider>
  );
}
