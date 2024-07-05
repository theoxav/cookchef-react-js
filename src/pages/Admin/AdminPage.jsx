import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../components/Admin/NavBar/AdminNav";

const AdminPage = () => {
  return (
    <div className="d-flex flex-fill p-20">
      <AdminNav />
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminPage;
