package com.e2eTest.automation.ButtonClick.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.ButtonClick.pageObjects.ButtonClickPage;

import com.e2eTest.automation.utils.CommonMethods;
import com.e2eTest.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class ButtonClickStepDef extends CommonMethods {

	public WebDriver driver;
	private CommonMethods commonMethhods = new CommonMethods();
	private ButtonClickPage buttonClickPage = new ButtonClickPage(driver);
	Actions action;
	
	public ButtonClickStepDef() {
		driver = Setup.driver;
		action=new Actions(driver);
	}

	@Given("^Open buttons application$")
	public void openButtonsApplication() throws Throwable {
		commonMethhods.openBrowserWithConfigFile("url2");
	}

	@When("^I double click on the first button$")
	public void iDoubleClickOnTheFirstButton() throws Throwable {
		PageFactory.initElements(driver, ButtonClickPage.class);
		WebElement button1 = ButtonClickPage.button1;
		action.doubleClick(button1).perform();
	}

	@When("^I right click on the second button$")
	public void iRightClickOnTheSecondButton() throws Throwable {
		WebElement button2 = ButtonClickPage.button2;
		action.contextClick(button2).perform();
	}

	@When("^I click on the third button$")
	public void iClickOnTheThirdButton() throws Throwable {
		buttonClickPage.ClickButton();
	}

}
