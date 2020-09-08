@PrintData
Feature: Print data - Text Box
  As a user I want to print my data

  @PrintData
  Scenario Outline: Print data - Text Box
    Given Open Text Box application
    When I want to print fullname "<Fullname>"
    When I want to print email "<Email>"

    Examples: 
      | Fullname | Email           |
      | test     | test@gmail.com  |
      | test2    | test2@gmail.com |
