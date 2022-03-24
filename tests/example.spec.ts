import { test, expect } from '@playwright/test';
import { config } from 'dotenv';

config();

test('test', async ({ page }) => {
  // Go to https://www.lansad.univ-smb.fr/courses/mod/page/view.php
  await page.goto('https://www.lansad.univ-smb.fr/courses/mod/page/view.php');
  // Go to https://www.lansad.univ-smb.fr/courses/mod/page/view.php?id=18152
  await page.goto('https://www.lansad.univ-smb.fr/courses/mod/page/view.php?id=18152');
  // Click nav[role="navigation"] >> text=Connexion
  await page.locator('nav[role="navigation"] >> text=Connexion').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/login/index.php');
  // Click input[name="username"]
  await page.locator('input[name="username"]').click();
  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill(process.env.LANSAD_USER);
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill(process.env.LANSAD_MDP);
  // Press Enter
  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/page/view.php?id=18152');
  // Click img[alt="Third year"]
  await page.locator('img[alt="Third year"]').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/course/index.php?categoryid=11');
  // Click text=ANGL601_MPC-STIC
  await page.locator('text=ANGL601_MPC-STIC').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/course/view.php?id=37');
  // Click [aria-label="ACADEMIC LIFE"]
  await page.locator('[aria-label="ACADEMIC LIFE"]').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/course/view.php?id=37&section=1');
  // Click text=Synthesis of the American School System Quiz
  await page.locator('text=Synthesis of the American School System Quiz').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/quiz/view.php?id=3768');
  // Click text=Attempt quiz now
  await page.locator('text=Attempt quiz now').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/quiz/attempt.php?attempt=1327446&cmid=3768');
  // Click input[name="q1341912\:1_sub1_answer"]
  await page.locator('input[name="q1341912\\:1_sub1_answer"]').click();
  // Fill input[name="q1341912\:1_sub1_answer"]
  await page.locator('input[name="q1341912\\:1_sub1_answer"]').fill('Kindergarden');
  // Click input[name="q1341912\:1_sub2_answer"]
  await page.locator('input[name="q1341912\\:1_sub2_answer"]').click();
  // Fill input[name="q1341912\:1_sub2_answer"]
  await page.locator('input[name="q1341912\\:1_sub2_answer"]').fill('10-11');
  // Click input[name="q1341912\:1_sub3_answer"]
  await page.locator('input[name="q1341912\\:1_sub3_answer"]').click();
  // Fill input[name="q1341912\:1_sub3_answer"]
  await page.locator('input[name="q1341912\\:1_sub3_answer"]').fill('High School');
  // Click input[name="q1341912\:1_sub4_answer"]
  await page.locator('input[name="q1341912\\:1_sub4_answer"]').click();
  // Fill input[name="q1341912\:1_sub4_answer"]
  await page.locator('input[name="q1341912\\:1_sub4_answer"]').fill('Compulsory');
  // Click input[name="q1341912\:1_sub5_answer"]
  await page.locator('input[name="q1341912\\:1_sub5_answer"]').click();
  // Fill input[name="q1341912\:1_sub5_answer"]
  await page.locator('input[name="q1341912\\:1_sub5_answer"]').fill('years');
  // Click input[name="q1341912\:1_sub6_answer"]
  await page.locator('input[name="q1341912\\:1_sub6_answer"]').click();
  // Fill input[name="q1341912\:1_sub6_answer"]
  await page.locator('input[name="q1341912\\:1_sub6_answer"]').fill('freshman');
  // Click input[name="q1341912\:1_sub7_answer"]
  await page.locator('input[name="q1341912\\:1_sub7_answer"]').click();
  // Fill input[name="q1341912\:1_sub7_answer"]
  await page.locator('input[name="q1341912\\:1_sub7_answer"]').fill('senior');
  // Click input:has-text("Finish attempt ...")
  await page.locator('input:has-text("Finish attempt ...")').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/quiz/summary.php?attempt=1327446&cmid=3768');
  // Click text=Submit all and finish
  await page.locator('text=Submit all and finish').click();
  // Click #id_yuiconfirmyes-yui_3_17_2_2_1648117757908_7
  await page.locator('#id_yuiconfirmyes-yui_3_17_2_2_1648117757908_7').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/quiz/review.php?attempt=1327446&cmid=3768');
  // Click div[role="main"] >> text=Finish review
  await page.locator('div[role="main"] >> text=Finish review').click();
  await expect(page).toHaveURL('https://www.lansad.univ-smb.fr/courses/mod/quiz/view.php?id=3768');
});