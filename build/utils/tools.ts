import {LIB_NAME} from '../../config/project'
export const fixPath = (id: string) => id.replaceAll(`@${LIB_NAME}`, LIB_NAME)