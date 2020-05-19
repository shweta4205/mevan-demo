$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHRM Website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the login Button",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "orangehrm-website;validate-the-login-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "orangehrm-website;validate-the-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "orangehrmloginstep.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 11952988500,
  "status": "passed"
});
formatter.match({
  "location": "orangehrmloginstep.login_page_is_opened()"
});
formatter.result({
  "duration": 1152405400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 7
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "orangehrmloginstep.enter_and(String,String)"
});
formatter.result({
  "duration": 1334499500,
  "status": "passed"
});
formatter.match({
  "location": "orangehrmloginstep.click_the_login_Button()"
});
formatter.result({
  "duration": 532200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Enter values in Admin page",
  "description": "",
  "id": "orangehrm-website;enter-values-in-admin-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@tc_01_admin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Click on Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter userrole \"\u003crole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter Employeename \"\u003cen\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Select Status \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "orangehrm-website;enter-values-in-admin-page;",
  "rows": [
    {
      "cells": [
        "username",
        "role",
        "en",
        "status"
      ],
      "line": 27,
      "id": "orangehrm-website;enter-values-in-admin-page;;1"
    },
    {
      "cells": [
        "hannah.flores",
        "ESS",
        "Hannah Flores",
        "Enabled"
      ],
      "line": 28,
      "id": "orangehrm-website;enter-values-in-admin-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Enter values in Admin page",
  "description": "",
  "id": "orangehrm-website;enter-values-in-admin-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@tc_01_admin"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Click on Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"hannah.flores\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter userrole \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter Employeename \"Hannah Flores\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Select Status \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.match({
  "location": "orangehrmloginstep1.click_on_Admin()"
});
formatter.result({
  "duration": 1158511700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hannah.flores",
      "offset": 16
    }
  ],
  "location": "orangehrmloginstep1.enter_username(String)"
});
formatter.result({
  "duration": 203961200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 16
    }
  ],
  "location": "orangehrmloginstep1.enter_userrole(String)"
});
formatter.result({
  "duration": 247884900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hannah Flores",
      "offset": 20
    }
  ],
  "location": "orangehrmloginstep1.enter_Employeename(String)"
});
formatter.result({
  "duration": 232390400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 15
    }
  ],
  "location": "orangehrmloginstep1.select_Status(String)"
});
formatter.result({
  "duration": 172085100,
  "status": "passed"
});
formatter.match({
  "location": "orangehrmloginstep1.click_on_search_button()"
});
formatter.result({
  "duration": 438381800,
  "status": "passed"
});
});