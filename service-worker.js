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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","09fd9095e96cc9395d78b0c2a58b20b8"],["1970/01/01/nvim/index.html","ec331cd5fbda05f1632fec353b54ab25"],["2021/02/18/Git学习（个人记录）/index.html","9b941507268791b4b91707b0303bfce4"],["2021/02/18/Hexo博客搭建记录/index.html","fc2d28a2beeeacc72ab6f7f279a55766"],["2021/02/18/IDE配置/index.html","32c1e8941d780a16fd36413f329edc81"],["2021/02/18/初识汇编/index.html","bb21ae8194107a202aa20910b1fcdd69"],["2021/02/18/链表与指针/index.html","e421ee493010c0c2caf5697678f138aa"],["2021/02/22/Topic LinkedList/index.html","09f770be2621abfc87112af87c0bfec0"],["2021/02/25/一些设置/index.html","e6de1814e7746c1dc34b108b83e068e4"],["2021/02/26/WXY/index.html","bd950ae2a72cbfbe3f7775ae70bdb058"],["2021/02/28/大二下课程推荐-计科/index.html","2a9fe0842ec68360f17335b16f4f0980"],["2021/03/04/Linux-notes/index.html","29a02fe8ecebabcc3c81624bc1d7e2d5"],["2021/03/08/data struct one/index.html","b0995b4d00fe55079443b0b5459fa63f"],["2021/03/17/data struct two/index.html","d7d6c72ca4ed16aad55b77c0b8dcb372"],["2021/03/22/STL/index.html","e6f56e4c49f46e520fb687168b6fe9f3"],["2021/03/27/Battle-of-Tanks/index.html","6b0d7826f41f5604b73fdf229642a394"],["2021/05/01/MySQL/index.html","4f1a8e4c526beddd3a5f2d0ee8130296"],["2021/05/09/HEXO部署服务器/index.html","cfa16fe93a415db570fff937cc725ed6"],["2021/06/04/vim/index.html","17ddc9498e427eea69ca8ed3d8a9d91d"],["2021/07/13/oh-my-zsh/index.html","7395a82253394a38abf5be585b7ce416"],["2021/07/14/HTML/index.html","e608f447dda3fe753bfdfa53be7e6015"],["2021/07/19/Maven/index.html","a9aa49a0fc40efe8bc6a9472f568ad10"],["2021/07/20/随机数（C++)/index.html","df6057c3e55cf6525aab28e23ad080ae"],["2021/07/22/data_struct_01/index.html","55180f833e07eb662019c2bc358bd31c"],["2021/07/22/滑动窗口/index.html","1b6a235bc2bf4ee4bc2467a475832ddc"],["2021/07/26/Tree/index.html","bf047532d8f9c497a6f6d081c8e3fc57"],["2021/08/02/正则表达式/index.html","b4adb41f3e5c26d3c304c8938a8010ec"],["2021/08/14/CSS/index.html","6ea3a4b765715081a2ebddccb468d4f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","fea1b4c6e5fe293a7a10da86e0c14ffa"],["2021/08/19/Windows Terminal 美化/index.html","e8666ed74b52aef31c6286c9c66a7391"],["2021/08/23/EROOR/index.html","c44e8a6651ed6718f45f927acbcdcef8"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","80c0076e5babf6cc9bc77b904a38109a"],["2021/09/07/编译原理/index.html","2fd0d3d8bea0777cf1bdc87fc1e1b7f8"],["2021/09/27/网络是怎样连接的/index.html","a2c5fba9ffa14c1961b9c8a260f6204a"],["2021/09/27/通信基础/index.html","c6ff995f07c16420a23264ec29f44924"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","68901d6ee207a97d54863fcb4cd7f537"],["2021/10/22/vlan配置/index.html","c686828f1ea20902e3d38dd2889902b6"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbcd25cd092ee45fa7c04ddeb823193b"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","f881541c0822b567273875df6937ca0f"],["2021/11/17/硬链接与软链接/index.html","c1d8919f536117399937aab382727676"],["2021/12/01/SQL20题/index.html","d5a1daa75eb4566f2d3dba73ce045cfa"],["2021/12/08/实验五：Wireshark抓包/index.html","e448546b1d332471c89fe0e8b6436b2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","679345f12d7b8e4c3a2341184c554aa4"],["2021/12/19/CentOS7 安装相关组件/index.html","75d14b52632f65033b853350b7a96e31"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7067920ff2a902440bcf7e041affaf79"],["2021/12/27/Vue/index.html","43d7a7ec83ffa38e5829a87a0f416590"],["2022/01/08/ArchLinux系统安装/index.html","907a41a1619bd647ad0d7d8262edb629"],["2022/01/10/ArchLinux软件安装/index.html","506a16f466d737e02fcf8c5dbe1ae56c"],["2022/01/11/ArchLinux开发环境配置/index.html","8a111d4e3329558207f51a364af88fd6"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","51d6f73811ee513b0179857907a1978a"],["2022/01/22/DWM/index.html","ef99c82630c9eba41ae2226d4c3861dc"],["2022/01/26/MySQL性能优化/index.html","22b6b3e3457f34073dde7ed5fbd6e9cf"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","fb6840d4f61a88ba34503edc748ac00d"],["2022/02/27/ArchLinux安装wine/index.html","9e85bef6d9bbae4a460d4aa78f1722e9"],["2022/03/01/ArchLinux安装VMware/index.html","defd294e5a67848901f99c534ad25ca0"],["2022/03/01/ranger/index.html","ca3f60cb036a6d0e1ec8acc417e99a90"],["2022/03/02/ArchLinux PPPoE拨号/index.html","b2e86fbc0b457cbf229181415c150583"],["2022/03/02/C语言复习/index.html","fcab43f7d5f077a860a77a544051087f"],["2022/03/02/Linux修改IP/index.html","815fda63d081a08995d19bc25a03e620"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e24d22cc7ec4853af84e07dad07763eb"],["2022/03/16/Linux文件和目录管理/index.html","74ba93fff189847ecb08ad55eb6a7270"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","cfbf2890b005d1041a586f2479ef5fe4"],["2022/03/20/Linux用户和权限管理习题/index.html","77ac7ccb31af242af3de15a65b596f78"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e801036c9671c4cef5e4528fb1a6a0b8"],["2022/04/02/ArchLinux安装MySQL8/index.html","13b570fc25bc1ed7835b902e71310c6a"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","033704f10ff690ccce5831f2c7518723"],["2022/04/13/Linux磁盘和文件系统/index.html","5488cdbe5df518354fefb8ab5355f905"],["2022/04/13/Linux软件包管理/index.html","21cc893afd667fa64711f3d63aaf4433"],["2022/04/18/ArchLinux触摸板/index.html","61f2cd58af039f83900eab40a7c6d9b5"],["2022/04/25/FreaMarket/index.html","47a2d9d3a06559d736df2397206daca4"],["2022/04/27/Linuxn命令练习/index.html","418f56902e43cab0c7712e069344990a"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","21514272d53c7edb6a49841d98090192"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a5cc73ee45a541bc48a47dbee83e179e"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","d025e59df346b9acc8ff2e7319b70e94"],["2022/05/20/Linux进程和服务管理/index.html","d9572ea76c571261914b9c161cdfb3e4"],["2022/05/21/JavaScript原型/index.html","2c0ed3acae394cb6cbf2e1be5bf017e8"],["2022/05/21/SMB/index.html","3d802c06e07be6a672285d12ebed401c"],["2022/06/10/ArchLinux外接显示器/index.html","404a53bbe2aa8a58b22cfc5c4966a7f6"],["2022/06/10/nvm的安装与使用/index.html","57776a5d2aeb9f6e2527dc6776b4f66f"],["2022/06/18/Git在项目中使用/index.html","1e3d15dc9b38a48d63f68c1f11d821e6"],["2022/07/10/nvim键位/index.html","87ca34157193133e0e089502573f754d"],["2022/09/28/考研政治知识点总结/index.html","cb0ef803fe628a5551d663d22863e8c0"],["about/index.html","53c8ac82fdac79a43e6009c65be127d3"],["archives/1970/01/index.html","48371256c4d48305e4d7ca8c7c230f00"],["archives/1970/index.html","d5387a4701fec6f5ce6b6299894c07a0"],["archives/2021/02/index.html","2ca66488d1552afac7c8f0b6e31016f3"],["archives/2021/03/index.html","d232035466ae3e04f6434437861570ec"],["archives/2021/05/index.html","eb54faeb7ae54bab196efe1a8013ac8b"],["archives/2021/06/index.html","b0c4659011a6219cc4530e020c40fb89"],["archives/2021/07/index.html","3fb833ef4dff905fd0445f8806d7a181"],["archives/2021/08/index.html","f161e69377d3d5bcf893d2b4e2f4883c"],["archives/2021/09/index.html","312254e444b8369b03fc53a3f7222945"],["archives/2021/10/index.html","f814b0c1404ed6fa6c337e1f82d505ec"],["archives/2021/11/index.html","ad35d2736ad9beaddfe3743cda6d57ca"],["archives/2021/12/index.html","05df3811e999a2754cc1347c4742fadd"],["archives/2021/index.html","4cf1584c62474ecfa3120b48d1d52283"],["archives/2021/page/2/index.html","9b04de3b9f1420b1c3956222ca869848"],["archives/2021/page/3/index.html","42870993815f9ed2342a7203f12c4357"],["archives/2021/page/4/index.html","7d66603f7ba9d5a609b186f8ee9699fd"],["archives/2021/page/5/index.html","e473057bab30a1b250e1fac10a49a918"],["archives/2022/01/index.html","3196c37b5f9f8d34266317e9b628541d"],["archives/2022/02/index.html","da8284f9be5ebe8d833ad4c9a65781b4"],["archives/2022/03/index.html","b0cde359eeda2b9b627338886179f433"],["archives/2022/04/index.html","2e030c1ed5dba2d1345ca596e7d96ff7"],["archives/2022/05/index.html","be72d4eaa43c14dd4336d6a504bdf249"],["archives/2022/06/index.html","953c98527bd3522e5e4bfff36064a857"],["archives/2022/07/index.html","7c050c3eee5e8fc2d8bdda941e8a2c76"],["archives/2022/09/index.html","27f7a7583253f2b8ac1571bd7eb8646d"],["archives/2022/index.html","24d53ad6bdf04d482f5fbf553f7a2e64"],["archives/2022/page/2/index.html","cbe5c2fa716470846083e48cc363e64e"],["archives/2022/page/3/index.html","3eb317aba4e326ec008ce9852c068b08"],["archives/2022/page/4/index.html","aee543052776f8dbd0a2af8765d26049"],["archives/index.html","09b7ef76356370f7fa729ed416968f26"],["archives/page/2/index.html","dc61e840fc052b31608913529f7e5c22"],["archives/page/3/index.html","e4ca645fcc02bc48943f0f2d77894efd"],["archives/page/4/index.html","07a2c1c9575c32e2ba1c1655e2eb1628"],["archives/page/5/index.html","7f5059af7934b491e13b4a39d71e39ee"],["archives/page/6/index.html","465000a3a717a3e0b860c934627d3896"],["archives/page/7/index.html","4843bbd5568c1a80d30c516198229f54"],["archives/page/8/index.html","b9912f3ee86c54607992f760fb52e26f"],["archives/page/9/index.html","c54eb17ea351d0f2db588319fc00fbe1"],["categories/C/C/index.html","74221d539f531cbf5e3b80d693ba45b0"],["categories/C/index.html","a09babd53d283a45174911d081503203"],["categories/Linux/index.html","404a8bc5e48ac7f388d51de4a6cfbe46"],["categories/Oracle11g实验/index.html","3b8df2f6b90f01f96bce0589bb482267"],["categories/Windows/index.html","ea830b434a3d0381c6a3e9720e6fb295"],["categories/index.html","1565383e532fe142e7225834b3c77222"],["categories/javaSE/index.html","d6aee74cd870aad630f1edb1bde142b5"],["categories/tools/index.html","923bd7c44a576143541265bfc014ad5f"],["categories/wxy/index.html","ef80d488be0f299be2deb8575c8c8b96"],["categories/个人/index.html","b240cf1c7d14d5de6973c49001e1419d"],["categories/前端/index.html","c41afdaa131091b973129e647736c582"],["categories/工具/index.html","81916d7718dc9ca2e24fd68fd9d8579d"],["categories/数据结构/index.html","ee86a7cd51b870400f2cb02d44653f8a"],["categories/笔记/index.html","4f7b5e94b98fa4eaf396af5f5298d97d"],["categories/笔记/page/2/index.html","22197f7f775c150edfb87b9f92aa6ed8"],["categories/笔记/page/3/index.html","6ea300271fc410d5d53ac7eba6b717e3"],["categories/笔记/page/4/index.html","45abda3ab97e16bddb3687144eb3f384"],["categories/算法/index.html","59115bad0b24ab24e62269852d6f5f90"],["categories/美化/index.html","6d6ee196b6cd329ab5b2ede218b0e8ce"],["categories/考研/index.html","4fb80b51eae3725fdba0d3a6a33ed69a"],["categories/计算机网络/index.html","d24f58be17ce0d568db4638d3e266e4a"],["categories/计网/index.html","3a43a1f05d0909fed2be0e18dd1e5fb4"],["categories/语法/index.html","c08df8d1eccea804c05c6223e0d5929d"],["categories/软件/index.html","e41ecddd0883d6b2efddf0449f74e7a9"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","f3f8e1323639ae2efbf9cfac8e0d2967"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","6656f5f7fd1ccaec92360745bedc1c9c"],["page/2/index.html","a2363be879e6031882e3cb8e2433d4f6"],["page/3/index.html","688171d4980c078d16101c965cfcbeb8"],["tags/ArchLinux/index.html","8b9645f92ae17275ffa2a2a2ea87e391"],["tags/Burp-Suite/index.html","0ffaf8dea035779703b75d0a83c6b9f2"],["tags/C-数据结构/index.html","5d0a9d9e2b834a25b72fa1046d94711c"],["tags/C/index.html","8be1c1367ca49f0229cd89a801872c38"],["tags/CSS/index.html","aa4f33cba969aecc9eae86a84e81e5f3"],["tags/Git/index.html","5e18b80e9d2dd52e855d9335406cced6"],["tags/HTML/index.html","b74f79d439562da4b877e2354070a2e7"],["tags/JavaScript/index.html","61c7efcac78d4d7e1a19123f9e8fdd00"],["tags/LeetCode/index.html","fd050b344f07c25cb01947ac8045ce84"],["tags/Linux/index.html","f92c3e535f81592749ead4d2f7092396"],["tags/Linux/page/2/index.html","7fa1722be722003c38a8397270aa997f"],["tags/Linux/page/3/index.html","45b6babaab36f10960a78806456c908c"],["tags/Maven/index.html","2a75c7ea991edd27a47801a68c70e7e0"],["tags/MySQL/index.html","96929ee797f00077a1802a89902dee31"],["tags/Oracle/index.html","31823ec18880f8a70237d4368576f812"],["tags/Vue/index.html","8235b77564b2c77b8fad12e5f7130d28"],["tags/Windows/index.html","46583344f92cb773b66dfb8a79201fdd"],["tags/Wireshark/index.html","ac1bd4448104629299554353ebf44937"],["tags/index.html","42eacc3f99eeaa39413604db3db7a446"],["tags/java/index.html","83848247fdb5cd112bf53ee156ad5261"],["tags/route/index.html","a63b758e42c7535ccfc8277453b864ab"],["tags/tree-java/index.html","bb0c1512d5d44d33bdd0b0e48d5cc386"],["tags/vim/index.html","bc802e33f64ee5c0336a885d4c41b26f"],["tags/vlan/index.html","1720af3586015d774ea3df1302e1b3b8"],["tags/wxy/index.html","ad343c3b51f62d93636c6506a0952eec"],["tags/个人/index.html","f2778cc425c3c308da726ffa8a46ce2e"],["tags/书籍/index.html","91496438acfa149835dc34625068ab1e"],["tags/博客/index.html","5582fb2d3e21026ebc00c307783ef454"],["tags/壁纸/index.html","89fa10443b2ce61f2010ae0543f05077"],["tags/底层/index.html","54c915b7945e8394474ae9185fd78705"],["tags/政治/index.html","56c361ba64055df0e162b70e31514e5d"],["tags/数据结构/index.html","4d0faa7f8b4a108b226f80288470b8af"],["tags/文件/index.html","e660d01641e4fe181839ca92153c32d6"],["tags/服务器/index.html","cc2200b0fe8ea0757f0271d2e5cb6de6"],["tags/汇编/index.html","699db32856ceae596c79913003fe65b0"],["tags/算法/index.html","0fa8c2ce158450c110fa652fe1a77eab"],["tags/记录/index.html","29d2e60b0c7b863fa87ee05ed1bfe456"],["tags/软件/index.html","ee0c3a88e94986b6c74a9312e42c383d"],["tags/通信/index.html","3cecdfc58a44cd42a116aefe54cf91db"],["tags/链表/index.html","e5e50e6c1dd539edb432d908edc41d67"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







