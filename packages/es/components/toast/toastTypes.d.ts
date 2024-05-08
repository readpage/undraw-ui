interface toastType {
    type: string;
    options: toastTypeOptions;
}
interface toastTypeOptions {
    color: string;
    bgColor: string;
    icon: string;
}
export declare function getToastType(type: string): toastType;
export declare function getDefaultToastType(): toastType;
declare const _default: {
    getToastType: typeof getToastType;
    getDefaultToastType: typeof getDefaultToastType;
};
export default _default;
