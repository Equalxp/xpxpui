// 根据value值 计算出在动画中的缓动效果 在开始和结束慢 中间快
import cubic from '../cubic';
export default (value: number): number => {
  return value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
};
// easeInOutCubic
