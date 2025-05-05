const mongoose=require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/MY_todo')
}

module.exports=main