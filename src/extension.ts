// The module 'vscode' contains the VS Code extensibility API
// Import the module
import {commands, ExtensionContext, window, StatusBarAlignment}  from 'vscode';
import * as bl from 'battery-level';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "lifesaver" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        window.showInformationMessage('Hello World!');

        var editor = window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        var bat = window.createStatusBarItem(StatusBarAlignment.Right);

        bl().then(lvl => {
            bat.text = `$(plug)` + lvl * 100 + "%";
            bat.show()
        })
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}