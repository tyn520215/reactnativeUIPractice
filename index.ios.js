var React = require('react-native');

//requires组件
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
    } = React;

//定义组件
var AwesomeProject = React.createClass({
  //初始化状态的数据,loaded是否加载成功
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },

  //React会在react-native组件加载完成后，使用componentDidMount方法发送请求，并且只发送一次。
  componentDidMount: function() {
    this.fetchData();
  },

  //加载网络数据
  fetchData: function() {
    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({//在React的工作流程中，setState会触发一次重绘
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded:true
          });
        })
        .done();
  },

  //渲染组件
  render: function() {
    //
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return this.renderListView();
  },

  //渲染loading
  renderLoadingView:function() {
    return (
        <View style = {styles.container}>
          <Text>Loading movies</Text>
        </View>
    );
  },

  //渲染movie
  renderMovie:function(movie) {
    return (
        <View style={styles.container}>
          <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
    );
  },

  //渲染ListView
  renderListView:function(){
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView} />
    );
  }

});

//定义样式表 Flexbox 官网https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  year: {
    fontSize: 12,
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
</pre><pre name="code" class="javascript">