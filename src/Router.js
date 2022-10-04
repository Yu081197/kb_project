import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav.js";
import ChatBot from "./components/chatbot/ChatBot";
import Footer from "./components/footer/Footer";

import Main from "./pages/main/Main";
import AccountCreate from "./pages/account_create/AccountCreate";
import AccountLookup from "./pages/account_lookup/AccountLookup";
import Find from "./pages/find/Find";
import Predict from "./pages/predict/Predict";
import Transfer from "./pages/transfer/Transfer";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account_create" element={<AccountCreate />} />
        <Route path="/account_lookup" element={<AccountLookup />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/find" element={<Find />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
