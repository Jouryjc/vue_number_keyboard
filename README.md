# number_keyboard

> 一个简单的数字键盘，当前只支持金额数字的输入；限制数字格式为 123456 或者 123456.66，这是微信支付能够支持的最大数字位数。

## Build Setup

``` bash
# 安装依赖
npm install

# 本地自动打开项目，并搭配热更新
npm run dev

# 线上压缩版本构建
npm run build
```


# 可配置属性
<table>
    <tr>
        <th>属性</th>
        <th>类型</th>
        <th>备注</th>
    </tr>
    <tr>
        <td>btnName</td>
        <td>String</td>
        <td>右下角按钮名称，默认是“支付”</td>
    </tr>
    <tr>
        <td>hasDotLength</td>
        <td>Number</td>
        <td>含小数点的长度，小数点后默认是两位</td>
    </tr>
    <tr>
        <td>noDotLength</td>
        <td>Number</td>
        <td>不含小数点的长度，小数点后默认是两位</td>
    </tr>
</table>






