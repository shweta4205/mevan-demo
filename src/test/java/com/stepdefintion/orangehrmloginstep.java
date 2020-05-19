package com.stepdefintion;



import java.io.IOException;
import java.util.logging.Logger;

import com.baseclass.Library;
import com.pages.Orangelogin;
import com.seleniumutils.Seleniumutils;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

	public class orangehrmloginstep extends Library{
	Orangelogin login;
	Seleniumutils s;
	
	static Logger logger = Logger.getLogger(Library.class.getName());
	
	@Given("^Launch the browser and enter the url$")
	public void launch_the_browser_and_enter_the_url() throws IOException {
	lunchapplication();
	}

	@When("^Login page is opened$")
	public void login_page_is_opened() throws IOException {
	s=new Seleniumutils(driver);
	s.getTitle();
	s.screenshot("src\\test\\resources\\Screenshorts\\login.png");

	}

	@Then("^Enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String username, String password) {
	login = new Orangelogin(driver);
	login.Orangehrmlogin1(username, password);

	}
	@Then("^Click the login Button$")
	public void click_the_login_Button()  {
    
		logger.info("successfully login");
	//login.click_the_login_Button();
	// driver.close();
	}


	}


