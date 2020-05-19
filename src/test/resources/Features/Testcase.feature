@orangeHRM
Feature: OrangeHRM Website

@tc_01_login
Scenario Outline: validate the login functionality

Given Launch the browser and enter the url
When Login page is opened
Then Enter "<username>" and "<password>"
And Click the login Button

Examples:
|username |password|
|Admin    |admin123|


@tc_01_admin
Scenario Outline: Enter values in Admin page
Then Click on Admin
Then Enter username "<username>"
Then Enter userrole "<role>"
Then Enter Employeename "<en>"
Then Select Status "<status>"
Then Click on search button

Examples:
|username|role|en|status|
|hannah.flores|ESS|Hannah Flores|Enabled|
