$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buttonClick/ButtonClick.feature");
formatter.feature({
  "line": 2,
  "name": "Buttons",
  "description": "I want click on the buttons",
  "id": "buttons",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@buttonClick"
    }
  ]
});
formatter.before({
  "duration": 13328657000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Buttons",
  "description": "",
  "id": "buttons;buttons",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@buttonClick"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open buttons application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I double click on the first button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I right click on the second button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the third button",
  "keyword": "And "
});
formatter.match({
  "location": "ButtonClickStepDef.openButtonsApplication()"
});
formatter.result({
  "duration": 3329661000,
  "status": "passed"
});
formatter.match({
  "location": "ButtonClickStepDef.iDoubleClickOnTheFirstButton()"
});
formatter.result({
  "duration": 239335600,
  "status": "passed"
});
formatter.match({
  "location": "ButtonClickStepDef.iRightClickOnTheSecondButton()"
});
formatter.result({
  "duration": 211070800,
  "status": "passed"
});
formatter.match({
  "location": "ButtonClickStepDef.iClickOnTheThirdButton()"
});
formatter.result({
  "duration": 102624000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"MTQTP\"}\n  (Session info: chrome\u003d85.0.4183.102)\n  (Driver info: chromedriver\u003d85.0.4183.87 (cd6713ebf92fa1cacc0f1a598df280093af0c5d7-refs/branch-heads/4183@{#1689}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 84 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027DESKTOP-MDF3R3A\u0027, ip: \u0027192.168.43.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:58012}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d85.0.4183.87 (cd6713ebf92fa1cacc0f1a598df280093af0c5d7-refs/branch-heads/4183@{#1689}), userDataDir\u003dC:\\Users\\Rawen\\AppData\\Local\\Temp\\scoped_dir17204_2045674018}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d85.0.4183.102, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: dda8b31e613c64a2cb3ffd4395968b95\n*** Element info: {Using\u003did, value\u003dMTQTP}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.e2eTest.automation.ButtonClick.pageObjects.ButtonClickPage.ClickButton(ButtonClickPage.java:36)\r\n\tat com.e2eTest.automation.ButtonClick.stepDefinitions.ButtonClickStepDef.iClickOnTheThirdButton(ButtonClickStepDef.java:48)\r\n\tat ✽.And I click on the third button(buttonClick/ButtonClick.feature:10)\r\n",
  "status": "failed"
});
formatter.write("Current page url is : https://demoqa.com/buttons/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3531065400,
  "status": "passed"
});
});