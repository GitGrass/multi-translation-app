import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
const ShareButton = () => {
  return (
    <div className="App-shareButton">
      {/* シェアするURLが入っていない */}
      <a
        href="https://twitter.com/intent/tweet?button_hashtag=button&ref_src=twsrc%5Etfw"
        class="twitter-hashtag-button App-shareButton"
        data-size="large"
        data-lang="en"
        data-dnt="true"
        data-show-count="false"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <FaTwitterSquare />
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      {/* シェアするURLが入っていない */}
      <a
        className="App-textSize"
        href="https://social-plugins.line.me/lineit/share?url=【シェアするURL】"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        LINE
      </a>
    </div>
  );
};

export default ShareButton;
