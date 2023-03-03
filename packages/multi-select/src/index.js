/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import MobileTemplate from './mobile'

const template = (mode) => {
  if (process.env.TINY_MODE === 'mobile' || mode === 'mobile') {
    return MobileTemplate
  }
}

export default {
  name: $prefix + 'MultiSelect',
  inject: {},
  props: {
    ...$props
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}