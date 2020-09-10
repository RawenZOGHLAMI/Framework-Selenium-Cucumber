package com.e2eTest.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = { "src/specs/features" },
		// glue = {""}, path dev des cas de test
		plugin = { "pretty", "html:target/cucumber-html-report" }, 
		snippets = SnippetType.CAMELCASE, 
		tags = {("@authentification") }, monochrome = true)

public class TestRunner {

}
