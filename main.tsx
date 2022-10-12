/** @jsx h */

import blog from "blog";

blog({
  title: "柒月的博客",
  description: "简简单单，如此便好",
  author: "柒月",
  avatarClass: "full",
  avatar: "./images/gmqiyue.png",
  favicon: "./images/gmqiyue.png",
  cover: "./images/background.jpg",
  lang: "zh",
  links: [
    { title: "Email", url: "mailto:gmqiyue@gmail.com" },
    { title: "GitHub", url: "https://github.com/gmqiyue" },
  ],
  style: `.home header + div > :first-child {border: none;}`, // 隐藏文章列表与Header之间的上边框
});
