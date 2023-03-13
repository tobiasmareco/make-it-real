import moongose from 'mongoose';
export const conectDatabase = async ()=>{
    try {
        const con = await moongose.connect(process.env.API_DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopoLogy : true
        })
        console.log('conected to database',con.connection.host)
    } catch (error) {
        console.log(error);
    }
}