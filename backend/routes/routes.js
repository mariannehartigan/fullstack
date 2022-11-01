import express from "express";
 
//import functions from controller
import {
  showIncomeData,
} from "../controllers/income.js";
 
//init express router
const router = express.Router();
 
//get all product
router.get("/plan", showIncomeData);
 
/*
//get single product
router.get("/products/:id", showProductById);
 
// Create New Product
router.post("/products", createProduct);
 
// Update Product
router.put("/products/:id", updateProduct);
 
// Delete Product
router.delete("/products/:id", deleteProduct);

//get all product
router.get("/income", showProducts);
*/

//export default router
export default router;
 