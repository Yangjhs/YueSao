// 员工数据
const teamMembers = [
    {
        id: 1,
        name: "晏婵",
        avatar: "images/yan.jpg",
        title: "育婴师|育儿嫂|月嫂",
        description: "HI,我是晏,有3年的育婴师、育儿嫂、月嫂工作经验,籍贯贵州",
        hometown: "贵州",
        age: 47,
        experience: "3年经验",
        status: "待岗",
        type: "育婴师、育儿嫂、月嫂",
        basicInfo: {
            education: "初中",
            ethnicity: "汉族",
            zodiac: "蛇",
            horoscope: "天秤座",
            gender: "女",
            maritalStatus: "已婚",
            language: "普通话标准",
            id: "001319",
            livingSituation: "住家",
            currentArea: "贵州贵阳观山湖"
        },
        introduction: "各位宝妈们好,我叫晏婵,来自遵义,我带宝宝专业,有耐心,责任心,宝宝的洗澡辅触,喂奶,拍嗝,疾病预防和观察都没有问题,做过月嫂,带过新生儿,带过满月宝宝到半岁的,宝宝的日常照顾和疾病预防我都是没有问题的,我会服务好每个家庭。",
        photos: [
            "images/work1.jpg",
            "images/work2.jpg",
            "images/work3.jpg",
            "images/work4.jpg",
            "images/work5.jpg",
            "images/work6.jpg",
            "images/work7.jpg",
            "images/work8.jpg",
            "images/work9.jpg",
            "images/work10.jpg",
            "images/work11.jpg",
            "images/work12.jpg",
            "images/work13.jpg",
            "images/work14.jpg",
            "images/work15.jpg"
        ],
        certificates: [
            "images/cert1.jpg",
            "images/cert2.jpg"
        ]
    },
    {
        id: 2,
        name: "姜芬",
        avatar: "images/jiangfen.jpg",
        title: "明亚资深销售经理",
        description: "连续寿险百万圆桌MDRT, 前军工业研发工程师, 山东大学/重庆大学本硕",
        details: [
            "明亚资深销售经理",
            "连续寿险百万圆桌MDRT",
            "前军工业研发工程师",
            "山东大学/重庆大学本硕"
        ]
    },
    {
        id: 3,
        name: "焦琼",
        avatar: "images/jiaoqiong.jpg",
        title: "明亚资深销售经理",
        description: "明亚资深合伙人, 连续达成MDRT/COT, 西工大&人大本科/EMBA",
        details: [
            "明亚资深销售经理",
            "明亚资深合伙人",
            "连续达成MDRT/COT",
            "西工大&人大本科/EMBA"
        ]
    },
    {
        id: 4,
        name: "许强",
        avatar: "images/xuqiang.jpg",
        title: "明亚合伙人",
        description: "太原理工大学学士, 前央企工程师, 前top地产运营经理",
        details: [
            "明亚合伙人",
            "太原理工大学学士",
            "前央企工程师",
            "前top地产运营经理"
        ]
    },
    {
        id: 5,
        name: "方小燕",
        avatar: "images/fangxiaoyan.jpg",
        title: "明亚保险经纪资深合伙人",
        description: "全球寿险百万圆桌COT会员, 电子科技大学本硕, 5年半保险行业从业经验",
        details: [
            "明亚保险经纪资深合伙人",
            "全球寿险百万圆桌COT会员",
            "电子科技大学本硕",
            "5年半保险行业从业经验"
        ]
    },
    {
        id: 6,
        name: "牙漫",
        avatar: "images/yaman.jpg",
        title: "明亚保险高级合伙人",
        description: "全球寿险百万圆桌MDRT, 前国有银行理财经理, 重庆大学硕士",
        details: [
            "明亚保险高级合伙人",
            "全球寿险百万圆桌MDRT",
            "前国有银行理财经理",
            "重庆大学硕士"
        ]
    },
    {
        id: 7,
        name: "蔡敏",
        avatar: "images/caimin.jpg",
        title: "明亚保险经纪资深合伙人",
        description: "全球百万圆桌MDRT会员, 连续IQA 国际品质金奖/铂金奖, 美国父母效能训练 PET 讲师",
        details: [
            "明亚保险经纪资深合伙人",
            "全球百万圆桌MDRT会员",
            "连续IQA 国际品质金奖/铂金奖",
            "美国父母效能训练 PET 讲师"
        ]
    },
    {
        id: 8,
        name: "李淑姮",
        avatar: "images/lishuxu.jpg",
        title: "明亚保险高级经纪人",
        description: "重庆邮电大学通信工科女, 前500强资深培训师, 云岭联盟联合创始人",
        details: [
            "明亚保险高级经纪人",
            "重庆邮电大学通信工科女",
            "前500强资深培训师",
            "云岭联盟联合创始人"
        ]
    },
    {
        id: 9,
        name: "王驰宇",
        avatar: "images/wangchiyu.jpg",
        title: "明亚保险经纪合伙人",
        description: "7年银行从业经验, 财务管理专业, 会计师",
        details: [
            "明亚保险经纪合伙人",
            "7年银行从业经验",
            "财务管理专业",
            "会计师"
        ]
    },
    {
        id: 10,
        name: "刘家敏",
        avatar: "images/liujiamin.jpg",
        title: "明亚高级经纪人",
        description: "电子科大工科学士, 前互联网平台运营总监, 少儿财富流教练",
        details: [
            "明亚高级经纪人",
            "电子科大工科学士",
            "前互联网平台运营总监",
            "少儿财富流教练"
        ]
    },
    {
        id: 11,
        name: "崔晓燕",
        avatar: "images/cuixiaoyan.jpg",
        title: "明亚高级保险经纪人",
        description: "四川师范大学理学硕士, 公众号【晓说险语】主笔, 在保险界做长期主义者",
        details: [
            "明亚高级保险经纪人",
            "四川师范大学理学硕士",
            "公众号【晓说险语】主笔",
            "在保险界做长期主义者"
        ]
    },
    {
        id: 12,
        name: "颜育元",
        avatar: "images/yanyuyuan.jpg",
        title: "执业律师&法律顾问部门负责人",
        description: "中国政法大学毕业, 保险&法律斜杠青年",
        details: [
            "中国政法大学毕业",
            "执业律师&法律顾问部门负责人",
            "保险&法律斜杠青年"
        ]
    },
    {
        id: 13,
        name: "朱晓平",
        avatar: "images/zhuxiaoping.jpg",
        title: "高级会计师",
        description: "高级家庭教育规划师, 儿童财商老师, 前上市公司财务总监",
        details: [
            "高级会计师",
            "高级家庭教育规划师",
            "儿童财商老师",
            "前上市公司财务总监"
        ]
    },
    {
        id: 14,
        name: "伟豪",
        avatar: "images/weihao.jpg",
        title: "投资理财达人兼财经自媒体主理人",
        description: "武汉大学文理双学士, 国家高级公共营养师, 前互联网大厂资深运营",
        details: [
            "武汉大学文理双学士",
            "国家高级公共营养师",
            "投资理财达人兼财经自媒体主理人",
            "前互联网大厂资深运营"
        ]
    },
    {
        id: 15,
        name: "晓丹",
        avatar: "images/xiaodan.jpg",
        title: "演讲教练",
        description: "男孩妈妈, 终身成长学习者, 演讲俱乐部主席",
        details: [
            "演讲教练",
            "男孩妈妈",
            "终身成长学习者",
            "演讲俱乐部主席"
        ]
    },
    {
        id: 16,
        name: "刘一帆",
        avatar: "images/liuyifan.jpg",
        title: "会计硕士",
        description: "5年+国有保险集团工作经验, 国家三级心理咨询师, 保险学会研究员",
        details: [
            "会计硕士",
            "5年+国有保险集团工作经验",
            "国家三级心理咨询师",
            "保险学会研究员"
        ]
    },
    {
        id: 17,
        name: "谢明芬",
        avatar: "images/xiemingfen.jpg",
        title: "一级造价工程师",
        description: "投资咨询工程师, 保险经纪从业人员执业证(高级), 前地产资深造价工程师",
        details: [
            "一级造价工程师",
            "投资咨询工程师",
            "保险经纪从业人员执业证(高级)",
            "前地产资深造价工程师"
        ]
    },
    {
        id: 18,
        name: "谢素琼",
        avatar: "images/xiesuqiong.jpg",
        title: "明亚保险经纪高级合伙人",
        description: "全国一级造价师, 前地产成本经理, 儿童财商老师",
        details: [
            "明亚保险经纪高级合伙人",
            "全国一级造价师",
            "前地产成本经理",
            "儿童财商老师"
        ]
    },
    {
        id: 19,
        name: "余琪琪",
        avatar: "images/yuqiqi.jpg",
        title: "资深幼儿英语启蒙教师",
        description: "北京理工大学硕士, 高级家庭教育指导师, 高校英语学习软件产品经理",
        details: [
            "北京理工大学硕士",
            "资深幼儿英语启蒙教师",
            "高级家庭教育指导师",
            "高校英语学习软件产品经理"
        ]
    }
];

