/**
 * Created by Administrator on 2016/4/7.
 */
var React = require('react-native');

var {
    Image,
    Text,
    StyleSheet,
    View,
    ListView
    } = React;
var REQUEST_URL="http://gank.io/api/data/福利/10/1";
var ImageList = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2}),
            loaded: false
        };
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData:function(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData),
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