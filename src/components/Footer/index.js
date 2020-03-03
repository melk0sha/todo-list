import React, { Component } from "react";
import Clipboard from "react-clipboard.js";
import "./index.scss";

// Click to copy my email address to your clipboard
// Yay! My email address has been copied to your clipboard

export default class Footer extends Component {
  onTooltipChange = () => {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.textContent =
      "Yay! My email address has been copied to your clipboard";
  };

  render() {
    const { onTooltipChange } = this;

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
          <Clipboard
            className="social-icon social-mail tooltip"
            component="a"
            button-href="#"
            data-clipboard-text="din.ivanova13@gmail.com"
            onClick={onTooltipChange}
          >
            Email
            <span className="tooltiptext">
              Click to copy my email address to your clipboard
            </span>
          </Clipboard>
        </div>
      </footer>
    );
  }
}
