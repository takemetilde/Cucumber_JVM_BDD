$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/home/hher/Documents/GitHub%20hongiaher%20repo/Cucumber_JVM_BDD/src/test/resources/features/BDDtest2.feature");
formatter.feature({
  "name": "Search Google",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open https://www.google.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "RunWikipediaTest.openHttpEnWikipediaOrg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "At https://www.google.com/",
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
  "name": "Enter google search term \u0027Cucumber\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "RunWikipediaTest.googleSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Do google search",
  "keyword": "When "
});
formatter.match({
  "location": "RunWikipediaTest.doGoogleSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Google result is shown for \u0027Cucumber\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RunWikipediaTest.assertGoogleResult(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"LC20lb\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615279 (12b89733300bd268cff3b78fc76cb8f3a7cc44e5),platform\u003dLinux 4.15.0-45-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027ubuntu\u0027, ip: \u0027192.168.0.188\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-45-generic\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dLINUX, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:44587}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dLINUX, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615279 (12b89733300bd268cff3b78fc76cb8f3a7cc44e5), userDataDir\u003d/tmp/.org.chromium.Chromium.kfVTAR}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0114d7c508e30575c7e394f357ced9d5\n*** Element info: {Using\u003did, value\u003dLC20lb}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:402)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat steps.RunWikipediaTest.assertGoogleResult(RunWikipediaTest.java:52)\n\tat ✽.Google result is shown for \u0027Cucumber\u0027(file:/home/hher/Documents/GitHub%20hongiaher%20repo/Cucumber_JVM_BDD/src/test/resources/features/BDDtest2.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});