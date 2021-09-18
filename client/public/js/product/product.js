Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [
                {
                    _id: 'abcdef123123',
                    name: 'Keo Epoxy (Keo AB)',
                    image: 'https://product.hstatic.net/1000230347/product/keo_dan_giay_thien_long_-_diem_10_g-08__1_.jpg',
                    code: 'ABG',
                    category: 'Keo cho ngành gỗ',
                    datecreate: 'Jun 24 2021 12:35PM',
                    datemodified: 'Jun 24 2021 12:35PM',
                    usercreate: 'tanhuynh',
                    usermodified: 'tanhuynh',
                    active: true,
                    view: 0,
                    bin: false,
                    note: false,
                    follow: false,
                    describe: 'Sản phẩm chất lượng tiêu chuẩn hàn quốc',
                    content: 'Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc Sản phẩm chất lượng tiêu chuẩn hàn quốc'
                }
            ],
            listData: {
                listTabsMain: [
                    {
                        label: 'Tất cả sản phẩm',
                        name: 'index'
                    },
                    {
                        label: 'Theo dõi',
                        name: 'follow'
                    },
                    {
                        label: 'Chú ý',
                        name: 'note'
                    },
                    {
                        label: 'Thùng rác',
                        name: 'bin'
                    }
                ],
                optionsAction: [
                    {
                        label: 'Thùng rác',
                        value: 'bin'
                    },
                    {
                        label: 'Khôi phục',
                        value: 'res'
                    },
                    {
                        label: 'Huỷ hoạt động',
                        value: 'nore-action'
                    }
                ],
                activitiesCategory: [
                    {
                        content: 'Tấn huỳnh đã thay đổi nội dung',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: 'Tấn huỳnh đã xem nội dung',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: 'Tấn huỳnh đã ghi chú 1 nội dung',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: 'Tấn huỳnh đã ghi chú 1 nội dung',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: 'Tấn huỳnh đã ghi chú 1 nội dung',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: 'Tấn huỳnh đã ghi chú 1 nội dung',
                        timestamp: '2018-04-15'
                    }
                ]
            },
            activeCategory: 'index',
            activeDetailsCategory: 'details',
            search: '',
            valueAction: '',
            dialogShowCategory: false,
            reverse: true
        }
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        handleClickCategory()
        {
            console.log(this.activeCategory);
            if(this.activeCategory == "bin")
            {
                this.bin = true;
                this.tableData.bin = true;
            }
            else{
                console.log('!!!');
            }
        },
        clickShowCategory(item)
        {
            this.dialogShowCategory = true;
            
            this.name = item.name;
            this.image = item.image;
            this.code = item.code;
            this.category = item.category;
            this.datecreate = item.datecreate;
            this.datemodified = item.datemodified;
            this.view = item.view;
            this.bin = item.bin;
            this.note = item.note;
            this.usercreate = item.usercreate;
            this.usermodified = item.usermodified;
            this.describe = item.describe;
            this.content = item.content;

            this.active_color = item.active ? 'success' : 'default';
            this.follow_color = item.follow ? 'success' : 'default';
            this.note_color = item.note ? 'success' : 'default';

            this.active_text = item.active ? 'Hoạt động' : 'Không hoạt động';
            this.follow_text = item.follow ? 'Đang theo dõi' : 'Không theo dõi';
            this.note_text = item.note ? 'Đang chú ý' : 'Không có chú ý';
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')