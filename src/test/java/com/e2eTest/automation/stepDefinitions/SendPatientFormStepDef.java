package com.e2eTest.automation.stepDefinitions;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


import com.e2eTest.automation.pageObject.SendPatientFormPage;
import com.e2eTest.automation.utils.CommonMethods;
import com.e2eTest.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class SendPatientFormStepDef extends CommonMethods {

	public WebDriver driver ; 
	private SendPatientFormPage sendPatientFormPage = new SendPatientFormPage(driver);
	
	public SendPatientFormStepDef() {
		driver = Setup.driver ;
	}

	@Given("^Open medical application$")
	public void open_medical_application() throws Throwable {
		String url = "https://form.jotform.com/81665408084158/";
		driver.get(url);
	}

	@When("^set firstname$")
	public void set_firstname() throws Throwable {
		PageFactory.initElements(driver, SendPatientFormPage.class);
		sendPatientFormPage.sendFirstName();
	}

	@When("^set lastname$")
	public void set_lastname() throws Throwable {
		sendPatientFormPage.sendLastName();
	}

	@When("^click on submit$")
	public void click_on_submit() throws Throwable {
		CommonMethods.scrollerBottom();
		sendPatientFormPage.submitForm();
	}

}
