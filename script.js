function registerForm(e) {
    event.preventDefault(e);
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var user = {
        username: username,
        email: email,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('User berhasil ditambahkan'); 

    if (username != "" && email != "" && pass != "") {
        alert('Berhasil melalukan Pendaftaran');

        return setTimeout(
            function () {
                window.location = "http://127.0.0.1:5500/login.html";
            }, 2000
        );
    } else {
        alert('Anda harus mengisi data dengan lengkap !');

        return setTimeout(
            function () {
                window.location = "http://127.0.0.1:5500/register.html";
            }, 2000
        );
    }
}

function loginForm(e) {
    event.preventDefault(e);
    
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if (username != "" && pass != "") {
        if (user = null) {
            result.innerHTML = 'Username tidak diketahui';
        } else if (username == data.username && pass == data.password) {
            setTimeout(
                function () {
                    window.location = "http://127.0.0.1:5500/index.html";
                }, 2000
            );
            
            result.innerHTML = 'Anda Berhasil Log In';
        } else {
            result.innerHTML = 'Password salah';
        }
    } else {
        alert('Anda harus mengisi data dengan lengkap !');

        return setTimeout(
            function () {
                window.location = "http://127.0.0.1:5500/login.html";
            }, 2000
        );
    }
}