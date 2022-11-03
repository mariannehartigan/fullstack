import {
    getExpensesData
  } from "../models/ExpensesModel.js";
 
  export const showExpensesData = (req, res) => {
    getExpensesData((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
