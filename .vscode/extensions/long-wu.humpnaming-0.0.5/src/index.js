// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const humpNaming = require("./utils/index").humpNaming;
const Translator = require("./utils/Translator");
const translator = new Translator();

translator.config = {
  from: "zh_CHS", // zh-CHS(中文) || ja(日语) || EN(英文) || fr(法语) ...
  to: "EN",
  appKey: "445b65d7607c4f71", // https://ai.youdao.com 在有道云上进行注册
  secretKey: "4mWeH4uty1I3krjuChKqil6PgVCat0s8",
};

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "humpNaming.executeDefinitionProvider",
    async function (url) {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      const { selection } = activeEditor;
      const selected = activeEditor.document.getText(selection);
      try {
        if (selected.length > 66) {
          return vscode.window.showInformationMessage(
            "亲！太长了不给翻译奥 ~ "
          );
        }
        const resultStr = await translator.translate(selected);
        const resData = JSON.parse(resultStr);
        const targetData = resData.translation[0] || "";
        const humpNamingString = humpNaming(targetData);
        activeEditor.edit((editBuilder) => {
          editBuilder.replace(activeEditor.selection, humpNamingString);
        });
      } catch (error) {
        console.log("error", error);
        vscode.window.showInformationMessage("程序错误" + error);
      }
    }
  );
  context.subscriptions.push(disposable);
}
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
