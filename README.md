### 示範 React, TypeScript, MUI, 和 Recoil 在 2023-03-09 最新版本的 react typescript mui 用法
這個範例專案是一個基於 React, TypeScript, MUI, 和 Recoil 的簡單應用程式。以下是每個檔案的詳細說明：
index.tsx

### 本專案執行方法
```
001 升級到最新工具箱
npm install -g npm@latest
npm install -g n
sudo n latest
yarn set version latest

002 安裝套件並且瀏覽器執行
yarn install
yarn start
```

### 檔案說明
這是專案的入口檔案，它使用 ReactDOM.createRoot 創建了一個根渲染器，然後渲染了 App 元件，並傳入 root DOM 元素。
App.tsx

這個檔案定義了應用程式的路由，它使用 BrowserRouter 元件來包裹 Routes 元件，並在 Routes 元件中定義了兩個路由：/ 和 /register。當路由匹配時，它會渲染對應的頁面。
App.test.tsx

這個檔案是一個單元測試，它使用 render 函數渲染 App 元件，然後通過 getByText 函數來確定頁面是否包含一個特定的文本元素。
pages/HomePage.tsx

這個檔案定義了應用程式的首頁。它包含一個標題和一個按鈕，當按鈕被點擊時，會導航到註冊頁面。
pages/RegisterPage.tsx

這個檔案定義了註冊頁面。它包含一個標題和一個按鈕，當按鈕被點擊時，會導航回首頁。
index.css 和 App.css

這兩個檔案定義了應用程式的樣式。
reportWebVitals.ts

這個檔案定義了一個函數，它可以用來測量應用程式的性能。
react-app-env.d.ts

這個檔案定義了一些額外的類型定義，這些類型定義是在 React 應用程式中使用的。
setupTests.ts

這個檔案是用來設置測試環境的，它使用 import "@testing-library/jest-dom/extend-expect" 來擴展 Jest 的內置匹配器，並在測試運行之前將 jest-enzyme 包裝器添加到 Enzyme 中。
package.json

最後一個檔案是 ./src/ 目錄，它包含了所有應用程式的源代碼。在這個目錄中，除了前面提到的 index.tsx、App.tsx、App.test.tsx、index.css、reportWebVitals.ts、react-app-env.d.ts 和 setupTests.ts 之外，還有以下檔案：

logo.svg
這個檔案是應用程式的圖標。

在這個範例中，./src/ 目錄包含的檔案和目錄比較簡單，但實際應用程式中可能會包含更多的源代碼檔案和資源檔案，例如圖像、樣式表、配置檔等等。

### tree ./src/
./src/
├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── HomePage.tsx
│   └── RegisterPage.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts

### cat package.json 
{
  "name": "react-ts-recoil-mui",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/material": "^5.11.12",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.2",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

### English: Example usage of React, TypeScript, MUI, and Recoil in the latest version as of 2023-03-09 in a react typescript mui project

This sample project is a simple application based on React, TypeScript, MUI, and Recoil. Here are detailed descriptions of each file:

index.tsx

This is the entry file of the project that creates a root renderer using ReactDOM.createRoot and renders the App component by passing in the root DOM element.

App.tsx

This file defines the application's routes. It uses the BrowserRouter component to wrap the Routes component and defines two routes in the Routes component: / and /register. When a route matches, it renders the corresponding page.

App.test.tsx

This file is a unit test that renders the App component using the render function and uses the getByText function to ensure that a specific text element is present on the page.

pages/HomePage.tsx

This file defines the application's home page. It contains a title and a button that, when clicked, navigates to the registration page.

pages/RegisterPage.tsx

This file defines the registration page. It contains a title and a button that, when clicked, navigates back to the home page.

index.css and App.css

These two files define the styles of the application.

reportWebVitals.ts

This file defines a function that can be used to measure the performance of the application.

react-app-env.d.ts

This file defines some additional type definitions that are used in the React application.

setupTests.ts

This file is used to set up the testing environment. It uses import "@testing-library/jest-dom/extend-expect" to extend Jest's built-in matchers and adds the jest-enzyme wrapper to Enzyme before running the tests.

package.json

The last file is the ./src/ directory, which contains all the source code of the application. In this directory, in addition to the previously mentioned files index.tsx, App.tsx, App.test.tsx, index.css, reportWebVitals.ts, react-app-env.d.ts, and setupTests.ts, there are the following files:

logo.svg
This file is the icon of the application.

In this example, the files and directories contained in the ./src/ directory are relatively simple, but in real applications, there may be more source code files and resource files, such as images, style sheets, configuration files, and so on.
tree ./src/

./src/
├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│ ├── HomePage.tsx
│ └── RegisterPage.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts