import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AdminDashboard from "pages/admin/AdminDashboard";
import AdminDokter from "pages/admin/AdminDokter";
import AdminSpesialis from "pages/admin/AdminSpesialis";
import AdminUser from "pages/admin/AdminUser";
import DokterQueue from "pages/dokter/DokterQueue";
import DokterSchedule from "pages/dokter/DokterSchedule";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
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
