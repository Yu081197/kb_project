import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav.js";
import ChatBot from "./components/chatbot/ChatBot";
import ReactChatBot from "./components/chatbot/ReactChatBot";
import Footer from "./components/footer/Footer";

import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import AccountCreate from "./pages/account_create/AccountCreate";
import AccountCreateInform from "./pages/account_create/AccountCreateInform";
import AccountCreatePurpose from "./pages/account_create/AccountCreatePurpose";
import AccountCreatePW from "./pages/account_create/AccountCreatePW";
import AccountCreateSelf from "./pages/account_create/AccountCreateSelf";
import AccountCreateComplete from "./pages/account_create/AccountCreateComplete";
import AccountLookup from "./pages/account_lookup/AccountLookup";
import Find from "./pages/find/Find";
import Predict from "./pages/predict/Predict";
import PredictResultBad from "./pages/predict/predict_result/PredictResultBad";
import PredictResultSoso from "./pages/predict/predict_result/PredictResultSoso";
import PredictResultGood from "./pages/predict/predict_result/PredictResultGood";
import Transfer from "./pages/transfer/Transfer";
import WarningModal from "./components/Modal/WarningModal";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account_create" element={<AccountCreate />} />
        <Route
          path="/account_create_inform"
          element={<AccountCreateInform />}
        />
        <Route
          path="/account_create_purpose"
          element={<AccountCreatePurpose />}
        />
        <Route path="/account_create_pw" element={<AccountCreatePW />} />
        <Route path="/account_create_self" element={<AccountCreateSelf />} />
        <Route
          path="/account_create_complete"
          element={<AccountCreateComplete />}
        />
        <Route path="/account_lookup" element={<AccountLookup />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/find" element={<Find />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/predict_result_bad" element={<PredictResultBad />} />
        <Route path="/predict_result_soso" element={<PredictResultSoso />} />
        <Route path="/predict_result_good" element={<PredictResultGood />} />
        <Route path="/warning_modal" element={<WarningModal />} />
        {/* <Route path="/chatbot" element={<ChatBot />} /> */}
      </Routes>
      {/* <ChatBot /> */}
      <ReactChatBot />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
