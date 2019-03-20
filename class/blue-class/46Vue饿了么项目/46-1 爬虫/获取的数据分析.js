//首页请求接口
	//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.561106&longitude=114.259086&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5

	//简化后（去掉不必须参数）https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.561106&longitude=114.259086&offset=0&limit=8

	{
		"has_next": true,
		"items": [{
				"restaurant": {
					"act_tag": 0,
					"address": "武汉市汉阳区钟家村十字路口地下中防百诚负一层F区135、136号",
					"authentic_id": 3344566519347051,
					"business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"20减19\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"60减33\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"100减55\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"130减71\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"a25c03\", \"text\": \"4元会员红包\", \"border\": \"4ca25c03\", \"background\": null, \"type\": 2, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"0.1折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"返红包\", \"border\": \"4ce23028\", \"background\": null, \"type\": 9, \"icon\": null}], \"ad_info\": null}",
					"closing_count_down": 0,
					"delivery_fee_discount": 0,
					"description": "",
					"distance": 2174,
					"favored": false,
					"flavors": [{
						"id": 265,
						"name": "简餐"
					}],
					"float_delivery_fee": 3.6,
					"float_minimum_order_amount": 20,
					"has_story": false,
					"id": "E8970835175893477224",
					"image_path": "e5d3b073de631b7deeaba3b1b0524d96jpeg",
					"is_new": false,
					"is_premium": false,
					"is_star": false,
					"is_stock_empty": 0,
					"is_valid": 1,
					"latitude": 30.5497,
					"longitude": 114.268456,
					"max_applied_quantity_per_order": -1,
					"name": "辣骨将(钟家村店)",
					"next_business_time": " 今天10:25",
					"only_use_poi": false,
					"opening_hours": [
						"10:25/20:00"
					],
					"order_lead_time": 32,
					"out_of_range": false,
					"phone": "18008649616",
					"piecewise_agent_fee": {
						"description": "配送费¥3.6",
						"extra_fee": 0.6,
						"is_extra": true,
						"no_subsidy_fee": "",
						"rules": [{
							"fee": 3.6,
							"price": 20
						}],
						"tips": "配送费¥3.6"
					},
					"platform": 0,
					"posters": [],
					"promotion_info": "",
					"rating": 4.8,
					"rating_count": 28,
					"recent_order_num": 177,
					"recommend": {
						"image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
						"is_ad": false,
						"track": "{\"rankType\":\"27\"}"
					},
					"recommend_reasons": [{
						"name": "配送飞快"
					}],
					"regular_customer_count": 0,
					"scheme": "eleme://catering?restaurant_id=E8970835175893477224",
					"status": 5,
					"support_tags": [{
						"border": "dddddd",
						"color": "666666",
						"icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
						"text": "简餐",
						"type": 1
					}],
					"supports": [{
							"border": "90dddddd",
							"description": "商家原因导致订单取消，赔付代金券",
							"icon_color": "999999",
							"icon_name": "赔",
							"id": 10,
							"name": "拒单赔",
							"text_color": "666666",
							"two_characters_icon_name": ""
						},
						{
							"border": "90dddddd",
							"description": "该商户食品安全已由国泰产险承担，食品安全有保障",
							"icon_color": "999999",
							"icon_name": "保",
							"id": 7,
							"name": "食安保",
							"text_color": "666666",
							"two_characters_icon_name": "保险"
						}
					],
					"theme": {
						"default_color": "2395ff",
						"header_style": 0,
						"hongbao_style": 0,
						"price_color": "ff5339",
						"third_tab_name": "商家",
						"vanish_fields": []
					},
					"type": 0
				}
			}
		],
		"meta": {
			"rank_id": "3996bbbbc51f4cf78d900129981a77e0"
		}
	}

//商家页请求接口
	//https://h5.ele.me/pizza/shopping/restaurants/E10410989748831033005/batch_shop?user_id=21682484&code=0.30828962992982234&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=30.561106&longitude=114.259086


