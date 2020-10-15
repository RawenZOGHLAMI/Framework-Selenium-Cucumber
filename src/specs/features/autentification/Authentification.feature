@authentification
Feature: Authentification - OrangeHRM
  ETQ user je souhaite m'authentifier

  Background: 
    Given open application
    When set username
    And set password
    And click Login button

  @auth
  Scenario: Authentification - OrangeHRM
    Then show page Admin
    


 