const mongoose=require('mongoose');
const intData=require('./data.js');
const Listing=require('../models/listing.js');

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().
then((res)=>{
    console.log("Connect to db")})
    .catch
(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    intData.data=intData.data.map((obje)=>({...obje,owner:"6603d0096f6d168c83c2d5f2"}));
    await Listing.insertMany(intData.data);
    console.log("Data was initialized");
}
initDB();