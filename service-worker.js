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

var precacheConfig = [["1970/01/01/Linux安装中文手册/index.html","dbf7da065df1dd19d3f2725a22fa7159"],["1970/01/01/home/minghui/Pictures/blog_img/webp-16662550440492.webp/index.html","7e3fdfb89cdb6f6517cf0dabb6d8184c"],["1970/01/01/nvim/index.html","355a19ea3bc4fd5b44b9a5f12aeca9cb"],["1970/01/01/来源请求/index.html","da769b983152e0e08236b9f56ce4f54b"],["1970/01/01/英语语法/index.html","8030ab0339ad6957a443877e1c86ed89"],["2021/02/18/Git学习（个人记录）/index.html","07913bc0019535aabbd9b1cfde66c599"],["2021/02/18/Hexo博客搭建记录/index.html","c34ee896f56ce8f6129ea746867e3462"],["2021/02/18/IDE配置/index.html","87349d70b28ee57f21405cbad91d00f6"],["2021/02/18/初识汇编/index.html","cafceb41f7e9d28c9c4031299a3f221e"],["2021/02/18/链表与指针/index.html","a4ac653b96fc51ce9cabb34fa02ecf8c"],["2021/02/22/Topic LinkedList/index.html","798ee8a9ea764355393e640621321cc8"],["2021/02/25/一些设置/index.html","71037e09be8eee073305ed8188e48251"],["2021/02/26/WXY/index.html","5e187899bfa46ab188394341d4a7a9e6"],["2021/02/28/大二下课程推荐-计科/index.html","2c594d62334cf692f4554d5840465ecc"],["2021/03/04/Linux-notes/index.html","6bf80dcb314d2cc09eff0d8388b20a34"],["2021/03/08/data struct one/index.html","7d9054585a685edce204e0bbe5ca316c"],["2021/03/17/data struct two/index.html","f0e3fa03be2a81da9cd1bc411b0b1332"],["2021/03/22/STL/index.html","30c51b23e6f9b4cfa0f8df55039a6837"],["2021/03/27/Battle-of-Tanks/index.html","b857c0e8a433ecdeb31838186d49703a"],["2021/05/01/MySQL/index.html","2dae44c07542fb660ee73c477fa637fd"],["2021/05/09/HEXO部署服务器/index.html","d0541efea570a1b70b06b83371da5c95"],["2021/06/04/vim/index.html","626156414ba968189e8facf3502fabe6"],["2021/07/13/oh-my-zsh/index.html","ba0f79ad26f0cb4c3ac0588a22148754"],["2021/07/14/HTML/index.html","269a64d90f2a82b3df2708b7b294f580"],["2021/07/19/Maven/index.html","5d644fbf2e40e1287d49e4e2fab8fc8c"],["2021/07/20/随机数（C++)/index.html","b97cdd6aea3b93f4c926e9b21d8b1cc4"],["2021/07/22/data_struct_01/index.html","e0da28e1700eee35430177ddea4e73b7"],["2021/07/22/滑动窗口/index.html","aa8ce147006b5ed00f7b2663e1807be4"],["2021/07/26/Tree/index.html","706cb144c0aaf910953f8293ae950acc"],["2021/08/02/正则表达式/index.html","3dddf28873d7f3c63d339a7da43bfcbc"],["2021/08/14/CSS/index.html","b570e16e8020d37f4b7ce04bc769a4ba"],["2021/08/18/CentOS+nginx-rtmp-module/index.html","f23e3f9e5c774a96ef381bc2be002e1f"],["2021/08/19/Windows Terminal 美化/index.html","eb303184703d610440eada9311e76d4d"],["2021/08/23/EROOR/index.html","4e1afe9861d6c403fcb26ebc26c93a75"],["2021/08/23/wt ssh和通过ssh连接windows/index.html","d7d08d2e5c96ad6e04aadde53591f5ff"],["2021/09/07/编译原理/index.html","461a011cd2aedb797364ed95af311f9f"],["2021/09/27/网络是怎样连接的/index.html","a36bb741c9509f5ff59b3d5a53499591"],["2021/09/27/通信基础/index.html","bc7ef546a7c795fedbabe20eb6cd0df0"],["2021/10/10/Wallpaper Engine 壁纸提取/index.html","9d98aa3623057d39f5ad9072aa757899"],["2021/10/22/vlan配置/index.html","2dede4f17e20f123a4abca8ba9c71e1c"],["2021/10/31/实验三—子网划分与静态路由/index.html","88e0e6c560c1865a56c0c8a2cf29e907"],["2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","32cf934d6b614e813d4b6630f9d616d6"],["2021/11/17/硬链接与软链接/index.html","db1e4348365f2fac1fd69f59074bd712"],["2021/12/01/SQL20题/index.html","bb925ee2bdc5a0ce81abcc4474ee8300"],["2021/12/08/实验五：Wireshark抓包/index.html","c810a8be9d0ed9610900bc56f98d3844"],["2021/12/15/CentOS7搭建FTP服务器/index.html","41be2ac28599d6b846d71c6e5dc77765"],["2021/12/19/CentOS7 安装相关组件/index.html","7db802dd415fb4414cc6fcd55622cdf9"],["2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","3f3f7168394bcb78ded253aab0cb9e5c"],["2021/12/27/Vue/index.html","d62568375c77cad69db6ae3f635d97cd"],["2022/01/08/ArchLinux系统安装/index.html","2c57ee6de171f23c6f8b2e932535a3d7"],["2022/01/10/ArchLinux软件安装/index.html","115cd0939b38ce61470446ee4fa4eb57"],["2022/01/11/ArchLinux开发环境配置/index.html","99c1e7fa16b2de837abe78f4cc4debe6"],["2022/01/15/ArchLinux-Typora-Picgo/index.html","217bdc99bc8d688219da07f5059db764"],["2022/01/22/DWM/index.html","2207c5b33a50c973ea0fb40fd1ae380c"],["2022/01/26/MySQL性能优化/index.html","2ce10b084231417aba2a95e7bcfd2fd0"],["2022/02/25/Oracle11g实验一：Oracle及其管理工具/index.html","84062e7ea7257e24ce6f9a5ffd7a8067"],["2022/02/27/ArchLinux安装wine/index.html","a0c6db654bb0c9644477ea7e9836250d"],["2022/03/01/ArchLinux安装VMware/index.html","f37181f8911490d476ba71cae800e861"],["2022/03/01/ranger/index.html","0bb57ad4d4fceac5f2eb17ee4f1e6327"],["2022/03/02/ArchLinux PPPoE拨号/index.html","c6e128b356290a286fec16dd21a444b2"],["2022/03/02/C语言复习/index.html","857af49dd156887e3427014cdb9d2dca"],["2022/03/02/Linux修改IP/index.html","7fafe5679fc353a96f09191fa2f5b147"],["2022/03/07/Oracle11g实验二：Oracle-存储结构管理/index.html","4a8bb6b7225a8ae4df82d21327392475"],["2022/03/16/Linux文件和目录管理/index.html","43238dc2df90a2383f498971dc2287fb"],["2022/03/18/Oracle11g实验三：Oracle-模式对象管理/index.html","4a819f9ba4771e24febdbeda56a6d386"],["2022/03/20/Linux用户和权限管理习题/index.html","d7c974860b2ff2e5fb05f7ca90723ebe"],["2022/03/25/Oracle11g实验四：Oracle-安全管理/index.html","134f453e4102140245ffa56264dc5715"],["2022/04/02/ArchLinux安装MySQL8/index.html","785348374a5f4d849c02dd542ca7055c"],["2022/04/04/Oracle11g实验五：Oracle-备份与恢复/index.html","f35be3928ef2e354f863722a90b999f5"],["2022/04/13/Linux磁盘和文件系统/index.html","e7e0f37222eddccb29bd4613631ce7b0"],["2022/04/13/Linux软件包管理/index.html","22708fa812eb75c3ec016e5134a14ac8"],["2022/04/18/ArchLinux触摸板/index.html","c551b868bd9dc2938d371de589e32d8a"],["2022/04/25/FreaMarket/index.html","2736104f50e572ff35d59b3601074911"],["2022/04/27/Linuxn命令练习/index.html","214d08fe353ccb3d21462015bef73784"],["2022/05/05/Oracle11g实验六：Oracle-安全管理/index.html","9687ffe7c0dec99ae742f5c7297263b9"],["2022/05/13/IDEA-新项目maven配置重置问题/index.html","ee4f24f7b247889302fa75c72343ad0f"],["2022/05/20/Linux进程和服务管理 (copy)/index.html","c5b543c55888c82fb362096caf654aa2"],["2022/05/20/Linux进程和服务管理/index.html","a608a80cdaf6e278692c2e5ebf26ab0a"],["2022/05/21/JavaScript原型/index.html","90a1c303fac319d44853be6e5d3edef3"],["2022/05/21/SMB/index.html","6e5dd25506e4d7eb249ad5e93f3cf514"],["2022/06/10/ArchLinux外接显示器/index.html","f4ace0424b32cad16c4a75fde602b248"],["2022/06/10/nvm的安装与使用/index.html","fadeeb9fe0d594fd041436f5f4cf0d92"],["2022/06/18/Git在项目中使用/index.html","1adb224252caf0b56c936705f3e47415"],["2022/07/10/nvim键位/index.html","c340a147ad36fe9e91262416ae28c2b4"],["2022/09/28/考研政治知识点总结/index.html","49fcc68734488c514d6e78d2a0fcb175"],["about/index.html","614dc7a29f1eacc2cdd09f305934f10a"],["archives/1970/01/index.html","70afec1e2edeb9347cd687f00dd33a4e"],["archives/1970/index.html","399b0c6881ee66c2d31cbf483747feea"],["archives/2021/02/index.html","073b61d68acb117c7348e5717bac45a1"],["archives/2021/03/index.html","f7af7dffee7493330d13598267de509b"],["archives/2021/05/index.html","bb488bcf15d01c81433fc91dc6017952"],["archives/2021/06/index.html","1ad543e58799c172209a35d681401e05"],["archives/2021/07/index.html","6abbc779904dcf08bf96ac4fac275368"],["archives/2021/08/index.html","f421645a0a5541b0654e9fb93e2ebc01"],["archives/2021/09/index.html","40adc61aa741e644fe6fa065649022bf"],["archives/2021/10/index.html","f43ea9bbe43578c8cc0237e637edaffd"],["archives/2021/11/index.html","d65b4cb8354aa03ee09c51e5ebd9c821"],["archives/2021/12/index.html","a2fd3767534d29da57c31c7d86797ac6"],["archives/2021/index.html","4550f3fd26309b785d863d323bbb8326"],["archives/2021/page/2/index.html","3061d90b8e8da3a291303f5d71998b5f"],["archives/2021/page/3/index.html","82517e246ff9a958d3dbc9da98ee94c6"],["archives/2021/page/4/index.html","7e6d633a8ca2a69464e7528c96968872"],["archives/2021/page/5/index.html","5950fef1062d61a3a3a5147ccbcaaa51"],["archives/2022/01/index.html","78469e9240e724017bc4615b172843a0"],["archives/2022/02/index.html","530d4c78fabbe0e76b3b44349b4ecd37"],["archives/2022/03/index.html","547f04173f71cb45712407b1ecb122a3"],["archives/2022/04/index.html","fd100c4905c114f6fd35c30c5a65f3f7"],["archives/2022/05/index.html","0dc06d574a459a4a4bf98ca6e6486f8b"],["archives/2022/06/index.html","cba553c8da57247e944bcbb55cce725b"],["archives/2022/07/index.html","ec9573a1f55eff8b2112262061f246a5"],["archives/2022/09/index.html","1259dcab18b137cbb417a42da7f6391c"],["archives/2022/index.html","017b954c3ec229483f483157de71409f"],["archives/2022/page/2/index.html","b3ee0328e430e5b49791b647314d2c76"],["archives/2022/page/3/index.html","4713a1e9e3b25bdd4931589e47afecd2"],["archives/2022/page/4/index.html","6f68752d89277bf6c1cc3d44c9a3505a"],["archives/index.html","2c76b4f795ec753a1b6c98049dd6886c"],["archives/page/2/index.html","8e69e594529037f66f541fcafbb26150"],["archives/page/3/index.html","9329f08c4d5d1a78795cd67cb28acf24"],["archives/page/4/index.html","f19d7fd32bfdf7e2a2b2cf6a844ee451"],["archives/page/5/index.html","44a6e4b3665797a98ec7f740e735075d"],["archives/page/6/index.html","340dc18b3f91f31a5c57b8ef0692d0ed"],["archives/page/7/index.html","e9f7b3eb019fe59ff62552a43a7f557e"],["archives/page/8/index.html","abd8c6a6196a3ba49c40ee73ddc972cc"],["archives/page/9/index.html","8589fb773854f4d3fb14e29f19c82bf2"],["categories/C/C/index.html","168067e24b38e14b469787796ae157db"],["categories/C/index.html","f44fdc783854719db1f4fbcb72de30da"],["categories/Linux/index.html","058c8682c4c7c80ad28a4699c0c45b92"],["categories/Oracle11g实验/index.html","ff6f2688acf4e1560f6c307aace0ac17"],["categories/Windows/index.html","042076d9136e63d2e47deb87cf775a84"],["categories/index.html","3bce61db52f68aabe188afa610df09c0"],["categories/javaSE/index.html","c756385961504e559467b250d4d1f4c9"],["categories/tools/index.html","864fefa5d1dbe239d088ab37e0b53986"],["categories/wxy/index.html","05778944890260bf07790b36048210d5"],["categories/个人/index.html","e4521bdd7d0672c6e0ccc01165647b81"],["categories/前端/index.html","b6e1514c0a4e8f6d46c7955dbb25fa06"],["categories/工具/index.html","465911a7342c21c7eecfcb951f481523"],["categories/数据结构/index.html","54b61ce4a2cc599f35456441e66524ce"],["categories/笔记/index.html","66dc92fc2c315f9556edbfe75d8dc416"],["categories/笔记/page/2/index.html","f1b279f71b5722914fb7b920e26e61e6"],["categories/笔记/page/3/index.html","23acf4a03a7347621e9cd639985ab6f8"],["categories/笔记/page/4/index.html","435749c1f4dbb099ee4c3913db50c56b"],["categories/算法/index.html","1e13be9831c63d25769e0ce628a62be0"],["categories/美化/index.html","0cdc16888549c18541b14fd5ad10f8a7"],["categories/考研/index.html","bbc5260c933a0ef216642f2c761906e3"],["categories/计算机网络/index.html","e706eff582848c0d09b5889201a1d192"],["categories/计网/index.html","08b2a29be708a4eb597e9b67f626cc88"],["categories/语法/index.html","a3f9cca8fb20f0e03ee7b77f19b40399"],["categories/软件/index.html","552fbc65082b5f51177f320f00efe0af"],["css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["css/index.css","57314ad1339380f936e1fb3c623365a7"],["css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["img/favicon.png","8626329b2f2685ab3364004034e472a8"],["img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["index.html","0d40199f7ac4d9dc5577c1b03208a252"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["link/index.html","4f91fd985919d65d147c535dd6782f1c"],["page/2/index.html","4913a24eb7cde29e1ae5b837efbd5746"],["page/3/index.html","47b96fe95b99e9047c6c46819f599e85"],["tags/ArchLinux/index.html","ee97eb0921bb880949eb497871ff7f03"],["tags/Burp-Suite/index.html","35c25839fb54e4b309882be923a0eab9"],["tags/C-数据结构/index.html","5e134423a14e667f3bc619c794d700d3"],["tags/C/index.html","630260d5ccc5919efe19a3199afddac5"],["tags/CSS/index.html","6f32ac6f3d5ed455648fbf8b86b8b851"],["tags/Git/index.html","190e03b41a456ac806ae159889110c33"],["tags/HTML/index.html","4d859d6bb90e471d0c500e67153450ea"],["tags/JavaScript/index.html","9c5e053aafd5d982cb204ae3a0b10e74"],["tags/LeetCode/index.html","c7f7825ae7d6602aeaf1eac91d70a513"],["tags/Linux/index.html","d33421aa8695ec27077925fd6f2a7156"],["tags/Linux/page/2/index.html","8078a3e9d7ec29a4b03e82d177e4bbb4"],["tags/Linux/page/3/index.html","0bce7df4329d1a8ba314f33fd90fc7ec"],["tags/Maven/index.html","a52dcc6cf9fc03758f41a8f10fd2ee89"],["tags/MySQL/index.html","5bd5bdf1e578879b820bd1ee8eea5405"],["tags/Oracle/index.html","84a87a2f7ba98ab6e47cf41909d22c1d"],["tags/Vue/index.html","de76c54faf2542b37cb968c61bb2f121"],["tags/Windows/index.html","2d2941d7469b0205e6944c403d1d145a"],["tags/Wireshark/index.html","0079c4b3f92c28b1f28fe7ab8efcf115"],["tags/index.html","1b8ebb0cfb73d023d96129a29d6ce471"],["tags/java/index.html","f002d44cf3e08839d723a21c56c73e8d"],["tags/route/index.html","23137cdbc636b17eae4dc8a276093f6e"],["tags/tree-java/index.html","bbdc9784b4921c0c1f0c89838fff895a"],["tags/vim/index.html","b21b7c1b751dada3a32d9739c5c7143a"],["tags/vlan/index.html","b9fcf4d56246339f070f0c65a7117d88"],["tags/wxy/index.html","5c0c578bcf3b5c028510aaf4ebf54ab9"],["tags/个人/index.html","73f943c4daa0c87d3f92bfdf16a30b38"],["tags/书籍/index.html","e4936de66ea40d8432ae3ca9bef39040"],["tags/博客/index.html","6dacc4ec22776f5f7b34adab43760790"],["tags/壁纸/index.html","f802c9c46ef757a4f8f5004da3d96b91"],["tags/底层/index.html","aa78afbeb2bc149f699b210178f94666"],["tags/政治/index.html","e18e9a0f240f9a30bc8112fed6a4a359"],["tags/数据结构/index.html","0e1df465483315bfdb6ff098769e0118"],["tags/文件/index.html","87af83f0306dd74790daa644ab360985"],["tags/服务器/index.html","537571bd1291e6753ded523084562087"],["tags/汇编/index.html","79bef2dd6919b42e250835d126083890"],["tags/算法/index.html","7f2a29387f7d5e5b521a6f6fffdf7ac2"],["tags/记录/index.html","5c7e090596328d14da9b367f8a18a377"],["tags/软件/index.html","965f97f9383e62e03829a0e3cdb44f7f"],["tags/通信/index.html","087a38eec687c06b24641d020c9f363e"],["tags/链表/index.html","bb359db58461d6c97cc9a2b28b13e6d6"],["草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







