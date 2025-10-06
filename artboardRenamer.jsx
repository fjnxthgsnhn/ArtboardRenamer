// Adobe Illustrator用 ExtendScript
var doc = app.activeDocument;
var win = new Window("dialog", "アートボード名を入力してください");
win.orientation = "column";
win.alignChildren = ["fill", "top"];
win.add("statictext", undefined, "共通のアートボード名:");
var nameInput = win.add("edittext", undefined, "アートボード");
nameInput.characters = 20;
var btns = win.add("group");
btns.alignment = "right";
var okBtn = btns.add("button", undefined, "OK", {name:"ok"});
var cancelBtn = btns.add("button", undefined, "キャンセル", {name:"cancel"});

if(win.show() == 1) {
  var baseName = nameInput.text;
  for (var i = 0; i < doc.artboards.length; i++) {
    var idx = (i + 1).toString();
    if (idx.length === 1) idx = "0" + idx;
    doc.artboards[i].name = baseName + " - " + idx;
  }
}
