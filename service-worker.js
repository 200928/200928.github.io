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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","887584dffecfe5701f8ed9d8190bbba4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","55e17dab66eeca392300e952f8bbb650"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","bb6dfc36025cd9a4d461ec6aae519ddc"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","f0fd6d9b41ee727cc7fe02549b1d1268"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","8170d994a99990ded591e410bc2cc775"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","4e77b64c47890a406f4c2c31cb5d905b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","18d5a2e735dc03572c09c4bbc234ab9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","ce09e39a6ea37dab1fb9ee7db77aa57e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","462080f8221636bb6eede38a59d4cff4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8d1fe15d60ec4319951d197130479680"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","fe7c3dc2136585b352df9e9044f1a36c"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","f3003556e4f9b3430b09d3ca6bde6967"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","bb783009943288f7cd1ea064eaba3698"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","f84202549cc7aefcf5612bd5ecc79228"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","e5ec0488da8610a5d5b6a74077170d4e"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","728bc858cdfb5a9a1284b49df5feffb0"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","ff071a594f4e2d3e642be2c6c09bc709"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","d5769986f91da58b0eb1ff53ddd73b3b"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","749e1d4f1f68278f7e85e54a3cabd564"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","83faab0f41d7c95c1f24bdcaba41eac7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","889e3c23e1ed72ed3d86b89aa931d16d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","2fb9e6536eeece322f84ed5ea517a064"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","901e911a0576f52169a7e1a5adf54770"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","33694c5aeabedd0eb19a415cd6ee794e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","09404a96b2bc86e1cdb2f42e4c23c826"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","9149215c80cad8dd91d5f3895dcccf29"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","e6b5348054df343b8b8ff92efc3892aa"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","ea38b612c95d58cf71ddc56141016c08"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","71a71e62257357c6289783eb24e30ce4"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","451d4f8815e08b7e82e2017c2b1b1bad"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","6d8a9b45493491bac3178796467733f1"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","6f7e258c565d603cdaa1196347ea1feb"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","d1d47cf4185c35ca7f8a6a288faa0443"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","6f57abf255aafea01889e569bd5d8414"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","1df083ff64395402615b8966c2a088f3"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","ef2610a4ff1b45c5db4ed08b1433f9f3"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8182e89497b8c5748a9676514ff989ae"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","dee6f1950295c4fdd008a5090f129fe3"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","cffe4824d2cf94b940f6c237bb6f0068"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","4f69c7be34114c022b08f3cd2d1ce5a3"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","b0f8fad3e68a5994308fc226bce68ffa"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","7f714e9a9d117b1019d4c0c501680f38"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","7d13160e50a1b52e3b87fa6c891a70a5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","ebd6fc1a3ca0b254cb642b86cad92766"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","504e5cbc046c09e9a4f8b5a0651cd5c1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","74f60c91586a15973974d7f86ef9f9e4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","af682f15d7fadc27f25aa173064cc949"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","45c2304e1c01934554f41b1df2f5d4ca"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","d5a68097f85305e6d1471a6612e76720"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","b26dd7cb925024983b2c649a56b76fe6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","7a44a7b0b20dd3b66fdc1dea37beed25"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","a23dc63ce6fcc01e8b7f9e4e6b3d93a9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","576aa83a1c9872b54db91f21c12d4a4f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","b03893a71846012f72332fcb832257f5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","4d989e8088e6511db34911938716c20a"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","fa7a662aeb8f3a6500becf262b7b8a72"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","e47cd7064e2e43994341e1c25dd57afe"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","5d47862e90323ded440f9bb36fc97f27"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","1dabfdf61c9963f4eaa2769b14c41502"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","b97623b4d75b6a00a93d6945ff13e1e6"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","efcb7cf791764ba1d426230481cac10b"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","f2dbba00ca90b2bb15efc3f56afec9e9"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","c4dbfb2cbbfb9424fa8d9a38e6012e05"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","a52229f8b0507e4723639a4725f6526b"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","c77ad0c8d03cd5789216a09f8f8b3b69"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","e0380bde122bbc9d6add19927e78146d"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","8386f9ea6c0beae473ddafe62f523673"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","3d91b808cafa2ec8527cf23c5480eced"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","6ace906c60558211c4ce0645d4ed831b"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","23fe653b2090389fafa4aeabdc61b6ad"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","b951770a53ff928af6a3afb38b6b6e5a"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","18a2338cbcf4e6be4ca358b8d8618b2b"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","92cc8fc4ae68f9001c22d1d07e5b67ab"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","fb554d46ce919325ff53917c097f0436"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","e73aa12ebf2eaf56439e829189ea2b82"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","c19c10c0310dde31f80424681d5ed355"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","154fd28978a937899284b2fad1a4f770"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","a1c988d742d581b6d694ff9ffd2665ce"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ea63e2f117ce5b9e4a253b1c9dc9fec3"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","6e057035e0faa416552a83c707b66460"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","9ac143237867ec71220d5bba12962316"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","cff3cb738c3a3734a9e32eeefe228c4d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5eb2d0da3ba4043d7a77ad18c0527127"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","c3aaefaf08518e004f1620470ee59bea"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","300d784c91b0c9af3a2d2cce564b52d9"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","c8a45eedea5c6d191ea99aae6cac2be3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","3d8ad75dc49d83b36e47c85676345b43"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","5f147fc71f6ce33f9a335fd94ef06f7a"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","1a8a7702b58a57ba18e6d98f4e005e54"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","1ca04afb3e1e7ad04196ab46afc9d029"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","f5f8d66ad8a2cdd3a203af07d79589f4"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","0813462a7e3f111d0e0e2fc3e003a91f"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","2acbc5347505b8ac72ff31931f1585b9"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","4176383de9d5785492fe0245e3786f54"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","12b2ea106acc56eec1a2086b01ce66b5"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","e226f353bbc0d5b56ffa2db215ab37d6"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","de223fd47e2197c304cefc65afb75571"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","7767b4fc2cbfe26fa769004be941cdb5"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","2605400ba1d114458779394950c70962"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","89b225e09b57d4b687468353414d428d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","27b63e4c00c112564a55816a6c3d73d4"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","72a6a6f0b1c0baf8b07a3a222858f5a1"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","a56d50f4da8e7d11fe07df97641ba00b"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","b9b87c6fe4ff012809c4b0ba40ebb1ba"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","9930c2a0ee3464cba04d4bb81671715e"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","ca170373162c2481291bc6c0d64be539"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","5af5f68f67c29662a9b613dc5e2502fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","ee3b5cfcd7d356d550600ddf864dc4e4"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","3e358a404298c591fcdf14640ec22893"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","6f3bf0b116a2af904eff541184b5a83a"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","1e6609e1ca0bf677d25cadf28203f81d"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","a2c286af196c7b0412f6d2bd607732e4"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







