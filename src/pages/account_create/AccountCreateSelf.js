import React, { useEffect, useRef, useState } from "react";
import "./AccountCreateSelf.scss";
import Webcam from "react-webcam";
import AccountCreateSelfModal from "./AccountCreateModal/AccountCreateSelfModal";
import axios from "axios";

function AccountCreateSelf() {
  function handleClickNext(e) {
    window.location.href = "/account_create_complete";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_PW";
  }
  return;
}

export default AccountCreateSelf;
