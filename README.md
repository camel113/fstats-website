# Doc

Some reminders and documentation

## New workflow to develop and build the static website

We develop and build the static website with node scripts via `package.json`. During dev time, the command `npm start` allow to rebuild the website when anything change inside `_site` folder. There are also two watchers for js and css files. JS is bundled with webpack and sass files are minified. You still have to start the Jekyll server with `jekyll serve` in another terminal tab otherwise it will not make any change inside `_site` folder.

### Dev run

1. `jekyll serve`
2. `npm start` in another terminal tab


## BEM

We use BEM to organise the css.

## Posts

Posts are in `_i18n` folder. You can have post only in `fr` or `de` or in both.

### Regions posts

You can create pages which retrieve all the posts with the category related to a region. For example 
`aff/index.html`
```
---
layout: default
posts_category: aff
data_path_region: aff
---
{% include posts.html %}
```
Will retrieve all the posts with category aff.

## Multilanguages

We use the [jekyll-multiple-languages-plugin](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin) to translate everything. But we made a manual installation with [this code update](https://github.com/blurb/jekyll-multiple-languages-plugin/pull/3/files). We did it because the plugin [won't exclude files containing a front matter](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin/issues/75) even if they are in `exclude_from_localizations:[]`.

`_i18n/fr.yml` and `_i18n/de.yml` contain all the translation.

We had `translate: false` attribute in front matter for the file we do not want to translate.

## Sitemap
Sitemap take all the pages and the posts. `<lastmod>` for posts and page is the post/page `date:` field. If no `date:` in the front matter, no `<lastmod>`.

`<lastmod>` for home page is the date of the last post (`site.posts.first.date`).

In addition to page excluded by the `config.yml` file, the sitemap exclude only the sitemap page.

## Redirections

Redirections are made with Netlify `_redirects` file config.

## Helpers

### Commands

`import/all.rb` import all the data from _parsing_ service.

`import/create.rb` will create resume post for specific region. Edit the end of this file to choose which region to resume. This will create a post with related generated images. Check also line 99 on this file to give the path where the post should be generated.

### Others
for FILE in *.png; do
  convert "$FILE" -resize 100x100 "${FILE%.*}-100x100.png"
done

When you have some problem with Gemfile

`rvm gemset empty`