{
	"bought_list": {
		"food_ids": [],
		"grey_icon_url": "b571e9375597c7dd8e5b7bd32120928epng",
		"icon_url": "db75a248a885c94c389b5bbc5c8d876apng",
		"text": "买过"
	},
	"menu": [{
		"activity": null,
		"description": "大家喜欢吃，才叫真好吃。",
		"foods": [{
			"activity": null,
			"attributes": [],
			"attrs": [{
				"name": "糖度",
				"values": ["正常糖", "七分糖", "五分糖", "三分糖", "不另外加糖"]
			}, {
				"name": "加料1",
				"values": ["x", "混珠", "珍波椰"]
			}, {
				"name": "加料2",
				"values": ["x", "椰果", "仙草", "红豆", "备注"]
			}, {
				"name": "冰块",
				"values": ["热饮", "常温", "去冰", "少冰"]
			}],
			"brand": null,
			"category_id": 1676393831,
			"cold_box": null,
			"coupons": null,
			"description": "奶茶搭配波霸，口感软Q。主要原料：红茶；辅料：波霸、植脂末。",
			"image_path": "3d81f8614dfd6ff01e275fc0e1691e27png",
			"is_essential": false,
			"is_featured": 0,
			"item_id": "416059983148",
			"limitation": {},
			"min_purchase": 1,
			"month_sales": 267,
			"name": "(中杯)波霸奶茶",
			"photos": ["3d81f8614dfd6ff01e275fc0e1691e27png"],
			"rating": 4.595000000000001,
			"rating_count": 37,
			"restaurant_id": 157816017,
			"satisfy_count": 37,
			"satisfy_rate": 100,
			"scheme": null,
			"specfoods": [{
				"checkout_mode": 1,
				"coupon_id": -1,
				"food_id": 856426056,
				"is_essential": false,
				"item_id": "416059983148",
				"name": "(中杯)波霸奶茶",
				"original_price": null,
				"packing_fee": 0,
				"partial_reduce_activity_id": null,
				"pid": 100000030942418902,
				"pinyin_name": "(zhongbei)bobanaicha",
				"price": 10,
				"promotion_stock": -1,
				"recent_popularity": 233,
				"recent_rating": 4.19,
				"restaurant_id": 157816017,
				"sku_id": "477340256556",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "+免费配料"
				}],
				"stock": 9708,
				"virtual_food_id": 809846005,
				"weight": 0
			},],
			"specifications": [{
				"name": "规格",
				"values": ["+免费配料", "+燕麦", "+布丁", "+奶霜", "+黑糖奶霜", "+冰淇淋(限冷饮)"]
			}],
			"tips": "37评价 月售267份",
			"type": null,
			"video": null,
			"virtual_food_id": 809846005
		},],
		"global_id": "-1",
		"grey_icon_url": "aba732b4ca103b2521c872442d7e5d4epng",
		"icon_url": "06a05b267f338acfeb8bd682d16e836dpng",
		"id": -1,
		"is_activity": null,
		"is_selected": true,
		"name": "热销",
		"type": 2
	}],
	"recommend": [{
		"items": [{
			"attributes": [],
			"attrs": [{
				"name": "糖度",
				"values": ["正常糖", "七分糖", "五分糖", "三分糖", "不另外加糖"]
			}, {
				"name": "加料1",
				"values": ["x", "珍珠", "波霸", "混珠", "珍波椰"]
			}, {
				"name": "加料2",
				"values": ["x", "椰果", "仙草", "备注"]
			}, {
				"name": "冰块",
				"values": ["热饮", "常温", "去冰", "少冰"]
			}],
			"brand": {
				"attrs2": [{
					"details": [{
						"linkage_photo_hash": "",
						"name": "正常糖",
						"photo_hash": "",
						"selected": true
					}, {
						"linkage_photo_hash": "",
						"name": "七分糖",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "五分糖",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "三分糖",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "不另外加糖",
						"photo_hash": "",
						"selected": false
					}],
					"linkage_status": 0,
					"name": "糖度"
				}, {
					"details": [{
						"linkage_photo_hash": "",
						"name": "x",
						"photo_hash": "",
						"selected": true
					}, {
						"linkage_photo_hash": "",
						"name": "珍珠",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "波霸",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "混珠",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "珍波椰",
						"photo_hash": "",
						"selected": false
					}],
					"linkage_status": 0,
					"name": "加料1"
				}, {
					"details": [{
						"linkage_photo_hash": "",
						"name": "x",
						"photo_hash": "",
						"selected": true
					}, {
						"linkage_photo_hash": "",
						"name": "椰果",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "仙草",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "备注",
						"photo_hash": "",
						"selected": false
					}],
					"linkage_status": 0,
					"name": "加料2"
				}, {
					"details": [{
						"linkage_photo_hash": "",
						"name": "热饮",
						"photo_hash": "",
						"selected": true
					}, {
						"linkage_photo_hash": "",
						"name": "常温",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "去冰",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "少冰",
						"photo_hash": "",
						"selected": false
					}],
					"linkage_status": 0,
					"name": "冰块"
				}],
				"ingredient_info": null,
				"show_photo_type": 0,
				"specifications2": [{
					"details": [{
						"linkage_photo_hash": "",
						"name": "＋免费配料",
						"photo_hash": "",
						"selected": true
					}, {
						"linkage_photo_hash": "",
						"name": "＋燕麦",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "＋布丁",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "＋奶霜",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "＋黑糖奶霜",
						"photo_hash": "",
						"selected": false
					}, {
						"linkage_photo_hash": "",
						"name": "＋冰淇淋(限冷饮)",
						"photo_hash": "",
						"selected": false
					}],
					"linkage_status": 0,
					"name": "规格"
				}],
				"sub_items": []
			},
			"category_id": 51335856428,
			"description": "拿铁系列饮品，外卖服务「一律不做渐层效果」!阿华田搭配鲜牛奶，香甜可口。主要原料：阿华田；辅料：鲜牛奶。",
			"image_path": "0187f2b5d25067b8602cc7403c71283dpng",
			"is_essential": false,
			"is_featured": 0,
			"item_id": "416054949164",
			"limitation": {},
			"min_purchase": 1,
			"month_sales": 17,
			"name": "(中杯)阿华田拿铁",
			"photos": ["0187f2b5d25067b8602cc7403c71283dpng"],
			"rating": 0,
			"rating_count": 0,
			"restaurant_id": 157816017,
			"satisfy_count": 0,
			"satisfy_rate": 0,
			"scheme": "eleme://catering?target_food_id=856388034&restaurant_id=E10410989748831033005&category_id=51335856428",
			"specfoods": [{
				"checkout_mode": 1,
				"food_id": 856388034,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 15,
				"promotion_stock": -1,
				"recent_popularity": 10,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "477301355820",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋免费配料"
				}],
				"stock": 9989,
				"virtual_food_id": 809841099,
				"weight": 0
			}, {
				"checkout_mode": 1,
				"food_id": 856388035,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 16,
				"promotion_stock": -1,
				"recent_popularity": 3,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "477301356844",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋燕麦"
				}],
				"stock": 9996,
				"virtual_food_id": 809841099,
				"weight": 0
			}, {
				"checkout_mode": 1,
				"food_id": 856388036,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 19,
				"promotion_stock": -1,
				"recent_popularity": 1,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "477301357868",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋布丁"
				}],
				"stock": 9998,
				"virtual_food_id": 809841099,
				"weight": 0
			}, {
				"checkout_mode": 1,
				"food_id": 856388037,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 20,
				"promotion_stock": -1,
				"recent_popularity": 1,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "477301358892",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋奶霜"
				}],
				"stock": 10000,
				"virtual_food_id": 809841099,
				"weight": 0
			}, {
				"checkout_mode": 1,
				"food_id": 992315383,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 23,
				"promotion_stock": -1,
				"recent_popularity": 1,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "616514984236",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋黑糖奶霜"
				}],
				"stock": 10000,
				"virtual_food_id": 809841099,
				"weight": 0
			}, {
				"checkout_mode": 1,
				"food_id": 992346053,
				"is_essential": false,
				"item_id": "416054949164",
				"name": "(中杯)阿华田拿铁",
				"packing_fee": 0,
				"pinyin_name": "(zhongbei)ahuatiannatie",
				"price": 21,
				"promotion_stock": -1,
				"recent_popularity": 1,
				"recent_rating": 0,
				"restaurant_id": 157816017,
				"sku_id": "616523034924",
				"sold_out": false,
				"specs": [{
					"name": "规格",
					"value": "＋冰淇淋(限冷饮)"
				}],
				"stock": 9999,
				"virtual_food_id": 809841099,
				"weight": 0
			}],
			"specifications": [{
				"name": "规格",
				"values": ["＋免费配料", "＋燕麦", "＋布丁", "＋奶霜", "＋黑糖奶霜", "＋冰淇淋(限冷饮)"]
			}],
			"tips": "0评价 月售17份",
			"type": 0,
			"virtual_food_id": 809841099
		},],
		"name": "商家推荐",
		"window_type": 0
	},],
	"redpack": [],
	"rst": {
		"act_tag": 0,
		"activities": [],
		"address": "武汉市汉阳区钟家村中防商街家乐福门前冷却塔",
		"albums": [{
			"count": 1,
			"cover_image_hash": "5307f99018c1654962258405c54b37ecjpeg",
			"name": "门面",
			"photos": [{
				"description": "",
				"id": 37369826,
				"image_hash": "5307f99018c1654962258405c54b37ecjpeg",
				"type": "FRONT"
			}]
		}],
		"authentic_id": 1364516145793317,
		"business_info": "{\"lemon_support_tags\": [], \"ad_info\": null}",
		"delivery_fee_discount": 0,
		"delivery_mode": {
			"border": "",
			"color": "2395FF",
			"gradient": {
				"rgb_from": "00AAFF",
				"rgb_to": "0085FF"
			},
			"icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
			"id": 1,
			"is_solid": true,
			"text": "蜂鸟专送",
			"text_color": "FFFFFF"
		},
		"description": "",
		"distance": 1935,
		"favored": false,
		"flavors": [{
			"id": 240,
			"name": "奶茶果汁"
		}],
		"float_delivery_fee": 3.6,
		"float_minimum_order_amount": 20,
		"has_story": false,
		"id": "E10410989748831033005",
		"image_path": "cab81564a6d806cbc7c61878b19e17cepng",
		"is_new": false,
		"is_premium": true,
		"is_star": true,
		"is_stock_empty": 0,
		"is_valid": 1,
		"latitude": 30.549825,
		"longitude": 114.265153,
		"max_applied_quantity_per_order": -1,
		"name": "1点点(钟家村家乐福店)",
		"next_business_time": "明天 10:00",
		"only_use_poi": false,
		"opening_hours": ["10:00/22:00"],
		"order_lead_time": 31,
		"out_of_range": false,
		"phone": "027-65028259",
		"piecewise_agent_fee": {
			"description": "配送费¥3.6",
			"extra_fee": 0.1,
			"is_extra": true,
			"no_subsidy_fee": "",
			"rules": [{
				"fee": 3.6,
				"price": 20
			}],
			"tips": "配送费¥3.6"
		},
		"platform": 0,
		"posters": [],
		"promotion_info": "【公告】请右上角❤️收藏本店，非繁忙时段15分钟出餐。\n差评前请看本店售后处理原则：\n^_^骑手造成本店饮品破损一律重做。\n^_^缺吸管或者缺料一律补送。\n^_^饮品甜度不对或做错，本店一律重做。\n^_^饿了么送餐出错时老顾客本店优先自送。\n如有其他问题也请您致电65028259",
		"qualification": {
			"link": "https://h5.ele.me/shop/certification/#/?restaurant_id=E10410989748831033005"
		},
		"rating": 4.8,
		"rating_count": 350,
		"recent_order_num": 927,
		"recommend": {
			"color": "#e8470b",
			"image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
			"is_ad": false,
			"reason": "口碑人气好店"
		},
		"recommend_reasons": [{
			"name": "回头客多"
		}, {
			"name": "配送飞快"
		}],
		"regular_customer_count": 0,
		"scheme": "https://h5.ele.me/shop/#id=E10410989748831033005",
		"shop_sign": {
			"brand_story": "",
			"image_hash": ""
		},
		"status": 1,
		"support_tags": [{
			"border": "dddddd",
			"color": "666666",
			"icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
			"text": "奶茶果汁",
			"type": 1
		}],
		"supports": [{
			"border": "90dddddd",
			"description": "商家原因导致订单取消，赔付代金券",
			"icon_color": "999999",
			"icon_name": "赔",
			"id": 10,
			"name": "拒单赔",
			"text_color": "666666",
			"two_characters_icon_name": ""
		}, {
			"border": "90dddddd",
			"description": "该商户食品安全已由国泰产险承担，食品安全有保障",
			"icon_color": "999999",
			"icon_name": "保",
			"id": 7,
			"name": "食安保",
			"text_color": "666666",
			"two_characters_icon_name": "保险"
		}, {
			"border": "90dddddd",
			"description": "该商家支持开发票，请在下单时填写好发票抬头",
			"icon_color": "999999",
			"icon_name": "票",
			"id": 4,
			"name": "开发票",
			"text_color": "666666",
			"two_characters_icon_name": "发票"
		}],
		"target_tag_path": "d6a7283753e66cad4c4dc9a459d96a7fpng",
		"theme": {
			"default_color": "2395ff",
			"header_style": 3,
			"hongbao_style": 0,
			"price_color": "ff5339",
			"third_tab_name": "商家",
			"vanish_fields": []
		},
		"type": 0,
		"weight": {
			"basic": 20000,
			"maximum": 20000,
			"unit": 20000,
			"unit_fee": 20000
		}
	},
	"user": {
		"avatar": "",
		"balance": 0,
		"brand_member_new": 0,
		"column_desc": {
			"game_desc": "玩游戏领红包",
			"game_image_hash": "05f108ca4e0c543488799f0c7c708cb1jpeg",
			"game_is_show": 1,
			"game_link": "https://gamecenter.faas.ele.me",
			"gift_mall_desc": "0元好物在这里"
		},
		"current_address_id": 42805895,
		"current_invoice_id": 0,
		"delivery_card_expire_days": 0,
		"email": "",
		"gift_amount": 26,
		"id": 21595161,
		"is_active": 1,
		"is_email_valid": false,
		"is_mobile_valid": true,
		"mobile": "13517278406",
		"point": 1084,
		"real_point": 0,
		"supervip_status": 3,
		"user_id": 21682484,
		"username": "袋鼠小姐0"
	}
}