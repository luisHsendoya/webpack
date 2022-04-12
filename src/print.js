export function printMe(func) {
    const btn = document.createElement('button');
    btn.innerText = "'Click me and check the console!";
    btn.onclick = func();
    document.body.appendChild(btn);
}