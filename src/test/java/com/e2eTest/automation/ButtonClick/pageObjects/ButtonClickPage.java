package com.e2eTest.automation.ButtonClick.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ButtonClickPage {

	WebDriver driver;

	public ButtonClickPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	final static String BUTTON_1_ID = "doubleClickBtn";
	final static String BUTTON_2_ID = "rightClickBtn";
	final static String BUTTON_3_ID = "MTQTP"; // id dynamique

	/* @FindBy */

	@FindBy(how = How.ID, using = BUTTON_1_ID)
	public static WebElement button1;

	@FindBy(how = How.ID, using = BUTTON_2_ID)
	public static WebElement button2;

	@FindBy(how = How.ID, using = BUTTON_3_ID)
	public static WebElement button3;

	/* Methods */

	public void ClickButton() {
		button3.click();
	}
}
