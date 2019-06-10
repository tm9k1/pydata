webpackJsonp([0xcc570c925e65],{752:function(e,t){e.exports={data:{post:{id:"/home/travis/build/brute4s99/pydata/blog/content/posts/2019-01-14--arcanist/index.md absPath of file >>> MarkdownRemark",html:'<p align="center"><img src="/cover-0346424267eb59d0b7ab5eb796c84d35.svg" height="300" width="300" alt="Phabricator"><br>\n<a href="https://phabricator.kde.org/"><font size="2">Phabricator</font></a></p>\n<h2>INTRODUCTION</h2>\n<p>This post is dedicated to Arcanist, a command-line interface to Phabricator.\nPhabricator is a set of tools that help <a href="https://www.kde.org">KDE</a> build better software, faster.</p>\n<p>Various command-line based solutions out there help developers to acheive good workflow across features and projects(Git, Mercurial <em>et al</em>); Arcanist takes the same approach, but feels a lot more practical to me.</p>\n<p><a href="https://secure.phabricator.com/book/phabricator/article/arcanist/">Arcanist User Guide</a> states thus:-</p>\n<blockquote>\n<p>Arcanist provides command-line access to many Phabricator tools (like Differential, Files, and Paste), integrates with static analysis (“lint”) and unit tests, and manages common workflows like getting changes into Differential for review.</p>\n</blockquote>\n<h2>Setting up Arcanist</h2>\n<p>The two dependencies to Arcanist are - <code class="language-text">git</code> and <code class="language-text">php</code>. Install them using <code class="language-text">sudo pacman -S git php</code> (or equivalent for your distro).</p>\n<p>Then you can install Arcanist itself.\nIt was as simple as <code class="language-text">yay -S arcanist</code> for me.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 684px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 72.07602339181287%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB40lEQVQoz11SCZKbMBDkE+awBJLQhQ4OGwPreJ2tPCGvyffToNiVpEs1NBI9PTMic8Nj/Pmru3ZDH9dluc3zEKM1Rkmpleq6jlJaFkVVln/WC0VRZGwSJjDpfdN13DmB6D0VIqc01zpnTUlJ1baVlJVSVdP8I5bBdMH5GPtpitNknTPOlcacra2UqVq1r7qpCKko3ePf4s7E74/n8/Pz28d9W7dlWXzwORdnr5qR0VDT2FBHz7Qqi7L8v2zD1DzaMbRWKKPbtjVaW6lMp8Lmw+Lj6vWklVFCCJwiphS7WN9sG6Tp7XgfrLNSSiIEVYrAvGaEiTOpq6I8vwBZeWAXt9bOl8t8va23dRyGfhioc9QHzIwIjkQ1501TE0owdkJIXdcgKWb9rYdCHbciD+yVMcaPJTi3FkN02MMR59wYA6K1xk6morlcgRlYlnUcJ22M9x4aRMY5TJoDicDw/ZpBNx0YxxH+0CAxIgoJIYDABBwEnojpm8SzabrgEWPc3cyOdwtpQuQArMDzPC9eOJ1O2dePL9zt4/FY1xXx+Xw+DmzbhnRIlDpMbb/vOY09Yx3/OICeh2GAZ9/3SIda0BUc4JYuBl+nKpIem5kY2zv+rW2DM9LDBH8CCGMMBLbvLlLDwFv8G7FKdhY22rbVAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="arcanist_install"\n        title=""\n        src="/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png"\n        srcset="/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-2b3cd.png 200w,\n/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-7d2d4.png 400w,\n/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png 684w"\n        sizes="(max-width: 684px) 100vw, 684px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nOther distros’ users may want to look for <strong>Installing Arcanist</strong> subsection in  <a href="https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/">Arcanist quick start</a>.</p>\n<p>Next up, get the source code of the project you wish to work on by <a href="https://cgit.kde.org/">cloning it from cgit</a>.</p>\n<p>Now then, let’s dive into development! 🤖</p>\n<h2>Development with Arcanist</h2>\n<ol>\n<li>\n<p>You may find an interesting <a href="https://bugs.kde.org/describecomponents.cgi">bug from KDE’s bug tracker</a> or <a href="https://phabricator.kde.org/">task from your project’s Workboard</a>.</p>\n</li>\n<li>\n<p><strong>Always create a feature branch/ bookmark</strong> before touching any file in a clean clone. Use <code class="language-text">arc feature</code> for it.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">arc feature name_of_feature_branch</code></pre>\n      </div>\n</li>\n<li>\n<p>Poke around, play with the code, do your thing.</p>\n</li>\n<li>\n<p>When ready to submit a patch, type in <code class="language-text">arc diff</code>. This will also help you maintain your submitted patches. Complete the following forms, that look like:-\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-15296.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.22254758418741%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABY0lEQVQoz3VQ23KCMBDlgYvjaFWSzSYQFFGn4vUz2r60fUXtjKA47f//QDcCtp2phzPLctizm6x1uXwd81NZfhanMi/OlBfFOc/Pu91hv//Isn2WHY7HgsRKJ1INVZaXwgqDoN1ut7yW4zi2bbuO0/II7jV6rltFA881iWM7ru12Op1u98EaJ7MwGnEhARAMBFEIvBFRolQ1UQFIMMWCcW6x8VQ9zsV0wrXmOmSITCBH5A0AftP0pn7k9BmzBqFWkykmCcQxRBHoSAQhBgHeh5SyMfu+Uoq+jSyENKc0JEndB2PMmOkVmDnSXFQaR81/0fylyQO/MdNqfPC54ByhprxDpOXSncGYaSVkpqbVieUPq1HyKtbxdoDa3O/36Q4cOI31aZ8CGGfXaBSTI/yJ9KDo9Qa0LCtN0+FwmKYLHel5muooquJ6s3l6eX59fxuN49V6Tcpmux3F8XK1SibJYrkk9zcWEUycyF8PawAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="arc diff"\n        title=""\n        src="/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-48538.png"\n        srcset="/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-bed0f.png 200w,\n/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-5fd34.png 400w,\n/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-48538.png 800w,\n/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-b70ec.png 1200w,\n/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-15296.png 1366w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>That’s it! Your patch is submitted for review! You also get a link to share with others and see how the submission looks on Phabricator!</p>\n</li>\n<li>\n<p>Continue hacking on another bug or Task, and wait for the review on the submiited patch! </p>\n</li>\n</ol>\n<blockquote>\n<p>Remember to make a different feature branch beforehand!</p>\n</blockquote>\n<h2>Tips</h2>\n<p>The world is not perfect, and many-a-times the reviewers will suggest changes to the patch before flashing the green light. Just revisit the branch, do the changes required, and hit <code class="language-text">arc diff</code> again! </p>\n<p>If you’re not sure about this, use <code class="language-text">arc diff --preview</code>. I always use it before associating a diff with a submission! 😉</p>\n<h2><code class="language-text">arc patch</code></h2>\n<p>You can always try out any submitted patch along with the latest <code class="language-text">master</code> by using the <code class="language-text">arc patch</code> command!</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">arc patch D18812</code></pre>\n      </div>\n<p>This command will do the following in definite order:-</p>\n<ol>\n<li>create a new feature branch with name <code class="language-text">arcpatch-D18812</code>.</li>\n<li>apply <a href="https://phabricator.kde.org/D18812">patch D18812</a>.</li>\n<li>set local tracking to the local branch <code class="language-text">arcpatch-D18812</code>.</li>\n<li>checkout <code class="language-text">arcpatch-D18812</code> feature branch.</li>\n</ol>\n<p>Don’t worry, even if it’s an old patch, Phabricator remembers the <code class="language-text">master</code> branch commit the current patch was based on!\nAs an example:-</p>\n<blockquote>\n<p>If you pull a particularly old patch, say D16553, I get a branch <strong>based on commit 657dec</strong>, whereas the current HEAD of master is 708bcb !</p>\n</blockquote>\n<h2><code class="language-text">arc feature</code></h2>\n<p>Suppose you were at <code class="language-text">master</code> in your clone, and you do <code class="language-text">arc feature some_name</code>. Now, <code class="language-text">some_name</code> branch will be set to track the local <code class="language-text">master</code>, as in if you commit anything to <em>just</em> the local copy of <code class="language-text">master</code> that you have, and then <code class="language-text">git checkout some_name</code>, <code class="language-text">git</code> will ask you to <code class="language-text">perform &quot;git pull&quot; as your current branch is behind by some commits</code>.</p>\n<h3>TL;DR</h3>\n<p>doing <code class="language-text">git pull</code> in <code class="language-text">some_name</code> will import the changes from the last branch you <code class="language-text">checkout</code>ed, before <code class="language-text">arc feature some_name</code>.</p>\n<h2><code class="language-text">arc land</code></h2>\n<p>Perform <code class="language-text">arc land</code> after you have completed the following checklist:-</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Your submitted patch has been <strong>accepted by reviewers</strong>.</li>\n<li class="task-list-item"><input type="checkbox" disabled> The reviewer(s) have <strong>EXPLICITLY tasked you to <code class="language-text">land the patch</code></strong>.</li>\n<li class="task-list-item"><input type="checkbox" disabled> You <strong>do</strong> have a <a href="https://community.kde.org/Infrastructure/Get_a_Developer_Account">Developer Access Account</a> in order to land the patch.</li>\n</ul>\n<p><code class="language-text">arc land</code> automatically rebases (and errors if that failed), so you don’t have to do that manually, unlike <code class="language-text">Git</code>.</p>\n<p align=\'center\'> <font size=3> This quickstart should be enough to get you started on KDE\'s Phabricator and setting sail on some binary adventures!</font></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"img",properties:{src:"/cover-0346424267eb59d0b7ab5eb796c84d35.svg",height:300,width:300,alt:"Phabricator"},children:[]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://phabricator.kde.org/"},children:[{type:"element",tagName:"font",properties:{size:2},children:[{type:"text",value:"Phabricator"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"INTRODUCTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This post is dedicated to Arcanist, a command-line interface to Phabricator.\nPhabricator is a set of tools that help "},{type:"element",tagName:"a",properties:{href:"https://www.kde.org"},children:[{type:"text",value:"KDE"}]},{type:"text",value:" build better software, faster."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Various command-line based solutions out there help developers to acheive good workflow across features and projects(Git, Mercurial "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"et al"}]},{type:"text",value:"); Arcanist takes the same approach, but feels a lot more practical to me."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://secure.phabricator.com/book/phabricator/article/arcanist/"},children:[{type:"text",value:"Arcanist User Guide"}]},{type:"text",value:" states thus:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Arcanist provides command-line access to many Phabricator tools (like Differential, Files, and Paste), integrates with static analysis (“lint”) and unit tests, and manages common workflows like getting changes into Differential for review."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Setting up Arcanist"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The two dependencies to Arcanist are - "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"php"}]},{type:"text",value:". Install them using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo pacman -S git php"}]},{type:"text",value:" (or equivalent for your distro)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then you can install Arcanist itself.\nIt was as simple as "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"yay -S arcanist"}]},{type:"text",value:" for me.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 684px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 72.07602339181287%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB40lEQVQoz11SCZKbMBDkE+awBJLQhQ4OGwPreJ2tPCGvyffToNiVpEs1NBI9PTMic8Nj/Pmru3ZDH9dluc3zEKM1Rkmpleq6jlJaFkVVln/WC0VRZGwSJjDpfdN13DmB6D0VIqc01zpnTUlJ1baVlJVSVdP8I5bBdMH5GPtpitNknTPOlcacra2UqVq1r7qpCKko3ePf4s7E74/n8/Pz28d9W7dlWXzwORdnr5qR0VDT2FBHz7Qqi7L8v2zD1DzaMbRWKKPbtjVaW6lMp8Lmw+Lj6vWklVFCCJwiphS7WN9sG6Tp7XgfrLNSSiIEVYrAvGaEiTOpq6I8vwBZeWAXt9bOl8t8va23dRyGfhioc9QHzIwIjkQ1501TE0owdkJIXdcgKWb9rYdCHbciD+yVMcaPJTi3FkN02MMR59wYA6K1xk6morlcgRlYlnUcJ22M9x4aRMY5TJoDicDw/ZpBNx0YxxH+0CAxIgoJIYDABBwEnojpm8SzabrgEWPc3cyOdwtpQuQArMDzPC9eOJ1O2dePL9zt4/FY1xXx+Xw+DmzbhnRIlDpMbb/vOY09Yx3/OICeh2GAZ9/3SIda0BUc4JYuBl+nKpIem5kY2zv+rW2DM9LDBH8CCGMMBLbvLlLDwFv8G7FKdhY22rbVAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"arcanist_install",title:"",src:"/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png",srcSet:["/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-2b3cd.png 200w","/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-7d2d4.png 400w","/static/arcanist_install-a24fcdbb78eee41962f66ecd5cc46fc0-4a64c.png 684w"],sizes:["(max-width:","684px)","100vw,","684px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    \nOther distros’ users may want to look for "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Installing Arcanist"}]},{type:"text",value:" subsection in  "},{type:"element",tagName:"a",properties:{href:"https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/"},children:[{type:"text",value:"Arcanist quick start"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Next up, get the source code of the project you wish to work on by "},{type:"element",tagName:"a",properties:{href:"https://cgit.kde.org/"},children:[{type:"text",value:"cloning it from cgit"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now then, let’s dive into development! 🤖"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Development with Arcanist"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You may find an interesting "},{type:"element",tagName:"a",properties:{href:"https://bugs.kde.org/describecomponents.cgi"},children:[{type:"text",value:"bug from KDE’s bug tracker"}]},{type:"text",value:" or "},{type:"element",tagName:"a",properties:{href:"https://phabricator.kde.org/"},children:[{type:"text",value:"task from your project’s Workboard"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Always create a feature branch/ bookmark"}]},{type:"text",value:" before touching any file in a clean clone. Use "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc feature"}]},{type:"text",value:" for it."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc feature name_of_feature_branch"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Poke around, play with the code, do your thing."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When ready to submit a patch, type in "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc diff"}]},{type:"text",value:". This will also help you maintain your submitted patches. Complete the following forms, that look like:-\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-15296.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 56.22254758418741%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABY0lEQVQoz3VQ23KCMBDlgYvjaFWSzSYQFFGn4vUz2r60fUXtjKA47f//QDcCtp2phzPLctizm6x1uXwd81NZfhanMi/OlBfFOc/Pu91hv//Isn2WHY7HgsRKJ1INVZaXwgqDoN1ut7yW4zi2bbuO0/II7jV6rltFA881iWM7ru12Op1u98EaJ7MwGnEhARAMBFEIvBFRolQ1UQFIMMWCcW6x8VQ9zsV0wrXmOmSITCBH5A0AftP0pn7k9BmzBqFWkykmCcQxRBHoSAQhBgHeh5SyMfu+Uoq+jSyENKc0JEndB2PMmOkVmDnSXFQaR81/0fylyQO/MdNqfPC54ByhprxDpOXSncGYaSVkpqbVieUPq1HyKtbxdoDa3O/36Q4cOI31aZ8CGGfXaBSTI/yJ9KDo9Qa0LCtN0+FwmKYLHel5muooquJ6s3l6eX59fxuN49V6Tcpmux3F8XK1SibJYrkk9zcWEUycyF8PawAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"arc diff",title:"",src:"/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-48538.png",srcSet:["/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-bed0f.png 200w","/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-5fd34.png 400w","/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-48538.png 800w","/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-b70ec.png 1200w","/static/arc_diff-6d3b7c36f5401e5eeccf21c6cd9c9584-15296.png 1366w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"That’s it! Your patch is submitted for review! You also get a link to share with others and see how the submission looks on Phabricator!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Continue hacking on another bug or Task, and wait for the review on the submiited patch! "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Remember to make a different feature branch beforehand!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Tips"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The world is not perfect, and many-a-times the reviewers will suggest changes to the patch before flashing the green light. Just revisit the branch, do the changes required, and hit "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc diff"}]},{type:"text",value:" again! "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you’re not sure about this, use "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc diff --preview"}]},{type:"text",value:". I always use it before associating a diff with a submission! 😉"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc patch"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can always try out any submitted patch along with the latest "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" by using the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc patch"}]},{type:"text",value:" command!"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc patch D18812"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This command will do the following in definite order:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"create a new feature branch with name "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arcpatch-D18812"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"apply "},{type:"element",tagName:"a",properties:{href:"https://phabricator.kde.org/D18812"},children:[{type:"text",value:"patch D18812"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"set local tracking to the local branch "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arcpatch-D18812"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"checkout "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arcpatch-D18812"}]},{type:"text",value:" feature branch."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Don’t worry, even if it’s an old patch, Phabricator remembers the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" branch commit the current patch was based on!\nAs an example:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you pull a particularly old patch, say D16553, I get a branch "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"based on commit 657dec"}]},{type:"text",value:", whereas the current HEAD of master is 708bcb !"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc feature"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Suppose you were at "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" in your clone, and you do "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc feature some_name"}]},{type:"text",value:". Now, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"some_name"}]},{type:"text",value:" branch will be set to track the local "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:", as in if you commit anything to "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"just"}]},{type:"text",value:" the local copy of "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" that you have, and then "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git checkout some_name"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git"}]},{type:"text",value:" will ask you to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'perform "git pull" as your current branch is behind by some commits'}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"TL;DR"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"doing "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git pull"}]},{type:"text",value:" in "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"some_name"}]},{type:"text",value:" will import the changes from the last branch you "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"checkout"}]},{type:"text",value:"ed, before "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc feature some_name"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc land"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Perform "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc land"}]},{type:"text",value:" after you have completed the following checklist:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{className:["task-list-item"]},children:[{type:"element",tagName:"input",properties:{type:"checkbox",disabled:!0},children:[]},{type:"text",value:" Your submitted patch has been "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"accepted by reviewers"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{className:["task-list-item"]},children:[{type:"element",tagName:"input",properties:{type:"checkbox",disabled:!0},children:[]},{type:"text",value:" The reviewer(s) have "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"EXPLICITLY tasked you to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"land the patch"}]}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{className:["task-list-item"]},children:[{type:"element",tagName:"input",properties:{type:"checkbox",disabled:!0},children:[]},{type:"text",value:" You "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"do"}]},{type:"text",value:" have a "},{type:"element",tagName:"a",properties:{href:"https://community.kde.org/Infrastructure/Get_a_Developer_Account"},children:[{type:"text",value:"Developer Access Account"}]},{type:"text",value:" in order to land the patch."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arc land"}]},{type:"text",value:" automatically rebases (and errors if that failed), so you don’t have to do that manually, unlike "
},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Git"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" This quickstart should be enough to get you started on KDE's Phabricator and setting sail on some binary adventures!"}]}]}],data:{quirksMode:!1}},fields:{slug:"/pydata/arcanist/",prefix:"2019-01-14"},frontmatter:{title:"arcanist",subTitle:"a CLI to Phabricator",cover:{childImageSharp:{resize:{src:"/static/cover-51cb6cdfac9c7d4e8d7cc089838f10ce-160fa.png"}}}}},author:{id:"/home/travis/build/brute4s99/pydata/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I am an engineering undergraduate, in my 3rd year of B.Tech in Computer Science. I like to play with technologies and share my experiences with the almighty internet!</p>"},footnote:{id:"/home/travis/build/brute4s99/pydata/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>personalised with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> | based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/pydata/arcanist/"}}}});
//# sourceMappingURL=path---pydata-arcanist-5199664bf73f05ed4f20.js.map