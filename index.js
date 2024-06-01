"use strict";

document.getElementById("site-explorer-searchbox").addEventListener("input", async (e) => {
  let searchResult = [];
  if (e.currentTarget.value)
    searchResult = await searchSite(e.currentTarget.value);
  const searchResultDiv = document.getElementById("site-explorer-search-result");
  searchResultDiv.textContent = "";
  let count = 0;
  for (const r of searchResult) {
    if (count >= 4)
      break;
    const anchor = document.createElement("a");
    const badge = document.createElement("div");
    const title = document.createElement("p");
    const url = document.createElement("p");
    anchor.classList.add("search-result-entry-anchor");
    badge.classList.add("search-result-entry");
    title.textContent = r.title;
    title.classList.add("search-result-title");
    url.textContent = r.url;
    url.classList.add("search-result-url");
    badge.appendChild(title);
    badge.appendChild(url);
    anchor.appendChild(badge);
    anchor.href = r.url;
    searchResultDiv.appendChild(anchor);
    count += 1;
  }
});

