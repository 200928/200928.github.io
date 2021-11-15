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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","fd58300a04459bc5d501d4cb23bc1471"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","5e77e41099a92a571de3780fb3354dd2"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","146c66d170ecb6664668dfec9796feb7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","eb4a1a3f8a594e3644c84a5dd7f9df4f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","459dc9d4f40c60c146389b91b584f087"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","355cece9195d5566831a92b5d58ffaac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","6ef22f9fb4956d6be75020e68c5ef030"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","54caac0002e643efe36a6f15e397a944"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","07e21c2786c4e2562e5dc6888264d07e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","2888fa7a56040044d23bae0142461393"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fe6b507972bb7163504fc4e1d4e56db9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","0a5d93885f746acb0ec25e0c7268719d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8ad026b504c207ce35004f43ce03e915"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","efd2fa178614f6e8bdca76c705ee89e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","d3efbcab808e01346211c94fefdaf164"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","71343a833f6b9b387467e8eee4684817"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","211422fc78192953d9cccc8644bbc1eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","e8df1d7d23ced6d97bf9ad4e93148209"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","0b721cb07873aae2cc78733380924d86"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","a2a4fe205365b36aff1918f3d6fbd79f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","749649100919750aa0e60412fa94ff5c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","e8b88edb12fdf44d2abcacbd5e50b934"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","5852b9392027d0a74ec19656453b5deb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","616c03ce54a2a65d3abcc277cf17d4d5"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","8486c37f2736ff8b76defc0e866b170e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","eaf0960425e23fa34dc2a706049f444c"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","da92429aa51f8f73023faf04a00813de"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","ef77a8a7cd010e6d6f5838cb16bc2870"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","cb6b8c8d818762b8b8818bb2845daf54"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","ed79a7ec11ba0eb72a9d89de24675f8b"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","38eeea9e45a8d820871d2979b3fbc6fd"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","385b30fa596cc4c621e6075dd2882046"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","dbe57376431ddd85329425e9252811cc"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","8414f978ecf258c6f4e050cc685ee8c0"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/实验二：vlan配置/index.html","459f6d74ffe09f6904d31b6ae202c863"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三：子网划分与静态路由/index.html","d9e22688a28b799e9b479274f829adea"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","43775e4364acefc8b1b9fc0537ce5a37"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","c9c2e3fafa77d77310bc4d1b6032cd3f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","cf9c208ed8398ea5e78c29fe20dcf627"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","b2ba14ae2ccc540bd9ec60357ce8c085"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","c94fe210f7f9721dbb8593272c381ea1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","969f59ccc8c11cac595d0f715bc8e244"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","6e184569c851cfffff3d4e3efe7e314b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","a648ce376478ccb27a4e726655f9b260"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","b192151175d3a53b0f65acc65e667c9c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","f200b68b92db4bafbf7cd427b56bb828"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","0a170f09887ae252d35b471b318841fe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","ff37a47c218708c320a8566b617586ea"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","5f99b56280ae8cebfbffbf3d241cbe7e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","5a454ed3e5fabfd1d3da3442055341fe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","d9be79e1ac3f7f9b3e75f19288273a1d"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","9ce340ae7ed816b85b76797a63625941"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","a89ac5154f7f5bbe468f92cbc6e2bcfc"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","1108cd668cedcaf73ea85ee9ff84796b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","827c463178b36f3ea47ace83d4d794c5"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ebf2e58a965be6f85fe1f35c99ce04ae"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","c6cb54c697ab0e70957eccfdf9406f8f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","6f0d2dafe2107d71cb6858f31da2dbe0"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","d74f4ce5bd6c86c96954405a9e1fdba0"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","1118e21832b2c45d5df4d726c0b2146c"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","d8f6b4c27dc7302739e39caa3049a693"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","e8fc8f5e56d4e3ea083ae37eb81abe70"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","40b5b035fada6614c3cd0e2f500a2bef"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","57edc99685ba7a8cd5f0a18ef0ec4fb5"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","69aeaff678c057d1a78101b2d2c79f78"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","04adb864aebaa38c672c3743f9d90a74"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ffea9bab5be52a1b008c99a0786eece7"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","0a4d9e5d55a5aed906bd2c2d59750450"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","799d2250d7e5b84184cd2509a22d5fc8"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","efe4a9a39b89dffcf34151d7b2ff63ea"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","e2732deec65b8b6189c37a5a36e283c6"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","e5f1c29482a5260ee4ca9e54f8a1bc59"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","241ce85290958a1b30b3696495c809a0"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","355a3b1dbac7211a6289198f5d42b247"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","519f6556a900d5a9dc477e993f25c964"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","8d12b64a58cfcbb77d2e7fecebe160ae"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","4bd029c5e583bcbf44ccdf768e08353d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","82f24a07800fab04e5d268a16710217f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","e28762f5f3fd2355365b60dece9865e1"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","39597cd2d310018ad93907ed8a6ea591"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","2025a3b7e98523dd2f815d085a9bacbd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","54389371b295549fedf4bd279f6c4a2d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","effcfcf7ebb8b4bdbf4c8efab8ffb1e5"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","03e6c9a5e3fade25d6db1bcc412da22b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","de3347b56a092c419203a56054ba5f14"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","5a510c4b78a7923d6434988ac4cd2035"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","162c1f7408c035bd65fda1706124478e"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","e0914c7661e53933986f04f099e9660d"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","a297355218cc5d05cb10cbe6ee73a604"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","bfec8b704a2ed0726e8e1a195eca985b"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","faf34e3eebfddba8e74d4ebe851a7c0a"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","50657dcffe971b38ca6365fc779fe580"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","1a0656d1fe266cfec5ea0e594e5652ed"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","321159357ce74c79149cb18cbba29eb3"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","1f71be84bd4a87d1f8389bcd9cb91faf"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","fcd2105f1675082b7a089e03db6d5e18"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","906f33fa5ecf164872f7652e2b4caadb"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","4dca6462b2b76a4675377aab0b49e859"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","6ce70f41bb898a0c571785d034bf9eda"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","6235a43559f55eef22aa70e53144ee06"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","75b03ee6ee0044463d06780e065eaf6f"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","3caab788beba64bc77cea7d517acf9ca"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","4f24597a52a492663dc6802ea3c8cd1f"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","33d4b59c7e5fbcb1ed88680dbb830e5f"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","9a7049ba2c266c07427c06990dff7334"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







