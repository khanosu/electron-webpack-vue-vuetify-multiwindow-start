import {
  app,
  BrowserWindow,
  Menu
} from "electron";
import path from "path";
import url from "url";

let win = null;
let win1 = null;

app.on("ready", () => {
  win = new BrowserWindow();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.show();

  win.on("closed", () => {
    win = null;
  });

  win1 = new BrowserWindow();

  win1.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index1.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win1.show();

  win1.on("closed", () => {
    win1 = null;
  });

  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(mainMenu)

  app.on('window-all-closed', () => {
    app.quit();
  });

  win = new BrowserWindow();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.show();

  win.on("closed", () => {
    win = null;
  });
});

const menuTemplate = [{
    label: 'File',
    submenu: [{
      label: 'Quit',
      accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click() {
        app.quit();

      }
    }],
  },
  {
    label: 'DevTools',
    submenu: [{
        label: 'Toggle',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  }
]