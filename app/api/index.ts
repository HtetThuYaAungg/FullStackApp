import { PostProps } from "@/types"

export async function fetchPostsData():Promise<PostProps[]> {

    const res = await fetch('http://localhost:3000/api/posts')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    const data: PostProps[] = await res.json();
    return data;
}
  
export async function fetchCurrentPostData(id:string):Promise<PostProps[]> {

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }   
  const data: PostProps[] = await res.json();
  
  return data;

 
}
