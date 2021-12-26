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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","8ef0d799c112dc502221fc1158530b7d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","95554b83badcd583b5ba5f9a2b236a0e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","880c93570baa813198f4eae888e11ff3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","e7d202812b396621668975adc25d8dd4"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","813607a4a3ae1e37e0e9ff926f063fa3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","3de9031b18689e674bb458979ab55c7a"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","2e55ddde4726433947450f6b819af509"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","9169899b666b75aaeda0e11b3d3b1184"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","74a01a4c08a8e0ddfa831d6bced9536d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","5734383ec2b421ed947ac9f85e0e29c7"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","5f6d4ee195938f168c1b04ce47a87898"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","64898471b813d26e1d6719485c1b1948"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","dc180ed7a95915384e3a58ff9e935d50"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","3d19ba44bc40cf1c83e7e7b57fdb9742"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","c8a4e9510f92465e7f8d19190d4e4c83"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","f74585728298e8019a23126dadd02c9c"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","7b067d84f4c3a674396cb44f6a6b7361"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","a2725ab2c7d051cec053b8318c17eff6"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","7951737c4545b27d66ee968771b3e6a2"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","14591ef96add2aefffbb8319f87fa8a8"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","ab39c909917bb4407cddde65b00a4ab3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","8ffdca4d62bfa68e11562f8c176b601d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","f1b539d19fec6db0f1513fd107b9b72c"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","2e3fb32ca97b62bd585864f4c360b760"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","c624461b669a7ac6874b546cb70eaf63"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","0b94a6089db5b918975381a3afb147f3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","54beb11723123f0b1c12e51c2420990a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","568ab2fb7676a1a0e89c5d77e2fe7ee6"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","ed87f36c310d339768304b1d6d057e5e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","da97dbc6875d3ec9fb4cda62b530388a"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","25baaa36a2f0c8518108c5a9377c5259"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","fd2f386732602e2b785271cf964b4aaf"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","93a2b62f3e378f05275d9747257a8d19"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","e7b22b02755a593f082178ee6caecf2a"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","96ac029ed465e56e14b84a739ef13fa8"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","bcd5787440c6179cc4edce33ec8be100"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","89f348ce5775232e10a36cf6706a0add"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","755c94f472666ab4e9458347acd2ff42"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","0861c621baf6d32f6b06f09a515f3fae"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","da97a416f91228459073627db7af30dc"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/15/CentOS7搭建FTP服务器/index.html","987d6358d3ec98318e56018d2cb3628d"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/19/CentOS7 安装相关组件/index.html","431bab5254ae9a5bf0807eed9706ba67"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","be3f7b4b312ac7d86e502304f102a200"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","0e0b4a220d5fa71850de8eade945c461"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","58df50886ed4027872c00b684d589af0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","32034b709569d225018442cbcbcc5e10"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","da0576972a7944585ad750cd4d21b5d5"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","f225b26ed37482dc47d3fa8ac085d399"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","e79d087d43d285cd3429a59c4fd46fab"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","3c3fa8256147035de3cf0bb89a2d5a7a"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","4ca1da30d0b64d0c511e60b365456054"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","6fd9081899ed0c1163351f69e8023b51"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","ed68b89df5d89000067577e5edf2a061"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","07d9e1ee1ec6e3628d170ec478e575f1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","694b8bd46b48330ab3044d2b9bf8a4a7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","d429f85a50f2441ad388dfd06fc6168e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","67d8831d45cf1fc4094acbafa7969df6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","eb814d41db4a5f657616337356cb7d8d"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/5/index.html","cd99eae2504871965afc4d6303d7c340"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","a691ec094b42fd7b0377f8ae1330e9f0"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","37d8d72047006a4b586d08713f09f407"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","74cbd822970485541e4af47c02bf1e96"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","af52907899be6353528cc07159c24b89"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/5/index.html","bb68dec4f26329df1945691d30cb853f"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","206f937437f1f9124121d0736380d5c9"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","d3c703a03a4c14e6c5866aec3bb76a8f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","2577b6821bfa939f016191c7fc982649"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","8c8c4591b044883c0a2c46cd836910d8"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","a6c3a119f92a5f0ef741dd08b2e462c2"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","5a3b9471dc962442574a6c27ea941c0c"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","b402197626408358307855be43019859"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","a51b2d25a5fda5a5ae8eea54a064356d"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","5313011d575a278d8d80d67d9948a784"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","7fc818f2b9f2a99745e4a531117abe9f"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","7cef45539d263686de3b827ec8c9394c"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","0deabd5425f364590d46b9e29eab9fed"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","ace5ff0bcdec54c775b2cece86f12184"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","7fe706060531f90e9cde805c5b56381a"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","162558771d520ed2c811aa1aea7d9409"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","bcc297fab2f9adbe86345591552abdee"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","2c10978a420abefec47d722e9b6612e7"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","08a769ea17b603aae08300ec77400623"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","3d205bfd5c4f5da28887185475775673"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","8813e0739ffe58a56f031d483f9a0c8a"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","68f61214c9b58869bb922303a847432f"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","495e29a433f58741584f7c69454a51c5"],["E:/Blog/灰灰爱吃小云朵/public/tags/Burp-Suite/index.html","2aff170d9955a9af3e884fb55d9cfd39"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","f02cc49cd36f8064c26dda9fec13695e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","d58c39043352d2434186ef59ac999a8d"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","31dbd2ce8451a3576e7f05daf5529a3f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","c16d871c74ff489c3c83f7c816d92624"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","2716c15bb4687628d30d33eea330d7bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","1373aa88aa84d3a48231f062f8d60676"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","08016cfda2d7b0ac1e7bd0dab658673f"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","0779a9602e7f431cf2b4b37696ff3df2"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","86aa23b966b5437364d2dd32064fc7d3"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","707b650342eed3a06946363fd12ab201"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","37cb899fa28b57a56c33d5c07b61ee33"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","2556c966084e71b089fc5b0db467d33c"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","254f1b2fab3c2a4a344a028692993e27"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","3331a5d4ed88e577fad13a7393fa96bf"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","c4a6c6e412a91d66ef9a7b650d62da91"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","6c0d603410a0d24ab91f5774affe5255"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","a2ebcdad355c0cc1162d7053b7052b63"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","a8865f814a194ddb853c7b311c75a81a"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","8bc096597bf8e059ed2bc2a4d8aca7aa"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","27858e4a002d72570b974c5f32214cad"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","b54cdc85f296ead0d84de5443da8d6f2"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","acdb3a4c629adf6c61aacc51e04f9c66"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","abdd5a9f0ea5743a352a9f3062c77fab"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","cf5b123a8a373cefa2a1d373bfb00d23"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","4b523f06231ccc0617e03a64ec213fd8"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","b348e49c22bff3113a843227bcbd6f17"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","2cda50dd726dffd5b24427b332b29a39"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","4335b41b0861f948f05e23b9da3ca834"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","f6082ab17c60af3a352b7732849756c4"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","944189990c4acea6ed8f478a475ccbf1"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","e5a37e516c684201c13268df1a1e704b"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","d165ff75091d495fecf07b879c0ee592"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







