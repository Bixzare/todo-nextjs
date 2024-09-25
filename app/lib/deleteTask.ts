'use server'
import prisma from "./db";
import getUser from "@/utils/supabase/getUser";

export default async function deleteTask(id:number)
{    
    const user:any = await getUser()

    await prisma.task.delete({
        where:{ id,
            userId:user.id
         },
        
    });
   
}