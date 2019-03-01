$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/dev/GitHub/Cucumber_JVM_BDD/src/test/resources/features/BDDtest.feature");
formatter.feature({
  "name": "Search Wikipedia",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open https://en.wikipedia.org/",
  "keyword": "Given "
});
formatter.match({
  "location": "RunWikipediaTest.openHttpEnWikipediaOrg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At https://en.wikipedia.org/",
  "keyword": "Then "
});
formatter.match({
  "location": "RunWikipediaTest.atHttpsEnWikipediaOrg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Direct search article",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter search term \u0027Cucumber\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "RunWikipediaTest.searchFor(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LF6LKFH2\u0027, ip: \u002730.238.83.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\AF62094\\AppData\\Local\\Temp\\1\\scoped_dir13812_24786}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d72.0.3626.119, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: bbe94e264c0d62ef4979b1fe9ea69329\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat steps.RunWikipediaTest.searchFor(RunWikipediaTest.java:22)\r\n\tat ✽.Enter search term \u0027Cucumber\u0027(file:/C:/dev/GitHub/Cucumber_JVM_BDD/src/test/resources/features/BDDtest.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Do search",
  "keyword": "When "
});
formatter.match({
  "location": "RunWikipediaTest.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Single result is shown for \u0027Cucumber\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RunWikipediaTest.assertSingleResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});