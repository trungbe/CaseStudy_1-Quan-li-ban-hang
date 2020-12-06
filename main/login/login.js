function login() {
    let username = document.getElementById('exampleInputEmail').value
    let password = document.getElementById('exampleInputPassword').value
    if (username == "admin" && password == "123456") {
        alert("Bạn Đã Đăng Nhập Với Tư Cách Admin");
        location.replace("http://localhost:63342/startbootstrap-sb-admin-2-gh-pages/main/index.html")

    } else if (username == "user" && password == "123456") {
        alert("Bạn Đã Đăng Nhập Với Tư Cách User");
        location.replace("http://localhost:63342/startbootstrap-sb-admin-2-gh-pages/main/home/home.html")
    }
}



