'use strict';

const e = React.createElement;

function MyHD() {
    if (i == 2) {
        i++;
        return e('div', { className: "adjHeader" },
            e('a', { href: "index.html", className: "a-logo" },
                e('div', { className: "logo" }, 'CN')
            ),
            e('p', { className: "header-text" }, 'Este é um site para estudos de Front-End')
        )
    } else {
        return e('div', { className: "adjHeader" },
            e('a', { href: "index.html", className: "a-logo" },
                e('div', { className: "logo" }, 'CN')
            ),
        )
    }
}
let i = 0;
const header = document.querySelectorAll("div.home-header");
for (i; i < header.length; i++) {
    let root = ReactDOM.createRoot(header[i]);
    root.render(e(MyHD))
}