Feature: Conduit login functionality

Scenario: Login with correct credentials
    Given I open the login page
    When I fill in the login form with correct credentials
    And I submit the login form
    Then I should see Your Feed
    And I should see Your Feed


    