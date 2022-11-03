import db from "../config/database.js";
 
export const getExpensesData = (result) => {
  db.query("SELECT * FROM expenses", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
