package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static junit.framework.TestCase.assertTrue;

public class RunWikipediaTest{

    private WebDriver driver;
    final private String OSName = System.getProperty("os.name");

    @Given("^Enter search term '(.*?)'$")
    public void searchFor(String searchTerm) {
        WebElement searchField = driver.findElement(By.id("searchInput"));
        searchField.sendKeys(searchTerm);
    }

    @Given("^Enter google search term '(.*?)'$")
    public void googleSearchFor(String searchTerm) {
        WebElement searchField = driver.findElement(By.name("q"));
        searchField.sendKeys(searchTerm);
    }

    @When("^Do search$")
    public void clickSearchButton() {
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        searchButton.click();
    }

    @When("^Do google search$")
    public void doGoogleSearch() {
        WebElement searchField = driver.findElement(By.name("q"));
        searchField.submit();
    }

    @Then("^Single result is shown for '(.*?)'$")
    public void assertSingleResult(String searchResult) {
        WebElement results = driver
                .findElement(By.id("firstHeading"));
        assertTrue(results.getText().contains(searchResult));
    }

    @Then("^Google result is shown for '(.*?)'$")
    public void assertGoogleResult(String searchResult) {
        WebElement results = driver.findElement(By.id("LC20lb"));
        assertTrue(results.getText().contains(searchResult));
    }

    @Given("^Open (.*?)$")
    public void openHttpEnWikipediaOrg(String url) throws Throwable {
        setupChromeDriver();
        driver = new ChromeDriver();
        driver.get(url);
    }

    public void setupChromeDriver(){
        System.out.println(OSName);
        switch (OSName){
            case "Linux": System.setProperty("webdriver.chrome.driver",
                    System.getProperty("user.dir") + "/drivers/chromedriver_linux64.exe");
            break;
            case "Windows": System.setProperty("webdriver.chrome.driver",
                    System.getProperty("user.dir") + "/drivers/chromedriver_win32.exe");
            break;
            default: throw new IllegalStateException("There are no drivers compatible with OS: " + OSName);
        }
    }

    @After
    public void tearDown(){
        driver.close();
    }

    @Then("^At (.*?)$")
    public void atHttpsEnWikipediaOrg(String url) throws Throwable {
        assertTrue(driver.getCurrentUrl().startsWith(url));
    }
}
