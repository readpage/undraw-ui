export interface SignApi {
  type: string
  email: string
  password: string
  checkPass?: string
}

export interface CallBackApi {
  (message?: string | Error | undefined): Error | void
}

export interface ValidateApi {
  (rule: object, value: string, callback: CallBackApi): void
}
