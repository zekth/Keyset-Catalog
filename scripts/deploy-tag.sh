rm -rf .git
cd dist
git init
git remote add origin https://github.com/${TRAVIS_REPO_SLUG}
git pull origin config

rm -rf .git
git init

git config user.name "Keyset Catalog Bot"

git add .
git commit -m "Deploy tag ${TRAVIS_COMMIT}"

git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}" master:staging > /dev/null 2>&1
