var posts=["2023/01/01/Math/","2023/05/10/SSM框架整合/","2023/05/09/hello-world/","2023/05/10/二分模板/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};