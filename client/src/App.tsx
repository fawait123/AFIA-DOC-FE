import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AdminDashboard from "pages/admin/AdminDashboard";
import AdminDokter from "pages/admin/AdminDokter";
import AdminSpesialis from "pages/admin/AdminSpesialis";
import AdminUser from "pages/admin/AdminUser";
import DokterChat from "pages/dokter/DokterChat";
import DokterQueue from "pages/dokter/DokterQueue";
import DokterSchedule from "pages/dokter/DokterSchedule";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  useEffect(() => {
    // Add the desired class to the body element
    document.body.classList.add('bg-gray-50');

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-gray-50');
    };
  }, []); // Empty dependency array ensures the effect runs only once
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/spesialis" element={<AdminSpesialis />} />
        <Route path="/admin/dokter" element={<AdminDokter />} />
        <Route path="/admin/user" element={<AdminUser />} />
        <Route path="/dokter/schedule" element={<DokterSchedule />} />
        <Route path="/dokter/queue" element={<DokterQueue />} />
        <Route path="/dokter/chat" element={<DokterChat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
