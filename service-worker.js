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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","0ce2d3943627957e3749b802f825f992"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","4ac69e62f423f16d20056914481313f0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","1aa42427cd742574a3864700a6c09b67"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","8a2f410b7249597b614955e7fef620d0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","bedc1f32066ec7e4950e40bbe2968306"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","861263079f0b51b19eadbbb75d37714f"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","15a49d80a3e38ab1d4399b0f89da29e8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","f2610469b265511b1ebac9c11c317668"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","4ecc764fde1bf3188667d90947adf2f6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","18b62a5957fe85a2ad71af0ecc92a66e"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","f7201d78a7ae5b0b98d3cc9e02d55d22"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","ff334d669eeb077e036e821895b60a5b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","844e4894cc3e131ee86142adff1c7c8f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","9eaf5e601a92134a2c258f724d494c5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","20c0758fa879499058fa69d160eac2c2"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","fbc77b37134147144195c1f2e7d2f409"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","9f828ffa41a7800a67a45517dc42aebe"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","0f185e21f1bd4c508796a0c1e88ea490"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","d05e4bb472ee570a8362396b4a8ab6bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","216b22e044df8df99c36a0ab820aa37d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","44fbfb94dd0d2f6948ce693191418452"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","67471074a98df5b74b2cedacdd7ed35f"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","ff46c014cc6223d6cc295cb80c9e2614"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","e73686ae8458a9c2c7730622954853d9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","c5e00a0352418befca06e33fb0e2d453"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","07029d6437a5f146886e3c441bb806fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","9080b6a12448a4ca79e37909b296ba34"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","3a41c171f36715b7b299be67cb3e7faf"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","70bffd7b7ae26c515968f631ff71e45b"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","7dc16007158eb5f9c0c2fbacda7c53f7"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","3a3f755bc29234d934d3a91142d43c5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","8ac646dd7f2c75951ac33e3c65320852"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","04475d39c01aefb9010ff92b8e363e4b"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","3bb01987f45c3822917ab78182a55aa7"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","f6624d61faac5f7e7d44f6eee163ec02"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","45a8fd4b3a977004206955924d0f04e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","e4eec5c8ee74b0634be535f25f38fb05"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","e607136c29f91409613acfa2c71e8df4"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","b2c8b0abc768b5f474438ad02974015c"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","abd965da0aad281622f3bd6f7cc85c88"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","26d32cf70233a623553f13e07dbf8ed2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","6cefcfa2cd47c973c6263e558feb2d7d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","c3bcd87a84623e0e9391ec997d6ac962"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","e0f6c4af627c6e6d9749c54ccef698b3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","6a097d391f5410d842305ad1869eb5e4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","4aa076031e0ff705a7c99d556197e0ac"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","669b1da31897b2acf502886c9f01702b"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","447a78cd917a933b32663ee239d979ff"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","9eadbb1ad40462cf3b62f30aa4c2c9a9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","12b87e692d7c481bad05fdbbd13cd962"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","82add50233bc69d7094faa855c4aba23"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","96f072e305426b2759bb82fecf23c113"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","f24c4ae5fc36ea57a7db666162fac708"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","e28dd1d71e28df4152726251442d0de3"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","75181d6036d1c2f6beadd5426045a93e"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","0028429232221bb0c95c42ddfe0f07ad"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","01916034851bedd7339a6858b381f439"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","e0cf9e8172e7c9e73c0f181fdfefe2e0"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","42023af07cdee0f218ff0abcc4a8e340"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","4ade3435b8ab5e9a7ebbba89cfd1facf"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","6024d4d02b96cb6461ff4759fd2a586f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","5680b6782ffec0c755efc341011faea7"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","4f073967c4ae8430342f17dff11aa598"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","92049a301e0ccd10a092cd443b23bcc3"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","98c264a269bf8da3ace5aa0d6553bee1"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","ce13a2c672f21e9421604732ee6db69f"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","2fc5815c88e38f67acf27edccc8f23c8"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","6ce67ef7c62f599ffaca5752dc401899"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","e7e7ed0bb05cf18199f328157b748cad"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","8f870239e58a7ae43b249e99e9285166"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","d9510ae4c71fd3cbb8b00ff9b92a61be"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","fd7110ecb497e3b4e9759f16d9ad0d3f"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","679d71d7e646e1f771f648dde6ed9acc"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","a09e6aff6ef91b4c80ae2f58ad0eec3e"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","e523ff36a048e8b472de5cc4d7427f60"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","89e530a942ff5eec6528b8ea5b507093"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","e0f32424394d88d3a9995bc2955c31ae"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","14daafd4e60b4fcab29731db4d1ffcfc"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","b585c46c0d8b4f340110b3d793622685"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","0e664b91e8c12e8b7034d1d8676ba07c"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","998d57b4a8fbda86ec508156e7f905a3"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","7b815e3d246a3c60def0021066769854"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","f59447f3288a83ddfab86600fde57997"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","9649b830cd996d894d952457364266a9"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","adc68f4ce9ad9b7172995e8e244f38cb"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","796de0e48bd55f7f88b4cafef74d161d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","ae9ab209f6b5cb34dab3051049bce69e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","023a25a4111a14912f318ea617efa6ec"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","977c2b2b1f5ba403b036ea205bab93c5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","aaa1dc312def30a637f16c82e9138b22"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","f681bc0d08adcf30d3e7829c8154aaf2"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","0d82d19700aeff43a1f0617e5245201b"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","0fdc8c7e2469a4c1cd6ce9301cfbf558"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","2504bfc02553d107d0933459f31dec35"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","28711aaf30ca57dcce8b779c69344eac"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","afadabdf39e5d06211307250764873fa"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","3fb672758e2c295f14d710b7fb1cb998"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","e0bb6cd25f5480a8bd74b711be7f1ae4"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","3fa14720d157ca0c2e82d4bb7cecc054"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","c1982e909ee2553338fa0b6c6f6a4e61"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","b167b1bf532ad49014ebde0518c8221c"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","731eb135816f279291c966872928ab27"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","b47e08dbee3fa8fc989d985d7465f42e"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","a2ff8ead988fdb802c2b1519e1b6e2e7"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","1eb83816c1d4cde223f3878c905cdbd1"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","484ebbf2a466c51132f5acd8cb0cd768"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","cb2bca8f5e420705d637905d08ca69d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","928bac621268b657998d5d15f0748833"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","70459c40a94d197cbd9cbdfd30d62ed4"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","f1d9be6b9d00626d29c072d61f95d836"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","c9d79fc0415506f4d9bfcecbdf1633b1"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","b6a9c1dc30e75adba078efac4a5e50f6"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







