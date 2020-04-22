import { Users } from "./Users";
import { Quests } from "./Quests";
export declare class Feedextrainfo {
    feedOwnerId: number;
    questId: number;
    readerId: number;
    feedOwner: Users;
    quest: Quests;
    reader: Users;
    mostUpdatedFeedEntryIdUserRead: number;
}
