/*
Copyright 2019 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export const dashboardBase = 'dashboard';
export function dashboardLink(filter?: string, sort?: string) {
  let ret = `/${dashboardBase}`;
  if (filter) {
    ret = `${ret}/${filter}`;
  }
  if (sort) {
    ret = `${ret}/${sort}`;
  }
  return ret;
}

export const settingsBase = 'settings';
export function settingsLink() {
  return `/${settingsBase}`;
}

export const searchBase = 'search';
export function searchLink(article?: string) {
  if (article) {
    return `/${searchBase}?articleId=${article}`;
  }
  return `/${searchBase}`;
}
export function authorSearchLink(article?: string) {
  if (article) {
    return `${searchBase}?searchByAuthor=true&articleId=${article}`;
  }
  return `${searchBase}?searchByAuthor=true`;
}

export const articleBase = 'articles';
export const categoryBase = 'categories';
export function commentPageLink(base: string, id: string, type: string, tag?: string) {
  let suffix;
  if (type === 'new') {
    suffix = 'new';
  }
  else {
    suffix = 'moderated/' + type;
  }
  if (tag) {
    return `/${base}/${id}/${suffix}/${tag}`;
  }
  return `/${base}/${id}/${suffix}`;
}
export function articlesLink(id: string, type: string) {
  return commentPageLink(articleBase, id, type);
}
export function categoriesLink(id: string, type: string) {
  return commentPageLink(categoryBase, id, type);
}

export const tagSelectorBase = 'tagselector';
export function tagSelectorLink(base: string, id: string, currentTag: string) {
  return `/${tagSelectorBase}/${base}/${id}/${currentTag}`;
}
