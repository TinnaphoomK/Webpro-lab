const amphures = JSON.parse(`[
    {
      "id": 1001,
      "name_th": "เขตพระนคร",
      "name_en": "Khet Phra Nakhon",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1002,
      "name_th": "เขตดุสิต",
      "name_en": "Khet Dusit",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1003,
      "name_th": "เขตหนองจอก",
      "name_en": "Khet Nong Chok",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1004,
      "name_th": "เขตบางรัก",
      "name_en": "Khet Bang Rak",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1005,
      "name_th": "เขตบางเขน",
      "name_en": "Khet Bang Khen",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1006,
      "name_th": "เขตบางกะปิ",
      "name_en": "Khet Bang Kapi",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1007,
      "name_th": "เขตปทุมวัน",
      "name_en": "Khet Pathum Wan",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1008,
      "name_th": "เขตป้อมปราบศัตรูพ่าย",
      "name_en": "Khet Pom Prap Sattru Phai",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1009,
      "name_th": "เขตพระโขนง",
      "name_en": "Khet Phra Khanong",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1010,
      "name_th": "เขตมีนบุรี",
      "name_en": "Khet Min Buri",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1011,
      "name_th": "เขตลาดกระบัง",
      "name_en": "Khet Lat Krabang",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1012,
      "name_th": "เขตยานนาวา",
      "name_en": "Khet Yan Nawa",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1013,
      "name_th": "เขตสัมพันธวงศ์",
      "name_en": "Khet Samphanthawong",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1014,
      "name_th": "เขตพญาไท",
      "name_en": "Khet Phaya Thai",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1015,
      "name_th": "เขตธนบุรี",
      "name_en": "Khet Thon Buri",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1016,
      "name_th": "เขตบางกอกใหญ่",
      "name_en": "Khet Bangkok Yai",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1017,
      "name_th": "เขตห้วยขวาง",
      "name_en": "Khet Huai Khwang",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1018,
      "name_th": "เขตคลองสาน",
      "name_en": "Khet Khlong San",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1019,
      "name_th": "เขตตลิ่งชัน",
      "name_en": "Khet Taling Chan",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1020,
      "name_th": "เขตบางกอกน้อย",
      "name_en": "Khet Bangkok Noi",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1021,
      "name_th": "เขตบางขุนเทียน",
      "name_en": "Khet Bang Khun Thian",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1022,
      "name_th": "เขตภาษีเจริญ",
      "name_en": "Khet Phasi Charoen",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1023,
      "name_th": "เขตหนองแขม",
      "name_en": "Khet Nong Khaem",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1024,
      "name_th": "เขตราษฎร์บูรณะ",
      "name_en": "Khet Rat Burana",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1025,
      "name_th": "เขตบางพลัด",
      "name_en": "Khet Bang Phlat",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1026,
      "name_th": "เขตดินแดง",
      "name_en": "Khet Din Daeng",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1027,
      "name_th": "เขตบึงกุ่ม",
      "name_en": "Khet Bueng Kum",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1028,
      "name_th": "เขตสาทร",
      "name_en": "Khet Sathon",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1029,
      "name_th": "เขตบางซื่อ",
      "name_en": "Khet Bang Sue",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1030,
      "name_th": "เขตจตุจักร",
      "name_en": "Khet Chatuchak",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1031,
      "name_th": "เขตบางคอแหลม",
      "name_en": "Khet Bang Kho Laem",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1032,
      "name_th": "เขตประเวศ",
      "name_en": "Khet Prawet",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1033,
      "name_th": "เขตคลองเตย",
      "name_en": "Khet Khlong Toei",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1034,
      "name_th": "เขตสวนหลวง",
      "name_en": "Khet Suan Luang",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1035,
      "name_th": "เขตจอมทอง",
      "name_en": "Khet Chom Thong",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1036,
      "name_th": "เขตดอนเมือง",
      "name_en": "Khet Don Mueang",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1037,
      "name_th": "เขตราชเทวี",
      "name_en": "Khet Ratchathewi",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1038,
      "name_th": "เขตลาดพร้าว",
      "name_en": "Khet Lat Phrao",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1039,
      "name_th": "เขตวัฒนา",
      "name_en": "Khet Watthana",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1040,
      "name_th": "เขตบางแค",
      "name_en": "Khet Bang Khae",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1041,
      "name_th": "เขตหลักสี่",
      "name_en": "Khet Lak Si",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1042,
      "name_th": "เขตสายไหม",
      "name_en": "Khet Sai Mai",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1043,
      "name_th": "เขตคันนายาว",
      "name_en": "Khet Khan Na Yao",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1044,
      "name_th": "เขตสะพานสูง",
      "name_en": "Khet Saphan Sung",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1045,
      "name_th": "เขตวังทองหลาง",
      "name_en": "Khet Wang Thonglang",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1046,
      "name_th": "เขตคลองสามวา",
      "name_en": "Khet Khlong Sam Wa",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1047,
      "name_th": "เขตบางนา",
      "name_en": "Khet Bang Na",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1048,
      "name_th": "เขตทวีวัฒนา",
      "name_en": "Khet Thawi Watthana",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1049,
      "name_th": "เขตทุ่งครุ",
      "name_en": "Khet Thung Khru",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1050,
      "name_th": "เขตบางบอน",
      "name_en": "Khet Bang Bon",
      "province_id": 1,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1101,
      "name_th": "เมืองสมุทรปราการ",
      "name_en": "Mueang Samut Prakan",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1102,
      "name_th": "บางบ่อ",
      "name_en": "Bang Bo",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1103,
      "name_th": "บางพลี",
      "name_en": "Bang Phli",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1104,
      "name_th": "พระประแดง",
      "name_en": "Phra Pradaeng",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1105,
      "name_th": "พระสมุทรเจดีย์",
      "name_en": "Phra Samut Chedi",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    },
    {
      "id": 1106,
      "name_th": "บางเสาธง",
      "name_en": "Bang Sao Thong",
      "province_id": 2,
      "created_at": "9/8/2019 03:33:09",
      "updated_at": "16/5/2022 06:31:26.606456",
      "deleted_at": null
    }
]`);
