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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","393149bd069edbfdefeed38e59930fc5"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","bb5f92d25872afe40a56fd3bafbd5ed7"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","8c56d5c672c1472605ff2ab621a743fd"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","35f34319bcba45a2b90acd7e0a79ec87"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","0a434fc68f16d148b3c33a5d4fd37114"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","83826563334c9745a5734016e32d0a09"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","b3a87390cde5744aaa3aac7a68398b0b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","805c0603c5c555752771d97c13082a04"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","178d7816279331fed3336c7bb3df947f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","55eda27fc14e93f2e7af9191ded6abcf"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","51dcc1ac583ab3ac77460795b97330fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","b0c814d1eaab03ce56607641d5a817c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","daa97df553382c6d2c65c9ead7619be8"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","48c353aaecec3d5d44e8d823de33b9b2"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","9f1635275b1b685d86f94b0e7f6f832d"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","56a05d32a3eb61718acd81ccfb4cfab3"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","176822f4b000a020b7af183c36d389d2"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","92e32a498e22a5c06a647a472f283779"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","5e6962a00dc8ec895b114c19bb0ea86f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","abf38052264151d136582b36cbb6ea46"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","ec339cef5ace2e347919568b082f67fd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","4539d9e895e965461e0db6284637778b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","56c0fb1bf2780ac7d417a592ecf1dea1"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","f6a791c25ad4a0547be8bfa7205d24a9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","483a6766ddcdd93bcd5218a5575e07b7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","54c2a833cccb5d603f2ffdba775a2bc7"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","8b81181541d08576e38823c45e72e383"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","19b0485cf235b6e8dd21d6ed61e52826"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","ceb7293efb03f33585c6e91257c4b389"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","7f1532f50849a584a801d11ede030f21"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","efab301ff75cb46fa7f97e925bf4c2c6"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","48aa8d58ed8af68e86bbdd04bd2792f1"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","86665973bea20707879d3c422894f743"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","ab6826b04846454b403845a60f01e2ab"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","1e92f23ae3c065ddf71470c6e1c15f2d"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三——子网划分与静态路由/index.html","f96b9106ff182982407ebf8f7d432149"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","aeb39492dd6910395b4216bedd737434"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","7aaf040aa536aa20eeb49fc18d3966d1"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","cde89326f2737b777ab3fe028e2f75b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","68de0d25663ec21eabc6f972c98a3232"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","1f45837f68700c5acd60414a193bd2e1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","aeaa4ee194271302baf14ffab0f68d00"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","4792624b10444877e6a2926fc9f7be19"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","9fe3c1530e294cdacd06e2d27a21b0c1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","18e96b17ea677070d3a5b1fc71f3a436"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","c4a34db5d7e3b8a67a266610b1452ae2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","39b762877b45a0fd7def6592c2e8f7d2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","fbd7c5eb72e28e2177e68a69e5b4cd0b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","3ec78e387dc7266f7b969938aa90d5f3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","5c0f4030fef62ad2b8c56a8ba05003ee"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","a8a3dd195a954661e8263d038f89827c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","32df32eb61367282e9185cfb32b82753"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","b8448116689534e1cc3406cd037f9f97"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","4a3196db8105967a72606f4df7183824"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","0ca95e76d4ea84429a97d1cc4509136f"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","e1d30fb913c6a3279951cb36db30bc19"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d76370a76f0b929cbf60847aa132e892"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","90c8c5588bf1d65f6266dc6b19dd5265"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","585d888e9d6f2ca6e569bdf130361e41"],["E:/Blog/灰灰爱吃小云朵/public/categories/Window/index.html","1603e607932bcd060ea18820598ad0ca"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","6c2eb2ad0f0ff54c8c2a50744052672b"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","246e9edb567ddbd98389e84974dcb58c"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","2400e17ae1169f8f723e751486fa944e"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","2ff249455566b88e85e52f8d67c2663d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","33cca73645d99c17438b184b997996b0"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","d0e4b1566c970829fb2b57d7502b8e3e"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","dbe08fdb414848a5ee9cf701460ef15a"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","b3d283fd38c52027fc15902e8319d43d"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","013d85ecc30cd819a7d13adfe285a58c"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","906a65bacf3ed5111e91add8155e5974"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","f5c9aef277634af6fd7dc3b28852043c"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","44b89ea91c33edfebc06695f2c5e5f6e"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","d076b6ec5f4e6d5c61eb495bda6c3c5b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","7c4dfbe8e8dc6986fccd63f86d3dc68d"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","359084c8fce42eff700d75c16ebe0edc"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","20a7dc8c60b5b5476fd1c658d9431fbb"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","ebe1f96b0a09530ce49655757d3dbcb6"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","3325350fec9528c689e4c0bcc9e93322"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","82549ba5f914b7c9f2742cae51b0d156"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","ed946f22300b5efb76ddf5d57d45f1ac"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","facbcb0c460945bc0027d5536d2b1402"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","c6a9067721535cda3b4b7f1c4854603d"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","1ae9b7aad31f47fada2d0cf944022e40"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","a6e9afd45284eb31f3edb6142c82c9fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","059666aa16e1c7a1ca6bd327d3ef7714"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","d714241b2f051561aa6ff697d3ae4618"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","a7874dae6206feefa884d52e38a16486"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","0544343969a4a484cf33362ab4f4655a"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","cc9c054b9576818d8b676180bc9572ee"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","efec9f5e3808e3a71d91d868cb51e291"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","1f25f0f2024ac605a7d446ac3ff6726f"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","c06d2ae8030f16507548ac3fb41dbecc"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","1aa45f20452cb2bd5dcc38ab2e5acd22"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","dffbda3b1086f0c7454db463851d01a2"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","21b9f723f12544b212bad199aa3916de"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","df22fd3368b398d887a3cbf3a6868c9c"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","04547ad695d96fc8efd440e2f02fe3d2"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","5a37015b92c926c854fa6d8e7852fbc6"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","65b8be2a360f458116917d2aa9a43f07"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","d681c99d90dbbdb937f6e1ae03581ae4"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","35ac6444eed50c5393bcab856ae4da23"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","b5dfec00377f29cb7ee44d23fd79235b"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","949635915dc20146b358592b8a693f61"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","c5f36075d20d5d9e55f622d9aee60eb6"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","349319392de6ad0b38b3b682dd57d889"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","3def709ae9643b67a923435a7751b361"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","fa195699963bd4deee5bb1dc5b2406fe"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","09ab116392dc0547175b0fb81b8bdae6"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







