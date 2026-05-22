import PRODUCT from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { productName, productDescription, price } = req.body;
    if (!productName || !productDescription || !price) {
      res.json({
        messsage: "All fields are accessible",
      });
    }
    const existingProduct = await PRODUCT.findOne({ productName });
    if (existingProduct) {
      res.json({
        message: "Product already exist",
      });
    }
    const product = await PRODUCT.create({
      productName,
      productDescription,
      price,
    });
    res.json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
     res.json({
        meesage:error.message
     })
  }
};



