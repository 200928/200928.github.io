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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","818ca2f0032ffb36efeeaa2d210a2afd"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a5824f78700b3fb819dd457f429d2914"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","6cbd6f70021ec1395fc285b06f1e6f62"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","01098d20ae7c657b8fbbd1b1bdd49ad4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1b257973309f68309e05fadd3822471c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","981abbffd6039b627ce62fcc197ab6af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","97e08110808d4d323446ad4d78a9d7a4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","7bd607ec82e60dc54e19d5f0109684ac"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","11b1aef6151ef752327debbecd64bde9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","eb4e462e1e7313c339e7618edaa1262f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","48f9a1de6ea6c3181cec44214d8c9840"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","3f9ae6a402a687f9e86b35f3c27a2b03"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","8ef6ddc47ecc6f6690c95deed470de83"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","4f548adce279b44c0dfb6ae86c179470"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","8351b03ab57b7c964969016790fb6f7b"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","c09cc9f65e84ce2b5de9f056ef83739b"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","40b3454394cc6c8294339ce9620d34e7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a6d5c4f7543d259d4423db07103125d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","2841cf0109fe6d54ac70fb393f6eefcb"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","2081f7e38fb8204b7c0d6b2456ed624c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","5f22a625ed36a213180c7c8ebeb63d7e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","652f1e237ad05b6d15bb6833e70d49d8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","57b20c973d03f9e557f2f11c177fb203"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","15e83f324681e9c7ff6194f363547b39"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","fc80a259e7f0c071b733f04188813ca8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","008b2ee8a37af4d22a7ce8a375b94f20"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","37d9bb799efb5a13c114bd578224cecf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","dff1f24e4c9db45bfdc0c5c50653cfd8"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","eba29a6de12583f48b83b8098ce56271"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","8145c10083d32489950320f1e7e423c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","2e12ff789a54945c78d6766a6507a5eb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","4f75aa5f0dd8aaf4a85001a529beb517"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","942d562a26e95afcc68f28ac32e38529"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","790c5812c7189dab2719f4cf2cc984b5"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","ff5c7166ba458ea0d3847ce2953f1e01"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","5fe0b22c33b98cb657fb474ba8d05d72"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e6cb57a74a6929ca1e718e9bb1660458"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","9e1eb116ee289247180ba6561aec72b4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","220be2b442f7254c490edd6a3ebbb573"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","136839c315f5b4c28d33fa86238e2ea9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","cbfbfbd72eb74d668bfb22543f3f3974"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","04efc8e5b65e30595efaf5dbce1db4a6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","7785bf982f700442d9f5d7695a573642"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","accd5af8b3dafdbd46de1dee8635194f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","da7f313a4d6044b7437289747608bcd8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","c3a6bb648bdd7a6acb0eb5cb804408d3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","f345c749e4b4625c2b82eae054260047"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","63620f41ebb827ca47694426a93e327b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","3edd0c57cf84ff6bebdc64f2cc4d07c0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","c5bec43e7e6b09b012c0f847733789af"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","99a519679f64de9d745dbbd1a78a8256"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","b52b7bbd2ffb63366c0c448b6fc55402"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","ac03d1f9fdf75ccc2f2449a36ec1f3b1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","c595f44086f7ecf5aa887e6ff6a35c96"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","9a3581b429c24027071d180a9de19978"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","6c783968122f4858fb3d4674428ad9f5"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","33d49c47903aceb29e39bb15e95886c5"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","29d088eb6de2001bf5b9f70e6222ac57"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","eff8130a13ba7138c2abcdf6284e9a37"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","c418e527450d182dc305ab6c63efc171"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","9cea60417b217336acdaf68ed7a90eed"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","1ad3860126536a1e0519a77964c3b6bb"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","0548ba7aefbe216736f9bc93e22e726c"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","934c8e8b14674edf7acd5f2714bcc8fd"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","58519111878a7a8e134b253cb35c917c"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","73d35366a314141357655f6521f5948e"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","d442df93518da8df7dd1b8e8b8e28264"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","9f903f7e2bad9b6bf136dfffa9cb044e"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","fe337fd8964202aaa39866ca36880ebc"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","01ad69c6a18592a1550b64a1e96ece69"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","9e070f710b9b0ccdf47354642bc12084"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","e0274959b5cbb6efca08831de79328af"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","b855d934fa7432c1f4f93bc3afcfc43b"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","e4aea16b77b0f2807fd5ebbf459d70c8"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","615fd04f04ce4279a14e43e53dea1a1b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","3e4e5b55c8ca76156f5f4435f2b020d7"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","4122839c8f4b2b2cc230835a3fb5dc94"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ceb2a1938f925f57580fbb31227c448a"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","b96dd67b5dc33bbdbad12276dc450736"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","3e1800a132a49f586703db0ca17db312"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","21ce7b3579fab25f6d7a5caa9af9ff1b"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","2aee15d5559191dfcdc75db8b74dde84"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","12d516d182a73a5264caf1ea13223cb4"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","3c2706cada2307334372fd8a20f89666"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","42566de91321bb555f9ad3743901bbb0"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","93e94dfb5c777a8c0c01d1e3f0887e02"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","8f112d457faced11385d7000a20ae225"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","cddaf7cedec001deee96c70ff01143b7"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","7c33d2f9698f1241f16b36ed5a98fbb0"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","fb4cf55e55977221145aa29409dafaf9"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","bc579b6b9b5cced46ece75efc3cca8da"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","8f87a69ace04ef20e21e35fc87d9260d"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","86a9e3a4ef53a95ed5b5b50628ce3e59"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","139b202897d75c9fad3881d5096ce5f8"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","f3b4b37d40dde2a82b38f2de4eef3f77"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","1d6b56b156a000af76e47b4bb98c579a"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","58dae90f0a30e4f290b00354e4865dce"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","00e399fb21a1a856fce2b362c0d30e82"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","94a356fea106d82566a717b328d3d53a"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","1808cf42fe5aa6d9b66e934f2b56b549"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","8367e275660a6767e5311bc5038c234e"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","60f636307aad07dc0be77cb2fa8dcdc5"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","5f21b814036330982204d3ee9297db6f"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","4682e64fac5f31bf5141a3dc112fd237"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","74eddae2f84222c95720b86f1f50696b"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","ba4485c725870e901d4062a4564e756e"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","06accf8cd24a1088a11601485f779f0f"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","7c3f6e9c4befa6b837eaaeea870c4a25"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","5fd6aea2c976958694548fed7d5f34a4"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","8c8f32a19018d24adda09d645ab73e05"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







