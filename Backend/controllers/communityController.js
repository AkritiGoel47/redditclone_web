// const { validationResult } = require("express-validator");
// const Category = require("../models/communityModel");

// const addCategory = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         success: false,
//         msg: "Errors",
//         errors: errors.array(),
//       });
//     }

//     const { category_name } = req.body;
//     const isExist = await Category.findOne({
//       name: {
//         $regex: category_name,
//         $options: "i",
//       },
//     });

//     if (isExist) {
//       return res.status(400).json({
//         success: failure,
//         msg: "Category name already exists!",
//       });
//     }
//     const category = new Category({
//       name: category_name,
//     });

//     const categoryData = await category.save();
//     return res.status(200).json({
//       success: true,
//       msg: "Category created successfully!",
//       data: categoryData,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       success: failure,
//       msg: error.message,
//     });
//   }
// };

// const getCategory = async (req, res) => {
//   try {
//     const categories = await Category.find({});

//     return res.status(200).json({
//       success: true,
//       msg: "Category fetched successfully!",
//       data: categories,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       msg: error.message,
//     });
//   }
// };

// const deleteCategory = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(200).json({
//         success: false,
//         msg: "Errors",
//         errors: errors.array(),
//       });
//     }
//     const { id } = req.body;
//     const categoryData = await Category.findOne({ _id: id });
//     if (!categoryData) {
//       return res.status(400).json({
//         success: failure,
//         msg: "Category does not exist",
//       });
//     }
// const categories =await Category.findByIdAndDelete({_id:id});
// return res.status(200).json({
//     success:true,
//     msg: 'Category deleted successfully!',
//   });
//   } catch (error) {
//     return res.status(400).json({
//       success: failure,
//       msg: error.message,
//     });
//   }
// };
// const updateCategory = async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(200).json({
//           success: false,
//           msg: "Errors",
//           errors: errors.array(),
//         });
//       }
//       const { id,category_name } = req.body;
//       const categoryData = await Category.findOne({ _id: id });
//       if (!categoryData) {
//         return res.status(400).json({
//           success: failure,
//           msg: "Category does not exist",
//         });
//       }
//       const isExist = await Category.findOne({
//         _id:{$ne: id},
//         name: {
//           $regex: category_name,
//           $options: "i",
//         },
//       });
  
//       if (isExist) {
//         return res.status(400).json({
//           success: failure,
//           msg: "Category name already assigned",
//         });
//       }

//   const updatedData=await Category.findByIdAndUpdate({_id:id},{
//     $set:{
//         name:category_name,
//     }
//   },{new:true});
//   return res.status(200).json({
//       success:true,
//       msg: 'Category Updated successfully!',
//       data:updatedData
//     });
//     } catch (error) {
//       return res.status(400).json({
//         success: failure,
//         msg: error.message,
//       });
//     }
//   };

// module.exports = {
//   addCategory,
//   getCategory,
//   deleteCategory,
//   updateCategory
// };
