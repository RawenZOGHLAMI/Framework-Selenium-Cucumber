$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchUsername/searchUsername.feature");
formatter.feature({
  "line": 2,
  "name": "Search username",
  "description": "I want to search for a specific username",
  "id": "search-username",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 21506386400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "open application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "set username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "set password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "show page Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDef.openApplication()"
});
formatter.result({
  "duration": 5992739200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setUsername()"
});
formatter.result({
  "duration": 558876400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setPassword()"
});
formatter.result({
  "duration": 469593600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 4919336600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.showPageAdmin()"
});
formatter.result({
  "duration": 67283800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search username",
  "description": "",
  "id": "search-username;search-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@searchUsername"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Click on ADMIN link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Type a username",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on serach",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user name will appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchUsernameStepDef.clickOnADMINLink()"
});
formatter.result({
  "duration": 1678081600,
  "status": "passed"
});
formatter.match({
  "location": "SearchUsernameStepDef.typeAUsername()"
});
formatter.result({
  "duration": 382289700,
  "status": "passed"
});
formatter.match({
  "location": "SearchUsernameStepDef.clickOnSerach()"
});
formatter.result({
  "duration": 877135500,
  "status": "passed"
});
formatter.match({
  "location": "SearchUsernameStepDef.theUserNameWillAppear()"
});
formatter.result({
  "duration": 48834400,
  "status": "passed"
});
formatter.after({
  "duration": 79800,
  "status": "passed"
});
});