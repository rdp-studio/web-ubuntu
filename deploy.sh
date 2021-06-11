npm run build
cd dist
cp index.html 404.html
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/rdp-studio/RDPStudio-Site.git
git push --set-upstream origin master --force
cd ..
