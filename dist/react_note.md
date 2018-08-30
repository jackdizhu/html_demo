# react_dev

```
npm install -g create-react-app
create-react-app react_dev
npm run eject
npm install resolve-url-loader less-loader less --save
webpack.config.dev.js
webpack.config.prod.js

npm install antd --save
npm install babel-plugin-import --save
webpack 文件
在 rules 中的 babel 规则中的 options 中添加以下代码
```
plugins: [
   ['import', { libraryName: 'antd', style: true }],
],
```
npm install less@2.7.2 less-loader --save
npm install eslint-config-airbnb --save
.eslintrc
```
// .eslintignore 来对某些文件不做 eslint 校验
{
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "import"
  ],
  "extends": "airbnb",
  "rules": {}
}
```
npm install lint-staged husky --save
npm install react-router react-router-dom --save


npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
.babelrc
```
{
	"presets": [
		"es2015",
		"react",
		"stage-0"
	],
	"plugins": []
}
```
```

# react-redux

``` js
import {Provider} from 'react-redux';
import store from './redux/store';
// 通过 Provider 组件 使所有组件通过 
<Provider store={store}>
  <Router>
    <RootElement/>
  </Router>
</Provider>
例:
// 子孙组件 访问 store
import {connect} from 'react-redux';
export default connect((state) => ({userInfo: state.userInfo}))(Nav);
render() {
  const {userInfo} = this.props.userInfo;
  return (
    <div>
      {userInfo.name}
    </div>
  )
}
            
connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {})
例:
  connect(mapStateToProps, mapDispatchToProps)(Counter);
// mapStateToProps：
// this.props.counter.count
// 绑定 state.counter 到 this.props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }

};

// mapDispatchToProps：
// 绑定 store 中 actions 方法到 this.props
// this.props.increment()
// this.props.decrement()
// this.props.reset()
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    decrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    },
    reset: () => {
      dispatch({
        type: 'RESET'
      })
    }
  }
};

// mergeProps：mergeProps如果不指定，则
// 默认返回 Object.assign({}, ownProps, stateProps, dispatchProps)，顾名思义，
// mergeProps是合并的意思，将state合并后传递给组件。

// options：通过配置项可以更加详细的定义connect的行为，通常只需要执行默认值
```
