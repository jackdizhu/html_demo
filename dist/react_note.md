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
static contextTypes = {
  store: PropTypes.object,
};
handleGetState = () => {
  const storeData = this.context.store.getState();
}

// 子孙组件 访问 父组件属性方法
// 父组件 定义
static childContextTypes = {
  color: PropTypes.string,
}
getChildContext() {
  return { color: '#ec5454' };
}
// 子孙组件 定义
static contextTypes = {
  color: PropTypes.string,
}
// render 方法内 通过 this.context.color 访问
render () {
  return <span>{this.context.color}颜色</span>
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
