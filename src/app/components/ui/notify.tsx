type NotifyProps = {
  color: "RED" | "GREEN" | "YELLOW" | "BLUE";
  message: string;
};

export const Notify = ({ color, message }: NotifyProps) => {
  const colorClasses = {
    RED: "bg-red-500",
    GREEN: "bg-green-500",
    YELLOW: "bg-yellow-500",
    BLUE: "bg-blue-500"
  };

  return (
    <div className={`relative top-0 text-white px-6 py-3 rounded-lg shadow-lg ${colorClasses[color]}`}>
      {message}
    </div>
  );
};
