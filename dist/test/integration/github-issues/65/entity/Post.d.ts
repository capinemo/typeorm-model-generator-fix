import { PostAuthor } from "./PostAuthor";
import { PostReader } from "./PostReader";
export declare class Post {
    id: number;
    postAuthor: PostAuthor;
    postReaders: PostReader[];
}
