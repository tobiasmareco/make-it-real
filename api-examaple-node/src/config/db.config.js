import moongose from 'mongoose';
export const conectDatabase = async ()=>{
    try {
        const con = await moongose.connect('mongodb://127.0.0.1:27017/admin',{
            useNewUrlParser:true,
            useUnifiedTopoLogy : true
        })
        console.log('conected',con.connection.host)
    } catch (error) {
        console.log(error);
    }
}