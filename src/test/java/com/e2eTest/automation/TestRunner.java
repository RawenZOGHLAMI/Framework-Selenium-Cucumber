package com.e2eTest.automation;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = { "src/specs/features" },
		// glue = {""}, path dev des cas de test
		plugin = { "pretty", "html:target/cucumber-html-report","json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/OrangeReport.html" }, 
		snippets = SnippetType.CAMELCASE, 
		tags = {("@searchUsername") }, monochrome = true)

public class TestRunner {

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src/test/ressources/configs/extent-config.xml"));
	}
	
}
