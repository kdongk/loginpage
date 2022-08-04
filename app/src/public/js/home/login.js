"use strict";

const id = document.querySelector('#id'),
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = '/';  // 성공하면 페이지 바뀜
            } else {
                alert(res.msg);       // 실패하면 알림
            }
        })
        .catch((err) => {
            console.error('로그인 중 에러 발생');
        });
}