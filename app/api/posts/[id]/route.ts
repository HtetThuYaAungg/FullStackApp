import Post from "@/app/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";



export const GET = async (request: any,{params}:any) => {
    

    const { id } = params;

    try {
        await connect()
       
        const post = await Post.findById(id);

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }
        const response = new NextResponse(JSON.stringify(post), { status: 200 });
        return response;
    } catch (error) {
        return new NextResponse("Database Error", {status:500})
    } 
}

export const DELETE = async (request: any,{params}:any) => {
    

    const { id } = params;

    try {
        await connect()

        await Post.findByIdAndDelete(id);

       return new NextResponse(JSON.stringify("Post delete successful!"), { status: 200 });
    
    } catch (error) {
        return new NextResponse("Database Error", {status:500})
    } 
}