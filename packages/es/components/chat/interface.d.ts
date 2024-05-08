export interface ChatApi {
    id: number;
    username: string;
    avatar: string;
    content: string;
}
export interface ChatSubmitParam {
    content: string;
    clear: () => void;
}
