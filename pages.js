"use strict";

(async () => {
  const ul = document.getElementById("pages-list");
  const idx = await getSearchIndex();
  for (const e of idx.pages) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.textContent = e.title;
    anchor.href = e.url;
    li.appendChild(anchor);
    ul.appendChild(li);
  }
})();
