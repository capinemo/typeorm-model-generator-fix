import { PostDetail } from "./PostDetail";
import { PostCategory } from "./PostCategory";
import { PostAuthor } from "./PostAuthor";
import { PostInformation } from "./PostInformation";
import { PostImage } from "./PostImage";
import { PostMetadata } from "./PostMetadata";
export declare class Post {
    id: number;
    title: string;
    text: string;
    postCategories: PostCategory[];
    postDetails: PostDetail[];
    postImages: PostImage[];
    postMetadata: PostMetadata[];
    postInformations: PostInformation[];
    postAuthors: PostAuthor[];
}
