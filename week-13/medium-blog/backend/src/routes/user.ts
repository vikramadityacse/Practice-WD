import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput } from "@vikramaaditya/medium-common";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:   string
	}
}>();


//signup
userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
	const {success} = signupInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({
      msg : "bad creds, try again"
    })
  }
  
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());


	try {
		const user = await prisma.user.create({
			data: {
				username: body.username,
				password: body.password
			}
		});
    const token = await sign ({id : user.id}, c.env.JWT_SECRET);

    return c.json({
      msg : "Signed Up! ---> User Added",
      jwt : token
    })
  } catch (e) {
    console.error('Error:', e)
    return c.text("invalid", 403)
  }
})

//signin
userRouter.post('/signin', async (c)=>{
  const body = await c.req.json();
  
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
  
  try{ 
    const user = await prisma.user.findFirst({
			where: {
				username: body.username,
				password: body.password
			}
		})

    if(!user){
       return c.text("User does not exist, wrong Credentials", 403)
    }

    const token = await sign({id : user.id, email : user.username}, c.env.JWT_SECRET);
    return c.json({
      msg : "Welcome back ---> Successfully signed in",
      jwt : token
    })



  }catch (e) {
    console.error('Error:', e)
    return c.text("invalid", 403)
  }

})
