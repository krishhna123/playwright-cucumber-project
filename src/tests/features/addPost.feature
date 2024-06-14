Feature: Add new post

Scenario: Add new post
 Given I open the login page
    When I fill in the login form with correct credentials
    And I submit the login form
    Then I click on New Post button
    And I fill up the required fields
    And I publish the post
    Then I should see the Article posted
