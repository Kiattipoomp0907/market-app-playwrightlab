import { test, expect } from '@playwright/test';

test('TC04 ไม่กรอกหมายเลขโทรศัพท์และรหัสผ่าน', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();
  await expect(
    page.getByLabel('หมายเลขโทรศัพท์มือถือ')
  ).toBeVisible();
  await expect(
    page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
  ).toBeVisible();
  // 4. กดปุ่มเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();
  // 5. ตรวจสอบว่า Login ไม่สำเร็จ
    await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});


test('TC05 Login เจ้าของตลาด ใส่เบอร์โทรไม่ครบ 10 หลัก', async ({ page }) => {

  await page.goto('http://localhost:5173/');

  // กรอกเบอร์โทรไม่ครบ 10 หลัก
  await page
    .getByLabel('หมายเลขโทรศัพท์มือถือ')
    .fill('080000000');

  // กรอกรหัสผ่านถูกต้อง
  await page
    .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    .fill('uCrwVaBW39o_0G0Q5QwAVrqr');

  // กดเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();

  // ตรวจสอบว่ายังอยู่หน้า Login
  await expect(
    page.getByRole('button', { name: 'เข้าสู่ระบบ' })
  ).toBeVisible();
});


test('TC06 Login เจ้าของตลาด ใส่เบอร์โทรเป็นตัวอักษร', async ({ page }) => {

  await page.goto('http://localhost:5173/');

  // กรอกเบอร์โทรเป็นตัวอักษร
  await page
    .getByLabel('หมายเลขโทรศัพท์มือถือ')
    .fill('abcdefghij');

  // กรอกรหัสผ่านถูกต้อง
  await page
    .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    .fill('uCrwVaBW39o_0G0Q5QwAVrqr');

  // กดเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();

  // ตรวจสอบว่ายังอยู่หน้า Login
  await expect(
    page.getByRole('button', { name: 'เข้าสู่ระบบ' })
  ).toBeVisible();
});


test('TC07 Login เจ้าของตลาด ใส่ password ผิด', async ({ page }) => {

  await page.goto('http://localhost:5173/');

  // กรอกเบอร์โทรถูกต้อง
  await page
    .getByLabel('หมายเลขโทรศัพท์มือถือ')
    .fill('0800000000');

  // กรอก password ผิด
  await page
    .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    .fill('12345678');

  // กดเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();

  // ตรวจสอบว่ายังอยู่หน้า Login
  await expect(
    page.getByRole('button', { name: 'เข้าสู่ระบบ' })
  ).toBeVisible();
  
});