"use strict";

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    psword = document.querySelector('#psword'),
    confirmPsword = document.querySelector('#confirm-psword'),
    registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
    const req = {
        id : id.value,
        name: name.value,
        psword : psword.value,
        confirmPsword: confirmPsword.value,
    };

    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = '/login';  // 성공하면 페이지 바뀜
            } else {
                alert(res.msg);       // 실패하면 알림
            }
        })
        .catch((err) => {
            console.error('회원가입 중 에러 발생');
        });
}