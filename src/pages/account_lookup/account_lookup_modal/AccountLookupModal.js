import React from "react";
import { getYear } from "date-fns"; // getYear, getMonth
import "react-datepicker/dist/react-datepicker.css";
import "./AccountLookupModal.scss";

const _ = require("lodash");
const AccountLookupModal = () => {
  const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <div className="monthPickerContainer">
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button>
              {"<"}
            </button>
            <select>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select>
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button >
              {">"}
            </button>
          </div>
    </div>
  );
};

export default AccountLookupModal;
