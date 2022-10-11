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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","09fd9095e96cc9395d78b0c2a58b20b8"],["1970/01/01/nvim/index.html","ec331cd5fbda05f1632fec353b54ab25"],["2021/02/18/Git学习（个人记录）/index.html","64e51618b81826f6dc4339b0bca64a6b"],["2021/02/18/Hexo博客搭建记录/index.html","6bab6b41d561ca1c52b0e4a8144fa19d"],["2021/02/18/IDE配置/index.html","e6f11e8bb70eabee38321daa65053321"],["2021/02/18/初识汇编/index.html","bb21ae8194107a202aa20910b1fcdd69"],["2021/02/18/链表与指针/index.html","e421ee493010c0c2caf5697678f138aa"],["2021/02/22/Topic LinkedList/index.html","09f770be2621abfc87112af87c0bfec0"],["2021/02/25/一些设置/index.html","e2699f6efe2837dde2e3b62fec549c9b"],["2021/02/26/WXY/index.html","bd950ae2a72cbfbe3f7775ae70bdb058"],["2021/02/28/大二下课程推荐-计科/index.html","2a9fe0842ec68360f17335b16f4f0980"],["2021/03/04/Linux-notes/index.html","1148878043fe0dafec7536179e5d2a5d"],["2021/03/08/data struct one/index.html","b0995b4d00fe55079443b0b5459fa63f"],["2021/03/17/data struct two/index.html","d7d6c72ca4ed16aad55b77c0b8dcb372"],["2021/03/22/STL/index.html","e6f56e4c49f46e520fb687168b6fe9f3"],["2021/03/27/Battle-of-Tanks/index.html","6b0d7826f41f5604b73fdf229642a394"],["2021/05/01/MySQL/index.html","4f1a8e4c526beddd3a5f2d0ee8130296"],["2021/05/09/HEXO部署服务器/index.html","46627b12480005a221e2e8e3f4171083"],["2021/06/04/vim/index.html","17ddc9498e427eea69ca8ed3d8a9d91d"],["2021/07/13/oh-my-zsh/index.html","a22951562338bd26f06d35b767f159c0"],["2021/07/14/HTML/index.html","e608f447dda3fe753bfdfa53be7e6015"],["2021/07/19/Maven/index.html","a9aa49a0fc40efe8bc6a9472f568ad10"],["2021/07/20/随机数（C++)/index.html","df6057c3e55cf6525aab28e23ad080ae"],["2021/07/22/data_struct_01/index.html","55180f833e07eb662019c2bc358bd31c"],["2021/07/22/滑动窗口/index.html","1b6a235bc2bf4ee4bc2467a475832ddc"],["2021/07/26/Tree/index.html","bf047532d8f9c497a6f6d081c8e3fc57"],["2021/08/02/正则表达式/index.html","b4adb41f3e5c26d3c304c8938a8010ec"],["2021/08/14/CSS/index.html","6ea3a4b765715081a2ebddccb468d4f1"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","fea1b4c6e5fe293a7a10da86e0c14ffa"],["2021/08/19/Windows Terminal 美化/index.html","e8666ed74b52aef31c6286c9c66a7391"],["2021/08/23/EROOR/index.html","c44e8a6651ed6718f45f927acbcdcef8"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","80c0076e5babf6cc9bc77b904a38109a"],["2021/09/07/编译原理/index.html","2fd0d3d8bea0777cf1bdc87fc1e1b7f8"],["2021/09/27/网络是怎样连接的/index.html","a2c5fba9ffa14c1961b9c8a260f6204a"],["2021/09/27/通信基础/index.html","c6ff995f07c16420a23264ec29f44924"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","68901d6ee207a97d54863fcb4cd7f537"],["2021/10/22/vlan配置/index.html","c686828f1ea20902e3d38dd2889902b6"],["2021/10/31/实验三—子网划分与静态路由/index.html","dbcd25cd092ee45fa7c04ddeb823193b"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","f881541c0822b567273875df6937ca0f"],["2021/11/17/硬链接与软链接/index.html","c1d8919f536117399937aab382727676"],["2021/12/01/SQL20题/index.html","d5a1daa75eb4566f2d3dba73ce045cfa"],["2021/12/08/实验五：Wireshark抓包/index.html","e448546b1d332471c89fe0e8b6436b2f"],["2021/12/15/CentOS7搭建FTP服务器/index.html","449f08930d43fa783de8ed0ecceda616"],["2021/12/19/CentOS7 安装相关组件/index.html","bd90df60a899c790fa9b55805ea1276c"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","7067920ff2a902440bcf7e041affaf79"],["2021/12/27/Vue/index.html","43d7a7ec83ffa38e5829a87a0f416590"],["2022/01/08/ArchLinux系统安装/index.html","25f0f02d386c99f9243b11083dbba75e"],["2022/01/10/ArchLinux软件安装/index.html","782fdf1bcfd41d622c0e43063affb8ca"],["2022/01/11/ArchLinux开发环境配置/index.html","1c1c9d395f17602271ef5e697896ab73"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","d45e014fd687c180b27c639b15c9f149"],["2022/01/22/DWM/index.html","af7ab66c2d7c2618b56e01e28cdfd0bf"],["2022/01/26/MySQL性能优化/index.html","22b6b3e3457f34073dde7ed5fbd6e9cf"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","fb6840d4f61a88ba34503edc748ac00d"],["2022/02/27/ArchLinux安装wine/index.html","8e03eab75bccfb4070121d9738303764"],["2022/03/01/ArchLinux安装VMware/index.html","2c4f2f261cfa91a0ea618d612154c24c"],["2022/03/01/ranger/index.html","b07721ca645735d6fa3c1427447aa525"],["2022/03/02/ArchLinux PPPoE拨号/index.html","8f81f7a095c209d75240d105be2097c5"],["2022/03/02/C语言复习/index.html","fcab43f7d5f077a860a77a544051087f"],["2022/03/02/Linux修改IP/index.html","62cd46c933c632c53cb8e293c72b1cfc"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","e24d22cc7ec4853af84e07dad07763eb"],["2022/03/16/Linux文件和目录管理/index.html","637c6c101bd285942173fb49384e0d4d"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","cfbf2890b005d1041a586f2479ef5fe4"],["2022/03/20/Linux用户和权限管理习题/index.html","624a7e597e02e94d9c1ec5a7d2919fa4"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","e801036c9671c4cef5e4528fb1a6a0b8"],["2022/04/02/ArchLinux安装MySQL8/index.html","18d4086f64868525d68b9ea66dd20fa2"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","033704f10ff690ccce5831f2c7518723"],["2022/04/13/Linux磁盘和文件系统/index.html","8c9da38ee79c7b4b1a308bf4f7b6c4a2"],["2022/04/13/Linux软件包管理/index.html","ceeaeff6c426121368506ad514cf5ae6"],["2022/04/18/ArchLinux触摸板/index.html","3ffc3189032190e1b9ee419daa13dc0a"],["2022/04/25/FreaMarket/index.html","47a2d9d3a06559d736df2397206daca4"],["2022/04/27/Linuxn命令练习/index.html","d8c79a3f442d06dd1348dc138bf6e8c1"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","21514272d53c7edb6a49841d98090192"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","a5cc73ee45a541bc48a47dbee83e179e"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","501fd382ead15f701f64ce59819665c2"],["2022/05/20/Linux进程和服务管理/index.html","272fd305e4b8a1a012395b741745cf95"],["2022/05/21/JavaScript原型/index.html","2c0ed3acae394cb6cbf2e1be5bf017e8"],["2022/05/21/SMB/index.html","3d802c06e07be6a672285d12ebed401c"],["2022/06/10/ArchLinux外接显示器/index.html","684e792dbad45a16699aff5457f69e40"],["2022/06/10/nvm的安装与使用/index.html","ada65938342b5727a2cfcde3d1c89631"],["2022/06/18/Git在项目中使用/index.html","1e3d15dc9b38a48d63f68c1f11d821e6"],["2022/07/10/nvim键位/index.html","1ceb659b6a86f4f002ac21b5541664c8"],["2022/09/28/考研政治知识点总结/index.html","c9676539220ff9c48b459dbf1d3f02a8"],["about/index.html","58bc9fbf69e9dbbc2e46231ebf097a86"],["archives/1970/01/index.html","5e679e3b85f170a795280c2379142f0b"],["archives/1970/index.html","afd6e53605056c5fcbc7f82657622680"],["archives/2021/02/index.html","bf2024135722205f36639ad985626b92"],["archives/2021/03/index.html","2973cd4721db8032583ea53dd54c072a"],["archives/2021/05/index.html","375e9b7c9d0cb34af9351b18afa83ece"],["archives/2021/06/index.html","e54925a9729bcb17adbb0378d486b358"],["archives/2021/07/index.html","6196a6787a834a8b86e5ec504b356424"],["archives/2021/08/index.html","da5a18b5d5e6c2b4452e2d9a250a5119"],["archives/2021/09/index.html","ccabbae0485a27e6eea6bee049ce3dc8"],["archives/2021/10/index.html","ef04365519986972e7fb33164fb7d28f"],["archives/2021/11/index.html","0dec381cf656c67dd326bf52384f2d8f"],["archives/2021/12/index.html","d8367f7422e542d1c4fa7c11cedefe61"],["archives/2021/index.html","a944bbb6ec9851729ebedef3ee3c67ec"],["archives/2021/page/2/index.html","83f354ffb179019f738c520054b22d6a"],["archives/2021/page/3/index.html","754c7a7d059e50a04e8d10fdca0282df"],["archives/2021/page/4/index.html","6d1b3d0ff2c7bf031275544eacc08628"],["archives/2021/page/5/index.html","f7f2c336a04827e068e1e9c56fe0e7b8"],["archives/2022/01/index.html","901430660b756197a73ebdf01b709b6f"],["archives/2022/02/index.html","d1ad80959a93b0c6b9f1a3f479629fc1"],["archives/2022/03/index.html","cc87aaa9d134f94f783637e9d8ddb334"],["archives/2022/04/index.html","01714f14d14458cd63c7bb182c3af24d"],["archives/2022/05/index.html","f8f63a27ff2de923eea153cc0513bbae"],["archives/2022/06/index.html","75bcba70572187ab867046b59b98ff75"],["archives/2022/07/index.html","937f3f37e125701cedce19be530d2d5d"],["archives/2022/09/index.html","7eb1d0b46d828cf6a97aa6654aedaed6"],["archives/2022/index.html","bf88a5b166df9fb8c7c4b3d6c5413dfb"],["archives/2022/page/2/index.html","6dc52f9ee965daa476291f03bb0bb327"],["archives/2022/page/3/index.html","13d520a23d9b78ad1df799f2f7bd8066"],["archives/2022/page/4/index.html","22e8c2523401d221c8481a159a0dc72f"],["archives/index.html","e1fcb55ed9c30eae3b1cd3cbe77ffbe7"],["archives/page/2/index.html","a6b5177262cf53ab73cf90896181231e"],["archives/page/3/index.html","ec2415996fe7c3706c82476fed95dead"],["archives/page/4/index.html","ff62d4f93f26436c860bafc279a6e089"],["archives/page/5/index.html","63e4b7a788e6531307d731798626507f"],["archives/page/6/index.html","a677a11a7e870bb5220d9461bc0488f5"],["archives/page/7/index.html","05307a257bb2b34718b22ba14d3e5a4e"],["archives/page/8/index.html","65d27592e3c1dd7efba658d25b65f9b8"],["archives/page/9/index.html","47f3650f5ff88b8e55716e14bf5e8af2"],["categories/C/C/index.html","ca902fa3f7d743c7c5ac08e96e38f229"],["categories/C/index.html","6b09021a258bf929a236ca8b9030fda0"],["categories/Linux/index.html","f560ac1ca0a4837032a84c0f02adba6a"],["categories/Oracle11g实验/index.html","26978547b00c473642e564f69798b3ed"],["categories/Windows/index.html","1cfd5903babbe5761195c39e8ab6f2a6"],["categories/index.html","56c52e4339129024427b8d59098a9b4d"],["categories/javaSE/index.html","06e0e2abd17eee6bd04439d90433ff2e"],["categories/tools/index.html","64a1e984683651c4f561a34e755bb4dc"],["categories/wxy/index.html","5163c57844c00d71740875bf7c6f484f"],["categories/个人/index.html","79f6fe152fd6dcbf484bdf28d38c9bc9"],["categories/前端/index.html","17af5da40773b8049960bc37280eb204"],["categories/工具/index.html","553dcfa8d628be65e565f583cb430a4a"],["categories/数据结构/index.html","4f90af350312cef9b82822764d9bd3a6"],["categories/笔记/index.html","807d866990926eea38fd6cb7c297f386"],["categories/笔记/page/2/index.html","695807abd539e1cd70ddf7af5028eded"],["categories/笔记/page/3/index.html","e8726a0dffa345810adb45e62b69a63a"],["categories/笔记/page/4/index.html","280c16e4adc2ea43fc1ccb87a2cfb7b4"],["categories/算法/index.html","86a404eae53449d913564a9169a7e489"],["categories/美化/index.html","9a3dd6e8798b5763712d7aa81038edd9"],["categories/考研/index.html","d5b170d7b3342fd8140021880a97f261"],["categories/计算机网络/index.html","b3095504488e949d8e236300df8b4ce8"],["categories/计网/index.html","2cdd0a5a3a7f5befa03ad93962277870"],["categories/语法/index.html","334c14beab41f9596808f39674f74650"],["categories/软件/index.html","c76788aed55732ef616b0ea923bf8a4e"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","0ef9a175672fd62b7e2ae6a8d742852b"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","e33b1fb3de7cd81731d99606d8bd6a56"],["page/2/index.html","2afa00c9d8803832e40049a303f246ee"],["page/3/index.html","439d7a0c914be4eda0a1ec7df5e247fa"],["tags/ArchLinux/index.html","747918e69afd570822626e214f7fd921"],["tags/Burp-Suite/index.html","1c1df1493500c313a2506054ea19dbd0"],["tags/C-数据结构/index.html","f1cd98fc21f7e57a5aa05395553e582e"],["tags/C/index.html","163067c6114cefdf4cf8db2ecfbdf898"],["tags/CSS/index.html","d94ff1df87a28e8d08e9caa0e284843e"],["tags/Git/index.html","701b413b36d76a5e382564a35c277d1a"],["tags/HTML/index.html","795595ca4b79fd78f2cd1818eb8ad2e3"],["tags/JavaScript/index.html","825955396cbf0359397ae23dab61ef75"],["tags/LeetCode/index.html","25dea2e59a8478c46ac99710a2f590da"],["tags/Linux/index.html","e90e7c3a0d69b1dcc0eaae683910b450"],["tags/Linux/page/2/index.html","3ef61f95a9c3cc35f29fb013b4cd051d"],["tags/Linux/page/3/index.html","19b19b4cbdd4eb8a7dad2d0ca1842001"],["tags/Maven/index.html","784b14b03679f31550ae1115415106de"],["tags/MySQL/index.html","a1be8e3a98e7db7446177940611e8aa2"],["tags/Oracle/index.html","517294a62a47da00364b1a4eff06cc6b"],["tags/Vue/index.html","f600a36c31c2d67ff317a4216252bb1c"],["tags/Windows/index.html","8491d722073c77edf87b65489cde514d"],["tags/Wireshark/index.html","30291b875e5bfbf9a20387185e96da8e"],["tags/index.html","8e2472049cb2a2e75702d28c53a1a523"],["tags/java/index.html","d3a8f4fbd8b0561d6076ec4de8aa1b5d"],["tags/route/index.html","d7f590d7dc80945c3dff6a2cca7b2dd2"],["tags/tree-java/index.html","5a8ba550fc2668a071f6852590e1e824"],["tags/vim/index.html","7690dc3a03f9e50d5b2252efa822c951"],["tags/vlan/index.html","57295fbda2f31ab440a9fcba7194fd8d"],["tags/wxy/index.html","4eb441a126e9bcce58002ee08c39f000"],["tags/个人/index.html","4ec148832e9d61f6d3c8d39caa17777c"],["tags/书籍/index.html","44f0bb2917460202fac655691fc18f89"],["tags/博客/index.html","dc9b3c01a928547e98020a23c453fef2"],["tags/壁纸/index.html","fca24d752e66962df6f91281c7bb80a1"],["tags/底层/index.html","3574747c74f4adee342ae97eb0816035"],["tags/政治/index.html","a10df9b926198351e3b5b6e10737c5ab"],["tags/数据结构/index.html","2bcb6c848ec377cf8c45414934dda981"],["tags/文件/index.html","85627124211ec1a17a77556d303e4793"],["tags/服务器/index.html","05bcb9f68c78ad1844f1e3a4bd1ab299"],["tags/汇编/index.html","4afdff415c33d07cadf0ca33f66aae84"],["tags/算法/index.html","09d7a441057aa47aceaea44952d1af02"],["tags/记录/index.html","b27a1074e80c911169b5d46d62af7509"],["tags/软件/index.html","e28180290bf0dce118cb049a25939217"],["tags/通信/index.html","d90b1008a3e33b7bb6c7a4664c7df1db"],["tags/链表/index.html","c8fdc3f1a40ae1ec8ef48c83028c4c85"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







