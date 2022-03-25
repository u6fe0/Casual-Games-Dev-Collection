import {
  _decorator,
  Component,
  Node,
  Asset,
  AssetManager,
  assetManager,
  JsonAsset,
  resources,
} from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ResUtils
 * DateTime = Thu Mar 24 2022 10:12:27 GMT+0800 (中国标准时间)
 * Author = paul.u6fe0
 * FileBasename = ResUtils.ts
 * FileBasenameNoExtension = ResUtils
 * URL = db://assets/Utils/ResUtils.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass("ResUtils")
export class ResUtils {
  /**
   * 异步加载Bundle资源
   * @param bundle
   * @param name
   * @param Type
   * @returns
   */
  static async LoadBundleRes<T extends Asset>(
    bundleName: string,
    resName: string,
    Type: new () => T
  ): Promise<T> {
    const bundle = await ResUtils.LoadBundle(bundleName);
    return new Promise((resolve, reject) => {
      bundle.load(resName, Type, (err: Error, res: T) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });
  }
  /**
   * 异步加载资源
   * @param name
   * @param Type
   * @returns
   */
  static LoadResource<T extends Asset>(
    name: string,
    Type: new () => T
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      resources.load(name, Type, (err: Error, res: T) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });
  }
  /**
   * 异步加载Bundle
   * @param name
   * @returns
   */
  private static LoadBundle(name: string): Promise<AssetManager.Bundle> {
    return new Promise((resolve, reject) => {
      assetManager.loadBundle(
        name,
        (err: Error, bundle: AssetManager.Bundle) => {
          if (err) {
            return reject(err);
          }
          resolve(bundle);
        }
      );
    });
  }
}
