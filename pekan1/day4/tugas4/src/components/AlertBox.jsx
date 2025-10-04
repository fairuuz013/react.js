import style from "./Alert.module.css";

function AlertBox({ type, children }) {
  const alertClass = () => {
    switch (type) {
      case "success":
        return style.success;
      case "warning":
        return style.warning;
      case "error":
        return style.error;
      default:
        return "";
    }
  };

  return (
    <div className={`${style.alert} ${alertClass()}`}>
      {children}
    </div>
  );
}

export default AlertBox;
