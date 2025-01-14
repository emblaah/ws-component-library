export default function Button({
  size = "medium",
  color = "red",
  disabled = false,
  title,
}) {
  const sizeClassName = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <div className="flex justify-center m-2">
      <button
        className={`rounded flex flex-col  ${sizeClassName[size]} ${colorClasses[color]} ${disabledClasses}`}
        disabled={disabled}>
        {title}
      </button>
    </div>
  );
}
