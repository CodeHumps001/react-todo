import AppLayout from "./layout/AppLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppLayout />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#16a34a", // Tailwind's green-600
            color: "#ffffff",
            fontWeight: "500",
            borderRadius: "10px",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#ffffff",
              secondary: "#16a34a",
            },
          },
        }}
      />
    </>
  );
}

export default App;
