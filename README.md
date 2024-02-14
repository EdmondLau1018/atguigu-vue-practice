# Vue 全家桶学习

vue2 review  
vue3 learning

# 特点

1. 采用组件化的形式，提高代码复用率，让代码更好维护
2. 声明式编码，让编程人员无需直接操作 DOM 提高开发效率 （传统 JavaScript 需要一步一步操作dom 包含拼接HTML之类的操作）
3. 新增虚拟 DOM 优化数据变更之后的操作
   ![img.png](img.png)
   当数据变化之后 虚拟 DOM 中使用 Diff 将之前的代码与之前内存中渲染的数据进行比较
4. 模板和数据绑定 组件化和虚拟 DOM

# Vue 对象在单个页面上的创建

一般而言一个页面上创建一个 Vue 实例对象 通过 el 将 vue 实例对象与页面容器进行绑定

```javascript
  Vue.config.productionTip = false;
new Vue({
    el: '#root',  // el 用于指定当前 vue实例对象为哪个容器服务
    data: {
        //  数据供 el 指定的容器所使用 （古希腊掌管容器数据的神） 在组件的时候通常使用函数
        message: 'the fucking world'
    },
});
```

# 插值语法与指令语法
Vue模板语法有2大类：

1.插值语法：
功能：用于解析标签体内容。
写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

2.指令语法： 
功能： 用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式， 
且可以直接读取到data中的所有属性。

备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。
# 数据绑定
1.单向绑定(v-bind)：数据只能从data流向页面。

2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

备注：

1. 双向绑定一般都应用在表单类元素上（如：input、select等）

2. v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

3. 双向数据绑定 v-model 只能用于带有 value 属性的标签中
# el 与 data 的两种写法

在 vue 创建实例对象内部有两种写法：
1. 直接在对象的配置中写 el标签 通过 el 将当前实例对象与容器进行绑定
2. 用 vm 接收当前实例对象通过 vm.$mount('#容器名称') 的方法将对应的实例对象挂在到容器上

data 域也有两种写法：
1. 配置 data:{} 对象，将对应的信息直接写在配置中 
2. 通过 data(){} 函数 return{对象} 需要返回的数据
```javascript
 const vm = new Vue({
        // el: '#root',
        //  data 对象式写法
        // data: {
        //     title: '数据单项绑定',
        //     nameSingle: '2222',
        //     nameDouble: '1111'
        // }
        //   组件化的写法
        data: function () {
            return {
                title: '数据单项绑定',
                nameSingle: '2222',
                nameDouble: '1111'
            }
        }
    });
    console.log(vm);
    setTimeout(() => {
        // 通过 mount 将对应的  vue 实例挂在到页面容器上
        vm.$mount('#root')
    },2000)
```
# MVVM 模型
MVVM模型
1. M：模型(Model) ：data中的数据 
2. V：视图(View) ：模板代码
3. VM：视图模型(ViewModel)：Vue实例 

观察发现： 

1.data中所有的属性，最后都出现在了vm身上。 

2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

![img_1.png](img_1.png)

VM 模型的两大作用 事件监听 和 数据绑定 
# defineProperty 方法
在 JavaScript 中 可以通过 `Object.defineProperty` 方法给对应的对象新增数据属性 

通常这些新增的数据属性中 含有其他配置项
```javascript
<script type="text/javascript">
    let age = 78;
    let person = {
        name: '张三',
        gender: 'male',
    };
    //  使用 defineProperty 方法 新增数据属性
    Object.defineProperty(person, 'age', {
        // value: 18,
        // enumerable:true,        //  通过 defineProperty 方法新增的属性可遍历
        // writable: true,         //  通过 defineProperty 方法新增的属性可修改
        // configurable: true,       //  通过 defineProperty 方法新增的属性可配置删除

        // defineProperty 方法提供与 Java的对象 相同的 getter 和 setter  方法
        get: function () {
            console.log('程序读取当前对象的age属性');
            return age;
        },
        set(value) {
            console.log('程序对age属性进行设置');
            age = value;
        }
    });

    console.log(person);
    // 遍历 person 所有属性
    let keys = Object.keys(person);
    console.log('所有属性：', keys);

</script>
```
当 程序读取和修改 新增属性的时候会调用 defineProperty 定义的对象中的  getter 和 setter 

就像 Java 中的修改对象属性一样 

## Vue中的数据代理 
1.Vue中的数据代理：

通过vm对象来代理data对象中属性的操作（读/写）

2.Vue中数据代理的好处：

更加方便的操作data中的数据

3.基本原理：

通过Object.defineProperty()把data对象中所有属性添加到vm上。 为每一个添加到vm上的属性，都指定一个getter/setter。
							
在getter/setter内部去操作（读/写）data中对应的属性。
# 事件
事件的基本使用：

1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；

2.事件的回调需要配置在methods对象中，最终会在vm上；

3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；

4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；

5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；

在调用事件的时候 不写事件的参数列表的情况下 传递的是当前事件本身作为参数 

### 事件修饰符
Vue中的事件修饰符：

1.prevent：阻止默认事件（常用）；

2.stop：阻止事件冒泡（常用）；

3.once：事件只触发一次（常用）；

