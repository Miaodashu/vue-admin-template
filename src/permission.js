import router from "./router";
import store from "./store";
import Cookies from "js-cookie";
import iView from "view-design";
import { getPageTitle } from "./utils/validate";
router.beforeEach(async (to, from, next) => {
  iView.LoadingBar.start();

  // 设置页面标题
  document.title = getPageTitle(to.meta.title);

  // 获取登录令牌判断用户是否登录
  const hasToken = Cookies.get("token");

  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      iView.LoadingBar.finish();
    } else {
      next();
      iView.LoadingBar.finish()
    }
  } else {
    /*没有token*/

    next(`/login?redirect=${to.fullPath}`);
    iView.LoadingBar.finish();
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});
