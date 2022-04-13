import { getDriver } from './helpers';
import { until, By, Key } from 'selenium-webdriver';

let driver;

beforeAll(() => {
  driver = getDriver();
});

afterAll(async () => {
  await driver.quit();
});

const createTask = async (taskName) => {
  await driver.wait(
    until.elementLocated(By.xpath("//input[@placeholder='Enter new task']")),
    1000
  );
  const input = await driver.findElement(
    By.xpath("//input[@placeholder='Enter new task']")
  );
  await input.clear();
  await input.sendKeys(taskName + Key.ENTER);

  await driver.wait(
    until.elementLocated(By.xpath(`//*[text()='${taskName}']`)),
    1000
  );
};

// A user must be able to persist tasks and their status between sessions.
test('should persis tasks between sessions', async () => {
  // Create 2 tasks
  await driver.get('http://localhost:3000');
  await createTask('Persisted Task 1');
  await createTask('Persisted Task 2');

  // Refresh page and check if tasks have persisted
  await driver.navigate().refresh();
  await driver.wait(
    until.elementLocated(By.xpath("//*[text()='Persisted Task 1']")),
    1000
  );
  await driver.wait(
    until.elementLocated(By.xpath("//*[text()='Persisted Task 2']")),
    1000
  );

  // Check if task status is incomplete
  const task = await driver.findElement(
    By.xpath("//*[text()='Persisted Task 2']")
  );
  expect(await task.getAttribute('class')).not.toMatch(/completed/);

  // Check if task status toggles to complete on click
  await task.click();
  await driver.wait(
    until.elementLocated(
      By.xpath(
        "//*[text()='Persisted Task 2' and contains(@class, 'completed')]"
      )
    )
  );
  expect(await task.getAttribute('class')).toMatch(/completed/);

  // Check if task 2 is still complete
  await driver.navigate().refresh();
  const task_2 = await driver.findElement(
    By.xpath("//*[text()='Persisted Task 2']")
  );
  expect(await task_2.getAttribute('class')).toMatch(/completed/);
});
