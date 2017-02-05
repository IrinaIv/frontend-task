function drawRating(vote) {
    if (vote <= 20) {
        return '★☆☆☆☆';
    } else if (vote <= 40) {
        return '★★☆☆☆';
    } else if (vote <= 60) {
        return '★★★☆☆';
    } else if (vote <= 80) {
        return '★★★★☆';
    } else {
        return '★★★★★';
    }
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★