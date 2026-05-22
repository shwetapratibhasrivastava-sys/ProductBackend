import express from "express"
import { createProduct,getAllProduct,getProduct } from "../controllers/productController.js"


const productRoute=express.Router()
productRoute.post("/",createProduct)
productRoute.get("/",getProduct)
productRoute.get("/",getAllProduct)


export default productRoute