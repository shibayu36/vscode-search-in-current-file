import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "search-in-current-file" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "search-in-current-file.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from search-in-current-file!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
