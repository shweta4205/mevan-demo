package com.baseclass;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Library_opencart {
	public static WebDriver driver;
	public static Properties prop;
	static Logger logger = Logger.getLogger(Library_opencart.class.getName());
	  
	//to launch the browser
	public void to_launch_browser() throws IOException 
	{
		
		FileInputStream fileIS = new FileInputStream(""); // configuration property path should be here
		prop = new Properties();
		prop.load(fileIS); //Loads the config file
		//logger.info("Property file is loaded");
		String browser = prop.getProperty("browser");
		
		//to launch Chrome browser
		if(browser.equalsIgnoreCase("chrome")) 
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\shwet\\eclipse-workspacejava\\Pomproject\\src\\test\\resources\\Driver\\chromedriver.exe");
			driver = new ChromeDriver();
			logger.info("Chrome Browser is launched ");
		}
		
		//to launch firefox browser
		else if (browser.equalsIgnoreCase("firefox"))
		{
			driver = new FirefoxDriver();
			logger.info("Firefox Browser is launched ");
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
		logger.info("url is entered in the browser");
		
	}
	
	//to clsoe the browser
	public void to_close_browser()
	{
		driver.close();
		logger.info("Window is closed");

}
} 
