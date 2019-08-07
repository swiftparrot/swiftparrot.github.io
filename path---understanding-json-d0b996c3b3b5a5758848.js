webpackJsonp([53033257506304],{817:function(e,t){e.exports={data:{post:{id:"/home/cypress/website1/content/posts/2019-06-27--understanding-json/index.md absPath of file >>> MarkdownRemark",html:'<p>JSON (Javascript Object Notation) is a simple way to send and receive data between computer systems and applications. JSON is a string of plain text. Using a simple format, I can easily store numbers, arrays, strings, objects etc. This is one of the most common ways to send data between the browser and the server. </p>\n<p>Usually frontend and backend will communicate through HTTP requests using GET, POST, DELETE operations. The requests and response data is usually in JSON format.</p>\n<p>Let us see how to represent a simple user object in JSON format.\nThe user has two fields -  firstName and lastName. Each of the fields is represented by a key and value. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n   <span class="token string">"firstName"</span> <span class="token punctuation">:</span> <span class="token string">"Jane"</span><span class="token punctuation">,</span>\n   <span class="token string">"lastName"</span> <span class="token punctuation">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In the example, the key is “firstName” and the value is “Jane”.\nThere is another key “lastName” and its value is “Smith”</p>\n<p>Now lets add more fields to this user. Lets add a city and state fields.\nThe user JSON data now looks like this</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n   <span class="token string">"firstName"</span> <span class="token punctuation">:</span> <span class="token string">"Jane"</span><span class="token punctuation">,</span>\n   <span class="token string">"lastName"</span>  <span class="token punctuation">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>\n   <span class="token string">"city"</span>      <span class="token punctuation">:</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span>\n   <span class="token string">"state"</span>     <span class="token punctuation">:</span> <span class="token string">"TX"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now lets reorganize the data a bit..lets define a field called address</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n   <span class="token string">"firstName"</span> <span class="token punctuation">:</span> <span class="token string">"Jane"</span><span class="token punctuation">,</span>\n   <span class="token string">"lastName"</span>  <span class="token punctuation">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>\n   <span class="token string">"address"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"city"</span>      <span class="token punctuation">:</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span>\n        <span class="token string">"state"</span>     <span class="token punctuation">:</span> <span class="token string">"TX"</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Lets add even more data to the address</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n   <span class="token string">"firstName"</span> <span class="token punctuation">:</span> <span class="token string">"Jane"</span><span class="token punctuation">,</span>\n   <span class="token string">"lastName"</span>  <span class="token punctuation">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>\n   <span class="token string">"address"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"street"</span>    <span class="token punctuation">:</span> <span class="token string">"123 Main Street"</span>\n        <span class="token string">"city"</span>      <span class="token punctuation">:</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span>\n        <span class="token string">"state"</span>     <span class="token punctuation">:</span> <span class="token string">"TX"</span><span class="token punctuation">,</span>\n        <span class="token string">"zipCode"</span>   <span class="token punctuation">:</span> <span class="token number">78759</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As you see, all the data is represented as key value pairs.\nSo “firstName” is the key , and “Jane” is the value\nAlso “address” is the key and </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token punctuation">{</span>\n        <span class="token string">"street"</span>    <span class="token punctuation">:</span> <span class="token string">"123 Main Street"</span>\n        <span class="token string">"city"</span>      <span class="token punctuation">:</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span>\n        <span class="token string">"state"</span>     <span class="token punctuation">:</span> <span class="token string">"TX"</span><span class="token punctuation">,</span>\n        <span class="token string">"zipCode"</span>   <span class="token punctuation">:</span> <span class="token number">78759</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>is the value.</p>\n<p>In Javascript, we could represent a user with the above data like this</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n   <span class="token string">"firstName"</span> <span class="token punctuation">:</span> <span class="token string">"Jane"</span><span class="token punctuation">,</span>\n   <span class="token string">"lastName"</span>  <span class="token punctuation">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>\n   <span class="token string">"address"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"street"</span>    <span class="token punctuation">:</span> <span class="token string">"123 Main Street"</span>\n        <span class="token string">"city"</span>      <span class="token punctuation">:</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span>\n        <span class="token string">"state"</span>     <span class="token punctuation">:</span> <span class="token string">"TX"</span><span class="token punctuation">,</span>\n        <span class="token string">"zipCode"</span>   <span class="token punctuation">:</span> <span class="token number">78759</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If I need to print out just the “firstName” , I could say</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Similarly, to print the city value,</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">)</span></code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"JSON (Javascript Object Notation) is a simple way to send and receive data between computer systems and applications. JSON is a string of plain text. Using a simple format, I can easily store numbers, arrays, strings, objects etc. This is one of the most common ways to send data between the browser and the server. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Usually frontend and backend will communicate through HTTP requests using GET, POST, DELETE operations. The requests and response data is usually in JSON format."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Let us see how to represent a simple user object in JSON format.\nThe user has two fields -  firstName and lastName. Each of the fields is represented by a key and value. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"firstName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Jane"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"lastName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Smith"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the example, the key is “firstName” and the value is “Jane”.\nThere is another key “lastName” and its value is “Smith”"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now lets add more fields to this user. Lets add a city and state fields.\nThe user JSON data now looks like this"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"firstName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Jane"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"lastName"'}]},{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Smith"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"city"'}]},{type:"text",value:"      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Austin"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"state"'}]},{type:"text",value:"     "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"TX"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now lets reorganize the data a bit..lets define a field called address"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"firstName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Jane"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"lastName"'}]},{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Smith"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"address"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"city"'}]},{type:"text",value:"      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Austin"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"state"'}]},{type:"text",value:"     "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"TX"'}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Lets add even more data to the address"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"firstName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Jane"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"lastName"'}]},{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Smith"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"address"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"street"'}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"123 Main Street"'}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"city"'}]},{type:"text",value:"      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Austin"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"state"'}]},{type:"text",value:"     "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"TX"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"zipCode"'}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"78759"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As you see, all the data is represented as key value pairs.\nSo “firstName” is the key , and “Jane” is the value\nAlso “address” is the key and "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"street"'}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"123 Main Street"'}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"city"'}]},{type:"text",value:"      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Austin"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"state"'}]},{type:"text",value:"     "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"TX"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"zipCode"'}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"78759"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"is the value."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In Javascript, we could represent a user with the above data like this"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" user "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"firstName"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Jane"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"lastName"'}]},{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Smith"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"address"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"street"'}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"123 Main Street"'}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"city"'}]},{type:"text",value:"      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Austin"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"state"'}]},{type:"text",value:"     "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"TX"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"zipCode"'}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"78759"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If I need to print out just the “firstName” , I could say"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"text",value:"console"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"user"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"firstName"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Similarly, to print the city value,"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"text",value:"console"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",
value:"("}]},{type:"text",value:"user"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"address"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"city"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/understanding-json/",prefix:"2019-06-27"},frontmatter:{title:"Understanding JSON",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/kingfisher-881975_640-f8e51d093697f9cd054669b30c7022c7-ada8c.jpg"}}}}},author:{id:"/home/cypress/website1/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"/home/cypress/website1/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/understanding-json/"}}}});
//# sourceMappingURL=path---understanding-json-d0b996c3b3b5a5758848.js.map