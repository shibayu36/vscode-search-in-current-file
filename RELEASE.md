* `git checkout master && git pull`
* Edit `version` in package.json.
* `vsce package`
* `code --install-extension search-in-current-file-x.y.z.vsix` and check the operation.
* `git add package.json && git commit && git tag vx.y.z && git push && git push --tags`
* `vsce publish`
