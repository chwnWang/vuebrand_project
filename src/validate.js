import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)


VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    email: '邮箱',
    pwd: '密码',
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1[3456789]\d{9}$/.test(value)
  },
  getMessage: field => '请输入正确的'+field + '码'
})

VeeValidate.Validator.extend('email', {
  validate: value => {
    return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(value)
  },
  getMessage: field => '请输入正确的'+field + ''
})
