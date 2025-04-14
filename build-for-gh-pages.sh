
#!/bin/bash

# Build the project
npm run build

# Create or switch to the gh-pages branch
git checkout -B gh-pages

# Remove all tracked files
git rm -rf .

# Move the built files to the root
mv dist/* .

# Add a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Add all files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch
git push -f origin gh-pages

# Switch back to the main branch
git checkout main

echo "Deployment complete! Your site should be available at https://[your-username].github.io/[your-repo-name]/"
