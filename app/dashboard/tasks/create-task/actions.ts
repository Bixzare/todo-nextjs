"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import getUser from '@/utils/supabase/getUser';

// in the real world you want to add source valdiation to formData which will also make sure that you get the correct types
export async function createTask(formData: FormData){

    const user:any = await getUser();

    if(!formData.get('title') || !formData.get('description'))
    {
        throw new Error("Title and Description are required");
    }
    await prisma.task.create({
        data:{
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            userId: user.id
        },
    });
    //revalidatePath("/dashboard/tasks");
    redirect("/dashboard/tasks");
}
