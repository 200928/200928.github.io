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

var precacheConfig = [["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Git学习（个人记录）/index.html","1f4427a2453a9c691fc2b521aea56e59"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/Hexo博客搭建记录/index.html","dbff24ce7ade8833bbf361676b8667c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/IDE配置/index.html","cccb9349892e71825065cf41ece663af"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/初识汇编/index.html","5d3d59faef07efa4cb52342d35719e22"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/18/链表与指针/index.html","1492bc7df02b7863b75df53a459d8f49"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/22/Topic LinkedList/index.html","ee4a56e7edfae0f66080cf2484f50c59"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/25/一些设置/index.html","23530385771221682e1379bd9dcc5e04"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/26/WXY/index.html","386de23b1584adadcd017e8f52b07393"],["E:/Blog/灰灰爱吃小云朵/public/2021/02/28/大二下课程推荐-计科/index.html","0b832a37d6f15991c7201a12fd7e8dab"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/04/Linux-notes/index.html","bdcad2b8070a4b1a91c77b5d9574e911"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/08/data struct one/index.html","00541ed9afdf0ea031e6d3943d2fb3e9"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/17/data struct two/index.html","aec46d4a7c481e937e41fe8d551cef41"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/22/STL/index.html","2ad9528a57eec44a0d29c2c4971cfae6"],["E:/Blog/灰灰爱吃小云朵/public/2021/03/27/Battle-of-Tanks/index.html","aa9b465bdd7582733edb7537c60a59a2"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/01/MySQL/index.html","97e57752ddb28b0ab4bb692305f015e5"],["E:/Blog/灰灰爱吃小云朵/public/2021/05/09/HEXO部署服务器/index.html","541a4fd56760a87ece8510edbeb35612"],["E:/Blog/灰灰爱吃小云朵/public/2021/06/04/vim/index.html","41bd476c682023933d841f77fcdebe6d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/13/oh-my-zsh/index.html","81513c76b3ccd51931475f530d21de72"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/14/HTML/index.html","f7924116488a4928140056c86f1d03a7"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/19/Maven/index.html","0afee32319845c912492841a7ba5cd0d"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/20/随机数（C++)/index.html","b4d559fbb51bf6b4e9c9ed8ef44b3a22"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/data_struct_01/index.html","23e0fe0ba08adae0399c8daa2d383be5"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/22/滑动窗口/index.html","e2c9504d92e673de24123c8edba36c32"],["E:/Blog/灰灰爱吃小云朵/public/2021/07/26/Tree/index.html","f038ebe666eb62cfed170720e80f4355"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/02/正则表达式/index.html","1a1c4b7cb377d41cbffd1a40ef9f4802"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/14/CSS/index.html","ba1f0ebad0e5558bd435220ffd51254e"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/18/CentOS+nginx-rtmp-module/index.html","9425bb84a9652f3c5b355364ecbe55b3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/19/Windows Terminal 美化/index.html","cb3b8309ba125e1dc3025f7ca049d3c3"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/EROOR/index.html","2160e01c65695400d39149a67ff5571a"],["E:/Blog/灰灰爱吃小云朵/public/2021/08/23/wt ssh和通过ssh连接windows/index.html","82994ee62d1ee75c523a230692a973b9"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/07/编译原理/index.html","48aedf4b6d819d3d581a598222fceaf2"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/网络是怎样连接的/index.html","ef9a1898498000f09e01a768d7f3f55a"],["E:/Blog/灰灰爱吃小云朵/public/2021/09/27/通信基础/index.html","a030698a1874f0536fadc4c4aa5fbce6"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/10/Wallpaper Engine 壁纸提取/index.html","6afb3af7ecc231ab074560d12abc9aa4"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/22/vlan配置/index.html","e23c6466627e8cc0b1b5248c5c6a9da8"],["E:/Blog/灰灰爱吃小云朵/public/2021/10/31/实验三—子网划分与静态路由/index.html","eec3091acfa7e4174923124f53d17fe5"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/15/实验四：RIP与OSPF动态路由配置/index.html","93e162fde0b4d2b344aa7c1dc8b4fa32"],["E:/Blog/灰灰爱吃小云朵/public/2021/11/17/硬链接与软链接/index.html","3281cb129df9bc13ebada74293ce1a9e"],["E:/Blog/灰灰爱吃小云朵/public/about/index.html","ddd07d20ddc5e4a9fa808ca2ebd3de26"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/02/index.html","a2994b02499f1fb461febe9e320feda6"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/03/index.html","c78fee8a5edbe5bba0586ebcc6666509"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/05/index.html","229cb1e6371418021b0e7d9af2bbfeb7"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/06/index.html","1e85918e249cf4799cefe7d0b4c4b0f8"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/07/index.html","0657ef7963fc989903cf3dc9f9c4f83e"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/08/index.html","c072428de6c5af7649efdfe7f67cb21f"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/09/index.html","d0e2d80a27070556f4a5ec2e08a4cbe0"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/10/index.html","f6db5a5c480af5c3de30b1b7e60aff91"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/11/index.html","cda9ada33cff892886b8c83f364c6710"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/index.html","4ca6791074ef16c4d754219b6b561dfc"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/2/index.html","bed04886ea7dc2a119b6880578569631"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/3/index.html","bbe2873ed51f5530669417c5012c0349"],["E:/Blog/灰灰爱吃小云朵/public/archives/2021/page/4/index.html","dc38625446b7895fdd9c4a6747314129"],["E:/Blog/灰灰爱吃小云朵/public/archives/index.html","8476869aa3e3e81257adc41eceba59bc"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/2/index.html","0ddd8351f16d15070dbd1879637bca75"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/3/index.html","83486786504a8b4c2b2738e3262e8226"],["E:/Blog/灰灰爱吃小云朵/public/archives/page/4/index.html","635c49f2f59e742edc3781001208ab42"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/C/index.html","55e3b2da1513252be4ec617b01ee4177"],["E:/Blog/灰灰爱吃小云朵/public/categories/C/index.html","e13f1f00582bd1b487638a0f19d47193"],["E:/Blog/灰灰爱吃小云朵/public/categories/Linux/index.html","3918b5ed4fd628257040c6b272f4822a"],["E:/Blog/灰灰爱吃小云朵/public/categories/Windows/index.html","a2943b3166f24eb6df158cd83cd098df"],["E:/Blog/灰灰爱吃小云朵/public/categories/index.html","a37000cfd74491acf33fc3e90488785e"],["E:/Blog/灰灰爱吃小云朵/public/categories/javaSE/index.html","664d63e65ab0a106dcc4b6acf1c68ecb"],["E:/Blog/灰灰爱吃小云朵/public/categories/tools/index.html","6d9378332fb89dd374b8fc83e2e947ce"],["E:/Blog/灰灰爱吃小云朵/public/categories/wxy/index.html","f8280a4555a22ebe23eca3fd0c3e0c50"],["E:/Blog/灰灰爱吃小云朵/public/categories/个人/index.html","9052e7ebe40eacf03d9a235dd7150d7a"],["E:/Blog/灰灰爱吃小云朵/public/categories/工具/index.html","8e159e4d289d4fb63b93d1730abd1a88"],["E:/Blog/灰灰爱吃小云朵/public/categories/数据结构/index.html","31d538a812b03e7131aab1155e423a3c"],["E:/Blog/灰灰爱吃小云朵/public/categories/笔记/index.html","c88cd1ebab7bc318bc8f1585f6ffb3e2"],["E:/Blog/灰灰爱吃小云朵/public/categories/算法/index.html","598e6adaef5a755860874b58f8d44582"],["E:/Blog/灰灰爱吃小云朵/public/categories/美化/index.html","8ce35017801f80de28af88ad6e30f026"],["E:/Blog/灰灰爱吃小云朵/public/categories/计算机网络/index.html","a7dfd8b75898869f375f9901ff418fca"],["E:/Blog/灰灰爱吃小云朵/public/categories/计网/index.html","c02dab44718279a54bd62d03a854a76a"],["E:/Blog/灰灰爱吃小云朵/public/categories/语法/index.html","184716abf52d4155fd9ee3d86a3ee79f"],["E:/Blog/灰灰爱吃小云朵/public/categories/软件/index.html","4305b19c8a6ea463357bd872fa350738"],["E:/Blog/灰灰爱吃小云朵/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Blog/灰灰爱吃小云朵/public/css/index.css","57314ad1339380f936e1fb3c623365a7"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/background.css","2f89080827424994eb1443bb0ff65258"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/footer.css","95c03e21cc5331a640631e356cd697af"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/read.css","114c0bffa663b39891e435e31ed556e0"],["E:/Blog/灰灰爱吃小云朵/public/css/mycss/scroll_bar.css","cf39826535eacd13671c475c46faf47b"],["E:/Blog/灰灰爱吃小云朵/public/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["E:/Blog/灰灰爱吃小云朵/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/bilibili-line.png","8541ca1ddff759bec817e1e393dc140f"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/csdn.png","67e9a4bca029f3ba4973af9e48f60e78"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/gitee.png","fe350b0c7345547f6af5a5afe229dae5"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/github.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/久仔.jpg","05c2291654fd858b1f94923ca3345057"],["E:/Blog/灰灰爱吃小云朵/public/img/Logo/百度.png","727d2d8c1d500ed5fbaa10ab486b9e70"],["E:/Blog/灰灰爱吃小云朵/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Blog/灰灰爱吃小云朵/public/img/alipay.jpg","e392784fef636d45a372ce6678c64585"],["E:/Blog/灰灰爱吃小云朵/public/img/favicon.png","8626329b2f2685ab3364004034e472a8"],["E:/Blog/灰灰爱吃小云朵/public/img/friend.jpg","d424e86768ddeae2495914b7fa3400e3"],["E:/Blog/灰灰爱吃小云朵/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Blog/灰灰爱吃小云朵/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Blog/灰灰爱吃小云朵/public/img/loading0.gif","e6d2f9640ba1203f51fe4f97ccaafa02"],["E:/Blog/灰灰爱吃小云朵/public/img/loading2.gif","6f2cdf8b37720b2724bf4a0d097b06e0"],["E:/Blog/灰灰爱吃小云朵/public/img/wechat.jpg","752c554295bd85febbe174f65a42fadd"],["E:/Blog/灰灰爱吃小云朵/public/img/关于.jpg","f701262987df39709a8b3f74dcfd1ffe"],["E:/Blog/灰灰爱吃小云朵/public/img/分类.jpg","b82947c0453978bf27329c13c6b5b900"],["E:/Blog/灰灰爱吃小云朵/public/img/图片.html","3c57cfcf16ffddb3c87f91f6f164c46e"],["E:/Blog/灰灰爱吃小云朵/public/img/头像.gif","d943ebb56a7e16a37c2da1c6c0b5085a"],["E:/Blog/灰灰爱吃小云朵/public/img/时间轴.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/标签.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景.jpg","fab1261fe605bbf04b4453c2babf3c75"],["E:/Blog/灰灰爱吃小云朵/public/img/背景1.jpg","4c6464123b0b6cd15ab773b172284efb"],["E:/Blog/灰灰爱吃小云朵/public/img/背景2.jpg","3562a2f868c10ed197c86eaa76013cda"],["E:/Blog/灰灰爱吃小云朵/public/index.html","5157ebe9771e84cfca019735ff7ce60c"],["E:/Blog/灰灰爱吃小云朵/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/Banner.js","7cc72f34e485259a4331a2e9328196a6"],["E:/Blog/灰灰爱吃小云朵/public/js/myjs/phone_side_clip.js","7d8c659dd30fbd361596c5120cdc599e"],["E:/Blog/灰灰爱吃小云朵/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Blog/灰灰爱吃小云朵/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Blog/灰灰爱吃小云朵/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Blog/灰灰爱吃小云朵/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Blog/灰灰爱吃小云朵/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["E:/Blog/灰灰爱吃小云朵/public/link/index.html","af4c8c8493559ad05371154540171dba"],["E:/Blog/灰灰爱吃小云朵/public/page/2/index.html","3f1a08fe5d2bd8e1ec5c5c3b5891b9bc"],["E:/Blog/灰灰爱吃小云朵/public/tags/C-数据结构/index.html","b03fe77ba266fb83cec6205a9f0c61b8"],["E:/Blog/灰灰爱吃小云朵/public/tags/C/index.html","65b0f32e2b8a0d098ae6a6159c7d35c0"],["E:/Blog/灰灰爱吃小云朵/public/tags/CSS/index.html","14bb25ac63c0f6db6c414f9dd84ba821"],["E:/Blog/灰灰爱吃小云朵/public/tags/Git/index.html","b92f9db5e08a5ee80ac5a6867a080563"],["E:/Blog/灰灰爱吃小云朵/public/tags/HTML/index.html","7d2dc3fa5e21edf7396d310c205b9e5a"],["E:/Blog/灰灰爱吃小云朵/public/tags/LeetCode/index.html","fb60180e7d242856bdbfccdec8d81b5e"],["E:/Blog/灰灰爱吃小云朵/public/tags/Linux/index.html","fbb9e71dfeae18427a8b0afa31cb2380"],["E:/Blog/灰灰爱吃小云朵/public/tags/Maven/index.html","a0f3b3c2a677cba2b82fc9881e522353"],["E:/Blog/灰灰爱吃小云朵/public/tags/MySQL/index.html","26b4d5eca44d943bcdd883feffa05d25"],["E:/Blog/灰灰爱吃小云朵/public/tags/Windows/index.html","00d303ffbd3571a5c235e0701e6a984b"],["E:/Blog/灰灰爱吃小云朵/public/tags/index.html","a14fe86e800c097ba8f5bb7abb65dc5f"],["E:/Blog/灰灰爱吃小云朵/public/tags/java/index.html","4a94a9de4a1f665f2ab00141551a851e"],["E:/Blog/灰灰爱吃小云朵/public/tags/route/index.html","66e44ea44e09bee8e797355cc03aed1b"],["E:/Blog/灰灰爱吃小云朵/public/tags/tree-java/index.html","128b97d03b5b9d4338a7d71eef649d08"],["E:/Blog/灰灰爱吃小云朵/public/tags/vim/index.html","fb19f1ac58f8dde3e7fc4998046f4f47"],["E:/Blog/灰灰爱吃小云朵/public/tags/vlan/index.html","395d5131121a8c04e414257b02601beb"],["E:/Blog/灰灰爱吃小云朵/public/tags/wxy/index.html","9c4eee24441f1280bec6ed6a49d7dcf1"],["E:/Blog/灰灰爱吃小云朵/public/tags/个人/index.html","6c41db5e1d961a7deba4b10c3a6c919f"],["E:/Blog/灰灰爱吃小云朵/public/tags/书籍/index.html","0a8f1723b4149f99e4e1932892972f4c"],["E:/Blog/灰灰爱吃小云朵/public/tags/博客/index.html","f7208970a201835d817afb0631b9473d"],["E:/Blog/灰灰爱吃小云朵/public/tags/壁纸/index.html","62d3041832680c17cafd5086514a67af"],["E:/Blog/灰灰爱吃小云朵/public/tags/底层/index.html","0de5bd8f610bfd71a5a11d53279a7448"],["E:/Blog/灰灰爱吃小云朵/public/tags/数据结构/index.html","39487260f7ecaa987d38fc90384b54ac"],["E:/Blog/灰灰爱吃小云朵/public/tags/文件/index.html","ff0aeaf5d427f87a553374ae19a451e6"],["E:/Blog/灰灰爱吃小云朵/public/tags/服务器/index.html","3c4387ec9bed3023b52327ac8492e13f"],["E:/Blog/灰灰爱吃小云朵/public/tags/汇编/index.html","5820dc0e4abb20cf634c98a26e80acef"],["E:/Blog/灰灰爱吃小云朵/public/tags/算法/index.html","3be29da5836e76212a88dc34a59cf0f2"],["E:/Blog/灰灰爱吃小云朵/public/tags/记录/index.html","99ce8d2c83523542f07bc7bbda069799"],["E:/Blog/灰灰爱吃小云朵/public/tags/软件/index.html","c7c576aa19abd289ed3b066d63109ce1"],["E:/Blog/灰灰爱吃小云朵/public/tags/通信/index.html","c51af2c8324a409eca0a740e072cd494"],["E:/Blog/灰灰爱吃小云朵/public/tags/链表/index.html","234e7d4f83beb625de5ee8f510cfd213"],["E:/Blog/灰灰爱吃小云朵/public/草稿/html-css.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/Blog/灰灰爱吃小云朵/public/草稿/reptile.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







