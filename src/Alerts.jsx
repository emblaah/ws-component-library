import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

export default function Alerts({ color = "red", icon = "info", title }) {
  const colorClasses = {
    blue: "bg-blue-400 text-white",
    red: "bg-red-400 text-white",
    green: "bg-green-400 text-white",
  };

  const icons = {
    info: <FaInfoCircle />,
    error: <FaExclamationTriangle />,
    check: <FaCheckCircle />,
  };

  return (
    <>
      <div className={`rounded flex items-center p-2 m-2 ${colorClasses[color]} `}>
        <span className="mr-2">{icons[icon]}</span>
        <span>{title}</span>
      </div>
    </>
  );
}
