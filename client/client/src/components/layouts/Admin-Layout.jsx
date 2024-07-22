import { NavLink, Outlet } from "react-router-dom"
import { HiUsers } from "react-icons/hi2";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaServicestack } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
        <ul>
            <li>
             <NavLink  to="/admin/users"> <HiUsers />Users</NavLink>
              </li>
              <li>
             <NavLink  to="/admin/contacts"> <RiContactsBook2Fill />
               Contact</NavLink>
              </li>
            <li><NavLink to="/service"><FaServicestack />Services</NavLink></li>
            <li><NavLink to="/"> <FaHome />Home</NavLink></li>
        </ul>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default AdminLayout
