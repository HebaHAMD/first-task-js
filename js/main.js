
document.getElementById('dateTime').onclick = function () {
    document.getElementById('result').innerHTML = Date();
};

document.getElementById('turnOn').onclick = function () {
    document.getElementById('off').src = 'img/pic_bulbon.gif';
};

document.getElementById('turnOff').onclick = function () {
    document.getElementById('off').src = 'img/pic_bulboff.gif';
};
