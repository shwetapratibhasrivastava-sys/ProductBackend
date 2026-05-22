import express from "express"
import { createProduct } from "../controllers/productController.js"


const productRoute=express.Router()
productRoute.post("/",createProduct)


export default productRoute