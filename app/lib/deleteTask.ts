'use server'
import prisma from "./db";

export default async function deleteTask(id:number)
{    

    await prisma.task.delete({
        where:{ id },
        
    });
   
}