webpackJsonp([0xeb157127ba8c],{804:function(A,e){A.exports={data:{post:{id:"/home/cypress/website1/content/posts/2019-06-29--http-get-post-put-delete/index.md absPath of file >>> MarkdownRemark",html:'<p>Here is an online TODO web application.\nIt can be used to keep a list of things to do.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 679px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.36671575846835%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3qBB/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAwEBAAAAAAAAAAAAAAAAARARAGH/2gAIAQEAAT8hDiAl7v/aAAwDAQACAAMAAAAQ0M//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxBX/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAQACAgMAAAAAAAAAAAAAAREAECExYaHh/9oACAEBAAE/EH2RJxoRWIxj4whW6udtX18z/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="TODO web application"\n        title="TODO web application"\n        src="/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg"\n        srcset="/static/todos-343955e88ab37c2a4bda662cda083cdb-4f5f7.jpg 200w,\n/static/todos-343955e88ab37c2a4bda662cda083cdb-c674a.jpg 400w,\n/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg 679w"\n        sizes="(max-width: 679px) 100vw, 679px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You can</p>\n<ul>\n<li>See a list of todos</li>\n<li>Add a new item to the list</li>\n<li>Modify the description of an existing item</li>\n<li>Delete an item</li>\n</ul>\n<p>For each of the above operations, the frontend code sends an HTTP request to the backend.</p>\n<ul>\n<li>See a list of todos - Frontend sends a HTTP GET request</li>\n<li>Add a new item to the list - Frontend sends a HTTP POST request with the item   description in its body</li>\n<li>Modify the description of an existing item - Frontend sends a HTTP PUT request with the modified description in its body</li>\n<li>Delete an item - Frontend sends a HTTP DELETE request.</li>\n</ul>\n<p>For some of the HTTP requests, additional data is sent along with the request. This data is usually in JSON format. </p>\n<p>HTTP GET request and response (using POSTMAN tool)\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 728px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 89.56043956043956%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3LaRQoAf/8QAFRABAQAAAAAAAAAAAAAAAAAAETD/2gAIAQEAAQUCI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAEFAAAAAAAAAAAAAAAAABEAARAg8P/aAAgBAQABPyGAwRe3/9oADAMBAAIAAwAAABDQCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAACAgEFAAAAAAAAAAAAAAAAAREhkRAxUWHw/9oACAEBAAE/EE0yowJPhYJdBUKEWX5C2Wv/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="HTTP GET"\n        title="HTTP GET"\n        src="/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg"\n        srcset="/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-997ac.jpg 200w,\n/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-80dc7.jpg 400w,\n/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg 728w"\n        sizes="(max-width: 728px) 100vw, 728px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>HTTP POST request and response (using POSTMAN tool)\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 728px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.63186813186812%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe5pSKP/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAACAwAAAAAAAAAAAAAAAAAAIRARUf/aAAgBAQABPyGhjHk//9oADAMBAAIAAwAAABCTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAAMAAgMAAAAAAAAAAAAAAAABESFRkaHw/9oACAEBAAE/EKTqb4F7CbdCZZMn/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="HTTP POST"\n        title="HTTP POST"\n        src="/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg"\n        srcset="/static/todos-post-29eae78a7c22120be29fc5a4e5168746-997ac.jpg 200w,\n/static/todos-post-29eae78a7c22120be29fc5a4e5168746-80dc7.jpg 400w,\n/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg 728w"\n        sizes="(max-width: 728px) 100vw, 728px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>HTTP PUT request and response (using POSTMAN tool)\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 722px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 86.01108033240997%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe5pSKFAD//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEAAQUCH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAARASAhUf/aAAgBAQABPyFGmjnlv//aAAwDAQACAAMAAAAQkwgA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIRAxUZGh8P/aAAgBAQABPxCScpvgXsEbuhCssWmf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="HTTP PUT"\n        title="HTTP PUT"\n        src="/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg"\n        srcset="/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-fcd39.jpg 200w,\n/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-1b616.jpg 400w,\n/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg 722w"\n        sizes="(max-width: 722px) 100vw, 722px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>HTTP DELETE request and response (using POSTMAN tool)\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 726px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 89.80716253443526%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3apFCgB//8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQABBQIf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBESBR/9oACAEBAAE/IakY+j1//9oADAMBAAIAAwAAABAzCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAACAQQDAAAAAAAAAAAAAAAAAREQITGRYaHx/9oACAEBAAE/EFJKb0Ln0R4CccLZcuLFf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="HTTP DELETE"\n        title="HTTP DELETE"\n        src="/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg"\n        srcset="/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-ff6bb.jpg 200w,\n/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-5a0d4.jpg 400w,\n/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg 726w"\n        sizes="(max-width: 726px) 100vw, 726px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is an online TODO web application.\nIt can be used to keep a list of things to do.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 679px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 69.36671575846835%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3qBB/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAwEBAAAAAAAAAAAAAAAAARARAGH/2gAIAQEAAT8hDiAl7v/aAAwDAQACAAMAAAAQ0M//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxBX/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAQACAgMAAAAAAAAAAAAAAREAECExYaHh/9oACAEBAAE/EH2RJxoRWIxj4whW6udtX18z/9k='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"TODO web application",title:"TODO web application",src:"/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg",srcSet:["/static/todos-343955e88ab37c2a4bda662cda083cdb-4f5f7.jpg 200w","/static/todos-343955e88ab37c2a4bda662cda083cdb-c674a.jpg 400w","/static/todos-343955e88ab37c2a4bda662cda083cdb-e2024.jpg 679w"],sizes:["(max-width:","679px)","100vw,","679px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"See a list of todos"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Add a new item to the list"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Modify the description of an existing item"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete an item"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For each of the above operations, the frontend code sends an HTTP request to the backend."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"See a list of todos - Frontend sends a HTTP GET request"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Add a new item to the list - Frontend sends a HTTP POST request with the item   description in its body"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Modify the description of an existing item - Frontend sends a HTTP PUT request with the modified description in its body"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete an item - Frontend sends a HTTP DELETE request."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For some of the HTTP requests, additional data is sent along with the request. This data is usually in JSON format. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP GET request and response (using POSTMAN tool)\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 728px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 89.56043956043956%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3LaRQoAf/8QAFRABAQAAAAAAAAAAAAAAAAAAETD/2gAIAQEAAQUCI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAEFAAAAAAAAAAAAAAAAABEAARAg8P/aAAgBAQABPyGAwRe3/9oADAMBAAIAAwAAABDQCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAACAgEFAAAAAAAAAAAAAAAAAREhkRAxUWHw/9oACAEBAAE/EE0yowJPhYJdBUKEWX5C2Wv/2Q=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"HTTP GET",title:"HTTP GET",src:"/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg",srcSet:["/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-997ac.jpg 200w","/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-80dc7.jpg 400w","/static/todos-get-77b617a08183cf4ea354c6bc4e8473ca-9624d.jpg 728w"],sizes:["(max-width:","728px)","100vw,","728px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP POST request and response (using POSTMAN tool)\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 728px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 80.63186813186812%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe5pSKP/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAACAwAAAAAAAAAAAAAAAAAAIRARUf/aAAgBAQABPyGhjHk//9oADAMBAAIAAwAAABCTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAAMAAgMAAAAAAAAAAAAAAAABESFRkaHw/9oACAEBAAE/EKTqb4F7CbdCZZMn/9k='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"HTTP POST",title:"HTTP POST",src:"/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg",srcSet:["/static/todos-post-29eae78a7c22120be29fc5a4e5168746-997ac.jpg 200w","/static/todos-post-29eae78a7c22120be29fc5a4e5168746-80dc7.jpg 400w","/static/todos-post-29eae78a7c22120be29fc5a4e5168746-9624d.jpg 728w"],sizes:["(max-width:","728px)","100vw,","728px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP PUT request and response (using POSTMAN tool)\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 722px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 86.01108033240997%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe5pSKFAD//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEAAQUCH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAARASAhUf/aAAgBAQABPyFGmjnlv//aAAwDAQACAAMAAAAQkwgA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIRAxUZGh8P/aAAgBAQABPxCScpvgXsEbuhCssWmf/9k='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"HTTP PUT",title:"HTTP PUT",src:"/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg",srcSet:["/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-fcd39.jpg 200w","/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-1b616.jpg 400w","/static/todos-put-ecfd9211f5f13c9df9d10f691897e26a-ad967.jpg 722w"],sizes:["(max-width:","722px)","100vw,","722px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP DELETE request and response (using POSTMAN tool)\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 726px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 89.80716253443526%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3apFCgB//8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQABBQIf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBESBR/9oACAEBAAE/IakY+j1//9oADAMBAAIAAwAAABAzCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAACAQQDAAAAAAAAAAAAAAAAAREQITGRYaHx/9oACAEBAAE/EFJKb0Ln0R4CccLZcuLFf//Z'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"HTTP DELETE",title:"HTTP DELETE",src:"/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg",srcSet:["/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-ff6bb.jpg 200w","/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-5a0d4.jpg 400w","/static/todos-delete-1256c3af340ea1b6c86632fe84a3f2ba-27550.jpg 726w"],sizes:["(max-width:","726px)","100vw,","726px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]}],data:{quirksMode:!1}},fields:{slug:"/http-get-post-put-delete/",prefix:"2019-06-29"},frontmatter:{title:"Http GET,POST,PUT,DELETE",subTitle:null,cover:null}},author:{id:"/home/cypress/website1/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"/home/cypress/website1/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/http-get-post-put-delete/"}}}});
//# sourceMappingURL=path---http-get-post-put-delete-fa6a87e04f23fc5259c9.js.map