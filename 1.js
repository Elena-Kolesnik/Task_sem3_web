const t = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function convert(x) {
    return ((9 / 5) * x + 32);
}
 
alert(`Цельсий: ${t}, Фаренгейт: ${convert(t).toFixed(1)}`);