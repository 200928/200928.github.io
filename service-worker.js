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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","dbf7da065df1dd19d3f2725a22fa7159"],["1970/01/01/home/minghui/Pictures/blog_img/webp-16662550440492.webp/index.html","7e3fdfb89cdb6f6517cf0dabb6d8184c"],["1970/01/01/nvim/index.html","355a19ea3bc4fd5b44b9a5f12aeca9cb"],["1970/01/01/来源请求/index.html","da769b983152e0e08236b9f56ce4f54b"],["1970/01/01/英语语法/index.html","8030ab0339ad6957a443877e1c86ed89"],["2021/02/18/Git学习（个人记录）/index.html","cf34158617aa1d478387dafca9b9c908"],["2021/02/18/Hexo博客搭建记录/index.html","c34ee896f56ce8f6129ea746867e3462"],["2021/02/18/IDE配置/index.html","87349d70b28ee57f21405cbad91d00f6"],["2021/02/18/初识汇编/index.html","cafceb41f7e9d28c9c4031299a3f221e"],["2021/02/18/链表与指针/index.html","a4ac653b96fc51ce9cabb34fa02ecf8c"],["2021/02/22/Topic LinkedList/index.html","798ee8a9ea764355393e640621321cc8"],["2021/02/25/一些设置/index.html","71037e09be8eee073305ed8188e48251"],["2021/02/26/WXY/index.html","5e187899bfa46ab188394341d4a7a9e6"],["2021/02/28/大二下课程推荐-计科/index.html","2c594d62334cf692f4554d5840465ecc"],["2021/03/04/Linux-notes/index.html","173b53f8ead8f6f5559b5b9bac6eebfb"],["2021/03/08/data struct one/index.html","7d9054585a685edce204e0bbe5ca316c"],["2021/03/17/data struct two/index.html","f0e3fa03be2a81da9cd1bc411b0b1332"],["2021/03/22/STL/index.html","30c51b23e6f9b4cfa0f8df55039a6837"],["2021/03/27/Battle-of-Tanks/index.html","b857c0e8a433ecdeb31838186d49703a"],["2021/05/01/MySQL/index.html","2dae44c07542fb660ee73c477fa637fd"],["2021/05/09/HEXO部署服务器/index.html","d0541efea570a1b70b06b83371da5c95"],["2021/06/04/vim/index.html","626156414ba968189e8facf3502fabe6"],["2021/07/13/oh-my-zsh/index.html","289c94d712a005005a94027b77983a94"],["2021/07/14/HTML/index.html","269a64d90f2a82b3df2708b7b294f580"],["2021/07/19/Maven/index.html","5d644fbf2e40e1287d49e4e2fab8fc8c"],["2021/07/20/随机数（C++)/index.html","b97cdd6aea3b93f4c926e9b21d8b1cc4"],["2021/07/22/data_struct_01/index.html","e0da28e1700eee35430177ddea4e73b7"],["2021/07/22/滑动窗口/index.html","aa8ce147006b5ed00f7b2663e1807be4"],["2021/07/26/Tree/index.html","706cb144c0aaf910953f8293ae950acc"],["2021/08/02/正则表达式/index.html","3dddf28873d7f3c63d339a7da43bfcbc"],["2021/08/14/CSS/index.html","b570e16e8020d37f4b7ce04bc769a4ba"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","f23e3f9e5c774a96ef381bc2be002e1f"],["2021/08/19/Windows Terminal 美化/index.html","eb303184703d610440eada9311e76d4d"],["2021/08/23/EROOR/index.html","4e1afe9861d6c403fcb26ebc26c93a75"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","d7d08d2e5c96ad6e04aadde53591f5ff"],["2021/09/07/编译原理/index.html","461a011cd2aedb797364ed95af311f9f"],["2021/09/27/网络是怎样连接的/index.html","a36bb741c9509f5ff59b3d5a53499591"],["2021/09/27/通信基础/index.html","bc7ef546a7c795fedbabe20eb6cd0df0"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","9d98aa3623057d39f5ad9072aa757899"],["2021/10/22/vlan配置/index.html","2dede4f17e20f123a4abca8ba9c71e1c"],["2021/10/31/实验三—子网划分与静态路由/index.html","88e0e6c560c1865a56c0c8a2cf29e907"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","32cf934d6b614e813d4b6630f9d616d6"],["2021/11/17/硬链接与软链接/index.html","db1e4348365f2fac1fd69f59074bd712"],["2021/12/01/SQL20题/index.html","bb925ee2bdc5a0ce81abcc4474ee8300"],["2021/12/08/实验五：Wireshark抓包/index.html","c810a8be9d0ed9610900bc56f98d3844"],["2021/12/15/CentOS7搭建FTP服务器/index.html","d18591a3c78c21ad21a7674082ee5d29"],["2021/12/19/CentOS7 安装相关组件/index.html","d7318695c96cc0bf2101ef12fd1b8a65"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","3f3f7168394bcb78ded253aab0cb9e5c"],["2021/12/27/Vue/index.html","d62568375c77cad69db6ae3f635d97cd"],["2022/01/08/ArchLinux系统安装/index.html","a96feadcc3d3b9d700fdf9f379e1ba35"],["2022/01/10/ArchLinux软件安装/index.html","07d696fa791f3dbac57975d166885ef3"],["2022/01/11/ArchLinux开发环境配置/index.html","f20be4defeaaec3d6228b579fa6f4d78"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","40cfd5e0991f8a42232bbaeec6f72339"],["2022/01/22/DWM/index.html","a8c73f19c2222057f3d3d1e284b7e814"],["2022/01/26/MySQL性能优化/index.html","2ce10b084231417aba2a95e7bcfd2fd0"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","11ce3cefaf047960b060ed3781d0fb6c"],["2022/02/27/ArchLinux安装wine/index.html","54988ecff3faa0da7054be26b92518aa"],["2022/03/01/ArchLinux安装VMware/index.html","969ff638b39ddbc7a036e9215030d82c"],["2022/03/01/ranger/index.html","8a5e684915766b94c3cd96ac91ec40ef"],["2022/03/02/ArchLinux PPPoE拨号/index.html","6482fff94d25931f4a3ddcf1d1d3a32a"],["2022/03/02/C语言复习/index.html","857af49dd156887e3427014cdb9d2dca"],["2022/03/02/Linux修改IP/index.html","238f2209f58ab3d7d917259e636aa717"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","29d3be070f2167be38cffd9d6cccccfb"],["2022/03/16/Linux文件和目录管理/index.html","50b9951dfcbc1f30ce2e0fa07dcda44f"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","d15c8c6ec8dd3c776816ad43ffbc6a7c"],["2022/03/20/Linux用户和权限管理习题/index.html","7d7e5b61e27d42242f3f4665f8fa37c5"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","965217515b0758e1e3fd399cd4635ed8"],["2022/04/02/ArchLinux安装MySQL8/index.html","86fbfae120b85577336891bbc6d8c45a"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","8109cff493a43e2814a8eb41d7d11cfe"],["2022/04/13/Linux磁盘和文件系统/index.html","afbb5cc2109b530bea2878a86c3a5b17"],["2022/04/13/Linux软件包管理/index.html","debc769a9946264623d23c930d8bd7d9"],["2022/04/18/ArchLinux触摸板/index.html","0eeec67aeebd43f1676593e1fe22c941"],["2022/04/25/FreaMarket/index.html","2736104f50e572ff35d59b3601074911"],["2022/04/27/Linuxn命令练习/index.html","1e11ad4a3e4075e2dadfa7e38d406031"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","50996b6935f9f030967c1f3e449b3ed2"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","ee4f24f7b247889302fa75c72343ad0f"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","01a1ddf12106ad2ca4397dea753717de"],["2022/05/20/Linux进程和服务管理/index.html","c672049867eb58ee9b8bebbfbce6f243"],["2022/05/21/JavaScript原型/index.html","90a1c303fac319d44853be6e5d3edef3"],["2022/05/21/SMB/index.html","6e5dd25506e4d7eb249ad5e93f3cf514"],["2022/06/10/ArchLinux外接显示器/index.html","cb7e27b624e4553b854958debe753da8"],["2022/06/10/nvm的安装与使用/index.html","1a052eb95f2c07c98900bc29a0a805df"],["2022/06/18/Git在项目中使用/index.html","1adb224252caf0b56c936705f3e47415"],["2022/07/10/nvim键位/index.html","8ae84e27c3edc98e524159870758b060"],["2022/09/28/考研政治知识点总结/index.html","49851c7229d6f98b8f704d063adf5410"],["about/index.html","7f099d2cd1a45af3512ce40452f99b19"],["archives/1970/01/index.html","d5dc57c403dd7430428e758d79312cb5"],["archives/1970/index.html","b8ee588f3a02e64c5a30cccfe6a5cbd7"],["archives/2021/02/index.html","bab7207b6bedb9c2a9555e21279d2ce6"],["archives/2021/03/index.html","7fcd12bc9525da3284b19e12dbcde0b9"],["archives/2021/05/index.html","f9f51ebb8f755773566c9de76b8eacc8"],["archives/2021/06/index.html","40dfa1dafa2080558f29e2a77f9d9104"],["archives/2021/07/index.html","c1b8db1f6883f49a8a6c2dce59292e3d"],["archives/2021/08/index.html","e99889c6e8d0c151373282ba3c53535d"],["archives/2021/09/index.html","f77c9c52e57d5a02559ca9b825ee9b8a"],["archives/2021/10/index.html","cebc8d2d73ce9aa9bb003887d01bacee"],["archives/2021/11/index.html","a6f4326644a2be56a5d43e07369d1777"],["archives/2021/12/index.html","84a24bd79c2b939d5b156685efc44528"],["archives/2021/index.html","449ff9ee9411901dbbd1feaf027c1dd4"],["archives/2021/page/2/index.html","23ecf38ae1546cbccab429c2a3d380d1"],["archives/2021/page/3/index.html","ee2ccf173c0d843e04a38778a104f3d3"],["archives/2021/page/4/index.html","64135715be7f79576fe9cd1e10196c5c"],["archives/2021/page/5/index.html","f830984d0eead6c79f8147abcabb8607"],["archives/2022/01/index.html","36323f1e572d4836de0a96a2e9cde1c3"],["archives/2022/02/index.html","2a1a4f19fd5f82b11557dcd8f826a5ce"],["archives/2022/03/index.html","504e006cc9beca8ef15f0ab793b5062f"],["archives/2022/04/index.html","bc14137f900e808dbe7e2f51165c73a5"],["archives/2022/05/index.html","6f02d7d67242cab271fc76a2cf27118d"],["archives/2022/06/index.html","76fd5e0db7456fb6963f76d9da48363d"],["archives/2022/07/index.html","2972716d06e683ca7fbdfabf55293c08"],["archives/2022/09/index.html","c489a3f0ab51662c1920f07143b3967b"],["archives/2022/index.html","47a3ad1afccfbf8db72c7f9a3771cdfa"],["archives/2022/page/2/index.html","9af6a8cd10bfaf075bf36e15f07a906a"],["archives/2022/page/3/index.html","3ae3b28d25240fe3d5228622b3a05b10"],["archives/2022/page/4/index.html","d9abf570d0d2eb806fa21669897193c4"],["archives/index.html","1b68289c73e3205f4163146f759a4241"],["archives/page/2/index.html","87aac94594be96f5a7991836ef44f446"],["archives/page/3/index.html","4b73396ce2bd2ba37b8f3bffaf19639d"],["archives/page/4/index.html","7478efa7071e44bbe554937ea71d848b"],["archives/page/5/index.html","404d6bb02a10e1a6e2e558a97a671d2c"],["archives/page/6/index.html","d50129c70b93f49ea79e81a706da3631"],["archives/page/7/index.html","ffff00ccb3e0bb7abf9c79da08ee6651"],["archives/page/8/index.html","1e916313d51a1ac63fb420a2bd42bcff"],["archives/page/9/index.html","b26eeb542879d029ca8b35c7d341b04c"],["categories/C/C/index.html","fc46d55de51e2afd1d6b4f28618137b1"],["categories/C/index.html","4b1d84b081b5e9d24faac8164c6c6878"],["categories/Linux/index.html","68b43f12bf694a9cf82825c60fca2c9b"],["categories/Oracle11g实验/index.html","d50617e020d407f75e493bb25d1a21f5"],["categories/Windows/index.html","59d57a0dd3ec6d4a1d111e5cea999961"],["categories/index.html","efbe09fdc33666a3828c6566e07f615a"],["categories/javaSE/index.html","21e6d9bc34512aa8a81dc9aef4344c03"],["categories/tools/index.html","9194f75d347b6d4ccd2f82a0f36a9de2"],["categories/wxy/index.html","b73a553bd4aa94dcec2be19a6b3b0cf4"],["categories/个人/index.html","13467559adc51847b49428b963798175"],["categories/前端/index.html","8c96fe1f1efbfd6d52780bcac1adcff8"],["categories/工具/index.html","453c0de2968fa0f193a53ce0f6113980"],["categories/数据结构/index.html","df1647b79648d7a68f7f8676ef9f495f"],["categories/笔记/index.html","42e9aa917c1fd7e7a98bf1e7642d0ad6"],["categories/笔记/page/2/index.html","e2019aac01e8d540f4b5189a8cbe7b1f"],["categories/笔记/page/3/index.html","0fab01faa2a55222fb307b92153127e7"],["categories/笔记/page/4/index.html","9c63db6c34ed83ab801a42e11f527687"],["categories/算法/index.html","0dc6cdb3db18bbba689b81446233f173"],["categories/美化/index.html","c8ccaa60997f595fb4e6ce5dfb1e82d9"],["categories/考研/index.html","3327b4eadb5e83eb8f3cf6e34fb1f388"],["categories/计算机网络/index.html","8b21cb5c177ee346f90993629b4e325e"],["categories/计网/index.html","d45a5e47ee28a32929bd6851a71798f8"],["categories/语法/index.html","ad909b26d283762aaf50d2253eb273e3"],["categories/软件/index.html","5b97624b749cf44e32d177288b019db4"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","681b07b43fbb32812e297190f4d06705"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","b150a82b0b25f71fdf3896fc6b88dad0"],["page/2/index.html","0ccbe3c91168c5035660697f8b155351"],["page/3/index.html","f2a791c13af9f422e9090f861e171db9"],["tags/ArchLinux/index.html","db8eff786e9c8bd0a71645e965fe522b"],["tags/Burp-Suite/index.html","5fccc5be6565797f4baf05e1f75f0fdc"],["tags/C-数据结构/index.html","9eb92a52d0664dff8e1a5cc54c5d1179"],["tags/C/index.html","12f8acb6cff2f37fa244ddb223f49652"],["tags/CSS/index.html","1de84a8fcdff26297e41aa7e32de2068"],["tags/Git/index.html","8cf16e2cf0f85adc6f9c3c25fec601b0"],["tags/HTML/index.html","8ef52954ffbc1be2b28660bfca65872c"],["tags/JavaScript/index.html","927c9ab1d0669d319977ae2a7d589341"],["tags/LeetCode/index.html","fae90554b78dd7dcee50c86303108ad3"],["tags/Linux/index.html","5496b927b5206567d545e8aa6db3061a"],["tags/Linux/page/2/index.html","5884dacdbd8edaf71d21a07f41953276"],["tags/Linux/page/3/index.html","25b0cc248c975dc4136699181877c2f6"],["tags/Maven/index.html","74ef627306fc4ec5e0efbe72550c0475"],["tags/MySQL/index.html","a3d0319c6035285a1d5bcf0073445902"],["tags/Oracle/index.html","f79991a692ee787000d324dfc42e82ad"],["tags/Vue/index.html","67abe07dd5966d7e4ca0b6cea9a378e9"],["tags/Windows/index.html","a19e6ad9afa77eb2bb7ca3200e1d4e65"],["tags/Wireshark/index.html","cf1f2a1b95575aeb87cac4c63b524335"],["tags/index.html","fa9c954950b1e1c8a66ae261c5e03fa8"],["tags/java/index.html","ecf837b96c1fff09513f1f75bb1a8237"],["tags/route/index.html","2a012127e400915884018259653ebd4a"],["tags/tree-java/index.html","4c55b1e5d5b78d329ddcb6b7bef56608"],["tags/vim/index.html","ddd700b90c1c667222208a2a9d7a22a9"],["tags/vlan/index.html","32222d9f80b89dd2a876674eeedc4223"],["tags/wxy/index.html","b3453053bdfc0509be5d6450b4ba77cc"],["tags/个人/index.html","d7ddeac6b65956b3da61fa76f0ffc541"],["tags/书籍/index.html","572b367bac3f9e2797774c76a17b0cb6"],["tags/博客/index.html","c0f9b017c86bd70f103dbe7dda3ea63e"],["tags/壁纸/index.html","ce30adaee46daf934852fc9fd182e29e"],["tags/底层/index.html","a60d2c6fd53c4de19e7156527c85e6f8"],["tags/政治/index.html","fced50e0255a6be6b55e8fd0bdfb9794"],["tags/数据结构/index.html","cca4e72cfbb4d7713768a8df6b6a135a"],["tags/文件/index.html","0116141f1eb9f029de95bf28e048044e"],["tags/服务器/index.html","4804e26af20164013609d7ad20b5e88e"],["tags/汇编/index.html","56d4050e18ed882e77f8effe274179ad"],["tags/算法/index.html","7c1346c3612bf7c6fd03774cd0f02101"],["tags/记录/index.html","ce5a53123bfb31bb2c94af085414802b"],["tags/软件/index.html","5085d63e640f64430e4233471431bda4"],["tags/通信/index.html","0780fcb39dcfc67cd29d636c103a1880"],["tags/链表/index.html","a8746bca2d06a68f36452edee24b31d9"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







