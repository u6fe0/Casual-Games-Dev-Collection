import { _decorator, Component, JsonAsset } from "cc";
import { ResUtils } from "../../Utils/ResUtils";
import { ItemData } from "./Core/Item";
import { ScrollViewPro } from "./Core/ScrollViewPro";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Demo
 * DateTime = Thu Mar 24 2022 09:36:18 GMT+0800 (中国标准时间)
 * Author = paul.u6fe0
 * FileBasename = Demo.ts
 * FileBasenameNoExtension = Demo
 * URL = db://assets/Scripts/Demo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

/**
 * 演示如何使用ScrollViewPro
 */

const bundleName = "ScrollViewProData";
const resName = "cardData";

@ccclass("Demo")
export class Demo extends Component {
  @property(ScrollViewPro)
  svPro: ScrollViewPro;
  start() {
    if (!this.svPro) {
      console.error("需要指定ScrollViewPro!");
      return;
    }
    this.LoadCardPanel();
  }
  /**
   * 异步加载图鉴数据
   */
  async LoadCardPanel() {
    // 获取JSON数据
    const jsonAsset = await ResUtils.LoadBundleRes(
      bundleName,
      resName,
      JsonAsset
    );
    var dataArray = jsonAsset.json as Array<ItemData>;
    // 初始化
    this.svPro.Init(dataArray);
  }
}
