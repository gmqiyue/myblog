/** @jsx h */

import blog from 'blog';

blog({
  title: '柒月的个人空间',
  author: '@柒月',
  avatar: './gmqiyue.png',
  avatarClass: 'full',
  favicon: './gmqiyue.png',
  links: [
    { title: 'Email', url: 'mailto:gmqiyue@gmail.com' },
    { title: 'GitHub', url: 'https://github.com/gmqiyue' },
  ],

  // avatar: 'https://deno-avatar.deno.dev/avatar/blog.svg',
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,

  // middlewares: [
  //   // If you want to set up Google Analytics, paste your GA key here.
  //   ga('UA-XXXXXXXX-X'),

  //   // If you want to provide some redirections, you can specify them here,
  //   // pathname specified in a key will redirect to pathname in the value.
  //   redirects({
  //     '/hello_world.html': '/hello_world',
  //   }),
  // ],
});
