import { getDeepValue } from '../object'
import frontmatter from '../../md.frontmatter'
describe('utils-object', () => {

  test('getDeepValue', () => {
    expect(getDeepValue(frontmatter, ['propsRows', 'visible'])).toBe(frontmatter.propsRows.visible)
  })
})
