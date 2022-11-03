$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});

function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}

function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}

function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `너라서 사랑스럽다`;
            let author = `엄마`;
            $('#content').text(content);
            $('#author').text(author);
        });
}

function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `내 기분은 내가 정해. 오늘은 행복이야! i'll decide how ifeel, i'll be happy today!`;
            let author = `이상한 나라의 앨리스`;
            $('#content').text(content);
            $('#author').text(author);
        });
}
