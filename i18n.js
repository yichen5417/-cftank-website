// 巾富企業官網 - 多國語言切換
(function () {
  var DICT = {
  "zh-Hant": {
    "nav": {
      "about": "關於巾富",
      "products": "產品與服務",
      "strength": "專業優勢",
      "quality": "品質與認證",
      "cta": "立即詢問",
      "ariaLabel": "主要導覽",
      "home": "首頁"
    },
    "hero": {
      "title1": "運輸設備與特種車輛",
      "title2": "粉粒體散裝",
      "title3": "專業設計製造",
      "text": "從產品設計、製造到售後服務，依據不同運輸需求提供專業規劃與客製化解決方案。",
      "btnExplore": "探索產品",
      "btnContact": "聯絡我們",
      "fact1Label": "公司成立",
      "fact2Label": "年製造經驗",
      "fact3Label": "燕巢製造基地",
      "fact3Value": "高雄"
    },
    "about": {
      "title1": "粉粒體散裝半拖車，",
      "title2": "以技術與品質服務產業需求",
      "p1": "巾富企業股份有限公司成立於2001年，總部位於高雄市燕巢區，專業從事特種車輛及粉粒體散裝運輸相關產品之設計與製造。",
      "p2": "多年來持續投入產品研發與技術應用，產品涵蓋粉粒體散裝半拖車、船運式散裝桶、工地式散裝桶、預拌車、散裝螺旋車、粉粒體散裝運輸系列，以及特種車輛與拖車配件。",
      "p3": "我們重視安全、效率、節能、耐用與產品品質，並依客戶實際需求提供產品規劃與服務，建立長期合作關係。",
      "title1b": "水泥預拌車製⁠造⁠，"
    },
    "process": {
      "title": "一條龍式作業",
      "desc": "製程透明、交期可控"
    },
    "products": {
      "title": "產品與服務",
      "lead": "依運輸型態與使用場景，提供多元散裝運輸設備與特種車輛方案。",
      "card1": {
        "title": "兩軸、三軸散裝半拖車",
        "desc": "針對粉粒體物料運輸需求，提供不同軸數、載重與結構配置的散裝半拖車。",
        "li1": "電動槽桶車",
        "li2": "高載重型設計",
        "li3": "輕量化與節能方向"
      },
      "card2": {
        "title": "散裝桶與散裝設備",
        "desc": "包含船運式散裝桶、工地式散裝桶等，依不同作業環境與輸送需求規劃。",
        "li1": "船運式散裝桶",
        "li2": "工地式散裝桶",
        "li3": "特殊規格客製",
        "li4": "貨櫃式散裝桶"
      },
      "card3": {
        "title": "預拌車與特種車輛",
        "desc": "提供特殊用途車輛的設計與製造，依客戶作業需求進行整體規劃。",
        "li1": "預拌車",
        "li2": "特殊用途車輛",
        "li3": "客製化設計"
      },
      "card4": {
        "title": "中古新車買賣專區",
        "desc": "提供中古車買賣服務，車況與規格透明公開，協助客戶依運輸需求挑選合適車型。"
      }
    },
    "visual": {
      "title1": "從設計到製造，",
      "title2": "讓每一台車符合實際需求。",
      "link": "索取產品資料 →",
      "imgAlt": "巾富企業產品宣傳圖：預拌車與多款三軸、兩軸粉粒體散裝半拖車"
    },
    "strength": {
      "title": "專業優勢",
      "lead": "以長期製造經驗、技術研發與品質管理，回應產業客戶的實際需求。",
      "card1": {
        "title": "20餘年產業經驗",
        "desc": "自2001年成立，累積特種車輛與散裝運輸設備製造經驗。"
      },
      "card2": {
        "title": "自主設計與製造",
        "desc": "從產品規劃、結構設計到製造，掌握核心產品開發流程。"
      },
      "card3": {
        "title": "依需求客製規劃",
        "desc": "依運輸物料、載重、使用環境及作業需求討論合適方案。"
      },
      "card4": {
        "title": "品質與售後服務",
        "desc": "重視製造品質與售後服務，協助客戶維持設備使用需求。"
      }
    },
    "quality": {
      "title": "品質管理與專業認證",
      "desc": "公司長期重視品質管理、產品安全與製造流程，並取得 ISO 9001:2015 品質管理系統認證。",
      "linkAria": "開啟 ISO 9001:2015 證書大圖（新視窗）",
      "imgAlt": "巾富企業股份有限公司 ISO 9001:2015 品質管理系統認證證書（RoyalCert）"
    },
    "history": {
      "title": "公司沿革",
      "item1Desc": "巾富企業成立",
      "item2Label": "發展",
      "item2Desc": "持續投入特種車輛與散裝運輸設備研發",
      "item3Label": "品質",
      "item3Desc": "建立品質管理制度與相關認證",
      "item4Label": "現在",
      "item4Desc": "持續提供產品設計、製造與服務"
    },
    "contact": {
      "title1": "有產品需求或特殊規格？",
      "title2": "歡迎與我們討論。",
      "lead": "若您正在尋找粉粒體散裝運輸設備、特種車輛或客製化方案，歡迎直接聯絡巾富企業。",
      "labelName": "公司名稱",
      "labelPhone": "電話",
      "labelAddress": "地址",
      "btnCall": "立即致電",
      "btnFacebook": "Facebook 粉絲專頁",
      "address": "高雄市燕巢區四林路660、660-1號"
    },
    "footer": {
      "tagline": "特種車輛・粉粒體散裝運輸設備"
    },
    "skip": {
      "link": "跳到主要內容"
    },
    "menu": {
      "open": "開啟選單",
      "close": "關閉選單"
    },
    "meta": {
      "title": "巾富企業股份有限公司｜高雄特種車輛・粉粒體散裝運輸設備製造｜兩軸三軸散裝半拖車",
      "desc": "巾富企業股份有限公司成立於2001年，位於高雄燕巢，專業從事特種車輛、兩軸三軸散裝半拖車、電動槽桶車、散裝桶、散裝螺旋車、預拌車及中古特種車輛買賣，提供產品規劃、客製化與售後服務，並取得ISO 9001品質管理系統認證。"
    },
    "lang": {
      "switchLabel": "選擇語言"
    },
    "brand": {
      "name": "巾富企業股份有限公司"
    },
    "productDetail": {
      "gallery": "車型照片",
      "pending": "車型照片整理中，即將更新，敬請期待。",
      "real": "實車照片，含車頭、車尾與左右兩側外觀。",
      "photoPending": "照片準備中",
      "front": "前方",
      "right": "右側",
      "left": "左側",
      "back": "後方",
      "backLink": "想了解更多規格與報價？聯絡巾富企業 →",
      "structureTitle": "主要配件與傳動機構",
      "structureNote": "鼓桶主要配件外觀，以及鏈條式／直結式兩種傳動機構比較示意。",
      "portfolio": "完工實績",
      "portfolioNote": "實際交付各客戶的預拌車案例。",
      "warehouse": "廠內實拍",
      "containerTitle": "貨櫃式散裝桶",
      "customTitle": "特殊規格客製",
      "newUnit": "新車實拍",
      "inFactory": "廠內製造實拍",
      "exportShip": "貨櫃出口實拍",
      "siteTitle": "工地式散裝桶及輸送設備",
      "siteNote": "散裝桶、進料斗與輸送設備實拍。",
      "siteTank": "工地式散裝桶",
      "siteSet": "整組設備",
      "hopper": "進料斗",
      "conveyor": "輸送設備",
      "projectsNote": "實際交付各客戶的案例。",
      "shipTitle": "船運式散裝桶",
      "shipNote": "外島專用，現今金門、澎湖、馬祖，安裝在船艙經由鼓風機打料送至散裝車運送。",
      "shipTank": "船運式散裝桶",
      "shipTransport": "港區運送",
      "shipLift": "吊裝作業",
      "shipInstall": "船艙內安裝",
      "triAxleTitle": "三軸散裝半拖車",
      "twoAxleTitle": "兩軸散裝半拖車",
      "exportNigeria": "奈及利亞・40T",
      "containerNote": "方便外島載運如金門、澎湖、馬祖。",
      "axle2": "兩軸",
      "totalWeight": "總聯結重量38.5噸",
      "cementPayload": "水泥載重46噸"
    },
    "lightbox": {
      "title": "圖片檢視",
      "close": "關閉",
      "prev": "上一張",
      "next": "下一張"
    }
  },
  "en": {
    "nav": {
      "about": "About Us",
      "products": "Products",
      "strength": "Why Jin Fu",
      "quality": "Quality",
      "cta": "Get in Touch",
      "ariaLabel": "Main navigation",
      "home": "Home"
    },
    "hero": {
      "title1": "& Specialty Vehicles",
      "title2": "Bulk Powder Transport Equipment",
      "title3": "Engineered & Manufactured",
      "text": "From design and manufacturing to after-sales service, we provide tailored planning and customized solutions for every transport need.",
      "btnExplore": "Explore Products",
      "btnContact": "Contact Us",
      "fact1Label": "Founded",
      "fact2Label": "Years of Manufacturing",
      "fact3Label": "Yanchao Plant, Kaohsiung",
      "fact3Value": "Kaohsiung"
    },
    "about": {
      "title1": "Bulk Powder Semi-Trailers,",
      "title2": "Serving Industry Needs with Technology and Quality",
      "p1": "Founded in 2001 and headquartered in Yanchao District, Kaohsiung, Jin Fu Enterprise Co., Ltd. specializes in the design and manufacturing of specialty vehicles and bulk powder transport products.",
      "p2": "Over the years, we have continued to invest in product development and technical application. Our product range includes bulk powder semi-trailers, marine-type and job-site bulk tanks, ready-mix trucks, bulk screw conveyor trucks, and a full line of bulk powder transport equipment, as well as specialty vehicles and trailer accessories.",
      "p3": "We value safety, efficiency, energy savings, durability, and product quality, offering tailored planning and services based on each customer's actual needs to build long-term partnerships.",
      "title1b": "Concrete Mixer Manufacturing,"
    },
    "process": {
      "title": "End-to-End In-House Production",
      "desc": "Transparent process, reliable lead times."
    },
    "products": {
      "title": "Products & Services",
      "lead": "A wide range of bulk transport equipment and specialty vehicle solutions for different transport types and use cases.",
      "card1": {
        "title": "Dual-Axle & Tri-Axle Bulk Semi-Trailers",
        "desc": "Semi-trailers for bulk powder transport, available in different axle counts, load capacities, and structural configurations.",
        "li1": "Electric Tank Trailer",
        "li2": "High-payload designs",
        "li3": "Lightweight, energy-saving options"
      },
      "card2": {
        "title": "Bulk Tanks & Bulk Equipment",
        "desc": "Including marine-type and job-site bulk tanks, planned according to different operating environments and conveying needs.",
        "li1": "Marine-type bulk tanks",
        "li2": "Job-site bulk tanks",
        "li3": "Custom specifications",
        "li4": "Container-Type Bulk Tank"
      },
      "card3": {
        "title": "Ready-Mix Trucks & Specialty Vehicles",
        "desc": "Design and manufacturing of vehicles for special purposes, planned around each customer's operational requirements.",
        "li1": "Ready-mix trucks",
        "li2": "Special-purpose vehicles",
        "li3": "Custom design"
      },
      "card4": {
        "title": "Used & New Vehicle Sales",
        "desc": "Buy and sell used vehicles, with transparent condition and specifications to help customers choose the right model for their transport needs."
      }
    },
    "visual": {
      "title1": "From Design to Manufacturing,",
      "title2": "Every Vehicle Built to Fit Real-World Needs.",
      "link": "Request Product Info →",
      "imgAlt": "Jin Fu Enterprise product showcase: ready-mix truck and a range of tri-axle and dual-axle bulk powder semi-trailers"
    },
    "strength": {
      "title": "Why Jin Fu",
      "lead": "Backed by long-term manufacturing experience, technical R&D, and quality management, we respond to the real needs of industrial customers.",
      "card1": {
        "title": "20+ Years in the Industry",
        "desc": "Founded in 2001, with accumulated experience in manufacturing specialty vehicles and bulk transport equipment."
      },
      "card2": {
        "title": "In-House Design & Manufacturing",
        "desc": "From product planning and structural design to manufacturing, we manage the core product development process in-house."
      },
      "card3": {
        "title": "Custom Planning to Requirements",
        "desc": "We discuss suitable solutions based on the material transported, load, operating environment, and job requirements."
      },
      "card4": {
        "title": "Quality & After-Sales Service",
        "desc": "We prioritize manufacturing quality and after-sales support to help customers maintain their equipment."
      }
    },
    "quality": {
      "title": "Quality Management & Certification",
      "desc": "The company places long-term emphasis on quality management, product safety, and manufacturing processes, and holds ISO 9001:2015 Quality Management System certification.",
      "linkAria": "Open ISO 9001:2015 certificate (opens in a new window)",
      "imgAlt": "Jin Fu Enterprise Co., Ltd. ISO 9001:2015 Quality Management System certificate (RoyalCert)"
    },
    "history": {
      "title": "Company History",
      "item1Desc": "Jin Fu Enterprise founded",
      "item2Label": "Growth",
      "item2Desc": "Continued investment in R&D for specialty vehicles and bulk transport equipment",
      "item3Label": "Quality",
      "item3Desc": "Established quality management systems and certifications",
      "item4Label": "Today",
      "item4Desc": "Ongoing product design, manufacturing, and service"
    },
    "contact": {
      "title1": "Have a Product Need or Special Requirement?",
      "title2": "Let's Talk.",
      "lead": "If you're looking for bulk powder transport equipment, specialty vehicles, or a custom solution, feel free to contact Jin Fu Enterprise directly.",
      "labelName": "Company Name",
      "labelPhone": "Phone",
      "labelAddress": "Address",
      "btnCall": "Call Now",
      "btnFacebook": "Facebook Page",
      "address": "660 & 660-1 Silin Rd., Yanchao Dist., Kaohsiung City, Taiwan"
    },
    "footer": {
      "tagline": "Specialty Vehicles & Bulk Powder Transport Equipment"
    },
    "skip": {
      "link": "Skip to main content"
    },
    "menu": {
      "open": "Open menu",
      "close": "Close menu"
    },
    "meta": {
      "title": "Jin Fu Enterprise Co., Ltd. | Specialty Vehicles & Bulk Powder Transport Equipment",
      "desc": "Founded in 2001 and based in Yanchao, Kaohsiung, Jin Fu Enterprise specializes in the design and manufacturing of specialty vehicles, bulk powder semi-trailers, bulk tanks, bulk screw conveyor trucks, and related equipment, offering product planning, customization, and after-sales service."
    },
    "lang": {
      "switchLabel": "Select language"
    },
    "brand": {
      "name": "Jin Fu Enterprise Co., Ltd."
    },
    "productDetail": {
      "gallery": "Vehicle Photos",
      "pending": "Photos are being prepared and will be updated soon. Please check back later.",
      "real": "Actual vehicle photos, including front, rear, and both side views.",
      "photoPending": "Photo coming soon",
      "front": "Front",
      "right": "Right Side",
      "left": "Left Side",
      "back": "Rear",
      "backLink": "Want more specs or a quote? Contact Jin Fu Enterprise →",
      "structureTitle": "Main Components & Drive Structure",
      "structureNote": "Overview of the drum's main components, with a comparison of chain-drive and direct-drive structures.",
      "portfolio": "Completed Projects",
      "portfolioNote": "Actual mixer trucks delivered to our clients.",
      "warehouse": "In-Factory Photo",
      "containerTitle": "Container-Type Bulk Tanks",
      "customTitle": "Custom Specifications",
      "newUnit": "New Unit Photo",
      "inFactory": "In-Factory Photo",
      "exportShip": "Container Export Photo",
      "siteTitle": "On-Site Bulk Tanks & Conveying Equipment",
      "siteNote": "Photos of our bulk tanks, feed hoppers and conveying equipment.",
      "siteTank": "On-Site Bulk Tank",
      "siteSet": "Complete Set",
      "hopper": "Feed Hopper",
      "conveyor": "Conveying Equipment",
      "projectsNote": "Actual projects delivered to our clients.",
      "shipTitle": "Ship-Type Bulk Tanks",
      "shipNote": "Dedicated to outlying islands, currently Kinmen, Penghu and Matsu. Installed in the ship's hold, the material is conveyed by blower to bulk trucks for delivery.",
      "shipTank": "Ship-Type Bulk Tank",
      "shipTransport": "Port Transport",
      "shipLift": "Lifting Operation",
      "shipInstall": "Installed in Ship Hold",
      "triAxleTitle": "Tri-Axle Bulk Semi-Trailers",
      "twoAxleTitle": "Dual-Axle Bulk Semi-Trailers",
      "exportNigeria": "Nigeria・40T",
      "containerNote": "Convenient for transport to outlying islands such as Kinmen, Penghu and Matsu.",
      "axle2": "Dual-axle",
      "totalWeight": "Total combined weight 38.5 tons",
      "cementPayload": "Cement payload 46 tons"
    },
    "lightbox": {
      "title": "Image viewer",
      "close": "Close",
      "prev": "Previous",
      "next": "Next"
    }
  },
  "ja": {
    "nav": {
      "about": "会社概要",
      "products": "製品・サービス",
      "strength": "当社の強み",
      "quality": "品質・認証",
      "cta": "お問い合わせ",
      "ariaLabel": "メインナビゲーション",
      "home": "ホーム"
    },
    "hero": {
      "title1": "特殊車両の",
      "title2": "粉粒体バルク輸送設備と",
      "title3": "専門設計・製造",
      "text": "製品設計・製造からアフターサービスまで、さまざまな輸送ニーズに合わせて、専門的なプランニングとカスタマイズ対応をご提供します。",
      "btnExplore": "製品を見る",
      "btnContact": "お問い合わせ",
      "fact1Label": "創業",
      "fact2Label": "年の製造実績",
      "fact3Label": "燕巣製造拠点",
      "fact3Value": "高雄"
    },
    "about": {
      "title1": "粉粒体バルク半トレーラー、",
      "title2": "技術と品質で産業ニーズに応えます",
      "p1": "巾富企業股份有限公司は2001年に創業し、本社は高雄市燕巣区にあります。特殊車両および粉粒体バルク輸送関連製品の設計・製造を専門としています。",
      "p2": "長年にわたり製品開発と技術応用に取り組み、粉粒体バルク用セミトレーラー、船舶搭載式バルクタンク、現場設置式バルクタンク、レディミクストコンクリート車、スクリューコンベア付きバルク車、粉粒体バルク輸送シリーズ、さらに特殊車両およびトレーラー部品まで、幅広い製品を取り揃えています。",
      "p3": "安全性、効率、省エネ、耐久性、製品品質を重視し、お客様の実際のご要望に合わせた製品プランニングとサービスを通じて、長期的なパートナーシップを築いています。",
      "title1b": "生コン車の製造に根ざし、"
    },
    "process": {
      "title": "一貫生産体制",
      "desc": "工程は透明、納期もしっかり管理。"
    },
    "products": {
      "title": "製品・サービス",
      "lead": "輸送形態や使用シーンに応じて、多様なバルク輸送設備と特殊車両のソリューションをご提供します。",
      "card1": {
        "title": "2軸・3軸バルク用セミトレーラー",
        "desc": "粉粒体の輸送ニーズに合わせて、軸数・積載量・構造の異なるバルク用セミトレーラーをご用意しています。",
        "li1": "電動タンクトレーラー",
        "li2": "高積載量設計",
        "li3": "軽量化・省エネ志向"
      },
      "card2": {
        "title": "バルクタンク・バルク設備",
        "desc": "船舶搭載式・現場設置式などのバルクタンクを、作業環境や搬送ニーズに合わせて計画します。",
        "li1": "船舶搭載式バルクタンク",
        "li2": "現場設置式バルクタンク",
        "li3": "特殊仕様のカスタマイズ",
        "li4": "コンテナ式バルクタンク"
      },
      "card3": {
        "title": "レディミクストコンクリート車・特殊車両",
        "desc": "特殊用途車両の設計・製造を行い、お客様の作業要件に合わせて全体を計画します。",
        "li1": "レディミクストコンクリート車",
        "li2": "特殊用途車両",
        "li3": "オーダーメイド設計"
      },
      "card4": {
        "title": "中古車・新車販売コーナー",
        "desc": "中古車の売買サービスを提供。車両の状態や仕様を透明に公開し、輸送ニーズに合った車種選びをサポートします。"
      }
    },
    "visual": {
      "title1": "設計から製造まで、",
      "title2": "すべての車両を実際のニーズに合わせて。",
      "link": "製品資料を請求する →",
      "imgAlt": "巾富企業の製品紹介画像：レディミクストコンクリート車と、各種3軸・2軸の粉粒体バルク用セミトレーラー"
    },
    "strength": {
      "title": "当社の強み",
      "lead": "長年の製造経験、技術開発、品質管理をもとに、産業のお客様の実際のニーズに応えます。",
      "card1": {
        "title": "20年以上の業界経験",
        "desc": "2001年の創業以来、特殊車両およびバルク輸送設備の製造経験を積み重ねてきました。"
      },
      "card2": {
        "title": "自社設計・自社製造",
        "desc": "製品企画、構造設計から製造まで、製品開発の中核プロセスを自社で掌握しています。"
      },
      "card3": {
        "title": "ニーズに応じたカスタム計画",
        "desc": "輸送する物資、積載量、使用環境、作業要件に応じて、最適なプランをご相談のうえご提案します。"
      },
      "card4": {
        "title": "品質とアフターサービス",
        "desc": "製造品質とアフターサービスを重視し、お客様の設備の継続使用をサポートします。"
      }
    },
    "quality": {
      "title": "品質管理と専門認証",
      "desc": "当社は長年にわたり品質管理、製品の安全性、製造プロセスを重視しており、ISO 9001:2015 品質マネジメントシステム認証を取得しています。",
      "linkAria": "ISO 9001:2015 証明書の拡大画像を開く（新しいウィンドウ）",
      "imgAlt": "巾富企業股份有限公司 ISO 9001:2015 品質マネジメントシステム認証書（RoyalCert）"
    },
    "history": {
      "title": "会社沿革",
      "item1Desc": "巾富企業 創業",
      "item2Label": "発展",
      "item2Desc": "特殊車両およびバルク輸送設備の研究開発に継続的に取り組む",
      "item3Label": "品質",
      "item3Desc": "品質管理体制と関連認証を確立",
      "item4Label": "現在",
      "item4Desc": "製品の設計・製造・サービスを継続して提供"
    },
    "contact": {
      "title1": "製品のご要望や特殊仕様はありますか？",
      "title2": "お気軽にご相談ください。",
      "lead": "粉粒体バルク輸送設備、特殊車両、またはカスタマイズ対応をお探しの方は、巾富企業まで直接お問い合わせください。",
      "labelName": "会社名",
      "labelPhone": "電話",
      "labelAddress": "住所",
      "btnCall": "今すぐ電話",
      "btnFacebook": "Facebook ページ",
      "address": "台湾 高雄市燕巣区四林路660、660-1号"
    },
    "footer": {
      "tagline": "特殊車両・粉粒体バルク輸送設備"
    },
    "skip": {
      "link": "メインコンテンツへスキップ"
    },
    "menu": {
      "open": "メニューを開く",
      "close": "メニューを閉じる"
    },
    "meta": {
      "title": "巾富企業股份有限公司｜高雄の特殊車両・粉粒体バルク輸送設備メーカー｜2軸・3軸バルク用セミトレーラー",
      "desc": "巾富企業股份有限公司は2001年創業、台湾・高雄市燕巣区に拠点を置き、特殊車両、2軸・3軸バルク用セミトレーラー、電動タンクトレーラー、バルクタンク、スクリューコンベア付きバルク車、レディミクストコンクリート車の設計・製造および中古特殊車両の売買を手がけ、製品企画、カスタマイズ、アフターサービスを提供しています。ISO 9001 品質マネジメントシステム認証取得。"
    },
    "lang": {
      "switchLabel": "言語を選択"
    },
    "brand": {
      "name": "巾富企業股份有限公司"
    },
    "productDetail": {
      "gallery": "車両写真",
      "pending": "車両写真は準備中です。まもなく更新しますので、しばらくお待ちください。",
      "real": "実車写真（前面・後面・左右側面）。",
      "photoPending": "写真準備中",
      "front": "前面",
      "right": "右側面",
      "left": "左側面",
      "back": "後面",
      "backLink": "仕様やお見積りについて詳しく知りたい方は、巾富企業へお問い合わせください →",
      "structureTitle": "主要部品と駆動機構",
      "structureNote": "ドラムの主要部品の外観と、チェーン式・直結式の2種類の駆動機構の比較図です。",
      "portfolio": "納入実績",
      "portfolioNote": "実際にお客様へ納入したミキサー車の事例です。",
      "warehouse": "工場内の写真",
      "containerTitle": "コンテナ式バルクタンク",
      "customTitle": "特殊仕様のカスタマイズ",
      "newUnit": "新車の実写",
      "inFactory": "工場内での製造風景",
      "exportShip": "コンテナ輸出の様子",
      "siteTitle": "現場設置式バルクタンク・搬送設備",
      "siteNote": "バルクタンク、投入ホッパー、搬送設備の実写です。",
      "siteTank": "現場設置式バルクタンク",
      "siteSet": "一式設備",
      "hopper": "投入ホッパー",
      "conveyor": "搬送設備",
      "projectsNote": "実際にお客様へ納入した事例です。",
      "shipTitle": "船舶搭載式バルクタンク",
      "shipNote": "離島専用。現在は金門・澎湖・馬祖向けです。船倉内に設置し、ブロワーで粉粒体を送り出してバルク車に積み替え、運搬します。",
      "shipTank": "船舶搭載式バルクタンク",
      "shipTransport": "港湾内の運搬",
      "shipLift": "クレーン吊り上げ作業",
      "shipInstall": "船倉内への設置",
      "triAxleTitle": "3軸バルク用セミトレーラー",
      "twoAxleTitle": "2軸バルク用セミトレーラー",
      "exportNigeria": "ナイジェリア・40T",
      "containerNote": "金門・澎湖・馬祖などの離島への輸送に便利です。",
      "axle2": "2軸",
      "totalWeight": "連結総重量 38.5トン",
      "cementPayload": "セメント積載量 46トン"
    },
    "lightbox": {
      "title": "画像ビューアー",
      "close": "閉じる",
      "prev": "前へ",
      "next": "次へ"
    }
  },
  "vi": {
    "nav": {
      "about": "Giới thiệu",
      "products": "Sản phẩm",
      "strength": "Thế mạnh",
      "quality": "Chất lượng",
      "cta": "Liên hệ ngay",
      "ariaLabel": "Điều hướng chính",
      "home": "Trang chủ"
    },
    "hero": {
      "title1": "& Xe chuyên dụng",
      "title2": "Thiết bị vận chuyển vật liệu rời dạng bột",
      "title3": "Thiết kế và chế tạo chuyên nghiệp",
      "text": "Từ thiết kế, chế tạo đến dịch vụ hậu mãi, chúng tôi cung cấp giải pháp quy hoạch chuyên nghiệp và tùy chỉnh theo từng nhu cầu vận chuyển.",
      "btnExplore": "Khám phá sản phẩm",
      "btnContact": "Liên hệ với chúng tôi",
      "fact1Label": "Thành lập",
      "fact2Label": "năm kinh nghiệm sản xuất",
      "fact3Label": "Nhà máy tại Yanchao, Cao Hùng",
      "fact3Value": "Cao Hùng"
    },
    "about": {
      "title1": "Sơ mi rơ moóc chở bột rời,",
      "title2": "phục vụ nhu cầu ngành bằng công nghệ và chất lượng",
      "p1": "Công ty TNHH Jin Fu Enterprise được thành lập năm 2001, trụ sở tại quận Yanchao, thành phố Cao Hùng, chuyên thiết kế và chế tạo xe chuyên dụng cùng các sản phẩm vận chuyển vật liệu rời dạng bột.",
      "p2": "Nhiều năm qua, chúng tôi không ngừng đầu tư vào nghiên cứu phát triển sản phẩm và ứng dụng kỹ thuật. Sản phẩm bao gồm sơ mi rơ moóc chở bột rời, bồn chở rời kiểu đường biển, bồn chở rời công trường, xe trộn bê tông, xe vít tải vật liệu rời, dòng thiết bị vận chuyển vật liệu rời dạng bột, cùng xe chuyên dụng và phụ kiện rơ moóc.",
      "p3": "Chúng tôi coi trọng an toàn, hiệu quả, tiết kiệm năng lượng, độ bền và chất lượng sản phẩm, đồng thời cung cấp quy hoạch và dịch vụ theo nhu cầu thực tế của khách hàng để xây dựng quan hệ hợp tác lâu dài.",
      "title1b": "chế tạo xe trộn bê tông,"
    },
    "process": {
      "title": "Quy trình khép kín tại nhà máy",
      "desc": "Quy trình minh bạch, thời gian giao hàng ổn định."
    },
    "products": {
      "title": "Sản phẩm & Dịch vụ",
      "lead": "Cung cấp đa dạng thiết bị vận chuyển rời và giải pháp xe chuyên dụng theo hình thức vận chuyển và tình huống sử dụng.",
      "card1": {
        "title": "Sơ mi rơ moóc chở hàng rời hai trục và ba trục",
        "desc": "Sơ mi rơ moóc chở vật liệu rời dạng bột, có nhiều lựa chọn số trục, tải trọng và cấu trúc khác nhau.",
        "li1": "Xe bồn điện",
        "li2": "Thiết kế tải trọng cao",
        "li3": "Hướng tới nhẹ hóa và tiết kiệm năng lượng"
      },
      "card2": {
        "title": "Bồn chở rời & thiết bị rời",
        "desc": "Bao gồm bồn chở rời kiểu đường biển, bồn chở rời công trường, quy hoạch theo môi trường vận hành và nhu cầu vận chuyển khác nhau.",
        "li1": "Bồn chở rời kiểu đường biển",
        "li2": "Bồn chở rời công trường",
        "li3": "Tùy chỉnh theo quy cách đặc biệt",
        "li4": "Bồn Chứa Dạng Container"
      },
      "card3": {
        "title": "Xe trộn bê tông & xe chuyên dụng",
        "desc": "Thiết kế và chế tạo xe dùng cho mục đích đặc biệt, quy hoạch tổng thể theo nhu cầu vận hành của khách hàng.",
        "li1": "Xe trộn bê tông",
        "li2": "Xe dùng cho mục đích đặc biệt",
        "li3": "Thiết kế theo yêu cầu riêng"
      },
      "card4": {
        "title": "Khu Mua Bán Xe Cũ & Xe Mới",
        "desc": "Cung cấp dịch vụ mua bán xe cũ, tình trạng và thông số rõ ràng, giúp khách hàng lựa chọn mẫu xe phù hợp với nhu cầu vận chuyển."
      }
    },
    "visual": {
      "title1": "Từ thiết kế đến chế tạo,",
      "title2": "mỗi chiếc xe đều đáp ứng đúng nhu cầu thực tế.",
      "link": "Yêu cầu tài liệu sản phẩm →",
      "imgAlt": "Hình ảnh giới thiệu sản phẩm Jin Fu Enterprise: xe trộn bê tông và nhiều loại sơ mi rơ moóc chở bột rời 2, 3 trục"
    },
    "strength": {
      "title": "Thế mạnh",
      "lead": "Dựa trên kinh nghiệm chế tạo lâu năm, nghiên cứu phát triển kỹ thuật và quản lý chất lượng, đáp ứng nhu cầu thực tế của khách hàng công nghiệp.",
      "card1": {
        "title": "Hơn 20 năm kinh nghiệm ngành",
        "desc": "Thành lập năm 2001, tích lũy kinh nghiệm chế tạo xe chuyên dụng và thiết bị vận chuyển rời."
      },
      "card2": {
        "title": "Tự thiết kế & chế tạo",
        "desc": "Từ quy hoạch sản phẩm, thiết kế kết cấu đến chế tạo, làm chủ toàn bộ quy trình phát triển sản phẩm cốt lõi."
      },
      "card3": {
        "title": "Quy hoạch tùy chỉnh theo nhu cầu",
        "desc": "Trao đổi phương án phù hợp dựa trên vật liệu vận chuyển, tải trọng, môi trường sử dụng và yêu cầu công việc."
      },
      "card4": {
        "title": "Chất lượng & dịch vụ hậu mãi",
        "desc": "Coi trọng chất lượng chế tạo và dịch vụ hậu mãi, hỗ trợ khách hàng duy trì nhu cầu sử dụng thiết bị."
      }
    },
    "quality": {
      "title": "Quản lý chất lượng & chứng nhận",
      "desc": "Công ty luôn coi trọng quản lý chất lượng, an toàn sản phẩm và quy trình chế tạo, đã đạt chứng nhận Hệ thống Quản lý Chất lượng ISO 9001:2015.",
      "linkAria": "Mở ảnh lớn chứng chỉ ISO 9001:2015 (mở cửa sổ mới)",
      "imgAlt": "Chứng chỉ Hệ thống Quản lý Chất lượng ISO 9001:2015 của Jin Fu Enterprise Co., Ltd. (RoyalCert)"
    },
    "history": {
      "title": "Lịch sử phát triển",
      "item1Desc": "Thành lập Jin Fu Enterprise",
      "item2Label": "Phát triển",
      "item2Desc": "Liên tục đầu tư nghiên cứu phát triển xe chuyên dụng và thiết bị vận chuyển rời",
      "item3Label": "Chất lượng",
      "item3Desc": "Xây dựng hệ thống quản lý chất lượng và các chứng nhận liên quan",
      "item4Label": "Hiện tại",
      "item4Desc": "Tiếp tục cung cấp thiết kế, chế tạo và dịch vụ sản phẩm"
    },
    "contact": {
      "title1": "Có nhu cầu sản phẩm hoặc quy cách đặc biệt?",
      "title2": "Hãy trao đổi cùng chúng tôi.",
      "lead": "Nếu bạn đang tìm thiết bị vận chuyển vật liệu rời dạng bột, xe chuyên dụng hoặc giải pháp tùy chỉnh, hãy liên hệ trực tiếp với Jin Fu Enterprise.",
      "labelName": "Tên công ty",
      "labelPhone": "Điện thoại",
      "labelAddress": "Địa chỉ",
      "btnCall": "Gọi ngay",
      "btnFacebook": "Trang Facebook",
      "address": "660 & 660-1 Silin Rd., Yanchao Dist., Kaohsiung City, Taiwan"
    },
    "footer": {
      "tagline": "Xe chuyên dụng & Thiết bị vận chuyển vật liệu rời dạng bột"
    },
    "skip": {
      "link": "Chuyển đến nội dung chính"
    },
    "menu": {
      "open": "Mở menu",
      "close": "Đóng menu"
    },
    "meta": {
      "title": "Jin Fu Enterprise Co., Ltd. | Xe chuyên dụng & Thiết bị vận chuyển vật liệu rời dạng bột",
      "desc": "Thành lập năm 2001 tại Yanchao, Cao Hùng, Jin Fu Enterprise chuyên thiết kế và chế tạo xe chuyên dụng, sơ mi rơ moóc chở bột rời, bồn chở rời, xe vít tải vật liệu rời và các thiết bị liên quan, cung cấp quy hoạch sản phẩm, tùy chỉnh và dịch vụ hậu mãi."
    },
    "lang": {
      "switchLabel": "Chọn ngôn ngữ"
    },
    "brand": {
      "name": "Công ty TNHH Jin Fu Enterprise"
    },
    "productDetail": {
      "gallery": "Hình ảnh xe",
      "pending": "Hình ảnh xe đang được cập nhật, vui lòng quay lại sau.",
      "real": "Hình ảnh xe thực tế, gồm mặt trước, mặt sau và hai bên hông.",
      "photoPending": "Hình ảnh sắp có",
      "front": "Phía trước",
      "right": "Bên phải",
      "left": "Bên trái",
      "back": "Phía sau",
      "backLink": "Muốn biết thêm thông số hoặc báo giá? Liên hệ Jin Fu Enterprise →",
      "structureTitle": "Linh Kiện Chính & Cơ Cấu Truyền Động",
      "structureNote": "Tổng quan các linh kiện chính của thùng trộn, so sánh cơ cấu truyền động dạng xích và dạng nối trực tiếp.",
      "portfolio": "Dự Án Đã Hoàn Thành",
      "portfolioNote": "Các xe trộn bê tông thực tế đã bàn giao cho khách hàng.",
      "warehouse": "Ảnh Chụp Tại Xưởng",
      "containerTitle": "Bồn Chứa Dạng Container",
      "customTitle": "Thông Số Tùy Chỉnh",
      "newUnit": "Ảnh Xe Mới",
      "inFactory": "Ảnh Tại Xưởng",
      "exportShip": "Ảnh Xuất Khẩu Container",
      "siteTitle": "Bồn Chứa Rời Tại Công Trường & Thiết Bị Vận Chuyển",
      "siteNote": "Ảnh thực tế bồn chứa rời, phễu cấp liệu và thiết bị vận chuyển.",
      "siteTank": "Bồn Chứa Rời Tại Công Trường",
      "siteSet": "Bộ Thiết Bị Hoàn Chỉnh",
      "hopper": "Phễu Cấp Liệu",
      "conveyor": "Thiết Bị Vận Chuyển",
      "projectsNote": "Các dự án thực tế đã bàn giao cho khách hàng.",
      "shipTitle": "Bồn Chứa Rời Lắp Trên Tàu",
      "shipNote": "Chuyên dùng cho các đảo xa, hiện nay là Kim Môn (Kinmen), Bành Hồ (Penghu) và Mã Tổ (Matsu). Được lắp đặt trong hầm tàu, vật liệu được máy thổi khí đẩy sang xe chở hàng rời để vận chuyển.",
      "shipTank": "Bồn Chứa Rời Lắp Trên Tàu",
      "shipTransport": "Vận Chuyển Tại Cảng",
      "shipLift": "Thao Tác Cẩu Lắp",
      "shipInstall": "Lắp Đặt Trong Hầm Tàu",
      "triAxleTitle": "Sơ Mi Rơ Moóc Chở Hàng Rời 3 Trục",
      "twoAxleTitle": "Sơ Mi Rơ Moóc Chở Hàng Rời 2 Trục",
      "exportNigeria": "Nigeria・40T",
      "containerNote": "Thuận tiện cho việc vận chuyển đến các đảo xa như Kim Môn (Kinmen), Bành Hồ (Penghu) và Mã Tổ (Matsu).",
      "axle2": "Hai trục",
      "totalWeight": "Tổng trọng lượng liên kết 38,5 tấn",
      "cementPayload": "Tải trọng xi măng 46 tấn"
    },
    "lightbox": {
      "title": "Xem ảnh",
      "close": "Đóng",
      "prev": "Ảnh trước",
      "next": "Ảnh sau"
    }
  },
  "zh-Hans": {
    "nav": {
      "about": "关于巾富",
      "products": "产品与服务",
      "strength": "专业优势",
      "quality": "品质与认证",
      "cta": "立即咨询",
      "ariaLabel": "主要导览",
      "home": "首页"
    },
    "hero": {
      "title1": "运输设备与特种车辆",
      "title2": "粉粒体散装",
      "title3": "专业设计制造",
      "text": "从产品设计、制造到售后服务，依据不同运输需求提供专业规划与定制化解决方案。",
      "btnExplore": "探索产品",
      "btnContact": "联系我们",
      "fact1Label": "公司成立",
      "fact2Label": "年制造经验",
      "fact3Label": "燕巢制造基地",
      "fact3Value": "高雄"
    },
    "about": {
      "title1": "粉粒体散装半挂车，",
      "title2": "以技术与品质服务行业需求",
      "p1": "巾富企业股份有限公司成立于2001年，总部位于高雄市燕巢区，专业从事特种车辆及粉粒体散装运输相关产品的设计与制造。",
      "p2": "多年来持续投入产品研发与技术应用，产品涵盖粉粒体散装半挂车、船运式散装罐、工地式散装罐、搅拌车、散装螺旋车、粉粒体散装运输系列，以及特种车辆与挂车配件。",
      "p3": "我们重视安全、效率、节能、耐用与产品品质，并依客户实际需求提供产品规划与服务，建立长期合作关系。",
      "title1b": "水泥搅拌车制⁠造⁠，"
    },
    "process": {
      "title": "一条龙式作业",
      "desc": "流程透明、交期可控"
    },
    "products": {
      "title": "产品与服务",
      "lead": "依运输型态与使用场景，提供多元散装运输设备与特种车辆方案。",
      "card1": {
        "title": "两轴、三轴散装半拖车",
        "desc": "针对粉粒体物料运输需求，提供不同轴数、载重与结构配置的散装半挂车。",
        "li1": "电动槽罐车",
        "li2": "高载重型设计",
        "li3": "轻量化与节能方向"
      },
      "card2": {
        "title": "散装罐与散装设备",
        "desc": "包含船运式散装罐、工地式散装罐等，依不同作业环境与输送需求规划。",
        "li1": "船运式散装罐",
        "li2": "工地式散装罐",
        "li3": "特殊规格定制",
        "li4": "货柜式散装桶"
      },
      "card3": {
        "title": "搅拌车与特种车辆",
        "desc": "提供特殊用途车辆的设计与制造，依客户作业需求进行整体规划。",
        "li1": "搅拌车",
        "li2": "特殊用途车辆",
        "li3": "定制化设计"
      },
      "card4": {
        "title": "中古新车买卖专区",
        "desc": "提供中古车买卖服务，车况与规格透明公开，协助客户依运输需求挑选合适车型。"
      }
    },
    "visual": {
      "title1": "从设计到制造，",
      "title2": "让每一台车符合实际需求。",
      "link": "索取产品资料 →",
      "imgAlt": "巾富企业产品宣传图：搅拌车与多款三轴、两轴粉粒体散装半挂车"
    },
    "strength": {
      "title": "专业优势",
      "lead": "以长期制造经验、技术研发与品质管理，回应行业客户的实际需求。",
      "card1": {
        "title": "20余年行业经验",
        "desc": "自2001年成立，积累特种车辆与散装运输设备制造经验。"
      },
      "card2": {
        "title": "自主设计与制造",
        "desc": "从产品规划、结构设计到制造，掌握核心产品开发流程。"
      },
      "card3": {
        "title": "依需求定制规划",
        "desc": "依运输物料、载重、使用环境及作业需求讨论合适方案。"
      },
      "card4": {
        "title": "品质与售后服务",
        "desc": "重视制造品质与售后服务，协助客户维持设备使用需求。"
      }
    },
    "quality": {
      "title": "品质管理与专业认证",
      "desc": "公司长期重视品质管理、产品安全与制造流程，并取得 ISO 9001:2015 品质管理体系认证。",
      "linkAria": "打开 ISO 9001:2015 证书大图（新窗口）",
      "imgAlt": "巾富企业股份有限公司 ISO 9001:2015 品质管理体系认证证书（RoyalCert）"
    },
    "history": {
      "title": "公司沿革",
      "item1Desc": "巾富企业成立",
      "item2Label": "发展",
      "item2Desc": "持续投入特种车辆与散装运输设备研发",
      "item3Label": "品质",
      "item3Desc": "建立品质管理制度与相关认证",
      "item4Label": "现在",
      "item4Desc": "持续提供产品设计、制造与服务"
    },
    "contact": {
      "title1": "有产品需求或特殊规格？",
      "title2": "欢迎与我们探讨。",
      "lead": "若您正在寻找粉粒体散装运输设备、特种车辆或定制化方案，欢迎直接联系巾富企业。",
      "labelName": "公司名称",
      "labelPhone": "电话",
      "labelAddress": "地址",
      "btnCall": "立即致电",
      "btnFacebook": "Facebook 粉丝专页",
      "address": "高雄市燕巢区四林路660、660-1号"
    },
    "footer": {
      "tagline": "特种车辆・粉粒体散装运输设备"
    },
    "skip": {
      "link": "跳到主要内容"
    },
    "menu": {
      "open": "打开菜单",
      "close": "关闭菜单"
    },
    "meta": {
      "title": "巾富企业股份有限公司｜高雄特种车辆・粉粒体散装运输设备制造｜两轴三轴散装半拖车",
      "desc": "巾富企业股份有限公司成立于2001年，位于高雄燕巢，专业从事特种车辆、两轴三轴散装半拖车、电动槽罐车、散装桶、散装螺旋车、预拌车及中古特种车辆买卖，提供产品规划、客制化与售后服务，并取得ISO 9001品质管理体系认证。"
    },
    "lang": {
      "switchLabel": "选择语言"
    },
    "brand": {
      "name": "巾富企业股份有限公司"
    },
    "productDetail": {
      "gallery": "车型照片",
      "pending": "车型照片整理中，即将更新，敬请期待。",
      "real": "实车照片，含车头、车尾与左右两侧外观。",
      "photoPending": "照片准备中",
      "front": "前方",
      "right": "右侧",
      "left": "左侧",
      "back": "后方",
      "backLink": "想了解更多规格与报价？联络巾富企业 →",
      "structureTitle": "主要配件与传动机构",
      "structureNote": "鼓桶主要配件外观，以及链条式／直结式两种传动机构比较示意。",
      "portfolio": "完工实绩",
      "portfolioNote": "实际交付各客户的预拌车案例。",
      "warehouse": "厂内实拍",
      "containerTitle": "货柜式散装桶",
      "customTitle": "特殊规格客制",
      "newUnit": "新车实拍",
      "inFactory": "厂内制造实拍",
      "exportShip": "货柜出口实拍",
      "siteTitle": "工地式散装桶及输送设备",
      "siteNote": "散装桶、进料斗与输送设备实拍。",
      "siteTank": "工地式散装桶",
      "siteSet": "整组设备",
      "hopper": "进料斗",
      "conveyor": "输送设备",
      "projectsNote": "实际交付各客户的案例。",
      "shipTitle": "船运式散装桶",
      "shipNote": "外岛专用，现今金门、澎湖、马祖，安装在船舱经由鼓风机打料送至散装车运送。",
      "shipTank": "船运式散装桶",
      "shipTransport": "港区运送",
      "shipLift": "吊装作业",
      "shipInstall": "船舱内安装",
      "triAxleTitle": "三轴散装半挂车",
      "twoAxleTitle": "两轴散装半挂车",
      "exportNigeria": "尼日利亚・40T",
      "containerNote": "方便外岛载运如金门、澎湖、马祖。",
      "axle2": "两轴",
      "totalWeight": "总联结重量38.5吨",
      "cementPayload": "水泥载重46吨"
    },
    "lightbox": {
      "title": "图片查看",
      "close": "关闭",
      "prev": "上一张",
      "next": "下一张"
    }
  },
  "id": {
    "nav": {
      "about": "Tentang Kami",
      "products": "Produk",
      "strength": "Keunggulan",
      "quality": "Kualitas",
      "cta": "Hubungi Kami",
      "ariaLabel": "Navigasi utama",
      "home": "Beranda"
    },
    "hero": {
      "title1": "& Kendaraan Khusus",
      "title2": "Peralatan Transportasi Bubuk Curah",
      "title3": "Desain & Manufaktur Profesional",
      "text": "Dari desain produk, manufaktur, hingga layanan purnajual, kami menyediakan perencanaan profesional dan solusi khusus sesuai kebutuhan transportasi Anda.",
      "btnExplore": "Jelajahi Produk",
      "btnContact": "Hubungi Kami",
      "fact1Label": "Didirikan",
      "fact2Label": "Tahun Pengalaman Manufaktur",
      "fact3Label": "Pabrik Yanchao, Kaohsiung",
      "fact3Value": "Kaohsiung"
    },
    "about": {
      "title1": "Semi-Trailer Bubuk Curah,",
      "title2": "Melayani Kebutuhan Industri dengan Teknologi dan Kualitas",
      "p1": "Didirikan pada tahun 2001 dan berkantor pusat di Distrik Yanchao, Kaohsiung, Jin Fu Enterprise Co., Ltd. berspesialisasi dalam desain dan manufaktur kendaraan khusus serta produk transportasi bubuk curah.",
      "p2": "Selama bertahun-tahun, kami terus berinvestasi dalam pengembangan produk dan penerapan teknis. Lini produk kami meliputi semi-trailer bubuk curah, tangki curah tipe laut dan lokasi proyek, truk molen, truk konveyor ulir curah, serta rangkaian lengkap peralatan transportasi bubuk curah, kendaraan khusus, dan aksesori trailer.",
      "p3": "Kami mengutamakan keselamatan, efisiensi, penghematan energi, daya tahan, dan kualitas produk, menawarkan perencanaan serta layanan yang disesuaikan dengan kebutuhan aktual setiap pelanggan untuk membangun kemitraan jangka panjang.",
      "title1b": "Manufaktur Truk Molen Beton,"
    },
    "process": {
      "title": "Produksi Menyeluruh di Satu Pabrik",
      "desc": "Proses transparan, waktu pengiriman yang dapat diandalkan."
    },
    "products": {
      "title": "Produk & Layanan",
      "lead": "Beragam peralatan transportasi curah dan solusi kendaraan khusus untuk berbagai jenis transportasi dan kebutuhan penggunaan.",
      "card1": {
        "title": "Semi-Trailer Curah Dua dan Tiga Sumbu",
        "desc": "Semi-trailer untuk transportasi bubuk curah, tersedia dalam berbagai jumlah sumbu, kapasitas muatan, dan konfigurasi struktural.",
        "li1": "Trailer Tangki Listrik",
        "li2": "Desain muatan tinggi",
        "li3": "Opsi ringan dan hemat energi"
      },
      "card2": {
        "title": "Tangki Curah & Peralatan Curah",
        "desc": "Termasuk tangki curah tipe laut dan lokasi proyek, direncanakan sesuai lingkungan operasi dan kebutuhan pengangkutan yang berbeda.",
        "li1": "Tangki curah tipe laut",
        "li2": "Tangki curah lokasi proyek",
        "li3": "Spesifikasi khusus",
        "li4": "Tangki Curah Tipe Kontainer"
      },
      "card3": {
        "title": "Truk Molen & Kendaraan Khusus",
        "desc": "Desain dan manufaktur kendaraan untuk keperluan khusus, direncanakan secara menyeluruh sesuai kebutuhan operasional pelanggan.",
        "li1": "Truk molen",
        "li2": "Kendaraan tujuan khusus",
        "li3": "Desain kustom"
      },
      "card4": {
        "title": "Zona Jual Beli Kendaraan Bekas & Baru",
        "desc": "Menyediakan layanan jual beli kendaraan bekas, dengan kondisi dan spesifikasi transparan untuk membantu pelanggan memilih model yang sesuai kebutuhan angkut."
      }
    },
    "visual": {
      "title1": "Dari Desain hingga Manufaktur,",
      "title2": "Setiap Kendaraan Dibuat Sesuai Kebutuhan Nyata.",
      "link": "Minta Informasi Produk →",
      "imgAlt": "Galeri produk Jin Fu Enterprise: truk molen dan berbagai semi-trailer bubuk curah 2 dan 3 sumbu"
    },
    "strength": {
      "title": "Keunggulan Kami",
      "lead": "Didukung pengalaman manufaktur jangka panjang, riset & pengembangan teknis, serta manajemen kualitas, kami menjawab kebutuhan nyata pelanggan industri.",
      "card1": {
        "title": "20+ Tahun Pengalaman Industri",
        "desc": "Didirikan tahun 2001, dengan pengalaman terakumulasi dalam manufaktur kendaraan khusus dan peralatan transportasi curah."
      },
      "card2": {
        "title": "Desain & Manufaktur Mandiri",
        "desc": "Dari perencanaan produk, desain struktural, hingga manufaktur, kami mengelola proses pengembangan produk inti secara mandiri."
      },
      "card3": {
        "title": "Perencanaan Khusus Sesuai Kebutuhan",
        "desc": "Kami mendiskusikan solusi yang sesuai berdasarkan material yang diangkut, muatan, lingkungan operasi, dan kebutuhan pekerjaan."
      },
      "card4": {
        "title": "Kualitas & Layanan Purnajual",
        "desc": "Kami mengutamakan kualitas manufaktur dan dukungan purnajual untuk membantu pelanggan merawat peralatan mereka."
      }
    },
    "quality": {
      "title": "Manajemen Kualitas & Sertifikasi",
      "desc": "Perusahaan selalu mengutamakan manajemen kualitas, keamanan produk, dan proses manufaktur, serta memegang sertifikasi Sistem Manajemen Kualitas ISO 9001:2015.",
      "linkAria": "Buka sertifikat ISO 9001:2015 (terbuka di jendela baru)",
      "imgAlt": "Sertifikat Sistem Manajemen Kualitas ISO 9001:2015 Jin Fu Enterprise Co., Ltd. (RoyalCert)"
    },
    "history": {
      "title": "Sejarah Perusahaan",
      "item1Desc": "Jin Fu Enterprise didirikan",
      "item2Label": "Pertumbuhan",
      "item2Desc": "Investasi berkelanjutan dalam R&D untuk kendaraan khusus dan peralatan transportasi curah",
      "item3Label": "Kualitas",
      "item3Desc": "Membangun sistem manajemen kualitas dan sertifikasi terkait",
      "item4Label": "Saat Ini",
      "item4Desc": "Terus menyediakan desain produk, manufaktur, dan layanan"
    },
    "contact": {
      "title1": "Punya Kebutuhan Produk atau Spesifikasi Khusus?",
      "title2": "Mari Berdiskusi.",
      "lead": "Jika Anda mencari peralatan transportasi bubuk curah, kendaraan khusus, atau solusi kustom, silakan hubungi Jin Fu Enterprise secara langsung.",
      "labelName": "Nama Perusahaan",
      "labelPhone": "Telepon",
      "labelAddress": "Alamat",
      "btnCall": "Telepon Sekarang",
      "btnFacebook": "Halaman Facebook",
      "address": "660 & 660-1 Silin Rd., Yanchao Dist., Kaohsiung City, Taiwan"
    },
    "footer": {
      "tagline": "Kendaraan Khusus & Peralatan Transportasi Bubuk Curah"
    },
    "skip": {
      "link": "Langsung ke konten utama"
    },
    "menu": {
      "open": "Buka menu",
      "close": "Tutup menu"
    },
    "meta": {
      "title": "Jin Fu Enterprise Co., Ltd. | Kendaraan Khusus & Peralatan Transportasi Bubuk Curah",
      "desc": "Didirikan pada tahun 2001 dan berbasis di Yanchao, Kaohsiung, Jin Fu Enterprise berspesialisasi dalam desain dan manufaktur kendaraan khusus, semi-trailer bubuk curah, tangki curah, truk konveyor ulir curah, dan peralatan terkait, menawarkan perencanaan produk, kustomisasi, dan layanan purnajual."
    },
    "lang": {
      "switchLabel": "Pilih bahasa"
    },
    "brand": {
      "name": "Jin Fu Enterprise Co., Ltd."
    },
    "productDetail": {
      "gallery": "Foto Kendaraan",
      "pending": "Foto kendaraan sedang disiapkan dan akan segera diperbarui.",
      "real": "Foto kendaraan asli, termasuk tampilan depan, belakang, dan kedua sisi.",
      "photoPending": "Foto segera hadir",
      "front": "Depan",
      "right": "Sisi Kanan",
      "left": "Sisi Kiri",
      "back": "Belakang",
      "backLink": "Ingin spesifikasi atau penawaran harga lebih lanjut? Hubungi Jin Fu Enterprise →",
      "structureTitle": "Komponen Utama & Struktur Penggerak",
      "structureNote": "Gambaran komponen utama drum, serta perbandingan struktur penggerak rantai dan penggerak langsung.",
      "portfolio": "Proyek Selesai",
      "portfolioNote": "Truk molen aktual yang telah dikirim ke pelanggan kami.",
      "warehouse": "Foto Di Pabrik",
      "containerTitle": "Tangki Curah Tipe Kontainer",
      "customTitle": "Spesifikasi Khusus",
      "newUnit": "Foto Unit Baru",
      "inFactory": "Foto Di Pabrik",
      "exportShip": "Foto Ekspor Kontainer",
      "siteTitle": "Tangki Curah Lokasi Proyek & Peralatan Konveyor",
      "siteNote": "Foto tangki curah, hopper pengumpan, dan peralatan konveyor.",
      "siteTank": "Tangki Curah Lokasi Proyek",
      "siteSet": "Satu Set Lengkap",
      "hopper": "Hopper Pengumpan",
      "conveyor": "Peralatan Konveyor",
      "projectsNote": "Proyek aktual yang telah dikirim ke pelanggan kami.",
      "shipTitle": "Tangki Curah Tipe Kapal",
      "shipNote": "Khusus untuk pulau-pulau terluar, saat ini Kinmen, Penghu, dan Matsu. Dipasang di palka kapal, material dialirkan dengan blower ke truk curah untuk diangkut.",
      "shipTank": "Tangki Curah Tipe Kapal",
      "shipTransport": "Pengangkutan di Pelabuhan",
      "shipLift": "Pekerjaan Pengangkatan",
      "shipInstall": "Terpasang di Palka Kapal",
      "triAxleTitle": "Semi-Trailer Curah 3 Sumbu",
      "twoAxleTitle": "Semi-Trailer Curah 2 Sumbu",
      "exportNigeria": "Nigeria・40T",
      "containerNote": "Memudahkan pengangkutan ke pulau-pulau terluar seperti Kinmen, Penghu, dan Matsu.",
      "axle2": "Dua sumbu",
      "totalWeight": "Berat gabungan total 38,5 ton",
      "cementPayload": "Kapasitas muatan semen 46 ton"
    },
    "lightbox": {
      "title": "Penampil gambar",
      "close": "Tutup",
      "prev": "Sebelumnya",
      "next": "Berikutnya"
    }
  },
  "th": {
    "nav": {
      "about": "เกี่ยวกับเรา",
      "products": "สินค้า",
      "strength": "จุดแข็งของเรา",
      "quality": "คุณภาพ",
      "cta": "ติดต่อเรา",
      "ariaLabel": "เมนูหลัก",
      "home": "หน้าแรก"
    },
    "hero": {
      "title1": "และรถบรรทุกเฉพาะทาง",
      "title2": "อุปกรณ์ขนส่งผงเทกอง",
      "title3": "ออกแบบและผลิตอย่างมืออาชีพ",
      "text": "ตั้งแต่การออกแบบผลิตภัณฑ์ การผลิต ไปจนถึงบริการหลังการขาย เรามอบการวางแผนอย่างมืออาชีพและโซลูชันที่ปรับแต่งได้ตามความต้องการขนส่งของคุณ",
      "btnExplore": "ดูสินค้าของเรา",
      "btnContact": "ติดต่อเรา",
      "fact1Label": "ก่อตั้งเมื่อ",
      "fact2Label": "ปีแห่งประสบการณ์การผลิต",
      "fact3Label": "โรงงานเหยียนเฉา เกาสง",
      "fact3Value": "เกาสง"
    },
    "about": {
      "title1": "เซมิเทรลเลอร์ขนส่งผงเทกอง",
      "title2": "ตอบโจทย์อุตสาหกรรมด้วยเทคโนโลยีและคุณภาพ",
      "p1": "บริษัท Jin Fu Enterprise Co., Ltd. ก่อตั้งขึ้นในปี 2001 มีสำนักงานใหญ่อยู่ที่เขตเหยียนเฉา เมืองเกาสง เชี่ยวชาญด้านการออกแบบและผลิตรถบรรทุกเฉพาะทางและผลิตภัณฑ์ขนส่งผงเทกอง",
      "p2": "ตลอดหลายปีที่ผ่านมา เราลงทุนอย่างต่อเนื่องในการพัฒนาผลิตภัณฑ์และการประยุกต์ใช้เทคนิค กลุ่มผลิตภัณฑ์ของเราครอบคลุมรถกึ่งพ่วงบรรทุกผงเทกอง ถังบรรทุกเทกองแบบเรือขนส่งและแบบไซต์งาน รถโม่ปูน รถลำเลียงสกรูเทกอง รวมถึงอุปกรณ์ขนส่งผงเทกองครบวงจร ตลอดจนรถบรรทุกเฉพาะทางและอุปกรณ์เสริมรถพ่วง",
      "p3": "เราให้ความสำคัญกับความปลอดภัย ประสิทธิภาพ การประหยัดพลังงาน ความทนทาน และคุณภาพผลิตภัณฑ์ พร้อมนำเสนอการวางแผนและบริการตามความต้องการจริงของลูกค้าเพื่อสร้างความร่วมมือระยะยาว",
      "title1b": "ผลิตรถโม่ปูน"
    },
    "process": {
      "title": "การผลิตครบวงจรในโรงงานเดียว",
      "desc": "กระบวนการโปร่งใส กำหนดส่งมอบที่เชื่อถือได้"
    },
    "products": {
      "title": "สินค้าและบริการ",
      "lead": "อุปกรณ์ขนส่งเทกองและโซลูชันรถบรรทุกเฉพาะทางที่หลากหลาย ตามรูปแบบการขนส่งและลักษณะการใช้งาน",
      "card1": {
        "title": "รถกึ่งพ่วงบรรทุกเทกองสองเพลาและสามเพลา",
        "desc": "รถกึ่งพ่วงสำหรับขนส่งผงเทกอง มีให้เลือกหลายจำนวนเพลา น้ำหนักบรรทุก และโครงสร้าง",
        "li1": "รถถังไฟฟ้า",
        "li2": "ดีไซน์รับน้ำหนักสูง",
        "li3": "ตัวเลือกน้ำหนักเบาและประหยัดพลังงาน"
      },
      "card2": {
        "title": "ถังบรรทุกเทกองและอุปกรณ์เทกอง",
        "desc": "รวมถึงถังบรรทุกเทกองแบบเรือขนส่งและแบบไซต์งาน ออกแบบตามสภาพแวดล้อมการทำงานและความต้องการขนส่งที่แตกต่างกัน",
        "li1": "ถังบรรทุกเทกองแบบเรือขนส่ง",
        "li2": "ถังบรรทุกเทกองแบบไซต์งาน",
        "li3": "ผลิตตามสเปกพิเศษ",
        "li4": "ถังเทกองแบบตู้คอนเทนเนอร์"
      },
      "card3": {
        "title": "รถโม่ปูนและรถบรรทุกเฉพาะทาง",
        "desc": "ออกแบบและผลิตรถสำหรับวัตถุประสงค์พิเศษ วางแผนอย่างครบถ้วนตามความต้องการใช้งานของลูกค้า",
        "li1": "รถโม่ปูน",
        "li2": "รถเพื่อวัตถุประสงค์พิเศษ",
        "li3": "ออกแบบตามความต้องการ"
      },
      "card4": {
        "title": "โซนซื้อขายรถมือสองและรถใหม่",
        "desc": "ให้บริการซื้อขายรถมือสอง สภาพและสเปกโปร่งใส ช่วยลูกค้าเลือกรุ่นที่เหมาะกับความต้องการขนส่ง"
      }
    },
    "visual": {
      "title1": "จากการออกแบบสู่การผลิต",
      "title2": "รถทุกคันถูกสร้างขึ้นให้ตรงกับความต้องการใช้งานจริง",
      "link": "ขอข้อมูลผลิตภัณฑ์ →",
      "imgAlt": "ภาพรวมผลิตภัณฑ์ของ Jin Fu Enterprise: รถโม่ปูนและรถกึ่งพ่วงบรรทุกผงเทกองแบบ 2 และ 3 เพลาหลายรุ่น"
    },
    "strength": {
      "title": "จุดแข็งของเรา",
      "lead": "ด้วยประสบการณ์การผลิตระยะยาว การวิจัยและพัฒนาด้านเทคนิค และการบริหารคุณภาพ เราตอบสนองความต้องการที่แท้จริงของลูกค้าในภาคอุตสาหกรรม",
      "card1": {
        "title": "ประสบการณ์กว่า 20 ปีในอุตสาหกรรม",
        "desc": "ก่อตั้งในปี 2001 สั่งสมประสบการณ์การผลิตรถบรรทุกเฉพาะทางและอุปกรณ์ขนส่งเทกอง"
      },
      "card2": {
        "title": "ออกแบบและผลิตเอง",
        "desc": "ตั้งแต่การวางแผนผลิตภัณฑ์ การออกแบบโครงสร้าง ไปจนถึงการผลิต เราควบคุมกระบวนการพัฒนาผลิตภัณฑ์หลักด้วยตนเอง"
      },
      "card3": {
        "title": "วางแผนตามความต้องการเฉพาะ",
        "desc": "หารือแนวทางที่เหมาะสมตามวัสดุที่ขนส่ง น้ำหนักบรรทุก สภาพแวดล้อมการใช้งาน และความต้องการของงาน"
      },
      "card4": {
        "title": "คุณภาพและบริการหลังการขาย",
        "desc": "ให้ความสำคัญกับคุณภาพการผลิตและบริการหลังการขาย เพื่อช่วยลูกค้าดูแลรักษาอุปกรณ์"
      }
    },
    "quality": {
      "title": "การบริหารคุณภาพและการรับรอง",
      "desc": "บริษัทให้ความสำคัญกับการบริหารคุณภาพ ความปลอดภัยของผลิตภัณฑ์ และกระบวนการผลิตมาอย่างยาวนาน และได้รับการรับรองระบบบริหารคุณภาพ ISO 9001:2015",
      "linkAria": "เปิดใบรับรอง ISO 9001:2015 ขนาดใหญ่ (เปิดในหน้าต่างใหม่)",
      "imgAlt": "ใบรับรองระบบบริหารคุณภาพ ISO 9001:2015 ของ Jin Fu Enterprise Co., Ltd. (RoyalCert)"
    },
    "history": {
      "title": "ประวัติความเป็นมาของบริษัท",
      "item1Desc": "ก่อตั้ง Jin Fu Enterprise",
      "item2Label": "การเติบโต",
      "item2Desc": "ลงทุนวิจัยและพัฒนารถบรรทุกเฉพาะทางและอุปกรณ์ขนส่งเทกองอย่างต่อเนื่อง",
      "item3Label": "คุณภาพ",
      "item3Desc": "สร้างระบบบริหารคุณภาพและการรับรองที่เกี่ยวข้อง",
      "item4Label": "ปัจจุบัน",
      "item4Desc": "ให้บริการออกแบบ ผลิต และบริการผลิตภัณฑ์อย่างต่อเนื่อง"
    },
    "contact": {
      "title1": "มีความต้องการสินค้าหรือสเปกพิเศษหรือไม่?",
      "title2": "ยินดีพูดคุยกับเรา",
      "lead": "หากคุณกำลังมองหาอุปกรณ์ขนส่งผงเทกอง รถบรรทุกเฉพาะทาง หรือโซลูชันที่ปรับแต่งได้ ติดต่อ Jin Fu Enterprise ได้โดยตรง",
      "labelName": "ชื่อบริษัท",
      "labelPhone": "โทรศัพท์",
      "labelAddress": "ที่อยู่",
      "btnCall": "โทรเลย",
      "btnFacebook": "เพจ Facebook",
      "address": "660 & 660-1 Silin Rd., Yanchao Dist., Kaohsiung City, Taiwan"
    },
    "footer": {
      "tagline": "รถบรรทุกเฉพาะทางและอุปกรณ์ขนส่งผงเทกอง"
    },
    "skip": {
      "link": "ข้ามไปยังเนื้อหาหลัก"
    },
    "menu": {
      "open": "เปิดเมนู",
      "close": "ปิดเมนู"
    },
    "meta": {
      "title": "Jin Fu Enterprise Co., Ltd. | รถบรรทุกเฉพาะทางและอุปกรณ์ขนส่งผงเทกอง",
      "desc": "ก่อตั้งในปี 2001 ตั้งอยู่ที่เหยียนเฉา เกาสง Jin Fu Enterprise เชี่ยวชาญด้านการออกแบบและผลิตรถบรรทุกเฉพาะทาง รถกึ่งพ่วงบรรทุกผงเทกอง ถังบรรทุกเทกอง รถลำเลียงสกรูเทกอง และอุปกรณ์ที่เกี่ยวข้อง พร้อมให้บริการวางแผนผลิตภัณฑ์ ปรับแต่ง และบริการหลังการขาย"
    },
    "lang": {
      "switchLabel": "เลือกภาษา"
    },
    "brand": {
      "name": "Jin Fu Enterprise Co., Ltd."
    },
    "productDetail": {
      "gallery": "รูปภาพรถ",
      "pending": "กำลังเตรียมรูปภาพรถ จะอัปเดตเร็ว ๆ นี้",
      "real": "ภาพรถจริง รวมด้านหน้า ด้านหลัง และด้านข้างทั้งสองด้าน",
      "photoPending": "รูปภาพเร็ว ๆ นี้",
      "front": "ด้านหน้า",
      "right": "ด้านขวา",
      "left": "ด้านซ้าย",
      "back": "ด้านหลัง",
      "backLink": "ต้องการสเปกหรือใบเสนอราคาเพิ่มเติม? ติดต่อ Jin Fu Enterprise →",
      "structureTitle": "ชิ้นส่วนหลักและโครงสร้างระบบขับเคลื่อน",
      "structureNote": "ภาพรวมชิ้นส่วนหลักของถังผสม พร้อมเปรียบเทียบโครงสร้างขับเคลื่อนแบบโซ่และแบบต่อตรง",
      "portfolio": "ผลงานที่เสร็จสมบูรณ์",
      "portfolioNote": "รถโม่ปูนจริงที่ส่งมอบให้ลูกค้าของเรา",
      "warehouse": "ภาพถ่ายในโรงงาน",
      "containerTitle": "ถังเทกองแบบตู้คอนเทนเนอร์",
      "customTitle": "สเปกพิเศษตามสั่ง",
      "newUnit": "ภาพรถใหม่",
      "inFactory": "ภาพถ่ายในโรงงาน",
      "exportShip": "ภาพการส่งออกตู้คอนเทนเนอร์",
      "siteTitle": "ถังเทกองหน้างานและอุปกรณ์ลำเลียง",
      "siteNote": "ภาพถ่ายจริงของถังเทกอง ถังป้อนวัสดุ และอุปกรณ์ลำเลียง",
      "siteTank": "ถังเทกองหน้างาน",
      "siteSet": "ชุดอุปกรณ์ครบชุด",
      "hopper": "ถังป้อนวัสดุ",
      "conveyor": "อุปกรณ์ลำเลียง",
      "projectsNote": "ผลงานจริงที่ส่งมอบให้ลูกค้าของเรา",
      "shipTitle": "ถังเทกองสำหรับติดตั้งบนเรือ",
      "shipNote": "ใช้เฉพาะสำหรับเกาะรอบนอก ปัจจุบันคือจินเหมิน (Kinmen) เผิงหู (Penghu) และหมาจู่ (Matsu) ติดตั้งในระวางเรือ ใช้เครื่องเป่าลมส่งวัสดุไปยังรถเทกองเพื่อขนส่งต่อ",
      "shipTank": "ถังเทกองสำหรับติดตั้งบนเรือ",
      "shipTransport": "การขนส่งในท่าเรือ",
      "shipLift": "งานยกด้วยเครน",
      "shipInstall": "ติดตั้งในระวางเรือ",
      "triAxleTitle": "รถกึ่งพ่วงเทกอง 3 เพลา",
      "twoAxleTitle": "รถกึ่งพ่วงเทกอง 2 เพลา",
      "exportNigeria": "ไนจีเรีย・40T",
      "containerNote": "สะดวกต่อการขนส่งไปยังเกาะรอบนอก เช่น จินเหมิน (Kinmen) เผิงหู (Penghu) และหมาจู่ (Matsu)",
      "axle2": "สองเพลา",
      "totalWeight": "น้ำหนักรวมพ่วง 38.5 ตัน",
      "cementPayload": "บรรทุกซีเมนต์ 46 ตัน"
    },
    "lightbox": {
      "title": "ตัวดูรูปภาพ",
      "close": "ปิด",
      "prev": "ก่อนหน้า",
      "next": "ถัดไป"
    }
  }
};

  var LANGS = ["zh-Hant", "en", "ja", "vi", "id", "th", "zh-Hans"];
  var FLAG = {
    "zh-Hant": "<img class=\"flag-img\" src=\"assets/flag-tw.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "en": "<img class=\"flag-img\" src=\"assets/flag-gb.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "ja": "<img class=\"flag-img\" src=\"assets/flag-jp.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "vi": "<img class=\"flag-img\" src=\"assets/flag-vn.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "id": "<img class=\"flag-img\" src=\"assets/flag-id.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "th": "<img class=\"flag-img\" src=\"assets/flag-th.svg\" alt=\"\" width=\"21\" height=\"14\">",
    "zh-Hans": "<img class=\"flag-img\" src=\"assets/flag-cn.svg\" alt=\"\" width=\"21\" height=\"14\">"
  };
  var CODE = { "zh-Hant": "繁中", "en": "EN", "ja": "JA", "vi": "VI", "id": "ID", "th": "TH", "zh-Hans": "简中" };
  var STORAGE_KEY = "jinfu-lang";

  function detectDefault() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return "zh-Hant";
  }

  function get(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return cur;
  }

  var I18N = {
    current: detectDefault(),
    t: function (key) {
      var v = get(DICT[this.current], key);
      if (v == null) v = get(DICT["zh-Hant"], key);
      return v == null ? "" : v;
    }
  };
  window.I18N = I18N;

  function applyTextNodes() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute("data-i18n");
      els[i].textContent = I18N.t(key);
    }
  }

  function applyAttrNodes() {
    var els = document.querySelectorAll("[data-i18n-attr]");
    for (var i = 0; i < els.length; i++) {
      var raw = els[i].getAttribute("data-i18n-attr");
      var map;
      try { map = JSON.parse(raw); } catch (e) { continue; }
      for (var attr in map) {
        if (Object.prototype.hasOwnProperty.call(map, attr)) {
          els[i].setAttribute(attr, I18N.t(map[attr]));
        }
      }
    }
  }

  function updateMenuBtnLabel() {
    var menuBtn = document.querySelector(".menu-btn");
    var nav = document.getElementById("nav");
    if (!menuBtn || !nav) return;
    var isOpen = nav.classList.contains("open");
    menuBtn.setAttribute("aria-label", I18N.t(isOpen ? "menu.close" : "menu.open"));
  }

  function updateLangToggleUI() {
    var flagEl = document.querySelector(".lang-toggle .lang-flag");
    var codeEl = document.querySelector(".lang-toggle .lang-code");
    if (flagEl) flagEl.innerHTML = FLAG[I18N.current];
    if (codeEl) codeEl.textContent = CODE[I18N.current];
    var items = document.querySelectorAll(".lang-menu li");
    for (var i = 0; i < items.length; i++) {
      var isSel = items[i].getAttribute("data-lang") === I18N.current;
      items[i].setAttribute("aria-selected", isSel ? "true" : "false");
    }
  }

  function ensureJaFont() {
    if (document.getElementById("jp-font")) return;
    var l = document.createElement("link");
    l.id = "jp-font";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&display=swap";
    document.head.appendChild(l);
  }

  function applyLanguage(lang, opts) {
    if (LANGS.indexOf(lang) === -1) lang = "zh-Hant";
    I18N.current = lang;
    document.documentElement.lang = lang;
    if (lang === "ja") ensureJaFont();
    applyTextNodes();
    applyAttrNodes();
    updateMenuBtnLabel();
    updateLangToggleUI();
    var titleKey = document.body.getAttribute("data-title-key");
    document.title = titleKey ? (I18N.t(titleKey) + "｜" + I18N.t("brand.name")) : I18N.t("meta.title");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var descKey = document.body.getAttribute("data-desc-key");
      metaDesc.setAttribute("content", descKey ? I18N.t(descKey) : I18N.t("meta.desc"));
    }
    if (!opts || opts.persist !== false) {
      try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }
  }
  I18N.apply = applyLanguage;

  function initLangSwitch() {
    var wrap = document.querySelector(".lang-switch");
    var toggle = document.querySelector(".lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!wrap || !toggle || !menu) return;

    function setMenuOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) { menu.removeAttribute("hidden"); } else { menu.setAttribute("hidden", ""); }
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    menu.querySelectorAll("li[data-lang] button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var li = btn.closest("li");
        var lang = li.getAttribute("data-lang");
        applyLanguage(lang);
        setMenuOpen(false);
        toggle.focus();
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !wrap.contains(e.target)) {
        setMenuOpen(false);
      }
    });
  }

  function init() {
    initLangSwitch();
    applyLanguage(I18N.current, { persist: false });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
