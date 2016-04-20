var React = require('react-native');

var {
    Image,
    Text,
    StyleSheet,
    View,
    ListView,
    AppRegistry
    } = React;
var newRow;
var index;
var assembly = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2}),
            loaded: false
        };
    },
    componentDidMount: function() {
        this.fetchData(true);
    },
    fetchData:function(refresh){
        if(refresh){
            this.page = 1;
            index = this.page
        }else{
            this.page++;
            index=this.page;
        }
        var REQUEST_URL="http://gank.io/api/data/福利/10/"+index;
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                if(refresh){
                    newRow = responseData.results;
                }else{
                    newRow = newRow.concat(responseData.results);
                }
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(newRow),
                    loaded:true
                });
                //DATA.push(responseData.results);
            })
            .done();
    },
    //渲染组件
    render: function() {
        if(!loaded){
            return this.renderLoadingView();
        }
        return this.renderListView();

    },

    //渲染loading
    renderLoadingView:function() {
        return (
            <View style = {styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    },

    //渲染img
    renderMovie:function(rowData) {
        return (
            <View style={styles.containerImg}>
                <Image style={styles.meizhiImage} source={{url:rowData.url}}></Image>
                <Text style={styles.imageNAME}>{rowData.desc}</Text>
            </View>
        );
    },

    //渲染ListView
    renderListView:function(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
                onEndReached ={this.fetchData(false)}
                onEndReachedThreshold ={200}
                />
        );
    }

});

var styles = StyleSheet.create({
    containerImg:{
        width:300,
        height:420,
        backgroundColor:'white',
        borderRadius:5,
        marginTop:30,
        alignSelf:'center'
    },
    meizhiImage:{
        width:280,
        height:400,
        marginTop:10,
        marginLeft:10,
        borderWidth:0.5,
        borderColor:'black'
    },
    listView:{
        backgroundColor:'rgb(51,143,255)'
    },
    imageNAME:{
        alignSelf:'flex-end',
        justifyContent:'flex-end'
    }
});
module.exprots=ImageList;