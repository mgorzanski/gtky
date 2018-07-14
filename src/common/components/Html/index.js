import React from "react";
import PropTypes from "prop-types";

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    styles: PropTypes.array,
    body: PropTypes.node.isRequired,
    initialState: PropTypes.object,
    scripts: PropTypes.array,
  };

  render() {
    const { title, styles, body, initialState, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          {styles.map((item, index) => {
          return <link rel="stylesheet" key={index} href={item} />;
        })}
        </head>

        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: body }}></div>
        </body>
        {initialState && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.APP_STATE=${JSON.stringify(initialState)}`
            }}
          ></script>
        )}
        {scripts.map((item, index) => {
          return <script key={index} src={item}></script>;
        })}
      </html>
    );
  }
}

export default Html;