package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;


public class RunWikipediaTest  extends AbstractTestNGCucumberTests{

    private WebDriver driver;

    @Given("^Enter search term '(.*?)'$")
    public void searchFor(String searchTerm) {
        WebElement searchField = driver.findElement(By.id("searchInput"));
        searchField.sendKeys(searchTerm);
    }

    @When("^Do search$")
    public void clickSearchButton() {
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        searchButton.click();
    }

    @Then("^Single result is shown for '(.*?)'$")
    public void assertSingleResult(String searchResult) {
        WebElement results = driver
                .findElement(By.cssSelector("div#mw-content-text.mw-content-ltr p"));
        Assert.assertFalse(results.getText().contains(searchResult + " may refer to:"));
        Assert.assertTrue(results.getText().startsWith(searchResult));
    }

    @Given("^Open (.*?)$")
    public void openHttpEnWikipediaOrg(String url) throws Throwable {
        setupChromeDriver();
        driver = new ChromeDriver();
        driver.get(url);
    }

    public void setupChromeDriver(){
        System.setProperty("webdriver.chrome.driver",
                System.getProperty("user.dir") + "/drivers/chromedriver_win32.exe");
    }

    @AfterMethod
    public void tearDown(){
        driver.quit();
    }

    @Then("^At (.*?)$")
    public void atHttpsEnWikipediaOrg(String url) throws Throwable {
        Assert.assertTrue(driver.getCurrentUrl().startsWith(url));
    }
}
