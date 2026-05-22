import express from "express"
import { createProduct,getAllProduct,getProduct, updateProduct } from "../controllers/productController.js"


const productRoute=express.Router()
productRoute.post("/",createProduct)
productRoute.get("/",getProduct)
productRoute.get("/:id",getAllProduct)
productRoute.put("/:id",updateProduct)


export default productRoute