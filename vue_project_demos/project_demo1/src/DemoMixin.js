export const DemoMixin = {
    data() {
        return {
            job: 'blowJob',
            secondJob: 'cowGirl'
        }
    },
    //  每个组件引入 混入的时候，该混入都会加载
    mounted() {
        console.log('欠操的世界准备好咧');
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
