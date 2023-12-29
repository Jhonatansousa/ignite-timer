//  styled.d.ts=> d.ts significa que só vou ter código de DEFINIÇÃO DE TIPOS de typescript, e nunca código de javascript ou outra coisa assim

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// aqui estamos sobreescrevendo tipagens de uma biblioteca, no caso o styled-components, não precisamos entender à fundo, mas é importante saber dessa possibilidade
