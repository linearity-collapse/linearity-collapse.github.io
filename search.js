"use strict";

/*
async function getSearchIndex() {
  const cache = window.localStorage.getItem("searchIndex");
  if (cache)
    return JSON.parse(cache);
  const fetchResult = await fetch("/index.json").then((r) => r.json());
  fetchResult["_fetchTime"] = new Date().getTime();
  window.localStorage.setItem("searchIndex", JSON.stringify(fetchResult));
  return fetchResult;
}
*/

let searchIndexCache = null;

async function getSearchIndex() {
  if (searchIndexCache)
    return searchIndexCache;
  const fetchResult = await fetch("/index.json").then((r) => r.json());
  fetchResult["_fetchTime"] = new Date().getTime();
  searchIndexCache = fetchResult;
  return fetchResult;
}

async function searchSite(query) {
  return getSearchIndex().then(async (obj) => {
    const result = [];
    for (const pg of obj.pages) {
      if (pg.title.toLowerCase().includes(query.toLowerCase())) {
        result.push(pg);
      } else if (pg.url.toLowerCase().includes(query.toLowerCase())) {
        result.push(pg);
      }
    }
    return result;
  }).catch(console.error);
}

