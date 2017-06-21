bundle exec jekyll serve

for FILE in *.png; do
  convert "$FILE" -resize 100x100 "${FILE%.*}-100x100.png"
done