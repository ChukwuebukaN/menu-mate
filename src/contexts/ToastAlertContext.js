/* eslint-disable func-names */
/* eslint-disable no-shadow */
import React, {
  useEffect,
  useCallback,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";

const initialToast = {
  message: "",
  type: null,
  visible: false,
};

const ToastAlertContext = createContext();
export default ToastAlertContext;

export function ToastAlertContextProvider({ children }) {
  const [toast, setToast] = useState(initialToast);
  const timeout = useRef();

  const show = useCallback((args) => {
    setToast({ ...initialToast, visible: true, ...args });
  }, []);

  const hide = useCallback(() => {
    setToast({ ...toast, visible: false });
  }, [toast]);

  useEffect(() => {
    const ac = new AbortController();
    if (toast.visible) {
      timeout.current = setTimeout(hide, 1500);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
    return function cleanup() {
      ac.abort();
    };
  }, [hide, toast]);

  return (
    <ToastAlertContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        hide,
        show,
        toast,
      }}
    >
      {children}
    </ToastAlertContext.Provider>
  );
}

export function useToastAlertContext() {
  return useContext(ToastAlertContext);
}
