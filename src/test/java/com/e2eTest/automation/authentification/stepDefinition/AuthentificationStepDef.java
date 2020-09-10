package com.e2eTest.automation.authentification.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.utils.CommonMethods;
import com.e2eTest.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDef extends CommonMethods {

	public WebDriver driver ; 
	private AuthentificationPage authentificationPage = new AuthentificationPage(driver);
	private CommonMethods commonMethods = new CommonMethods();
	public AuthentificationStepDef() {
		driver = Setup.driver;
	}

	@Given("^open application$")
	public void openApplication() throws Throwable {
		logger.info("Open application Orange");
		commonMethods.openBrowserWithConfigFile("url1");
	}

	@When("^set username$")
	public void setUsername() throws Throwable {
		logger.info("Send username");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.sendUserName();
	}

	@When("^set password$")
	public void setPassword() throws Throwable {
		logger.info("Send password");
		authentificationPage.sendPassword();
	}



	@When("^click Login button$")
	public void clickLoginButton() throws Throwable {
		logger.info("Click n Login button");
		authentificationPage.clickLoginButton();
	}

	@Then("^show page Admin$")
	public void showPageAdmin() throws Throwable {
		logger.info("Show admin page");
		String wlc = AuthentificationPage.welcome.getText();
		Assert.assertTrue(wlc.contains("Welcome"));
	}

	@When("^click on Admin$")
	public void clickOnAdmin() throws Throwable {
		logger.info("Click on admin link");
		authentificationPage.clickLinkAdmin();
	}

	@When("^click on Buzz$")
	public void clickOnBuzz() throws Throwable {
		logger.info("Click on buzz link");
		authentificationPage.clickLinkBuzz();
	}

}
