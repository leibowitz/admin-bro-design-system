import { DefaultTheme as Theme } from '../../src/default-theme.interface'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