4.capture：使用事件的捕获模式；

5.self：只有event.target是当前操作的元素时才触发事件；

6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

```html
<div id="root">
    <div @click="showInfo" style="width: 400px;height: 200px; background-color:skyblue;">
        <!--阻止事件冒泡-->
        <div @click.stop="showInfo" style="width: 400px;height: 30px; background-color:pink;"></div>
    </div>
    <br>
    <!--阻止标签的默认行为-->
    <a href="http://www.atguigu.com" @click.prevent="showInfo">进入尚硅谷进行学习</a> <br>
    <!--阻止标签行为原生写法-->
    <a href="http://www.atguigu.com" @click="preventDefaultAction($event)">进入尚硅谷进行学习</a>

    <!--事件绑定的时候从父元素向子元素进行捕获 先执行父元素的事件再执行子元素的事件-->
    <!-- 通过 capature 在事件的捕获阶段就执行绑定的函数-->
    <div @click.capture="showInfo(1)" style="width: 600px;height: 600px;background-color:lightpink;">
        <div @click="showInfo(2)" style="width: 300px;height: 300px;background-color:lightsalmon;"></div>
    </div>

</div>
<script type="text/javascript">
   const vm = new Vue({
      el: '#root',
      data: {},
      methods: {
         showInfo(num) {
            alert('展示提示信息' + num)
         },
         preventDefaultAction(event) {
            event.preventDefault()  //  阻止标签本身的行为
            console.log('通过preventDefault 方法阻止事件的默认行为 ');
         }
      }
   });
</script>
```
## 键盘事件

1.Vue中常用的按键别名：

回车 => enter

删除 => delete (捕获“删除”和“退格”键)

退出 => esc

空格 => space

换行 => tab (特殊，必须配合keydown去使用)

上 => up

下 => down

左 => left

右 => right

2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

3.系统修饰键（用法特殊）：ctrl、alt、shift、meta

(1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

(2).配合keydown使用：正常触发事件。

4.也可以使用keyCode去指定具体的按键（不推荐）

5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

接下来是一个 按住 ctrl + y 才显示数据的事件 

**事件修饰符可以连着写，在下面这种案例中 ctrl + y 连写达到先按下 ctrl 再按下 y 才能触发事件的效果**
```html
<div id="root">
    <div>
        <div></div>
    </div>
    <input type="text" @keydown.ctrl.y="showContentCustom" v-model="content">
</div>
<script type="text/javascript">
   const vm = new Vue({
      el: '#root',
      data: {
         content: ''
      },
      methods: {
         showInfo(e) {
            console.log('显示事件信息', e);
            console.log('键盘按键名称：', e.key, '键盘按键编码：', e.keyCode);
         },
         showContentPrimary(e) {
            //  按下回车显示数据 原生写法 通过keyCode 进行判断
            if (e.keyCode != 13) return;
            console.log('显示数据：', this.content);
         },
         //  使用事件修饰符修饰键盘事件
         showContentVue() {
            console.log(this.content);
         },
         // 需求 按下 ctrl + y 才显示input 中的文本内容
         showContentCustom() {
            console.log('调用csutom方法：',this.content);
         }
      }
   });
</script>
```
# 计算属性
计算属性：
1.定义：要用的属性不存在，要通过已有属性计算得来。

2.原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

3.get函数什么时候执行？

(1).初次读取时会执行一次。

(2).当依赖的数据发生改变时会被再次调用。

4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。

5.备注：

1.计算属性最终会出现在vm上，直接读取使用即可。

2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
```javascript
<div id="root">
    姓：<input type="text" v-model="firstName"> <br><br>
    名：<input type="text" v-model="lastName"> <br><br>
    全名：<span>{{firstName + '-' + lastName}}</span>
    <br>
    全名（计算属性）：<span>{{fullName}}</span>
    测试：<input type="text" v-model="fullName"> <br><br>
</div>
</body>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            firstName: '张',
            lastName: '三'
        },
        methods: {},
        computed: {
            fullName: {
                //  当程序读取 fullName get 方法会被调用 而且返回值作为 fullName的值
                // get 调用时机：1. 初次读取 fullName   2. 所依赖的数据发生变化的时候
                //  自动获取这个对象的返回值 添加到 vm 对象上
                get() {
                    return this.firstName + '-' + this.lastName;
                },
                //  当 fullName 被修改时调用
                set(value) {
                    let split = value.split('-');
                    this.firstName = split[0];
                    this.lastName = split[1];
                }
            }
        }
    });
</script>
```
## 计算属性简写
直接将计算属性写成一个函数，相当于这个属性对象的 getter 
```html
<div id="root">
    姓：<input type="text" v-model="firstName"> <br><br>
    名：<input type="text" v-model="lastName"> <br><br>
    全名：<span>{{fullName}}</span>
</div>
</body>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            firstName: '张',
            lastName: '三'
        },
        methods: {},
        computed: {
            //  使用计算属性的简写默认不使用 set 方法
            //  这个计算属性对象可以简写成一个函数 其实就是写的就是这个对象的 getter
            fullName() {
                return this.firstName + '-' + this.lastName;
            }
        }
    });
</script>
```
# 监视

