import "./style.css";
import "./appStyle.css";
import styles from "./appStyle.module.css";
function WayOfStyling(props) {
  // using class object
  //   let styling = {
  //     background: "red",
  //     color: "aqua",
  //     padding: "40px",
  //     borderRadius: "50%",
  //     height: "100px",
  //     width: "100px",
  //     alignItems: "center",
  //     textAlign: "center",
  //   };
  //   return <div style={styling}></div>;
  //   using props
  //   let className = props.primary ? "primary" : "";
  //   return <div className={className}>Hello</div>;
  // inline
  //   const heading = {
  //     fontSize: "50px",
  //     color: "lightblue",
  //   };
  //   return <div style={heading}>Hello</div>;
  // module
  return (
    <div>
      <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1>
    </div>
  );
}

export default WayOfStyling;
