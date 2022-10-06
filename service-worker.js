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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","09fd9095e96cc9395d78b0c2a58b20b8"],["1970/01/01/nvim/index.html","ec331cd5fbda05f1632fec353b54ab25"],["2021/02/18/Git学习（个人记录）/index.html","df6563a8d1f352ae92ff4e415ae5afda"],["2021/02/18/Hexo博客搭建记录/index.html","fc2d28a2beeeacc72ab6f7f279a55766"],["2021/02/18/IDE配置/index.html","32c1e8941d780a16fd36413f329edc81"],["2021/02/18/初识汇编/index.html","bb21ae8194107a202aa20910b1fcdd69"],["2021/02/18/链表与指针/index.html","e421ee493010c0c2caf5697678f138aa"],["2021/02/22/Topic LinkedList/index.html","09f770be2621abfc87112af87c0bfec0"],["2021/02/25/一些设置/index.html","e6de1814e7746c1dc34b108b83e068e4"],["2021/02/26/WXY/index.html","bd950ae2a72cbfbe3f7775ae70bdb058"],["2021/02/28/大二下课程推荐-计科/index.html","2a9fe0842ec68360f17335b16f4f0980"],["2021/03/04/Linux-notes/index.html","2077ffd4f7bc4a721e817428793bf8ff"],["2021/03/08/data struct one/index.html","b0995b4d00fe55079443b0b5459fa63f"],["2021/03/17/data struct two/index.html","d7d6c72ca4ed16aad55b77c0b8dcb372"],["2021/03/22/STL/index.html","e6f56e4c49f46e520fb687168b6fe9f3"],["2021/03/27/Battle-of-Tanks/index.html","6b0d7826f41f5604b73fdf229642a394"],["2021/05/01/MySQL/index.html","4f1a8e4c526beddd3a5f2d0ee8130296"],["2021/05/09/HEXO部署服务器/index.html","cfa16fe93a415db570fff937cc725ed6"],["2021/06/04/vim/index.html","17ddc9498e427eea69ca8ed3d8a9d91d"],["2021/07/13/oh-my-zsh/index.html","aea2bb20af6dba847d395cb06539d8cc"],["2021/07/14/HTML/index.html","e608f447dda3fe753bfdfa53be7e6015"],["2021/07/19/Maven/index.html","a9aa49a0fc40efe8bc6a9472f568ad10"],["2021/07/20/随机数（C++)/index.html","df6057c3e55cf6525aab28e23ad080ae"],["2021/07/22/data_struct_01/index.html","55180f833e07eb662019c2bc358bd31c"],["2021/07/22/滑动窗口/index.html","1b6a235bc2bf4ee4bc2467a475832ddc"],["2021/07/26/Tree/index.html","bf047532d8f9c497a6f6d081c8e3fc57"],["2021/08/02/正则表达式/index.html","b4adb41f3e5c26d3c304c8938a8010ec"],["2021/08/14/CSS/index.html","6ea3a4b765715081a2ebddccb468d4f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","fea1b4c6e5fe293a7a10da86e0c14ffa"],["2021/08/19/Windows Terminal 美化/index.html","e8666ed74b52aef31c6286c9c66a7391"],["2021/08/23/EROOR/index.html","c44e8a6651ed6718f45f927acbcdcef8"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","80c0076e5babf6cc9bc77b904a38109a"],["2021/09/07/编译原理/index.html","2fd0d3d8bea0777cf1bdc87fc1e1b7f8"],["2021/09/27/网络是怎样连接的/index.html","a2c5fba9ffa14c1961b9c8a260f6204a"],["2021/09/27/通信基础/index.html","c6ff995f07c16420a23264ec29f44924"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","68901d6ee207a97d54863fcb4cd7f537"],["2021/10/22/vlan配置/index.html","c686828f1ea20902e3d38dd2889902b6"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbcd25cd092ee45fa7c04ddeb823193b"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","f881541c0822b567273875df6937ca0f"],["2021/11/17/硬链接与软链接/index.html","c1d8919f536117399937aab382727676"],["2021/12/01/SQL20题/index.html","d5a1daa75eb4566f2d3dba73ce045cfa"],["2021/12/08/实验五：Wireshark抓包/index.html","e448546b1d332471c89fe0e8b6436b2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","1ae0efce8ec11dd90472916d5cba25c4"],["2021/12/19/CentOS7 安装相关组件/index.html","75bd57a999e40e46234ca9d84d589267"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7067920ff2a902440bcf7e041affaf79"],["2021/12/27/Vue/index.html","43d7a7ec83ffa38e5829a87a0f416590"],["2022/01/08/ArchLinux系统安装/index.html","f1526a4a062205483b0535030add0202"],["2022/01/10/ArchLinux软件安装/index.html","20afcdf3425a02d06df2d02706c685ff"],["2022/01/11/ArchLinux开发环境配置/index.html","d21aac73ed029403c63fc83352669245"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","9b97cab99531a76428e6f11c1c36d831"],["2022/01/22/DWM/index.html","0a316369b3c62b54fd5f2e17e9bb244f"],["2022/01/26/MySQL性能优化/index.html","22b6b3e3457f34073dde7ed5fbd6e9cf"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","fb6840d4f61a88ba34503edc748ac00d"],["2022/02/27/ArchLinux安装wine/index.html","f91bb05843875ce3159d61c40d04d78e"],["2022/03/01/ArchLinux安装VMware/index.html","4931ff7b665cb86a6652ea927b6751d9"],["2022/03/01/ranger/index.html","c3b4a7d2e35aff58167018a9180076cf"],["2022/03/02/ArchLinux PPPoE拨号/index.html","8f81f7a095c209d75240d105be2097c5"],["2022/03/02/C语言复习/index.html","fcab43f7d5f077a860a77a544051087f"],["2022/03/02/Linux修改IP/index.html","86a7c84704deba2898a16123b04d47d5"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e24d22cc7ec4853af84e07dad07763eb"],["2022/03/16/Linux文件和目录管理/index.html","8114a38a53ec1d87e1a7fdf0533ceab4"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","cfbf2890b005d1041a586f2479ef5fe4"],["2022/03/20/Linux用户和权限管理习题/index.html","6e1f70413ff134a2ccd7ab13f1399fb8"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e801036c9671c4cef5e4528fb1a6a0b8"],["2022/04/02/ArchLinux安装MySQL8/index.html","45046d240be48851bec7d4067255e6db"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","033704f10ff690ccce5831f2c7518723"],["2022/04/13/Linux磁盘和文件系统/index.html","08c48a656ea2c7f6f53a8e7434076ced"],["2022/04/13/Linux软件包管理/index.html","c0e2afa76197b7d95b7cf1d235f4d8b2"],["2022/04/18/ArchLinux触摸板/index.html","065b5a5fe88d65e0d1feafa8efedff09"],["2022/04/25/FreaMarket/index.html","47a2d9d3a06559d736df2397206daca4"],["2022/04/27/Linuxn命令练习/index.html","a81d19d3df7cdeeda738662659bfc129"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","21514272d53c7edb6a49841d98090192"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a5cc73ee45a541bc48a47dbee83e179e"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","52ee6e2c389fde44b583dbca3444a17d"],["2022/05/20/Linux进程和服务管理/index.html","ac7d3fdbbec6d1ff8968affb02491285"],["2022/05/21/JavaScript原型/index.html","2c0ed3acae394cb6cbf2e1be5bf017e8"],["2022/05/21/SMB/index.html","3d802c06e07be6a672285d12ebed401c"],["2022/06/10/ArchLinux外接显示器/index.html","684e792dbad45a16699aff5457f69e40"],["2022/06/10/nvm的安装与使用/index.html","a839674bea487335e4b1c4049f5211c3"],["2022/06/18/Git在项目中使用/index.html","1e3d15dc9b38a48d63f68c1f11d821e6"],["2022/07/10/nvim键位/index.html","20ad538b05262b75391c676f687d4873"],["2022/09/28/考研政治知识点总结/index.html","5def812ffc5401ae7889227a092e79e3"],["about/index.html","f9833cb89983bf1f43fd8d886aba97e6"],["archives/1970/01/index.html","0aeb0c7dc8b740984a763a6d5c6c92a6"],["archives/1970/index.html","6d97596f370871564305e57f5055de9d"],["archives/2021/02/index.html","fa31e9ccbabc16d8cf114c9096bcbe34"],["archives/2021/03/index.html","f9f62d24fd2d0c235c189c0760640be8"],["archives/2021/05/index.html","2313dee9d06c93c3d0bc4c6a250c91d5"],["archives/2021/06/index.html","37f4d6f8e187838b7d171551335797ec"],["archives/2021/07/index.html","43bf6f551f0a07468010c1d425dcb39f"],["archives/2021/08/index.html","311b367c2a92517c99d63266355f5c5f"],["archives/2021/09/index.html","72c7275b590af15bae30131ce6c0f761"],["archives/2021/10/index.html","9a1b2c685af69e1b273020f00f3c8d35"],["archives/2021/11/index.html","4010a090777dc0263823a9cb93fa7dbf"],["archives/2021/12/index.html","00ff9a372734f9dcec762a3057bf263d"],["archives/2021/index.html","720fe56cc10a93b0d7049720bd62d4df"],["archives/2021/page/2/index.html","2755b47f708d538ca49f393555a30c7a"],["archives/2021/page/3/index.html","f92900bba1b249b2f7d71325bbc97575"],["archives/2021/page/4/index.html","0f232bb298f6263f1845d86b404b1a31"],["archives/2021/page/5/index.html","cc17cca193e47f75691f05992a172276"],["archives/2022/01/index.html","4cd72a6ec2f88842772f03036d48b8a0"],["archives/2022/02/index.html","0384eb52d8842b774657c40acfb82ac3"],["archives/2022/03/index.html","bae1af0ed3f7c3ef43560527619b2f4b"],["archives/2022/04/index.html","6883c6bdfeb012e1e8126f9c697b07c6"],["archives/2022/05/index.html","491cf0604ff62b8f3f513a5c6ba37327"],["archives/2022/06/index.html","707a5064e86aa8ce085c6077f917fe5d"],["archives/2022/07/index.html","e4f5fce172eb4474a1dc1f6b2610ba77"],["archives/2022/09/index.html","a12a81b8c087beeaf85c85788c405fb5"],["archives/2022/index.html","52423d33ad1f51e0dfd76a971c8c46bb"],["archives/2022/page/2/index.html","fbab63b701093b99ced5e8d10661d099"],["archives/2022/page/3/index.html","b35779c5d2eb3245f4fc6b04ed3caac4"],["archives/2022/page/4/index.html","009a225a5f36ae565c82a366a1ba9e5a"],["archives/index.html","ac578f780785b93116d46a4dcb942294"],["archives/page/2/index.html","54eaf467d048efa90d10b279d7afc1bb"],["archives/page/3/index.html","358f085d429a679eeb1da0150879d513"],["archives/page/4/index.html","e50f755fae8f3667147af79df07554d8"],["archives/page/5/index.html","5ef080947f50c449e354df114e472b05"],["archives/page/6/index.html","09e0eb5524ef3c54ffb1e28ecf7b553f"],["archives/page/7/index.html","691c7bac99f827a90d0a59440a22a892"],["archives/page/8/index.html","794f49015bf2e68a7a4dcd663538fb95"],["archives/page/9/index.html","0c6cb9a8db9838af87239edd3cf765de"],["categories/C/C/index.html","87b23bea1b4e5812c694b0fb2b820858"],["categories/C/index.html","e2bc552ff1ddb35d4f6788ffad24c9c1"],["categories/Linux/index.html","e15422a981ac82f528c858fdc0e8b9bc"],["categories/Oracle11g实验/index.html","a63f388529979ff85bcc9b836e8aa484"],["categories/Windows/index.html","55fb9a6d4f4be587cff6cca41e92edf7"],["categories/index.html","d0f859eb7c4bfb6ecfdb4a5aa50996ff"],["categories/javaSE/index.html","7256356e17d876abb3425b5612a56233"],["categories/tools/index.html","ed7a873241d7258a32073aff23fdd448"],["categories/wxy/index.html","ebdaeb82e93b0d2fda46e3d999e4ac7d"],["categories/个人/index.html","58c987f66463ed69be4b78894231acef"],["categories/前端/index.html","eb778501b561a8bdb85a7f83088bdeaf"],["categories/工具/index.html","326ada2f137fd931d1cd02147d8c9027"],["categories/数据结构/index.html","6a180e113cd570a0a9ec38f1254a989f"],["categories/笔记/index.html","476218e53f21054af67fe0989d11db67"],["categories/笔记/page/2/index.html","5c93cf750732c4f924dc71e6c038f027"],["categories/笔记/page/3/index.html","08b7994e2664b6bc3332fd89ab8af041"],["categories/笔记/page/4/index.html","848c3abc651bc518163221053eced331"],["categories/算法/index.html","c90bf32f3f23bed5052063caad74be15"],["categories/美化/index.html","b97964e8d2b34b0ceba71ad461a2a2e0"],["categories/考研/index.html","960ee36ff38559210049091ace432bbf"],["categories/计算机网络/index.html","7ee99bb326e40292d03539bc33122510"],["categories/计网/index.html","95fe6896dea8ad2c219f3c354a305a60"],["categories/语法/index.html","9a011523353ae2d683dfadc4038075d0"],["categories/软件/index.html","1ee887412581740853216891ae5b53e9"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","98c70d9a17655a8a553f9b30409d707c"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","1f32dccd247a9dd75be9e1a0cb992391"],["page/2/index.html","34acaf80e5eb5c0ace5e4abc19ea3258"],["page/3/index.html","eca8217332d17cde59f102c8e0c87634"],["tags/ArchLinux/index.html","57e9829b5287d70c284888ef20976873"],["tags/Burp-Suite/index.html","bd1a83ae7ba284f05e90174519d6bd30"],["tags/C-数据结构/index.html","68e538786f0e2764f0852cb00640125f"],["tags/C/index.html","beb0714aa060166d8b68eaab74c00dab"],["tags/CSS/index.html","fd05c58f44d348647abe5fed61babb96"],["tags/Git/index.html","0f2bd3277fa4343b3520495ebb7140d0"],["tags/HTML/index.html","57f4b3be47a1f8be92d22f34f32281e4"],["tags/JavaScript/index.html","65a43f9e3555ae4a3ec0be95f1bb29a2"],["tags/LeetCode/index.html","a1cd73d2f529379247bda60ad873f9fe"],["tags/Linux/index.html","f6562cc08066a9604664bfcc78b47535"],["tags/Linux/page/2/index.html","a940545092580d4379ae7bc94f9c86f3"],["tags/Linux/page/3/index.html","2ee7a99b93efaae78b8ce93ede71e4f7"],["tags/Maven/index.html","e6dbe9f0ffbecbcb17f14d6903839409"],["tags/MySQL/index.html","9b7b3706ad9f038c6c298529e9ecdcef"],["tags/Oracle/index.html","acb00e73a060d311eaaece4f5145ff37"],["tags/Vue/index.html","5da8fd867c61eceade4ab98ee85d854b"],["tags/Windows/index.html","131cc6c030db5d79dea0d5ce6b156ded"],["tags/Wireshark/index.html","77a0c2f6dc8a1fc26adc4be99bffefab"],["tags/index.html","860c10f7b69df467573c828a90e2b977"],["tags/java/index.html","13f566136574937917d4e7d80b4811dc"],["tags/route/index.html","11ba03d99c074e261ca629c45565550c"],["tags/tree-java/index.html","ead204ee28897f44e072a79ef6c2c964"],["tags/vim/index.html","77fffab4f3fdf0e375ea90c90f6cd749"],["tags/vlan/index.html","52116864e4dd991c7fa4f23a1e27ef04"],["tags/wxy/index.html","bcfbd70a1e5d9406f18b4b75bb0b391d"],["tags/个人/index.html","3a36122a1bb1d24335f0d928720d7988"],["tags/书籍/index.html","70ffcf575778f7b3edb5e75c3f7d0603"],["tags/博客/index.html","43ad4dca974b6660ab24426408ffc19b"],["tags/壁纸/index.html","2328531adc281ca786c5b84cdf921d27"],["tags/底层/index.html","a2c7a36c6e8988bae203338a168bb644"],["tags/政治/index.html","7f0d8a0d719f4865820090d9c761715c"],["tags/数据结构/index.html","25e1f1f3ca6f01b2d377885388735c17"],["tags/文件/index.html","cc3ae4ffb6a9f3f1ae91a7dcf5d3c5df"],["tags/服务器/index.html","914ecc79f504bbad4b6de8fa87fd6c91"],["tags/汇编/index.html","8a4ff9326c469373623ddb207fee4cf7"],["tags/算法/index.html","a8d433e453609930201fcaa7aef3d635"],["tags/记录/index.html","9c205b6bee8d78bc56524ff7ae887e4e"],["tags/软件/index.html","92ad694b492f91442b0af986284430a7"],["tags/通信/index.html","dc5afbfedafd30da775558c36a2a2b9f"],["tags/链表/index.html","020d5eb4671bcd69e0681b5c4ceb8c98"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







