/*
Category Classification
field：[0],(0,1],(1,2],(2,3],(3,4],(4,5]
meanBirdy: 水课：未知-毫无水分-较少水分-普通水平-水分较大-水到不行
meanAttend: 点名：未知-不点-很少-适量-经常-必点
meanHomework: 作业：未知-没有-很少-适量-较多-巨多
meanExam: 考试：未知-轻松-较易-中等-较难-艰难
*/
import React from 'react'

module.exports = {
  getBirdText: (val) => {
    let text = '未知'
    if (val > 0 && val <= 1) {
      text = '毫无水分'
    } else if (val > 1 && val <= 2) {
      text = '较少水分'
    } else if (val > 2 && val <= 3) {
      text = '普通水平'
    } else if (val > 3 && val <= 4) {
      text = '水分较大'
    } else if (val > 4 && val <= 5) {
      text = '水到不行'
    }
    return <span>{text}</span>
  },

  getHomeworkText: (val) => {
    let text = '未知'
    if (val > 0 && val <= 1) {
      text = '没有'
    } else if (val > 1 && val <= 2) {
      text = '很少'
    } else if (val > 2 && val <= 3) {
      text = '适量'
    } else if (val > 3 && val <= 4) {
      text = '较多'
    } else if (val > 4 && val <= 5) {
      text = '巨多'
    }
    return <span>{text}</span>
  },

  getAttendText: (val) => {
    let text = '未知'
    if (val > 0 && val <= 1) {
      text = '不点'
    } else if (val > 1 && val <= 2) {
      text = '很少'
    } else if (val > 2 && val <= 3) {
      text = '适量'
    } else if (val > 3 && val <= 4) {
      text = '经常'
    } else if (val > 4 && val <= 5) {
      text = '必点'
    }
    return <span>{text}</span>
  },

  getExamText: (val) => {
    let text = '未知'
    if (val > 0 && val <= 1) {
      text = '轻松'
    } else if (val > 1 && val <= 2) {
      text = '较易'
    } else if (val > 2 && val <= 3) {
      text = '中等'
    } else if (val > 3 && val <= 4) {
      text = '较难'
    } else if (val > 4 && val <= 5) {
      text = '艰难'
    }
    return <span>{text}</span>
  },

}
