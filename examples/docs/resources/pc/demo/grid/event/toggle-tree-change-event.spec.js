import { test, expect } from '@playwright/test'

test('树节点展开收起事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-toggle-tree-change-event')
  await page.getByRole('cell', { name: '1' }).locator('i').click()

  await expect(page.getByText('触树展开事件')).toBeVisible()
})
