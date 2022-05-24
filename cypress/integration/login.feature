Feature: user visit identifi


Scenario: user view identifi login page
Then User should see "Identifi beta"

Scenario: User cant login with invalid email
When User enter email "invalidemail@gmail.com"
Then User see error message

Scenario: User cant login with invalid password
When User enter email address "clarkjay567@gmail.com"
And User enter password "wrongpassword"
Then User prompt message show

Scenario: User can login valid credentials
When User enter email "clarkjay567@gmail.com"
And User enter password "p@ssw0rd!"
Then user will logged in

