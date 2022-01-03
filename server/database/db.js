import mongoose from 'mongoose';



export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce.fzmnf.mongodb.net/ECOMMERCE-STORE?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully...!!!')
    } catch (error) {
        console.log("Error from backend", error.message);
    }

}