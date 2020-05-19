package com.stepdefintion;

import java.io.IOException;

import com.baseclass.Library;
import com.pages.Adminpage;


import com.seleniumutils.Seleniumutils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class orangehrmloginstep1 extends Library {
	Adminpage OA;
	Seleniumutils s;
	
	
	@Then("^Click on Admin$")
	public void click_on_Admin() {
	OA=new Adminpage(driver);
	
	OA.SeeclickAdmin();
	
	}
   @Then("^Enter username \"([^\"]*)\"$")
	public void enter_username(String username){
		 OA.typeusername(username);
	}

	@Then("^Enter userrole \"([^\"]*)\"$")
	public void enter_userrole(String role) {
	   
		OA.selectuserrole(role);
	}
	@Then("^Enter Employeename \"([^\"]*)\"$")
	public void enter_Employeename(String en) {
		 OA.typeemployeename(en);
	}

   @Then("^Select Status \"([^\"]*)\"$")
   public void select_Status(String status)  {
	 OA.selectstatus(status);
}

	@Then("^Click on search button$")
	public void click_on_search_button()  {
	   OA.clicksearchbutton();
	}
	
	
}
	

	

	    




