function changeContent() {
    const textElement = document.getElementById('dreamJobText');
    const spaceFacts = document.getElementById('spaceFacts');
    const rocketImage = document.getElementById('rocketImage');

    textElement.innerHTML = 'رائد الفضاء يسافر إلى النجوم! 🌟 <br> أحلم بزيارة المريخ يومًا ما!';
    document.body.style.backgroundColor = '#1e3a8a'; // خلفية زرقاء داكنة
    spaceFacts.classList.toggle('hidden');
    spaceFacts.classList.toggle('show');
    rocketImage.src = spaceFacts.classList.contains('show') ? 'download.jpeg' : 'rockt2.jpeg';
}