"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'
// in the real world you want to add source valdiation to formData which will also make sure that you get the correct types
export async function createTask(formData: FormData){

    if(!formData.get('title') || !formData.get('description'))
    {
        throw new Error("Title and Description are required");
    }
    const lastTask = await prisma.task.findFirst({
        orderBy: { id: 'desc'},
    })
    const newId = lastTask ? lastTask.id +1 : 1
    await prisma.task.create({
        data:{
            id: newId,
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            
        },
    });
    revalidatePath("/dashboard/tasks");
    redirect("/dashboard/tasks");
}

export async function getTaskData(taskId:number)
{   
    const taskData = await prisma.task.findUnique({
        where:{
            id:Number(taskId),
        },
    })

    return taskData
}
export async function updateTask(formData: FormData){

    console.log("here")
    const taskId = Number(formData.get('id') as any);
    await prisma.task.update({

        where:{id:taskId as number},
        data: {
           title: formData.get('title') as string,
           description: formData.get('description') as string,
        },

    });

    revalidatePath("/dashboard/tasks");
    redirect("/dashboard/tasks");


}

/** data:{
            title: "Post created locally",
            description: "This post was created in the actions.ts file",
            completed: true,
            createdAt: Date.now.toLocaleString(), */