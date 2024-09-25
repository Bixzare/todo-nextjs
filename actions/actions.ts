"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import getUser from '@/utils/supabase/getUser';

// in the real world you want to add source valdiation to formData which will also make sure that you get the correct types
export async function createTask(formData: FormData){

    const user:any = await getUser()
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
            userId: user.id
        },
    });
    revalidatePath("/dashboard/tasks");
    redirect("/dashboard/tasks");
}

export async function getTaskData(taskId:number)
{   const user:any = await getUser()
    const taskData = await prisma.task.findUnique({
        where:{
            id:Number(taskId),
            userId:user.id
        },
    })

    return taskData
}
export async function updateTask(formData: FormData){

    const user:any = await getUser()
    const taskId = Number(formData.get('id') as any);
    await prisma.task.update({

        where:{id:taskId as number,
            userId:user.id
        },
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