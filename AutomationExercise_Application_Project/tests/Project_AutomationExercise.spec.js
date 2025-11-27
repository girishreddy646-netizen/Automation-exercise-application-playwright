import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('AutomaltionExercise Home Page Title Test', async ({ page }) => {  



  await page.goto('https://automationexercise.com/');

    // await page.waitForSelector('title,{timeout:20000}');
    await expect(page).toHaveTitle("Automation Exercise");

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('girishreddy646@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Amma@143');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  await expect(page.getByRole('img', { name: 'demo website for practice' })).toBeVisible();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('img', { name: 'ecommerce website products' }).first().click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('Very Nice One ');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Giri');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('Girish');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('Girish@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  // await page.getByText('Add to cart').nth(1).click();
  // await page.locator('.modal-footer').click();
  await page.locator('div:nth-child(12) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Giri');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('@gmail.com');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('Good Collections for Kids ');
  // await page.getByText(' Added! Your product has been added to cart. View Cart Continue Shopping Half').click();
  await page.getByRole('list').filter({ hasText: 'Write Your Review' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('giri@gmail.com');
  await page.getByText('Thank you for your review. Submit').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('link', { name: ' Logout' }).click();

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(5).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('div:nth-child(2) > .panel-heading').click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Jeans' }).click();
  await page.getByRole('link', { name: 'Jeans' }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(2).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div').filter({ hasText: 'Write Your Review' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Giri');
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('G@gmail.com');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('Great Collcetion');
  await page.getByRole('textbox', { name: 'Add Review Here!' }).click();
  await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('Great Collection');
  await page.getByText('Write Your Review Thank you').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: ' Kids' }).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(3) > .panel-heading').click();
  await page.getByText('Women Dress Tops Saree Men').click();
  await page.getByRole('link', { name: ' Kids' }).click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await page.getByRole('heading', { name: ' Kids' }).click();
  await page.getByRole('link', { name: ' Kids' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Tops & Shirts' }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(3).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('list').filter({ hasText: 'Write Your Review' }).click();

  // await page.pause();
  await page.getByRole('link', { name: ' Logout' }).click();
});




