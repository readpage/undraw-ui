import { EmojiApi, ReplyApi } from '../../components';
import { InjectionKey, Ref } from 'vue';
import { CommentApi, UserApi } from './interface';
export declare const InjectSlots: unique symbol;
export interface SubmitParam2Api {
    content: string;
    parentId: string | null;
    replyId?: string | null;
    reply?: CommentApi;
    files?: any[];
    clear: () => void;
}
export interface InjectInputBoxApi {
    upload: boolean;
    submit: ({ content, parentId, files, clear }: SubmitParam2Api) => void;
    focus: () => void;
}
export declare const InjectInputBox: InjectionKey<InjectInputBoxApi>;
export interface InjectContentBoxApi {
    user: Ref<UserApi>;
    like: (id: string) => void;
    showInfo: (id: string, finish: Function) => void;
    aTarget: '_blank' | '_parent' | '_self' | '_top';
    showLevel: true | Ref<boolean | undefined>;
    showLikes: true | Ref<boolean | undefined>;
    showAddress: true | Ref<boolean | undefined>;
    showHomeLink: true | Ref<boolean | undefined>;
    showReply: true | Ref<boolean | undefined>;
}
export declare const InjectContentBox: InjectionKey<InjectContentBoxApi>;
export interface InjectReplyBoxApi {
    page: boolean;
    replyShowSize: number;
    comments: Ref<CommentApi[]>;
    replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (reply: ReplyApi) => void) => void;
}
export declare const InjectReplyBox: InjectionKey<InjectReplyBoxApi>;
export declare const InjectionEmojiApi: InjectionKey<EmojiApi>;
