import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EventListingPage from "./pages/EventsList";
import Home from "./routes/Home";

const App = () => {
  return (
      <AppContent />
  );
};

const AppContent = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName="toastBody"
        style={{ marginTop: "5rem" }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventListingPage/>}/>
      </Routes>
    </>
  );
};

export default App;
