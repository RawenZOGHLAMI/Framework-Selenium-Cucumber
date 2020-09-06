@patientMedicalForm
Feature: send form -Medical
  I want to fill in the patient form

  @form
  Scenario: send form -Medical
    Given Open medical application
    When set firstname
    And set lastname
    And click on submit
