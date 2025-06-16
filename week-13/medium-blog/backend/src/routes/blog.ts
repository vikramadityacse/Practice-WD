import {Hono} from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string,
	},
    Variables : {
        userId: string
    }
}>();

type UserPayload = {
  id: string;
  role?: string;
  email?: string;
};

//middleware
blogRouter.use('/*', async (c, next) => {
    try{
        const authHeader = c.req.header('authorization') || '';
        const user = await verify(authHeader, c.env.JWT_SECRET) as UserPayload;
            
        if (user) {
            c.set('userId', user.id);  // Store user ID in context as string
            await next();  // Proceed to next middleware/route
        } else {
            return c.text('Unauthorized - Please log in', 401);
        }
    }catch(e){
        return c.text("You are not logged in", 403)
    }
});

//create
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blog = await prisma.blog.create({
        data:{
            title: body.title,
            content : body.content,
            authorId : Number(userId), //converts string to int or use parseInt(userId) both does same work
        }
    })

    return c.json({
        id: blog.id
    })
})

//update
blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where : {
            id : body.id
        },
        data:{
            title: body.title,
            content : body.content
        }
    })

    return c.json({
        id: blog.id
    })
})
//PAGINATION --> ideally we should use pagination which is like return 10 blogs 
//               and if he needs more then return 10 more blogs and so on
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany({
        select : {
            content : true,
            title : true,
            id : true,
            author  : {
                select : {
                    name : true,
                }
            }
        }
    });

    return c.json({blogs});
})


blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try{
        const blog = await prisma.blog.findFirst({
            where : {
                id : Number(id)
            },
            select : {
                id:true,
                title :true,
                content : true,
                author : {
                    select : {
                        name: true,
                    }
                }
            }
        })
        return c.json({
            blog
        })

    }catch(e){
        return c.text("error while fetching the blog", 403)
    }
})

