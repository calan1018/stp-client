export default {
    install : (Vue, options) => {
        // Vue plugin 작성 시, install 메소드를 노출해야한다.

        // add global property
        Vue.globalMethod = () => {
            alert('나는 글로벌 메서드다!');
        };

        // inject component options
        // 플러그인을 통해, 믹스인 옵션도 주입이 가능
        Vue.mixin({
            beforeCreate () {
                console.log(`beforeCreate inject option... in plugin (${this.$options.name})`);
            }
        });

        // add instance property
        Vue.prototype.$myMethod = () => {
            alert('나는 인스턴스 메서드다!');
        };

    }
}