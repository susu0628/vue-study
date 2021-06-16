<template>
  <div class="eventBind_box">

    <!-- input文本 -->
    单行文本：<input v-model.number="message" placeholder="请输入" />
    <!-- vant中的输入文本 -->
    <Field v-model.number="message" label="文本" placeholder="请输入" />
    <p>文本为：{{typeof message}}</p>
    <!-- 多行文本 -->
    多行文本：<textarea v-model="lineMessage" placeholder="多行文本输入" />
    <p style="white-space: pre-line;">{{lineMessage}}</p>

    <!--单个复选框  -->
    <input type="checkbox" v-model="checked" id="checkbox" />
    <label for="checkbox">{{checked}}</label>
    <!-- vant中的checkbox -->
    <Checkbox v-model="vantChecked">vant {{vantChecked}}</Checkbox>
    
    
    <!-- 多个复选框 -->
    <input type="checkbox" v-model="multChecked" id="dance" value="dance" />
    <label for="dance">跳舞</label>
    <input type="checkbox" v-model="multChecked" id="swimming" value="swimming" />
    <label for="swimming">游泳</label>
    <input type="checkbox" v-model="multChecked" id="sing" value="sing" />
    <label for="sing">唱歌</label>
    <input type="checkbox" v-model="multChecked" id="grame" value="grame" />
    <label for="grame">游戏</label>
    <p>{{multChecked}}</p>
    <!-- vant中的checkbox -->
    <CheckboxGroup v-model="vantMultChecked">
      <Checkbox name="dance">跳舞</Checkbox>
      <Checkbox name="swimming">游泳</Checkbox>
      <Checkbox name="sing">唱歌</Checkbox>
      <Checkbox name="grame">游戏</Checkbox>
    </CheckboxGroup>
    <p>{{vantMultChecked}}</p>


    <!-- 单选框 -->
    <input type="radio" id="one" value="one" v-model="radioChecked" />
    <label for="one">one</label>
    <input type="radio" id="two" value="two" v-model="radioChecked" />
    <label for="two">two</label>
    <input type="radio" id="three" value="three" v-model="radioChecked" />
    <label for="three">three</label>
    <p>{{radioChecked}}</p>
    <!-- vant中的单选框 -->
    <RadioGroup v-model="vantRadioChecked">
      <Radio name="one">one</Radio>
      <Radio name="two">two</Radio>
      <Radio name="three">three</Radio>
    </RadioGroup>
    <p>{{vantRadioChecked}}</p>


    <!-- 下拉选择框 -->
    <select v-model="selected">
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
    <p>{{selected}}</p>
    <!-- vant下拉选择 -->
    <DropdownMenu>
      <DropdownItem v-model="vantSelected" :options="vantDropdownOption"></DropdownItem>
    </DropdownMenu>
    <p>{{vantSelected}}</p>
    <!-- 多选下拉绑定 -->
    <select multiple v-model="multSelected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>{{multSelected}}</p>

  </div>
</template>
<script>
import { Field, Checkbox, CheckboxGroup, Radio, RadioGroup, DropdownMenu, DropdownItem } from 'vant'
export default {
  name: 'EventBind',
  data: () => {
    return {
      message: 0,
      lineMessage: '',
      checked: false, // 原始单个复选框
      vantChecked: false, // vant单个复选框
      multChecked: [], // 多个复选框
      vantMultChecked: [],
      radioChecked: '', // 单选框
      vantRadioChecked: '',
      selected: '',
      vantSelected: 'a',
      vantDropdownOption: [
        { text: 'A', value: 'a'},
        { text: 'B', value: 'b'},
        { text: 'C', value: 'c'},
      ],
      multSelected: []
    }
  },
  components: {
    Field,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    DropdownMenu,
    DropdownItem
  }
}
</script>
<style>
.eventBind_box {
  padding: 0.24rem;
}
</style>