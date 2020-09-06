$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("autentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification -OrangeHRM",
  "description": "\nETQ user je souhaite m\u0027authentifier",
  "id": "authentification--orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentification"
    }
  ]
});
formatter.before({
  "duration": 11506541700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Authentification -OrangeHRM",
  "description": "",
  "id": "authentification--orangehrm;authentification--orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@auth"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "open application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "set username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "set password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "show page admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDef.openApplication()"
});
formatter.result({
  "duration": 8206311100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setUsername()"
});
formatter.result({
  "duration": 155257800,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setPassword()"
});
formatter.result({
  "duration": 116248000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 24637057200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.showPageAdmin()"
});
formatter.result({
  "duration": 60107700,
  "status": "passed"
});
formatter.after({
  "duration": 2333902400,
  "status": "passed"
});
formatter.uri("patientMedicalForm/PatientMedicalForm.feature");
formatter.feature({
  "line": 2,
  "name": "send form -Medical",
  "description": "I want to send the patient form",
  "id": "send-form--medical",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@patientMedicalForm"
    }
  ]
});
formatter.before({
  "duration": 10022142400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "send form -Medical",
  "description": "",
  "id": "send-form--medical;send-form--medical",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@form"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open medical application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "set firstname",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "set lastname",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "SendPatientFormStepDef.open_medical_application()"
});
formatter.result({
  "duration": 6441566200,
  "status": "passed"
});
formatter.match({
  "location": "SendPatientFormStepDef.set_firstname()"
});
formatter.result({
  "duration": 124854400,
  "status": "passed"
});
formatter.match({
  "location": "SendPatientFormStepDef.set_lastname()"
});
formatter.result({
  "duration": 95271900,
  "status": "passed"
});
formatter.match({
  "location": "SendPatientFormStepDef.click_on_submit()"
});
formatter.result({
  "duration": 652037500,
  "status": "passed"
});
formatter.after({
  "duration": 2449810900,
  "status": "passed"
});
});