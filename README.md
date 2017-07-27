# Doc

Some reminders and documentation

## Posts

Posts are in `_i18n` folder. You can have post only in `fr` or `de` or in both.

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

### Others
for FILE in *.png; do
  convert "$FILE" -resize 100x100 "${FILE%.*}-100x100.png"
done

When you have some problem with Gemfile

`rvm gemset empty`