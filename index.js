'use strict';
const tasks = new Map();
/**
 * TODOを追加する
 * @param {string} task 
 */
function todo(task) {
  tasks.set(task,0);
}

/**
 * 完了しているかどうかを返す
 * @param {タスクと完了／未完了の配列} taskAndIsDonePair 
 */
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair[1] === 2;
}

/**
 * 未完了かどうかを返す
 * @param {タスクと完了／未完了の配列} taskAndIsDonePair 
 */
function isNotDone(taskAndIsDonePair) {
  return taskAndIsDonePair[1] === 0;
}

/**
 * 選択中かどうかを返す
 * @param {タスクと完了／未完了の配列} taskAndIsDonePair 
 */
function isDoing(taskAndIsDonePair) {
  return taskAndIsDonePair[1] === 1;
}

/**
 * 未完了リストを返却する
 */
function list() {
  return Array.from(tasks)
    .filter(isNotDone)
    .map(t => t[0]);
}

/**
 * 完了リストを返却する
 */
function donelist() {
  return Array.from(tasks)
    .fileter(isDone)
    .map(t => t[0]);
}

/**
 * 実行中タスクを返却する
 */
function doingItem() {
  return Array.from(tasks)
    .filter(isDoing)
    .map(t => t[0]);
}

/**
 * タスクを完了にする
 */
function done() {
  let item = doingItem();
  if (tasks.has(item)) {
    tasks.set(item, 2);
  }
}

module.exports = {
  todo, 
  list,
  doingItem
};
