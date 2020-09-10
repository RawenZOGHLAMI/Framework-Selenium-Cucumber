package com.e2eTest.automation.authentification.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AuthentificationPage {

	WebDriver driver;

	public AuthentificationPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	final static String USER_NAME_ID = "txtUsername";
	final static String PASSWORD_ID = "txtPassword";
	final static String BUTTON_LOGIN_ID = "btnLogin";
	final static String WELCOME_ID = "welcome";

	final static String ADMIN_ID = "//b[contains(text(),'Admin')]";
	final static String BUZZ_ID = "//b[contains(text(),'Buzz')]";

	/* @FindBy */

	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how = How.ID, using = PASSWORD_ID)
	public static WebElement password;
	@FindBy(how = How.ID, using = BUTTON_LOGIN_ID)
	public static WebElement BtnLogin;
	@FindBy(how = How.ID, using = WELCOME_ID)
	public static WebElement welcome;

	@FindBy(how = How.XPATH, using = ADMIN_ID)
	public static WebElement LinkAdmin;
	@FindBy(how = How.XPATH, using = BUZZ_ID)
	public static WebElement LinkBuzz;

	/* Methods */

	public void sendUserName() {
		userName.sendKeys("Admin");
	}

	public void sendPassword() {
		password.sendKeys("admin123");
	}

	public void clickLoginButton() {
		BtnLogin.click();
	}

	public void clickLinkAdmin() {
		LinkAdmin.click();
	}

	public void clickLinkBuzz() {
		LinkBuzz.click();
	}

}
