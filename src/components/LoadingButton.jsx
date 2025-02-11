import clsx from "clsx";
import { Loader2 } from "lucide-react";

const LoadingButton = ({ isLoading, children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "w-full px-8 py-4 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300",
        "flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
};

export default LoadingButton;
