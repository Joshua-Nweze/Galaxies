export function routeEdit() {
    function routeRemoveDash (routeParam) {
        // if (routeParam.includes('-')) {
            return (routeParam.value.split('-').join(' ').toLowerCase())
        // }else{
        //     console.log(routeParam)
        // }
        // console.log(routeParam.includes('-'));
    }

    return { routeRemoveDash }
}