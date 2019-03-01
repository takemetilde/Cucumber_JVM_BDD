import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"/home/hher/Documents/GitHub hongiaher repo/Cucumber_JVM_BDD/src/test/resources/features/BDDtest2.feature"},
        plugin = {"json:/home/hher/Documents/GitHub hongiaher repo/Cucumber_JVM_BDD/target/generated-test-sources/cucumber/2.json", "junit:/home/hher/Documents/GitHub hongiaher repo/Cucumber_JVM_BDD/target/generated-test-sources/cucumber/2.xml", "html:/home/hher/Documents/GitHub hongiaher repo/Cucumber_JVM_BDD/target/generated-test-sources/cucumber/2"},
        monochrome = true,
        tags = {},
        glue = {"steps/"})
public class Parallel002Bddtest2 {
}
