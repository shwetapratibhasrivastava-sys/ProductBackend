import express from "express"
import { createProduct,getProduct } from "../controllers/productController.js"


const productRoute=express.Router()
productRoute.post("/",createProduct)
productRoute.get("/",getProduct)


export default productRoute