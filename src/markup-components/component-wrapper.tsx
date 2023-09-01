// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0
import * as locales from "../locales"
import { IntlProvider } from "../react-components"
import { FunctionComponent } from "react"
import ReactDOMServer from "react-dom/server"

export type Context = {
  locale?: keyof typeof locales
}

export const ComponentWrapper = <Props extends {}>(
  Component: FunctionComponent<Props>,
  props: Props,
  { locale = "en" }: Context,
) => {
  return ReactDOMServer.renderToStaticMarkup(
    <IntlProvider locale={locale}>
      <Component {...props} />
    </IntlProvider>,
  )
}
