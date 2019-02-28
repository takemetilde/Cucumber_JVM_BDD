$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/home/hher/Documents/GitHub%20hongiaher%20repo/Cucumber_JVM_BDD/src/test/resources/features/BDDtest.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "Do search",
  "keyword": "When "
});
formatter.match({
  "location": "RunWikipediaTest.clickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Single result is shown for \u0027Cucumber\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RunWikipediaTest.assertSingleResult(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});