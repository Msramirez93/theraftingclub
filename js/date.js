const yearElement = document.querySelector("#date");
yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

document.querySelector('#lastmod').textContent = document.lastModified;
