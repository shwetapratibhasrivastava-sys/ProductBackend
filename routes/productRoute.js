import express from "express"
import { createProduct,deleteProduct,getAllProduct,getProduct, updateProduct } from "../controllers/productController.js"


const productRoute=express.Router()
productRoute.post("/",createProduct)
productRoute.get("/",getProduct)
productRoute.get("/:id",getAllProduct)
productRoute.put("/:id",updateProduct)
productRoute.delete("/:id",deleteProduct)


export default productRoute