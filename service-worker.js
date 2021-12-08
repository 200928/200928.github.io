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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","91b9135806b4b90bee0e3666198b0dbd"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4ac69e62f423f16d20056914481313f0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","1aa42427cd742574a3864700a6c09b67"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","8a2f410b7249597b614955e7fef620d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","bedc1f32066ec7e4950e40bbe2968306"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","861263079f0b51b19eadbbb75d37714f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","15a49d80a3e38ab1d4399b0f89da29e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","f2610469b265511b1ebac9c11c317668"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","4ecc764fde1bf3188667d90947adf2f6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","18b62a5957fe85a2ad71af0ecc92a66e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","f7201d78a7ae5b0b98d3cc9e02d55d22"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","ff334d669eeb077e036e821895b60a5b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","844e4894cc3e131ee86142adff1c7c8f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","9eaf5e601a92134a2c258f724d494c5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","20c0758fa879499058fa69d160eac2c2"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","fbc77b37134147144195c1f2e7d2f409"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9f828ffa41a7800a67a45517dc42aebe"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","0f185e21f1bd4c508796a0c1e88ea490"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","d05e4bb472ee570a8362396b4a8ab6bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","216b22e044df8df99c36a0ab820aa37d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","44fbfb94dd0d2f6948ce693191418452"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","67471074a98df5b74b2cedacdd7ed35f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ff46c014cc6223d6cc295cb80c9e2614"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","e73686ae8458a9c2c7730622954853d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","c5e00a0352418befca06e33fb0e2d453"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","07029d6437a5f146886e3c441bb806fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","9080b6a12448a4ca79e37909b296ba34"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","3a41c171f36715b7b299be67cb3e7faf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","70bffd7b7ae26c515968f631ff71e45b"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","7dc16007158eb5f9c0c2fbacda7c53f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","3a3f755bc29234d934d3a91142d43c5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","8ac646dd7f2c75951ac33e3c65320852"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","04475d39c01aefb9010ff92b8e363e4b"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","3bb01987f45c3822917ab78182a55aa7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","f6624d61faac5f7e7d44f6eee163ec02"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","45a8fd4b3a977004206955924d0f04e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e4eec5c8ee74b0634be535f25f38fb05"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","e607136c29f91409613acfa2c71e8df4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","94c6539ebbe1f6cab8d1bf14f575982c"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","9f3665dd24af2f258a2087ebce84213f"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","806cb2f14c9883ce66bb3a1548248d93"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","baba205bba62f94acfa19af2ed094c6d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","e02d705dcef0243ec65f0394a3b3174c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","19138f6952fb0473716527391500422f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","5a6318653fe4ff6bfda69a72ffa2bfc2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","1dc0cd85ecffab41c9a4f9791012f856"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","01b38952da9c0d3c8ae00b4526e2f6f7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","a07c48e93876223be326163580e6b75f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","c7a00c51f789073948af959bb80de8bc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","6303b3a967ddf665556eaa0b39f9f796"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","65dfe175944e60daf236214678bceea2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","13386eff350dc9c13a98d074dd95a8c1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","88c7d8b7f909ae9e5eef39984aba6216"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","51a21f140a754af7fd8949e7e8b4af4c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","e1d6449ee038b96e9e2c3d66ca461e9e"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","445bbdb3ae8e356ea402dda3b3ba671a"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","dea273722f4df31dc3975c8c6372a84a"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","daa93a8217eebec60ebc1c75d8e545df"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","509318061f4c8f797af46fd3878d015b"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","ec47978911e0bb694190dfe73fc0c0e9"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","3e0dae44134a4b5f5c92b2ce33b9dd72"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","5e7082162fc9ce8b823e5e4fa8fe7f09"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","ada25174b8d4077b4152220d7d615f41"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","ef19f0e8f8645abe9983dcdcade16ede"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","6f4470e3801c323faa802398cdfa1098"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","620a56af9fa7684cf60f31bafbeda18b"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","a6a694da26f705ff4365941377ffed7d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","4f03e5f6beb7ac004f0aa478175423fe"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","a6219fd855d36c33e41d0b225172c060"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","75cb0f90b9c91c7bfeb4e861f70eedb4"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","fb4290ee6a65865fca7dbb3b4be199d9"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ca23b49b2bfc7150ccde820e36cbfb3f"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","13130d34d9f726e01beddac21f95b1a5"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","8e749214ecbf51c610bec0426c18195d"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","692c6aa748add059ef3fe77b3f2a5c42"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","8fd942692d504936c5710f7947e21a6b"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","0fd5f580c143d583879f8d3b1e482a35"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","328589c7d8de112a23001e4ee312ef81"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ec911ab14f7a45c8190e4bbea14550d9"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","ade202cc2f81c71a20eb1bba10eeb1ab"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","d3b6dd48c84138aba93ea3f949fed0c8"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","c4ada55954b671198a8f2ae953e4112f"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5ff0068f942f6aa64e8ec6527916c1d8"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","65cce89b59d2c0525bc5f7128f52162e"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","6d9209b94be0f6c3e5e32c2b38181097"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","7e473871a6ddc1fb0c70906d6a6c6534"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","3f5915a2b8d1524a00cd214fc5f7c73c"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","dbf0b997f2836f810e5c69e4f6f9c292"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","5df7798b46839b16b72e7e3b91ee3c95"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","7ba0f8d1768a50ffb1a862541c6468d2"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","0c258dd8fddddd2c5e65af33c5717de2"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","299b9a57e9f8b35fd996e4e29bbb067a"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","ee25065668363a4593a2c7e6ad42da7b"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","d07964e9358abf3a687e0ac5d6112a16"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","cc4a2da8752c06a9a8e832a7913eb074"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","898ed02e8bc7e7b8897f762bc1d723bb"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","809108ca1837debb7049b4e50242281b"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","68c8d81a2362338b9c5214706d6e2035"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","cea9c23f380bf8a23bd3bd995c5d7dfc"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","bc9c7d48fbe9f2586fd597cc9b72df9d"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","946573e72e9f1a39d2f540cbfd5ffeeb"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","514e40b26ca2f8f9b7c6f0795d5b3926"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","5a2a882a60cd65d875964d09dcfc0346"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","8a456a1469be946561b4a17b1ce0a975"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","6df55ddfdf591ccd560a7b5042ded8d7"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","4dfb042e279f1bcab055685780fd5575"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","9ca222fb3f2fe68cd325b49bf3dd17e9"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","cdb401534e8cf09d483d780bb0922cdf"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","dc91955d9bf45dc3898fd4a01da6dd7a"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","c4c0c3ccbcc660de87622f5b0973ad76"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","42735ee05f8ab79c5c56ea6b6b828c0b"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","8d1349793a17e2040850004aa5b9e59e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







