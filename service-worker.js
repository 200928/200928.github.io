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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","15acd53cf7a72887f7e1cab393a77740"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","dbff24ce7ade8833bbf361676b8667c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","cccb9349892e71825065cf41ece663af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","5d3d59faef07efa4cb52342d35719e22"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1492bc7df02b7863b75df53a459d8f49"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","ee4a56e7edfae0f66080cf2484f50c59"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","23530385771221682e1379bd9dcc5e04"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","386de23b1584adadcd017e8f52b07393"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","0b832a37d6f15991c7201a12fd7e8dab"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","bdcad2b8070a4b1a91c77b5d9574e911"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","00541ed9afdf0ea031e6d3943d2fb3e9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","aec46d4a7c481e937e41fe8d551cef41"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","2ad9528a57eec44a0d29c2c4971cfae6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","aa9b465bdd7582733edb7537c60a59a2"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","97e57752ddb28b0ab4bb692305f015e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","541a4fd56760a87ece8510edbeb35612"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","41bd476c682023933d841f77fcdebe6d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","81513c76b3ccd51931475f530d21de72"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","f7924116488a4928140056c86f1d03a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","0afee32319845c912492841a7ba5cd0d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","b4d559fbb51bf6b4e9c9ed8ef44b3a22"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","23e0fe0ba08adae0399c8daa2d383be5"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e2c9504d92e673de24123c8edba36c32"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","f038ebe666eb62cfed170720e80f4355"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","1a1c4b7cb377d41cbffd1a40ef9f4802"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","ba1f0ebad0e5558bd435220ffd51254e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","9425bb84a9652f3c5b355364ecbe55b3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","cb3b8309ba125e1dc3025f7ca049d3c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","2160e01c65695400d39149a67ff5571a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","82994ee62d1ee75c523a230692a973b9"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","bc84ed12702b21afaab2cd1eed0e8049"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","ef9a1898498000f09e01a768d7f3f55a"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","a030698a1874f0536fadc4c4aa5fbce6"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","6afb3af7ecc231ab074560d12abc9aa4"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","e23c6466627e8cc0b1b5248c5c6a9da8"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","eec3091acfa7e4174923124f53d17fe5"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","8ea424af70530e7c7f300d120506a446"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","3281cb129df9bc13ebada74293ce1a9e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","392c51054e115995daab686c76b3f8a7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","619b20a782a62e92d0eaa21d87d03026"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","0af6c1a46c9b92e35d4a585b6a99e00d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","411f3b6f5776a6b0edc00e164a7e8a4c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","ea8943dd0c8e10e06e8d823164d85ebe"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","aa3bb2939ef6ce7e7e1d22674e482dd9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","b4188d5de55164bb5d3b780909a38404"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","b09d77813988d725091d8df0bb50c2da"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","32d13b8b29672a8d7c0a12a3108a3c2c"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","784fd234c568978094fac519293419d4"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","6585219bb98a0ac69d7cb4275007af3f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","e8fee14766f09f691671f6ac66dae867"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","1331afb59c923754c73214f1dda36d0f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","54238f9b27478e8220e36caa842dd79d"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","0c77eaa32f97527d7c6bfe2dc399ff94"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","9eaedc86f689df12b59814d84cb13f8d"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","57a43c27624d2a00a1338cea7c6bb639"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","0e9a957ecc82cb0f3ae3a1fabc181563"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","49bc894bb0a00b12eeebba55c993238b"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","15ad7bf70c741e79d8b82df09a9c994a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","78132f81149f670988edc0216fa229ff"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","419e293a340d4fb9953393151d1034c0"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","83a910359b7d1c76b3fc4226095d3d8f"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","7d87e8f0f0ed09a3fe8ffb30832744be"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","c05b3c463cdba6a7225902964314cb0f"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","4f94cd520516a5eee51a1d7d1d6c4729"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","3dc6dbd83b418525b4342fa3b597fc28"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","a369ebea5ebc07957cac708e435acda3"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","66280c93b7c736d0fc4dac1e6e0296f3"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","5b69c04f8f1257cd18da77cc0b95b9ad"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","48c7b359051ea7342295c6b596a411d8"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","a73aaa52c75f6c486db3277463ba208d"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","2d2bb18bf5f319e14255320fd2ec9556"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","81639623c53223938d52b146b244e76b"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","34b65f14fa568da903da94be638fb070"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","66d44485d76c24d064e5a3a544b562ae"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","97d6f268854c0fa460df792e9fc6b43b"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ee6dfcf030e0c8bbb2a89e560b2a10e2"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","64ddddcf247c241a6954704f9314ce0b"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","c01c96e95c85b4b3735797bd95a3c4c7"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","38116b58c5e442fd074f8ac31d221182"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","f77a23fd088bb650c3cc1c7e8782e709"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","7b331dbdfce40b36115a977ace92084e"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","d586c89370e4799d85048bae4152083b"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","73d0b012da8f96a24ba319567683b21e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","bc67432cbc7d5c6cbf7456bfbe4b09fd"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","0dadb88e2fc8391b492d6cd7980880fb"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","fc057d6ea42804a5f3114296a67efb14"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","01452d3d7b23d22f2139e508aa33b8b7"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","94090ada894269c8f19066dd29fb90a3"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","a601038e3a6e866ec2212e4c6e345fcf"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","0dbbf34342860726d10409e7db70be2c"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","99506676d4fa0f89dc88022eafaf02d7"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","0d8bd7a61e7704e40ecbff9259f39240"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","8783756e0cefa8a8bd35b13e163d6aa3"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","5069109bf222d46b559ae60926fccf3f"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","d7a016266df2671c2c73bc59d1e53d34"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","ff0d486418d91473d44bcb6bf8044eb8"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","f4e09e4396564b09bf878db700379e13"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","efde141344a4a14622208574aa4ac541"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","10974f4d4738a248bf91a1e625fa7df5"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","a0bc55fd2c8db6b72bc93f792fb44741"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","b40d135cd8d214564d217e92b9d029b3"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","0e91c18903fcf96585515501b7268742"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","92080eac2c03352323fa3c54cd38a042"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","440f923a40b6764970e85725158ab381"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","bc6512e2fa7ad305e608b0b48b1f6c2a"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","0fd46d1f45c0e9ab31e10ef55ba4d712"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","d775c67065ce20e0271da93c0b7b68d5"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","24ab49b84f0411001993575441b23072"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







