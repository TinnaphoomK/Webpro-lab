const tambons = JSON.parse(`[
    {
        "id": 100402,
        "zip_code": 10500,
        "name_th": "สีลม",
        "name_en": "Si Lom",
        "amphure_id": 1004,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104901,
        "zip_code": 10140,
        "name_th": "บางมด",
        "name_en": "Bang Mot",
        "amphure_id": 1049,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100101,
        "zip_code": 10200,
        "name_th": "พระบรมมหาราชวัง",
        "name_en": "Phra Borom Maha Ratchawang",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100102,
        "zip_code": 10200,
        "name_th": "วังบูรพาภิรมย์",
        "name_en": "Wang Burapha Phirom",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100103,
        "zip_code": 10200,
        "name_th": "วัดราชบพิธ",
        "name_en": "Wat Ratchabophit",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100104,
        "zip_code": 10200,
        "name_th": "สำราญราษฎร์",
        "name_en": "Samran Rat",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100105,
        "zip_code": 10200,
        "name_th": "ศาลเจ้าพ่อเสือ",
        "name_en": "San Chao Pho Suea",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100106,
        "zip_code": 10200,
        "name_th": "เสาชิงช้า",
        "name_en": "Sao Chingcha",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100107,
        "zip_code": 10200,
        "name_th": "บวรนิเวศ",
        "name_en": "Bowon Niwet",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100108,
        "zip_code": 10200,
        "name_th": "ตลาดยอด",
        "name_en": "Talat Yot",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100109,
        "zip_code": 10200,
        "name_th": "ชนะสงคราม",
        "name_en": "Chana Songkhram",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100110,
        "zip_code": 10200,
        "name_th": "บ้านพานถม",
        "name_en": "Ban Phan Thom",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100111,
        "zip_code": 10200,
        "name_th": "บางขุนพรหม",
        "name_en": "Bang Khun Phrom",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100112,
        "zip_code": 10200,
        "name_th": "วัดสามพระยา",
        "name_en": "Wat Sam Phraya",
        "amphure_id": 1001,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100201,
        "zip_code": 10300,
        "name_th": "ดุสิต",
        "name_en": "Dusit",
        "amphure_id": 1002,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100202,
        "zip_code": 10300,
        "name_th": "วชิรพยาบาล",
        "name_en": "Wachiraphayaban",
        "amphure_id": 1002,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100203,
        "zip_code": 10300,
        "name_th": "สวนจิตรลดา",
        "name_en": "Suan Chit Lada",
        "amphure_id": 1002,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100204,
        "zip_code": 10300,
        "name_th": "สี่แยกมหานาค",
        "name_en": "Si Yaek Maha Nak",
        "amphure_id": 1002,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100206,
        "zip_code": 10300,
        "name_th": "ถนนนครไชยศรี",
        "name_en": "Thanon Nakhon Chai Si",
        "amphure_id": 1002,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100301,
        "zip_code": 10530,
        "name_th": "กระทุ่มราย",
        "name_en": "Krathum Rai",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100302,
        "zip_code": 10530,
        "name_th": "หนองจอก",
        "name_en": "Nong Chok",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100303,
        "zip_code": 10530,
        "name_th": "คลองสิบ",
        "name_en": "Khlong Sip",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100304,
        "zip_code": 10530,
        "name_th": "คลองสิบสอง",
        "name_en": "Khlong Sip Song",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100305,
        "zip_code": 10530,
        "name_th": "โคกแฝด",
        "name_en": "Khok Faet",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100306,
        "zip_code": 10530,
        "name_th": "คู้ฝั่งเหนือ",
        "name_en": "Khu Fang Nuea",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100307,
        "zip_code": 10530,
        "name_th": "ลำผักชี",
        "name_en": "Lam Phak Chi",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100308,
        "zip_code": 10530,
        "name_th": "ลำต้อยติ่ง",
        "name_en": "Lam Toiting",
        "amphure_id": 1003,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100401,
        "zip_code": 10500,
        "name_th": "มหาพฤฒาราม",
        "name_en": "Maha Phruettharam",
        "amphure_id": 1004,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100403,
        "zip_code": 10500,
        "name_th": "สุริยวงศ์",
        "name_en": "Suriyawong",
        "amphure_id": 1004,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100404,
        "zip_code": 10500,
        "name_th": "บางรัก",
        "name_en": "Bang Rak",
        "amphure_id": 1004,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100405,
        "zip_code": 10500,
        "name_th": "สี่พระยา",
        "name_en": "Si Phraya",
        "amphure_id": 1004,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100502,
        "zip_code": 10220,
        "name_th": "อนุสาวรีย์",
        "name_en": "Anusawari",
        "amphure_id": 1005,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100508,
        "zip_code": 10220,
        "name_th": "ท่าแร้ง",
        "name_en": "Tha Raeng",
        "amphure_id": 1005,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100601,
        "zip_code": 10240,
        "name_th": "คลองจั่น",
        "name_en": "Khlong Chan",
        "amphure_id": 1006,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100608,
        "zip_code": 10240,
        "name_th": "หัวหมาก",
        "name_en": "Hua Mak",
        "amphure_id": 1006,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100701,
        "zip_code": 10330,
        "name_th": "รองเมือง",
        "name_en": "Rong Mueang",
        "amphure_id": 1007,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100702,
        "zip_code": 10330,
        "name_th": "วังใหม่",
        "name_en": "Wang Mai",
        "amphure_id": 1007,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100703,
        "zip_code": 10330,
        "name_th": "ปทุมวัน",
        "name_en": "Pathum Wan",
        "amphure_id": 1007,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100704,
        "zip_code": 10330,
        "name_th": "ลุมพินี",
        "name_en": "Lumphini",
        "amphure_id": 1007,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100801,
        "zip_code": 10100,
        "name_th": "ป้อมปราบ",
        "name_en": "Pom Prap",
        "amphure_id": 1008,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100802,
        "zip_code": 10100,
        "name_th": "วัดเทพศิรินทร์",
        "name_en": "Wat Thep Sirin",
        "amphure_id": 1008,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100803,
        "zip_code": 10100,
        "name_th": "คลองมหานาค",
        "name_en": "Khlong Maha Nak",
        "amphure_id": 1008,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100804,
        "zip_code": 10100,
        "name_th": "บ้านบาตร",
        "name_en": "Ban Bat",
        "amphure_id": 1008,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100805,
        "zip_code": 10100,
        "name_th": "วัดโสมนัส",
        "name_en": "Wat Sommanat",
        "amphure_id": 1008,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 100905,
        "zip_code": 10260,
        "name_th": "บางจาก",
        "name_en": "Bang Chak",
        "amphure_id": 1009,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101001,
        "zip_code": 10510,
        "name_th": "มีนบุรี",
        "name_en": "Min Buri",
        "amphure_id": 1010,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101002,
        "zip_code": 10510,
        "name_th": "แสนแสบ",
        "name_en": "Saen Saep",
        "amphure_id": 1010,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101101,
        "zip_code": 10520,
        "name_th": "ลาดกระบัง",
        "name_en": "Lat Krabang",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101102,
        "zip_code": 10520,
        "name_th": "คลองสองต้นนุ่น",
        "name_en": "Khlong Song Ton Nun",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101103,
        "zip_code": 10520,
        "name_th": "คลองสามประเวศ",
        "name_en": "Khlong Sam Prawet",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101104,
        "zip_code": 10520,
        "name_th": "ลำปลาทิว",
        "name_en": "Lam Pla Thio",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101105,
        "zip_code": 10520,
        "name_th": "ทับยาว",
        "name_en": "Thap Yao",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101106,
        "zip_code": 10520,
        "name_th": "ขุมทอง",
        "name_en": "Khum Thong",
        "amphure_id": 1011,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101203,
        "zip_code": 10120,
        "name_th": "ช่องนนทรี",
        "name_en": "Chong Nonsi",
        "amphure_id": 1012,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101204,
        "zip_code": 10120,
        "name_th": "บางโพงพาง",
        "name_en": "Bang Phongphang",
        "amphure_id": 1012,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101301,
        "zip_code": 10100,
        "name_th": "จักรวรรดิ",
        "name_en": "Chakkrawat",
        "amphure_id": 1013,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101302,
        "zip_code": 10100,
        "name_th": "สัมพันธวงศ์",
        "name_en": "Samphanthawong",
        "amphure_id": 1013,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101303,
        "zip_code": 10100,
        "name_th": "ตลาดน้อย",
        "name_en": "Talat Noi",
        "amphure_id": 1013,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101401,
        "zip_code": 10400,
        "name_th": "สามเสนใน",
        "name_en": "Samsen Nai",
        "amphure_id": 1014,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101501,
        "zip_code": 10600,
        "name_th": "วัดกัลยาณ์",
        "name_en": "Wat Kanlaya",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101502,
        "zip_code": 10600,
        "name_th": "หิรัญรูจี",
        "name_en": "Hiran Ruchi",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101503,
        "zip_code": 10600,
        "name_th": "บางยี่เรือ",
        "name_en": "Bang Yi Ruea",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101504,
        "zip_code": 10600,
        "name_th": "บุคคโล",
        "name_en": "Bukkhalo",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101505,
        "zip_code": 10600,
        "name_th": "ตลาดพลู",
        "name_en": "Talat Phlu",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101506,
        "zip_code": 10600,
        "name_th": "ดาวคะนอง",
        "name_en": "Dao Khanong",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101507,
        "zip_code": 10600,
        "name_th": "สำเหร่",
        "name_en": "Samre",
        "amphure_id": 1015,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101601,
        "zip_code": 10600,
        "name_th": "วัดอรุณ",
        "name_en": "Wat Arun",
        "amphure_id": 1016,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101602,
        "zip_code": 10600,
        "name_th": "วัดท่าพระ",
        "name_en": "Wat Tha Phra",
        "amphure_id": 1016,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101701,
        "zip_code": 10310,
        "name_th": "ห้วยขวาง",
        "name_en": "Huai Khwang",
        "amphure_id": 1017,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101702,
        "zip_code": 10310,
        "name_th": "บางกะปิ",
        "name_en": "Bang Kapi",
        "amphure_id": 1017,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101704,
        "zip_code": 10310,
        "name_th": "สามเสนนอก",
        "name_en": "Samsen Nok",
        "amphure_id": 1017,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101801,
        "zip_code": 10600,
        "name_th": "สมเด็จเจ้าพระยา",
        "name_en": "Somdet Chao Phraya",
        "amphure_id": 1018,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101802,
        "zip_code": 10600,
        "name_th": "คลองสาน",
        "name_en": "Khlong San",
        "amphure_id": 1018,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101803,
        "zip_code": 10600,
        "name_th": "บางลำภูล่าง",
        "name_en": "Bang Lamphu Lang",
        "amphure_id": 1018,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101804,
        "zip_code": 10600,
        "name_th": "คลองต้นไทร",
        "name_en": "Khlong Ton Sai",
        "amphure_id": 1018,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101901,
        "zip_code": 10170,
        "name_th": "คลองชักพระ",
        "name_en": "Khlong Chak Phra",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101902,
        "zip_code": 10170,
        "name_th": "ตลิ่งชัน",
        "name_en": "Taling Chan",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101903,
        "zip_code": 10170,
        "name_th": "ฉิมพลี",
        "name_en": "Chimphli",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101904,
        "zip_code": 10170,
        "name_th": "บางพรม",
        "name_en": "Bang Phrom",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101905,
        "zip_code": 10170,
        "name_th": "บางระมาด",
        "name_en": "Bang Ramat",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 101907,
        "zip_code": 10170,
        "name_th": "บางเชือกหนัง",
        "name_en": "Bang Chueak Nang",
        "amphure_id": 1019,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102004,
        "zip_code": 10700,
        "name_th": "ศิริราช",
        "name_en": "Siri Rat",
        "amphure_id": 1020,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102005,
        "zip_code": 10700,
        "name_th": "บ้านช่างหล่อ",
        "name_en": "Ban Chang Lo",
        "amphure_id": 1020,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102006,
        "zip_code": 10700,
        "name_th": "บางขุนนนท์",
        "name_en": "Bang Khun Non",
        "amphure_id": 1020,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102007,
        "zip_code": 10700,
        "name_th": "บางขุนศรี",
        "name_en": "Bang Khun Si",
        "amphure_id": 1020,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102009,
        "zip_code": 10700,
        "name_th": "อรุณอมรินทร์",
        "name_en": "Arun Ammarin",
        "amphure_id": 1020,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102105,
        "zip_code": 10150,
        "name_th": "ท่าข้าม",
        "name_en": "Tha Kham",
        "amphure_id": 1021,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102107,
        "zip_code": 10150,
        "name_th": "แสมดำ",
        "name_en": "Samae Dam",
        "amphure_id": 1021,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102201,
        "zip_code": 10160,
        "name_th": "บางหว้า",
        "name_en": "Bang Wa",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102202,
        "zip_code": 10160,
        "name_th": "บางด้วน",
        "name_en": "Bang Duan",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102203,
        "zip_code": 10160,
        "name_th": "บางแค",
        "name_en": "Bang Kae",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102204,
        "zip_code": 10160,
        "name_th": "บางแคเหนือ",
        "name_en": "Bang Kae Nua",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102205,
        "zip_code": 10160,
        "name_th": "บางไผ่",
        "name_en": "Bang Phai",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102206,
        "zip_code": 10160,
        "name_th": "บางจาก",
        "name_en": "Bang Chak",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102207,
        "zip_code": 10160,
        "name_th": "บางแวก",
        "name_en": "Bang Waek",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102208,
        "zip_code": 10160,
        "name_th": "คลองขวาง",
        "name_en": "Khlong Khwang",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102209,
        "zip_code": 10160,
        "name_th": "ปากคลองภาษีเจริญ",
        "name_en": "Pak Khlong Phasi Charoen",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102210,
        "zip_code": 10160,
        "name_th": "คูหาสวรรค์",
        "name_en": "Khuha Sawan",
        "amphure_id": 1022,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102302,
        "zip_code": 10160,
        "name_th": "หนองแขม",
        "name_en": "Nong Khaem",
        "amphure_id": 1023,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102303,
        "zip_code": 10160,
        "name_th": "หนองค้างพลู",
        "name_en": "Nong Khang Phlu",
        "amphure_id": 1023,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102401,
        "zip_code": 10140,
        "name_th": "ราษฎร์บูรณะ",
        "name_en": "Rat Burana",
        "amphure_id": 1024,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102402,
        "zip_code": 10140,
        "name_th": "บางปะกอก",
        "name_en": "Bang Pakok",
        "amphure_id": 1024,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102501,
        "zip_code": 10700,
        "name_th": "บางพลัด",
        "name_en": "Bang Phlat",
        "amphure_id": 1025,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102502,
        "zip_code": 10700,
        "name_th": "บางอ้อ",
        "name_en": "Bang O",
        "amphure_id": 1025,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102503,
        "zip_code": 10700,
        "name_th": "บางบำหรุ",
        "name_en": "Bang Bamru",
        "amphure_id": 1025,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102504,
        "zip_code": 10700,
        "name_th": "บางยี่ขัน",
        "name_en": "Bang Yi Khan",
        "amphure_id": 1025,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102601,
        "zip_code": 10400,
        "name_th": "ดินแดง",
        "name_en": "Din Daeng",
        "amphure_id": 1026,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102701,
        "zip_code": 10240,
        "name_th": "คลองกุ่ม",
        "name_en": "Khlong Kum",
        "amphure_id": 1027,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102702,
        "zip_code": 10240,
        "name_th": "สะพานสูง",
        "name_en": "Saphan Sung",
        "amphure_id": 1027,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102703,
        "zip_code": 10240,
        "name_th": "คันนายาว",
        "name_en": "Khan Na Yao",
        "amphure_id": 1027,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102801,
        "zip_code": 10120,
        "name_th": "ทุ่งวัดดอน",
        "name_en": "Thung Wat Don",
        "amphure_id": 1028,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102802,
        "zip_code": 10120,
        "name_th": "ยานนาวา",
        "name_en": "Yan Nawa",
        "amphure_id": 1028,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102803,
        "zip_code": 10120,
        "name_th": "ทุ่งมหาเมฆ",
        "name_en": "Thung Maha Mek",
        "amphure_id": 1028,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 102901,
        "zip_code": 10800,
        "name_th": "บางซื่อ",
        "name_en": "Bang Sue",
        "amphure_id": 1029,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103001,
        "zip_code": 10900,
        "name_th": "ลาดยาว",
        "name_en": "Lat Yao",
        "amphure_id": 1030,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103002,
        "zip_code": 10900,
        "name_th": "เสนานิคม",
        "name_en": "Sena Nikhom",
        "amphure_id": 1030,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103003,
        "zip_code": 10900,
        "name_th": "จันทรเกษม",
        "name_en": "Chan Kasem",
        "amphure_id": 1030,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103004,
        "zip_code": 10900,
        "name_th": "จอมพล",
        "name_en": "Chom Phon",
        "amphure_id": 1030,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103005,
        "zip_code": 10900,
        "name_th": "จตุจักร",
        "name_en": "Chatuchak",
        "amphure_id": 1030,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103101,
        "zip_code": 10120,
        "name_th": "บางคอแหลม",
        "name_en": "Bang Kho Laem",
        "amphure_id": 1031,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103102,
        "zip_code": 10120,
        "name_th": "วัดพระยาไกร",
        "name_en": "Wat Phraya Krai",
        "amphure_id": 1031,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103103,
        "zip_code": 10120,
        "name_th": "บางโคล่",
        "name_en": "Bang Khlo",
        "amphure_id": 1031,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103201,
        "zip_code": 10250,
        "name_th": "ประเวศ",
        "name_en": "Prawet",
        "amphure_id": 1032,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103202,
        "zip_code": 10250,
        "name_th": "หนองบอน",
        "name_en": "Nong Bon",
        "amphure_id": 1032,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103203,
        "zip_code": 10250,
        "name_th": "ดอกไม้",
        "name_en": "Dokmai",
        "amphure_id": 1032,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103204,
        "zip_code": 10250,
        "name_th": "สวนหลวง",
        "name_en": "Suan Luang",
        "amphure_id": 1032,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103301,
        "zip_code": 10110,
        "name_th": "คลองเตย",
        "name_en": "Khlong Toei",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103302,
        "zip_code": 10110,
        "name_th": "คลองตัน",
        "name_en": "Khlong Tan",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103303,
        "zip_code": 10110,
        "name_th": "พระโขนง",
        "name_en": "Phra Khanong",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103304,
        "zip_code": 10110,
        "name_th": "คลองเตยเหนือ",
        "name_en": "Khlong Toei Nua",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103305,
        "zip_code": 10110,
        "name_th": "คลองตันเหนือ",
        "name_en": "Khlong Tan Nua",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103306,
        "zip_code": 10110,
        "name_th": "พระโขนงเหนือ",
        "name_en": "Phra Khanong Nua",
        "amphure_id": 1033,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103401,
        "zip_code": 10250,
        "name_th": "สวนหลวง",
        "name_en": "Suan Luang",
        "amphure_id": 1034,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103501,
        "zip_code": 10150,
        "name_th": "บางขุนเทียน",
        "name_en": "Bang Khun Thian",
        "amphure_id": 1035,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103502,
        "zip_code": 10150,
        "name_th": "บางค้อ",
        "name_en": "Bang Kho",
        "amphure_id": 1035,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103503,
        "zip_code": 10150,
        "name_th": "บางมด",
        "name_en": "Bang Mot",
        "amphure_id": 1035,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103504,
        "zip_code": 10150,
        "name_th": "จอมทอง",
        "name_en": "Chom Thong",
        "amphure_id": 1035,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103602,
        "zip_code": 10210,
        "name_th": "สีกัน",
        "name_en": "Si Kan",
        "amphure_id": 1036,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103701,
        "zip_code": 10400,
        "name_th": "ทุ่งพญาไท",
        "name_en": "Thung Phaya Thai",
        "amphure_id": 1037,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103702,
        "zip_code": 10400,
        "name_th": "ถนนพญาไท",
        "name_en": "Thanon Phaya Thai",
        "amphure_id": 1037,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103703,
        "zip_code": 10400,
        "name_th": "ถนนเพชรบุรี",
        "name_en": "Thanon Phetchaburi",
        "amphure_id": 1037,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103704,
        "zip_code": 10400,
        "name_th": "มักกะสัน",
        "name_en": "Makkasan",
        "amphure_id": 1037,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103801,
        "zip_code": 10230,
        "name_th": "ลาดพร้าว",
        "name_en": "Lat Phrao",
        "amphure_id": 1038,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103802,
        "zip_code": 10230,
        "name_th": "จรเข้บัว",
        "name_en": "Chorakhe Bua",
        "amphure_id": 1038,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103901,
        "zip_code": 10110,
        "name_th": "คลองเตยเหนือ",
        "name_en": "Khlong Toei Nuea",
        "amphure_id": 1039,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103902,
        "zip_code": 10110,
        "name_th": "คลองตันเหนือ",
        "name_en": "Khlong Tan Nuea",
        "amphure_id": 1039,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 103903,
        "zip_code": 10110,
        "name_th": "พระโขนงเหนือ",
        "name_en": "Phra Khanong Nuea",
        "amphure_id": 1039,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104001,
        "zip_code": 10160,
        "name_th": "บางแค",
        "name_en": "Bang Khae",
        "amphure_id": 1040,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104002,
        "zip_code": 10160,
        "name_th": "บางแคเหนือ",
        "name_en": "Bang Khae Nuea",
        "amphure_id": 1040,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104003,
        "zip_code": 10160,
        "name_th": "บางไผ่",
        "name_en": "Bang Phai",
        "amphure_id": 1040,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104004,
        "zip_code": 10160,
        "name_th": "หลักสอง",
        "name_en": "Lak Song",
        "amphure_id": 1040,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104101,
        "zip_code": 10210,
        "name_th": "ทุ่งสองห้อง",
        "name_en": "Thung Song Hong",
        "amphure_id": 1041,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104102,
        "zip_code": 10210,
        "name_th": "ตลาดบางเขน",
        "name_en": "Talat Bang Khen",
        "amphure_id": 1041,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104201,
        "zip_code": 10220,
        "name_th": "สายไหม",
        "name_en": "Sai Mai",
        "amphure_id": 1042,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104202,
        "zip_code": 10220,
        "name_th": "ออเงิน",
        "name_en": "O Ngoen",
        "amphure_id": 1042,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104203,
        "zip_code": 10220,
        "name_th": "คลองถนน",
        "name_en": "Khlong Thanon",
        "amphure_id": 1042,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104301,
        "zip_code": 10230,
        "name_th": "คันนายาว",
        "name_en": "Khan Na Yao",
        "amphure_id": 1043,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104401,
        "zip_code": 10240,
        "name_th": "สะพานสูง",
        "name_en": "Sapan Sung",
        "amphure_id": 1044,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104501,
        "zip_code": 10310,
        "name_th": "วังทองหลาง",
        "name_en": "Wang Thonglang",
        "amphure_id": 1045,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104601,
        "zip_code": 10510,
        "name_th": "สามวาตะวันตก",
        "name_en": "Sam Wa Tawantok",
        "amphure_id": 1046,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104602,
        "zip_code": 10510,
        "name_th": "สามวาตะวันออก",
        "name_en": "Sam Wa Tawan-ok",
        "amphure_id": 1046,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104603,
        "zip_code": 10510,
        "name_th": "บางชัน",
        "name_en": "Bang Chan",
        "amphure_id": 1046,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104604,
        "zip_code": 10510,
        "name_th": "ทรายกองดิน",
        "name_en": "Sai Kong Din",
        "amphure_id": 1046,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104605,
        "zip_code": 10510,
        "name_th": "ทรายกองดินใต้",
        "name_en": "Sai Kong Din Tai",
        "amphure_id": 1046,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104701,
        "zip_code": 10260,
        "name_th": "บางนา",
        "name_en": "Bang Na",
        "amphure_id": 1047,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104801,
        "zip_code": 10170,
        "name_th": "ทวีวัฒนา",
        "name_en": "Thawi Watthana",
        "amphure_id": 1048,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104802,
        "zip_code": 10170,
        "name_th": "ศาลาธรรมสพน์",
        "name_en": "Sala Thammasop",
        "amphure_id": 1048,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 104902,
        "zip_code": 10140,
        "name_th": "ทุ่งครุ",
        "name_en": "Thung Khru",
        "amphure_id": 1049,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 105001,
        "zip_code": 10150,
        "name_th": "บางบอน",
        "name_en": "Bang Bon",
        "amphure_id": 1050,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110101,
        "zip_code": 10270,
        "name_th": "ปากน้ำ",
        "name_en": "Pak Nam",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110102,
        "zip_code": 10270,
        "name_th": "สำโรงเหนือ",
        "name_en": "Samrong Nuea",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110103,
        "zip_code": 10270,
        "name_th": "บางเมือง",
        "name_en": "Bang Mueang",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110104,
        "zip_code": 10280,
        "name_th": "ท้ายบ้าน",
        "name_en": "Thai Ban",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110108,
        "zip_code": 10280,
        "name_th": "บางปูใหม่",
        "name_en": "Bang Pu Mai",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110110,
        "zip_code": 10280,
        "name_th": "แพรกษา",
        "name_en": "Phraek Sa",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110111,
        "zip_code": 10270,
        "name_th": "บางโปรง",
        "name_en": "Bang Prong",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110112,
        "zip_code": 10270,
        "name_th": "บางปู",
        "name_en": "Bang Pu",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110113,
        "zip_code": 10270,
        "name_th": "บางด้วน",
        "name_en": "Bang Duan",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110114,
        "zip_code": 10270,
        "name_th": "บางเมืองใหม่",
        "name_en": "Bang Mueang Mai",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110115,
        "zip_code": 10270,
        "name_th": "เทพารักษ์",
        "name_en": "Thepharak",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110116,
        "zip_code": 10280,
        "name_th": "ท้ายบ้านใหม่",
        "name_en": "Thai Ban Mai",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110117,
        "zip_code": 10280,
        "name_th": "แพรกษาใหม่",
        "name_en": "Phraek Sa Mai",
        "amphure_id": 1101,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110201,
        "zip_code": 10560,
        "name_th": "บางบ่อ",
        "name_en": "Bang Bo",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110202,
        "zip_code": 10560,
        "name_th": "บ้านระกาศ",
        "name_en": "Ban Rakat",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110203,
        "zip_code": 10560,
        "name_th": "บางพลีน้อย",
        "name_en": "Bang Phli Noi",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110204,
        "zip_code": 10560,
        "name_th": "บางเพรียง",
        "name_en": "Bang Phriang",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110205,
        "zip_code": 10550,
        "name_th": "คลองด่าน",
        "name_en": "Khlong Dan",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110206,
        "zip_code": 10560,
        "name_th": "คลองสวน",
        "name_en": "Khlong Suan",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110207,
        "zip_code": 10560,
        "name_th": "เปร็ง",
        "name_en": "Preng",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110208,
        "zip_code": 10560,
        "name_th": "คลองนิยมยาตรา",
        "name_en": "Khlong Niyom Yattra",
        "amphure_id": 1102,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110301,
        "zip_code": 10540,
        "name_th": "บางพลีใหญ่",
        "name_en": "Bang Phli Yai",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110302,
        "zip_code": 10540,
        "name_th": "บางแก้ว",
        "name_en": "Bang Kaeo",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110303,
        "zip_code": 10540,
        "name_th": "บางปลา",
        "name_en": "Bang Pla",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110304,
        "zip_code": 10540,
        "name_th": "บางโฉลง",
        "name_en": "Bang Chalong",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110308,
        "zip_code": 10540,
        "name_th": "ราชาเทวะ",
        "name_en": "Racha Thewa",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110309,
        "zip_code": 10540,
        "name_th": "หนองปรือ",
        "name_en": "Nong Prue",
        "amphure_id": 1103,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110401,
        "zip_code": 10130,
        "name_th": "ตลาด",
        "name_en": "Talat",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110402,
        "zip_code": 10130,
        "name_th": "บางพึ่ง",
        "name_en": "Bang Phueng",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110403,
        "zip_code": 10130,
        "name_th": "บางจาก",
        "name_en": "Bang Chak",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110404,
        "zip_code": 10130,
        "name_th": "บางครุ",
        "name_en": "Bang Khru",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110405,
        "zip_code": 10130,
        "name_th": "บางหญ้าแพรก",
        "name_en": "Bang Ya Phraek",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110406,
        "zip_code": 10130,
        "name_th": "บางหัวเสือ",
        "name_en": "Bang Hua Suea",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110407,
        "zip_code": 10130,
        "name_th": "สำโรงใต้",
        "name_en": "Samrong Tai",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110408,
        "zip_code": 10130,
        "name_th": "บางยอ",
        "name_en": "Bang Yo",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110409,
        "zip_code": 10130,
        "name_th": "บางกะเจ้า",
        "name_en": "Bang Kachao",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110410,
        "zip_code": 10130,
        "name_th": "บางน้ำผึ้ง",
        "name_en": "Bang Namphueng",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110411,
        "zip_code": 10130,
        "name_th": "บางกระสอบ",
        "name_en": "Bang Krasop",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110412,
        "zip_code": 10130,
        "name_th": "บางกอบัว",
        "name_en": "Bang Ko Bua",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110413,
        "zip_code": 10130,
        "name_th": "ทรงคนอง",
        "name_en": "Song Khanong",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110414,
        "zip_code": 10130,
        "name_th": "สำโรง",
        "name_en": "Samrong",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110415,
        "zip_code": 10130,
        "name_th": "สำโรงกลาง",
        "name_en": "Samrong Klang",
        "amphure_id": 1104,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110501,
        "zip_code": 10290,
        "name_th": "นาเกลือ",
        "name_en": "Na Kluea",
        "amphure_id": 1105,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110502,
        "zip_code": 10290,
        "name_th": "บ้านคลองสวน",
        "name_en": "Ban Khlong Suan",
        "amphure_id": 1105,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110503,
        "zip_code": 10290,
        "name_th": "แหลมฟ้าผ่า",
        "name_en": "Laem Fa Pha",
        "amphure_id": 1105,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110504,
        "zip_code": 10290,
        "name_th": "ปากคลองบางปลากด",
        "name_en": "Pak Klong Bang Pla Kot",
        "amphure_id": 1105,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110505,
        "zip_code": 10290,
        "name_th": "ในคลองบางปลากด",
        "name_en": "Nai Khlong Bang Pla Kot",
        "amphure_id": 1105,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110601,
        "zip_code": 10540,
        "name_th": "บางเสาธง",
        "name_en": "Bang Sao Thong",
        "amphure_id": 1106,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110602,
        "zip_code": 10540,
        "name_th": "ศีรษะจรเข้น้อย",
        "name_en": "Sisa Chorakhe Noi",
        "amphure_id": 1106,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    },
    {
        "id": 110603,
        "zip_code": 10540,
        "name_th": "ศีรษะจรเข้ใหญ่",
        "name_en": "Sisa Chorakhe Yai",
        "amphure_id": 1106,
        "created_at": "9/8/2019 03:33:09",
        "updated_at": "16/5/2022 06:31:31.32465",
        "deleted_at": null
    }
]`);
