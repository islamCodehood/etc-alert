import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "etc-alert" is now active!');

    // *** Register the event listener for saving a file ***
    const saveListener = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        vscode.window.showInformationMessage(`Make sure your code is ETC!`);
    });

    // Add the save listener to the subscriptions
    context.subscriptions.push(saveListener);
}

export function deactivate() {}
