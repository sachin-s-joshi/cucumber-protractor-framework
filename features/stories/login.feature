Feature: Login
    I want to Login successfully

@smoke
Scenario Outline: Login 
Given I have matrix dev site
When I login with "<user>" and "<pass>" 
Then I must be logged in successfully
Examples:
|user|pass|
|sachin|joshi|
