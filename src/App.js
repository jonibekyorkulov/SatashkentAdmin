import React from "react";
import muiTheme from "./theme/muiTheme";
import defaultTheme from "./theme/defaultTheme";
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Router } from "react-router-dom"
import SignInSide from "./components/SignInSide";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import ErrorPage from "./components/404";
import PageUsers from "./components/PageUser";
import PagePractices from "./components/PagePractices";
import PageGroups from "./components/PageGroups";
import PageAdmin from "./components/PageAdmin";
import PageRole from "./components/PageRole";


function App() {

  const user = useSelector((state) => state.user);

  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignInSide />}  errorElement={<ErrorPage/>}/>
            {sessionStorage.getItem("access_token") || user ? (<>
              <Route path="/" element={<Main/>} errorElement={<ErrorPage/>}>
                <Route index element={<PageUsers/>}/>
                <Route path="practices" element={<PagePractices/>}/>
                <Route path="groups" element={<PageGroups/>}/>
                <Route path="admins" element={<PageAdmin/>}/>
                <Route path="roles" element={<PageRole/>}/>
              </Route>
            </>):(<></>)}
            <Route path="*" element={<Navigate to={"/login"}  errorElement={<ErrorPage/>} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
