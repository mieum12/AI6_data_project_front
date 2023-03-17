import { httpClient } from "./httpClient";

export async function fetchFire() {
  try {
    const data = await httpClient.get("/fire");
    return data.data;
  } catch (err) {
    throw err;
  }

  // index.html <- <div id="app"></div>
  // bundle.js  <-react
  useEffect();
}

// `
// GET / HTTP/1.1
// header~~

// body~~
// ``
// HTTP/1.1 200 OK
// Content-Type: text/html
// Content-Length: 44

// <html>
//     <body>
//     asdasdasdasdasdasd
//     </body>
// </html>
// `;

// const VDOM = {
//     version: 5,
//     head: "<head></head>",
//     body: {
//       10
//       child: ButtonElement(),
//     },
// }

// const DOM = {
//   version: 5,
//   head: "<head></head>",
//   body: {
//      100
//     child: ButtonElement(), <-

//   },
// };

// document.querySelector("body").appendChild("button");

// const str = `<html>
// <body>
//     ........
// </body>
// </html>`;
