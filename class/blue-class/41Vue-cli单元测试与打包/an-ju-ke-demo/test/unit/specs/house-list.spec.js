import Vue from 'vue'
import HouseList from '@/components/house-list'

describe('测试house.ID：', () => {
  const Constructor = Vue.extend(HouseList)
  const vm = new Constructor()
  
  expect(vm.$el.querySelector('.housedetail-div img').src).toEqual('/static/img/house1.jpg')
})