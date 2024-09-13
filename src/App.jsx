import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="bookings" element={<Bookings />}></Route>
          <Route path="cabins" element={<Cabins />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="Account" element={<Account />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
