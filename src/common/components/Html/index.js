import React from "react";
import PropTypes from "prop-types";

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.node.isRequired,
    scripts: PropTypes.array
  };

  render() {
    const { title, body, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </head>

        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: body }}></div>
        </body>
        {scripts.map((item, index) => {
          return <script key={index} src={item}></script>;
        })}
      </html>
    );
  }
}

export default Html;
// export default (html) => `
//     <!DOCTYPE html>
//     <html>
//     <head>
//         <title>test app</title>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
//     </head>
//     <body>
//         <div id="app">${html}</div>
//         <script src="/build/bundje.js"></script>
//     </body>
//     </html>
// `;