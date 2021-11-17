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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","84007e794778139ffbe8ca3b8f977ff8"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","750c2df115d72118ddff9460440f1fcf"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","a7b7b8b79e0d1f44b49329e9036b56ca"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","796f47f078a3d68dd104b4c24d49110e"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","bbb021cd7000c616c8d08dd2553c2a5b"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","19ef4c8d249465f308ac6c9e07a00e2d"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","5a765ad05f5ace96b0a12fa988d9db61"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","72a5eb44512c27bb1620f1d67d610a06"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","165e7b1b9eff67a8f130a7dfa3d4a73d"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","8040e8ff434723ea218f3d26e30dab0b"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","4b804fb411edb4fb5ba35daf935ff013"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","0bb0d9ddc63101730a09e0f357946e42"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","e1f3965596d34738122adbd1882b1b59"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","d0569010dff419e7cdbb5510fee2c27f"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","db3089e13fa079cb8d53af2318c64812"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","8092370b8702dd3b3fe095412d6f3165"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","4648c129ad291a950da97898f8daa7e1"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","88c041e741d65c8528cce2e4cc01506e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","7ceb2ba4e47c3a56680d6dd3eef2957d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","39286f1f77ffcf2bea8f4e506402d564"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","948d1c2e58ae2b7ad8eedaa72f0098d4"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","197bf9b8eed75bc6b3306b51b6f1270e"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","30f7c6b606d2dac04d8328f6d8d821b7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","75a3b3ddc39991b6e93b7796affe27e4"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","3ff98be80d6306955aa16da949e7915f"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","2c75ccc1ecf0a4e0b939e886ad5fec2e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","8230c8e0f4c9cde1410ae84c19182eef"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","d190e2c4d2e606c462bb7a165cc047e9"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","da1ca4c4e6600b61aded4b58de8080bd"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","4ce0072fb4e9ff06bbf551755e0b9bf2"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","826c2409f9428dbc3a217d1edbc11118"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","8b677ad92849ea882ca826ea1aa9f0b3"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","446f08b74e0121f084a92decefe4ac58"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","b4c2f4e33cfa63fa0b15a0f537cb8bf8"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","3777ce0d6c700ee7b83c9c8c80dbd8c5"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/子网划分与静态路由/index.html","c52646dfe92ce96d0b7530201e32210e"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","67e399561bc5c9c4a04e01299d77fc2d"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","9f5ba0c8952d88253bcd7d0cef474695"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","3aa1e79e49a07b8e2741d371fa365123"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","64674fa88650d70fac25247df27f4448"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","947a32ee5038bcc0ccd5f3134fd9cbde"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","eff58a3240de4afdbddd9bc04755eac2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","1399e14ef3c0c704b663064a55ca90e2"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","281f1c428db5e3f1ae5d7c705ac351d8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","a618526f0e82292b22990f297ee64c54"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","e032cc149094eb79356d4b6c768657fd"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","608450071eb1a40da5d806580da278e7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","a9f28b80b4d9a85b4a6bd315866b35ed"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","b1de3e07e9a552e0258ca4b4ff626a6e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","2b628d16f1b98394264c152dc71a06c9"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","6a200eba29caaa2271f16f7950545a04"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","3553e401f5ec26fe5fd4ff7a7b54bcb0"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","5a31448910ba4a492c67bc64ffb18cb6"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","c5d25933c58d8a7a4ceafdfcb0743b15"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","a68484a6045c02c263a363b5274eefa4"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","35fbc9b318c4cad93331a6e935238dc9"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","d6bacd98ce48b211ee50fe65cd710f7c"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","d042500558ef85316dacbefdc3f79f3d"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","5f48226265a0bd67f82921e4fd596a6f"],["E:/Blog/灰灰爱吃小云朵/public/categories/Window/index.html","5910298d2b212d3ea3b7b00a97ca935a"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","045f35ac56a5938ab9f33f1de11b78ee"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","efd4ca357f35459a60723b0589066594"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","83683d251c59cdcdc1883098004ac0da"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","4a11f55707e6c6a5f29a28cf32aa7f22"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","beb120ef5c8193ee0fcb8df9631b7bc8"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","66829a5746d466d517586ff26561a6e9"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","bcff286028487ba174c82715f7b65ed5"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","8c8e2d69e7aa2953dd3246a5ac642006"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","ee7e8f22f07c32af7b0a35cd34f631b7"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","ccc21c3fa9791143f2296f525f648803"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","54dec9abb14e722b2db2e92bcbcc62e4"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","c10027bf458eecfd25d4421f642ffc83"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","17a03442e995388eff7887ed292a658e"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","28cef80b4c6698be0d209ed196d7b2c6"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","8d47aa85ec24589180a4c2904c01d179"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","6d5081902c0613f4544d9e67567b6db9"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","aa5ea0dac36529c3864c5c72f970b014"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","1c321e45010766dc186a939ab727f728"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","e3a6406ded0be6420c9d0f9a1238a4dd"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","5f45302fd42f836ad5a4237a0c130a5d"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","0c6233b98e4c6f5e9b074d2483b94f46"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","828cc642d29c9443edbc54b7e930d43a"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","674aa9db4cfe77f545737904db910b75"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","ac2d401421d119b5bba8cb453ac62a00"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","895f1396badbe164da3f897f395e76e0"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","0042e3a8b81fff8002bf0619b0165aca"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","bef86851575d401a148ea727574afa1a"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","41d5d31c28727adfb16283163ba1852b"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","19d94f9414a49cab4c00187eb04595ce"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","5a3eadfae8cc3e62a967503a6bfa8da2"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","14b2528e9cd4a2eaed755b31cdd93ddf"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","d21b4c8635b0ce2d847e487d7d382789"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","a5ce6b24170c10f199f37a2a025dfe76"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","b30a6cd6b03765f04f53ed6283bdfe67"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","e100036e453964080ef2fba370f88615"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","a9a39563f7e49682b709228df5d8fec2"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","5db26aa440687e799d0f3cbcbb677fd0"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","4b38adf4e8259896240764e95b79b73f"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","c50f90e4c1fbeb98ab9f09a4f17ec7cc"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","e5d26f17af6c474063e7cd33f9b3009e"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","f6b07116713273971bf19640d7ab2df3"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","7fb8e63a8cfeeb2dee022c2c6f5a441e"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","8913cc815a6bfbcc290af057d6271895"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","00f5402bee72657ff552da8b50b34eb0"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","b01b72be17aba4d293a2c0ab9ae5d2fd"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","4111bf057c9274fed599a1432bd1e1db"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","e4cc990054566d2705e7ff76a47d338f"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","6afcfad55456e31b982fa6875b0635aa"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







