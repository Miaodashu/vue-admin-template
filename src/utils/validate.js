import defaultSettings from '@/settings'
/**
 * @param {string} path
 * @returns {Boolean}
 * @desc 验证路由是否是外部链接
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}



const htmlTitle = defaultSettings.title
export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${htmlTitle}`
  }
  return `${htmlTitle}`
}