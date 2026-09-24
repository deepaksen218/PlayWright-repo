# Gherkin syntax

Feature: login

    @ValidLogin
    Scenario: Login Successful with valid credentials
    Given The user is on loginpage
    When User enters in the login page
    Then The inventory page should be displayed


    Scenario: Unsuccessful Login with Invalid credentials
    Given The user is on loginpage
    When User enters invalid credentials
    Then An error message should be displayed

# use BDD tag for categorise the scenario is we have more that one Scenario with '@'