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
                activitiesProduct: [
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
                ],
                optionsCategory: [
                    {
                        value: 'Keo cho ngành gỗ',
                        label: 'Keo cho ngành gỗ'
                    },
                    {
                        value: 'Các sản phẩm từ giấy',
                        label: 'Các sản phẩm từ giấy'
                    }
                ]
            },
            productForm: {
                name: '',
                image: [],
                code: '',
                category: [],
                active: true,
                view: 1,
                describe: '',
                content: '',
            },
            productValidate: {
                name: [
                    { 
                        required: true, 
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'change' 
                    },
                    {
                        max: 200, 
                        message: 'Bạn đã nhập quá số lượng từ cho phép', 
                        trigger: 'change' 
                    }
                ],
                code: [
                    {
                        max: 15, 
                        message: 'Bạn đã nhập quá số lượng từ cho phép', 
                        trigger: 'change' 
                    }
                ],
                describe: [
                    {
                        max: 500, 
                        message: 'Bạn đã nhập quá số lượng từ cho phép', 
                        trigger: 'change' 
                    }
                ]
            },
            activeProduct: 'index',
            activeDetailsProduct: 'details',
            search: '',
            valueAction: '',
            dialogShowProduct: false,
            dialogCreateProduct: false,
            reverse: true,
            loading: false,
            labelPositionTop: 'top'
        }
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        handleClickProduct()
        {
            console.log(this.activeProduct);
            if(this.activeProduct == "bin")
            {
                this.bin = true;
                this.tableData.bin = true;
            }
            else{
                console.log('!!!');
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        clickShowProduct(item)
        {
            this.dialogShowProduct = true;
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
        },
        clickCreateProduct()
        {
            this.dialogCreateProduct = true;
            this.title = 'Thêm sản phẩm mới';
            console.log('!!!');
        },
        createProduct(productForm)
        {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    console.log(this.productForm);
                } 
                else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        fileUpload(productForm)
        {
            const preview = document.getElementById("myImg");
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();
            console.log(file);

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
              }, false);
            
              if (file) {
                reader.readAsDataURL(file);
              }
              

        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')