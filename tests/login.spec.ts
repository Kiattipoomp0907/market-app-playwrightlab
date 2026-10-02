import { test, expect } from '@playwright/test';
test('TC01 Login ส าเร็จ', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('0800000000');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
// 5. ตรวจสอบว่า Login ส าเร็จ และมีค าว่า ยินดีต้อนรับ
await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();
});

test('TC02 Login เจ้าของตลาด ใส่เบอร์โทรผิด', async ({ page }) => {
  // 1. เปิดหน้า Login
  await page.goto('http://localhost:5173/');
  // 2. กรอกหมายเลขโทรศัพท์ผิด
  await page
    .getByLabel('หมายเลขโทรศัพท์มือถือ')
    .fill('0811111111');
  // 3. กรอกรหัสผ่านที่ถูกต้อง
  await page
    .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    .fill('uCrwVaBW39o_0G0Q5QwAVrqr');
  // 4. กดปุ่มเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();
  // 5. ตรวจสอบว่า Login ไม่สำเร็จ
    await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});

test('TC03 Login เจ้าของตลาด ใส่ pws ผิด', async ({ page }) => {
  // 1. เปิดหน้า Login
  await page.goto('http://localhost:5173/');
  // 2. กรอกหมายเลขโทรศัพท์ที่ถูกต้อง
  await page
    .getByLabel('หมายเลขโทรศัพท์มือถือ')
    .fill('0800000000');
  // 3. กรอกรหัสผ่านผิด
  await page
    .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    .fill('12345678');
  // 4. กดปุ่มเข้าสู่ระบบ
  await page
    .getByRole('button', { name: 'เข้าสู่ระบบ' })
    .click();
  // 5. ตรวจสอบว่า Login ไม่สำเร็จ
  await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
});

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


