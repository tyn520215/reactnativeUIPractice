/**
 * Created by Administrator on 2016/4/11.
 */

export function fetchAction(index,DATA){
    var url = 'http://gank.io/api/data/福利/10/${index}';
    fetch(url).then(response => response.json())
        .then(responseData => {
            DATA.push(responseData.results);
                receiveArticleListMore(responseData);
        }).catch((error) => {
            console.log('error');
        }).done();
}

