// Login Redirect plugins
// Author by Almond Technology LLC.
// Version 1.0
// Update time : 2024/08/07

// 获取当前页面的路径
// 方式一 - 跳转主页

// 获取当前页面的路径
const currentPath = window.location.pathname;

if (currentPath === '/') {
    // 鉴权
    fetch('/api/v3/user/storage')
        .then(response => response.json())
        .then(data => {
            // 你可以按照需要去选择规则，默认是无论是已登录还是未登录全部跳转。
            // 401为未登录，0为已登录。
            if (data.code === 401 || data.code === 0) {
                window.location.href = "index.htm";
            }
        })
        .catch(error => console.error('Fetch Error:', error));
}Redirect

// 方式二 - 重写主页
// 因为代码执行顺序问题，以下代码存在Bug，客户端很可能会出现“backed not running”

// // 获取当前页面的路径
// const currentPath = window.location.pathname;

// if (currentPath === '/') {
//     fetch('/api/v3/user/storage')
//         .then(response => response.json())
//         .then(data => {
//             if (data.code === 401 || data.code === 0) {
//                 // 替换当前页面的内容为 index.html 的内容
//                 fetch('index.htm')
//                     .then(response => response.text())
//                     .then(html => document.documentElement.innerHTML = html)
//                     .catch(error => console.error('Fetch Error:', error));
//             }
//         })
//         .catch(error => console.error('Fetch Error:', error));
// }
