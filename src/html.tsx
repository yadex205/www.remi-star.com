import React, { ReactNode } from 'react';

interface Props {
  htmlAttributes: object;
  headComponents: ReactNode;
  bodyAttributes: object;
  preBodyComponents: ReactNode;
  body: string;
  postBodyComponents: ReactNode;
}

export default class HTML extends React.Component<Props, {}> {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>れーみ offcial website</title>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
