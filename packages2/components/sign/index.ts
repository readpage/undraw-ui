import { withInstall } from '~/utils';
import signVue from "./sign.vue"

export interface signApi {
  type: string
  email: string
  password: string
  checkPass?: string
}

export interface callBackApi {
  (message?: string | Error | undefined): Error | void
}

export interface validateApi {
  (rule: object, value: string, callback: callBackApi): void
}

export type signInstance = InstanceType<typeof signVue>

export const Sign = withInstall(signVue)
export default Sign