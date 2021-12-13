/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","9fdf066d841fcd69ead213ee5963e1ae"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4ac69e62f423f16d20056914481313f0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","1aa42427cd742574a3864700a6c09b67"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","8a2f410b7249597b614955e7fef620d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","bedc1f32066ec7e4950e40bbe2968306"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","861263079f0b51b19eadbbb75d37714f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","15a49d80a3e38ab1d4399b0f89da29e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","f2610469b265511b1ebac9c11c317668"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","4ecc764fde1bf3188667d90947adf2f6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","18b62a5957fe85a2ad71af0ecc92a66e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","f7201d78a7ae5b0b98d3cc9e02d55d22"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","ff334d669eeb077e036e821895b60a5b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","844e4894cc3e131ee86142adff1c7c8f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","9eaf5e601a92134a2c258f724d494c5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","5fb2605eaa5eb8341505c3a1ac148513"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","fbc77b37134147144195c1f2e7d2f409"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9f828ffa41a7800a67a45517dc42aebe"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","0f185e21f1bd4c508796a0c1e88ea490"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","d05e4bb472ee570a8362396b4a8ab6bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","216b22e044df8df99c36a0ab820aa37d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","44fbfb94dd0d2f6948ce693191418452"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","67471074a98df5b74b2cedacdd7ed35f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ff46c014cc6223d6cc295cb80c9e2614"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","e73686ae8458a9c2c7730622954853d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","c5e00a0352418befca06e33fb0e2d453"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","07029d6437a5f146886e3c441bb806fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","9080b6a12448a4ca79e37909b296ba34"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","3a41c171f36715b7b299be67cb3e7faf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","70bffd7b7ae26c515968f631ff71e45b"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","7dc16007158eb5f9c0c2fbacda7c53f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","3a3f755bc29234d934d3a91142d43c5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","8ac646dd7f2c75951ac33e3c65320852"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","04475d39c01aefb9010ff92b8e363e4b"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","3bb01987f45c3822917ab78182a55aa7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","f6624d61faac5f7e7d44f6eee163ec02"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","45a8fd4b3a977004206955924d0f04e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e4eec5c8ee74b0634be535f25f38fb05"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","e607136c29f91409613acfa2c71e8df4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","b2c8b0abc768b5f474438ad02974015c"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","d9ef9d0af2c424231fdfa231e24deac0"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","5d15889510db2c287d75c65c14655511"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","b8041e75dc84e64eabdd80abcf7e68a8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","ab19593c977ed8b9db5d2a60cf4eb777"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","5df349543e6cf15863984e33f357f3f8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","977794372483c71f9df6d2b1f10d9f65"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","e84e007e96240041d4ff929c89caa549"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","1266662847cbcf92797998793e68474e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","1fcfce56f9014819448227256609f868"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","310ac155c4ba5868046e139717dd02ac"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","f68e4eeceb61c3ddee3b0668982ef4e3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","c883de75a97152643b5f3234fae7101b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","cb987543a4c93a666fe99065a146f6ad"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","c78406505ca4db755de09c4760d7fbfd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","5cbcd4d2278583dd3f32716bd856ed7d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","59a5f0e18f71489ab08a57f060e2632c"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","0a1c9fe35bad427c2534d867d8a850a6"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","e6f6739fa2818c8812e2a04d6fea8edd"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","dfa403ca668d5c6e6ac595ab5e8f76d7"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","298fe330640cfe15e3c8607ca8e970cd"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","e7ae74d5186bd553063b9e20fefca2dd"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","1ab954d40a4afc0318da79d3ad35647d"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","ebbe88471037b03f0db6a741054971ee"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","e4e1007fadd440c1c6b7156ea164f74b"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","2dda3fad7b893c599adad48bae5d6fd2"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","7a5598ac9c915eb3d870449a8a4b4be2"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","0c5d7eb995fa5a1bb3fe724e7288fefb"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","965ff9114e080aa872c278fef63f4975"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","a013a4e38d36417e2daae8b81ebe2396"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","8687ceb1395997e435b981bb4bf458ba"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","f814f92d58408a50a6f1514443d5f75c"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","cb813844e6b658947b860146fe4a5aa8"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","2d40e27e474960b1be14cde77da807a4"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","088aa4c7bbfb1a394f9c72c2925156ae"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","3c01ac84d55678554a7ea0e2049670a7"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","ae49239273acec1dc871109881e3279b"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","e42297966a553e5a44009c37da6fe03e"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","91711826d8a68deb994720bc3f809d25"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","0b0b9b79cb40d362918f267e30da45c0"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","5ac82813a56ab82f3c2f671946c78422"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","e5f4bf76acf5962c53ef3d48a6986230"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","397da60b2e7b2eb8a293a8a5ec1fdfb3"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","e4943048832b59c083e4a7e616f32ccd"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","da9249a78a5742a00b4354a98bdf70fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","42c24d420310d80a83acd5f5c0734af0"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","87cf1d205e88f556d778313d255b921d"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","c36702ac3bbded6e11850b7bb1dfbdb3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","7caa15ae52e60082f1be283685b9572d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","7cfd0e35bac7a6c5ec33669e7b944237"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","ffa795747eb8f520858482a92b1cb2e7"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","4b460de15ffd029459316dbdfdfedeac"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","12f01126dbaa088165d3dc7fd6ca64d1"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","5d27ec743b47c9a96a094f8e750d550a"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","661dc9b0e7983e55200c6fbde3378904"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","54e357a55c33444dcdbf6d2b7676d9ae"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","df9f03efc54dbee034c70212baaa671c"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","2596df5d8c954ca76be03bb9a81ea266"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","0ea3437543124b18cf3d3ed93d548130"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","14d56be1463e67be69e001d28d9fe3bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","d6c39d5fecde3041e8787361a4d265fc"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","ff624ed56d25c4338bd8849c64a95990"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","b63bd2ceb06c032ec0ad26357750397a"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","5365a2e7709da893d4f9bce92a6a4237"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","6ca6807a45f2f4844d3839c57dda8863"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","4080434d442c1e2d89f1b64778505e31"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","562c2d0e42c2fbcdcb8fdc193ba88bc1"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","6e5d552df35e00868424c8e73ed4e2ec"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","9ad655e65b23a238369b80ba2591f424"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","a5554db63ce8cf5ab170c122aaf58a8a"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","736e9f7e376993f98eaea2f50b6acde6"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","ee0da436668c92ef26933df75d3d36f8"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","c2351ef60c21f60ce4691a19bec8da9f"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","d3c3c093b7504d69b117075465d43f6c"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







