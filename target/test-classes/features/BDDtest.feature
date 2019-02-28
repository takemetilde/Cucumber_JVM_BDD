Feature: Search Wikipedia

  Background:
    Given Open https://en.wikipedia.org/
    Then At https://en.wikipedia.org/

  Scenario: Direct search article
    Given Enter search term 'Cucumber'
    When Do search
    Then Single result is shown for 'Cucumber'
