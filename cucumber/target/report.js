$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Add triff plan functionality.feature");
formatter.feature({
  "name": "To test add triff plan functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us2"
    }
  ]
});
formatter.step({
  "name": "the user is in add triff plan pag",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in blank tariff plan details\"\u003cMonthRent\u003e\",\"\u003cFreeLocal\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocalCharges\u003e\",\"\u003cIntercharges\u003e\",\"\u003cSMScharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan pag",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLocal",
        "FreeInt",
        "FreeSMS",
        "LocalCharges",
        "Intercharges",
        "SMScharges"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us2"
    }
  ]
});
formatter.step({
  "name": "the user is in add triff plan pag",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.the_user_is_in_add_triff_plan_pag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in blank tariff plan details\"\",\"\",\"\",\"\",\"\",\"\",\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.the_user_fill_in_blank_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan pag",
  "keyword": "And "
});
formatter.match({
  "location": "steps.the_user_clicks_submit_button_in_add_tariff_plan_pag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.the_user_should_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
});