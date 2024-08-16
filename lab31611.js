// Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";
console.log("mainEl");

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');