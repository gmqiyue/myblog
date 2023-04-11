/** @jsx h */

import blog, { ga, h } from "blog";

const GOOGLE_ANALYTICS_KEY = Deno.env.get("GOOGLE_ANALYTICS_ID");

blog({
  author: "柒月",
  title: "是柒月呀",
  avatar: "./images/avatar.png",
  avatarClass: "full",
  favicon: "./images/avatar.png",
  links: [
    { title: "Home", url: "https://ucg.cc" },
    { title: "Email", url: "mailto:gmqiyue@gmail.com" },
    { title: "GitHub", url: "https://github.com/gmqiyue" },
    { title: "Twitter", url: "https://twitter.com/gmqiyue" },
  ],
  lang: "zh",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("zh-GB", { dateStyle: "long" }).format(date),
  // style: `.home header + div > :first-child {border: none;}`, // 隐藏文章列表与Header之间的上边框
  middlewares: [
    ...(GOOGLE_ANALYTICS_KEY ? [ga(GOOGLE_ANALYTICS_KEY as string)] : []),
  ],
});
