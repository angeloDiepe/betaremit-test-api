const mongoose=require('mongoose');

const listProduct=mongoose.Schema({
	_id:{type:Number, required:true},
	name:{type:String, required:true},
	type:{type:String, required:true},
	price:{type:Number, required:true},
	rating:{type:Number, required:true},
	warranty_years:{type:Number, required:true},
	available:{type:Boolean, required:true},
})

module.exports=mongoose.model('product', listProduct)