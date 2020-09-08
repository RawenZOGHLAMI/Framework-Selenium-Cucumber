package com.e2eTest.automation.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


import com.e2eTest.automation.pageObject.PrintDataOutLinePage;
import com.e2eTest.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class PrintDataOutLineStepDef {
	
	WebDriver driver ; 
	private PrintDataOutLinePage printDataOutLinePage =  new PrintDataOutLinePage(driver);
	
	public PrintDataOutLineStepDef() {
		driver = Setup.driver;
	}
	
	@Given("^Open Text Box application$")
	public void openTextBoxApplication() throws Throwable {
		String url = "https://demoqa.com/text-box";
		driver.get(url);
	}

	@When("^I want to print fullname \"([^\"]*)\"$") // mapping
	public void iWantToPrintFullname(String fullName) throws Throwable {
		PageFactory.initElements(driver, PrintDataOutLinePage.class);
		printDataOutLinePage.sendFullName(fullName);
	    
	}

	@When("^I want to print email \"([^\"]*)\"$")
	public void iWantToPrintEmail(String email) throws Throwable {
		printDataOutLinePage.sendEmail(email);
	}



}
