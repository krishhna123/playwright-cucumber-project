Feature: Validate error messages on invalid input

Scenario: Validate error messages on invalid input
Given I open the login page
When I enter invalid "<username>" and "<password>"
And I submit the login form
Then I should see an error message

Examples:
| username | password |
| admin@gmail.com    | admin    |
| admin@gmail.com    | admin§123     |