#Author: your.email@your.domain.com

Feature: To test add triff plan functionality

  Scenario Outline: To verify the sucess message
    Given the user is in add triff plan pag
    When the user fill in valid tariff plan details"<MonthRent>","<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<Intercharges>","<SMScharges>"
    And the user clicks submit button in add tariff plan pag
    Then the user should see the sucess message
    
Examples:
|MonthRent|FreeLocal|FreeInt|FreeSMS|LocalCharges|Intercharges|SMScharges|
|500      |      100|    200|    600|         100|         200|       100|
|500      |      100|    200|    601|         101|         200|       100|
|501      |      100|    200|    602|         102|         201|       101|
@us2
 Scenario Outline: To verify the error message
    Given the user is in add triff plan pag
    When the user fill in blank tariff plan details"<MonthRent>","<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<Intercharges>","<SMScharges>"
    And the user clicks submit button in add tariff plan pag
    Then the user should see the error message
    Examples:
|MonthRent|FreeLocal|FreeInt|FreeSMS|LocalCharges|Intercharges|SMScharges|
|         |         |       |       |            |            |          |