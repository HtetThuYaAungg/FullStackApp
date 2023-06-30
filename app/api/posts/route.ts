
import Post from "@/app/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import { URL } from "url"

export const GET = async (request: any) => {
    
    const url = new URL(request.url)

    const username = url.searchParams.get("username") as string;

    try {
        await connect()
        let query = {};
        if (username) {
            query = {username}
        }
        const posts: any[] = await Post.find(query)
        const response = new NextResponse(JSON.stringify(posts), { status: 200 });
        return response;
    } catch (error) {
        return new NextResponse("Database Error", {status:500})
    } 
}

export const POST = async (request: any) => {

    const body = await request.json();
    
    const newPost = new Post(body)
    try {
        await connect()
        await newPost.save();
        return new NextResponse("New Post Created!", {status:201})
    } catch (error) {
        return new NextResponse("Database Error", {status:500})
    } 
}

