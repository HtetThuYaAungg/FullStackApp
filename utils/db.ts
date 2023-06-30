import mongoose from "mongoose";

const handleError = (error: Error): void => {
    console.error(error);
  };

const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO as string);
    } catch (error:any) {
        handleError(error);
    }
};


export default connect;
