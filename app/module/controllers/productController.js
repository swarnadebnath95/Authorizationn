const ProductModel = require('../model/productModel')


class ProductController {

    async createProduct(req, res) {

        try {

            const { name, type } = req.body;

            const newproduct = new ProductModel({
                name,
                type
            });

            await newproduct.save();

            return res.status(200).json({
                status: 201,
                message: "product created successfully"
            });

        } catch (error) {
            return res.status(500).json({
                err: err
            });
        }
    }


    async allProduct(req,res){

        try {

            const allData = await ProductModel.find()

            return res.status(200).json({
                status: 201,
                message: "product fetch successfully",
                data:allData
            });

    
        } catch (error) {
            console.log(error)
        }
    }


    async singledata(req,res){

        try {

            const id = req.params.id
            const editdata = await ProductModel.findById(id)

            return res.status(200).json({
                status: 201,
                message: "single product fetch successfully",
                data:editdata
            });

        } catch (error) {
            console.log(error);
        }
    }


    async updatedata(req,res){

        const id = req.params.id;
    
        try {
            const updateddata = await ProductModel.findByIdAndUpdate(
                id,
                {
                    name: req.body.name,
                    type: req.body.type,
                },
                { new: true }
            );
    
            return res.status(200).json({
                status: 201,
                message: "single product update successfully",
                data:updateddata
            });
            
        } catch (err) {
            console.error(err);
    
        }
    }


    async deletedata(req,res){

        const id = req.params.id;

        try {
            const productData = await ProductModel.findByIdAndDelete(id);

            return res.status(200).json({
                status: 201,
                message: "single product delete successfully",
                data:productData
            });

        } catch (error) {
            console.error(error);
        }
    }

}


const productController = new ProductController()
module.exports = productController