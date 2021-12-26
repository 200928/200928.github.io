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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","aab7d174791513dd530bdaee29df04e0"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","a00d5782e55b5ed09d191e9490357acb"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","8d785c258df197bb9907ac44616e8418"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","13464ec34363bfb1c89ab39e6c5965e6"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","106327b114ed90544ccab8f64c21c473"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","59c575bc72fc836a0cdf3f83c7e97788"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","903ba6194e6f0463bff1e408f3b2ff51"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","53dfd11920af6301fbc0c6af85b1a13d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","0aa4c91fdf3ebf4678c518e453389b95"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","b43d374bb34e1ae827689ddb853eb1c4"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","d838af9b9c18754a7f9574c6c072bd3b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","d0e046fd8ce85443ace497a3273d7268"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","64c8916b1131ba7aa1d454731e15ed3f"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","4061e07d7a81b3bc4d9025d9bd877dc5"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","0e99a9572fa5cd2b0887e27664cc9dc3"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","6623c670307de0b41b9e208d6820bd0d"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","7ced4a20d657f8f06116da2f3c1be594"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","8481c3a82c2a052952b162c65970339a"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","a4f9012be7d723463e7c70467eb08819"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","44ef55c22362ca9d7bcb12a002a11d73"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","2b5bd4fb79e236373b24fe72b71cfd88"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","1b7df256b1a333376bd07fabeffa6051"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","4d4a37cd5dfd7817991cf32758b78ae3"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","1e3f92d267c03eba6e557041565cf256"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","5ce7431812d00fa868b00e6e6f9b5555"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","a23424d1a990990b2077517e8eed0090"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","5561c91610f4b8be006c5da2c13f7a5d"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","7ae27bdfef264eb3f901d7877b46aef3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","4b65d62ac02f01bbc80a8e4f6bc62276"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","b119f4a821060ab5aef8b4f7c6a07433"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","7e9d3df108860686d398727ed1066046"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","74113b43ad58537066d66ae55179e6be"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","a8006781557ce2da186a7c5f9605d005"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","bc7be500542bfa8a4f0817ef42dd316b"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","264127a79f56e4ab73b8c2db99b081fa"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","b5d96034bd4e898223a561fa8f030981"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","1754d43bb2ad77e3a7a22b8ec6839789"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","ad261242552d8a0fb0c7b8ed2cc02b85"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/01/SQL20题/index.html","cd81d5ca5c06c1649d8530f715487957"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/08/实验五：Wireshark抓包/index.html","64f5f19f9487dfbdb22c2c80ff57b6f9"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/15/CentOS7搭建FTP服务器/index.html","2f45d962a913e849f92ccac934b0172b"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/19/CentOS7 安装相关组件/index.html","6797223ab0f71066be5d8fea9e5f3c93"],["E:/Blog/灰灰爱吃小云朵/public/2021/12/25/实验六：BurpSuite捕获并修改HTTP报文/index.html","6c93925c4ebca795e36fe8cc8466c98e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","e15cb303b921534b6b47ebb29288c858"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","2439dedceebde372c87f25ad2956b01e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","386e1e5b8f8a04195ae13523e7253918"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","61e993800f47888a1509e4fffc131b82"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","0b69a711e32d276f0d2c926fc1908557"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","c83d5fa9b26f3472a4f9601b2611f363"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","9c8f23e6745e84558c7ca5257e4c84c1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","483fa706652f69d4f65ea665c560d0dc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","97a9a6191e5b935ddf2a6049a0cf6114"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","285cb8f30d344f7e2cf6e8d223138da9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/12/index.html","6e467071c45521086351f755fd28f141"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","e9aa45c89be117876e4cffee73eb7812"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","aa3ef1e439acb30bba1ec3cc220589ec"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","582755de0fb7c07128491770216862e1"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","e1ed1c27923e442001d472f7360f2070"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/5/index.html","f76f2a5670cdf677fc1384be561fab47"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","4f1e069e059ea74ff637c564fb189e6b"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","fe9ad00ad3c60638ba76b4750b8a2981"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","103116aa9dea4018160d6f1ca0bb99dc"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","7089a6636087cec5a6151a2293b2814c"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/5/index.html","a834a1edc348a08f58eb2d9d97227332"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","06ca862a01e5932c3f9e538297dfb164"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","c19c67eaf42b4302dc3e3d149862deb2"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","70d1f0c3f3ce6a5d50a938337e58ec0f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","44607ab0370cd51a76571dd8536d65e1"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","8a27b27e42f2059895af0d001e64d84c"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","08fed0e8f6c45acd97ff57a4ebd9dd10"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","d008edb4ad09c54b323324c975f10686"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","fcd8cadc684c5c931c9c0424e4147180"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","8fc7aa4584bc65d7fa45fb73b96113aa"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","3e42f146a26a8e1708c068089b864d45"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","f2a3bcc61ad40f2619f0f322404e8d96"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","ace3bd725b83342aee767947a81da6a5"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/page/2/index.html","1ea718654dae1328c798f849c3a230dc"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ef21db1276fddf91f49ed2a19d0e893d"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","b12716b0ca70a7b85c4ac46bca840759"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","6e22bade86b498b5d95ad77be4abd91a"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","402f3928a83e705398232daab9fc8e85"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","d14f6a4616001d8dcee37f84fd65269e"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","a2b51b7752372487b44c5aa70e924058"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","24f65c203678caa9b2d11b147c617bd8"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","ed093454b3b6088d7b81598f6dadc279"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","e6488cb0d152e62fc570154eddc89d73"],["E:/Blog/灰灰爱吃小云朵/public/tags/Burp-Suite/index.html","1d1042b9ac2bdb313b7319767a8b168e"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","f34b7459dd6bbfece6341ed197542cd6"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","67ad76cb65ea5cdae25e88d6ca44e64a"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","49f59e00b53d55b47f9b94128a9ec32a"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","7e60a6caa9677073075d9b6b30e3c5c2"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","6baf7e9eb5eb1dc809f19bb47876bf0b"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","ca5ff9d94af7bf86199c1774d972b80b"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","a1a3c500862855d88d99d7f3e253e1d4"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","e71bd816bc86989fe5dd05d80264dd75"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","58342a08007c65d8814888124d796543"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","6a3c1ea0a8dcaf8567a47924f09ae849"],["E:/Blog/灰灰爱吃小云朵/public/tags/Wireshark/index.html","4159e0b379d7df88a24ca6ab57d60be3"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","085f003f9d05ce2cce9f1c0cc869ae9f"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","1293d3b23b426194adf5814bbc7451cc"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","955efc0319f7c88547d6958a6ba16111"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","9dfe7458e40d31902516d26268af03af"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","9e808d8ae688a6234858769c4aa6cb52"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","8567ffd513951719df7753a7534af1ae"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","689b87c14c567cdb035e750458046dfc"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","53aa7aecb8a3e3e8eb4bdf3a4381b46e"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","23bfc2a76f895e2b50daee626b224327"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","f5e4be2d548fa9a4e2b3312e4eab54a1"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","d85c9378c2abd522f5e9478b7143c19f"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","914870c5fca7c294e0d9486440c71d14"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","96cf09fe96cd2a8393a28a3dc0686b43"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","05c6821bb148a3925d4e1aaed7a37cb5"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","4dd1d60a8ec9e7cd1d01695127ac8661"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","1e298d13d6a51bd7fbedb0fd68702b7f"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","5e623b64d7efa85d87eced060174a529"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","726c8ec1ba083fd0bb25b9f651807e8d"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","bd0025689301d21f1d8893ce1693e120"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","3de2d8b8c8c4cbc7ef23156a6a003d1c"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","f8b386ab92f4695ed1d2e881a43cf798"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







