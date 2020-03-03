import React, { Component } from "react";
import Clipboard from "react-clipboard.js";
import tooltipText from "../../constants/tooltipText";
import events from "../../constants/events";
import "./index.scss";

export default class Footer extends Component {
  state = {
    tooltip: tooltipText.DEFAULT
  };

  onCopyToClipboard = ({ type }) => {
    if (type === events.CLICK) {
      this.setState({ tooltip: tooltipText.COPIED });
    } else if (type === events.MOUSEOUT) {
      this.setState({ tooltip: tooltipText.DEFAULT });
    }
  };

  render() {
    const { onCopyToClipboard } = this;
    const { tooltip } = this.state;

    return (
      <footer>
        <p className="about">© 2020 Diana Ivanova</p>
        <div className="social-networks">
          <a
            className="social-icon social-github"
            href="https://github.com/melk0sha"
            title="Look at me on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="social-icon social-linkedin"
            href="https://www.linkedin.com/in/melk0sha"
            title="Connect with me on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="social-icon social-telegram"
            href="https://t.me/melk0sha"
            title="Type me on Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <div
            className="social-mail-container"
            onClick={onCopyToClipboard}
            onMouseOut={onCopyToClipboard}
          >
            <Clipboard
              className="social-icon social-mail tooltip"
              component="a"
              data-clipboard-text="din.ivanova13@gmail.com"
            >
              Email
              <span className="tooltiptext">{tooltip}</span>
            </Clipboard>
          </div>
        </div>
      </footer>
    );
  }
}
