import { _decorator, Component, Label, Sprite, SpriteFrame } from "cc";
import { ResUtils } from "../../../Utils/ResUtils";
import { Item } from "./ScrollViewPro";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Item
 * DateTime = Thu Mar 24 2022 09:20:51 GMT+0800 (中国标准时间)
 * Author = paul.u6fe0
 * FileBasename = Item.ts
 * FileBasenameNoExtension = Item
 * URL = db://assets/Scripts/Item.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

/**
 * Item数据结构
 */
export class CardItemData {
  name: string;
  icon: string;
}
// assetbundle name
const bundleName = "Icons";

@ccclass("Item")
export class CardItem extends Item {
  @property(Label)
  nameLb: Label;
  @property(Sprite)
  iconSp: Sprite;
  data: CardItemData;
  /**
   * 初始化
   */
  public async Init(data: CardItemData) {
    this.data = data;
    this.nameLb.string = this.data.name;
    this.iconSp.spriteFrame = null;
    const sf = await ResUtils.LoadBundleRes(
      bundleName,
      this.data.icon + "/spriteFrame",
      SpriteFrame
    );
    this.iconSp.spriteFrame = sf;
  }
}
