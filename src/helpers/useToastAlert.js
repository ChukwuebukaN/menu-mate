import React, { useContext } from "react";
import { ToastAlertContext } from "../contexts/ToastAlertContext";

export const useToastAlert = () => {
  const { toast } = useContext(ToastAlertContext);

  return (
    <div className="absolute px-4 py-2 top-2 right-2 bg-menuMateOrange">
      {/* onPress={hide} */}
      <p className="text-sm leading-4 font-lato font-[400]">{toast.message}</p>
    </div>
  );
};

export default useToastAlert;
