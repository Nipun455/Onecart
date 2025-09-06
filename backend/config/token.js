import jwt from "jsonwebtoken"

// 
// userId  is typically passed from wherever  i am loggin the user in or signing them up
// userId comes from - it's the unique ID of the logged-in user from your database
// in JWT(JSON WEB Token) , you store some basic data inside the token 
// so that you can identify the user without hitting the database every time
// you are creating a token that contains the user's ID
// when the user makes future requests , they send this token
// you decode the token and the get the userId back - then you know who the user is


export const genToken = async (userId) => {
   try {
    let token = await jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn:"7d"})
    return token
   } catch (error) {
     console.log("token error")
   }

    
}
export const genToken1 = async (email) => {
   try {
    let token = await jwt.sign({email} , process.env.JWT_SECRET , {expiresIn:"7d"})
    return token
   } catch (error) {
     console.log("token error")
   }

    
}
