* `git checkout master && git pull`
* Edit `version` in package.json.
* `vsce package`
* `code --install-extension find-in-current-file-x.y.z.vsix` and check the operation.
* `git add package.json && git commit && git tag vx.y.z && git push && git push --tags`
* `vsce publish --yarn`

Alternatively you can publish the extension via the marketplace web portal.
* Login https://marketplace.visualstudio.com/vscode
* Click 'Publish extensions' 
* Click 'New extension'/'vs code' and upload the `find-in-current-file-x.y.z.vsix` file built by vsce.
* It takes a few minutes to approve.
* Then search the extension in the marketplace by the full name with double quote, e.g. "find in current file", to confirm.
