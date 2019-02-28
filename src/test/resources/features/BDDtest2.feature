Feature: Search Google

  Background:
    Given Open https://www.google.com/
    Then At https://www.google.com/

  Scenario: Direct search article
    Given Enter google search term 'Cucumber'
    When Do google search
