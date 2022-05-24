Feature: User navigate pages


Scenario: User can navigate to feed page
When User click feed
Then User will redirect to the feed page

Scenario: User can navigate to directory page
When User click people
Then User will redirect to the directory page

Scenario: User can navigate dashboard page
When User click Daily Review
Then User will redirect to the dashboard page

Scenario: User see notification modal
When User click notification
Then Notification modal should show

Scenario: User can navigate to profile page
When User click profile menu
And User click my profile
Then User profile page show