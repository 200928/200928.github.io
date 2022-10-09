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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","09fd9095e96cc9395d78b0c2a58b20b8"],["1970/01/01/nvim/index.html","ec331cd5fbda05f1632fec353b54ab25"],["2021/02/18/Git学习（个人记录）/index.html","7f56cb89f570a84ce1d7810fa30c0449"],["2021/02/18/Hexo博客搭建记录/index.html","fc2d28a2beeeacc72ab6f7f279a55766"],["2021/02/18/IDE配置/index.html","32c1e8941d780a16fd36413f329edc81"],["2021/02/18/初识汇编/index.html","bb21ae8194107a202aa20910b1fcdd69"],["2021/02/18/链表与指针/index.html","e421ee493010c0c2caf5697678f138aa"],["2021/02/22/Topic LinkedList/index.html","09f770be2621abfc87112af87c0bfec0"],["2021/02/25/一些设置/index.html","e6de1814e7746c1dc34b108b83e068e4"],["2021/02/26/WXY/index.html","bd950ae2a72cbfbe3f7775ae70bdb058"],["2021/02/28/大二下课程推荐-计科/index.html","2a9fe0842ec68360f17335b16f4f0980"],["2021/03/04/Linux-notes/index.html","29a02fe8ecebabcc3c81624bc1d7e2d5"],["2021/03/08/data struct one/index.html","b0995b4d00fe55079443b0b5459fa63f"],["2021/03/17/data struct two/index.html","d7d6c72ca4ed16aad55b77c0b8dcb372"],["2021/03/22/STL/index.html","e6f56e4c49f46e520fb687168b6fe9f3"],["2021/03/27/Battle-of-Tanks/index.html","6b0d7826f41f5604b73fdf229642a394"],["2021/05/01/MySQL/index.html","4f1a8e4c526beddd3a5f2d0ee8130296"],["2021/05/09/HEXO部署服务器/index.html","cfa16fe93a415db570fff937cc725ed6"],["2021/06/04/vim/index.html","17ddc9498e427eea69ca8ed3d8a9d91d"],["2021/07/13/oh-my-zsh/index.html","7395a82253394a38abf5be585b7ce416"],["2021/07/14/HTML/index.html","e608f447dda3fe753bfdfa53be7e6015"],["2021/07/19/Maven/index.html","a9aa49a0fc40efe8bc6a9472f568ad10"],["2021/07/20/随机数（C++)/index.html","df6057c3e55cf6525aab28e23ad080ae"],["2021/07/22/data_struct_01/index.html","55180f833e07eb662019c2bc358bd31c"],["2021/07/22/滑动窗口/index.html","1b6a235bc2bf4ee4bc2467a475832ddc"],["2021/07/26/Tree/index.html","bf047532d8f9c497a6f6d081c8e3fc57"],["2021/08/02/正则表达式/index.html","b4adb41f3e5c26d3c304c8938a8010ec"],["2021/08/14/CSS/index.html","6ea3a4b765715081a2ebddccb468d4f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","fea1b4c6e5fe293a7a10da86e0c14ffa"],["2021/08/19/Windows Terminal 美化/index.html","e8666ed74b52aef31c6286c9c66a7391"],["2021/08/23/EROOR/index.html","c44e8a6651ed6718f45f927acbcdcef8"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","80c0076e5babf6cc9bc77b904a38109a"],["2021/09/07/编译原理/index.html","2fd0d3d8bea0777cf1bdc87fc1e1b7f8"],["2021/09/27/网络是怎样连接的/index.html","a2c5fba9ffa14c1961b9c8a260f6204a"],["2021/09/27/通信基础/index.html","c6ff995f07c16420a23264ec29f44924"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","68901d6ee207a97d54863fcb4cd7f537"],["2021/10/22/vlan配置/index.html","c686828f1ea20902e3d38dd2889902b6"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbcd25cd092ee45fa7c04ddeb823193b"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","f881541c0822b567273875df6937ca0f"],["2021/11/17/硬链接与软链接/index.html","c1d8919f536117399937aab382727676"],["2021/12/01/SQL20题/index.html","d5a1daa75eb4566f2d3dba73ce045cfa"],["2021/12/08/实验五：Wireshark抓包/index.html","e448546b1d332471c89fe0e8b6436b2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","679345f12d7b8e4c3a2341184c554aa4"],["2021/12/19/CentOS7 安装相关组件/index.html","75d14b52632f65033b853350b7a96e31"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7067920ff2a902440bcf7e041affaf79"],["2021/12/27/Vue/index.html","43d7a7ec83ffa38e5829a87a0f416590"],["2022/01/08/ArchLinux系统安装/index.html","060bb6564268c92608a2b68cd07232a7"],["2022/01/10/ArchLinux软件安装/index.html","f358a476000c49a3f9d68c87db4b866c"],["2022/01/11/ArchLinux开发环境配置/index.html","cf77a24d0b5c199c04c61cfc8910cb68"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a04f753cd030a06c58e49175a36dae49"],["2022/01/22/DWM/index.html","de4678e34f1956f9b8350c932fc563ef"],["2022/01/26/MySQL性能优化/index.html","22b6b3e3457f34073dde7ed5fbd6e9cf"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","fb6840d4f61a88ba34503edc748ac00d"],["2022/02/27/ArchLinux安装wine/index.html","400bf72362b8ffb341d23eb6899a17b0"],["2022/03/01/ArchLinux安装VMware/index.html","c9a1cfb8feb56ed74309a5cbd61913d4"],["2022/03/01/ranger/index.html","2cc69c070fab7eb6411953d457cdc76f"],["2022/03/02/ArchLinux PPPoE拨号/index.html","3822d6742c2c40661128d757b0063707"],["2022/03/02/C语言复习/index.html","fcab43f7d5f077a860a77a544051087f"],["2022/03/02/Linux修改IP/index.html","a3438c67b1e969ecfd263159388d40a0"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e24d22cc7ec4853af84e07dad07763eb"],["2022/03/16/Linux文件和目录管理/index.html","313aeb46a26935657075bb0566d08f23"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","cfbf2890b005d1041a586f2479ef5fe4"],["2022/03/20/Linux用户和权限管理习题/index.html","4fe28b5ae134157d9f8366dad28f2bd0"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e801036c9671c4cef5e4528fb1a6a0b8"],["2022/04/02/ArchLinux安装MySQL8/index.html","d957c6d2d13464c024f5668c7c62cf48"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","033704f10ff690ccce5831f2c7518723"],["2022/04/13/Linux磁盘和文件系统/index.html","cf0a08172e37ad27b256fd8c4f229a89"],["2022/04/13/Linux软件包管理/index.html","fab10fc8e5bbad184d759c741bb1b1ee"],["2022/04/18/ArchLinux触摸板/index.html","d4d812fb0d0c09b7d92e3f14b7b221a9"],["2022/04/25/FreaMarket/index.html","47a2d9d3a06559d736df2397206daca4"],["2022/04/27/Linuxn命令练习/index.html","d3a3553bc75659f2084e2992518a7995"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","21514272d53c7edb6a49841d98090192"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a5cc73ee45a541bc48a47dbee83e179e"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","3404676eb3dfcc65926c3d675006ab70"],["2022/05/20/Linux进程和服务管理/index.html","81336efd97b6c7a836203521d9cb629f"],["2022/05/21/JavaScript原型/index.html","2c0ed3acae394cb6cbf2e1be5bf017e8"],["2022/05/21/SMB/index.html","3d802c06e07be6a672285d12ebed401c"],["2022/06/10/ArchLinux外接显示器/index.html","038850019ed713011b70627cd4e5e798"],["2022/06/10/nvm的安装与使用/index.html","5772283ccb22cf45fc47e9413cb4f375"],["2022/06/18/Git在项目中使用/index.html","1e3d15dc9b38a48d63f68c1f11d821e6"],["2022/07/10/nvim键位/index.html","580770e09b75340e80ce1575745d92cc"],["2022/09/28/考研政治知识点总结/index.html","6b22a94f7a10bf7cab47a85917146f25"],["about/index.html","bfb76152e2c2bd79e9880668a3b464e8"],["archives/1970/01/index.html","d7d6c91ebd5b87f64594a0a641cc12bd"],["archives/1970/index.html","20527cf0a31ef72d78db8664e3fed02f"],["archives/2021/02/index.html","63f65bfc4511e37c199bb7cdeecb0897"],["archives/2021/03/index.html","52c561a4eff486723cfb99d483eea036"],["archives/2021/05/index.html","5d6e6179c254c2ecd7825c4b2a3ca4b7"],["archives/2021/06/index.html","4bc43066b00ba743bfd649287a453c35"],["archives/2021/07/index.html","6d2ca7b3fcb21542bc26166f0b815a86"],["archives/2021/08/index.html","75cc5c2c87e7cc45faf78306a8b9de05"],["archives/2021/09/index.html","b7c7b7ba1b51a6cbcbbce2f22746e6bc"],["archives/2021/10/index.html","7cbcf6360145ae45b09c0bbcbab216bb"],["archives/2021/11/index.html","a9497dbb334634e7f22bbcdc192f598b"],["archives/2021/12/index.html","c930f5f1811d1472320e1c52e8f2ef7a"],["archives/2021/index.html","3fd559f458fdfeab47b44ed64b890a52"],["archives/2021/page/2/index.html","bceb0ffaeb19ff5e3d80fbb4416accbc"],["archives/2021/page/3/index.html","d9eee0c9a9b4af10f58b93f4590950aa"],["archives/2021/page/4/index.html","72e02c91a994e614ad0ff0f0d64621af"],["archives/2021/page/5/index.html","a6e76fa7db9b842f053e9c55f6da6df6"],["archives/2022/01/index.html","1f7ee7b44ae10e1c889295c799df9881"],["archives/2022/02/index.html","3abd8026d0b952df56a65db47e64e164"],["archives/2022/03/index.html","0b1f1a750b02ad0a99c3571c813d6ca8"],["archives/2022/04/index.html","ce061755e89b383e2ae2bdc3e84e7e8b"],["archives/2022/05/index.html","f469abbeed7b2a5656354022816b417e"],["archives/2022/06/index.html","707e4fe296eb60629343533611476db2"],["archives/2022/07/index.html","e012635cae5b56d70838b823395437fc"],["archives/2022/09/index.html","ec077402cf1ac29ab32a5bd53a93c322"],["archives/2022/index.html","5ca64a736cd72557a97310308c68c5d8"],["archives/2022/page/2/index.html","58abdc84143de5248d272b82fa6cf9db"],["archives/2022/page/3/index.html","f9a6c7c6a7d7af99bb6443d83aa8aa82"],["archives/2022/page/4/index.html","dce000efd1a7b3a03f216f65a2583499"],["archives/index.html","26de111cd1a5e50bb9266d84f91e0ef7"],["archives/page/2/index.html","0f80d751b118536b124cc97a049fa871"],["archives/page/3/index.html","54368548510a5008348d6c53c9a1d678"],["archives/page/4/index.html","7320a60f2b8bc3f321aff30fc4d0917c"],["archives/page/5/index.html","1bc33cf810e766ce4585097988d3c883"],["archives/page/6/index.html","65f44cb13265e3bb4db62ea1d432f567"],["archives/page/7/index.html","4224985058414c70066e9de23dc667dc"],["archives/page/8/index.html","ae5bf788794f7c0a5e4ec25b1d9361e4"],["archives/page/9/index.html","1acc59ddd5e6df5de0d14251bbffad45"],["categories/C/C/index.html","fbf4bc7a2412103303ec40e9148c4005"],["categories/C/index.html","4ca269669e77852db98380a1547ef21e"],["categories/Linux/index.html","7e13daf02bb1877fc77c59c82fcfcf9a"],["categories/Oracle11g实验/index.html","8d1e40cd0a604196378beb4172f6e756"],["categories/Windows/index.html","8365bf87ecfa6653ee95387fcb1933a1"],["categories/index.html","448566826a50848c32920142c1aae75f"],["categories/javaSE/index.html","411c43a2746a979011726b71ebfbed04"],["categories/tools/index.html","7c6db126592d89f5281b69716914b0da"],["categories/wxy/index.html","914fa1d3d7e7bff9631c1734024615b9"],["categories/个人/index.html","df1dbecc7863934641835f7d94871b80"],["categories/前端/index.html","28734aa45c7781dda2ee1328f8a1b315"],["categories/工具/index.html","c2f29616b826adf848ddd09544e06810"],["categories/数据结构/index.html","3c283640ded6efde0b9fea44d02e3070"],["categories/笔记/index.html","5b83cb91a563f7947c4e7e27e0da29a3"],["categories/笔记/page/2/index.html","b0d6bfba5892aba668b43cb8f221aba1"],["categories/笔记/page/3/index.html","318b8d6661f28939a902cb3b186bd856"],["categories/笔记/page/4/index.html","44073be934057eb85eaf3acfd1fe7c10"],["categories/算法/index.html","c543a273abb9fd900596257cadac5edd"],["categories/美化/index.html","6bf458e3df8518cf825e26d657ce5e2c"],["categories/考研/index.html","bbcc1b776be55f19f8f01a8691c79ba5"],["categories/计算机网络/index.html","1d4ed786cc032a98fc416275da07f43b"],["categories/计网/index.html","951191916a57e29de9118eadc34c29e9"],["categories/语法/index.html","a152116b8cc3c2cdd54564e1e9eb99b7"],["categories/软件/index.html","0c2e6e9f54a6cce2e08a23fcd9b57864"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","4c42c6dbff47cb4336575653ad40f1af"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","ca58e5d426bbc644d7cc98d3dee015bf"],["page/2/index.html","96372d38534326e5fc0406684fd3e30d"],["page/3/index.html","41090b230ed71307e3725f75c1fc6b1f"],["tags/ArchLinux/index.html","b51f940de64e35961aab354c281f2b6f"],["tags/Burp-Suite/index.html","4a76716063cfb9d93e92e241804ec7a1"],["tags/C-数据结构/index.html","0bc7af7c9fb48f778c9c4c6cd44b8a87"],["tags/C/index.html","177930789fbff8551ac1b5b902665771"],["tags/CSS/index.html","e87efd6ef661e0dd90c091293c0092ac"],["tags/Git/index.html","86db2d6dd4e7836df6cae09103915208"],["tags/HTML/index.html","bfb04ebdc183803fe0ec76606a396b00"],["tags/JavaScript/index.html","db766306e62962abed8531b43bb01dda"],["tags/LeetCode/index.html","c9a5090b9977e60e7327a970e255bf78"],["tags/Linux/index.html","0457e3302d5c80bea0a41290bcf1cf2f"],["tags/Linux/page/2/index.html","6230cc634478d4aaac7887fe28c35fc5"],["tags/Linux/page/3/index.html","5c1d786ea0ce364c5305d2ec91d7b34a"],["tags/Maven/index.html","e07e58d263dd0c27f6b31e44d0e752ac"],["tags/MySQL/index.html","8eb1a18107e3cfe15e689e312dcb7bd4"],["tags/Oracle/index.html","4c0efab1b065895c6ae5521c2939aacf"],["tags/Vue/index.html","215ea9910f7da8e62714102bcca6bdc8"],["tags/Windows/index.html","e174754e8e9ad66a78185da680fd7ba7"],["tags/Wireshark/index.html","823a29dea50db69fed323076e9477bdb"],["tags/index.html","17e66d69a8d6a4e83e7a1bb4b93ffd86"],["tags/java/index.html","ee4e773736ff5706343beac88c162572"],["tags/route/index.html","33282a0dc716ff3a5119461e7e7aead7"],["tags/tree-java/index.html","57e9f2366822690aa3569d06484d4ac6"],["tags/vim/index.html","499aa1dee5e108f2472dfd7307eca6f0"],["tags/vlan/index.html","4d6d057c0eb222609759c1e8a41e1521"],["tags/wxy/index.html","76ec7ed77d2644122955f0c70a087158"],["tags/个人/index.html","12e6cf34b5986c4376587812081d6b22"],["tags/书籍/index.html","59d904fa6fc2f3ffac19679e05cb2d8e"],["tags/博客/index.html","eb4ae5059728894721169081e9e13161"],["tags/壁纸/index.html","cd56f35ee2598deca843d4e94d9eb417"],["tags/底层/index.html","85b82a401f1f8f41a90a5f123672b621"],["tags/政治/index.html","6bd6fc49a49c4793513dad17e7a3a972"],["tags/数据结构/index.html","3034084d0552ef7c481a680d130c755a"],["tags/文件/index.html","a956c5d4bc010f1768d82c59c1878051"],["tags/服务器/index.html","7e318972a40e0b621999436c982d7a14"],["tags/汇编/index.html","7c1a71a8882333e85617aa5a77377741"],["tags/算法/index.html","63b29e78e33fa425f8872c1c739e6c22"],["tags/记录/index.html","f4e668091dc11d47779f419bd8b516d5"],["tags/软件/index.html","cef2a8daa68e757266b3a1c468c22ed9"],["tags/通信/index.html","3434bea72b3aa53f2512a4b3099f35b9"],["tags/链表/index.html","9b014de7a18a8a59b460e6a0e22520cb"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







