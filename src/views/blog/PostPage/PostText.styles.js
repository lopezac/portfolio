import styled from "styled-components";
import { theme } from "Assets/styles/theme";

const StyledPostText = styled.div`
  a {
    color: ${theme.lightViolet};

    :hover,
    :active {
      color: ${theme.mediumViolet};
    }
  }

  p {
    line-height: 1.3rem;
  }

  code {
    background-color: #282c34;
    color: #979eaa;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  code[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  pre[class*="language-"]::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  code[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  pre[class*="language-"]::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #f5f2f0;
  }
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: #708090;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.boolean,
  .token.constant,
  .token.deleted,
  .token.number,
  .token.property,
  .token.symbol,
  .token.tag {
    color: #905;
  }
  .token.attr-name,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
    color: #690;
  }
  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.operator,
  .token.url {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.class-name,
  .token.function {
    color: #dd4a68;
  }
  .token.important,
  .token.regex,
  .token.variable {
    color: #e90;
  }
  .token.bold,
  .token.important {
    font-weight: 700;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }
  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    letter-spacing: -1px;
    border-right: 1px solid #999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }
  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
  span.inline-color-wrapper {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyIDIiPjxwYXRoIGZpbGw9ImdyYXkiIGQ9Ik0wIDBoMnYySDB6Ii8+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0wIDBoMXYxSDB6TTEgMWgxdjFIMXoiLz48L3N2Zz4=);
    background-position: center;
    background-size: 110%;
    display: inline-block;
    height: 1.333ch;
    width: 1.333ch;
    margin: 0 0.333ch;
    box-sizing: border-box;
    border: 1px solid #fff;
    outline: 1px solid rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  span.inline-color {
    display: block;
    height: 120%;
    width: 120%;
  }
  [class*="lang-"] script[type="text/plain"],
  [class*="language-"] script[type="text/plain"],
  script[type="text/plain"][class*="lang-"],
  script[type="text/plain"][class*="language-"] {
    display: block;
    font: 100% Consolas, Monaco, monospace;
    white-space: pre;
    overflow: auto;
  }
  .token.punctuation.brace-hover,
  .token.punctuation.brace-selected {
    outline: solid 1px;
  }
  .rainbow-braces .token.punctuation.brace-level-1,
  .rainbow-braces .token.punctuation.brace-level-5,
  .rainbow-braces .token.punctuation.brace-level-9 {
    color: #e50;
    opacity: 1;
  }
  .rainbow-braces .token.punctuation.brace-level-10,
  .rainbow-braces .token.punctuation.brace-level-2,
  .rainbow-braces .token.punctuation.brace-level-6 {
    color: #0b3;
    opacity: 1;
  }
  .rainbow-braces .token.punctuation.brace-level-11,
  .rainbow-braces .token.punctuation.brace-level-3,
  .rainbow-braces .token.punctuation.brace-level-7 {
    color: #26f;
    opacity: 1;
  }
  .rainbow-braces .token.punctuation.brace-level-12,
  .rainbow-braces .token.punctuation.brace-level-4,
  .rainbow-braces .token.punctuation.brace-level-8 {
    color: #e0e;
    opacity: 1;
  }
`;

export default StyledPostText;
