package stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/resources/feature/",tags={"@us2"},strict=true,glue="stepdefinition",dryRun=false,plugin="html:target")
public class TestRunner{
}
