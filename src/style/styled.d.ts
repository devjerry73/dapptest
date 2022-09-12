// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '../components/uikit/dist/theme'
//128dff
declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
