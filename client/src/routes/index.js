import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../views/client/Home'
import PrivateRoutes from './PrivateRoutes'
import DashboardAdmin from '../views/admin/Dashboard'
import SpecialistAdmin from 'views/admin/Specialist'
import DoctorAdmin from 'views/admin/Doctor'
import AddDoctor from 'views/admin/Doctor/Add'
import Test from 'views/test'
import UserAdmin from 'views/admin/User'
import ArticlePage from 'views/client/Article'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artikel-kesehatan" element={<ArticlePage />} />
                <Route path="/test" element={<Test />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DashboardAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/spesialis"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <SpecialistAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/dokter"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DoctorAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/dokter/tambah"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <AddDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/user"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <UserAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/artikel"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DashboardAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
