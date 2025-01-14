import { FaClock, FaCheck } from "react-icons/fa";

export default function Badges({
  color = "red",
  size = "medium",
  icon = "clock",
  title,
}) {
  const icons = {
    clock: <FaClock />,
    check: <FaCheck />,
  };
  const colorClasses = {
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
  };
  const sizeClassName = {
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <>
      <div className={`rounded flex items-center m-2 ${colorClasses[color]} ${sizeClassName[size]} `}>
        <div className="mr-2">{icons[icon]}</div>
        <div>{title}</div>
      </div>
    </>
  );
}
