import { fetchCurrentPostData, fetchPostsData } from "@/app/api";
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Post {
    // userId: number;
    _id: string;
  title: string;
  img: string;
  content: string;
  username: string;

  }

interface PostsState {
    posts: Post[];
    status: "idle" | "loading" | "succeeded" | "failed";
    currentPostStatus: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    currentPost : {}
}

const initialState: PostsState = {
    posts: [],
    status: "idle",
    error: null,
    currentPostStatus:"idle",
    currentPost : {},
};
  
export const fetchPosts : any=  createAsyncThunk<Post[]>(
    "posts/fetchPosts",
    async () => {
      try {
        const response = await fetchPostsData()
        return response
      } catch (error:any) {
        throw error.response.data;
      }
    }
);

export const fetchPostById: any = createAsyncThunk<Post[],string>(
    "posts/fetchPostById",
    async (id) => {
      try {
        const response = await fetchCurrentPostData(id); // Implement fetchPostData to retrieve a single post by ID
        return response;
      } catch (error: any) {
        throw error.response.data;
      }
    }
  );
  
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
          state.status = "succeeded";
          state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action: PayloadAction<any>) => { // Update the type to 'any' here
          state.status = "failed";
          state.error = action.payload?.message; // Assuming the error message is available in the 'message' property
        })
          .addCase(fetchPostById.pending, (state) => {
              state.currentPostStatus = "loading";
           
          })
          .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
            state.currentPostStatus = "succeeded";
            state.currentPost = action.payload; // Update currentPost with the fetched post
          })
          .addCase(fetchPostById.rejected, (state, action: PayloadAction<any>) => {
              state.currentPostStatus = "failed";
              state.error = action.payload?.message;
        })
    },
});

export const selectPosts = (state:any) => state.posts.posts;
export const selectPstsStatus = (state:any) => state.posts.status;
export const selectCurrentPost = (state: any) => state.posts.currentPost;
export const selectCurrnetPostStatus = (state: any) => state.posts.currentPostStatus;  

export default postsSlice.reducer 