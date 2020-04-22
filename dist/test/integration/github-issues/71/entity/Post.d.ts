import { PostReader } from "./PostReader";
import { PostAuthor } from "./PostAuthor";
import { PostCategory } from "./PostCategory";
import { PostDetails } from "./PostDetails";
export declare class Post {
    id: number;
    postAuthor: PostAuthor;
    postReader: PostReader;
    postCategory: PostCategory;
    postDetails: PostDetails;
}
