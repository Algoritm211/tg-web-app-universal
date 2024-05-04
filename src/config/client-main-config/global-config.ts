import {GlobalConfig} from "@/config/types/config-parts/global-config";
import {defaultGlobalConfig} from "@/config/defaults";


export const globalConfig: GlobalConfig = {
  ...defaultGlobalConfig,
  isUseCart: false,
}
