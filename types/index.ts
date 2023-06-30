import { MouseEventHandler } from "react";


export interface ButtonProps {
    btnType?: "button" | "submit",
    title: string,
    buttonStyles?: string,
    textStyles?: string,
    buttonIcon?: string,
    isDisable?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface PostProps {
    // userId: number;
    _id: string;
    title: string;
    img: string;
    desc: string;
    content: string;
    username: string;
}

