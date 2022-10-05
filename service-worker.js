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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","09fd9095e96cc9395d78b0c2a58b20b8"],["1970/01/01/nvim/index.html","ec331cd5fbda05f1632fec353b54ab25"],["2021/02/18/Git学习（个人记录）/index.html","d1a062d0bf1096b1e017d357421c7c07"],["2021/02/18/Hexo博客搭建记录/index.html","fc2d28a2beeeacc72ab6f7f279a55766"],["2021/02/18/IDE配置/index.html","32c1e8941d780a16fd36413f329edc81"],["2021/02/18/初识汇编/index.html","bb21ae8194107a202aa20910b1fcdd69"],["2021/02/18/链表与指针/index.html","e421ee493010c0c2caf5697678f138aa"],["2021/02/22/Topic LinkedList/index.html","09f770be2621abfc87112af87c0bfec0"],["2021/02/25/一些设置/index.html","e6de1814e7746c1dc34b108b83e068e4"],["2021/02/26/WXY/index.html","bd950ae2a72cbfbe3f7775ae70bdb058"],["2021/02/28/大二下课程推荐-计科/index.html","2a9fe0842ec68360f17335b16f4f0980"],["2021/03/04/Linux-notes/index.html","29a02fe8ecebabcc3c81624bc1d7e2d5"],["2021/03/08/data struct one/index.html","b0995b4d00fe55079443b0b5459fa63f"],["2021/03/17/data struct two/index.html","d7d6c72ca4ed16aad55b77c0b8dcb372"],["2021/03/22/STL/index.html","e6f56e4c49f46e520fb687168b6fe9f3"],["2021/03/27/Battle-of-Tanks/index.html","6b0d7826f41f5604b73fdf229642a394"],["2021/05/01/MySQL/index.html","4f1a8e4c526beddd3a5f2d0ee8130296"],["2021/05/09/HEXO部署服务器/index.html","cfa16fe93a415db570fff937cc725ed6"],["2021/06/04/vim/index.html","17ddc9498e427eea69ca8ed3d8a9d91d"],["2021/07/13/oh-my-zsh/index.html","7395a82253394a38abf5be585b7ce416"],["2021/07/14/HTML/index.html","e608f447dda3fe753bfdfa53be7e6015"],["2021/07/19/Maven/index.html","a9aa49a0fc40efe8bc6a9472f568ad10"],["2021/07/20/随机数（C++)/index.html","df6057c3e55cf6525aab28e23ad080ae"],["2021/07/22/data_struct_01/index.html","55180f833e07eb662019c2bc358bd31c"],["2021/07/22/滑动窗口/index.html","1b6a235bc2bf4ee4bc2467a475832ddc"],["2021/07/26/Tree/index.html","bf047532d8f9c497a6f6d081c8e3fc57"],["2021/08/02/正则表达式/index.html","b4adb41f3e5c26d3c304c8938a8010ec"],["2021/08/14/CSS/index.html","6ea3a4b765715081a2ebddccb468d4f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","fea1b4c6e5fe293a7a10da86e0c14ffa"],["2021/08/19/Windows Terminal 美化/index.html","e8666ed74b52aef31c6286c9c66a7391"],["2021/08/23/EROOR/index.html","c44e8a6651ed6718f45f927acbcdcef8"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","80c0076e5babf6cc9bc77b904a38109a"],["2021/09/07/编译原理/index.html","2fd0d3d8bea0777cf1bdc87fc1e1b7f8"],["2021/09/27/网络是怎样连接的/index.html","a2c5fba9ffa14c1961b9c8a260f6204a"],["2021/09/27/通信基础/index.html","c6ff995f07c16420a23264ec29f44924"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","68901d6ee207a97d54863fcb4cd7f537"],["2021/10/22/vlan配置/index.html","c686828f1ea20902e3d38dd2889902b6"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbcd25cd092ee45fa7c04ddeb823193b"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","f881541c0822b567273875df6937ca0f"],["2021/11/17/硬链接与软链接/index.html","c1d8919f536117399937aab382727676"],["2021/12/01/SQL20题/index.html","d5a1daa75eb4566f2d3dba73ce045cfa"],["2021/12/08/实验五：Wireshark抓包/index.html","e448546b1d332471c89fe0e8b6436b2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","679345f12d7b8e4c3a2341184c554aa4"],["2021/12/19/CentOS7 安装相关组件/index.html","75d14b52632f65033b853350b7a96e31"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7067920ff2a902440bcf7e041affaf79"],["2021/12/27/Vue/index.html","43d7a7ec83ffa38e5829a87a0f416590"],["2022/01/08/ArchLinux系统安装/index.html","060bb6564268c92608a2b68cd07232a7"],["2022/01/10/ArchLinux软件安装/index.html","f358a476000c49a3f9d68c87db4b866c"],["2022/01/11/ArchLinux开发环境配置/index.html","cf77a24d0b5c199c04c61cfc8910cb68"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","a04f753cd030a06c58e49175a36dae49"],["2022/01/22/DWM/index.html","de4678e34f1956f9b8350c932fc563ef"],["2022/01/26/MySQL性能优化/index.html","22b6b3e3457f34073dde7ed5fbd6e9cf"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","fb6840d4f61a88ba34503edc748ac00d"],["2022/02/27/ArchLinux安装wine/index.html","400bf72362b8ffb341d23eb6899a17b0"],["2022/03/01/ArchLinux安装VMware/index.html","c9a1cfb8feb56ed74309a5cbd61913d4"],["2022/03/01/ranger/index.html","2cc69c070fab7eb6411953d457cdc76f"],["2022/03/02/ArchLinux PPPoE拨号/index.html","3822d6742c2c40661128d757b0063707"],["2022/03/02/C语言复习/index.html","fcab43f7d5f077a860a77a544051087f"],["2022/03/02/Linux修改IP/index.html","a3438c67b1e969ecfd263159388d40a0"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e24d22cc7ec4853af84e07dad07763eb"],["2022/03/16/Linux文件和目录管理/index.html","313aeb46a26935657075bb0566d08f23"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","cfbf2890b005d1041a586f2479ef5fe4"],["2022/03/20/Linux用户和权限管理习题/index.html","4fe28b5ae134157d9f8366dad28f2bd0"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e801036c9671c4cef5e4528fb1a6a0b8"],["2022/04/02/ArchLinux安装MySQL8/index.html","d957c6d2d13464c024f5668c7c62cf48"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","033704f10ff690ccce5831f2c7518723"],["2022/04/13/Linux磁盘和文件系统/index.html","cf0a08172e37ad27b256fd8c4f229a89"],["2022/04/13/Linux软件包管理/index.html","fab10fc8e5bbad184d759c741bb1b1ee"],["2022/04/18/ArchLinux触摸板/index.html","d4d812fb0d0c09b7d92e3f14b7b221a9"],["2022/04/25/FreaMarket/index.html","47a2d9d3a06559d736df2397206daca4"],["2022/04/27/Linuxn命令练习/index.html","d3a3553bc75659f2084e2992518a7995"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","21514272d53c7edb6a49841d98090192"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a5cc73ee45a541bc48a47dbee83e179e"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","3404676eb3dfcc65926c3d675006ab70"],["2022/05/20/Linux进程和服务管理/index.html","81336efd97b6c7a836203521d9cb629f"],["2022/05/21/JavaScript原型/index.html","2c0ed3acae394cb6cbf2e1be5bf017e8"],["2022/05/21/SMB/index.html","3d802c06e07be6a672285d12ebed401c"],["2022/06/10/ArchLinux外接显示器/index.html","038850019ed713011b70627cd4e5e798"],["2022/06/10/nvm的安装与使用/index.html","5772283ccb22cf45fc47e9413cb4f375"],["2022/06/18/Git在项目中使用/index.html","1e3d15dc9b38a48d63f68c1f11d821e6"],["2022/07/10/nvim键位/index.html","580770e09b75340e80ce1575745d92cc"],["2022/09/28/考研政治知识点总结/index.html","b54f791da48e705cc003be0e1a21dbda"],["about/index.html","42896105590c68793fb9eaa4042096cf"],["archives/1970/01/index.html","bbdad3c2761c8a2849b914a81f4fb712"],["archives/1970/index.html","ff8d3d9c40ee51aac88e05884181d5ea"],["archives/2021/02/index.html","ec9cbfac65623c7c310d4cc837786b31"],["archives/2021/03/index.html","f2780c39a4c7187261a5afd3a7029d02"],["archives/2021/05/index.html","951a758e97d2d72afc3f63e4a65e5da9"],["archives/2021/06/index.html","95232efae8a246cbfafdf05976256dc9"],["archives/2021/07/index.html","99d363f272b8d4cd35ca863668855dff"],["archives/2021/08/index.html","0d768c7841c9a015fb6746734cb7af22"],["archives/2021/09/index.html","e9a433d3a5ddb74f9ba3082dfd4b2088"],["archives/2021/10/index.html","378d55d2c77e290c170d667865c3424e"],["archives/2021/11/index.html","a397a605d2ee2ed2c088ba6c8fbe7784"],["archives/2021/12/index.html","11456b899e70a6d8f224b587e89a5fea"],["archives/2021/index.html","d7ba7a0ded60b2820bc2658049633796"],["archives/2021/page/2/index.html","69c9ebb57f01a7ca0ad53d422c6463bf"],["archives/2021/page/3/index.html","417a9d40cb78d117fd3b9f504c3efa53"],["archives/2021/page/4/index.html","e5e4e1d0768b91503f371c027da5c83e"],["archives/2021/page/5/index.html","023790d083c61bdbf05e425c7bd21ee7"],["archives/2022/01/index.html","159ef8c0369e444e375827bd0e08df51"],["archives/2022/02/index.html","8522021988da9d7d307fa6cd1be56575"],["archives/2022/03/index.html","8c1d7a6af83de6961aab05e2e8ca8114"],["archives/2022/04/index.html","b3fd61fb61c7a8bb0d62758ad704f958"],["archives/2022/05/index.html","3193394a0394e8219afb3bc99014d248"],["archives/2022/06/index.html","e21545c7afa11bd8d8e126da993ed381"],["archives/2022/07/index.html","b40a89273e089f3e7531c45c507a79e7"],["archives/2022/09/index.html","098c63be19afcb1342c622aada0112c8"],["archives/2022/index.html","5c3432f5f33457759280b392e2a49218"],["archives/2022/page/2/index.html","72f354d3a40696924d0837809aca7ad8"],["archives/2022/page/3/index.html","8691fa122da1bd72528b74e7a79706f5"],["archives/2022/page/4/index.html","d3e023664b31bd8b0dfc3bee5449a1ca"],["archives/index.html","ee084010d88f099d081258de9b1c208d"],["archives/page/2/index.html","05638d479daf5c983747cbabeccdcfe2"],["archives/page/3/index.html","b163ed5feac68d843d87eb215e422e86"],["archives/page/4/index.html","2d6e4595c54acd68bd6314440c797810"],["archives/page/5/index.html","2944a573b4c23b3367c6521e5ae2cd45"],["archives/page/6/index.html","cdb43a5e577270da38995df5e39f3495"],["archives/page/7/index.html","853fcef407f036944cae07af285f4a06"],["archives/page/8/index.html","ef74dcd873be8953f3660f0d0504cc27"],["archives/page/9/index.html","9bb847b329b037438f6d74123c4f2f24"],["categories/C/C/index.html","690a08e92cab197d536581c82c56c255"],["categories/C/index.html","c8e2c8fc53e556bf2cc21f990f1c14f2"],["categories/Linux/index.html","2dcf7c2876c5c534a78f641078e55140"],["categories/Oracle11g实验/index.html","5ecf937f9b304b6a6c03c838b668b0a9"],["categories/Windows/index.html","7226f6b0a50b2cf1b99b39c8da03d6df"],["categories/index.html","ce7fadbdff358b851122ad1b7072dc17"],["categories/javaSE/index.html","0a490eae9e1bc7bd178bec487a378313"],["categories/tools/index.html","e0da5a741b9fa1c7b406daab0dca6810"],["categories/wxy/index.html","4c72a3163b3a81fb9abd4eacfe883a46"],["categories/个人/index.html","620ef6a1d02275d4ca4f85f60e346357"],["categories/前端/index.html","ff6d4bd799f505000928d44ab369a185"],["categories/工具/index.html","d868007ec27ba2e9da679a1a97b40899"],["categories/数据结构/index.html","5ce11b96b1193a2f943d6071095aa223"],["categories/笔记/index.html","a8cb907d2d35e3b2983dcba57939b86b"],["categories/笔记/page/2/index.html","25ca3af0cb8d1de48998c1255b09db76"],["categories/笔记/page/3/index.html","3e78194145ee94ec7aa9f00d84a48442"],["categories/笔记/page/4/index.html","399de018dc6de945506741adca4ad37e"],["categories/算法/index.html","2d450999fc22d3b97f6e844520c1db1a"],["categories/美化/index.html","3a8171c07142cae110a3f06a4a928994"],["categories/考研/index.html","0d0ad272936489bfd202e4cf7c6c7a43"],["categories/计算机网络/index.html","1fa063ab30e18a9f819ec888aacf940b"],["categories/计网/index.html","4e97ab41ee7254581da5e036d08c048b"],["categories/语法/index.html","23d318d2e14a666f560eb804e92a2a62"],["categories/软件/index.html","fcb0b8eee0335ad2ffb9d5824c094dc4"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","87aac6cacba6b3adfa569d7f465b7308"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","07dd2dee7a59a309d46b146942ba8ed3"],["page/2/index.html","0851fb23b2a85c3222df09231f59c04f"],["page/3/index.html","0e8ac8894234f80aa3f14c6555e4898a"],["tags/ArchLinux/index.html","f9c8e4f8cd963e366d5840b20ceea6a9"],["tags/Burp-Suite/index.html","d3625321216401c6726549066c9fa330"],["tags/C-数据结构/index.html","393fec0b0f86aadc0160cdadaf020140"],["tags/C/index.html","c40f9286bd5263b51fe75b8981ffee49"],["tags/CSS/index.html","43444742cc0c8c0b4d4b3cd7146a7c5a"],["tags/Git/index.html","863738b063a8c047e06c246ca59f8cc9"],["tags/HTML/index.html","d4099f6ea1bb02417e299c14faae7f31"],["tags/JavaScript/index.html","96d2eee786e9b94447c99e6bdf85c038"],["tags/LeetCode/index.html","263c3ff47ca1143f9798f2a851814c48"],["tags/Linux/index.html","4243f9640e0209aa043d4d8864e531b2"],["tags/Linux/page/2/index.html","78da42d8a45860d1d6597af2a70e843a"],["tags/Linux/page/3/index.html","a65528f5ca38cb8942767da7caa2a3c0"],["tags/Maven/index.html","61d909291ebcb565c4e83bc41801e271"],["tags/MySQL/index.html","4787f80e8546d93d0af06a158f9be5a6"],["tags/Oracle/index.html","e33d5f9cb13fbc7bdb4fa594bab08067"],["tags/Vue/index.html","8691c1e45cbcf0b9e09d7bd5382d1173"],["tags/Windows/index.html","8870597962e8adcb056c88b8ef88aa48"],["tags/Wireshark/index.html","0cbfb2774163ef1cc91a5928988d64d3"],["tags/index.html","4bc94fcf490de9a052131017a3e083c5"],["tags/java/index.html","4b9048913a940b2cad6fea317c72e171"],["tags/route/index.html","9cd79fe00109e9b7c2e5daf8638d5d0e"],["tags/tree-java/index.html","48f274c81c0f0805063b28fb6af8112a"],["tags/vim/index.html","8efef58fa156b39fa60e586270aa9953"],["tags/vlan/index.html","ff1f6d03e5ea5a3a0361c860d80dbcab"],["tags/wxy/index.html","0a7b4ece497fd1bacc5074b79ffed98c"],["tags/个人/index.html","f91cf83aaab39000343dd9c4f966a8e2"],["tags/书籍/index.html","b800192bdd402ec4723ad16e2cccddc8"],["tags/博客/index.html","205feeb59bb0e4d3e02ac47954d3766c"],["tags/壁纸/index.html","0ebf6bf3371a477331785c11434fc926"],["tags/底层/index.html","6503e52d7d10c2e611ead222c176f63e"],["tags/政治/index.html","86041c09a86c07a520dc75108e70cba9"],["tags/数据结构/index.html","faace53ebed3cdad4d4ce8ddb5c2bfeb"],["tags/文件/index.html","a9e069738735cd5941834e153ea4918e"],["tags/服务器/index.html","0939014636dd87f979f5dda483642119"],["tags/汇编/index.html","472295f60726cbcf9eb55e6759b8e92d"],["tags/算法/index.html","3b2ab71d58366b018df2f6d8ef260442"],["tags/记录/index.html","7df0e8b601feeab8474489a8924c8b70"],["tags/软件/index.html","a95595bfa2534a8dbe68f11c7f0a7dd7"],["tags/通信/index.html","b5b4d33393441ee5645c33670516cd5a"],["tags/链表/index.html","0b413c39ce8b7fe8dee99ecd6c499537"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







